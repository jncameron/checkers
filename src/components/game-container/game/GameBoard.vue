<template>
    <div>
	<game-finished v-if="gameStatus === 'OVER'" :winnerName="winnerName" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
    </game-finished>
    <svg viewBox="0 0 800 800" 
      xmlns="http://www.w3.org/2000/svg" version="1.1"
	  xmlns:xlink="http://www.w3.org/1999/xlink"
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
				:occupied="tile.occupied"
				:selectedPieceXY="selectedPieceXY"
				:validMoveXY="validMoveXY"
				:validJumpXY="validJumpXY"
				@dropPiece="dropPiece($event)">
      </board-tile>

		<g v-if="player1.color === 'red'">
			<red-piece v-for="(redPiece, index) in player1.pieces"
					v-if="redPiece.pos"
					:key="index"
					:transform="transform(redPiece, 'player1')"
					:turn="turn"
					:player="player1"
					:user="user"
					@redSelected="selectPiece($event, 'red', 'blue')">
			</red-piece>
		    <blue-piece v-for="(bluePiece, index) in player2.pieces"
	  			v-if="bluePiece.pos"
				:key="index"
				:turn="turn"
				:player="player2"
				:user="user"
				:transform="transform(bluePiece, 'player2')"
				@blueSelected="selectPiece($event, 'blue', 'red')">
      		</blue-piece>
		</g>
		<g v-else>
			<red-piece v-for="(redPiece, index) in player2.pieces"
					v-if="redPiece.pos"
					:key="index"
					:transform="transform(redPiece, 'player2')"
					:turn="turn"
					:player="player2"
					:user="user"
					@redSelected="selectPiece($event, 'red', 'blue')">
			</red-piece>
		    <blue-piece v-for="(bluePiece, index) in player1.pieces"
	  			v-if="bluePiece.pos"
				:key="index"
				:turn="turn"
				:player="player1"
				:user="user"
				:transform="transform(bluePiece, 'player1')"
				@blueSelected="selectPiece($event, 'blue', 'red')">
      		</blue-piece>
		</g>
    </svg>
  </div>
</template>

<script>

import GameFinished from './GameFinished.vue';
import Tile from './Tile.vue';
import RedPiece from './RedPiece.vue';
import BluePiece from './BluePiece.vue';
import newGame from '../../../data/NewGameModel.js'

