<template>
    <div>

   
    <svg viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      style="position:relative;">
      <defs> 
        <linearGradient id="redGradient" y2="60%">
          <stop offset="0%" stop-color="#7f0000" />
          <stop offset="100%" stop-color="#b71c1c" />
        </linearGradient>
        <linearGradient id="blueGradient" y2="60%">
          <stop offset="50%" stop-color="#34537c" />
          <stop offset="100%" stop-color="#4072a0" />
        </linearGradient>
      </defs>
      <tile v-for="(tile, index) in gameBoardTiles"
			  v-bind:x="gameBoardTiles[(index)]['x']"
      	v-bind:y="gameBoardTiles[(index)]['y']">

      </tile>

      <red-piece>
      </red-piece>

      <blue-piece>
      </blue-piece>
    </svg>
  </div>
</template>

<script>
import redPieces from '../../../data/RedPlayerModel.js'
import bluePieces from '../../../data/BluePlayerModel.js'
import gameBoardTiles from '../../../data/GameBoardModel.js'

import Tile from './Tile.vue';
import RedPiece from './RedPiece.vue';
import BluePiece from './BluePiece.vue';





export default {
	data() {
			return {
				redPieces: redPieces,
				bluePieces: bluePieces,
				gameBoardTiles: gameBoardTiles
			}
	},
	components: {
			'tile': Tile,
			'red-piece': RedPiece,
			'blue-piece': BluePiece
	}
}
</script>


<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style>


