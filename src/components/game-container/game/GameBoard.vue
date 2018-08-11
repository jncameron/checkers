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
				:validMoveXY="validMoveXY"
				:validJumpXY="validJumpXY"
				@dropPiece="dropPiece($event)">
      </board-tile>

      <red-piece v-for="(redPiece, index) in redPieces"
				:key=redPiece.pos
				:transformRed="transformRed(index)"
				:turn="turn"
				@redSelected="selectPiece($event, 'red', 'blue', false)">
      </red-piece>

      <blue-piece v-for="(bluePiece, index) in bluePieces"
				:key=bluePiece.pos
				:turn="turn"
				:transformBlue="transformBlue(index)"
				@blueSelected="selectPiece($event, 'blue', 'red', false)">
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
				validJumps: [],
				validMoveXY: [],
				validJumpXY: [],
				validMoves: [],
				allowedJumps: [],
				allowedMoves: [],
				redOccupied: [],
				blueOccupied: [],
				canBeJumped: [],
				jumpsAvailable: false,
				hasJumped: false

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

		selectPiece(pos, color, opponentColor, hasJumped) {
			let setSelectedTile = this.setSelectedTile;
			let gameBoardTiles = this.gameBoardTiles;
			let getSelectedTile = this.getSelectedTile;
			let allowedJumps = this.allowedJumps;
			let allowedMoves = this.allowedMoves;
			let validJumps = this.validJumps;
			let validMoves = this.validMoves;
			this.redOccupied = [];
			let redOccupied = this.redOccupied;
			this.blueOccupied = [];
			let blueOccupied = this.blueOccupied;
			let selectedPiece = this.selectedPiece;
			let setSelectedPiece = this.setSelectedPiece;
			let redPieces = this.redPieces;
			let selectedPieceXY = this.selectedPieceXY;
			let getValidMoveXY = this.getValidMoveXY;
			let setValidMoveXY = this.setValidMoveXY;
			let setSelectedPieceXY = this.setSelectedPieceXY;
			let getSelectedPiece = this.getSelectedPiece;
			let validMoveXY = this.validMoveXY;
			let validJumpXY = this.validJumpXY;
			let pieces = {};
			let opponentPieces = {};
			let canBeJumped = [];
			let jumpsAvailable = this.jumpsAvailable;
			let checkAvailableJumps = this.checkAvailableJumps;
			let getJumpsAvailable = this.getJumpsAvailable;
			let changeTurn = this.changeTurn;


			validMoveXY.length = 0;
			validJumpXY.length = 0;
			selectedPieceXY.length = 0;		
			allowedJumps.length = 0;
			allowedMoves.length = 0;
			canBeJumped.length = 0;

			if(color === 'red') {
				pieces = this.redPieces
				opponentPieces = this.bluePieces
			} else if (color === 'blue') {
				pieces = this.bluePieces
				opponentPieces = this.redPieces
			}
			canBeJumped = this.canBeJumped;

			allowedMoves.length = 0;

			blueOccupied.length = 0;

			selectedPieceXY = [pos[0],pos[1]]




				for (let tile in gameBoardTiles) {
					
					if(gameBoardTiles[tile]['occupied'] === 'red' ) {
						// `${color}Occupied.push(gameBoardTiles[tile]['pos'])`
						redOccupied.push(gameBoardTiles[tile]['pos'])
					} else if (gameBoardTiles[tile]['occupied'] === 'blue') {
						//`${opponentColor}Occupied.push(gameBoardTiles[tile]['pos'])`;
						blueOccupied.push(gameBoardTiles[tile]['pos'])
					}	if (gameBoardTiles[tile]['x'] === selectedPieceXY[0] && gameBoardTiles[tile]['y'] === selectedPieceXY[1]){
						setSelectedTile(gameBoardTiles[tile]);
					}
				}			
				for (let piece in pieces) {
					if (pieces[piece]['x'] === pos[0] && pieces[piece]['y'] === pos[1]) {
						setSelectedPiece(pieces[piece]);
						setSelectedPieceXY([pos[0],pos[1]]);
					}
				}

				console.log("RED OCCUPIED (SELECT PIECE) " + redOccupied)
				this.checkAvailableJumps()
				let selectedTile = getSelectedTile();
				
				validMoves = selectedTile.validMoves;
				validJumps = selectedTile.validJumps;
				validJumps.forEach(function(t,i) {

					if(t > selectedTile.pos
						&& !redOccupied.includes(t)
						&& !blueOccupied.includes(t)
						&& t !== false
						&& gameBoardTiles[`tile${validMoves[i]}`]['occupied'] === 'blue'
						&& color === 'red') {

						allowedJumps.push(`tile${t}`)
						console.log("ALLOWED JUMPS " + allowedJumps)
						canBeJumped.push(validMoves[i])

					}
					else if(t < selectedTile.pos
						&& !redOccupied.includes(t)
						&& !blueOccupied.includes(t)
						&& t !== false
						&& gameBoardTiles[`tile${validMoves[i]}`]['occupied'] === 'red'
						&& color === 'blue') {

						allowedJumps.push(`tile${t}`)
						
						canBeJumped.push(validMoves[i])


					}
					
				});
				// if(allowedJumps.length > 0) {
				// 	return;
				// }

				if(hasJumped === false) {
					validMoves.forEach(function(t) {
						if (t > selectedTile.pos
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& color === 'red') {
								allowedMoves.push(`tile${t}`);
						}

						else if (t < selectedTile.pos
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& color === 'blue') {
								allowedMoves.push(`tile${t}`);
						}
						console.log("ALLOWED MOVES RED " + allowedMoves)
					});
				} else {
					this.setHasJumped(false)
					changeTurn();
				}
				


				
				for(let tileName in gameBoardTiles) {

					if(allowedJumps.includes(tileName)) {
						validJumpXY.push([gameBoardTiles[tileName]['x'],gameBoardTiles[tileName]['y']])
						console.log("VALIDJUMPXY "+JSON.stringify(validJumpXY))
					}
					if(allowedMoves.includes(tileName)) {
						validMoveXY.push([gameBoardTiles[tileName]['x'],gameBoardTiles[tileName]['y']])
						console.log(JSON.stringify(validMoveXY))
					}
				}
		},

		dropPiece(newPosition) {
			let pieces = [];
			let opponentPieces = [];
			let selectedPiece = this.selectedPiece;
			let getSelectedPiece = this.getSelectedPiece;
			let setSelectedPieceXY = this.setSelectedPieceXY;

			let getSelectedTile = this.getSelectedTile;
			let oldTile = this.getSelectedTile();

			let newTile = {};
			let canBeJumped = this.canBeJumped;

			let validJumps = oldTile.validJumps;	
			let validMoves = oldTile.validMoves;

			let color = this.turn;
			let opponentColor = "";

			let validMoveXY = this.validMoveXY;
			let validJumpXY = this.validJumpXY;
			let selectedPieceXY = this.selectedPieceXY;
			let changeTurn = this.changeTurn;
			let allowedJumps = this.allowedJumps;
			let allowedMoves = this.allowedMoves;
			let selectPiece = this.selectPiece;
			let setSelectedPiece = this.setSelectedPiece;
			let checkAvailableJumps = this.checkAvailableJumps;
			let getJumpsAvailable = this.getJumpsAvailable;
			let jumpsAvailable = this.jumpsAvailable;
			let hasJumped = this.hasJumped;
			let setHasJumped = this.setHasJumped;
			let getHasJumped = this.getHasJumped;



			if(color === 'red') {
				opponentColor = 'blue';
				opponentPieces = bluePieces;
			} else if (color === 'blue') {
				opponentColor = 'red';
				opponentPieces = redPieces;
			}


			selectedPiece = getSelectedPiece();

			if (allowedJumps.length > 0) {
				allowedJumps.forEach(function(tile) {
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
						console.log("DROPPIECE JUMP");

							newTile = gameBoardTiles[tile]
							newTile.occupied = color;
							console.log("NEWTILE COLOR: " + newTile.occupied)
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							
							oldTile.occupied = 'empty';
							console.log("NEWTILE POS " + newTile.pos)
							gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
							for(let piece in opponentPieces) {
								console.log(opponentPieces[piece]['pos'])
								
								if (canBeJumped.includes(opponentPieces[piece]['pos'])) {

									validJumps.forEach(function (jump, index) {
										if (jump === newTile.pos) {
											let moveIndex = validMoves[index]
											console.log("moveIndex = " + validMoves[index])

											console.log("Piece to delete " + JSON.stringify(opponentPieces[piece]))

											if (opponentPieces[piece]['pos'] === validMoves[index]) {
												delete opponentPieces[piece]
											}
											
										}
									});

									gameBoardTiles[`tile${canBeJumped[0]}`]['occupied'] = 'empty';
									validMoveXY.length = 0;
									validJumpXY.length = 0;
									selectedPiece = {};
									selectedPieceXY.length = 0;
									setSelectedPiece({});		
									allowedJumps.length = 0;
									allowedMoves.length = 0;
									canBeJumped.length = 0;
									setHasJumped();
									hasJumped = getHasJumped;
									selectPiece([newTile.x,newTile.y],color, opponentColor, hasJumped)
								}
							}

					}
				});
			}

			if (this.jumpsAvailable === false && hasJumped === false){

				allowedMoves.forEach(function(tile){
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
						
							newTile = gameBoardTiles[tile]
							newTile.occupied = color;
							console.log("NEWTILE COLOR: " + newTile.occupied)
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;

							oldTile.occupied = 'empty';
							gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
							validMoveXY.length = 0;
							validJumpXY.length = 0;;
							selectedPieceXY.length = 0;
							changeTurn();
							allowedJumps.length = 0;
							allowedMoves.length = 0;
							canBeJumped.length = 0;
					}
					
				});
			}
			
			
		},

		changeTurn() {
			if(this.turn === 'red') {
				this.turn = 'blue';
			} else if(this.turn === 'blue') {
				this.turn = 'red';
			}
		},

		checkAvailableJumps() {
			let color = this.turn
			let redOccupied = this.redOccupied;
			let blueOccupied = this.blueOccupied;
			let canJump = false;
			this.jumpsAvailable = false;
			for (let tile in gameBoardTiles) {
				console.log(gameBoardTiles[tile]['pos'])
				console.log(redOccupied)

				let validJumps = gameBoardTiles[tile].validJumps;
				let validMoves = gameBoardTiles[tile].validMoves;
				
				
				validJumps.forEach(function(t,i) {
					let tileToBeJumped = `tile${validMoves[i]}`
					if(color === 'red') {

						let gameTileJumped = gameBoardTiles[tileToBeJumped]
					
						if(t > gameBoardTiles[tile].pos
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& gameTileJumped['occupied'] === 'blue'
							&& redOccupied.includes(gameBoardTiles[tile]['pos'])) {
								canJump = true;
							} 
					}

					if (color === 'blue') {
						let gameTileJumped = gameBoardTiles[tileToBeJumped]
					 if (t < gameBoardTiles[tile].pos
						&& !redOccupied.includes(t)
						&& !blueOccupied.includes(t)
						&& t !== false
						&& gameTileJumped['occupied'] === 'red'
						&& blueOccupied.includes(gameBoardTiles[tile]['pos'])) {
							console.log('GAMETILEJUMPED ' + JSON.stringify(gameTileJumped))
							console.log("JUMPS AVAILABLE BLUE")
							canJump = true;
						}
					}
					
				});
				this.jumpsAvailable = canJump;
			}

		},
		getJumpsAvailable() {
			return this.jumpsAvailable;
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
		getAllowedJumps() {
			return this.allowedJumps;
		},
		setSelectedPieceXY(pieceXY) {
			this.selectedPieceXY = pieceXY;
		},
		getValidMoveXY() {
			return this.validMoveXY;
		},
		setValidMoveXY(moveXY) {
			this.validMoveXY = moveXY;
		},
		setValidJumpXY(jumpXY) {
			this.validJumpXY = jumpXY;
		},
		getHasJumped() {
			return this.hasJumped;
		},
		setHasJumped(has) {
			this.hasJumped = has;
		}

	}
}
</script>


<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style>


