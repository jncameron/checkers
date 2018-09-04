<template>
    <nav class="navbar navbar-default"  style="margin-bottom:0;padding-bottom:3px;height:87px;">
    <div class="container-fluid">
        <div class="navbar-header">
        <img class=" nav navbar-brand"  src="./checkers-icon.svg" style="margin-left:5px;margin-top:20px">
        <h1 class="navbar-brand" style="color:#FFF;font-size:32px;margin-top:20px">Checkers</h1>
        </div>

        <div class="nav navbar navbar-right"  style="margin-bottom:0;margin-top:10px;">

            <ul class="nav navbar-nav" style="margin-top:7px">
                <router-link   :to="'/choose-game'" @click="toPlay" tag="li" active-class="active"><a class="nav-link">PLAY</a></router-link>
            </ul>
            <ul class="nav navbar-nav" style="margin-top:7px" v-if="user.id.length === 0">
                <router-link   :to="'/signup'" tag="li" active-class="hidden" ><a class="nav-link" style="margin-right:10px;">SIGN IN</a></router-link>
            </ul>
            <div class="nav navbar-nav">
                <img v-if="user.id.length > 0" class=" nav navbar-brand profile-image"  @click="toProfile" :src="getAvatarLink()" style="margin-top:0px;margin-left:5px;margin-right:15px;">
                <p v-if="user.id.length > 0" style="margin-bottom:0px">{{user.name}}</p>
            </div>

        </div>


    </div>
    </nav>
</template>

<script>

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
            return this.user.avatar;
        },
        toProfile() {
            this.$router.push({path: '/profile/' + this.user.name});
        },
        toPlay() {
            this.$router.push('/choose-game');
        },
        // toSignUp() {
        //     this.$router.push('/signup');
        // }
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
    background-color: #34537c;
}




</style>
