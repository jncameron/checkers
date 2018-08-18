<template>
    <div id="container">
        <div style="height:40px;padding-top:7px;background-color:#7f0000;color:#FFF">
            <h3 style="margin:0 0 0 0">{{ player2.name }}</h3>
        </div>
        <div id="box">
            <div id="chal">
                <player-two :player-two="player-two" style="height:80px;"></player-two>
                <div id="player-two-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-two-captures v-for="(piece,index) in bluePlayerCaptures"
                    :transform='transformPiece(index)'>

                    </player-two-captures>
                </svg>
                </div>
            </div>

            <div id="gameMessages">
                <p > {{ message }} </p>
                <p><strong> {{ info }}</strong></p>
            </div>
            <div id="player">
                <div id="player-one-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-one-captures v-for="(piece,index) in redPlayerCaptures"
                        :transform='transformPiece(index)'>
                        </player-one-captures>
                    </svg>
                </div>
              <player-one :player-one="player-one" style="height:80px;">
            </player-one>
            </div>
        </div>
        <div style="height:40px;padding-top:5px;background-color:#34537c;color:#FFF">
            <h3 style="margin:0 0 0 0" :turn='turn'> {{ user.name }}</h3>
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

#player {
  background-color: #4072a0;
}

#chal {
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


