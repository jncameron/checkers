<template>
  <svg :x='x' :y='y'>
    <defs>
      
    </defs>
    <g class="column">
        <rect v-on:click="dropPiece()" x=0 y=0 width="100" height="100" fill="dimgray" />
        <text x="0" y="50" font-family="Verdana" font-size="25" fill="#000">{{occupied}}</text>

        <rect v-if="selectedPieceXY.length === 2
                    && selectedPieceXY[0] === x 
                    && selectedPieceXY[1] === y
                    && turn === 'red'"
                    x=0 y=0 width="100" height="100" fill="#B71C1C" fill-opacity="0.4"/>

        <rect v-if="selectedPieceXY.length === 2
                    && selectedPieceXY[0] === x 
                    && selectedPieceXY[1] === y
                    && turn === 'blue'"
                    x=0 y=0 width="100" height="100" fill="#4072a0" fill-opacity="0.4"/>

        <rect v-for=" move in validMoveXY"
          v-if="move[0] === x && move[1] === y && turn === 'red'"
          v-on:click="dropPiece()" x=0 y=0 width="100" height="100" fill="#B71C1C" fill-opacity="0.5"/>

        <rect v-for=" move in validMoveXY"
          v-if="move[0] === x && move[1] === y && turn === 'blue'"
          v-on:click="dropPiece()" x=0 y=0 width="100" height="100" fill="#4072a0" fill-opacity="0.5"/>

        <rect v-for=" jump in validJumpXY"
          v-if="jump[0] === x && jump[1] === y && turn === 'red'"
          v-on:click="dropPiece()" x=0 y=0 width="100" height="100" fill="#B71C1C" fill-opacity="0.5"/>

        <rect v-for=" jump in validJumpXY"
          v-if="jump[0] === x && jump[1] === y && turn === 'blue'"
          v-on:click="dropPiece()" x=0 y=0 width="100" height="100" fill="#4072a0" fill-opacity="0.5"/>
        
    </g>
  </svg>
</template>

<script>

export default {
  props: 
  {
        x:{type: Number}, 
        y:{type: Number},
        selectedPieceXY: {type: Array},
        validMoveXY: {type: Array},
        validJumpXY: {type: Array},
        turn: {type: String},
        occupied: {type: String}
        },

  data() {
    return {

    }
  },
  methods: {
    dropPiece() {
      this.$emit('dropPiece', [this.x, this.y]);
    },
  }


}
</script>
    

