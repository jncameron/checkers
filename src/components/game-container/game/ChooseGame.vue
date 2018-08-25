<template>
	<div>
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="col-md-6" style="margin: 0 0;">
							<div class="col-md-12 computer" >
								<div class="option">
									<h2>VS Computer</h2>
								</div>
							</div>
							<div class="col-md-12 two-local" @click="createLocalGame()" style="margin: 0 0;">
								<div class="option">
									<h2>Two Players on this computer</h2>
								</div>
							</div>
						</div>
						<div class="col-md-6" style="margin: 0 0;" >
							<div class="col-md-12 two-online" @click="playOnline" style="margin: 0 0;">
								<div class="option" v-if="connectOnline === false">
									<h2 >Find Player Online</h2>
								</div>
								<div v-if="connectOnline === true" class="choose-player" >
									<h2>Players Online</h2>
									<hr>
									<div class="player-box" v-for="(player,index) in onlineUsers" v-if="player.name !== user.name 
											&& onlineUsers.length > 1">
										<div id="player" style="background-color:#d3d3d3">
											<div class="col-md-4">
												<h4 :id="'name'+ index">{{ player.name }}</h4>
											</div>
											<div class="col-md-1"></div>
											<div class="col-md-2">
												<img :src="`${baseUrl}${player.avatar}`" alt="" 
												style="height:30px;width:30px;margin-top:5px;">
											</div>
											<div class="col-md-1"></div>
											<div class="col-md-2">
												<button @click="createGame(index)" class="play-button" :id="'button'+index">PLAY</button>
											</div>
										</div>
									</div>
									<div v-if="onlineUsers.length <= 1">
										<h4>Sorry, no other players currently online</h4>
									</div>
								</div>
							</div>
							<div class="col-md-12 send-link" style="margin: 0 0;">
								<div class="option">
									<h2>Send a challenge link</h2>
								</div>
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
		redPieces: {type: Object},
		bluePieces: {type: Object},
		newGame: {type: Object},
		
		
  },
  data() {
    return {
	  connectOnline: false,
	  gameCreated: false,
	  gameBoardTiles: gameBoardTiles,
	  onlineUsers: [],
	  baseUrl: process.env.BASE_URL
    }
  },
      mounted: function() {
        this.listenForUsers();
    },

	methods: {
	listenForUsers() {
			console.log('oh hai')
			let updateOnlineUsers = this.updateOnlineUsers;
			socket.on('login', function(data) {
				updateOnlineUsers(data);
			});
		},
		playOnline() {
			console.log("PLAY ONLINE: " + JSON.stringify(this.onlineUsers))
			console.log(Array.isArray(this.onlineUsers));
			console.log("This User: " + JSON.stringify(this.user));
			this.connectOnline = true;

			// this.$router.push('/players-online');
		},
		updateOnlineUsers(users) {
			this.onlineUsers = users;
		},
		createLocalGame(button) {
			this.player1.name = this.user.name;
			this.player1.avatar = this.user.avatar;
			this.player1.email = this.user.email;
			let assignColor = this.getRandom();
			console.log("ASSIGNCOLOR: " + assignColor);
			if(assignColor <= 0.5) {
				this.player1.pieces = this.redPieces;
				this.player1.color = 'red';
				this.player2.pieces = this.bluePieces;
				this.player2.color = 'blue';
			} else if (assignColor > 0.5 ) {
				this.player1.pieces = this.bluePieces;
				this.player1.color = 'blue';
				this.player2.pieces = this.redPieces;
				this.player2.color = 'red';
			}
			this.player2.name = "Local Larry";
			this.player2.avatar = "man.svg";
			this.player2.email = "larry@larrymail.com";
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

		},
		getRandom() {
			return Math.random();
		},
		createGame(button) {
			this.player1.name = this.user.name;
			this.player1.avatar = this.user.avatar;
			this.player1.email = this.user.email;
			let assignColor = this.getRandom();
			console.log("ASSIGNCOLOR: " + assignColor);
			if(assignColor <= 0.5) {
				this.player1.pieces = this.redPieces;
				this.player1.color = 'red';
				this.player2.pieces = this.bluePieces;
				this.player2.color = 'blue';
			} else if (assignColor > 0.5 ) {
				this.player1.pieces = this.bluePieces;
				this.player1.color = 'blue';
				this.player2.pieces = this.redPieces;
				this.player2.color = 'red';
			}
			this.player2.name = this.onlineUsers[button]['name'];
			this.player2.avatar = this.onlineUsers[button]['avatar'];
			this.player2.email = this.onlineUsers[button]['email'];
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
					socket.emit('challenge', this.newGame);
					this.$router.push({path: '/game/' + gameId, params: { gameId: this.$route.params.gameId }})
				}, error => {
					console.log(error);
			});
			this.gameCreated = true;
			
		},
		getRandom() {
			return Math.random();
		}

	},
}
</script>


<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9996;
  top: 70px;
  left: 0;
    background-image: /* tint image */
                    linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
                    /* checkered effect */
                    linear-gradient(to right, rgba(64,114,160) 50%, #d3d3d3 50%),
                    linear-gradient(to bottom, rgba(64,114,160) 50%, #d3d3d3 50%);
    background-blend-mode: normal, difference, normal;
    background-size: 320px 320px;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, .5); */
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
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 10px;
	background-color: #000;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: 'Audiowide', cursive;
	
}

.col-md-6 {
	height: 100%;
	width: 50%;
	margin: 0 0;
	padding: 0 0;
}

.col-md-12 {
	color: #FFF;

	display: flex;
	justify-content: center;
	align-items: center;

}

.option {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.option:hover {
	background-color: #000;
	opacity: 0.2;
}

.option:active {
	opacity: 0.5;
}

.computer {
	background-color: #B71C1C;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;
}
.two-local {
	background-color: #000;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}
.two-online {
	background-color: #000;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;
}
.choose-player {
	width: 100%;
	height: 100%;
	color:#FFF;
}
.player-box {
	min-height:40px;
	margin-top:10px;
	border-bottom: 2px solid #000;

}
.play-button {
	color:#FFF;
    background: #4072a0;
	border: 2px solid #34537c;
	border-radius: 6px;
    font-family: 'Audiowide';
    font-size: 18px;

}
.play-button:hover {
	background-color: #34537c;
	color: #FFF;
}
.play-button:focus{
    outline: none;
}
.send-link {
	
	background-color: #4072a0;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}
#button {

	-webkit-appearance: none;
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


