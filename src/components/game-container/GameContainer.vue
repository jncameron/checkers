<template>
	<div class="game" style="margin-left:auto;margin-right:auto;margin-top:100px;width: 1800px;">
		<div class="col-md-1 blank-col el"></div>
		<game-score-board class="col-md-2 el"
			:turn="turn"
			:bluePlayerCaptures="bluePlayerCaptures"
			:redPlayerCaptures="redPlayerCaptures"
			:user="user"
			:challenger="challenger" 
			:message="message" 
			:info="info"
			style="height:630px;width:300px;border: inset #2d353c 10px;border-radius:10px"></game-score-board>
	<div class="col-md-1 blank-col"></div>
		<game-board class="col-md-5 el"
			:gameStatus="gameStatus"
			:winner="winner"
			:draw="draw"
			@turn="whoseTurn($event)"
			@redPiecesRemaining="redPiecesRemaining($event)"
			@bluePiecesRemaining="bluePiecesRemaining($event)"
			style="padding:0px 0px;height:630px;width:630px;border: inset #2d353c 15px"></game-board>
	<div class="col-md-1 blank-col"></div>
		<game-chat :user="user" :challenger="challenger" class="col-md-2" style="height:630px;width:300px;border: inset #2d353c 10px;border-radius:10px"></game-chat>

	</div>
</template>

<script>
import GameBoard from "./game/GameBoard.vue";
import GameScoreBoard from "./game/GameScoreBoard.vue";
import GameChat from "./game/chat/GameChat.vue";
import ChooseGame from './game/ChooseGame.vue';
import PlayersOnline from './game/PlayersOnline.vue';
import redPieces from '../../data/RedPlayerModel';

export default {
	props: {
		user: {type: Object},
		challenger: {type: Object},
		onlineUsers: {type: Object}
	},
  	components: {
    	"game-board": GameBoard,
    	"game-score-board": GameScoreBoard,
		"game-chat": GameChat,
		"choose-game": ChooseGame,
		"players-online": PlayersOnline
	},
	data() {
		return {
			gameStatus: "PLAYING",
			winner: "",
			draw: false,
			redPieces: ['red1','red2','red3','red4','red5','red6','red7','red8','red9','red10','red11','red12'],
			bluePieces: ['blue1','blue2','blue3','blue4','blue5','blue6','blue7','blue8','blue9','blue10','blue11','blue12'],
			redPlayerCaptures: [],
			bluePlayerCaptures: [],
			turn: "",
			info: "",
			message: "",
			gameStatus: "",
      		posts: {} ,
    	};
  	},
	methods: {
		checkWinner() {
			if (this.redPieces.length === 0) {
				this.gameStatus = 'OVER'
				this.winner = this.user.name;
			} else if (this.bluePieces.length === 0) {
				this.gameStatus = 'OVER'
				this.winner = this.challenger.name;
			}
			this.fetchPlayer();
		},
		redPiecesRemaining(pieces) {
			this.redPieces = pieces;
			this.bluePlayerHasCaptured();
			this.checkWinner();
		},
		bluePiecesRemaining(pieces) {
			this.bluePieces = pieces;
			this.redPlayerHasCaptured();
			this.checkWinner();
		},
		redPlayerHasCaptured() {
			
			console.log("REMAINING ")
			this.redPlayerCaptures.length = 12 - this.bluePieces.length;
 
		},
		bluePlayerHasCaptured() {
			this.bluePlayerCaptures.length = 12 - this.redPieces.length;
		},
		whoseTurn(t) {
			this.turn = t;
			this.fetchPlayer();
			this.sendMove();
		},
		fetchData() {
			this.$http.get('http://localhost:3000/user/signup')
				.then(response => {
					return response.json();	
				}).then(data => console.log("DATA: " + JSON.stringify(data)));
		},
		fetchPlayer() {
			this.$http.get('http://localhost:3000/profile')
				.then(response => {
					return response.json();	
				}).then(data => console.log("DATA: " + JSON.stringify(data)));
		},
		sendMove() {
			this.$http.post('http://localhost:3000/user/signup', {title: "John", content: this.turn})
					.then(response => {
						console.log(response);
					}, error => {
						console.log(error);
					});
		}
	}
};
</script>

<style scoped>

	#game{
		transform: translate(-50%, -50%);
		position: absolute;
	}

	@media (min-width: 600px) {
		.blank-col {
			width: 10px
		}
	}

	@media (min-width: 1500px) {
		.blank-col {
			width: 60px;
		}
	}
	@media (min-width: 1650px) {
		.blank-col {
			width: 140px;
		}
	}
</style>



