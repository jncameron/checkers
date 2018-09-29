<template>
	<div>
		<transition name="modal">
			<div class="container" id="container">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="col-md-6" style="margin: 0 0;">
							<div class="container-fluid avatar-box"  id="avatar-box" >
								<img class="avatar-image" v-if="updateAvatar === false" :src="getAvatarLink()">
								<button class="change-avatar-button" v-if="updateAvatar === false" type="button" @click="editAvatar()">change</button>
								<avatar-choice class="confirm-avatar-image" :user="user" v-if="updateAvatar"
									@confirmAvatar="confirmAvatar()"></avatar-choice>
							</div>
							<div class="col-md-12 win-loss" style="margin: 0 0;">
								<div class="option" style="width:100%">
                  <user-win-loss class="user-win-loss"></user-win-loss>
                  <h2 class="user-win-loss-text">Win / Loss Record</h2>
								</div>
							</div>
						</div>
						<div class="col-md-6" style="margin: 0 0;" >
							<div class="col-md-12 user-box">
								<div v-if="updateDetails === false" class="option" style="width:100%">
									<h1>{{user.name}}</h1>
                                    <h3>{{user.email}}</h3>
									<button class="edit-details" type="button" @click="editDetails()">edit details</button>
								</div>
								<div v-if="updateDetails" class="option" style="width:100%">
									<label for="edit-name">Name</label>
									<input v-model.lazy="user.name" id="edit-name" type="text" class="form-control" style="margin-bottom:10px;">
									<label for="edit-email">Email</label>
									<input v-model.lazy="user.email" id="edit-email" type="text" class="form-control" style="margin-bottom:10px;">
									<label for="edit-password">New Password</label>
									<input id="edit-password" type="password" class="form-control">
									<button class="confirm-details" type="button" @click="confirmDetails()">confirm</button>
								</div>
							</div>
							<div class="col-md-12 opponent-record-box" style="margin: 0 0;">
								<div class="option" style="width:100%">
									<h3>Record by opponent</h3>
									<div class="game-box" v-for="(game,index) in activeGames"
										:key="index">
										<div id="game" style="background-color:#d3d3d3">
											<div class="col-md-4">
												<h4>game</h4>
											</div>
											<div class="col-md-1"></div>
											<div class="col-md-2">
												<button class="play-button">continue</button>
											</div>
										</div>
									</div>
									<div v-if="activeGames.length <= 1">
										<h4>no completed games</h4>
									</div>
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
// Profile component
// User can:
// i - update their name, email, avatar and (TODO) password
// ii - TODO - see total win/loss record
// iii - TODO see best win/loss and worst win/loss opponent records

import UserStats from './UserStats.vue';
import UserWinLoss from './UserWinLoss.vue';
import AvatarChoice from './AvatarChoice.vue';
const baseUrl = process.env.BASE_URL;
export default {
  props: {
      user: Object,
  },
  data() {
      return {
          userName: this.user.name,
          userEmail: this.user.email,
          userAvatar: this.user.avatar,
    updateDetails: false,
    updateAvatar: false,
          loaded: false,
    avatarLink: ``,
    activeGames: []

      }
  },
  components: {
      'user-stats': UserStats,
  'user-win-loss': UserWinLoss,
  'avatar-choice': AvatarChoice,
  },
  methods: {
    getAvatarLink() {
      return this.user.avatar;
    },
    editDetails() {
      this.updateDetails = true;
    },
    editAvatar() {
      this.updateAvatar = true;
    },
    confirmDetails() {
      this.user.name= document.getElementById('edit-name').value;
      this.user.email= document.getElementById('edit-email').value;
      if(document.getElementById('edit-password').value.length > 0) {
        this.user.password= document.getElementById('edit-password').value;
      }
      this.$http.post(`${baseUrl}user/update`, this.user)
          .then(response => {
          console.log(response)

        }, error => {
          console.log(error)
        })
      this.updateDetails = false;
    },
    confirmAvatar() {
      this.updateAvatar = false;
    },
  }
}
</script>


<style scoped>

