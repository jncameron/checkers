<template>
    <div>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Game Over
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{ winner }} Wins
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              
              <button class="btn btn-success" @click="$emit('close')">
                Rematch
              </button>
              <button class="btn btn-info" @click="$emit('close')">
                Game Stats
              </button>
              <button class="btn btn-primary" @click="$emit('close')">
                Lobby
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
    </div>
</template>

<script>
export default {
  props: {
    winner: {type: String}
  },
  data() {
    return {
      
    }
  }
}
</script>


<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 370px;
  margin: 0px auto;
  padding: 10px 10px;
  background-color: rgba(204,204,204,0.8);
  border-radius: 2px;
  border: 2px solid black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: sans-serif
  
}

.modal-header {
  margin: 0, 0;
  font-family: 'Audiowide', cursive;
  font-size: 48px;
  color: #B71C1C;
}

.modal-body {
  margin: 0 0;
  font-family: 'Permanent Marker';
  font-size: 32px;
}

.modal-footer {
  margin: 0 0;
  font-family: 'Permanent Marker';
  font-size: 32px;
  align-items: center;
}

.btn {
    background-color: #B71C1C;
    font-family: 'Permanent Marker';
    font-size: 18px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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

</style>

