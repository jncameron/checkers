<template>
	<div>
		<transition name="modal">
			<div class="modal-mask" id="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">

						<div class="modal-header">
							<slot name="header">
								Rules of Checkers
							</slot>
						</div>

						<div class="modal-body">
							<slot name="body">
                <ul >
                  <li v-for="(rule,index) in rules" :key="index"> {{rule}} </li>
                </ul>
							</slot>
						</div>

						<div class="modal-footer">
							<slot name="footer">
								<button class="btn btn-primary" @click="startGame">
									Start Game
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
    winnerName: {type: String},
    rulesString: {type: String}
  },
  data() {
    return {
      rules: [],
    }
  },
  mounted: function() {
    this.rules = this.rulesString.split("\n")
    console.log(this.moves)
  },
  methods: {
    startGame() {
      let modal = document.getElementById('modal-mask');
      modal.style.display = "none";
    },
  }
}
</script>


<style scoped>
.modal-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  z-index: 9998;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 95%;
  margin: 0px auto;
  padding: 10px 10px;
  background-color: rgba(204,204,204,0.8);
  border-radius: 2px;
  border: 2px solid black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: sans-serif;
  
}

.modal-header {
  margin: 0, 0;
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: 'Audiowide', cursive;
  font-size: 18px;
  color: #B71C1C;
}

.modal-body {
  margin: 0 0;
  font-family: sans-serif;
  font-size: 10px;
  text-align: left;
}

.modal-footer {
  margin: 0 0;
  padding-top: 5px;
  padding-bottom: 0;
  font-family: 'Audiowide';
  font-size: 14px;
  align-items: center;
  text-align: center;
}

.btn {
    background-color: #B71C1C;
    font-family: 'Audiowide';
    font-size: 12px;
}
ul {
  padding-left: 10px;
  padding-bottom: 0px;
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
@media (min-height: 540px) and (min-width: 700px) {

}
@media (min-height: 640px) {

}
@media (min-height: 840px) {
  .modal-header {
    font-size: 32px;
    color: #B71C1C;
  }

  .modal-body {
    font-size: 16px;
  }

  .modal-footer {
    font-size: 32px;
  }
}

</style>

