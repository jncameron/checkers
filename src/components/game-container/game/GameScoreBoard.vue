<template>
    <div id="container">

        <div class="box">
            <div class="red-player-name">
                <h3 v-if="player1.color === 'red'" style="margin:0 0 0 0">{{ player1.name }}</h3>
                <h3 v-else style="margin:0 0 0 0">{{ player2.name }}</h3>
            </div>
            <div v-if="player1.color === 'red'" id="play-red">
                <player-one :player1="player1" class="player-one"></player-one>
                <div v-if="windowHeight > 540" id="player-one-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-one-captures v-for="(piece,index) in player1Captures"
                        :key="index"
                        :color="'blue'" :transform='transformPiece(index)'>
                    </player-one-captures>
                </svg>
                </div>
            </div>

            <div v-else id="play-red">
                <player-two :player2="player2" class="player-two"></player-two>
                <div v-if="windowHeight > 540" id="player-two-captures">
                <svg x="0" y="0" height="80" width="155">
                    <player-two-captures v-for="(piece,index) in player2Captures"
                        :key="index"
                        :color="'blue'" :transform='transformPiece(index)'>
                    </player-two-captures>
                </svg>
                </div>

            </div>

            <div id="gameMessages">
                <div>
                    <h4 > {{ gameMessage }} </h4>
                </div>
                <div>
                    <h3><strong> {{ turnMessage }}</strong></h3>
                </div>
                
            </div>

            <div v-if="player2.color === 'blue'" id="play-blue">
                <div v-if="windowHeight > 540" id="player-two-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-two-captures v-for="(piece,index) in player2Captures"
                        :key="index"
                        :color="'red'" :transform='transformPiece(index)'>
                        </player-two-captures>
                    </svg>
                </div>
              <player-two :player2="player2" class="player-two">
            </player-two>
            </div>
            <div v-else id="play-blue">
                <div v-if="windowHeight > 540" id="player-one-captures">
                    <svg x="0" y="0" height="80" width="155">
                        <player-one-captures v-for="(piece,index) in player1Captures"
                        :key="index"
                        :color="'red'" :transform='transformPiece(index)'>
                        </player-one-captures>
                    </svg>
                </div>
              <player-one :player1="player1" class="player-one">
            </player-one>
            </div>
            <div class="blue-player-name">
                <h3 v-if="player2.color === 'blue'" style="margin:0 0 0 0">{{ player2.name }}</h3>
                <h3 v-else style="margin:0 0 0 0">{{ player1.name }}</h3>
            </div>
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
    gameStatus: String,
    opponent: Object,
    user: Object,
    player1: Object,
    player2: Object,
    player1Captures: Array,
    player2Captures: Array,


  },
  watch: {

  },
	data() {
		return {
		gameMessage: "Good Luck!",
		turnMessage: "",
		pieceX: [0, 24, 48, 72, 96, 120, 0, 24, 48, 72, 96, 120],
		pieceY: [0, 0, 0, 0, 0, 0, 40, 40, 40, 40, 40, 40],
		redCaptured:[],
        blueCaptured:[],
        windowHeight: window.innerHeight,
		};
	},


	components: {
		"player-two": Player2,
		"player-one": Player1,
		"player-two-captures": Player2Captures,
		"player-one-captures": Player1Captures
    },
    watch: {
        gameMessage: function(newValue) {
            if(newValue === 'OVER') {
                this.setGameMessage('GAME OVER')
            }
        },
        windowHeight(newHeight, oldHeight) {
        console.log("hi " + newHeight)
        }
    },
    mounted() {
        this.listenForGameMessages();
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.windowHeight = window.innerHeight;
            });
        })
	},
	methods: {
		
        //move and turn info sent to opponent via socket
        listenForGameMessages() {
            let setGameMessage = this.setGameMessage;
            let setTurnMessage = this.setTurnMessage;
            socket.on('gamedata', function(data) {
                //TODO: game messages such as 'JOHN has Captured your Piece' etc.
                setGameMessage(data.gameMessage);
                setTurnMessage(data.turn);
            });
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
.player-one,
.player-two {
    height: 0%;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
}
h4 {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 0;
}
h3 {
    font-size: 16px;
    margin: 0 0;
}

.box {
    background-color: #d3d3d3;
    width: 100%;
}
.red-player-name {
    height:7%;
    background-color:#7f0000;
    color:#FFF;
    padding-top: 2px;
}
.blue-player-name {
    height:7%;
    background-color:#34537c;
    color:#FFF;
    padding-top: 2px;

}


#player-two-captures {
	background-color: rgba(211,211,211,0.2);
	margin: 0px 0;
    height: 0px;
}

#play-blue {
    background-color: #4072a0;
}

#play-red {
    background-color: #b71c1c;
}

#player-one-captures {
	background-color: rgba(211,211,211,0.2);
	margin: 0px 0px;
    height: 0px;
}

#container {
	padding: 0 0;
}

#gameMessages {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85px;
	height: 13%;
	background-color: #d3d3d3;
	margin: 15px 0;
    flex-direction: column;
}

@media only screen and (min-height: 540px) {
    #player-one-captures,
    #player-two-captures {
        height: 85px;
    }
    .player-one,
    .player-two {
        padding-top: 1%;
        padding-bottom: 1%;
    }
}

@media only screen and (min-height: 840px) {
    #player-one-captures,
    #player-two-captures {
        height: 105px;
    }
    .player-one,
    .player-two {
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .red-player-name,
    .blue-player-name {
        padding-top: 5px;
        padding-bottom: 5px;
    }
    #gameMessages {
        height: 16.1%
    }
}
</style>


