<template>
    <div>
	<game-finished v-if="gameStatus === 'OVER'" :winner="winner" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
    </game-finished>
   
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
				:key="index"
				:transformRed="transformRed(index)"
				:turn="turn"
				:crownedRed="redPieceCrowned(index)"
				@redSelected="selectPiece($event, 'red', 'blue', false)">
      </red-piece>

      <blue-piece v-for="(bluePiece, index) in bluePieces"
				:key="index"
				:turn="turn"
				:transformBlue="transformBlue(index)"
				:crownedBlue="bluePieceCrowned(index)"
				@blueSelected="selectPiece($event, 'blue', 'red', false)">
      </blue-piece>
    </svg>
  </div>
</template>

<script>
// import redPieces from '../../../data/RedPlayerModel.js'
// import bluePieces from '../../../data/BluePlayerModel.js'
import gameBoardTiles from '../../../data/GameBoardModel.js'
import GameFinished from './GameFinished.vue';
import Tile from './Tile.vue';
import RedPiece from './RedPiece.vue';
import BluePiece from './BluePiece.vue';
import newGame from '../../../data/NewGameModel.js'
import redPieces from '../../../data/RedPlayerModel.js';
import bluePieces from '../../../data/BluePlayerModel.js';


export default {
	props: {
		gameStatus: {type: String},
		draw: {type: Boolean},
		winner: {type: String},

	},
	data() {
			return {
				newGame: newGame,
				player1: {},
				player2: {},
				redPieces: {},
				bluePieces: {},
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
				pieceName: "",
				gameId: "",
				jumpsAvailable: false,
				movesAvailable: true,
				hasJumped: false,
				justCrowned: false,
			}
	},
    beforeCreate: function() {
		let id = window.location.href.slice(30)
		if(id !== 'local') {
			console.log("Getting initial Board, id: " + id)
			this.$http.post('http://localhost:3000/newgame/board', {
				id: id	})
				.then(response => {
					console.log(response);
					this.player1 = response.body.game.player1;
					this.player2 = response.body.game.player2;
					this.redPieces = response.body.game.player1.pieces;
					this.bluePieces = response.body.game.player2.pieces;
				}, error => {
				console.log(error);
			});
		}
        
	},
	mounted: function() {
		this.listenForBoardUpdates();
	}, 
	components: {
			'board-tile': Tile,
			'red-piece': RedPiece,
			'blue-piece': BluePiece,
			'game-finished': GameFinished,
	},
	methods: {
		transformRed(i){
			let x = this.redPieces[i]['x'] + 30;
			let y = this.redPieces[i]['y'] + 30;
			return(`translate(${x},${y})`);
		},
		
		transformBlue(i){
			let x = this.bluePieces[i]['x'] + 30;
			let y = this.bluePieces[i]['y'] + 30;
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
			this.selectedPiece;
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
			let movesAvailable = this.movesAvailable;
			let checkAvailableJumps = this.checkAvailableJumps;
			let checkAvailableMoves = this.checkAvailableMoves;
			let getJumpsAvailable = this.getJumpsAvailable;
			let changeTurn = this.changeTurn;
			let setCanBeJumped = this.setCanBeJumped;
			let selectedPiece = this.selectedPiece;
			let getGameBoardTiles = this.getGameBoardTiles;
			let pieceName = this.pieceName;
			let setPieceName = this.setPieceName;
			
			
			// selectedPiece.crown = false;
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
						redOccupied.push(gameBoardTiles[tile]['pos'])
					} else if (gameBoardTiles[tile]['occupied'] === 'blue') {
						blueOccupied.push(gameBoardTiles[tile]['pos'])
					}	if (gameBoardTiles[tile]['x'] === selectedPieceXY[0] && gameBoardTiles[tile]['y'] === selectedPieceXY[1]){
						setSelectedTile(gameBoardTiles[tile]);
					}
				}			
				for (let piece in pieces) {
					if (pieces[piece]['x'] === pos[0] && pieces[piece]['y'] === pos[1]) {
						
						setPieceName(piece);
						setSelectedPiece(pieces[piece]);
						setSelectedPieceXY([pos[0],pos[1]]);
						selectedPiece = getSelectedPiece();
					}
				}



				// hasJumped = false;
				checkAvailableMoves();
				checkAvailableJumps();
				let selectedTile = getSelectedTile();
				jumpsAvailable = this.getJumpsAvailable();
				hasJumped = this.getHasJumped();

				//CHECK FOR JUMPS
				
				validMoves = selectedTile.validMoves;
				validJumps = selectedTile.validJumps;

				if(jumpsAvailable === true) {
					
					validJumps.forEach(function(t,i) {

						if((t > selectedTile.pos || selectedPiece.crown === true)
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& gameBoardTiles[`tile${validMoves[i]}`]['occupied'] === 'blue'
							&& color === 'red') {

							allowedJumps.push(`tile${t}`)
							canBeJumped.push(validMoves[i])
						}
						if((t < selectedTile.pos || selectedPiece.crown === true)
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& gameBoardTiles[`tile${validMoves[i]}`]['occupied'] === 'red'
							&& color === 'blue') {

							allowedJumps.push(`tile${t}`)
							
							canBeJumped.push(validMoves[i])
						}
						setCanBeJumped(canBeJumped)

					});
				}

				//IF PLAYER HASN'T JUMPED, CHECK FOR MOVES

				else if(hasJumped === false && jumpsAvailable === false) {
					validMoves.forEach(function(t) {
						if ((t > selectedTile.pos || selectedPiece.crown === true)
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& color === 'red') {
								allowedMoves.push(`tile${t}`);
						}

						else if ((t < selectedTile.pos || selectedPiece.crown === true)
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false
							&& color === 'blue') {
								allowedMoves.push(`tile${t}`);
						}
					});

				} else if (hasJumped === true && jumpsAvailable === false){
					changeTurn();
					setSelectedPieceXY([])
					this.setHasJumped(false)
					
				}
				
				for(let tileName in gameBoardTiles) {

					if(allowedJumps.includes(tileName)) {
						validJumpXY.push([gameBoardTiles[tileName]['x'],gameBoardTiles[tileName]['y']])

					}
					if(allowedMoves.includes(tileName)) {
						validMoveXY.push([gameBoardTiles[tileName]['x'],gameBoardTiles[tileName]['y']])

					}
				}
		},

		dropPiece(newPosition) {
			let pieces = {};
			let opponentPieces = {};
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

			let crownPiece = this.crownPiece;
			let justCrowned = this.justCrowned;
			let getJustCrowned = this.getJustCrowned;
			let setJustCrowned = this.setJustCrowned;
			let postMove = this.postMove;
			let gameId = this.newGame.id;
			let pieceName = this.pieceName;
			let getPieceName = this.getPieceName;

			



			if(color === 'red') {
				opponentColor = 'blue';
				opponentPieces = this.bluePieces;
			} else if (color === 'blue') {
				opponentColor = 'red';
				opponentPieces = this.redPieces;
			}


			selectedPiece = getSelectedPiece();

			if (allowedJumps.length > 0) {
				allowedJumps.forEach(function(tile) {
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {


							newTile = gameBoardTiles[tile]
							newTile.occupied = color;
							pieceName = getPieceName()
							console.log("PIECE NAME: " + pieceName)
							let oldAndNewPositions = [pieceName, oldTile.pos, newTile.pos, newTile.x, newTile.y]

							

							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							setSelectedPiece(selectedPiece);
							
							oldTile.occupied = 'empty';

							gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
							
							for(let piece in opponentPieces) {	
								if (canBeJumped.includes(opponentPieces[piece]['pos'])) {

									validJumps.forEach(function (jump, index) {
										if (jump === newTile.pos) {
											let moveIndex = validMoves[index]

											if (opponentPieces[piece]['pos'] === validMoves[index]) {
												
												let position = opponentPieces[piece]['pos'] 
												oldAndNewPositions.push(piece)
												
												gameBoardTiles[`tile${position}`]['occupied'] = 'empty';
												postMove(gameId, oldAndNewPositions);
												delete opponentPieces[piece]

												if(color === 'red') {
													
												}
											}
											
										}
									});
									crownPiece(selectedPiece);
									validMoveXY.length = 0;
									validJumpXY.length = 0;
									selectedPiece = {};
									selectedPieceXY.length = 0;
									setSelectedPiece({});		
									allowedJumps.length = 0;
									allowedMoves.length = 0;
									canBeJumped.length = 0;
									justCrowned = getJustCrowned();

									if(justCrowned === false) {
										setHasJumped(true);
										getHasJumped();
										selectPiece([newTile.x,newTile.y],color, opponentColor, hasJumped)
									} else {
										setJustCrowned(false);
										changeTurn();
										allowedJumps.length = 0;
										allowedMoves.length = 0;
										canBeJumped.length = 0;
									}
								}
							}
					}
				});
				if(color === 'red') {
					this.$emit('bluePiecesRemaining', Object.keys(this.bluePieces))
				}
				else if(color === 'blue') {
					this.$emit('redPiecesRemaining', Object.keys(this.redPieces))
				}
			}

			if (this.jumpsAvailable === false && hasJumped === false){

				allowedMoves.forEach(function(tile){
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
						
							newTile = gameBoardTiles[tile]
							newTile.occupied = color;
		
							let oldAndNewPositions = [pieceName, oldTile.pos, newTile.pos, newTile.x, newTile.y]
							
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							crownPiece(selectedPiece);
							oldTile.occupied = 'empty';
							gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
							validMoveXY.length = 0;
							validJumpXY.length = 0;;
							selectedPieceXY.length = 0;
							changeTurn();
							postMove(gameId, oldAndNewPositions);
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
			// this.$emit('turn',this.turn);
		},

		redPieceCrowned(i) {
      		return(this.redPieces[i]['crown'])
		},
		
		bluePieceCrowned(i) {
      		return(this.bluePieces[i]['crown'])
		},
		
		crownPiece(piece) {
			let justCrowned = false;

			if (piece['crown'] === false && this.turn === 'red') {
				if (piece['pos'] === 29 || piece['pos'] === 30 || piece['pos'] === 31 || piece['pos'] === 32) {
					piece['crown'] = true;
					justCrowned = true;				
				}
			}
			else if (piece['crown'] === false && this.turn === 'blue') {
				if (piece['pos'] === 1 || piece['pos'] === 2 || piece['pos'] === 3 || piece['pos'] === 4) {
					piece['crown'] = true;
					justCrowned = true;
				}	
			}
			if (justCrowned === true) {
				this.setJustCrowned(justCrowned);
			}

		},

		checkAvailableJumps() {
			let color = this.turn
			let redOccupied = this.redOccupied;
			let blueOccupied = this.blueOccupied;
			let canJump = false;
			let selectedPiece = this.selectedPiece;
			this.jumpsAvailable = false;
			for (let tile in gameBoardTiles) {
			selectedPiece = this.getSelectedPiece();
				let validJumps = gameBoardTiles[tile].validJumps;
				let validMoves = gameBoardTiles[tile].validMoves;
				validJumps.forEach(function(t,i) {
					let tileToBeJumped = `tile${validMoves[i]}`
					if(color === 'red') {

						let gameTileJumped = gameBoardTiles[tileToBeJumped]
					
						if((t > gameBoardTiles[tile].pos || selectedPiece.crown === true)
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
					 if ((t < gameBoardTiles[tile].pos || selectedPiece.crown === true)
						&& !redOccupied.includes(t)
						&& !blueOccupied.includes(t)
						&& t !== false
						&& gameTileJumped['occupied'] === 'red'
						&& blueOccupied.includes(gameBoardTiles[tile]['pos'])) {

							canJump = true;
						}
					}
				});
				this.jumpsAvailable = canJump;
			}

		},

		checkAvailableMoves() {
			let color = this.turn
			let redOccupied = this.redOccupied;
			let blueOccupied = this.blueOccupied;
			let canMove = false;
			let selectedPiece = this.selectedPiece;
			this.movesAvailable = false;
			for (let tile in gameBoardTiles) {
			selectedPiece = this.getSelectedPiece();
				let validMoves = gameBoardTiles[tile].validMoves;
				validMoves.forEach(function(t,i) {
					let tileToBeJumped = `tile${validMoves[i]}`
					if(color === 'red') {
						let gameTileJumped = gameBoardTiles[tileToBeJumped]
						if((t > gameBoardTiles[tile].pos || selectedPiece.crown === true)
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false) {
								canMove = true;
							} 
					}
					else if (color === 'blue') {
						let gameTileJumped = gameBoardTiles[tileToBeJumped]

						if((t < gameBoardTiles[tile].pos || selectedPiece.crown === true)
							&& !redOccupied.includes(t)
							&& !blueOccupied.includes(t)
							&& t !== false) {
								canMove = true;
						} 
					} else {
						canMove = false;f
					}
					
				});
				this.movesAvailable = canMove;
			}

		},


		postMove(gameId, oldAndNew) {

			gameId = window.location.href.slice(30)

			this.$http.post('http://localhost:3000/newgame/moves', {

			gameId: gameId, 
			move: oldAndNew, })
			.then(response => {
				// this.redPieces = response.body.game.player1.pieces;
				// this.bluePieces = response.body.game.player2.pieces;
				console.log("ON SERVER PLAYER1 PEICES: " + JSON.stringify(response.body.game.player1.pieces));
				console.log("ON SERVER PLAYER2 PEICES: " + JSON.stringify(response.body.game.player2.pieces));


			}, error => {
				console.log(error);
			});
			
			let gameData = new Object();
			gameData.player1 = new Object();
			gameData.player2 = new Object();

			gameData.tiles = this.gameBoardTiles
			//WORK ON THIS
			let turn = this.turn;
			console.log("turn: "+turn)
			gameData.turn = turn;
			gameData.player1.pieces = this.redPieces;
			gameData.player2.pieces = this.bluePieces;

			if(turn === 'blue') {
			gameData['player1']['pieces'][oldAndNew[0]] = {"pos": oldAndNew[2], "x": oldAndNew[3], "y": oldAndNew[4]}

			} else if (turn === 'red') {
			gameData['player2']['pieces'][oldAndNew[0]] = {"pos": oldAndNew[2], "x": oldAndNew[3], "y": oldAndNew[4]}
			}


			socket.emit('gamedata', gameData);
			console.log("game data" + JSON.stringify(gameData))
		},

		getGameBoardTiles() {
			return this.gameBoardTiles
		},
		getBluePieces() {
			return this.bluePieces;
		},

		getRedPieces() {
			return this.redPieces;
		},

		setCanBeJumped(jumpsPossible) {
			this.canBeJumped = jumpsPossible
		},

		getJumpsAvailable() {
			return this.jumpsAvailable;
		},

		getJustCrowned() {
			return this.justCrowned
		},

		setJustCrowned(crownStatus) {
			this.justCrowned = crownStatus;
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
		getPieceName() {

			return this.pieceName;
		},
		setPieceName(pieceName) {
			
			this.pieceName = pieceName;
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
		},
		listenForBoardUpdates() {
			let redPieces = this.redPieces;
			let bluePieces = this.bluePieces;
			let setLoadedFalse = this.setLoadedFalse;
			let setLoadedTrue = this.setLoadedTrue;
			let setRedPieces = this.setRedPieces;
			let setBluePieces = this.setBluePieces;
			let setTurn = this.setTurn;
			let setGameBoardTiles = this.setGameBoardTiles;

            socket.on('gamedata', function(data) {
				console.log("DATA: " + JSON.stringify(data));
				this.player1 = data.player1;
				this.player2 = data.player2;
				setRedPieces(data.player1.pieces);
				console.log("RED: "+ JSON.stringify(redPieces));
				setBluePieces(data.player2.pieces);
				setTurn(data.turn);
				setGameBoardTiles(data.tiles)
				
			});
		},
		setTurn(t) {
			this.turn = t;
		},
		setLoadedFalse() {
			this.loaded = false
		},
		setLoadedTrue() {
			this.loaded = true
		},
		setRedPieces(pieces) {
			this.redPieces = pieces;
		},
		setBluePieces(pieces) {
			this.bluePieces = pieces;
		},
		setGameBoardTiles(tiles) {
			this.gameBoardTiles = tiles;
		}
	}
}
</script>


<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style>


