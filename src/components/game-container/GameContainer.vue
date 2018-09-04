<template>
	<div class="game">
		<div class="col-md-1 blank-col el"></div>
		<game-score-board class="col-md-2 el game-score-board"
			:turn="turn"
			:player1Captures="player1Captures"
			:player2Captures="player2Captures"
			:user="user"
			:opponent="opponent"
			:player2="player2"
			:player1="player1"
			:gameStatus="gameStatus"
			:message="message" 
			:info="info"
			></game-score-board>
	<div class="col-md-1 blank-col"></div>
		<game-board class="col-md-5 el game-board"
			:newGame="newGame"
			:gameStatus="gameStatus"
			:winnerName="winnerName"
			:draw="draw"
			:player2="player2"
			:player1="player1"
			:user="user"
			:gameBoardTiles="gameBoardTiles"
			:turn="turn"
			></game-board>
	<div class="col-md-1 blank-col"></div>
		<game-chat v-if="player1.name !== 'Player 2'
					&& player2.name !== 'Player 2'"
					:player2="player2" 
					:player1="player1" 
					:user="user"
					:opponent="opponent"
					class="col-md-2 game-chat" 
					></game-chat>

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
const baseUrl = process.env.BASE_URL;


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
		//Game Container holds most of the game logic - passing props to child components 'GameScoreBoard',
		//  GameBoard, and GameChat
		return {
			gameStatus: "PLAYING",
			winnerId: "",
			winnerName: "",
			loserId: "",
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
		};
	},
	beforeCreate: function() {
		let url = window.location.href;
		let room = url.split('game/').pop();
		socket.emit('joinroom', room);
		console.log("join Room " + room)
	},
	mounted: function() {
		//Request initial game state on game created (or page refresh)
		if(this.player2.name !== 'Computer' ) {
			let url = window.location.href;
			let id = url.split('game/').pop();
			console.log("NEW ID " + id)
			let room = url.split('game/').pop();
			socket.emit('joinroom', room);
			console.log("join Room " + room)
			if(this.player1.name !== this.user.name) {
				this.$http.post(`${baseUrl}newgame/board`, {
					id: id	})
					.then(response => {
						console.log(response);
						this.player1 = response.body.game.player1;
						this.player2 = response.body.game.player2;
						this.gameBoardTiles = response.body.game.tiles;
						this.turn = response.body.game.turn;
						this.gameStatus = response.body.game.gameStatus;
						console.log("GETTING OPPONENT")
						this.opponent = this.player1;
					}, error => {
					console.log(error);
				});
			} else {
			this.opponent = this.player2;
			this.turn = 'red';
			};

		} else {
			this.turn = 'red';
		}
		this.listenForBoardUpdates();
	}, 
	methods: {
		//after any piece is captured, check if either player has 12 captures
		checkWinner() {
			let url = window.location.href;
			let gameId = url.split('game/').pop();
			let setGameStatus = this.setGameStatus;
			let setWinner = this.setWinner;
			let winnerId = this.winnerId;
			let winnerName = this.winnerName;
			let loserId = this.loserId

			if (this.player1Captures.length === 12) {
				setGameStatus('OVER');
				winnerId = this.player1.id;
				loserId = this.player2.id;
				winnerName = this.player1.name;
				setWinner(winnerName);
			} else if (this.player2Captures.length === 12) {
				setGameStatus('OVER');
				winnerId = this.player2.id;
				loserId = this.player1.id;
				winnerName = this.player2.name;
				setWinner(winnerName);
			}

			//post winner and loser info to game db collection and user db collection(for win/loss stats)
			if(this.user.id === winnerId && this.user.id.length > 0) {
					this.$http.post(`${baseUrl}newgame/winner`, {
					gameId: gameId,
					loserId: loserId,
					winnerId: winnerId	
				}).then(response => {
					console.log(response)
				}, error => {
					console.log(error);
			});
			}
		},
		setPlayer1HasCaptured() {
			let player1Captures = this.player1Captures;
			player1Captures.length = 0;
			for(let piece in this.player2.pieces) {
				if(this.player2.pieces[piece] === 'CAPTURED') {
					player1Captures.push(piece);
				}
			}
			this.checkWinner();
		},
		setPlayer2HasCaptured() {
			let player2Captures = this.player2Captures;
			player2Captures.length = 0;
			for(let piece in this.player1.pieces) {
				if(this.player1.pieces[piece] === 'CAPTURED') {
					player2Captures.push(piece);
				}
			}
			this.checkWinner();

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
		setGameStatus(status) {
			this.gameStatus = status;
		},
		setWinner(win) {
			this.winnerName = win;
		},
		//board state sent to other player via socket
		listenForBoardUpdates() {
			console.log("LISTENING FOR BOARD")
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

.blank-col {
	width: 0px;
	padding: 0 0;
}
.game-score-board {
	height:500px;
	width:300px;
	border: inset #2d353c 10px;
	border-radius:10px
}
.game-board {
	padding:0px 0px;
	height:500px;
	width:500px;
	border: inset #2d353c 15px
}
.game-chat {
	height:500px;
	width:300px;
	border: inset #2d353c 10px;
	border-radius:10px;
}

#game {
	transform: translate(-50%, -50%);
	position: absolute;
}
.game {
	margin-left:auto;
	margin-right:auto;
	margin-top:40px;
	width: 1800px;
}



@media only screen and (min-height: 800px) {
	.game-score-board {
		height:630px;
		width:300px;
		border: inset #2d353c 10px;
		border-radius:10px
	}
	.game-board {
		padding:0px 0px;
		height:630px;
		width:630px;
		border: inset #2d353c 15px
	}
	.game-chat {
		height:630px;
		width:300px;
		border: inset #2d353c 10px;
		border-radius:10px;
	}
	.game {
		margin-top:80px;
	}
}

@media (min-width: 1150px) {
	.blank-col {
		width: 5px;
		padding: 0 0;
	}
}

@media (min-width: 1200px) {
	.blank-col {
		width: 20px;
		padding: 20px 0;
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
 


