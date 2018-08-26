<template>
	<div>
		<transition name="modal">
			<div class="container" id="container">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="col-md-6" style="margin: 0 0;">
							<div class="container-fluid avatar-box"  id="avatar-box" >
								<img v-if="updateAvatar === false" :src="getAvatarLink()" style="width:80%;margin-top:30px;">

								<button v-if="updateAvatar === false" class="edit-details" type="button" @click="editAvatar()">change</button>
                                
								<avatar-choice :user="user" v-if="updateAvatar" 
									@confirmAvatar="confirmAvatar()" 
									style="width:75%;float:none;margin: 0 auto;"></avatar-choice>
							</div>


							<div class="col-md-12 win-loss" style="margin: 0 0;">
								<div class="option" style="width:100%">
                                    <user-win-loss style="margin: 60px 0 0 0;"></user-win-loss>
                                    <h2>Win / Loss Record</h2>
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
									<div class="game-box" v-for="(game,index) in activeGames">
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
            return `${baseUrl}${this.user.avatar}`
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
			console.log("avatar link: " + document.getElementById("cool").value)
			if(document.getElementById('edit-password').value.length > 0) {
				this.user.password= document.getElementById('edit-password').value;
			}
			this.$http.post('http://localhost:3000/user/update', this.user)
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
    display: table;
    transition: opacity .3s ease;
}


.avatar-box {
	background-color: #B71C1C;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

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
    align-items: center;
    width:80%;

}
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
