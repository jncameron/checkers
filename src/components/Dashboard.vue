<template>
  <div id="choose-game">
    <transition name="modal">
      <div class="container">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="col-md-6" style="margin: 0 0;">
                <div class="col-md-12 user-signups" >
                  <div class="option" id="signup-chart">
                    <h3>User Signups</h3>
                    <h4>This week</h4>
                    <svg id="signup-svg"></svg>
                  </div>
                </div>
                <div class="col-md-12 user-signins" style="margin: 0 0;">
                  <div id="signin">
                    <h3>Users Signed In</h3>
                    <h1 id="users-signed-in"></h1>
                  </div>
                </div>
            </div>
              <div class="col-md-6" style="margin: 0 0;" >
                <div class="col-md-12 games-played" style="margin: 0 0;">
                  <div class="option">
                    <h3 >Games Played</h3>
                    <h4>This week</h4>
                    <svg id="games-played-svg">
                    </svg>
                  </div>
                </div>
                <div class="col-md-12 messages-sent" style="margin: 0 0;">
                  <div class="option">
                    <h3>Total Games Played</h3>
                    <h1 id="total-games-played"></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </transition>
  </div>
    
</template>

<script>
import * as d3 from 'd3';
import onlineUsers from '../data/OnlineUsers';
export default {
    props: { 
      onlineUsers: {type: Array}
    },
    data() {
      return {
        gameData: [0,0,0,0,0,0,0],
        numGamesPlayed: 0,
        userData: [0,0,0,0,0,0,0],
      line: '',
      };
    },
  mounted() {
    this.getGameData();
    this.getUserData();
  },
  	watch: {
		onlineUsers: function() {
      console.log(onlineUsers.length)
      this.getSignins();
      this.getTotalGamesPlayed();
		}
	},
    methods: {
      setGameData(d) {
        this.numGamesPlayed = d.length;
        let now = new Date();
        let day = now.getDay();
        let aWeekAgo = now - 604800000;
        let week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        d.forEach(el => {
          let date = new Date(el)
          for (let d in week) {
            if (date.getDay() == d && date > aWeekAgo ) {
              this.gameData[d] += 1;
            }
          }
        })
      },
      getGameData() {
        let setGameData = this.setGameData;
        let getGamesPlayed = this.getGamesPlayed;
        this.$http.get('/newgame/gamestats')
        .then(response => {
          setGameData(response.body.games);
        }, error => {
          console.log(error);
        }).then(response => {
          getGamesPlayed();
          this.getTotalGamesPlayed();
        })
      },
      setUserData(d) {
        let now = new Date();
        let aWeekAgo = now - 604800000;
        let day = now.getDay();
        let week = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        d.forEach(el => {
          let date = new Date(el)
          for (let d in week) {
            if (date.getDay() == d && date > aWeekAgo ) {
              this.userData[d] += 1;
            }
          }
        })
      },
      getUserData() {
          let setUserData = this.setUserData;
          this.$http.get('/user/userstats')
          .then(response => {
              setUserData(response.body.users);
          }, error => {
              console.log(error);
          }).then(response => {
              this.getSignups();
              this.getSignins();
          })
      },
      getSignups() {
          let margin = {top: 20, right: 20, bottom: 30, left: 40},
              width = 350 - margin.left - margin.right,
              height = 250 - margin.top - margin.bottom;
          let x = d3.scaleBand()
              .range([1, width])
              .padding(0.1);
          let y = d3.scaleLinear()
              .range([height, 0]);
                  
          let week = ['Su','M', 'Tu', 'W', 'Th', 'F', 'Sa']
          
          let svg = d3.select("#signup-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");
          let data = this.userData;
          x.domain(data.map(function(d,i) { return i; }));
          y.domain([0, d3.max(data, function(d) { return d; })]);
          svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .style("fill", "#000")
            .attr("x", function(d,i) { return x(i); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d); })
            .attr("height", function(d) { return height - y(d); });
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSize(10).tickFormat((d,i) => week[i]));
          svg.append("g")
            .call(d3.axisLeft(y).tickSize(10).tickFormat((d,i) => i).ticks(Math.max(...data)))
      },

      getSignins() {

          let onlineUsers = this.onlineUsers;
          let signinNumber = d3.select("#users-signed-in");
          signinNumber.text(onlineUsers.length)
          .style("color","#4072a0")
          .style("margin-top","120px")
          .style("font-size","68px")

      },

      getGamesPlayed() {
          let margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 350 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;


          // set the ranges
          let x = d3.scaleLinear().range([0, width]);
          let y = d3.scaleLinear().range([height, 0]);

          // define the line
          let valueline = d3.line()
            .x(function(d,i) { return x(i); })
            .y(function(d) { return y(d); });

          let week = ['Su','M', 'Tu', 'W', 'Th', 'F', 'Sa']

          let svg = d3.select("#games-played-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")")
                  
          let data = this.gameData;
          x.domain([0, d3.max(data, function(d,i) { return i; })]);
          y.domain([0, d3.max(data, function(d) { return d; })]);

          // Add the valueline path.
          svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", valueline)
            .style("stroke", "#B71c1c")
            .style("stroke-width", "5px")

          // Add the X Axis
          svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).tickSize(10).ticks(7).tickFormat((d,i) => week[i]));

          // Add the Y Axis
          svg.append("g")
            .call(d3.axisLeft(y).tickSize(10).tickFormat((d,i) => i).ticks(Math.max(...data)))
      },
      getTotalGamesPlayed() {
          let totalGamesPlayed = d3.select("#total-games-played");
          totalGamesPlayed.text(this.numGamesPlayed)
            .style("color","#000")
            .style("margin-top","120px")
            .style("font-size","68px")
      },
    }
        
}


