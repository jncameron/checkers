<template>
    <div id="container">
        <div style="height:40px;padding-top:7px;background-color:#7f0000;color:#FFF">
            <h3 v-if="player1.pieces.red1" style="margin:0 0 0 0">{{ player1.name }}</h3>
            <h3 v-else style="margin:0 0 0 0">{{ player2.name }}</h3>
        </div>
        <div id="box">
            <div v-if="player1.pieces.red1" id="play-red">
                <player-one :player-one="player-one" style="height:80px;padding-top:12px;"></player-one>
                <div id="player-one-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-one-captures v-for="(piece,index) in bluePlayerCaptures"
                    :transform='transformPiece(index)'>
                    </player-one-captures>
                </svg>
                </div>
            </div>
            <div v-else id="play-red">
                <player-two :player-two="player-two" style="height:80px;"></player-two>
                <div id="player-two-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-two-captures v-for="(piece,index) in redPlayerCaptures"
                    :transform='transformPiece(index)'>
                    </player-two-captures>
                </svg>
                </div>
            </div>

            <div id="gameMessages">
                <p > {{ message }} </p>
                <p><strong> {{ info }}</strong></p>
            </div>
            <div v-if="player2.pieces.blue1" id="play-blue">
                <div id="player-two-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-two-captures v-for="(piece,index) in redPlayerCaptures"
                        :transform='transformPiece(index)'>
                        </player-two-captures>
                    </svg>
                </div>
              <player-one :player-one="player-one" style="height:80px;">
            </player-one>
            </div>
            <div v-else id="play-blue">
                <div id="player-one-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-one-captures v-for="(piece,index) in bluePlayerCaptures"
                        :transform='transformPiece(index)'>
                        </player-one-captures>
                    </svg>
                </div>
              <player-one :player-one="player-one" style="height:80px;">
            </player-one>
            </div>
        </div>
        <div style="height:40px;padding-top:5px;background-color:#34537c;color:#FFF">
            <h3 v-if="player2.pieces.blue1" style="margin:0 0 0 0">{{ player2.name }}</h3>
            <h3 v-else style="margin:0 0 0 0">{{ player1.name }}</h3>
        </div>
    </div>

</template>

<script>
import Player1 from "../players/Player1.vue";
import Player2 from "../players/Player2.vue";
import Player2Captures from "../players/Player2Captures";
import Player1Captures from "../players/Player1Captures";
import bluePieces from "../../../data/BluePlayerModel";
import redPieces from "../../../data/RedPlayerModel";

export default {
  props: {
    turn: String,
    bluePlayerCaptures: Array,
    redPlayerCaptures: Array,
    message: String,
    info: String,
    user: Object,
    player1: Object,
    player2: Object,

  },
  data() {
    return {
      bluePieces: bluePieces,

      redPieces: redPieces,

      pieceX: [0, 24, 48, 72, 96, 120, 0, 24, 48, 72, 96, 120],
      pieceY: [0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 40]
    };
  },
  beforeCreate: function() {
		let id = window.location.href.slice(30)
			console.log("Getting initial Board, id: " + id)
			this.$http.post('http://localhost:3000/newgame/board', {
				id: id	})
				.then(response => {
					console.log(response);
					this.player1 = response.body.game.player1;
					this.player2 = response.body.game.player2;
					this.turn = response.body.game.turn;
				}, error => {
				console.log(error);
			});
	},
  components: {
    "player-two": Player2,
    "player-one": Player1,
    "player-two-captures": Player2Captures,
    "player-one-captures": Player1Captures
  },
  methods: {
    turnMessage(t) {
      if (t === "blue") {
        return this.player1.name + "'s Turn";
      } else {
        return this.player2.name + "'s Turn";
      }
    },
    transformPiece(i) {
      let x = this.pieceX[i];
      let y = this.pieceY[i];
      return `translate(${x},${y})`;
    }
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
  background-color: dimgray;
  margin: 15px 0;
}
</style>


