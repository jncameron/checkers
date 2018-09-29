<template>
  <div class="row" style="margin-left:10px">
    <div class="col-md-8 speech-bubble">
      <h4>Moves</h4>
      <p v-for="(move,index) in moves" :key="index"> {{ move }} </p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    usrMsg: {type: String},
    user: {type: Object}
  },
  data() {
    return {
      moves: []
    }
  },
  mounted: function() {
    this.moves = this.usrMsg.split("\n")
    console.log(this.moves)
  }

}
</script>


<style scoped>

img {
  margin-top: 25px;
  padding-right: 0px;
  padding-left: 0px;

}
h4 {
  margin-top: 10px;
  margin-bottom: 2px;
  color: #d3d3d3;
}

p {
    
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  margin-bottom: 5px;

}

.speech-bubble {
	position: relative;
	background: dimgray;
  text-align: left;
	border-radius: 1em;
  height: auto;
  width: 90%;
  margin-top:20px;
  padding-left: 10px;
  padding-right: 10px;

}


</style>
