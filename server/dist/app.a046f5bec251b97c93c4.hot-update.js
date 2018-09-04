webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_GameBoard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/GameBoard.vue */ \"./src/components/game-container/game/GameBoard.vue\");\n/* harmony import */ var _game_GameScoreBoard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/GameScoreBoard.vue */ \"./src/components/game-container/game/GameScoreBoard.vue\");\n/* harmony import */ var _game_chat_GameChat_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/chat/GameChat.vue */ \"./src/components/game-container/game/chat/GameChat.vue\");\n/* harmony import */ var _game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/ChooseGame.vue */ \"./src/components/game-container/game/ChooseGame.vue\");\n/* harmony import */ var _data_RedPlayerModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/RedPlayerModel */ \"./src/data/RedPlayerModel.js\");\n/* harmony import */ var _data_UserModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/UserModel */ \"./src/data/UserModel.js\");\n/* harmony import */ var _data_Player1Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/Player1Model */ \"./src/data/Player1Model.js\");\n/* harmony import */ var _data_Player2Model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/Player2Model */ \"./src/data/Player2Model.js\");\n/* harmony import */ var _data_GameBoardModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/GameBoardModel.js */ \"./src/data/GameBoardModel.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nvar baseUrl = \"/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    onlineUsers: {\n      type: Object\n    },\n    newGame: {\n      type: Object\n    }\n  },\n  components: {\n    \"game-board\": _game_GameBoard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"game-score-board\": _game_GameScoreBoard_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"game-chat\": _game_chat_GameChat_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    \"choose-game\": _game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    //Game Container holds most of the game logic - passing props to child components 'GameScoreBoard',\n    //  GameBoard, and GameChat\n    return {\n      gameStatus: \"PLAYING\",\n      winnerId: \"\",\n      winnerName: \"\",\n      loserId: \"\",\n      draw: false,\n      player1Captures: [],\n      player2Captures: [],\n      player1: _data_Player1Model__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      player2: _data_Player2Model__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      user: _data_UserModel__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      opponent: {},\n      gameBoardTiles: _data_GameBoardModel_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n      turn: \"\",\n      info: \"\",\n      message: \"\"\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    var url = window.location.href;\n    var room = url.split('game/').pop();\n    socket.emit('joinroom', room);\n    console.log(\"join Room \" + room);\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    //Request initial game state on game created (or page refresh)\n    if (this.player1.name !== 'Player 2' && this.player2.name !== 'Player 2' && this.player1.name !== 'Computer' && this.player2.name !== 'Computer') {\n      var url = window.location.href;\n      var id = url.split('game/').pop();\n      console.log(\"NEW ID \" + id);\n      var room = url.split('game/').pop();\n      socket.emit('joinroom', room);\n      console.log(\"join Room \" + room);\n      this.$http.post(\"\".concat(baseUrl, \"newgame/board\"), {\n        id: id\n      }).then(function (response) {\n        console.log(response);\n        _this.player1 = response.body.game.player1;\n        _this.player2 = response.body.game.player2;\n        _this.gameBoardTiles = response.body.game.tiles;\n        _this.turn = response.body.game.turn;\n        _this.gameStatus = response.body.game.gameStatus;\n        console.log(\"GETTING OPPONENT\");\n\n        if (_this.user.name === _this.player1.name) {\n          _this.opponent = _this.player2;\n        } else if (_this.user.name === _this.player2.name) {\n          _this.opponent = _this.player1;\n        }\n      }, function (error) {\n        console.log(error);\n      });\n    } else {\n      this.turn = 'red';\n    }\n\n    this.listenForBoardUpdates();\n  },\n  methods: {\n    //after any piece is captured, check if either player has 12 captures\n    checkWinner: function checkWinner() {\n      var url = window.location.href;\n      var gameId = url.split('game/').pop();\n      var setGameStatus = this.setGameStatus;\n      var setWinner = this.setWinner;\n      var winnerId = this.winnerId;\n      var winnerName = this.winnerName;\n      var loserId = this.loserId;\n\n      if (this.player1Captures.length === 12) {\n        setGameStatus('OVER');\n        winnerId = this.player1.id;\n        loserId = this.player2.id;\n        winnerName = this.player1.name;\n        setWinner(winnerName);\n      } else if (this.player2Captures.length === 12) {\n        setGameStatus('OVER');\n        winnerId = this.player2.id;\n        loserId = this.player1.id;\n        winnerName = this.player2.name;\n        setWinner(winnerName);\n      } //post winner and loser info to game db collection and user db collection(for win/loss stats)\n\n\n      if (this.user.id === winnerId && this.user.id.length > 0) {\n        this.$http.post(\"\".concat(baseUrl, \"newgame/winner\"), {\n          gameId: gameId,\n          loserId: loserId,\n          winnerId: winnerId\n        }).then(function (response) {\n          console.log(response);\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    },\n    setPlayer1HasCaptured: function setPlayer1HasCaptured() {\n      var player1Captures = this.player1Captures;\n      player1Captures.length = 0;\n\n      for (var piece in this.player2.pieces) {\n        if (this.player2.pieces[piece] === 'CAPTURED') {\n          player1Captures.push(piece);\n        }\n      }\n\n      this.checkWinner();\n    },\n    setPlayer2HasCaptured: function setPlayer2HasCaptured() {\n      var player2Captures = this.player2Captures;\n      player2Captures.length = 0;\n\n      for (var piece in this.player1.pieces) {\n        if (this.player1.pieces[piece] === 'CAPTURED') {\n          player2Captures.push(piece);\n        }\n      }\n\n      this.checkWinner();\n    },\n    setTurn: function setTurn(t) {\n      this.turn = t;\n    },\n    setPlayer1: function setPlayer1(player) {\n      this.player1 = player;\n    },\n    setPlayer2: function setPlayer2(player) {\n      this.player2 = player;\n    },\n    setGameBoardTiles: function setGameBoardTiles(tiles) {\n      this.gameBoardTiles = tiles;\n    },\n    setGameStatus: function setGameStatus(status) {\n      this.gameStatus = status;\n    },\n    setWinner: function setWinner(win) {\n      this.winnerName = win;\n    },\n    //board state sent to other player via socket\n    listenForBoardUpdates: function listenForBoardUpdates() {\n      console.log(\"LISTENING FOR BOARD\");\n      var setTurn = this.setTurn;\n      var setGameBoardTiles = this.setGameBoardTiles;\n      var setPlayer1 = this.setPlayer1;\n      var setPlayer2 = this.setPlayer2;\n      var setPlayer1HasCaptured = this.setPlayer1HasCaptured;\n      var setPlayer2HasCaptured = this.setPlayer2HasCaptured;\n      console.log(\"CLIENT SOCKET ID: \" + socket.id);\n      socket.on('gamedata', function (data) {\n        console.log(\"CLIENT SOCKET ID: \" + socket.id);\n        setPlayer1(data.player1);\n        setPlayer2(data.player2);\n        setTurn(data.turn);\n        setGameBoardTiles(data.tiles);\n        setPlayer1HasCaptured();\n        setPlayer2HasCaptured();\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL0dhbWVDb250YWluZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9HYW1lQ29udGFpbmVyLnZ1ZT9hYzc5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImdhbWVcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLXRvcDoxMDBweDt3aWR0aDogMTgwMHB4O1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMSBibGFuay1jb2wgZWxcIj48L2Rpdj5cblx0XHQ8Z2FtZS1zY29yZS1ib2FyZCBjbGFzcz1cImNvbC1tZC0yIGVsXCJcblx0XHRcdDp0dXJuPVwidHVyblwiXG5cdFx0XHQ6cGxheWVyMUNhcHR1cmVzPVwicGxheWVyMUNhcHR1cmVzXCJcblx0XHRcdDpwbGF5ZXIyQ2FwdHVyZXM9XCJwbGF5ZXIyQ2FwdHVyZXNcIlxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpvcHBvbmVudD1cIm9wcG9uZW50XCJcblx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiXG5cdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIlxuXHRcdFx0OmdhbWVTdGF0dXM9XCJnYW1lU3RhdHVzXCJcblx0XHRcdDptZXNzYWdlPVwibWVzc2FnZVwiIFxuXHRcdFx0OmluZm89XCJpbmZvXCJcblx0XHRcdHN0eWxlPVwiaGVpZ2h0OjYzMHB4O3dpZHRoOjMwMHB4O2JvcmRlcjogaW5zZXQgIzJkMzUzYyAxMHB4O2JvcmRlci1yYWRpdXM6MTBweFwiPjwvZ2FtZS1zY29yZS1ib2FyZD5cblx0PGRpdiBjbGFzcz1cImNvbC1tZC0xIGJsYW5rLWNvbFwiPjwvZGl2PlxuXHRcdDxnYW1lLWJvYXJkIGNsYXNzPVwiY29sLW1kLTUgZWxcIlxuXHRcdFx0Om5ld0dhbWU9XCJuZXdHYW1lXCJcblx0XHRcdDpnYW1lU3RhdHVzPVwiZ2FtZVN0YXR1c1wiXG5cdFx0XHQ6d2lubmVyTmFtZT1cIndpbm5lck5hbWVcIlxuXHRcdFx0OmRyYXc9XCJkcmF3XCJcblx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiXG5cdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIlxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpnYW1lQm9hcmRUaWxlcz1cImdhbWVCb2FyZFRpbGVzXCJcblx0XHRcdDp0dXJuPVwidHVyblwiXG5cdFx0XHRzdHlsZT1cInBhZGRpbmc6MHB4IDBweDtoZWlnaHQ6NjMwcHg7d2lkdGg6NjMwcHg7Ym9yZGVyOiBpbnNldCAjMmQzNTNjIDE1cHhcIj48L2dhbWUtYm9hcmQ+XG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtMSBibGFuay1jb2xcIj48L2Rpdj5cblx0XHQ8Z2FtZS1jaGF0IHYtaWY9XCJwbGF5ZXIxLm5hbWUgIT09ICdQbGF5ZXIgMidcblx0XHRcdFx0XHQmJiBwbGF5ZXIyLm5hbWUgIT09ICdQbGF5ZXIgMidcIlxuXHRcdFx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiIFxuXHRcdFx0XHRcdDpwbGF5ZXIxPVwicGxheWVyMVwiIFxuXHRcdFx0XHRcdDp1c2VyPVwidXNlclwiXG5cdFx0XHRcdFx0Om9wcG9uZW50PVwib3Bwb25lbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiY29sLW1kLTJcIiBcblx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDo2MzBweDt3aWR0aDozMDBweDtib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtib3JkZXItcmFkaXVzOjEwcHhcIj48L2dhbWUtY2hhdD5cblxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWUvR2FtZUJvYXJkLnZ1ZVwiO1xuaW1wb3J0IEdhbWVTY29yZUJvYXJkIGZyb20gXCIuL2dhbWUvR2FtZVNjb3JlQm9hcmQudnVlXCI7XG5pbXBvcnQgR2FtZUNoYXQgZnJvbSBcIi4vZ2FtZS9jaGF0L0dhbWVDaGF0LnZ1ZVwiO1xuaW1wb3J0IENob29zZUdhbWUgZnJvbSAnLi9nYW1lL0Nob29zZUdhbWUudnVlJztcbmltcG9ydCByZWRQaWVjZXMgZnJvbSAnLi4vLi4vZGF0YS9SZWRQbGF5ZXJNb2RlbCc7XG5pbXBvcnQgdXNlciBmcm9tICcuLi8uLi9kYXRhL1VzZXJNb2RlbCc7XG5pbXBvcnQgcGxheWVyMSBmcm9tICcuLi8uLi9kYXRhL1BsYXllcjFNb2RlbCc7XG5pbXBvcnQgcGxheWVyMiBmcm9tICcuLi8uLi9kYXRhL1BsYXllcjJNb2RlbCc7XG5pbXBvcnQgZ2FtZUJvYXJkVGlsZXMgZnJvbSAnLi4vLi4vZGF0YS9HYW1lQm9hcmRNb2RlbC5qcydcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTDtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG5cdFx0b25saW5lVXNlcnM6IHt0eXBlOiBPYmplY3R9LFxuXHRcdG5ld0dhbWU6IHt0eXBlOiBPYmplY3R9XG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRcImdhbWUtYm9hcmRcIjogR2FtZUJvYXJkLFxuXHRcdFwiZ2FtZS1zY29yZS1ib2FyZFwiOiBHYW1lU2NvcmVCb2FyZCxcblx0XHRcImdhbWUtY2hhdFwiOiBHYW1lQ2hhdCxcblx0XHRcImNob29zZS1nYW1lXCI6IENob29zZUdhbWUsXG5cblx0fSxcblx0ZGF0YSgpIHtcblx0XHQvL0dhbWUgQ29udGFpbmVyIGhvbGRzIG1vc3Qgb2YgdGhlIGdhbWUgbG9naWMgLSBwYXNzaW5nIHByb3BzIHRvIGNoaWxkIGNvbXBvbmVudHMgJ0dhbWVTY29yZUJvYXJkJyxcblx0XHQvLyAgR2FtZUJvYXJkLCBhbmQgR2FtZUNoYXRcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2FtZVN0YXR1czogXCJQTEFZSU5HXCIsXG5cdFx0XHR3aW5uZXJJZDogXCJcIixcblx0XHRcdHdpbm5lck5hbWU6IFwiXCIsXG5cdFx0XHRsb3NlcklkOiBcIlwiLFxuXHRcdFx0ZHJhdzogZmFsc2UsXG5cdFx0XHRwbGF5ZXIxQ2FwdHVyZXM6IFtdLFxuXHRcdFx0cGxheWVyMkNhcHR1cmVzOiBbXSxcblx0XHRcdHBsYXllcjE6IHBsYXllcjEsXG5cdFx0XHRwbGF5ZXIyOiBwbGF5ZXIyLFxuXHRcdFx0dXNlcjogdXNlcixcblx0XHRcdG9wcG9uZW50OiB7fSxcblx0XHRcdGdhbWVCb2FyZFRpbGVzOiBnYW1lQm9hcmRUaWxlcyxcblx0XHRcdHR1cm46IFwiXCIsXG5cdFx0XHRpbmZvOiBcIlwiLFxuXHRcdFx0bWVzc2FnZTogXCJcIixcblx0XHR9O1xuXHR9LFxuXHRiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0XHRsZXQgcm9vbSA9IHVybC5zcGxpdCgnZ2FtZS8nKS5wb3AoKTtcblx0XHRzb2NrZXQuZW1pdCgnam9pbnJvb20nLCByb29tKTtcblx0XHRjb25zb2xlLmxvZyhcImpvaW4gUm9vbSBcIiArIHJvb20pXG5cdH0sXG5cdG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdC8vUmVxdWVzdCBpbml0aWFsIGdhbWUgc3RhdGUgb24gZ2FtZSBjcmVhdGVkIChvciBwYWdlIHJlZnJlc2gpXG5cdFx0aWYodGhpcy5wbGF5ZXIxLm5hbWUgIT09ICdQbGF5ZXIgMicgJiYgdGhpcy5wbGF5ZXIyLm5hbWUgIT09ICdQbGF5ZXIgMicgXG5cdFx0XHQmJiB0aGlzLnBsYXllcjEubmFtZSAhPT0gJ0NvbXB1dGVyJyAmJiB0aGlzLnBsYXllcjIubmFtZSAhPT0gJ0NvbXB1dGVyJyApIHtcblx0XHRcdGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblx0XHRcdGxldCBpZCA9IHVybC5zcGxpdCgnZ2FtZS8nKS5wb3AoKTtcblx0XHRcdGNvbnNvbGUubG9nKFwiTkVXIElEIFwiICsgaWQpXG5cdFx0XHRsZXQgcm9vbSA9IHVybC5zcGxpdCgnZ2FtZS8nKS5wb3AoKTtcblx0XHRcdHNvY2tldC5lbWl0KCdqb2lucm9vbScsIHJvb20pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJqb2luIFJvb20gXCIgKyByb29tKVxuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KGAke2Jhc2VVcmx9bmV3Z2FtZS9ib2FyZGAsIHtcblx0XHRcdFx0aWQ6IGlkXHR9KVxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdHRoaXMucGxheWVyMSA9IHJlc3BvbnNlLmJvZHkuZ2FtZS5wbGF5ZXIxO1xuXHRcdFx0XHRcdHRoaXMucGxheWVyMiA9IHJlc3BvbnNlLmJvZHkuZ2FtZS5wbGF5ZXIyO1xuXHRcdFx0XHRcdHRoaXMuZ2FtZUJvYXJkVGlsZXMgPSByZXNwb25zZS5ib2R5LmdhbWUudGlsZXM7XG5cdFx0XHRcdFx0dGhpcy50dXJuID0gcmVzcG9uc2UuYm9keS5nYW1lLnR1cm47XG5cdFx0XHRcdFx0dGhpcy5nYW1lU3RhdHVzID0gcmVzcG9uc2UuYm9keS5nYW1lLmdhbWVTdGF0dXM7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJHRVRUSU5HIE9QUE9ORU5UXCIpXG5cdFx0XHRcdFx0aWYodGhpcy51c2VyLm5hbWUgPT09IHRoaXMucGxheWVyMS5uYW1lKXtcblx0XHRcdFx0XHRcdHRoaXMub3Bwb25lbnQgPSB0aGlzLnBsYXllcjI7XG5cdFx0XHRcdFx0fSBlbHNlIGlmKHRoaXMudXNlci5uYW1lID09PSB0aGlzLnBsYXllcjIubmFtZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vcHBvbmVudCA9IHRoaXMucGxheWVyMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHVybiA9ICdyZWQnO1xuXHRcdH1cblx0XHR0aGlzLmxpc3RlbkZvckJvYXJkVXBkYXRlcygpO1xuXHR9LCBcblx0bWV0aG9kczoge1xuXHRcdC8vYWZ0ZXIgYW55IHBpZWNlIGlzIGNhcHR1cmVkLCBjaGVjayBpZiBlaXRoZXIgcGxheWVyIGhhcyAxMiBjYXB0dXJlc1xuXHRcdGNoZWNrV2lubmVyKCkge1xuXHRcdFx0bGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0bGV0IGdhbWVJZCA9IHVybC5zcGxpdCgnZ2FtZS8nKS5wb3AoKTtcblx0XHRcdGxldCBzZXRHYW1lU3RhdHVzID0gdGhpcy5zZXRHYW1lU3RhdHVzO1xuXHRcdFx0bGV0IHNldFdpbm5lciA9IHRoaXMuc2V0V2lubmVyO1xuXHRcdFx0bGV0IHdpbm5lcklkID0gdGhpcy53aW5uZXJJZDtcblx0XHRcdGxldCB3aW5uZXJOYW1lID0gdGhpcy53aW5uZXJOYW1lO1xuXHRcdFx0bGV0IGxvc2VySWQgPSB0aGlzLmxvc2VySWRcblxuXHRcdFx0aWYgKHRoaXMucGxheWVyMUNhcHR1cmVzLmxlbmd0aCA9PT0gMTIpIHtcblx0XHRcdFx0c2V0R2FtZVN0YXR1cygnT1ZFUicpO1xuXHRcdFx0XHR3aW5uZXJJZCA9IHRoaXMucGxheWVyMS5pZDtcblx0XHRcdFx0bG9zZXJJZCA9IHRoaXMucGxheWVyMi5pZDtcblx0XHRcdFx0d2lubmVyTmFtZSA9IHRoaXMucGxheWVyMS5uYW1lO1xuXHRcdFx0XHRzZXRXaW5uZXIod2lubmVyTmFtZSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyMkNhcHR1cmVzLmxlbmd0aCA9PT0gMTIpIHtcblx0XHRcdFx0c2V0R2FtZVN0YXR1cygnT1ZFUicpO1xuXHRcdFx0XHR3aW5uZXJJZCA9IHRoaXMucGxheWVyMi5pZDtcblx0XHRcdFx0bG9zZXJJZCA9IHRoaXMucGxheWVyMS5pZDtcblx0XHRcdFx0d2lubmVyTmFtZSA9IHRoaXMucGxheWVyMi5uYW1lO1xuXHRcdFx0XHRzZXRXaW5uZXIod2lubmVyTmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vcG9zdCB3aW5uZXIgYW5kIGxvc2VyIGluZm8gdG8gZ2FtZSBkYiBjb2xsZWN0aW9uIGFuZCB1c2VyIGRiIGNvbGxlY3Rpb24oZm9yIHdpbi9sb3NzIHN0YXRzKVxuXHRcdFx0aWYodGhpcy51c2VyLmlkID09PSB3aW5uZXJJZCAmJiB0aGlzLnVzZXIuaWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGh0dHAucG9zdChgJHtiYXNlVXJsfW5ld2dhbWUvd2lubmVyYCwge1xuXHRcdFx0XHRcdGdhbWVJZDogZ2FtZUlkLFxuXHRcdFx0XHRcdGxvc2VySWQ6IGxvc2VySWQsXG5cdFx0XHRcdFx0d2lubmVySWQ6IHdpbm5lcklkXHRcblx0XHRcdFx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXG5cdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0XG5cdFx0XHRcblxuXHRcdH0sXG5cdFx0c2V0UGxheWVyMUhhc0NhcHR1cmVkKCkge1xuXHRcdFx0bGV0IHBsYXllcjFDYXB0dXJlcyA9IHRoaXMucGxheWVyMUNhcHR1cmVzO1xuXHRcdFx0cGxheWVyMUNhcHR1cmVzLmxlbmd0aCA9IDA7XG5cdFx0XHRmb3IobGV0IHBpZWNlIGluIHRoaXMucGxheWVyMi5waWVjZXMpIHtcblx0XHRcdFx0aWYodGhpcy5wbGF5ZXIyLnBpZWNlc1twaWVjZV0gPT09ICdDQVBUVVJFRCcpIHtcblx0XHRcdFx0XHRwbGF5ZXIxQ2FwdHVyZXMucHVzaChwaWVjZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuY2hlY2tXaW5uZXIoKTtcblx0XHR9LFxuXHRcdHNldFBsYXllcjJIYXNDYXB0dXJlZCgpIHtcblx0XHRcdGxldCBwbGF5ZXIyQ2FwdHVyZXMgPSB0aGlzLnBsYXllcjJDYXB0dXJlcztcblx0XHRcdHBsYXllcjJDYXB0dXJlcy5sZW5ndGggPSAwO1xuXHRcdFx0Zm9yKGxldCBwaWVjZSBpbiB0aGlzLnBsYXllcjEucGllY2VzKSB7XG5cdFx0XHRcdGlmKHRoaXMucGxheWVyMS5waWVjZXNbcGllY2VdID09PSAnQ0FQVFVSRUQnKSB7XG5cdFx0XHRcdFx0cGxheWVyMkNhcHR1cmVzLnB1c2gocGllY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNoZWNrV2lubmVyKCk7XG5cblx0XHR9LFxuXHRcdHNldFR1cm4odCkge1xuXHRcdFx0dGhpcy50dXJuID0gdDtcblx0XHR9LFxuXHRcdHNldFBsYXllcjEocGxheWVyKSB7XG5cdFx0XHR0aGlzLnBsYXllcjEgPSBwbGF5ZXI7XG5cdFx0fSxcblx0XHRzZXRQbGF5ZXIyKHBsYXllcikge1xuXHRcdFx0dGhpcy5wbGF5ZXIyID0gcGxheWVyO1xuXHRcdH0sXG5cdFx0c2V0R2FtZUJvYXJkVGlsZXModGlsZXMpIHtcblx0XHRcdHRoaXMuZ2FtZUJvYXJkVGlsZXMgPSB0aWxlcztcblx0XHR9LFxuXHRcdHNldEdhbWVTdGF0dXMoc3RhdHVzKSB7XG5cdFx0XHR0aGlzLmdhbWVTdGF0dXMgPSBzdGF0dXM7XG5cdFx0fSxcblx0XHRzZXRXaW5uZXIod2luKSB7XG5cdFx0XHR0aGlzLndpbm5lck5hbWUgPSB3aW47XG5cdFx0fSxcblx0XHQvL2JvYXJkIHN0YXRlIHNlbnQgdG8gb3RoZXIgcGxheWVyIHZpYSBzb2NrZXRcblx0XHRsaXN0ZW5Gb3JCb2FyZFVwZGF0ZXMoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkxJU1RFTklORyBGT1IgQk9BUkRcIilcblx0XHRcdGxldCBzZXRUdXJuID0gdGhpcy5zZXRUdXJuO1xuXHRcdFx0bGV0IHNldEdhbWVCb2FyZFRpbGVzID0gdGhpcy5zZXRHYW1lQm9hcmRUaWxlcztcblx0XHRcdGxldCBzZXRQbGF5ZXIxID0gdGhpcy5zZXRQbGF5ZXIxO1xuXHRcdFx0bGV0IHNldFBsYXllcjIgPSB0aGlzLnNldFBsYXllcjI7XG5cdFx0XHRsZXQgc2V0UGxheWVyMUhhc0NhcHR1cmVkID0gdGhpcy5zZXRQbGF5ZXIxSGFzQ2FwdHVyZWQ7XG5cdFx0XHRsZXQgc2V0UGxheWVyMkhhc0NhcHR1cmVkID0gdGhpcy5zZXRQbGF5ZXIySGFzQ2FwdHVyZWQ7XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiQ0xJRU5UIFNPQ0tFVCBJRDogXCIgKyBzb2NrZXQuaWQpXG4gICAgICAgICAgICBzb2NrZXQub24oJ2dhbWVkYXRhJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNMSUVOVCBTT0NLRVQgSUQ6IFwiICsgc29ja2V0LmlkKVxuXHRcdFx0XHRzZXRQbGF5ZXIxKGRhdGEucGxheWVyMSk7XG5cdFx0XHRcdHNldFBsYXllcjIoZGF0YS5wbGF5ZXIyKTtcblx0XHRcdFx0c2V0VHVybihkYXRhLnR1cm4pO1xuXHRcdFx0XHRzZXRHYW1lQm9hcmRUaWxlcyhkYXRhLnRpbGVzKTtcblx0XHRcdFx0c2V0UGxheWVyMUhhc0NhcHR1cmVkKCk7XG5cdFx0XHRcdHNldFBsYXllcjJIYXNDYXB0dXJlZCgpO1xuXG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbiNnYW1lIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cdC5ibGFuay1jb2wge1xuXHRcdHdpZHRoOiAxMHB4XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDE1MDBweCkge1xuXHQuYmxhbmstY29sIHtcblx0XHR3aWR0aDogNjBweDtcblx0fVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2NTBweCkge1xuXHQuYmxhbmstY29sIHtcblx0XHR3aWR0aDogMTQwcHg7XG5cdH1cbn1cbjwvc3R5bGU+XG4gXG5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQXZHQTtBQXhFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js&\n");

/***/ })

})