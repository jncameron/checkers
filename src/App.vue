<template>

  <div id="app" style="padding-left: 0px;padding-right: 0px;margin:auto;">
    <app-header class="container-fluid"></app-header>
    <router-view></router-view>

  </div>
</template>

<script>

import Header from './components/header/Header.vue';
import GameContainer from './components/game-container/GameContainer.vue';

export default {
  name: 'app',

  components: {
    'app-header': Header,
    GameContainer,
  }
}
</script>

<style scoped>
#app {
  font-family: 'Audiowide', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:auto;

}
</style>