.container {

    position: absolute;
    z-index: 9996;
    top: 40px;
    left: 0;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
      linear-gradient(to right, rgba(64,114,160) 50%, #d3d3d3 50%),
      linear-gradient(to bottom, rgba(64,114,160) 50%, #d3d3d3 50%);
    background-blend-mode: normal, difference, normal;
    background-size: 320px 320px;

    width: 100%;
    height: 670px;
    display: table;
    transition: opacity .3s ease;
}

.avatar-box {
	background-color: #B71C1C;
	height: 50%;
	min-height: 210px;
	margin: auto;
	border: #000 solid 3px;
	padding: 10px 15px;
}
.avatar-image {
	width:40%;
	margin-top:0;
}

.confirm-avatar-image {
	width:45%;
	float:none;
	margin: 0 auto;
}

.opponent-record-box {
	background-color: #4072a0;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}
.user-win-loss {
	background-color: #000;
	height: 50%;
	border: #000 solid 3px;

    width:80%;

}
.user-win-loss-text {
	font-size: 20px;
	margin-top: 10px;
}

.change-avatar-button,
.edit-details {
	color:#FFF;
    background: #B71C1C;
	border: 2px solid #7f0000;
	border-radius: 6px;
    font-family: 'Audiowide';
    font-size: 18px;
	width: 80%;
	margin-top: 30px;
}
.change-avatar-button {
	margin-top: 10px;
}
.edit-details:hover {
	background-color: #7f0000;
	color: #FFF;
}
.edit-details:focus{
    outline: none;
}
.confirm-details {
	color:#FFF;
    background: #4072a0;
	border: 2px solid #34537c;
	border-radius: 6px;
    font-family: 'Audiowide';
    font-size: 18px;
	width: 80%;
	margin-top: 30px;

}
.user-box {
	background-color: #000;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;
}
.user-win-loss {
	margin: auto;
	width: 50%
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
	height:80%;
	width: 40%;
	min-width: 800px;
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
	min-height: 210px;
	height: 50%;
	justify-content: center;
	align-items: center;

}

.opponent-record-box:hover,
.win-loss:hover {
	z-index: 9999;
	background-image: url('../../../assets/under-construction.svg');
	background-position: center;
	background-repeat: no-repeat;
	opacity: 0.2;
}

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

@media only screen and (min-height: 700px) {
	.container {
		height: 100%;
	}
	.avatar-image {
		width:45%;
		padding: auto;
	}
	.user-win-loss {
		margin: auto;
		margin-top: 10px;
		width: 55%
	}
	.opponent-record-box {
		margin-top: 20px;
		padding-top: 20px;
		min-height: 240px;
	}
}

@media only screen and (min-height: 820px) {
	.container {
		height: 100%;
	}
	.avatar-image {
		width:50%;
		margin-top:20px;
		padding: auto;
	}
	.confirm-avatar-image {
		width:60%;
	}
	.change-avatar-button {
		margin-top: 20px;
	}
	.user-win-loss {
		margin: auto;
		margin-top: 20px;
		width: 60%
	}
	.user-win-loss-text {
		font-size: 20px;
		margin-top: 20px;
	}
	.avatar-box,
	.col-md-12 {
		min-height: 320px;
	}
}

@media only screen and (min-height: 950px) {
	.avatar-image {
		width:65%;
		margin-top:20px;
	}
	.confirm-avatar-image {
		width:60%;
	}
	.change-avatar-button {
		margin-top: 20px;
	}
	.user-win-loss {
		margin: auto;
		margin-top: 20px;
		width: 70%
	}
	.user-win-loss-text {
		font-size: 20px;
		margin-top: 20px;
	}
	
}

@media only screen and (min-height: 1100px) {
	.avatar-image {
		width:80%;
		margin-top:30px;
	}
	.confirm-avatar-image {
		width:75%;	
	}
	.user-win-loss {
		margin: auto;
		margin-top: 30px;
		width: 80%
	}
	.user-win-loss-text {
		font-size: 30px;
		margin-top: 40px;
	}
	.avatar-box,
	.col-md-12 {
		min-height: 400px;
	}
	

}

</style>
