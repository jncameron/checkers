<template>
    <div>
	<game-start v-if="gameStatus === 'START'" :rulesString="rulesString"></game-start>
	<game-finished v-if="gameStatus === 'OVER'" :winnerName="winnerName" @close="showModal = false">
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
				:pos="gameBoardTiles[(index)]['pos']"
				:showTileNumbers="showTileNumbers"
				:turn="turn"
				:occupied="tile.occupied"
				:allowedJumps="allowedJumps"
				:selectedPieceXY="selectedPieceXY"
				:validMoveXY="validMoveXY"
				:validJumpXY="validJumpXY"
				:availableJumps="availableJumps"
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
					:crownedRed="redPiece.crown"
					@redSelected="selectPiece($event, 'red', 'blue')">
			</red-piece>
			<blue-piece v-for="(bluePiece, index) in player2.pieces"
				v-if="bluePiece.pos"
				:key="index"
				:turn="turn"
				:player="player2"
				:user="user"
				:crownedBlue="bluePiece.crown"
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
				:crownedRed="redPiece.crown"
				:user="user"
				@redSelected="selectPiece($event, 'red', 'blue')">
			</red-piece>
			<blue-piece v-for="(bluePiece, index) in player1.pieces"
				v-if="bluePiece.pos"
				:key="index"
				:turn="turn"
				:player="player1"
				:crownedBlue="bluePiece.crown"
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
import GameStart from './GameStart.vue';
import Tile from './Tile.vue';
import RedPiece from './RedPiece.vue';
import BluePiece from './BluePiece.vue';
import newGame from '../../../data/NewGameModel.js'
import gameBoardTiles from '../../../data/GameBoardModel';
const baseUrl = process.env.BASE_URL;

