<template>
  <div class="container-fluid" >
		<div class="col-sm-12" style="margin-top:60px;">
			<div class="col-lg-1 blank-col el"></div>
			<game-score-board class="col-md-2 el"
				style="height:630px;width:300px;border: outset #B71C1C 15px"></game-score-board>
		<div class="col-md-1 blank-col"></div>
			<game-board class="col-md-5 el"
				:gameStatus="gameStatus"
				:winner="winner"
				:draw="draw"
				@redPiecesRemaining="redPiecesRemaining($event)"
				@bluePiecesRemaining="bluePiecesRemaining($event)"
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
import redPieces from '../../data/RedPlayerModel';

export default {
  components: {
    "game-board": GameBoard,
    "game-score-board": GameScoreBoard,
    "game-chat": GameChat
	},
	data() {
		return {
			gameStatus: "PLAYING",
			winner: "",
			draw: false,
			redPieces: ['red1','red2','red3','red4','red5','red6','red7','red8','red9','red10','red11','red12'],
			bluePieces: ['blue1','blue2','blue3','blue4','blue5','blue6','blue7','blue8','blue9','blue10','blue11','blue12']
		}
	},
	methods: {
		checkWinner() {
			if (this.redPieces.length === 0) {
				this.gameStatus = 'OVER'
				this.winner = 'BLUE'
			} else if (this.bluePieces.length === 0) {
				this.gameStatus = 'OVER'
				this.winner = 'RED'
			}
			
		},
		redPiecesRemaining(pieces) {
			this.redPieces = pieces;
			this.checkWinner();
		},
		bluePiecesRemaining(pieces) {
			this.bluePieces = pieces;
			this.checkWinner();
		},
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



