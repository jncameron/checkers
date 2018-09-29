<template>
  <div>
    <img v-if="loaded" :src="avatarLink" alt="">
  </div>
  
</template>

<script>
const baseUrl = process.env.BASE_URL;
export default {
  props: {
    player2: {type: Object},
  },

  data() {
    return {
      loaded: false,
      avatarLink: ``
    }
  },
  mounted: function() {
    let setLoaded = this.setLoaded;
    setTimeout(function(){
        setLoaded();
    },1000)

  },
  methods: {
    setLoaded() {
      this.loaded = true;
      this.avatarLink = `${baseUrl}${this.player2.avatar}`
    }
  }
}
</script>

<style scoped>

img {
  border: 1px solid black;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

@media (min-height: 540px) {
  img {
    height: 50px;
    width: 50px;
  }
}

@media (min-height: 800px) {
  img {
    height: 70px;
    width: 70px;
  }
}

</style>