export default {
	props: {
		gameStatus: {type: String},
		draw: {type: Boolean},
		winnerName: {type: String},
		player1: {type: Object},
		player2: {type: Object},
		gameBoardTiles: {type: Object},
		turn: {type: String},
		user: {type: Object},
		showTileNumbers: {type: Boolean},
		rulesString: {type: String}
	},
	data() {
			return {
				newGame: newGame,
				selectedPieceXY: [],
				selectedPiece: {},
				selectedTile: {},
				validJumps: [],
				validMoveXY: [],
				validJumpXY: [],
				validMoves: [],
				allowedJumps: [],
				allowedMoves: [],
				computerMoves: [],
				computerJumps: [],
				redOccupied: [],
				blueOccupied: [],
				canBeJumped: [],
				pieceName: "",
				gameId: "",
				justCrowned: false,
				message: "Good luck!",
				hasJumped: false,
				availableJumps: false,
			}
	},

	components: {
			'board-tile': Tile,
			'red-piece': RedPiece,
			'blue-piece': BluePiece,
			'game-finished': GameFinished,
			'game-start': GameStart,
	},
	watch: {
		turn: function(newValue, oldValue) {
			this.computerMoves.length = 0;
			this.computerJumps.length = 0;
			let moveComputer = this.moveComputer;

			if(this.player1.color === 'blue' && newValue === 'blue') {
					this.selectAllPieces(this.player1.pieces, newValue, oldValue)
			} else if (this.player2.color === 'blue' && newValue === 'blue'){
					this.selectAllPieces(this.player2.pieces, newValue, oldValue)
			} else if(this.player1.color === 'red' && newValue === 'red') {
					this.selectAllPieces(this.player1.pieces, newValue, oldValue)
			} else if(this.player2.color === 'red' && newValue === 'red'){
					this.selectAllPieces(this.player2.pieces, newValue, oldValue)
			}

			if(this.player2.name === "Computer") {
					setTimeout(function(){
						moveComputer();
					},1500)
			}
		},
	},
	methods: {
		// one of the two main methods in GameBoard.vue
		// handles selecting piece logic, moves and jumps available
		// if a piece can jump, it must

		//run after turn changes to find any available jumps
		//if any jumps available, player must jump
		selectAllPieces(pieces, color, opponentColor) {
			this.setAvailableJumps(false);
			let selectPiece = this.selectPiece;
				for(let piece in pieces) {
					if(pieces[piece].pos) {
						let x = pieces[piece]['x']
						let y = pieces[piece]['y']
						selectPiece([x,y],color,opponentColor)
					}

			}
			this.validMoveXY.length = 0;
			this.validJumpXY.length = 0;
			this.selectedPieceXY.length = 0;		
			this.allowedJumps.length = 0;
			this.allowedMoves.length = 0;
			this.canBeJumped.length = 0;
			
		},
		moveComputer() {
			let randomMove = Math.floor(Math.random()*this.computerMoves.length);
			let moveX = this.computerMoves[randomMove][0]['x'];
			let moveY = this.computerMoves[randomMove][0]['y'];
			let color = this.player2.color;
			let opponentColor = "";
			let newMovePosition = this.computerMoves[randomMove][1];
			let computerJumps = this.computerJumps;
			let jumpAgain = this.jumpAgain;
			if(color === 'red') {
				opponentColor = 'blue'
			} else if (color === 'blue') {
				opponentColor = 'red'
			}
			if(this.player2.name === "Computer" && this.turn === color) {
				if(this.computerJumps.length > 0) {
					let jumpX = this.computerJumps[0][0]['x'];
					let jumpY = this.computerJumps[0][0]['y'];
					let newJumpPosition = computerJumps[0][1];
					this.selectPiece([jumpX,jumpY],color,opponentColor);
					this.dropPiece([newJumpPosition['x'],newJumpPosition['y']]);
					
				}else {
					this.selectPiece([moveX,moveY],color,opponentColor);
					console.log(newMovePosition)
					this.dropPiece([newMovePosition['x'],newMovePosition['y']])
				}
				
			}
		},
		selectPiece(pos, color, opponentColor) {
			let setSelectedTile = this.setSelectedTile;
			let gameBoardTiles = this.gameBoardTiles;
			let getSelectedTile = this.getSelectedTile;
			this.allowedJumps.length = 0;
			let allowedJumps = this.allowedJumps;
			let setAllowedJumps = this.setAllowedJumps;
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
			let changeTurn = this.changeTurn;
			let setCanBeJumped = this.setCanBeJumped;
			let selectedPiece = this.selectedPiece;
			let getGameBoardTiles = this.getGameBoardTiles;
			let pieceName = this.pieceName;
			let setPieceName = this.setPieceName;
			let setAvailableJumps = this.setAvailableJumps;
			let getHasJumped = this.getHasJumped;
			let setComputerMoves = this.setComputerMoves;
			let setComputerJumps = this.setComputerJumps;
			let player2 = this.player2;
			
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
					if(player2.name === "Computer") {
						setComputerJumps([selectedPiece, gameBoardTiles[`tile${t}`]])
					}
					
				}
				if((t < selectedTile.pos || selectedPiece.crown === true)
					&& !redOccupied.includes(t)
					&& !blueOccupied.includes(t)
					&& t !== false
					&& gameBoardTiles[`tile${validMoves[i]}`]['occupied'] === 'red'
					&& color === 'blue') {

					allowedJumps.push(`tile${t}`)				
					canBeJumped.push(validMoves[i])
					if(player2.name === "Computer") {
						setComputerJumps([selectedPiece, gameBoardTiles[`tile${t}`]])
					}
				}
				if(allowedJumps.length >= 1) {
					setAvailableJumps(true);
				}
				
				setCanBeJumped(canBeJumped);
				

			});
			setAllowedJumps(allowedJumps);
			//IF PLAYER HASN'T JUMPED, CHECK FOR MOVES

			validMoves.forEach(function(t) {
				if ((t > selectedTile.pos || selectedPiece.crown === true)
					&& !redOccupied.includes(t)
					&& !blueOccupied.includes(t)
					&& t !== false
					&& color === 'red') {
						allowedMoves.push(`tile${t}`);
						if(player2.name === "Computer") {
							setComputerMoves([selectedPiece, gameBoardTiles[`tile${t}`]])
						}
				}

				else if ((t < selectedTile.pos || selectedPiece.crown === true)
					&& !redOccupied.includes(t)
					&& !blueOccupied.includes(t)
					&& t !== false
					&& color === 'blue') {
						allowedMoves.push(`tile${t}`);
						if(player2.name === "Computer") {
							setComputerMoves([selectedPiece,gameBoardTiles[`tile${t}`]])
						}
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

		//the other major function. After valid Moves and jumps are computed in selectPiece(),
		//  dropPiece allows player to choose a move
		//TODO: player must jump if any jump is available
		//TODO: 'multijumps' - if jump completed, new tile is selected, if valid jumps found,
		//	player can continue move
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
			let jumpAgain = this.jumpAgain;
			let allowedJumps = this.allowedJumps;
			let allowedMoves = this.allowedMoves;
			let selectPiece = this.selectPiece;
			let setSelectedPiece = this.setSelectedPiece;
			let crownPiece = this.crownPiece;
			let justCrowned = this.justCrowned;
			let getJustCrowned = this.getJustCrowned;
			let setJustCrowned = this.setJustCrowned;
			let postMove = this.postMove;
			let gameId = this.newGame._id;
			let pieceName = this.pieceName;
			let getPieceName = this.getPieceName;
			let updateGameBoardTile = this.updateGameBoardTile;
			let gameBoardTiles = this.gameBoardTiles;
			let setHasJumped = this.setHasJumped;
			let getAvailableJumps = this.getAvailableJumps;


			setJustCrowned(false);

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
			//selected piece has avaiable jumps
			//if any jumps are available, player must jump
			if (allowedJumps.length > 0) {
				allowedJumps.forEach(function(tile) {
					if(gameBoardTiles[tile]['x'] === newPosition[0]
						&& gameBoardTiles[tile]['y'] === newPosition[1]) {
							newTile = gameBoardTiles[tile]
							newTile.occupied = color;
							updateGameBoardTile(tile, color)
							pieceName = getPieceName()
							let oldAndNewPositions = [pieceName, oldTile.pos, newTile.pos, newTile.x, newTile.y]
							selectedPiece.pos = newTile.pos;
							selectedPiece.x = newTile.x;
							selectedPiece.y = newTile.y;
							let checkForMoreJumps = [];
							checkForMoreJumps[0] = [newTile.x,newTile.y];
							checkForMoreJumps[1] = color;
							checkForMoreJumps[2] = opponentColor;
							setSelectedPiece(selectedPiece);
							allowedJumps.length = 0;
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
								}
							}
							crownPiece(selectedPiece);
							validMoveXY.length = 0;
							validJumpXY.length = 0;
							selectedPiece = {};
							selectedPieceXY.length = 0;
							setSelectedPiece({});		
								
							setHasJumped(true);
								
							justCrowned = getJustCrowned();	
							if(justCrowned === true) {
								console.log("Changing turn - justCrowned TRUE")
								changeTurn();
							}else {
								jumpAgain(checkForMoreJumps);
							}	

							postMove(gameId, oldAndNewPositions, justCrowned);
							

					}
				});
			}
			//no jump available
			else if(allowedJumps.length === 0 && getAvailableJumps() === false) {
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
							crownPiece(selectedPiece);
							oldTile.occupied = 'empty';
							updateGameBoardTile(`tile${oldTile.pos}`,'empty')
							validMoveXY.length = 0;
							validJumpXY.length = 0;
							selectedPieceXY.length = 0;
							
							postMove(gameId, oldAndNewPositions);
							changeTurn();
					}					
				});
			}			
		},
		
		// pass xy coords to pieces
		transform(piece,player){
			let x = piece.x + 30;
			let y = piece.y + 30;
			return(`translate(${x},${y})`);
		},

		updateGameBoardTile(tile, occupied) {
			this.gameBoardTiles[tile]['occupied'] = occupied;
		},

		//implemented after dropPiece()
		// TODO: if multijump available- do not change turn
		changeTurn() {
			this.setHasJumped(false);
			this.setAvailableJumps(false);
			if(this.turn === 'red') {
				this.turn = 'blue';
			} else if(this.turn === 'blue') {
				this.turn = 'red';
			}
		},

		jumpAgain(moreJumps) {
			this.selectPiece(moreJumps[0],moreJumps[1],moreJumps[2]);
			this.getAllowedJumps();
			if(this.allowedJumps.length > 0) {
				return
			} else {
				this.changeTurn();
			}
		},

		//if crowned - player can move forwards and backwards
		crownPiece(piece) {
			let justCrowned = false;
			console.log("Piece Crown : " + piece['crown'])
			console.log("Piece Pos : " + piece['pos'])
			console.log("PIECE" + JSON.stringify(piece))


			if ((piece['crown'] === false || piece['crown'] == null) && this.turn === 'red') {
				if (piece['pos'] === 29 || piece['pos'] === 30 || piece['pos'] === 31 || piece['pos'] === 32) {
					piece['crown'] = true;
					justCrowned = true;		
					console.log("Piece Crown : " + piece['crown'])		
				}
			}
			else if ((piece['crown'] === false || piece['crown'] == null) && this.turn === 'blue') {
				if (piece['pos'] === 1 || piece['pos'] === 2 || piece['pos'] === 3 || piece['pos'] === 4) {
					piece['crown'] = true;
					justCrowned = true;
					console.log("Piece Crown : " + piece['crown'])
				}	
			}
			if (justCrowned === true) {
				this.setJustCrowned(justCrowned);
			}

		},
		
		//send move information to server
		postMove(gameId, oldAndNew, crowned) {
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

			let player1 = this.player1;
			let player2 = this.player2;

			if(player1.color === 'red' && pieceName[0] === 'r') {
				player1['pieces'][pieceName]['pos'] = oldAndNew[2];
				player1['pieces'][pieceName]['x'] = oldAndNew[3];
				player1['pieces'][pieceName]['y'] = oldAndNew[4];
				if(crowned) {
					player1['pieces'][pieceName]['crown'] = crowned;
				}
				
			} else if(player1.color === 'blue' && pieceName[0] === 'b') {
				player1['pieces'][pieceName]['pos'] = oldAndNew[2];
				player1['pieces'][pieceName]['x'] = oldAndNew[3];
				player1['pieces'][pieceName]['y'] = oldAndNew[4];
				if(crowned) {
					player1['pieces'][pieceName]['crown'] = crowned;
				}
			} else if(player2.color === 'red' && pieceName[0] === 'r') {
				player2['pieces'][pieceName]['pos'] = oldAndNew[2];
				player2['pieces'][pieceName]['x'] = oldAndNew[3];
				player2['pieces'][pieceName]['y'] = oldAndNew[4];
				if(crowned) {
					player2['pieces'][pieceName]['crown'] = crowned;
				}
			} else if(player2.color === 'blue' && pieceName[0] === 'b') {
				player2['pieces'][pieceName]['pos'] = oldAndNew[2];
				player2['pieces'][pieceName]['x'] = oldAndNew[3];
				player2['pieces'][pieceName]['y'] = oldAndNew[4];
				if(crowned) {
					player2['pieces'][pieceName]['crown'] = crowned;
				}
			}

			if(oldAndNew[5]) {
				captured = oldAndNew[5];
			}
			let postGame = {pieceName, oldpos, newpos, newX, newY, tiles, turn, captured}
			this.$http.post(`${baseUrl}newgame/moves`, {

			gameId: gameId, 
			postGame: postGame})
			.then(response => {

			}, error => {
				console.log(error);
			}).then(function() { 
				//After posting to server/db, Send current board state to socket 'board'
				socket.emit('gamedata', 'open');
				let gameData = {};
				let gameMessage = "";
				if(captured) {
					if((pieceName[0] === 'r' && player1.color === 'red' && this.user.name === player1.name)
						|| pieceName[0] === 'b' && player1.color === 'blue' && this.user.name === player1.name) {
						gameMessage = `${player1.name} captured ${player2.name}'s piece!`
					} else if((pieceName[0] === 'r' && player2.color === 'red' && this.user.name === player2.name)
						|| pieceName[0] === 'b' && player2.color === 'blue' && this.user.name === player2.name) {
						gameMessage = `${player2.name} captured ${player1.name}'s piece!`
					}
				}
				gameData.player1 = player1;
				gameData.player2 = player2;
				gameData.tiles = this.gameBoardTiles;
				gameData.turn = this.turn;
				gameData.gameMessage = gameMessage;
				socket.emit('gamedata', gameData);
			}

			);
		},

		//getters and setters. I've had namespace/this trouble updating certain variables directly.
		//getters and setters seem to help
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
		setAllowedJumps(jumps) {
			this.allowedJumps = jumps;
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
			return this.hasjumped;
		},
		setHasJumped(tf) {
			this.hasJumped = tf
		},
		getAvailableJumps() {
			return(this.availableJumps);
		},
		setAvailableJumps(tf) {
			this.availableJumps = tf;
		},
		getPlayer1() {
			return this.player1;
		},
		getPlayer2() {
			return this.player2;
		},
		getComputerMoves() {
			return this.computerMoves;
		},
		setComputerMoves(move) {
			this.computerMoves.push(move);
		},
		getComputerJumps() {
			return this.computerJumps;
		},
		setComputerJumps(jump) {
			this.computerJumps.push(jump);
		}
	}
}
</script>

<style scoped>
  svg {
    background-color: #D3D3D3
  }
</style> 