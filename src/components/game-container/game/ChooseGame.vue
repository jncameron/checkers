<template>
	<div>
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">
					<div class="col-md-6" style="margin: 0 0;">
						<div class="col-md-12 computer" >
							<h2>VS Computer</h2>
						</div>
						<div class="col-md-12 two-local" style="margin: 0 0;">
							<h2>Two Players on this computer</h2>
						</div>
					</div>
					<div class="col-md-6" style="margin: 0 0;" >
						<div class="col-md-12 two-online" style="margin: 0 0;">
							<h2>Find Player Online</h2>
						</div>
						<div class="col-md-12 send-link" style="margin: 0 0;">
							<h2>Send a challenge link</h2>
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
  z-index: 9996;
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
	height:80%;
	width: 40%;
	margin: auto;
	padding: 10px 10px;
	background-color: #000;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: sans-serif
	
}

.col-md-6 {
	height: 100%;
	margin: 0 0;
	padding: 0 0;
}

.col-md-12 {
	color: #FFF;
	transform: translate(-50,-50);
	padding-top: 40%;
	padding-bottom: 40%;
}

.col-md-12:hover {
	opacity: 0.8;
}

.col-md-12:active {
	opacity: 0.5;
}
.computer {
	background-color: #B71C1C;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;
}
.two-local {
	background-color: dimgray;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}
.two-online {
	background-color: dimgrey;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

}
.send-link {
	
	background-color: #4072a0;
	height: 50%;
	margin: 0 0;
	border: #000 solid 3px;

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


