<template>
    <div id="container">
        <div style="height:40px;padding-top:7px;background-color:#7f0000;color:#FFF">
            <h3 style="margin:0 0 0 0">{{ challengerName }}</h3>
        </div>
        <div id="box">
            <div id="chal">
                <challenger :name='challengerName' style="height:80px;"></challenger>
                <div id="challengerCaptures">
                <svg x="0" y="0" height="80" width="155">
                    <challenger-captures v-for="(piece,index) in bluePlayerCaptures"
                    :transform='transformPiece(index)'>

                    </challenger-captures>
                </svg>
                </div>
            </div>

            <div id="gameMessages">
                <p > {{ message }} </p>
                <p><strong> {{ info }}</strong></p>
            </div>
            <div id="player">
                <div id="playerCaptures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-one-captures v-for="(piece,index) in redPlayerCaptures"
                        :transform='transformPiece(index)'>

                        </player-one-captures>
                    </svg>
                </div>
                            <player-one :name='player1Name' style="height:80px;">
            </player-one>
            </div>


        </div>
        <div style="height:40px;padding-top:5px;background-color:#34537c;color:#FFF">
            <h3 style="margin:0 0 0 0" :turn='turn'> {{ player1Name }}</h3>
        </div>
    </div>

</template>

<script>
import Player1 from "../players/Player1.vue";
import Challenger from "../players/Challenger.vue";
import ChallengerCaptures from "../players/ChallengerCaptures";
import Player1Captures from "../players/Player1Captures";
import bluePieces from "../../../data/BluePlayerModel";
import redPieces from "../../../data/RedPlayerModel";

export default {
  props: [
    "turn",
    "bluePlayerCaptures",
    "redPlayerCaptures",
    "message",
    "info",
    "player1Name",
    "challengerName"
  ],
  data() {
    return {
      bluePieces: bluePieces,

      redPieces: redPieces,

      pieceX: [0, 24, 48, 72, 96, 120, 0, 24, 48, 72, 96, 120],
      pieceY: [0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 40]
    };
  },
  components: {
    Challenger,
    "player-one": Player1,
    "challenger-captures": ChallengerCaptures,
    "player-one-captures": Player1Captures
  },
  methods: {
    turnMessage(t) {
      if (t === "blue") {
        return this.player1Name + "'s Turn";
      } else {
        return this.challengerName + "'s Turn";
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

#challengerCaptures {
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

#playerCaptures {
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


