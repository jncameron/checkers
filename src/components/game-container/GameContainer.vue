<template>
	<div class="game" style="margin-left:auto;margin-right:auto;margin-top:100px;width: 1800px;">
		<div class="col-md-1 blank-col el"></div>
		<game-score-board class="col-md-2 el"
			:turn="turn"
			:player1Captures="player1Captures"
			:player2Captures="player2Captures"
			:user="user"
			:opponent="opponent"
			:player2="player2"
			:player1="player1"
			:message="message" 
			:info="info"
			style="height:630px;width:300px;border: inset #2d353c 10px;border-radius:10px"></game-score-board>
	<div class="col-md-1 blank-col"></div>
		<game-board class="col-md-5 el"
			:newGame="newGame"
			:gameStatus="gameStatus"
			:winner="winner"
			:draw="draw"
			:player2="player2"
			:player1="player1"
			:gameBoardTiles="gameBoardTiles"
			:turn="turn"
			style="padding:0px 0px;height:630px;width:630px;border: inset #2d353c 15px"></game-board>
	<div class="col-md-1 blank-col"></div>
		<game-chat :player2="player2" 
					:player1="player1" 
					:user="user"
					:opponent="opponent"
					class="col-md-2" 
					style="height:630px;width:300px;border: inset #2d353c 10px;border-radius:10px"></game-chat>

	</div>
</template>

<script>
import GameBoard from "./game/GameBoard.vue";
import GameScoreBoard from "./game/GameScoreBoard.vue";
import GameChat from "./game/chat/GameChat.vue";
import ChooseGame from './game/ChooseGame.vue';
import redPieces from '../../data/RedPlayerModel';
import user from '../../data/UserModel';
import player1 from '../../data/Player1Model';
import player2 from '../../data/Player2Model';
import gameBoardTiles from '../../data/GameBoardModel.js'


export default {
	props: {
		onlineUsers: {type: Object},
		newGame: {type: Object}
	},
  	components: {
    	"game-board": GameBoard,
    	"game-score-board": GameScoreBoard,
		"game-chat": GameChat,
		"choose-game": ChooseGame,

	},
	data() {
		return {
			gameStatus: "PLAYING",
			winner: "",
			draw: false,
			player1Captures: [],
			player2Captures: [],
			player1: player1,
			player2: player2,
			user: user,
			opponent: {},
			gameBoardTiles: gameBoardTiles,
			turn: "",
			info: "",
			message: "",
			gameStatus: "",
    	};
	},
	beforeCreate: function() {
		let id = window.location.href.slice(30)
			this.$http.post('http://localhost:3000/newgame/board', {
				id: id	})
				.then(response => {
					console.log(response);
					this.player1 = response.body.game.player1;
					this.player2 = response.body.game.player2;
					this.gameBoardTiles = response.body.game.tiles;
					this.turn = response.body.game.turn;
					if(this.user.name === this.player1.name){
						this.opponent = this.player2;
					} else if(this.user.name === this.player2.name) {
						this.opponent = this.player1;
					}
				}, error => {
				console.log(error);
			});
	},
	mounted: function() {
		let room = window.location.href.slice(30)
		socket.emit('joinroom', room);
		this.listenForBoardUpdates();
	}, 
	methods: {
		checkWinner() {
			if (this.redPieces.length === 0) {
				this.gameStatus = 'OVER'
				this.winner = this.player1.name;
			} else if (this.bluePieces.length === 0) {
				this.gameStatus = 'OVER'
				this.winner = this.player2.name;
			}

		},
		setPlayer1HasCaptured() {
			let player1Captures = this.player1Captures;
			player1Captures.length = 0;
			for(let piece in this.player2.pieces) {
				if(this.player2.pieces[piece] === 'CAPTURED') {
					console.log("PIECE " + piece)
					player1Captures.push(piece);
				}
			}
		},
		setPlayer2HasCaptured() {
			let player2Captures = this.player2Captures;
			player2Captures.length = 0;
			for(let piece in this.player1.pieces) {
				console.log("PIECE " + this.player1.pieces[piece])
				if(this.player1.pieces[piece] === 'CAPTURED') {
					player2Captures.push(piece);
				}
			}
		},
		setTurn(t) {
			this.turn = t;
		},
		setPlayer1(player) {
			this.player1 = player;
		},
		setPlayer2(player) {
			this.player2 = player;
		},
		setGameBoardTiles(tiles) {
			this.gameBoardTiles = tiles;
		},

		listenForBoardUpdates() {
			let setTurn = this.setTurn;
			let setGameBoardTiles = this.setGameBoardTiles;
			let setPlayer1 = this.setPlayer1;
			let setPlayer2 = this.setPlayer2;
			let setPlayer1HasCaptured = this.setPlayer1HasCaptured;
			let setPlayer2HasCaptured = this.setPlayer2HasCaptured;

			console.log("CLIENT SOCKET ID: " + socket.id)
            socket.on('gamedata', function(data) {
				console.log("CLIENT SOCKET ID: " + socket.id)
				setPlayer1(data.player1);
				setPlayer2(data.player2);
				setTurn(data.turn);
				setGameBoardTiles(data.tiles);
				setPlayer1HasCaptured();
				setPlayer2HasCaptured();

				
			});
		},

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



