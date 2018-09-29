<template>
    <div>
      <transition name="modal">
        <div class="container sign-up" id="container">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="col-md-6" style="margin: 0 0;">
                <div class="col-md-12 register-box" id="register-box" >
                  <form class="col-md-10">
                    <details>
                        <summary><h1 style="font-family:'Audiowide'">Register</h1></summary>
                    <div class="form-group">
                        <label for="reg-name" style="margin-top:10px;">Nickname</label>
                        <input id="reg-name" type="text" class="form-control" style="margin-bottom:10px;">
                        <label for="reg-email">Email</label>
                        <input id="reg-email" type="email" class="form-control" style="margin-bottom:10px;">
                        <label for="reg-password">Password</label>
                        <input id="reg-password" type="password" v-on:keyup.13="addUser" class="form-control" style="margin-bottom:25px;">
                    </div>
                    <button @click="addUser" class="reg-button" type="button">Register</button>
                    </details>

                  </form>
                </div>
                <div class="col-md-12 blank1" style="margin: 0 0;">
                  <div class="blanks">
                    <img :src="`${baseUrl}piece.svg`"/>
                  </div>
                </div>
              </div>

              <div class="col-md-6" style="margin: 0 0;" >
                <div class="col-md-12 blank2">
                  <div class="blanks">
                    <img :src="`${baseUrl}piece-red.svg`"/>
                  </div>
                </div>
                <div class="col-md-12 login-box" style="margin: 0 0;" id="login-box">
                  <form action="" class="col-md-10">
                    <details>
                        <summary><h1 style="font-family:'Audiowide'">Sign In</h1></summary>
                        <label for="email" style="margin-top:10px;">Email</label>
                        <input id="login-email" type="email" class="form-control" style="margin-bottom:10px;">
                        <label for="password">Password</label>
                        <input id="login-password" type="password" v-on:keyup.13="validateUser" class="form-control" style="margin-bottom:25px;">
                        <button @click="validateUser" class="login-button" type="button">Sign In</button>
                    </details>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

</template>

<script>
import user from '../data/UserModel';
export default {
  props: {
    onlineUsers: {type: Array},

  },
    data() {
      return {
          user: user,
          baseUrl: process.env.BASE_URL
      }
    },
    //signup component allows returning users to login in or new users to create account
    methods: {
      addUser() {
        this.user.name= document.getElementById('reg-name').value;
        this.user.email= document.getElementById('reg-email').value;
        this.user.password= document.getElementById('reg-password').value;
        this.$http.post(`${this.baseUrl}user/signup`, this.user)
          .then(response => {
            this.user._id = response.body._id
            console.log(response)
            const token = response.data.token
            // this.userOnline();
            localStorage.setItem('usertoken', token) // store the token in localstorage
            this.navigateToChooseGame();
          }, error => {
            console.log(error)
          });
      },

      validateUser() {
          let user = this.user;
          let validUser = {};
          validUser.email= document.getElementById('login-email').value;
          validUser.password= document.getElementById('login-password').value;
          this.$http.post(`${this.baseUrl}user/login`, validUser)
            .then(response => {
              console.log(response)
              const token = response.data.token;
              this.user = response.body.user;
              localStorage.setItem('usertoken', token) // store the token in localstorage
              if (this.user.name === 'admin') {
                this.updateUser(response.data.user);
                this.navigateToDashboard();
              } else if(this.user.name !== 'admin') {
                localStorage.setItem('avatar', this.user.avatar);
                this.updateUser(response.data.user);
                this.navigateToChooseGame();
              }
            })
            .catch(err => {
                localStorage.removeItem('usertoken') // if the request fails, remove user token if possible
          });
        },
        updateUser(update) {
          this.user.name = update.name;
          this.user.email = update.email;
          this.user.avatar = update.avatar;
          this.user._id = update._id;
          this.$emit('update-user', this.user)
        },
        
        navigateToChooseGame() {
          this.$router.push('/choose-game');
        },
        navigateToProfile() {
          this.$router.push('/profile');
        },
        navigateToDashboard() {
          this.$router.push('/dashboard')
        }

    }
}
</script>


<style scoped>

.container {
    background-color: #000;
  position: absolute;
  z-index: 9996;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
}

.login-box,
.register-box {
  background-color: #B71C1C;
  height: 75%;
  margin: 0 0;
  border: #000 solid 3px;
  padding: 40px 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.login-box {
  background-color: #4072a0;
}
.blanks {
  height: 0%;
  width: 0%;
}

img {
  width: 0%;
}

.reg-button {
  color:#FFF;
  background: #B71C1C;
  border: 2px solid #7f0000;
  border-radius: 6px;
  font-family: 'Audiowide';
  font-size: 18px;
  width: 80%;
}

.reg-button:hover {
  background-color: #7f0000;
  color: #FFF;
}
.reg-button:focus{
  outline: none;
}
.login-button {
  color:#FFF;
  background: #4072a0;
  border: 2px solid #34537c;
  border-radius: 6px;
  font-family: 'Audiowide';
  font-size: 18px;
  width: 80%;
}

.login-button:hover {
  background-color: #34537c;
  color: #FFF;
}
.login-button:focus{
  outline: none;
}

.blank1,
.blank2 {
  background-color: #000;
  height: 0%;
  width: 0%;
  overflow: hidden;
  margin: 0 0;
  border: #000 solid 3px;

}


.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  height:80%;
  width: 100%;
  margin: auto;
  display: inline;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  transition: all .3s ease;
  font-family: 'Audiowide', cursive;

}

.col-md-6 {
  height: 100%;
  width: 100%;
  margin: 0 0;
  padding: 0 0;
}

.col-md-10 {
  width: 95%;
}

.col-md-12 {
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

summary:focus {
  outline: none;
}



@media (min-height: 450px) and (min-width: 500px) {
    .container {
    top: 40px;
    background-image: /* tint image */
        linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.8)),
        /* checkered effect */
        linear-gradient(to right, rgba(64,114,160) 50%, #d3d3d3 50%),
        linear-gradient(to bottom, rgba(64,114,160) 50%, #d3d3d3 50%);
    background-blend-mode: normal, difference, normal;
    background-size: 320px 320px;
    }
    .modal-container {
      background-color: #000;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      display: flex;
      max-width: 800px;
    }
    .blanks {
      width:100%;
      height:50%
    }
    .col-md-6 {
      width: 50%;
    }
    details > summary{
      list-style: none
    }
    details > summary::-webkit-details-marker {
      display: none;
    }
    .blank1,
    .blank2 {
    height: 25%;
    border: #000 solid 3px;
    }
    img {
      width:25%;
    }
}

@media (min-width: 501px) {
  blank1,
  blank2,
  blanks {
    height: 0%;
  }
  
}

@media only screen and (min-height: 900px) {

  details > summary{
    list-style: none
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  .login-box,
  .register-box {
    height: 50%;
    margin: 0 0;
    border: #000 solid 3px;
    padding: 40px 15px;
  }


  .blank1,
  .blank2 {
  background-color: #000;
  height: 50%;
  margin: 0 0;
  border: #000 solid 3px;
  }
  img {
    width:50%;
  }
}

</style>







