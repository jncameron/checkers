<template>

  <div id="app" style="margin-left:auto;margin-right:auto;">
    <app-header :user="user" style="z-index:9998"></app-header>
    <div class="col-sm-12" id="if-challenged" v-if="challenged">
      <div class="col-md-3"></div>
      <div class="col-sm-4"><h2>{{ challenger }} has challenged you</h2></div>
      <div class="col-sm-2" style="vertical-align:middle">
        <button class="btn-primary" @click="acceptChallenge">ACCEPT</button>
        <button class="btn-danger" @click="declineChallenge">DECLINE</button>
      </div>
    </div>
    <router-view @update-user="updateUser($event)"></router-view>
  </div>
</template>

<script>
//TODO: Make Profile, Signup, and ChooseGame UI compatible with Edge and Firefox (fine on Chrome)

import Header from './components/header/Header.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import ChooseGame from './components/game-container/game/ChooseGame.vue';
import user from './data/UserModel';
import player1 from './data/Player1Model';
import player2 from './data/Player2Model';
import onlineUsers from './data/OnlineUsers';
import newGame from './data/NewGameModel';

const baseUrl = process.env.BASE_URL;

export default {
  name: 'app',
  data() {
    return {
			user: user,
      onlineUsers: onlineUsers,
      challengeUrl: "",
      challenged: false,
      challenger: "",
      gameId: "",

    }
  },
  

  components: {
    'app-header': Header,
		GameContainer,
  },

  methods: {
		listenForUsers() {
			let updateOnlineUsers = this.updateOnlineUsers;
			socket.on('login', function(data) {
				updateOnlineUsers(data);
				
      });
    },
    listenForChallenges() {
      let user = this.user;
      let $router = this.$router;
      let $route = this.$route;
      let setChallenged = this.setChallenged;
      let setChallenger = this.setChallenger;
      let setGameId = this.setGameId;
      socket.on('challenge', function(data) {
        this.challengeUrl = `${baseUrl}#/game/${data.id}`
        setGameId(data.id)
        if(user.name === data.player2.name) {
          setChallenger(data.player1.name)
          setChallenged(true);
        }
        
      });
    },
    acceptChallenge() {
      this.$router.push({path: '/game/' + this.gameId, params: { gameId: this.$route.params.gameId }});
      this.setChallenged(false);
    },
    declineChallenge() {
      this.setChallenged(false);
    },
    setChallenged(chal) {
      this.challenged = chal;
    },
    setChallenger(chal) {
      this.challenger = chal;
    },
    setGameId(id) {
      this.gameId = id;
    },
		updateOnlineUsers(userList) {
      this.onlineUsers.length = 0;
      userList.forEach(user => {
        this.onlineUsers.push(user);
      });
			
			console.log("Online Users " + JSON.stringify(this.onlineUsers));
    },
    updateUser(usr) {
      this.user = usr;
    }
	},
    mounted: function() {
        this.listenForUsers();
        this.listenForChallenges();
    },
}
</script>

<style scoped>
#app {
  font-family: 'Audiowide', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#if-challenged {
  position: absolute;
  vertical-align: middle;
  z-index: 9998;
  top: 70px;
  border-top: solid black 3px;
  border-bottom: solid black 3px; 
  background-color: #7f0000;
  padding-top: 10px;
  padding-bottom: 10px;
}
h2 {
  margin: 0 0;
  color: #FFF
}
button {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
