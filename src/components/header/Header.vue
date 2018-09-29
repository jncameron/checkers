<template>
  <nav class="navbar navbar-default" >
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <img class=" nav navbar-brand"  src="./checkers-icon.svg">
        <h1 class="navbar-brand">Checkers</h1>
      </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <div class="nav navbar navbar-right">
            <ul class="nav navbar-nav">
                <router-link data-toggle="collapse" data-target=".navbar-collapse.in"  :to="'/choose-game'" @click="toPlay" tag="li" active-class="hidden"><a class="nav-link">PLAY</a></router-link>
            </ul>
            <ul class="nav navbar-nav" >
                <li v-if="user._id.length > 0" data-toggle="collapse" data-target=".navbar-collapse.in" @click="logout()" active-class="hidden" ><a class="nav-link">SIGN OUT</a></li>
                <router-link v-if="user._id.length === 0" data-toggle="collapse" data-target=".navbar-collapse.in"  :to="'/signup'" tag="li" active-class="hidden" ><a class="nav-link">SIGN IN</a></router-link>
            </ul>
            <div class="nav navbar-nav">
                <img v-if="user._id.length > 0" data-toggle="collapse" data-target=".navbar-collapse.in" class=" nav navbar-brand profile-image"  @click="toProfile" :src="getAvatarLink()">
                <p v-if="user._id.length > 0">{{user.name}}</p>
            </div>
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
    getAvatarLink() {
      return this.user.avatar;
    },
    toProfile() {
      this.$router.push({path: '/profile/' + this.user.name});
    },
    toPlay() {
      this.$router.push('/choose-game');
    },
    logout() {
      this.$emit('signout', 'remove-user')
    },
    toSignUp() {
      this.$router.push('/signup');
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
  margin-bottom:0;
  padding-bottom:3px;
  height: 60px;
  margin-top: 0px;
}

.navbar-default .navbar-collapse {
  background-color: #000;
}

.nav navbar .navbar-right {
  margin-top: 20px;
}

h1 {
  padding-left: 20px;
  margin-top: 0px;
  margin-bottom: 5px;
}

img {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
  margin-top: 0px;
}

.profile-image:hover {
  opacity: 0.8;
}
.nav .navbar-nav:hover {
  opacity: 0.8;
}

p {
  font-size: 0px;
  margin-bottom:0px
}

.navbar-brand {
  color:#FFF;
  font-size: 22px;
  margin-top:5px
}

#my-navbar {
  background-color: #000;
}
.navbar-toggle {
  background-color: #4072a0;
}
.navbar-toggle:focus {
  background-color: #34537c;
}

.navbar-default .navbar-nav>li>a {
  color: #d3d3d3;
}

.nav-link {
  background-color: dimgray
}

nav .navbar-nav ul {
  background-color: transparent;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover

.active .nav-link {
  color: #FFF;
  background-color: #34537c;
}

@media (min-width: 768px) {
  .navbar-brand {
    font-size: 32px;
  }
  .nav-link {
    background-color: #4072a0
  }
  .navbar-default .navbar-collapse {
    background-color: transparent;
  }
}

@media (min-width: 900px) {
    #myNavbar {
    padding-bottom: 20px;
  }
    nav .navbar-nav {
    margin:  auto;
    background-color: #4072a0
  }
}

@media (min-height: 450px) {
  nav {
    height: 90px;
  }
  p {
    font-size: 12px;
    margin-bottom:0px
  }
  .nav-link {
    margin-top: 20px;
  }
  nav .navbar-nav {
    margin:  auto;
    background-color: #4072a0
  }

  ul {
    background-color: transparent !important;
  }
  .navbar-brand {
    color:#FFF;
    margin-top:20px
  }
  .navbar-toggle,
  .navbar-toggle:focus {
    margin-top: 25px;
  }
}
</style>
