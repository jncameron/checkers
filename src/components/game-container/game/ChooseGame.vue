<template>
	<div>
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="col-md-6" style="margin: 0 0;">
							<div class="col-md-12 computer" >
								<h2>VS Computer</h2>
							</div>
							<div class="col-md-12 two-local" @click="createLocalGame()" style="margin: 0 0;">
								<h2>Two Players on this computer</h2>
							</div>
						</div>
						<div class="col-md-6" style="margin: 0 0;" >
							<div class="col-md-12 two-online" @click="playOnline" style="margin: 0 0;">
								<h2>Find Player Online</h2>
								<div v-if="connectOnline === true" class=choose-player>
									<div v-for="(user,index) in onlineUsers" style="height: 20px">
										<div class="col-md-6">
											<h4 :id="'name'+ index">{{ user.name }}</h4>
										</div>
										<div class="col-md-2">
											<img :id="'src'+ index" src="../../../assets/avatars/user-20.svg" alt="">
										</div>
										<div class="col-md-2">
											<button @click="createGame(index)" :id="'button'+index" class="btn.primary">PLAY</button>
										</div>
									</div>
									<!-- <div v-if="gameCreated">
										<h4></h4>
										<router-link
											tag="button"
											:to="{ name: 'newGame', 
												params: { newgame: $route.params.newgame}, 
												query: { player1: 'first', player2: 'second' }}"
											>
										go to game </router-link> -->
									<!-- </div> -->
								</div>
							</div>
							<div class="col-md-12 send-link" style="margin: 0 0;">
								<h2>Send a challenge link</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import gameBoardTiles from '../../../data/GameBoardModel'

export default {
  props: {
		user: {type: Object},
		player1: {type: Object},
		player2: {type: Object},
		onlineUsers: {type: Array},
		redPieces: {type: Object},
		bluePieces: {type: Object},
		newGame: {type: Object},
		gameBoardTiles: gameBoardTiles
  },
  data() {
    return {
	  connectOnline: false,
	  gameCreated: false,
    }
  },
	methods: {
		playOnline() {
			console.log("PLAY ONLINE: " + JSON.stringify(this.onlineUsers))
			console.log(Array.isArray(this.onlineUsers));
			console.log("This User: " + JSON.stringify(this.user));
			this.connectOnline = true;

			// this.$router.push('/players-online');
		},

		updateOnlineUsers(userList) {
			this.onlineUsers.length = 0;
				this.onlineUsers.push(userList);
				console.log("Online Users " + JSON.stringify(this.onlineUsers));
			
		},
		createLocalGame() {
			this.player1.name = this.user.name;
			this.player1.avatar = this.user.avatar;
			this.player1.email = this.user.email;
			if(Math.random <= 0.5) {
				this.player1.pieces = this.redPieces;
			} else {
				this.player1.pieces = this.bluePieces;
			}
			
			this.player2.name = 'Player 2';
			this.player2.avatar = '../../../assets/avatars/user-15.svg'
			if( this.player1.pieces === this.redPieces) {
				this.player2.pieces = this.bluePieces;
			} else {
				this.player2.pieces = this.redPieces;
			}

			
			this.newGame.player1 = this.player1;
			this.newGame.player2 = this.player2;
			this.newGame.turn = 'red';
			this.newGame.tiles = gameBoardTiles;
			console.log(this.newGame)

			let gameId = "";

			this.$http.post('http://localhost:3000/newgame/', this.newGame)
				.then(response => {
					gameId = response.body.id
					this.newGame.id = gameId;
					console.log(this.newGame);
					this.$router.push({path: '/game/' + gameId, params: { gameId: this.$route.params.gameId }})
				}, error => {
					console.log(error);
			});
			
		},
		createGame(button) {
			this.player1.name = this.user.name;
			this.player1.avatar = this.user.avatar;
			this.player1.email = this.user.email;
						if(Math.random <= 0.5) {
				this.player1.pieces = this.redPieces;
			} else {
				this.player1.pieces = this.bluePieces;
			}

			this.player2.name = this.onlineUsers[button]['name'];
			this.player2.avatar = this.onlineUsers[button]['avatar'];
			this.player2.email = this.onlineUsers[button]['email'];
			if( this.player1.pieces === this.redPieces) {
				this.player2.pieces = this.bluePieces;
			} else {
				this.player2.pieces = this.redPieces;
			}

			this.newGame.player1 = this.player1;
			this.newGame.player2 = this.player2;
			this.newGame.turn = 'red';
			this.newGame.tiles = gameBoardTiles;
			console.log(this.newGame)

			let gameId = "";

			this.$http.post('http://localhost:3000/newgame/', this.newGame)
				.then(response => {
					gameId = response.body.id
					this.newGame.id = gameId;
					console.log(this.newGame);
					this.$router.push({path: '/game/' + gameId, params: { gameId: this.$route.params.gameId }})
				}, error => {
					console.log(error);
			});


			

			this.gameCreated = true;
		}

	},
}
</script>


<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9996;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
	height:80%;
	width: 40%;
	margin: auto;
	padding: 10px 10px;
	background-color: #000;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: sans-serif
	
}

.col-md-6 {
	height: 100%;
	margin: 0 0;
	padding: 0 0;
}

.col-md-12 {
	color: #FFF;
	transform: translate(-50,-50);
	padding-top: 40%;
	padding-bottom: 40%;
}

.col-md-12:hover {
	opacity: 0.8;
}

.col-md-12:active {
	opacity: 0.5;
}
.computer {
	background-color: #B71C1C;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;
}
.two-local {
	background-color: dimgray;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}
.two-online {
	background-color: dimgrey;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;
}
.choose-player {
	width: 100%;
	height: 100%;
	background-color: #FFF;
	color:#4072a0;
}
.send-link {
	
	background-color: #4072a0;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>


