<template>
  <div class="container-fluid" >
		<div class="col-sm-12" style="margin-top:60px;">
			<div class="col-lg-1 blank-col el"></div>
			<game-score-board class="col-md-2 el" 
				style="height:630px;width:300px;border: outset #B71C1C 15px"></game-score-board>
		<div class="col-md-1 blank-col"></div>
			<game-board class="col-md-5 el"
				style="padding:0px 0px;height:630px;width:630px;border: inset #708090 15px"></game-board>
		<div class="col-lg-1 blank-col"></div>
			<game-chat class="col-md-2" style="height:630px;width:300px;border: outset #B71C1C 15px;"></game-chat>

		</div>

    </div>   

</template>

<script>
import GameBoard from "./game/GameBoard.vue";
import GameScoreBoard from "./game/GameScoreBoard.vue";
import GameChat from "./game/chat/GameChat.vue";

export default {
  components: {
    "game-board": GameBoard,
    "game-score-board": GameScoreBoard,
    "game-chat": GameChat
  }
};
</script>

<style scoped>


	@media (min-width: 600px) {
		.blank-col {
			width: 10px
		}
	}

	@media (min-width: 1500px) {
		.blank-col {
			width: 60px;
		}
	}
	@media (min-width: 1650px) {
		.blank-col {
			width: 140px;
		}
	}
</style>



