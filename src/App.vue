<template>

  <div id="app" style="margin-left:auto;margin-right:auto;">
    <app-header :user="user" style="z-index:9998"></app-header>
    <router-view @update-user="updateUser($event)"></router-view>

  </div>
</template>

<script>

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
      socket.on('challenge', function(data) {
        this.challengeUrl = `${baseUrl}#/game/${data.id}`
        console.log(this.challengeUrl)
        let gameId = data.id
        console.log(data.player1.name + " has challenged " + data.player2.name);
        if(user.name === data.player2.name) {
          $router.push({path: '/game/' + data.id, params: { gameId: $route.params.gameId }})
        }
        
      });
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
</style>
