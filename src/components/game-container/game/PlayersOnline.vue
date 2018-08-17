<template>
	<div>
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="col-md-12 select-player" style="margin: 0 0;">
							<h1>Challenger Online Player</h1>
							<div class="players">
								<div :v-for="(user, index) in getOnlineUsers" class="player">Player {{ user }}</div>
							</div>
						</div>
						<div class="col-md-12 send-link" style="margin: 0 0;" >
							<h1>Or send a link to a friend</h1>
							<button>Generate Link</button>
							<div>Link goes here</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
  props: {
		user: {type: Object},
		challenger: {type: Object},
		onlineUsers: {type: Array}
  },
  data() {
    return {
      
    }
  },
	methods: {
		playOnline() {
			console.log("PLAY ONLINE: " + JSON.stringify(this.onlineUsers))
			console.log(Array.isArray(this.onlineUsers))
			this.challenger = this.onlineUsers[0]
			console.log("PLAY ONLINE: " + JSON.stringify(this.challenger))
		},
		getOnlineUsers() {
			return this.onlineUsers
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

.select-player {
	color: #FFF;
	background-color: #B71C1C;
	height: 50%;
}
.send-link {
	background-color: #4072a0;
	color: #FFF;
	height: 50%
}

.col-md-12:hover {
	opacity: 0.8;
}

.col-md-12:active {
	opacity: 0.5;
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


