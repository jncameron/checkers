<template>
	<div>
		<transition name="modal">
			<div class="container" id="container">
				<div class="modal-wrapper">
					<div class="modal-container">
						<div class="col-md-6" style="margin: 0 0;">
							<div class="col-md-12 avatar-box" id="avatar-box" >

                                    <img :src="getAvatarLink()" style="width:80%;">
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
								<div class="option" style="width:100%">
									<h1>{{user.name}}</h1>
                                    <h3>{{user.email}}</h3>
								</div>
							</div>
							<div class="col-md-12 login-box" style="margin: 0 0;" id="login-box">
                                <user-stats style="width:100%;margin-top: 60px;"></user-stats>
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
            update: false,
            loaded: false,
            avatarLink: ``
        }
    },
    components: {
        'user-stats': UserStats,
        'user-win-loss': UserWinLoss
    },
    methods: {
        getAvatarLink() {
            return `${baseUrl}${this.user.avatar}`
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
.login-box {
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