export default {
	props: {
		gameStatus: {type: String},
		draw: {type: Boolean},
		winnerName: {type: String},
		player1: {type: Object},
		player2: {type: Object},
		gameBoardTiles: {type: Object},
		turn: {type: String},
		user: {type: Object}
	},
	data() {
			return {
				newGame: newGame,
				gameBoardTiles: {},
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
				movesAvailable: true,
				justCrowned: false,
				message: "Good luck!",
			}
	},

	components: {
			'board-tile': Tile,
			'red-piece': RedPiece,
			'blue-piece': BluePiece,
			'game-finished': GameFinished,
	},
	methods: {
		transform(piece,player){
			let x = piece.x + 30;
			let y = piece.y + 30;
			return(`translate(${x},${y})`);
		},

		selectPiece(pos, color, opponentColor) {
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
			let movesAvailable = this.movesAvailable;
			let changeTurn = this.changeTurn;
			let setCanBeJumped = this.setCanBeJumped;
			let selectedPiece = this.selectedPiece;
			let getGameBoardTiles = this.getGameBoardTiles;
			let pieceName = this.pieceName;
			let setPieceName = this.setPieceName;
			
			validMoveXY.length = 0;
			validJumpXY.length = 0;
			selectedPieceXY.length = 0;		
			allowedJumps.length = 0;
			allowedMoves.length = 0;
			canBeJumped.length = 0;

			if(color === 'red' && this.player1.color === 'red'
			   	|| color === 'blue' && this.player1.color === 'blue') {
				pieces = this.player1.pieces
				opponentPieces = this.player2.pieces
			} else if (color === 'red' && this.player2.color === 'red'
				|| color === 'blue' && this.player2.color === 'blue') {
				pieces = this.player2.pieces;
				opponentPieces = this.player1.pieces;
			}
			canBeJumped = this.canBeJumped;
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
				
				
				let selectedTile = getSelectedTile();

				validMoves = selectedTile.validMoves;
				validJumps = selectedTile.validJumps;

					
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

				//IF PLAYER HASN'T JUMPED, CHECK FOR MOVES

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

			let crownPiece = this.crownPiece;
			let justCrowned = this.justCrowned;
			let getJustCrowned = this.getJustCrowned;
			let setJustCrowned = this.setJustCrowned;
			let postMove = this.postMove;
			let gameId = this.newGame.id;
			let pieceName = this.pieceName;
			let getPieceName = this.getPieceName;
			let updateGameBoardTile = this.updateGameBoardTile;
			let gameBoardTiles = this.gameBoardTiles;


			//MORE HERE
			if(color === 'red' && this.player1.color === 'red') {
				opponentColor = 'blue';
				opponentPieces = this.player2.pieces;
			} else if (color === 'red' && this.player2.color === 'red') {
				opponentColor = 'blue';
				opponentPieces = this.player1.pieces;
			}else if (color === 'blue' && this.player1.color === 'blue') {
				opponentColor = 'red';
				opponentPieces = this.player2.pieces;
			}else if (color === 'blue' && this.player2.color === 'blue') {
				opponentColor = 'red';
				opponentPieces = this.player1.pieces;
			}

			selectedPiece = getSelectedPiece();
			if (allowedJumps.length > 0) {
				allowedJumps.forEach(function(tile) {
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
							newTile = gameBoardTiles[tile]
							newTile.occupied = color;
							updateGameBoardTile(tile, color)
							pieceName = getPieceName()
							console.log("PIECE NAME: " + pieceName)
							let oldAndNewPositions = [pieceName, oldTile.pos, newTile.pos, newTile.x, newTile.y]

							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							setSelectedPiece(selectedPiece);
							
							oldTile.occupied = 'empty';

							updateGameBoardTile(`tile${oldTile.pos}`,'empty')
							for(let piece in opponentPieces) {	
								if (canBeJumped.includes(opponentPieces[piece]['pos'])) {
									validJumps.forEach(function (jump, index) {
										if (jump === newTile.pos) {
											let moveIndex = validMoves[index]

											if (opponentPieces[piece]['pos'] === validMoves[index]) {
												
												let position = opponentPieces[piece]['pos'] 
												oldAndNewPositions.push(piece)
												
												updateGameBoardTile(`tile${position}`,'empty')
												
												opponentPieces[piece] = "CAPTURED";

											}
											
										}
									});
									// crownPiece(selectedPiece);
									validMoveXY.length = 0;
									validJumpXY.length = 0;
									selectedPiece = {};
									selectedPieceXY.length = 0;
									setSelectedPiece({});		
									justCrowned = getJustCrowned();														
									changeTurn();
									postMove(gameId, oldAndNewPositions);
								}
							}
					}
				});
			}
		

				allowedMoves.forEach(function(tile){
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
						
							newTile = gameBoardTiles[tile]
							
							newTile.occupied = color;
							updateGameBoardTile(tile, color)
		
							let oldAndNewPositions = [pieceName, oldTile.pos, newTile.pos, newTile.x, newTile.y]
							
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							// crownPiece(selectedPiece);
							oldTile.occupied = 'empty';
							updateGameBoardTile(`tile${oldTile.pos}`,'empty')
							// gameBoardTiles[`tile${oldTile.pos}`]['occupied'] = 'empty';
							validMoveXY.length = 0;
							validJumpXY.length = 0;;
							selectedPieceXY.length = 0;
							changeTurn();
							postMove(gameId, oldAndNewPositions);
					}
					
				});
			
			
		},

		updateGameBoardTile(tile, occupied) {
			this.gameBoardTiles[tile]['occupied'] = occupied;
		},

		changeTurn() {
			if(this.turn === 'red') {
				this.turn = 'blue';
			} else if(this.turn === 'blue') {
				this.turn = 'red';
			}
		},

		
		// crownPiece(piece) {
		// 	let justCrowned = false;

		// 	if (piece['crown'] === false && this.turn === 'red') {
		// 		if (piece['pos'] === 29 || piece['pos'] === 30 || piece['pos'] === 31 || piece['pos'] === 32) {
		// 			piece['crown'] = true;
		// 			justCrowned = true;				
		// 		}
		// 	}
		// 	else if (piece['crown'] === false && this.turn === 'blue') {
		// 		if (piece['pos'] === 1 || piece['pos'] === 2 || piece['pos'] === 3 || piece['pos'] === 4) {
		// 			piece['crown'] = true;
		// 			justCrowned = true;
		// 		}	
		// 	}
		// 	if (justCrowned === true) {
		// 		this.setJustCrowned(justCrowned);
		// 	}

		// },

		postMove(gameId, oldAndNew) {
			let url = window.location.href;
			gameId = url.split('game/').pop();
			let pieceName = oldAndNew[0];
			let oldpos = oldAndNew[1];
			let newpos = oldAndNew[2];
			let newX = oldAndNew[3];
			let newY = oldAndNew[4];
			let tiles = this.gameBoardTiles;
			let turn = this.turn;
			let captured = "";
			if(oldAndNew[5]) {
				captured = oldAndNew[5];
			}
			let postGame = {pieceName, oldpos, newpos, newX, newY, tiles, turn, captured}
			this.$http.post('http://localhost:3000/newgame/moves', {

			gameId: gameId, 
			postGame: postGame})
			.then(response => {

			}, error => {
				console.log(error);
			}).then(function() { 


			//After posting to server/db, Send current board state to socket 'board'
			socket.emit('gamedata', 'open');
			let gameData = {};
			gameData.player1 = this.player1;
			gameData.player2 = this.player2;
			gameData.tiles = this.gameBoardTiles;
			gameData.turn = this.turn
			socket.emit('gamedata', gameData);
			console.log("game data" + JSON.stringify(gameData))
			}

			);
		},

		getGameBoardTiles() {
			return this.gameBoardTiles
		},

		setCanBeJumped(jumpsPossible) {
			this.canBeJumped = jumpsPossible
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
			console.log("clicked")
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
	}
}
</script>


<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style>


