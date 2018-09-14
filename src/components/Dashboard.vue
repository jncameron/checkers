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
                                    <svg id="signup-svg"></svg>
                                </div>
                            </div>
                            <div class="col-md-12 user-signins" style="margin: 0 0;">
                                <div id="signin-chart">
                                    <h3>User Signins</h3>
                                    <svg id="signin-svg"></svg>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6" style="margin: 0 0;" >
                            <div class="col-md-12 games-played" style="margin: 0 0;">
                                <div class="option">
                                    <h3 >Games Played</h3>
                                    <svg id="games-played-svg">
                                    </svg>
                                </div>
                            </div>
                            <div class="col-md-12 messages-sent" style="margin: 0 0;">
                                <div class="option">
                                    <h3>Chat Messages Sent</h3>
                                    <svg width="400" height="250">
                                        <g style="transform: translate(0, 10px)">
                                        <path :d="line" />
                                        </g>
                                    </svg>
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
export default {
    name: 'vue-line-chart',
    data() {
        return {
        data: [{signups: 25, time: 1}, 
                {signups: 6, time: 2},
                {signups: 43, time: 3},
                {signups: 87, time: 4},
                {signups: 12, time: 5},
                {signups: 14, time: 6},
                {signups: 32, time: 7}],
        line: '',
        createdGames: [],
        };
    },
  mounted() {

    this.getSignups();
    this.getSignins();
    this.getGamesPlayed();
  },
    methods: {

    getSignins() {
        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 350 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;

        // set the ranges
        var x = d3.scaleBand()
                .range([0, width])
                .padding(0.1);
        var y = d3.scaleLinear()
                .range([height, 0]);
                
        // append a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#signin-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");

        // get the data
        let data = this.data;

        // Scale the range of the data in the domains
        x.domain(data.map(function(d) { return d.time; }));
        y.domain([0, d3.max(data, function(d) { return d.signups; })]);

        // append the rectangles for the bar chart
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .style("fill", "#B71C1C")
            .attr("x", function(d) { return x(d.time); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.signups); })
            .attr("height", function(d) { return height - y(d.signups); });

        // add the x Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));


    },

    getSignups() {

        var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 350 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;

        // set the ranges
        var x = d3.scaleBand()
                .range([0, width])
                .padding(0.1);
        var y = d3.scaleLinear()
                .range([height, 0]);
                
        // append a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#signup-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");

        // get the data
        let data = this.data;

        // Scale the range of the data in the domains
        x.domain(data.map(function(d) { return d.time; }));
        y.domain([0, d3.max(data, function(d) { return d.signups; })]);

        // append the rectangles for the bar chart
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .style("fill", "#000")
            .attr("x", function(d) { return x(d.time); })
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.signups); })
            .attr("height", function(d) { return height - y(d.signups); });

        // add the x Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
    },
    getGamesPlayed() {
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = 350 - margin.left - margin.right,
            height = 250 - margin.top - margin.bottom;

        // parse the date / time
        var parseTime = d3.timeParse("%d-%b-%y");

        // set the ranges
        var x = d3.scaleLinear().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.time); })
            .y(function(d) { return y(d.signups); });

        // append the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("#games-played-svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")")
                

        // Get the data
        let data = this.data;

        // format the data

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.time; }));
        y.domain([0, d3.max(data, function(d) { return d.signups; })]);

        // Add the valueline path.
        svg.append("path")
            .data([data])
            .attr("class", "line")
            .attr("d", valueline)
            .style("stroke", "#4072a0");

        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add the Y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
        }
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
    stroke-width: 3px;
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
  /* background-color: rgba(0, 0, 0, .5); */
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
    background-image: /* tint image */
                    linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
                    /* checkered effect */
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
        width:500px;
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


