<template>
	<div class="game">
		<div v-bind:class="blankCol"></div>
		<game-score-board v-if="windowWidth > 500" class="col-md-2 game-score-board"
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
	<div v-bind:class="blankCol"></div>
		<game-board class="col-md-5 game-board"
			:newGame="newGame"
			:gameStatus="gameStatus"
			:winnerName="winnerName"
			:draw="draw"
			:player2="player2"
			:player1="player1"
			:user="user"
			:gameBoardTiles="gameBoardTiles"
			:turn="turn"
			:showTileNumbers="showTileNumbers"
			:rulesString="rulesString"
			></game-board>
	<div v-bind:class="blankCol"></div>
		<game-chat v-if=" windowWidth > 500 
			&& this.player2.name !== 'Computer' 
			&& this.player2.name !== 'Player 2'"
					:player2="player2" 
					:player1="player1" 
					:user="user"
					:opponent="opponent"
					:showTileNumbers="showTileNumbers"
					:rulesString="rulesString"
					class="col-md-2 game-chat"
					@requestTileNumbers="setShowTileNumbers($event)"
					></game-chat>

	</div>
</template>

<script>
import GameBoard from "./game/GameBoard.vue";
import GameScoreBoard from "./game/GameScoreBoard.vue";
import GameChat from "./game/chat/GameChat.vue";
import ChooseGame from './game/ChooseGame.vue';
import redPieces from '../../data/RedPlayerModel';
// import user from '../../data/UserModel';
import player1 from '../../data/Player1Model';
import player2 from '../../data/Player2Model';
import gameBoardTiles from '../../data/GameBoardModel.js'
const baseUrl = process.env.BASE_URL;


export default {
	props: {
		onlineUsers: {type: Object},
		newGame: {type: Object},
		user: {type: Object}
	},
	components: {
		"game-board": GameBoard,
		"game-score-board": GameScoreBoard,
		"game-chat": GameChat,
		"choose-game": ChooseGame,

	},
	watch: {
		windowWidth(newWidth, oldWidth) {
        console.log("hi " + newWidth)
        }
	},

	data() {
		//Game Container holds most of the game logic - passing props to child components 'GameScoreBoard',
		//  GameBoard, and GameChat
		return {
			gameStatus: "START",
			winnerId: "",
			winnerName: "",
			loserId: "",
			draw: false,
			player1Captures: [],
			player2Captures: [],
			player1: player1,
			player2: player2,
			// user: user,
			opponent: {},
			gameBoardTiles: gameBoardTiles,
			turn: "",
			info: "",
			message: "",
			windowWidth: window.innerWidth,
			showTileNumbers: false,
			rulesString: `Uncrowned pieces step diagonally forwards
					An opponent's piece is captured by jumping over the piece in the same line,
					After a jump, if another jump is available, the piece jumps again,
					When a piece reaches the other end of the board, it is crowned
					Crowned pieces can move diagonally forwards or backwards
                	If a jump is available, you MUST jump`
		};
	},
	beforeCreate: function() {
		let url = window.location.href;
		let room = url.split('game/').pop();
		socket.emit('joinroom', room);
		console.log("join Room " + room)
	},
	computed: {
		blankCol() {
			if(this.player2.name === 'Computer' || this.player2.name === 'Player 2') {
				return 'large-blank-col'
			}
			else {
				return 'small-blank-col'
			}
		}
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
			}

		} else {
			this.turn = 'red';
		}
		this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth;
            });
        })
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
				winnerId = this.player1._id;
				loserId = this.player2._id;
				winnerName = this.player1.name;
				setWinner(winnerName);
			} else if (this.player2Captures.length === 12) {
				setGameStatus('OVER');
				winnerId = this.player2._id;
				loserId = this.player1._id;
				winnerName = this.player2.name;
				setWinner(winnerName);
			}

			//post winner and loser info to game db collection and user db collection(for win/loss stats)
			if(this.user._id === winnerId && this.user._id.length > 0) {
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
		setBlankCol(value) {
			this.blankCol = value;
		},
		setShowTileNumbers(tf) {
			this.showTileNumbers = tf;
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
	height:85vw;
	width:200px;
}
.game-board {
	padding:0px 0px;
	height:100vw;
	width:100vw;
	border: inset #2d353c 15px
}
.game-chat {
	height:85vw;
	width:200px;
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
}
.small-blank-col {
	width:30px;
}
.large-blank-col {
	width:70px;
}

@media (min-height: 200px) and (min-width: 500px) {
	.game {
		margin-top: 0;
		display: inline-flex;

	}
	.game-board {
		margin-left:auto;
		margin-right:auto;
		height: 300px;
		width: 300px;
	}
	.game-score-board {
		height: 300px;
		border: inset #2d353c 10px;
		border-radius:10px
	}
	.game-chat {
		height: 300px;
		border: inset #2d353c 10px;
		border-radius:10px
	}
}


@media only screen and (min-height: 300px) and (min-width: 650px){
	.game {
		margin-top: 0;
	}
	.game-score-board {
		height: 300px;
		width: 250px;
		border: inset #2d353c 10px;
		border-radius:10px
	}
	.game-board {
		padding:0px 0px;
		border: inset #2d353c 15px
	}
	.game-chat {
		height: 300px;
		width: 250px;
		border: inset #2d353c 10px;
		border-radius:10px;
	}
}

@media (min-height: 540px) and (min-width: 700px) {
	.game {
		margin-top: 10px;
	}
	.game-score-board {
		height: 450px;
		width: 250px;

	}
	.game-board {
		height: 450px;
		width: 450px;
	}
	.game-chat {
		height: 450px;
		width: 250px;

	}
}

@media (min-height: 640px) {
	.game {
		margin-top: 25px;
	}
}

@media (min-height: 840px) {
	.game {
		margin-top: 50px;
	}
	.game-score-board {
		height: 585px;
		width: 250px;
		border: inset #2d353c 10px;
		border-radius:10px
	}
	.game-board {
		padding:0px 0px;
		border: inset #2d353c 15px;
		height: 585px;
		width: 585px;
	}
	.game-chat {
		height: 585px;
		width: 250px;
		border: inset #2d353c 10px;
		border-radius:10px;
	}
}
</style>
 


