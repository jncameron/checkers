webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_GameBoard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/GameBoard.vue */ \"./src/components/game-container/game/GameBoard.vue\");\n/* harmony import */ var _game_GameScoreBoard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/GameScoreBoard.vue */ \"./src/components/game-container/game/GameScoreBoard.vue\");\n/* harmony import */ var _game_chat_GameChat_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/chat/GameChat.vue */ \"./src/components/game-container/game/chat/GameChat.vue\");\n/* harmony import */ var _game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/ChooseGame.vue */ \"./src/components/game-container/game/ChooseGame.vue\");\n/* harmony import */ var _data_RedPlayerModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/RedPlayerModel */ \"./src/data/RedPlayerModel.js\");\n/* harmony import */ var _data_UserModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/UserModel */ \"./src/data/UserModel.js\");\n/* harmony import */ var _data_Player1Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/Player1Model */ \"./src/data/Player1Model.js\");\n/* harmony import */ var _data_Player2Model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/Player2Model */ \"./src/data/Player2Model.js\");\n/* harmony import */ var _data_GameBoardModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/GameBoardModel.js */ \"./src/data/GameBoardModel.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nvar baseUrl = \"/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    onlineUsers: {\n      type: Object\n    },\n    newGame: {\n      type: Object\n    }\n  },\n  components: {\n    \"game-board\": _game_GameBoard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"game-score-board\": _game_GameScoreBoard_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"game-chat\": _game_chat_GameChat_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    \"choose-game\": _game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  watch: {\n    windowWidth: function windowWidth(newWidth, oldWidth) {\n      console.log(\"hi \" + newWidth);\n    }\n  },\n  data: function data() {\n    //Game Container holds most of the game logic - passing props to child components 'GameScoreBoard',\n    //  GameBoard, and GameChat\n    return {\n      gameStatus: \"PLAYING\",\n      winnerId: \"\",\n      winnerName: \"\",\n      loserId: \"\",\n      draw: false,\n      player1Captures: [],\n      player2Captures: [],\n      player1: _data_Player1Model__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      player2: _data_Player2Model__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      user: _data_UserModel__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      opponent: {},\n      gameBoardTiles: _data_GameBoardModel_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n      turn: \"\",\n      info: \"\",\n      message: \"\",\n      windowWidth: window.innerWidth\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    var url = window.location.href;\n    var room = url.split('game/').pop();\n    socket.emit('joinroom', room);\n    console.log(\"join Room \" + room);\n  },\n  computed: {\n    blankCol: function blankCol() {\n      if (this.player2.name === 'Computer' || this.player2.name === 'Player 2') {\n        return 'large-blank-col';\n      } else {\n        return 'small-blank-col';\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    //Request initial game state on game created (or page refresh)\n    if (this.player2.name !== 'Computer') {\n      var url = window.location.href;\n      var id = url.split('game/').pop();\n      console.log(\"NEW ID \" + id);\n      var room = url.split('game/').pop();\n      socket.emit('joinroom', room);\n      console.log(\"join Room \" + room);\n\n      if (this.player1.name !== this.user.name) {\n        this.$http.post(\"\".concat(baseUrl, \"newgame/board\"), {\n          id: id\n        }).then(function (response) {\n          console.log(response);\n          _this.player1 = response.body.game.player1;\n          _this.player2 = response.body.game.player2;\n          _this.gameBoardTiles = response.body.game.tiles;\n          _this.turn = response.body.game.turn;\n          _this.gameStatus = response.body.game.gameStatus;\n          console.log(\"GETTING OPPONENT\");\n          _this.opponent = _this.player1;\n        }, function (error) {\n          console.log(error);\n        });\n      } else {\n        this.opponent = this.player2;\n        this.turn = 'red';\n      }\n    } else {\n      this.turn = 'red';\n    }\n\n    this.$nextTick(function () {\n      window.addEventListener('resize', function () {\n        _this.windowWidth = window.innerWidth;\n      });\n    });\n    this.listenForBoardUpdates();\n  },\n  methods: {\n    //after any piece is captured, check if either player has 12 captures\n    checkWinner: function checkWinner() {\n      var url = window.location.href;\n      var gameId = url.split('game/').pop();\n      var setGameStatus = this.setGameStatus;\n      var setWinner = this.setWinner;\n      var winnerId = this.winnerId;\n      var winnerName = this.winnerName;\n      var loserId = this.loserId;\n\n      if (this.player1Captures.length === 12) {\n        setGameStatus('OVER');\n        winnerId = this.player1.id;\n        loserId = this.player2.id;\n        winnerName = this.player1.name;\n        setWinner(winnerName);\n      } else if (this.player2Captures.length === 12) {\n        setGameStatus('OVER');\n        winnerId = this.player2.id;\n        loserId = this.player1.id;\n        winnerName = this.player2.name;\n        setWinner(winnerName);\n      } //post winner and loser info to game db collection and user db collection(for win/loss stats)\n\n\n      if (this.user.id === winnerId && this.user.id.length > 0) {\n        this.$http.post(\"\".concat(baseUrl, \"newgame/winner\"), {\n          gameId: gameId,\n          loserId: loserId,\n          winnerId: winnerId\n        }).then(function (response) {\n          console.log(response);\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    },\n    setPlayer1HasCaptured: function setPlayer1HasCaptured() {\n      var player1Captures = this.player1Captures;\n      player1Captures.length = 0;\n\n      for (var piece in this.player2.pieces) {\n        if (this.player2.pieces[piece] === 'CAPTURED') {\n          player1Captures.push(piece);\n        }\n      }\n\n      this.checkWinner();\n    },\n    setPlayer2HasCaptured: function setPlayer2HasCaptured() {\n      var player2Captures = this.player2Captures;\n      player2Captures.length = 0;\n\n      for (var piece in this.player1.pieces) {\n        if (this.player1.pieces[piece] === 'CAPTURED') {\n          player2Captures.push(piece);\n        }\n      }\n\n      this.checkWinner();\n    },\n    setTurn: function setTurn(t) {\n      this.turn = t;\n    },\n    setPlayer1: function setPlayer1(player) {\n      this.player1 = player;\n    },\n    setPlayer2: function setPlayer2(player) {\n      this.player2 = player;\n    },\n    setGameBoardTiles: function setGameBoardTiles(tiles) {\n      this.gameBoardTiles = tiles;\n    },\n    setGameStatus: function setGameStatus(status) {\n      this.gameStatus = status;\n    },\n    setWinner: function setWinner(win) {\n      this.winnerName = win;\n    },\n    setBlankCol: function setBlankCol(value) {\n      this.blankCol = value;\n    },\n    //board state sent to other player via socket\n    listenForBoardUpdates: function listenForBoardUpdates() {\n      console.log(\"LISTENING FOR BOARD\");\n      var setTurn = this.setTurn;\n      var setGameBoardTiles = this.setGameBoardTiles;\n      var setPlayer1 = this.setPlayer1;\n      var setPlayer2 = this.setPlayer2;\n      var setPlayer1HasCaptured = this.setPlayer1HasCaptured;\n      var setPlayer2HasCaptured = this.setPlayer2HasCaptured;\n      console.log(\"CLIENT SOCKET ID: \" + socket.id);\n      socket.on('gamedata', function (data) {\n        console.log(\"CLIENT SOCKET ID: \" + socket.id);\n        setPlayer1(data.player1);\n        setPlayer2(data.player2);\n        setTurn(data.turn);\n        setGameBoardTiles(data.tiles);\n        setPlayer1HasCaptured();\n        setPlayer2HasCaptured();\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL0dhbWVDb250YWluZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9HYW1lQ29udGFpbmVyLnZ1ZT9hYzc5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImdhbWVcIj5cblx0XHQ8ZGl2IHYtYmluZDpjbGFzcz1cImJsYW5rQ29sXCI+PC9kaXY+XG5cdFx0PGdhbWUtc2NvcmUtYm9hcmQgdi1pZj1cIndpbmRvd1dpZHRoID4gNTAwXCIgY2xhc3M9XCJjb2wtbWQtMiBnYW1lLXNjb3JlLWJvYXJkXCJcblx0XHRcdDp0dXJuPVwidHVyblwiXG5cdFx0XHQ6cGxheWVyMUNhcHR1cmVzPVwicGxheWVyMUNhcHR1cmVzXCJcblx0XHRcdDpwbGF5ZXIyQ2FwdHVyZXM9XCJwbGF5ZXIyQ2FwdHVyZXNcIlxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpvcHBvbmVudD1cIm9wcG9uZW50XCJcblx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiXG5cdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIlxuXHRcdFx0OmdhbWVTdGF0dXM9XCJnYW1lU3RhdHVzXCJcblx0XHRcdDptZXNzYWdlPVwibWVzc2FnZVwiIFxuXHRcdFx0OmluZm89XCJpbmZvXCJcblx0XHRcdD48L2dhbWUtc2NvcmUtYm9hcmQ+XG5cdDxkaXYgdi1iaW5kOmNsYXNzPVwiYmxhbmtDb2xcIj48L2Rpdj5cblx0XHQ8Z2FtZS1ib2FyZCBjbGFzcz1cImNvbC1tZC01IGdhbWUtYm9hcmRcIlxuXHRcdFx0Om5ld0dhbWU9XCJuZXdHYW1lXCJcblx0XHRcdDpnYW1lU3RhdHVzPVwiZ2FtZVN0YXR1c1wiXG5cdFx0XHQ6d2lubmVyTmFtZT1cIndpbm5lck5hbWVcIlxuXHRcdFx0OmRyYXc9XCJkcmF3XCJcblx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiXG5cdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIlxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpnYW1lQm9hcmRUaWxlcz1cImdhbWVCb2FyZFRpbGVzXCJcblx0XHRcdDp0dXJuPVwidHVyblwiXG5cdFx0XHQ+PC9nYW1lLWJvYXJkPlxuXHQ8ZGl2IHYtYmluZDpjbGFzcz1cImJsYW5rQ29sXCI+PC9kaXY+XG5cdFx0PGdhbWUtY2hhdCB2LWlmPVwiIHdpbmRvd1dpZHRoID4gNTAwIFxuXHRcdFx0JiYgdGhpcy5wbGF5ZXIyLm5hbWUgIT09ICdDb21wdXRlcicgXG5cdFx0XHQmJiB0aGlzLnBsYXllcjIubmFtZSAhPT0gJ1BsYXllciAyJ1wiXG5cdFx0XHRcdFx0OnBsYXllcjI9XCJwbGF5ZXIyXCIgXG5cdFx0XHRcdFx0OnBsYXllcjE9XCJwbGF5ZXIxXCIgXG5cdFx0XHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdFx0XHQ6b3Bwb25lbnQ9XCJvcHBvbmVudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJjb2wtbWQtMiBnYW1lLWNoYXRcIiBcblx0XHRcdFx0XHQ+PC9nYW1lLWNoYXQ+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lL0dhbWVCb2FyZC52dWVcIjtcbmltcG9ydCBHYW1lU2NvcmVCb2FyZCBmcm9tIFwiLi9nYW1lL0dhbWVTY29yZUJvYXJkLnZ1ZVwiO1xuaW1wb3J0IEdhbWVDaGF0IGZyb20gXCIuL2dhbWUvY2hhdC9HYW1lQ2hhdC52dWVcIjtcbmltcG9ydCBDaG9vc2VHYW1lIGZyb20gJy4vZ2FtZS9DaG9vc2VHYW1lLnZ1ZSc7XG5pbXBvcnQgcmVkUGllY2VzIGZyb20gJy4uLy4uL2RhdGEvUmVkUGxheWVyTW9kZWwnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vLi4vZGF0YS9Vc2VyTW9kZWwnO1xuaW1wb3J0IHBsYXllcjEgZnJvbSAnLi4vLi4vZGF0YS9QbGF5ZXIxTW9kZWwnO1xuaW1wb3J0IHBsYXllcjIgZnJvbSAnLi4vLi4vZGF0YS9QbGF5ZXIyTW9kZWwnO1xuaW1wb3J0IGdhbWVCb2FyZFRpbGVzIGZyb20gJy4uLy4uL2RhdGEvR2FtZUJvYXJkTW9kZWwuanMnXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkw7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuXHRcdG9ubGluZVVzZXJzOiB7dHlwZTogT2JqZWN0fSxcblx0XHRuZXdHYW1lOiB7dHlwZTogT2JqZWN0fVxuXHR9LFxuXHRjb21wb25lbnRzOiB7XG5cdFx0XCJnYW1lLWJvYXJkXCI6IEdhbWVCb2FyZCxcblx0XHRcImdhbWUtc2NvcmUtYm9hcmRcIjogR2FtZVNjb3JlQm9hcmQsXG5cdFx0XCJnYW1lLWNoYXRcIjogR2FtZUNoYXQsXG5cdFx0XCJjaG9vc2UtZ2FtZVwiOiBDaG9vc2VHYW1lLFxuXG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0d2luZG93V2lkdGgobmV3V2lkdGgsIG9sZFdpZHRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGkgXCIgKyBuZXdXaWR0aClcbiAgICAgICAgfVxuXHR9LFxuXG5cdGRhdGEoKSB7XG5cdFx0Ly9HYW1lIENvbnRhaW5lciBob2xkcyBtb3N0IG9mIHRoZSBnYW1lIGxvZ2ljIC0gcGFzc2luZyBwcm9wcyB0byBjaGlsZCBjb21wb25lbnRzICdHYW1lU2NvcmVCb2FyZCcsXG5cdFx0Ly8gIEdhbWVCb2FyZCwgYW5kIEdhbWVDaGF0XG5cdFx0cmV0dXJuIHtcblx0XHRcdGdhbWVTdGF0dXM6IFwiUExBWUlOR1wiLFxuXHRcdFx0d2lubmVySWQ6IFwiXCIsXG5cdFx0XHR3aW5uZXJOYW1lOiBcIlwiLFxuXHRcdFx0bG9zZXJJZDogXCJcIixcblx0XHRcdGRyYXc6IGZhbHNlLFxuXHRcdFx0cGxheWVyMUNhcHR1cmVzOiBbXSxcblx0XHRcdHBsYXllcjJDYXB0dXJlczogW10sXG5cdFx0XHRwbGF5ZXIxOiBwbGF5ZXIxLFxuXHRcdFx0cGxheWVyMjogcGxheWVyMixcblx0XHRcdHVzZXI6IHVzZXIsXG5cdFx0XHRvcHBvbmVudDoge30sXG5cdFx0XHRnYW1lQm9hcmRUaWxlczogZ2FtZUJvYXJkVGlsZXMsXG5cdFx0XHR0dXJuOiBcIlwiLFxuXHRcdFx0aW5mbzogXCJcIixcblx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHR3aW5kb3dXaWR0aDogd2luZG93LmlubmVyV2lkdGgsXG5cdFx0fTtcblx0fSxcblx0YmVmb3JlQ3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHRsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cdFx0bGV0IHJvb20gPSB1cmwuc3BsaXQoJ2dhbWUvJykucG9wKCk7XG5cdFx0c29ja2V0LmVtaXQoJ2pvaW5yb29tJywgcm9vbSk7XG5cdFx0Y29uc29sZS5sb2coXCJqb2luIFJvb20gXCIgKyByb29tKVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGJsYW5rQ29sKCkge1xuXHRcdFx0aWYodGhpcy5wbGF5ZXIyLm5hbWUgPT09ICdDb21wdXRlcicgfHwgdGhpcy5wbGF5ZXIyLm5hbWUgPT09ICdQbGF5ZXIgMicpIHtcblx0XHRcdFx0cmV0dXJuICdsYXJnZS1ibGFuay1jb2wnXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuICdzbWFsbC1ibGFuay1jb2wnXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRtb3VudGVkOiBmdW5jdGlvbigpIHtcblx0XHQvL1JlcXVlc3QgaW5pdGlhbCBnYW1lIHN0YXRlIG9uIGdhbWUgY3JlYXRlZCAob3IgcGFnZSByZWZyZXNoKVxuXHRcdGlmKHRoaXMucGxheWVyMi5uYW1lICE9PSAnQ29tcHV0ZXInICkge1xuXHRcdFx0bGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0bGV0IGlkID0gdXJsLnNwbGl0KCdnYW1lLycpLnBvcCgpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJORVcgSUQgXCIgKyBpZClcblx0XHRcdGxldCByb29tID0gdXJsLnNwbGl0KCdnYW1lLycpLnBvcCgpO1xuXHRcdFx0c29ja2V0LmVtaXQoJ2pvaW5yb29tJywgcm9vbSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcImpvaW4gUm9vbSBcIiArIHJvb20pXG5cdFx0XHRpZih0aGlzLnBsYXllcjEubmFtZSAhPT0gdGhpcy51c2VyLm5hbWUpIHtcblx0XHRcdFx0dGhpcy4kaHR0cC5wb3N0KGAke2Jhc2VVcmx9bmV3Z2FtZS9ib2FyZGAsIHtcblx0XHRcdFx0XHRpZDogaWRcdH0pXG5cdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXIxID0gcmVzcG9uc2UuYm9keS5nYW1lLnBsYXllcjE7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllcjIgPSByZXNwb25zZS5ib2R5LmdhbWUucGxheWVyMjtcblx0XHRcdFx0XHRcdHRoaXMuZ2FtZUJvYXJkVGlsZXMgPSByZXNwb25zZS5ib2R5LmdhbWUudGlsZXM7XG5cdFx0XHRcdFx0XHR0aGlzLnR1cm4gPSByZXNwb25zZS5ib2R5LmdhbWUudHVybjtcblx0XHRcdFx0XHRcdHRoaXMuZ2FtZVN0YXR1cyA9IHJlc3BvbnNlLmJvZHkuZ2FtZS5nYW1lU3RhdHVzO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJHRVRUSU5HIE9QUE9ORU5UXCIpXG5cdFx0XHRcdFx0XHR0aGlzLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXIxO1xuXHRcdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Bwb25lbnQgPSB0aGlzLnBsYXllcjI7XG5cdFx0XHR0aGlzLnR1cm4gPSAncmVkJztcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnR1cm4gPSAncmVkJztcblx0XHR9XG5cdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblx0XHR0aGlzLmxpc3RlbkZvckJvYXJkVXBkYXRlcygpO1xuXHR9LCBcblx0bWV0aG9kczoge1xuXHRcdC8vYWZ0ZXIgYW55IHBpZWNlIGlzIGNhcHR1cmVkLCBjaGVjayBpZiBlaXRoZXIgcGxheWVyIGhhcyAxMiBjYXB0dXJlc1xuXHRcdGNoZWNrV2lubmVyKCkge1xuXHRcdFx0bGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXHRcdFx0bGV0IGdhbWVJZCA9IHVybC5zcGxpdCgnZ2FtZS8nKS5wb3AoKTtcblx0XHRcdGxldCBzZXRHYW1lU3RhdHVzID0gdGhpcy5zZXRHYW1lU3RhdHVzO1xuXHRcdFx0bGV0IHNldFdpbm5lciA9IHRoaXMuc2V0V2lubmVyO1xuXHRcdFx0bGV0IHdpbm5lcklkID0gdGhpcy53aW5uZXJJZDtcblx0XHRcdGxldCB3aW5uZXJOYW1lID0gdGhpcy53aW5uZXJOYW1lO1xuXHRcdFx0bGV0IGxvc2VySWQgPSB0aGlzLmxvc2VySWRcblxuXHRcdFx0aWYgKHRoaXMucGxheWVyMUNhcHR1cmVzLmxlbmd0aCA9PT0gMTIpIHtcblx0XHRcdFx0c2V0R2FtZVN0YXR1cygnT1ZFUicpO1xuXHRcdFx0XHR3aW5uZXJJZCA9IHRoaXMucGxheWVyMS5pZDtcblx0XHRcdFx0bG9zZXJJZCA9IHRoaXMucGxheWVyMi5pZDtcblx0XHRcdFx0d2lubmVyTmFtZSA9IHRoaXMucGxheWVyMS5uYW1lO1xuXHRcdFx0XHRzZXRXaW5uZXIod2lubmVyTmFtZSk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMucGxheWVyMkNhcHR1cmVzLmxlbmd0aCA9PT0gMTIpIHtcblx0XHRcdFx0c2V0R2FtZVN0YXR1cygnT1ZFUicpO1xuXHRcdFx0XHR3aW5uZXJJZCA9IHRoaXMucGxheWVyMi5pZDtcblx0XHRcdFx0bG9zZXJJZCA9IHRoaXMucGxheWVyMS5pZDtcblx0XHRcdFx0d2lubmVyTmFtZSA9IHRoaXMucGxheWVyMi5uYW1lO1xuXHRcdFx0XHRzZXRXaW5uZXIod2lubmVyTmFtZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vcG9zdCB3aW5uZXIgYW5kIGxvc2VyIGluZm8gdG8gZ2FtZSBkYiBjb2xsZWN0aW9uIGFuZCB1c2VyIGRiIGNvbGxlY3Rpb24oZm9yIHdpbi9sb3NzIHN0YXRzKVxuXHRcdFx0aWYodGhpcy51c2VyLmlkID09PSB3aW5uZXJJZCAmJiB0aGlzLnVzZXIuaWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHRoaXMuJGh0dHAucG9zdChgJHtiYXNlVXJsfW5ld2dhbWUvd2lubmVyYCwge1xuXHRcdFx0XHRcdGdhbWVJZDogZ2FtZUlkLFxuXHRcdFx0XHRcdGxvc2VySWQ6IGxvc2VySWQsXG5cdFx0XHRcdFx0d2lubmVySWQ6IHdpbm5lcklkXHRcblx0XHRcdFx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpXG5cdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNldFBsYXllcjFIYXNDYXB0dXJlZCgpIHtcblx0XHRcdGxldCBwbGF5ZXIxQ2FwdHVyZXMgPSB0aGlzLnBsYXllcjFDYXB0dXJlcztcblx0XHRcdHBsYXllcjFDYXB0dXJlcy5sZW5ndGggPSAwO1xuXHRcdFx0Zm9yKGxldCBwaWVjZSBpbiB0aGlzLnBsYXllcjIucGllY2VzKSB7XG5cdFx0XHRcdGlmKHRoaXMucGxheWVyMi5waWVjZXNbcGllY2VdID09PSAnQ0FQVFVSRUQnKSB7XG5cdFx0XHRcdFx0cGxheWVyMUNhcHR1cmVzLnB1c2gocGllY2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNoZWNrV2lubmVyKCk7XG5cdFx0fSxcblx0XHRzZXRQbGF5ZXIySGFzQ2FwdHVyZWQoKSB7XG5cdFx0XHRsZXQgcGxheWVyMkNhcHR1cmVzID0gdGhpcy5wbGF5ZXIyQ2FwdHVyZXM7XG5cdFx0XHRwbGF5ZXIyQ2FwdHVyZXMubGVuZ3RoID0gMDtcblx0XHRcdGZvcihsZXQgcGllY2UgaW4gdGhpcy5wbGF5ZXIxLnBpZWNlcykge1xuXHRcdFx0XHRpZih0aGlzLnBsYXllcjEucGllY2VzW3BpZWNlXSA9PT0gJ0NBUFRVUkVEJykge1xuXHRcdFx0XHRcdHBsYXllcjJDYXB0dXJlcy5wdXNoKHBpZWNlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5jaGVja1dpbm5lcigpO1xuXG5cdFx0fSxcblx0XHRzZXRUdXJuKHQpIHtcblx0XHRcdHRoaXMudHVybiA9IHQ7XG5cdFx0fSxcblx0XHRzZXRQbGF5ZXIxKHBsYXllcikge1xuXHRcdFx0dGhpcy5wbGF5ZXIxID0gcGxheWVyO1xuXHRcdH0sXG5cdFx0c2V0UGxheWVyMihwbGF5ZXIpIHtcblx0XHRcdHRoaXMucGxheWVyMiA9IHBsYXllcjtcblx0XHR9LFxuXHRcdHNldEdhbWVCb2FyZFRpbGVzKHRpbGVzKSB7XG5cdFx0XHR0aGlzLmdhbWVCb2FyZFRpbGVzID0gdGlsZXM7XG5cdFx0fSxcblx0XHRzZXRHYW1lU3RhdHVzKHN0YXR1cykge1xuXHRcdFx0dGhpcy5nYW1lU3RhdHVzID0gc3RhdHVzO1xuXHRcdH0sXG5cdFx0c2V0V2lubmVyKHdpbikge1xuXHRcdFx0dGhpcy53aW5uZXJOYW1lID0gd2luO1xuXHRcdH0sXG5cdFx0c2V0QmxhbmtDb2wodmFsdWUpIHtcblx0XHRcdHRoaXMuYmxhbmtDb2wgPSB2YWx1ZTtcblx0XHR9LFxuXHRcdC8vYm9hcmQgc3RhdGUgc2VudCB0byBvdGhlciBwbGF5ZXIgdmlhIHNvY2tldFxuXHRcdGxpc3RlbkZvckJvYXJkVXBkYXRlcygpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTElTVEVOSU5HIEZPUiBCT0FSRFwiKVxuXHRcdFx0bGV0IHNldFR1cm4gPSB0aGlzLnNldFR1cm47XG5cdFx0XHRsZXQgc2V0R2FtZUJvYXJkVGlsZXMgPSB0aGlzLnNldEdhbWVCb2FyZFRpbGVzO1xuXHRcdFx0bGV0IHNldFBsYXllcjEgPSB0aGlzLnNldFBsYXllcjE7XG5cdFx0XHRsZXQgc2V0UGxheWVyMiA9IHRoaXMuc2V0UGxheWVyMjtcblx0XHRcdGxldCBzZXRQbGF5ZXIxSGFzQ2FwdHVyZWQgPSB0aGlzLnNldFBsYXllcjFIYXNDYXB0dXJlZDtcblx0XHRcdGxldCBzZXRQbGF5ZXIySGFzQ2FwdHVyZWQgPSB0aGlzLnNldFBsYXllcjJIYXNDYXB0dXJlZDtcblxuXHRcdFx0Y29uc29sZS5sb2coXCJDTElFTlQgU09DS0VUIElEOiBcIiArIHNvY2tldC5pZClcbiAgICAgICAgICAgIHNvY2tldC5vbignZ2FtZWRhdGEnLCBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQ0xJRU5UIFNPQ0tFVCBJRDogXCIgKyBzb2NrZXQuaWQpXG5cdFx0XHRcdHNldFBsYXllcjEoZGF0YS5wbGF5ZXIxKTtcblx0XHRcdFx0c2V0UGxheWVyMihkYXRhLnBsYXllcjIpO1xuXHRcdFx0XHRzZXRUdXJuKGRhdGEudHVybik7XG5cdFx0XHRcdHNldEdhbWVCb2FyZFRpbGVzKGRhdGEudGlsZXMpO1xuXHRcdFx0XHRzZXRQbGF5ZXIxSGFzQ2FwdHVyZWQoKTtcblx0XHRcdFx0c2V0UGxheWVyMkhhc0NhcHR1cmVkKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmJsYW5rLWNvbCB7XG5cdHdpZHRoOiAwcHg7XG5cdHBhZGRpbmc6IDAgMDtcbn1cbi5nYW1lLXNjb3JlLWJvYXJkIHtcblx0aGVpZ2h0Ojg1dnc7XG5cdHdpZHRoOjIwMHB4O1xufVxuLmdhbWUtYm9hcmQge1xuXHRwYWRkaW5nOjBweCAwcHg7XG5cdGhlaWdodDoxMDB2dztcblx0d2lkdGg6MTAwdnc7XG5cdGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4XG59XG4uZ2FtZS1jaGF0IHtcblx0aGVpZ2h0Ojg1dnc7XG5cdHdpZHRoOjIwMHB4O1xuXHRib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcblx0Ym9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4jZ2FtZSB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZ2FtZSB7XG5cdG1hcmdpbi1sZWZ0OmF1dG87XG5cdG1hcmdpbi1yaWdodDphdXRvO1xuXHRtYXJnaW4tdG9wOjQwcHg7XG59XG4uc21hbGwtYmxhbmstY29sIHtcblx0d2lkdGg6MzBweDtcbn1cbi5sYXJnZS1ibGFuay1jb2wge1xuXHR3aWR0aDo3MHB4O1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDIwMHB4KSBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcblx0LmdhbWUge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cblx0fVxuXHQuZ2FtZS1ib2FyZCB7XG5cdFx0bWFyZ2luLWxlZnQ6YXV0bztcblx0XHRtYXJnaW4tcmlnaHQ6YXV0bztcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdHdpZHRoOiAzMDBweDtcblx0fVxuXHQuZ2FtZS1zY29yZS1ib2FyZCB7XG5cdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcblx0XHRib3JkZXItcmFkaXVzOjEwcHhcblx0fVxuXHQuZ2FtZS1jaGF0IHtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxMHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6MTBweFxuXHR9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMzAwcHgpIGFuZCAobWluLXdpZHRoOiA2NTBweCl7XG5cdC5nYW1lIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG5cdC5nYW1lLXNjb3JlLWJvYXJkIHtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdHdpZHRoOiAyNTBweDtcblx0XHRib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcblx0XHRib3JkZXItcmFkaXVzOjEwcHhcblx0fVxuXHQuZ2FtZS1ib2FyZCB7XG5cdFx0cGFkZGluZzowcHggMHB4O1xuXHRcdGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4XG5cdH1cblx0LmdhbWUtY2hhdCB7XG5cdFx0aGVpZ2h0OiAzMDBweDtcblx0XHR3aWR0aDogMjUwcHg7XG5cdFx0Ym9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czoxMHB4O1xuXHR9XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogNTQwcHgpIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuXHQuZ2FtZSB7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0fVxuXHQuZ2FtZS1zY29yZS1ib2FyZCB7XG5cdFx0aGVpZ2h0OiA0NTBweDtcblx0XHR3aWR0aDogMjUwcHg7XG5cblx0fVxuXHQuZ2FtZS1ib2FyZCB7XG5cdFx0aGVpZ2h0OiA0NTBweDtcblx0XHR3aWR0aDogNDUwcHg7XG5cdH1cblx0LmdhbWUtY2hhdCB7XG5cdFx0aGVpZ2h0OiA0NTBweDtcblx0XHR3aWR0aDogMjUwcHg7XG5cblx0fVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDY0MHB4KSB7XG5cdC5nYW1lIHtcblx0XHRtYXJnaW4tdG9wOiAyNXB4O1xuXHR9XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcblx0LmdhbWUge1xuXHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdH1cblx0LmdhbWUtc2NvcmUtYm9hcmQge1xuXHRcdGhlaWdodDogNTg1cHg7XG5cdFx0d2lkdGg6IDI1MHB4O1xuXHRcdGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxMHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6MTBweFxuXHR9XG5cdC5nYW1lLWJvYXJkIHtcblx0XHRwYWRkaW5nOjBweCAwcHg7XG5cdFx0Ym9yZGVyOiBpbnNldCAjMmQzNTNjIDE1cHg7XG5cdFx0aGVpZ2h0OiA1ODVweDtcblx0XHR3aWR0aDogNTg1cHg7XG5cdH1cblx0LmdhbWUtY2hhdCB7XG5cdFx0aGVpZ2h0OiA1ODVweDtcblx0XHR3aWR0aDogMjUwcHg7XG5cdFx0Ym9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czoxMHB4O1xuXHR9XG59XG48L3N0eWxlPlxuIFxuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBHQTtBQS9GQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js&\n");

/***/ })

})