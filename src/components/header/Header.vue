<template>
    <nav class="navbar navbar-default"  style="margin-bottom:0;padding-bottom:3px;">
    <div class="container-fluid">
        <div class="navbar-header">
        <img class=" nav navbar-brand"  src="./checkers-icon.svg">
        <h1 class="navbar-brand" style="color:#FFF;font-size:32px">Checkers</h1>
        </div> 

        <div class="nav navbar navbar-right"  style="margin-bottom:0;margin-top:10px;">
            <ul class="nav navbar-nav" v-if="user.name.length > 0">
                <router-link   :to="'/choose-game'" tag="li" active-class="active"><a class="nav-link" style="color:d3d3d3">PLAY</a></router-link>
            </ul>
            <ul class="nav navbar-nav" v-else>
                <router-link   :to="'/signup'" tag="li" active-class="active" ><a class="nav-link" style="color:d3d3d3">SIGN IN</a></router-link>
            </ul>
        <img v-if="user.name.length > 0" class=" nav navbar-brand profile-image"  @click="toProfile" :src="getAvatarLink()" style="margin-top:0px;margin-left:5px;margin-right:15px;">
        </div>
            

    </div>
    </nav>
</template>

<script>
const baseUrl = process.env.BASE_URL;

export default {
    props: {
        user: {type: Object}
    },
    data() {
        return {
            avatarLink: "",
            loaded: false,
            signedIn: false,
            avatarLink: ``
        }
    },

    methods: {
        setUser(user) {           
            if(this.userName.length > 0) {
                this.signedIn = true;
            }
            
        },
        getAvatarLink() {
            return `${baseUrl}${this.user.avatar}`
        },
        toProfile() {
            this.$router.push('profile');
        },
        toPlay() {
            this.$router.push('choose-game');
        },
        toSignUp() {
            this.$router.push('signup');
        }
    }
}
</script>


<style scoped>
nav {
    font-family: 'Audiowide', cursive;
    font-weight: bold;
    background-color: #4072a0;
    color: #FFF;
    z-index: 9998;
}

h1 {
    padding-left: 20px;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 24px;
    
}

img {
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    margin-top: 15px;
}

.profile-image:hover {
	opacity: 0.8;
}
.nav .navbar-nav:hover {
    opacity: 0.8;
}

.navbar-default .navbar-nav>li>a {
    color: #d3d3d3;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover

.active .nav-link {
    color: #FFF;
    background-color: #777;
}




</style>