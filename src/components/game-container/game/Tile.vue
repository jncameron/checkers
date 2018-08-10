<template>
  <svg :x='x' :y='y'>
    <defs>
      
    </defs>
    <g class="column">
        <rect v-on:click="dropPiece()" x=0 y=0 width="100" height="100" fill="dimgray" />

        <rect v-if="selectedPieceXY.length === 2
                    && selectedPieceXY[0] === x 
                    && selectedPieceXY[1] === y
                    && turn === 'red'"
                    x=0 y=0 width="100" height="100" fill="#B71C1C" fill-opacity="0.4"/>

        <rect v-if="selectedPieceXY.length === 2
                    && selectedPieceXY[0] === x 
                    && selectedPieceXY[1] === y
                    && turn === 'blue'"
                    x=0 y=0 width="100" height="100" fill="#4682B4" fill-opacity="0.4"/>
        
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
        turn: {type: String},
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
    

