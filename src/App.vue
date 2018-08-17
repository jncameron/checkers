<template>

  <div id="app" style="margin-left:auto;margin-right:auto;">
    <app-header style="z-index:9998"></app-header>
    <!-- <h1>NAME</h1>
    <input id="name" type="text" />
	  <h1 class="user">{{ user.name }} </h1> -->
    <!-- <button class="btn" v-on:click="enterName()">submit</button> -->
    <router-view :user="user" :onlineUsers="onlineUsers"></router-view>

  </div>
</template>

<script>

import Header from './components/header/Header.vue';
import GameContainer from './components/game-container/GameContainer.vue';
import ChooseGame from './components/game-container/game/ChooseGame.vue';
import PlayersOnline from './components/game-container/game/PlayersOnline.vue';
import user from './data/UserModel';
import challenger from './data/ChallengerModel';

export default {
  name: 'app',
  data() {
    return {
			user: user,
			onlineUsers: []
    }
  },
  

  components: {
    'app-header': Header,
		GameContainer,
  },

  methods: {
    enterName() {
        this.user.name = document.getElementById('name').value
        console.log(this.user)
		},
		listenForUsers() {
			let updateOnlineUsers = this.updateOnlineUsers;
			socket.on('login', function(data) {
				updateOnlineUsers(data);
				
			});
		},
		updateOnlineUsers(userList) {
			this.onlineUsers = userList;
			console.log("Online Users " + JSON.stringify(this.onlineUsers));
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
