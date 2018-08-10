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
      <board-tile v-for="(tile, index) in gameBoardTiles"
				:key="index"
			  :x="gameBoardTiles[(index)]['x']"
      	:y="gameBoardTiles[(index)]['y']"
				:turn="turn"
				:selectedPieceXY="selectedPieceXY"
				@dropPiece="dropPiece($event)">

      </board-tile>

      <red-piece v-for="(redPiece, index) in redPieces"
				:key=redPiece.pos
				:transformRed="transformRed(index)"
				@redSelected="selectRed($event)">
      </red-piece>

      <blue-piece v-for="(bluePiece, index) in bluePieces"
				:key=bluePiece.pos
				:transformBlue="transformBlue(index)"
				@blueSelected="selectBlue($event)">
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
				gameBoardTiles: gameBoardTiles,
				turn: 'red',
				selectedPieceXY: [],
				selectedPiece: {},
				selectedTile: {},
				piecesAreSelectable: true,
				validMoves: [],
				validJumps: [],
				allowedMoves: [],
				occupiedRed: [],
				occupiedBlue: [],

			}
	},
	components: {
			'board-tile': Tile,
			'red-piece': RedPiece,
			'blue-piece': BluePiece
	},
	methods: {
		transformRed(i){
			let x = redPieces[i]['x'] + 30;
			let y = redPieces[i]['y'] + 30;
			return(`translate(${x},${y})`);
		},
		
		transformBlue(i){
			let x = bluePieces[i]['x'] + 30;
			let y = bluePieces[i]['y'] + 30;
			return(`translate(${x},${y})`);
		},

		selectRed(pos) {
			let setSelectedTile = this.setSelectedTile;
			let gameBoardTiles = this.gameBoardTiles;
			let getSelectedTile = this.getSelectedTile;
			let allowedMoves = this.allowedMoves;
			let validMoves = this.validMoves;
			let occupiedRed = this.occupiedRed;
			let occupiedBlue = this.occupiedBlue;
			let selectedPiece = this.selectedPiece;
			let setSelectedPiece = this.setSelectedPiece;
			let redPieces = this.redPieces;
			allowedMoves.length = 0;
			if(this.turn === 'red' && this.piecesAreSelectable === true) {
				this.selectedPieceXY = ([pos[0],pos[1]])
				for (let piece in redPieces) {
					if (redPieces[piece]['x'] === pos[0] && redPieces[piece]['y'] === pos[1]) {
						setSelectedPiece(redPieces[piece]);
					}
				}
				occupiedRed.length = 0;
				console.log("SELECTED PIECEXY: " + this.selectedPieceXY)
				for (let tile in gameBoardTiles) {
					if(gameBoardTiles[tile]['occupied'] === 'red') {
						occupiedRed.push(gameBoardTiles[tile]['pos'])
						console.log("Occupied Red " + occupiedRed);
					} else if (gameBoardTiles[tile]['occupied'] === 'blue') {
						occupiedBlue.push(gameBoardTiles[tile]['pos']);
						console.log("Occupied Blue " + occupiedRed)
					}
					if (gameBoardTiles[tile]['x'] === this.selectedPieceXY[0] && gameBoardTiles[tile]['y'] === this.selectedPieceXY[1]){
						setSelectedTile(gameBoardTiles[tile]);
					}
				}
				let selectedTile = getSelectedTile();
				console.log("SELECTED TILE " + JSON.stringify(getSelectedTile()))
				let testString = `tile${selectedTile.validMoves[0]}`;
				console.log(testString)
				validMoves = selectedTile.validMoves;
				console.log("VALID MOVES " + validMoves)
				console.log("dropPiece OLDTILE " + JSON.stringify(selectedTile))
				console.log(`valid moves ${validMoves}`)

				validMoves.forEach(function(t) {

					if (t > selectedTile.pos
						&& !occupiedRed.includes(t)) {
							allowedMoves.push(`tile${t}`);
					}
				});


			console.log("ALLOWED MOVES " + allowedMoves);
			}


		},

		selectBlue(pos) {
			let selectedTile = this.selectedTile;
			let gameBoardTiles = this.gameBoardTiles;
			if(this.turn === 'blue' && this.piecesAreSelectable === true) {
				this.selectedPieceXY = ([pos[0],pos[1]])
				console.log("SELECTED PIECEXY: " + this.selectedPieceXY)
				for (let tile in gameBoardTiles) {
					if (gameBoardTiles[tile]['x'] === this.selectedPieceXY[0] && gameBoardTiles[tile]['y'] === this.selectedPieceXY[1])
					selectedTile = gameBoardTiles[tile]
					
				}
				console.log("SELECTED TILE " + JSON.stringify(selectedTile))
			}
		},

		dropPiece(newPosition) {
			let redPieces = this.redPieces;
			let bluePieces = this.bluePieces;
			let selectedPiece = this.getSelectedPiece();
			
			let validJumps = this.validJumps;
			let getSelectedTile = this.getSelectedTile;
			let oldTile = this.getSelectedTile();
			let allowedMoves = this.getAllowedMoves();
			let newTile = {};

			console.log("SELECTED PIECE (dropPiece) " + JSON.stringify(selectedPiece))
			console.log("NEW POSITION" + newPosition)
			console.log("ALLOWED MOVES" + allowedMoves)


				allowedMoves.forEach(function(tile) {
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
							newTile = gameBoardTiles[tile]
							newTile.occupied = 'red';
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							oldTile.occupied = 'empty';
							gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
					}
				});
				console.log("NEW TILE: " + JSON.stringify(newTile));
				console.log("RED PIECES: " + JSON.stringify(redPieces));
				console.log("OLDTILE: " + JSON.stringify(oldTile))
			



		},

		getSelectedTile() {
			return this.selectedTile;
		},
		setSelectedTile(tile) {
			this.selectedTile = tile;
		},
		getSelectedPiece() {
			return this.selectedPiece;
		},
		setSelectedPiece(piece) {
			this.selectedPiece = piece
		},

		getAllowedMoves() {
			return this.allowedMoves;
		}
	}
}
</script>


<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style>


