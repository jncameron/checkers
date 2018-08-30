<template>
    <div id="container">
        <div style="height:40px;padding-top:7px;background-color:#7f0000;color:#FFF">
            <h3 v-if="player1.color === 'red'" style="margin:0 0 0 0">{{ player1.name }}</h3>
            <h3 v-else style="margin:0 0 0 0">{{ player2.name }}</h3>
        </div>
        <div id="box">

            <div v-if="player1.color === 'red'" id="play-red">
                <player-one :player1="player1" style="height:80px;padding-top:12px;"></player-one>
                <div id="player-one-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-one-captures v-for="(piece,index) in player1Captures"
                        :color="'blue'" :transform='transformPiece(index)'>
                    </player-one-captures>
                </svg>
                </div>
            </div>

            <div v-else id="play-red">
                <player-two :player2="player2" style="height:80px;;padding-top:12px;"></player-two>
                <div id="player-two-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-two-captures v-for="(piece,index) in player2Captures"
                        :color="'blue'" :transform='transformPiece(index)'>
                    </player-two-captures>
                </svg>
                </div>

            </div>

            <div id="gameMessages">
                <h4 > {{ gameMessage }} </h4>
                <h4><strong> {{ turnMessage }}</strong></h4>
            </div>

            <div v-if="player2.color === 'blue'" id="play-blue">
                <div id="player-two-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-two-captures v-for="(piece,index) in player2Captures"
                        :color="'red'" :transform='transformPiece(index)'>
                        </player-two-captures>
                    </svg>
                </div>
              <player-two :player2="player2" style="height:80px;">
            </player-two>
            </div>
            <div v-else id="play-blue">
                <div id="player-one-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-one-captures v-for="(piece,index) in player1Captures"
                        :color="'red'" :transform='transformPiece(index)'>
                        </player-one-captures>
                    </svg>
                </div>
              <player-one :player1="player1" style="height:80px;">
            </player-one>
            </div>
        </div>

        <div style="height:40px;padding-top:5px;background-color:#34537c;color:#FFF">
            <h3 v-if="player2.color === 'blue'" style="margin:0 0 0 0">{{ player2.name }}</h3>
            <h3 v-else style="margin:0 0 0 0">{{ player1.name }}</h3>
        </div>
    </div>

</template>

<script>
import Player1 from "../players/Player1.vue";
import Player2 from "../players/Player2.vue";
import Player2Captures from "../players/Player2Captures";
import Player1Captures from "../players/Player1Captures";

export default {
  props: {
    turn: String,
    info: String,
    opponent: Object,
    user: Object,
    player1: Object,
    player2: Object,
    player1Captures: Array,
    player2Captures: Array,


  },
  data() {
    return {
      gameMessage: "Good Luck!",
      turnMessage: "",
      pieceX: [0, 24, 48, 72, 96, 120, 0, 24, 48, 72, 96, 120],
      pieceY: [0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 40],
      redCaptured:[],
      blueCaptured:[],
    };
  },

  	mounted: function() {
		this.listenForGameMessages();
	},
  components: {
    "player-two": Player2,
    "player-one": Player1,
    "player-two-captures": Player2Captures,
    "player-one-captures": Player1Captures
  },
  methods: {
    
    //move and turn info sent to opponent via socket
    listenForGameMessages() {
      let setGameMessage = this.setGameMessage;
      let setTurnMessage = this.setTurnMessage;
      socket.on('gamedata', function(data) {
        //TODO: game messages such as 'JOHN has Captured your Piece' etc.
        setGameMessage(data.captureMsg);
        setTurnMessage(data.turn);
      });
    },

    updateCaptured() {
      if(i[0] === 'r') {
        this.redCaptured.push(i)
      } else if(i[0] === 'b') {
        this.blueCaptured.push(i)
      }
    },

    transformPiece(i) {

      let x = this.pieceX[i];
      let y = this.pieceY[i];
      return `translate(${x},${y})`;
    },
    setGameMessage(message) {
      this.gameMessage = message;
    },
        setTurnMessage(message) {
      let turnMessage = this.turnMessage;
      if((message === this.player1.color && this.player1.name === this.user.name)
        || (message === this.player2.color && this.player2.name === this.user.name)) {
        this.turnMessage = `Your Move`;
      } else if (message !== this.player1.color && this.player1.name === this.user.name) {
        this.turnMessage = `${this.player2.name}'s Move`;
      } else if (message !== this.player2.color && this.player2.name === this.user.name) {
        this.turnMessage = `${this.player1.name}'s Move`;
      }

    },
  }
};
</script>

<style scoped>
p {
  margin-top: 5px;
  margin-bottom: 0;
  font-family: Roboto;
}

#box {
  background-color: #d3d3d3;
}

#player-two-captures {
  height: 95px;
  background-color: rgba(211,211,211,0.2);
  margin: 15px 0;
}

#play-blue {
  background-color: #4072a0;
}

#play-red {
  background-color: #b71c1c;
}

#player-one-captures {
  height: 95px;
  background-color: rgba(211,211,211,0.2);
  margin: 15px 0px;
}

#container {
  padding: 0 0;
}

#gameMessages {
  height: 120px;
  background-color: #d3d3d3;
  margin: 15px 0;
  padding: 10px 10px;
}
</style>


