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

export default {
  name: 'app',
  data() {
    return {
			user: user,
			onlineUsers: onlineUsers
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
