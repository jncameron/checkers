<template>

    <div class="col-md-12">
        <div class=col-md-2></div>
        <div class="col-md-8" style="margin-left:5px" id="container">
            <div id="box">
				<div class="col-md-6" id="register-box">
					<div class="col-md-1"></div>
					<form class="col-md-10">
						<h1>Register</h1>
						<div class="form-group">
							<label for="reg-name" style="margin-top:30px;">Name</label>
							<input id="reg-name" type="text" class="form-control" style="margin-bottom:10px;">
							<label for="reg-email">Email</label>
							<input id="reg-email" type="email" class="form-control" style="margin-bottom:10px;">
							<label for="reg-password">Password</label>
							<input id="reg-password" type="password" class="form-control" style="margin-bottom:25px;">
						</div>
						<button @click="addUser" class="reg-button">Register</button>
					</form>
					<div class="col-md-1"></div>
				</div>
				<div class="col-md-6" id="login-box">
					<div class="col-md-1"></div>
					<form action="" class="col-md-10">
						<h1>Log In</h1>
						<label for="email" style="margin-top:65px;">Email</label>
						<input id="login-email" type="email" class="form-control" style="margin-bottom:10px;">
						<label for="password">Password</label>
						<input id="login-password" type="password" class="form-control" style="margin-bottom:25px;">
						<button @click="validateUser" class="login-button">Log In</button>
					</form>
					<div class="col-md-1"></div>
				</div>
				
            </div>

        </div>
    	<div class="col-md-2"></div>
    </div>


</template>

<script>
import axios from 'axios';
export default {
	props: { 
		user: {type: Object},
		onlineUsers: {type: Array},
	},
    data() {
        return {

        }
	},

    methods: {
		addUser() {
			this.user.name= document.getElementById('reg-name').value;
			this.user.email= document.getElementById('reg-email').value;
			this.user.password= document.getElementById('reg-password').value;
			//console.log("signUp: " + signUpName, signUpEmail, signUpPassword);
			axios.post('http://192.168.1.7:3000/user/signup', this.user)
				.then(response => {
					console.log(response)
					const token = response.data.token
      				localStorage.setItem('user-token', token) // store the token in localstorage
					this.navigateToChooseGame();
				}, error => {
					console.log(error)
				});
		}, 

		validateUser() {
			let user = this.user;
			let validUser = {};
			validUser.email= document.getElementById('login-email').value;
			validUser.password= document.getElementById('login-password').value;
			//console.log("signUp: " + signUpName, signUpEmail, signUpPassword);
			axios.post('http://192.168.1.7:3000/user/login', validUser)
				.then(response => {
					console.log(response)
					const token = response.data.token
					localStorage.setItem('user-token', token) // store the token in localstorage
					this.updateUser(response.data.user);
					localStorage.setItem('name', this.user.name);
					localStorage.setItem('email', this.user.email);
					localStorage.setItem('avatar', this.user.avatar);
					this.navigateToChooseGame();
    				})
  				.catch(err => {
    				localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
  			});
		},  
		updateUser(update) {
			console.log(this.user);
			console.log(JSON.stringify(update.name))
			this.user.name = update.name;
			this.user.email = update.email;
			this.user.avatar = update.avatar;
			socket.emit('login', {
				name: this.user.name,
				email: this.user.email,
				avatar: this.user.avatar,
			});
			console.log("Emitting User to Sockets: " + JSON.stringify(this.user))
		},
		navigateToChooseGame() {
			this.$router.push('/choose-game');
		},
		navigateToProfile() {
			this.$router.push('/profile');
		}
    }
}
</script>


<style scoped>

#container {
	background-image: url("../assets/background-board.svg");
	background-size: cover;
	height: 1000px;
}

#box {
	color:#FFF;
	align-self: center;
	margin-top: 20%;
	margin-left: auto;
	margin-right: auto;
	width: 80%;
	height: 40%;
	opacity: 1;
	background-color: #FFF;
	border: dimgray solid 3px;

}

#register-box {
	color:#FFF;
	height: 100%;
	background-color:#f44336;

}
#login-box {
	height: 100%;
	background-color:#72a0d1;

}


.reg-button {
	color:#FFF;
    background: #B71C1C;
	border: 2px solid #7f0000;
	border-radius: 6px;
    font-family: 'Audiowide';
    font-size: 18px;
	width: 80%;
}

.reg-button:hover {
	background-color: #7f0000;
	color: #FFF;
}
.reg-button:focus{
    outline: none;
}
.login-button {
	color:#FFF;
    background: #4072a0;
	border: 2px solid #34537c;
	border-radius: 6px;
    font-family: 'Audiowide';
    font-size: 18px;
	width: 80%;
}

.login-button:hover {
	background-color: #34537c;
	color: #FFF;
}
.login-button:focus{
    outline: none;
}


</style>







