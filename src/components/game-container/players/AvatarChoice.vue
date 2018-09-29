<template>
  <div >
    <div id="myCarousel" class="carousel slide" interval="false" data-ride="carousel">
      <div class="carousel-inner">
        <div class="item">
          <img src="user-4.svg" alt="Los Angeles" style="width:100%;">
        </div>

        <div class="item">
          <img src="user-5.svg" alt="Chicago" style="width:100%;">
        </div>
      
        <div class="item">
          <img src="user-6.svg" alt="New York" style="width:100%;">
        </div>

          <div class="item">
          <img src="user-7.svg" alt="Los Angeles" style="width:100%;">
        </div>

        <div class="item">
          <img src="user-8.svg" alt="Chicago" style="width:100%;">
        </div>
      
        <div class="item">
          <img src="user-9.svg" alt="New York" style="width:100%;">
        </div>

        <div class="item active">
          <img src="user-10.svg" alt="Los Angeles" style="width:100%;">
        </div>

        <div class="item">
          <img src="user-11.svg" alt="Chicago" style="width:100%;">
        </div>
        
        <div class="item">
          <img src="user-12.svg" alt="New York" style="width:100%;">
        </div>
        <div class="item">
          <img id="cool" src="user-13.svg" alt="Chicago" style="width:100%;">
        </div>
      
        <div class="item">
          <img src="user-14.svg" alt="New York" style="width:100%;">
        </div>
        <div class="item">
          <img src="user-15.svg" alt="Chicago" style="width:100%;">
        </div>
      
        <div class="item">
          <img src="user-16.svg" alt="New York" style="width:100%;">
        </div>
        <div class="item">
          <img src="user-17.svg" alt="Chicago" style="width:100%;">
        </div>
      
        <div class="item">
          <img src="user-18.svg" alt="New York" style="width:100%;">
        </div>
        <div class="item">
          <img src="user-19.svg" alt="Chicago" style="width:100%;">
        </div>
      
        <div class="item">
          <img src="user-20.svg" alt="New York" style="width:100%;">
        </div>
        <div class="item">
          <img src="user-21.svg" alt="Chicago" style="width:100%;">
        </div>
        <div class="item">
          <img src="user-22.svg" alt="New York" style="width:100%;">
        </div>

      
        <div class="item">
          <img src="man.svg" alt="New York" style="width:100%;">
        </div>
    
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <button class="confirm-avatar" type="button" @click="confirmAvatar()">confirm</button>
  </div>
</template>

<script>
const baseUrl = process.env.BASE_URL;
export default {
  props: {
      user: Object
  },
  data() {
    return {
      updateAvatar: false
    }
  },
  methods: {
    confirmAvatar() {
      let activeImageDiv = document.getElementsByClassName('active')[0];
      //TODO: WILL NEED TO UPDATE THE SPLIT TO .split('.com/') for PROD
      let activeImage = activeImageDiv.children[0].src.split('3000/').pop();
      this.user.avatar = activeImage;
      this.$http.post(`${baseUrl}user/updateav`, this.user)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
      this.$emit('confirmAvatar', false)
    }
  }

}
</script>

<style scoped>
.confirm-avatar {
    color:#FFF;
    background: #4072a0;
    border: 2px solid #34537c;
    border-radius: 6px;
	font-family: 'Audiowide';
	font-size: 18px;
    width: 80%;
    margin-top: 30px;
}
</style>
