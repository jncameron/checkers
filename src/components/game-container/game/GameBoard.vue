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
				@redSelected="selectPiece($event, 'red')">
      </red-piece>

      <blue-piece v-for="(bluePiece, index) in bluePieces"
				:key=bluePiece.pos
				:transformBlue="transformBlue(index)"
				@blueSelected="selectPiece($event, 'blue')">
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

		selectPiece(pos, color) {
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
			let selectedPieceXY = this.selectedPieceXY;
			let setSelectedPieceXY = this.setSelectedPieceXY;
			allowedMoves.length = 0;
			occupiedRed.length = 0;
			occupiedBlue.length = 0;

			console.log(pos)
			console.log(color)


			selectedPieceXY = [pos[0],pos[1]]
			console.log("SELECTED PIECE XY " + selectedPieceXY);

			if(this.turn === 'red' && this.piecesAreSelectable === true) {

				for (let tile in gameBoardTiles) {
					if(gameBoardTiles[tile]['occupied'] === 'red') {
						occupiedRed.push(gameBoardTiles[tile]['pos'])
					} else if (gameBoardTiles[tile]['occupied'] === 'blue') {
						occupiedBlue.push(gameBoardTiles[tile]['pos']);
					}	if (gameBoardTiles[tile]['x'] === selectedPieceXY[0] && gameBoardTiles[tile]['y'] === selectedPieceXY[1]){
						setSelectedTile(gameBoardTiles[tile]);
					}
				}				
				for (let piece in redPieces) {
					if (redPieces[piece]['x'] === pos[0] && redPieces[piece]['y'] === pos[1]) {
						setSelectedPiece(redPieces[piece]);
						setSelectedPieceXY([pos[0],pos[1]]);
					}
				}
				let selectedTile = getSelectedTile();
				console.log(selectedTile)
				validMoves = selectedTile.validMoves;
				validMoves.forEach(function(t) {
					if (t > selectedTile.pos
						&& !occupiedRed.includes(t)
						&& t !== false) {
							allowedMoves.push(`tile${t}`);
					}
					console.log("ALLOWED MOVES RED " + allowedMoves)
				});
			}

			else if(this.turn === 'blue' && this.piecesAreSelectable === true) {

				for (let tile in gameBoardTiles) {
					if(gameBoardTiles[tile]['occupied'] === 'blue') {
						occupiedBlue.push(gameBoardTiles[tile]['pos'])
					} else if (gameBoardTiles[tile]['occupied'] === 'blue') {
						occupiedBlue.push(gameBoardTiles[tile]['pos']);
					}	if (gameBoardTiles[tile]['x'] === selectedPieceXY[0] && gameBoardTiles[tile]['y'] === selectedPieceXY[1]){
						setSelectedTile(gameBoardTiles[tile]);
					}
				}				
				for (let piece in bluePieces) {
					if (bluePieces[piece]['x'] === pos[0] && bluePieces[piece]['y'] === pos[1]) {
						setSelectedPiece(bluePieces[piece]);
						setSelectedPieceXY([pos[0],pos[1]]);
					}
				}
				let selectedTile = getSelectedTile();
				console.log(selectedTile)
				validMoves = selectedTile.validMoves;
				validMoves.forEach(function(t) {
					if (t < selectedTile.pos
						&& !occupiedBlue.includes(t)
						&& t !== false) {
							allowedMoves.push(`tile${t}`);
					}
					console.log("ALLOWED MOVES BLUE " + allowedMoves)
				});
			}
		},

		dropPiece(newPosition, color) {
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
							newTile.occupied = 'blue';
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							oldTile.occupied = 'empty';
							gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
					}
				});
				this.selectedPieceXY = [];
				console.log("NEW TILE: " + JSON.stringify(newTile));
				console.log("RED PIECES: " + JSON.stringify(redPieces));
				console.log("OLDTILE: " + JSON.stringify(oldTile))
				this.changeTurn();
				console.log(this.turn);
			
		},

		changeTurn() {
			if(this.turn === 'red') {
				this.turn = 'blue';
			} else if(this.turn === 'blue') {
				this.turn = 'red';
			}
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
		},
		setSelectedPieceXY(pieceXY) {
			this.selectedPieceXY = pieceXY;
		}
	}
}
</script>


<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style>