</script>

<style scoped>
svg {
  margin: 25px;
}
path {
  fill: none;
  stroke: #76BF8A;
  stroke-width: 8px;
}

.container {
    background-color: #000;
  position: absolute;
  z-index: 9996;
  top: 40px;
  padding: 0px 15px;
    
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height:80%;
  width: 100%;
  margin: auto;
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  transition: all .3s ease;
  font-family: 'Audiowide', cursive;

}

.col-md-6 {
  height: 100%;
  width: 100%;
  margin: 0 0;
  padding: 0 0;
}

.col-md-12 {
  color: #FFF;
  justify-content: center;
  align-items: center;

}
h2{
  margin-top: 10px;
}

.reg-button {
  color:#FFF;
  background: #B71C1C;
  border: 2px solid #7f0000;
  border-radius: 6px;
  font-family: 'Audiowide';
  font-size: 18px;
  width: 80%;
}

.reg-button:hover {
  background-color: #7f0000;
  color: #FFF;
}
.reg-button:focus{
  outline: none;
}


.option:active {
  opacity: 0.5;
}
.messages-sent,
.user-signups {
  background-color: #B71C1C;
  height: 150px;
  margin: 0 0;
  border: #000 solid 3px;

}


.user-signins,
.games-played {
  height: 150px;
  margin: 0 0;
  background-color: #4072a0;
  border: #000 solid 3px;
}
.messages-sent{
  background-color: #4072a0;
}

.player-box {
  height:40px;
  width: 90%;
  margin-top:10px;
  border-bottom: 2px solid #000;

}
.play-button {
  color:#FFF;
  background: #4072a0;
  border: 2px solid #34537c;
  border-radius: 6px;
  font-family: 'Audiowide';
  font-size: 18px;

}

.play-button:focus{
  outline: none;
}

.continue:hover {
  background-position: center;
  background-repeat: no-repeat;

}
#button {

  -webkit-appearance: none;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  transform: scale(1.1);
}

@media (min-width: 500px) {
    .container {
        top: 40px;
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
      linear-gradient(to right, rgba(64,114,160) 50%, #d3d3d3 50%),
      linear-gradient(to bottom, rgba(64,114,160) 50%, #d3d3d3 50%);
    background-blend-mode: normal, difference, normal;
    background-size: 320px 320px;
    }
    .modal-container {
      background-color: #000;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      display: flex;
    }
    .blanks {
      width:100%;
      height:50%
    }
    .modal-container {
      display: flex;
      width: 1000px;
    }
    .col-md-12 {
      width:490px;
    }
    .col-md-6 {
      width: 50%;
    }
    .user-signins,
    .games-played {
      min-height: 150px;
      height: 50%;
      background-color: #000;
    }
    .user-signups,
    .messages-sent {
      min-height: 150px;
      height: 50%;
    }
}

</style>


