webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_GameBoard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/GameBoard.vue */ \"./src/components/game-container/game/GameBoard.vue\");\n/* harmony import */ var _game_GameScoreBoard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/GameScoreBoard.vue */ \"./src/components/game-container/game/GameScoreBoard.vue\");\n/* harmony import */ var _game_chat_GameChat_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/chat/GameChat.vue */ \"./src/components/game-container/game/chat/GameChat.vue\");\n/* harmony import */ var _game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/ChooseGame.vue */ \"./src/components/game-container/game/ChooseGame.vue\");\n/* harmony import */ var _data_RedPlayerModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/RedPlayerModel */ \"./src/data/RedPlayerModel.js\");\n/* harmony import */ var _data_Player1Model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/Player1Model */ \"./src/data/Player1Model.js\");\n/* harmony import */ var _data_Player2Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/Player2Model */ \"./src/data/Player2Model.js\");\n/* harmony import */ var _data_GameBoardModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/GameBoardModel.js */ \"./src/data/GameBoardModel.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n // import user from '../../data/UserModel';\n\n\n\n\nvar baseUrl = \"/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    onlineUsers: {\n      type: Array\n    },\n    newGame: {\n      type: Object\n    },\n    user: {\n      type: Object\n    }\n  },\n  components: {\n    \"game-board\": _game_GameBoard_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"game-score-board\": _game_GameScoreBoard_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"game-chat\": _game_chat_GameChat_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    \"choose-game\": _game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  watch: {\n    windowWidth: function windowWidth(newWidth, oldWidth) {\n      console.log(\"hi \" + newWidth);\n    }\n  },\n  data: function data() {\n    //Game Container holds most of the game logic - passing props to child components 'GameScoreBoard',\n    //  GameBoard, and GameChat\n    return {\n      gameStatus: \"START\",\n      winnerId: \"\",\n      winnerName: \"\",\n      loserId: \"\",\n      draw: false,\n      player1Captures: [],\n      player2Captures: [],\n      player1: _data_Player1Model__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      player2: _data_Player2Model__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      // user: user,\n      opponent: {},\n      gameBoardTiles: _data_GameBoardModel_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      turn: \"\",\n      info: \"\",\n      message: \"\",\n      windowWidth: window.innerWidth,\n      showTileNumbers: false,\n      rulesString: \"Uncrowned pieces step diagonally forwards\\n\\t\\t\\t\\t\\tAn opponent's piece is captured by jumping over the piece in the same line,\\n\\t\\t\\t\\t\\tAfter a jump, if another jump is available, the piece jumps again,\\n\\t\\t\\t\\t\\tWhen a piece reaches the other end of the board, it is crowned\\n\\t\\t\\t\\t\\tCrowned pieces can move diagonally forwards or backwards\\n                \\tIf a jump is available, you MUST jump\"\n    };\n  },\n  beforeCreate: function beforeCreate() {\n    var url = window.location.href;\n    var room = url.split(\"game/\").pop();\n    socket.emit(\"joinroom\", room);\n    console.log(\"join Room \" + room);\n  },\n  computed: {\n    blankCol: function blankCol() {\n      if (this.player2.name === \"Computer\" || this.player2.name === \"Player 2\") {\n        return \"large-blank-col\";\n      } else {\n        return \"small-blank-col\";\n      }\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    //Request initial game state on game created (or page refresh)\n    if (this.player2.name !== \"Computer\") {\n      var url = window.location.href;\n\n      var _id = url.split(\"game/\").pop();\n\n      console.log(\"NEW ID \" + _id);\n      var room = url.split(\"game/\").pop();\n      socket.emit(\"joinroom\", room);\n      console.log(\"join Room \" + room);\n\n      if (this.player1.name !== this.user.name) {\n        this.$http.post(\"\".concat(baseUrl, \"newgame/board\"), {\n          _id: _id\n        }).then(function (response) {\n          console.log(response);\n          _this.player1 = response.body.game.player1;\n          _this.player2 = response.body.game.player2;\n          _this.gameBoardTiles = response.body.game.tiles;\n          _this.turn = response.body.game.turn;\n          _this.gameStatus = response.body.game.gameStatus;\n          console.log(\"GETTING OPPONENT\");\n          _this.opponent = _this.player1;\n        }, function (error) {\n          console.log(error);\n        });\n      } else {\n        this.opponent = this.player2;\n        this.turn = \"red\";\n      }\n    } else {\n      this.turn = \"red\";\n    }\n\n    this.$nextTick(function () {\n      window.addEventListener(\"resize\", function () {\n        _this.windowWidth = window.innerWidth;\n      });\n    });\n    this.listenForBoardUpdates();\n  },\n  methods: {\n    //after any piece is captured, check if either player has 12 captures\n    checkWinner: function checkWinner() {\n      var url = window.location.href;\n      var gameId = url.split(\"game/\").pop();\n      var setGameStatus = this.setGameStatus;\n      var setWinner = this.setWinner;\n      var winnerId = this.winnerId;\n      var winnerName = this.winnerName;\n      var loserId = this.loserId;\n\n      if (this.player1Captures.length === 12) {\n        setGameStatus(\"OVER\");\n        winnerId = this.player1._id;\n        loserId = this.player2._id;\n        winnerName = this.player1.name;\n        setWinner(winnerName);\n      } else if (this.player2Captures.length === 12) {\n        setGameStatus(\"OVER\");\n        winnerId = this.player2._id;\n        loserId = this.player1._id;\n        winnerName = this.player2.name;\n        setWinner(winnerName);\n      } //post winner and loser info to game db collection and user db collection(for win/loss stats)\n\n\n      if (this.user._id === winnerId && this.user._id.length > 0) {\n        this.$http.post(\"\".concat(baseUrl, \"newgame/winner\"), {\n          gameId: gameId,\n          loserId: loserId,\n          winnerId: winnerId\n        }).then(function (response) {\n          console.log(response);\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    },\n    setPlayer1HasCaptured: function setPlayer1HasCaptured() {\n      var player1Captures = this.player1Captures;\n      player1Captures.length = 0;\n\n      for (var piece in this.player2.pieces) {\n        if (this.player2.pieces[piece] === \"CAPTURED\") {\n          player1Captures.push(piece);\n        }\n      }\n\n      this.checkWinner();\n    },\n    setPlayer2HasCaptured: function setPlayer2HasCaptured() {\n      var player2Captures = this.player2Captures;\n      player2Captures.length = 0;\n\n      for (var piece in this.player1.pieces) {\n        if (this.player1.pieces[piece] === \"CAPTURED\") {\n          player2Captures.push(piece);\n        }\n      }\n\n      this.checkWinner();\n    },\n    setTurn: function setTurn(t) {\n      this.turn = t;\n    },\n    setPlayer1: function setPlayer1(player) {\n      this.player1 = player;\n    },\n    setPlayer2: function setPlayer2(player) {\n      this.player2 = player;\n    },\n    setGameBoardTiles: function setGameBoardTiles(tiles) {\n      this.gameBoardTiles = tiles;\n    },\n    setGameStatus: function setGameStatus(status) {\n      this.gameStatus = status;\n    },\n    setWinner: function setWinner(win) {\n      this.winnerName = win;\n    },\n    setBlankCol: function setBlankCol(value) {\n      this.blankCol = value;\n    },\n    setShowTileNumbers: function setShowTileNumbers(tf) {\n      this.showTileNumbers = tf;\n    },\n    //board state sent to other player via socket\n    listenForBoardUpdates: function listenForBoardUpdates() {\n      console.log(\"LISTENING FOR BOARD\");\n      var setTurn = this.setTurn;\n      var setGameBoardTiles = this.setGameBoardTiles;\n      var setPlayer1 = this.setPlayer1;\n      var setPlayer2 = this.setPlayer2;\n      var setPlayer1HasCaptured = this.setPlayer1HasCaptured;\n      var setPlayer2HasCaptured = this.setPlayer2HasCaptured;\n      console.log(\"CLIENT SOCKET ID: \" + socket.id);\n      socket.on(\"gamedata\", function (data) {\n        console.log(\"CLIENT SOCKET ID: \" + socket.id);\n        setPlayer1(data.player1);\n        setPlayer2(data.player2);\n        setTurn(data.turn);\n        setGameBoardTiles(data.tiles);\n        setPlayer1HasCaptured();\n        setPlayer2HasCaptured();\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL0dhbWVDb250YWluZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9HYW1lQ29udGFpbmVyLnZ1ZT9hYzc5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImdhbWVcIj5cblx0XHQ8ZGl2IHYtYmluZDpjbGFzcz1cImJsYW5rQ29sXCI+PC9kaXY+XG5cdFx0PGdhbWUtc2NvcmUtYm9hcmQgdi1pZj1cIndpbmRvd1dpZHRoID4gNTAwXCIgY2xhc3M9XCJjb2wtbWQtMiBnYW1lLXNjb3JlLWJvYXJkXCJcblx0XHRcdDp0dXJuPVwidHVyblwiXG5cdFx0XHQ6cGxheWVyMUNhcHR1cmVzPVwicGxheWVyMUNhcHR1cmVzXCJcblx0XHRcdDpwbGF5ZXIyQ2FwdHVyZXM9XCJwbGF5ZXIyQ2FwdHVyZXNcIlxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpvcHBvbmVudD1cIm9wcG9uZW50XCJcblx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiXG5cdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIlxuXHRcdFx0OmdhbWVTdGF0dXM9XCJnYW1lU3RhdHVzXCJcblx0XHRcdDptZXNzYWdlPVwibWVzc2FnZVwiIFxuXHRcdFx0OmluZm89XCJpbmZvXCJcblx0XHRcdD48L2dhbWUtc2NvcmUtYm9hcmQ+XG5cdDxkaXYgdi1iaW5kOmNsYXNzPVwiYmxhbmtDb2xcIj48L2Rpdj5cblx0XHQ8Z2FtZS1ib2FyZCBjbGFzcz1cImNvbC1tZC01IGdhbWUtYm9hcmRcIlxuXHRcdFx0Om5ld0dhbWU9XCJuZXdHYW1lXCJcblx0XHRcdDpnYW1lU3RhdHVzPVwiZ2FtZVN0YXR1c1wiXG5cdFx0XHQ6d2lubmVyTmFtZT1cIndpbm5lck5hbWVcIlxuXHRcdFx0OmRyYXc9XCJkcmF3XCJcblx0XHRcdDpwbGF5ZXIyPVwicGxheWVyMlwiXG5cdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIlxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpnYW1lQm9hcmRUaWxlcz1cImdhbWVCb2FyZFRpbGVzXCJcblx0XHRcdDp0dXJuPVwidHVyblwiXG5cdFx0XHQ6c2hvd1RpbGVOdW1iZXJzPVwic2hvd1RpbGVOdW1iZXJzXCJcblx0XHRcdDpydWxlc1N0cmluZz1cInJ1bGVzU3RyaW5nXCJcblx0XHRcdD48L2dhbWUtYm9hcmQ+XG5cdDxkaXYgdi1iaW5kOmNsYXNzPVwiYmxhbmtDb2xcIj48L2Rpdj5cblx0XHQ8Z2FtZS1jaGF0IHYtaWY9XCIgd2luZG93V2lkdGggPiA1MDAgXG5cdFx0XHQmJiB0aGlzLnBsYXllcjIubmFtZSAhPT0gJ0NvbXB1dGVyJyBcblx0XHRcdCYmIHRoaXMucGxheWVyMi5uYW1lICE9PSAnUGxheWVyIDInXCJcblx0XHRcdFx0XHQ6cGxheWVyMj1cInBsYXllcjJcIiBcblx0XHRcdFx0XHQ6cGxheWVyMT1cInBsYXllcjFcIiBcblx0XHRcdFx0XHQ6dXNlcj1cInVzZXJcIlxuXHRcdFx0XHQgICAgOm9wcG9uZW50PVwib3Bwb25lbnRcIlxuXHRcdFx0XHRcdDpzaG93VGlsZU51bWJlcnM9XCJzaG93VGlsZU51bWJlcnNcIlxuXHRcdFx0XHRcdDpydWxlc1N0cmluZz1cInJ1bGVzU3RyaW5nXCJcblx0XHRcdFx0XHRjbGFzcz1cImNvbC1tZC0yIGdhbWUtY2hhdFwiXG5cdFx0XHRcdFx0QHJlcXVlc3RUaWxlTnVtYmVycz1cInNldFNob3dUaWxlTnVtYmVycygkZXZlbnQpXCJcblx0XHRcdFx0XHQ+PC9nYW1lLWNoYXQ+XG5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lL0dhbWVCb2FyZC52dWVcIjtcbmltcG9ydCBHYW1lU2NvcmVCb2FyZCBmcm9tIFwiLi9nYW1lL0dhbWVTY29yZUJvYXJkLnZ1ZVwiO1xuaW1wb3J0IEdhbWVDaGF0IGZyb20gXCIuL2dhbWUvY2hhdC9HYW1lQ2hhdC52dWVcIjtcbmltcG9ydCBDaG9vc2VHYW1lIGZyb20gXCIuL2dhbWUvQ2hvb3NlR2FtZS52dWVcIjtcbmltcG9ydCByZWRQaWVjZXMgZnJvbSBcIi4uLy4uL2RhdGEvUmVkUGxheWVyTW9kZWxcIjtcbi8vIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL2RhdGEvVXNlck1vZGVsJztcbmltcG9ydCBwbGF5ZXIxIGZyb20gXCIuLi8uLi9kYXRhL1BsYXllcjFNb2RlbFwiO1xuaW1wb3J0IHBsYXllcjIgZnJvbSBcIi4uLy4uL2RhdGEvUGxheWVyMk1vZGVsXCI7XG5pbXBvcnQgZ2FtZUJvYXJkVGlsZXMgZnJvbSBcIi4uLy4uL2RhdGEvR2FtZUJvYXJkTW9kZWwuanNcIjtcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIG9ubGluZVVzZXJzOiB7IHR5cGU6IEFycmF5IH0sXG4gICAgbmV3R2FtZTogeyB0eXBlOiBPYmplY3QgfSxcbiAgICB1c2VyOiB7IHR5cGU6IE9iamVjdCB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBcImdhbWUtYm9hcmRcIjogR2FtZUJvYXJkLFxuICAgIFwiZ2FtZS1zY29yZS1ib2FyZFwiOiBHYW1lU2NvcmVCb2FyZCxcbiAgICBcImdhbWUtY2hhdFwiOiBHYW1lQ2hhdCxcbiAgICBcImNob29zZS1nYW1lXCI6IENob29zZUdhbWVcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB3aW5kb3dXaWR0aChuZXdXaWR0aCwgb2xkV2lkdGgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGkgXCIgKyBuZXdXaWR0aCk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgLy9HYW1lIENvbnRhaW5lciBob2xkcyBtb3N0IG9mIHRoZSBnYW1lIGxvZ2ljIC0gcGFzc2luZyBwcm9wcyB0byBjaGlsZCBjb21wb25lbnRzICdHYW1lU2NvcmVCb2FyZCcsXG4gICAgLy8gIEdhbWVCb2FyZCwgYW5kIEdhbWVDaGF0XG4gICAgcmV0dXJuIHtcbiAgICAgIGdhbWVTdGF0dXM6IFwiU1RBUlRcIixcbiAgICAgIHdpbm5lcklkOiBcIlwiLFxuICAgICAgd2lubmVyTmFtZTogXCJcIixcbiAgICAgIGxvc2VySWQ6IFwiXCIsXG4gICAgICBkcmF3OiBmYWxzZSxcbiAgICAgIHBsYXllcjFDYXB0dXJlczogW10sXG4gICAgICBwbGF5ZXIyQ2FwdHVyZXM6IFtdLFxuICAgICAgcGxheWVyMTogcGxheWVyMSxcbiAgICAgIHBsYXllcjI6IHBsYXllcjIsXG4gICAgICAvLyB1c2VyOiB1c2VyLFxuICAgICAgb3Bwb25lbnQ6IHt9LFxuICAgICAgZ2FtZUJvYXJkVGlsZXM6IGdhbWVCb2FyZFRpbGVzLFxuICAgICAgdHVybjogXCJcIixcbiAgICAgIGluZm86IFwiXCIsXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgc2hvd1RpbGVOdW1iZXJzOiBmYWxzZSxcbiAgICAgIHJ1bGVzU3RyaW5nOiBgVW5jcm93bmVkIHBpZWNlcyBzdGVwIGRpYWdvbmFsbHkgZm9yd2FyZHNcblx0XHRcdFx0XHRBbiBvcHBvbmVudCdzIHBpZWNlIGlzIGNhcHR1cmVkIGJ5IGp1bXBpbmcgb3ZlciB0aGUgcGllY2UgaW4gdGhlIHNhbWUgbGluZSxcblx0XHRcdFx0XHRBZnRlciBhIGp1bXAsIGlmIGFub3RoZXIganVtcCBpcyBhdmFpbGFibGUsIHRoZSBwaWVjZSBqdW1wcyBhZ2Fpbixcblx0XHRcdFx0XHRXaGVuIGEgcGllY2UgcmVhY2hlcyB0aGUgb3RoZXIgZW5kIG9mIHRoZSBib2FyZCwgaXQgaXMgY3Jvd25lZFxuXHRcdFx0XHRcdENyb3duZWQgcGllY2VzIGNhbiBtb3ZlIGRpYWdvbmFsbHkgZm9yd2FyZHMgb3IgYmFja3dhcmRzXG4gICAgICAgICAgICAgICAgXHRJZiBhIGp1bXAgaXMgYXZhaWxhYmxlLCB5b3UgTVVTVCBqdW1wYFxuICAgIH07XG4gIH0sXG4gIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGxldCByb29tID0gdXJsLnNwbGl0KFwiZ2FtZS9cIikucG9wKCk7XG4gICAgc29ja2V0LmVtaXQoXCJqb2lucm9vbVwiLCByb29tKTtcbiAgICBjb25zb2xlLmxvZyhcImpvaW4gUm9vbSBcIiArIHJvb20pO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGJsYW5rQ29sKCkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnBsYXllcjIubmFtZSA9PT0gXCJDb21wdXRlclwiIHx8XG4gICAgICAgIHRoaXMucGxheWVyMi5uYW1lID09PSBcIlBsYXllciAyXCJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJsYXJnZS1ibGFuay1jb2xcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInNtYWxsLWJsYW5rLWNvbFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy9SZXF1ZXN0IGluaXRpYWwgZ2FtZSBzdGF0ZSBvbiBnYW1lIGNyZWF0ZWQgKG9yIHBhZ2UgcmVmcmVzaClcbiAgICBpZiAodGhpcy5wbGF5ZXIyLm5hbWUgIT09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgbGV0IF9pZCA9IHVybC5zcGxpdChcImdhbWUvXCIpLnBvcCgpO1xuICAgICAgY29uc29sZS5sb2coXCJORVcgSUQgXCIgKyBfaWQpO1xuICAgICAgbGV0IHJvb20gPSB1cmwuc3BsaXQoXCJnYW1lL1wiKS5wb3AoKTtcbiAgICAgIHNvY2tldC5lbWl0KFwiam9pbnJvb21cIiwgcm9vbSk7XG4gICAgICBjb25zb2xlLmxvZyhcImpvaW4gUm9vbSBcIiArIHJvb20pO1xuICAgICAgaWYgKHRoaXMucGxheWVyMS5uYW1lICE9PSB0aGlzLnVzZXIubmFtZSkge1xuICAgICAgICB0aGlzLiRodHRwXG4gICAgICAgICAgLnBvc3QoYCR7YmFzZVVybH1uZXdnYW1lL2JvYXJkYCwge1xuICAgICAgICAgICAgX2lkOiBfaWRcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyMSA9IHJlc3BvbnNlLmJvZHkuZ2FtZS5wbGF5ZXIxO1xuICAgICAgICAgICAgICB0aGlzLnBsYXllcjIgPSByZXNwb25zZS5ib2R5LmdhbWUucGxheWVyMjtcbiAgICAgICAgICAgICAgdGhpcy5nYW1lQm9hcmRUaWxlcyA9IHJlc3BvbnNlLmJvZHkuZ2FtZS50aWxlcztcbiAgICAgICAgICAgICAgdGhpcy50dXJuID0gcmVzcG9uc2UuYm9keS5nYW1lLnR1cm47XG4gICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHJlc3BvbnNlLmJvZHkuZ2FtZS5nYW1lU3RhdHVzO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVFRJTkcgT1BQT05FTlRcIik7XG4gICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSB0aGlzLnBsYXllcjE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSB0aGlzLnBsYXllcjI7XG4gICAgICAgIHRoaXMudHVybiA9IFwicmVkXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHVybiA9IFwicmVkXCI7XG4gICAgfVxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5saXN0ZW5Gb3JCb2FyZFVwZGF0ZXMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vYWZ0ZXIgYW55IHBpZWNlIGlzIGNhcHR1cmVkLCBjaGVjayBpZiBlaXRoZXIgcGxheWVyIGhhcyAxMiBjYXB0dXJlc1xuICAgIGNoZWNrV2lubmVyKCkge1xuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgbGV0IGdhbWVJZCA9IHVybC5zcGxpdChcImdhbWUvXCIpLnBvcCgpO1xuICAgICAgbGV0IHNldEdhbWVTdGF0dXMgPSB0aGlzLnNldEdhbWVTdGF0dXM7XG4gICAgICBsZXQgc2V0V2lubmVyID0gdGhpcy5zZXRXaW5uZXI7XG4gICAgICBsZXQgd2lubmVySWQgPSB0aGlzLndpbm5lcklkO1xuICAgICAgbGV0IHdpbm5lck5hbWUgPSB0aGlzLndpbm5lck5hbWU7XG4gICAgICBsZXQgbG9zZXJJZCA9IHRoaXMubG9zZXJJZDtcblxuICAgICAgaWYgKHRoaXMucGxheWVyMUNhcHR1cmVzLmxlbmd0aCA9PT0gMTIpIHtcbiAgICAgICAgc2V0R2FtZVN0YXR1cyhcIk9WRVJcIik7XG4gICAgICAgIHdpbm5lcklkID0gdGhpcy5wbGF5ZXIxLl9pZDtcbiAgICAgICAgbG9zZXJJZCA9IHRoaXMucGxheWVyMi5faWQ7XG4gICAgICAgIHdpbm5lck5hbWUgPSB0aGlzLnBsYXllcjEubmFtZTtcbiAgICAgICAgc2V0V2lubmVyKHdpbm5lck5hbWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllcjJDYXB0dXJlcy5sZW5ndGggPT09IDEyKSB7XG4gICAgICAgIHNldEdhbWVTdGF0dXMoXCJPVkVSXCIpO1xuICAgICAgICB3aW5uZXJJZCA9IHRoaXMucGxheWVyMi5faWQ7XG4gICAgICAgIGxvc2VySWQgPSB0aGlzLnBsYXllcjEuX2lkO1xuICAgICAgICB3aW5uZXJOYW1lID0gdGhpcy5wbGF5ZXIyLm5hbWU7XG4gICAgICAgIHNldFdpbm5lcih3aW5uZXJOYW1lKTtcbiAgICAgIH1cblxuICAgICAgLy9wb3N0IHdpbm5lciBhbmQgbG9zZXIgaW5mbyB0byBnYW1lIGRiIGNvbGxlY3Rpb24gYW5kIHVzZXIgZGIgY29sbGVjdGlvbihmb3Igd2luL2xvc3Mgc3RhdHMpXG4gICAgICBpZiAodGhpcy51c2VyLl9pZCA9PT0gd2lubmVySWQgJiYgdGhpcy51c2VyLl9pZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuJGh0dHBcbiAgICAgICAgICAucG9zdChgJHtiYXNlVXJsfW5ld2dhbWUvd2lubmVyYCwge1xuICAgICAgICAgICAgZ2FtZUlkOiBnYW1lSWQsXG4gICAgICAgICAgICBsb3NlcklkOiBsb3NlcklkLFxuICAgICAgICAgICAgd2lubmVySWQ6IHdpbm5lcklkXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRQbGF5ZXIxSGFzQ2FwdHVyZWQoKSB7XG4gICAgICBsZXQgcGxheWVyMUNhcHR1cmVzID0gdGhpcy5wbGF5ZXIxQ2FwdHVyZXM7XG4gICAgICBwbGF5ZXIxQ2FwdHVyZXMubGVuZ3RoID0gMDtcbiAgICAgIGZvciAobGV0IHBpZWNlIGluIHRoaXMucGxheWVyMi5waWVjZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyMi5waWVjZXNbcGllY2VdID09PSBcIkNBUFRVUkVEXCIpIHtcbiAgICAgICAgICBwbGF5ZXIxQ2FwdHVyZXMucHVzaChwaWVjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tXaW5uZXIoKTtcbiAgICB9LFxuICAgIHNldFBsYXllcjJIYXNDYXB0dXJlZCgpIHtcbiAgICAgIGxldCBwbGF5ZXIyQ2FwdHVyZXMgPSB0aGlzLnBsYXllcjJDYXB0dXJlcztcbiAgICAgIHBsYXllcjJDYXB0dXJlcy5sZW5ndGggPSAwO1xuICAgICAgZm9yIChsZXQgcGllY2UgaW4gdGhpcy5wbGF5ZXIxLnBpZWNlcykge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnBpZWNlc1twaWVjZV0gPT09IFwiQ0FQVFVSRURcIikge1xuICAgICAgICAgIHBsYXllcjJDYXB0dXJlcy5wdXNoKHBpZWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jaGVja1dpbm5lcigpO1xuICAgIH0sXG4gICAgc2V0VHVybih0KSB7XG4gICAgICB0aGlzLnR1cm4gPSB0O1xuICAgIH0sXG4gICAgc2V0UGxheWVyMShwbGF5ZXIpIHtcbiAgICAgIHRoaXMucGxheWVyMSA9IHBsYXllcjtcbiAgICB9LFxuICAgIHNldFBsYXllcjIocGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXI7XG4gICAgfSxcbiAgICBzZXRHYW1lQm9hcmRUaWxlcyh0aWxlcykge1xuICAgICAgdGhpcy5nYW1lQm9hcmRUaWxlcyA9IHRpbGVzO1xuICAgIH0sXG4gICAgc2V0R2FtZVN0YXR1cyhzdGF0dXMpIHtcbiAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHN0YXR1cztcbiAgICB9LFxuICAgIHNldFdpbm5lcih3aW4pIHtcbiAgICAgIHRoaXMud2lubmVyTmFtZSA9IHdpbjtcbiAgICB9LFxuICAgIHNldEJsYW5rQ29sKHZhbHVlKSB7XG4gICAgICB0aGlzLmJsYW5rQ29sID0gdmFsdWU7XG4gICAgfSxcbiAgICBzZXRTaG93VGlsZU51bWJlcnModGYpIHtcbiAgICAgIHRoaXMuc2hvd1RpbGVOdW1iZXJzID0gdGY7XG4gICAgfSxcbiAgICAvL2JvYXJkIHN0YXRlIHNlbnQgdG8gb3RoZXIgcGxheWVyIHZpYSBzb2NrZXRcbiAgICBsaXN0ZW5Gb3JCb2FyZFVwZGF0ZXMoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkxJU1RFTklORyBGT1IgQk9BUkRcIik7XG4gICAgICBsZXQgc2V0VHVybiA9IHRoaXMuc2V0VHVybjtcbiAgICAgIGxldCBzZXRHYW1lQm9hcmRUaWxlcyA9IHRoaXMuc2V0R2FtZUJvYXJkVGlsZXM7XG4gICAgICBsZXQgc2V0UGxheWVyMSA9IHRoaXMuc2V0UGxheWVyMTtcbiAgICAgIGxldCBzZXRQbGF5ZXIyID0gdGhpcy5zZXRQbGF5ZXIyO1xuICAgICAgbGV0IHNldFBsYXllcjFIYXNDYXB0dXJlZCA9IHRoaXMuc2V0UGxheWVyMUhhc0NhcHR1cmVkO1xuICAgICAgbGV0IHNldFBsYXllcjJIYXNDYXB0dXJlZCA9IHRoaXMuc2V0UGxheWVyMkhhc0NhcHR1cmVkO1xuXG4gICAgICBjb25zb2xlLmxvZyhcIkNMSUVOVCBTT0NLRVQgSUQ6IFwiICsgc29ja2V0LmlkKTtcbiAgICAgIHNvY2tldC5vbihcImdhbWVkYXRhXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDTElFTlQgU09DS0VUIElEOiBcIiArIHNvY2tldC5pZCk7XG4gICAgICAgIHNldFBsYXllcjEoZGF0YS5wbGF5ZXIxKTtcbiAgICAgICAgc2V0UGxheWVyMihkYXRhLnBsYXllcjIpO1xuICAgICAgICBzZXRUdXJuKGRhdGEudHVybik7XG4gICAgICAgIHNldEdhbWVCb2FyZFRpbGVzKGRhdGEudGlsZXMpO1xuICAgICAgICBzZXRQbGF5ZXIxSGFzQ2FwdHVyZWQoKTtcbiAgICAgICAgc2V0UGxheWVyMkhhc0NhcHR1cmVkKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ibGFuay1jb2wge1xuICB3aWR0aDogMHB4O1xuICBwYWRkaW5nOiAwIDA7XG59XG4uZ2FtZS1zY29yZS1ib2FyZCB7XG4gIGhlaWdodDogODV2dztcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmdhbWUtYm9hcmQge1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBoZWlnaHQ6IDEwMHZ3O1xuICB3aWR0aDogMTAwdnc7XG4gIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4O1xufVxuLmdhbWUtY2hhdCB7XG4gIGhlaWdodDogODV2dztcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2dhbWUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmdhbWUge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnNtYWxsLWJsYW5rLWNvbCB7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmxhcmdlLWJsYW5rLWNvbCB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDIwMHB4KSBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmdhbWUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIH1cbiAgLmdhbWUtYm9hcmQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAuZ2FtZS1zY29yZS1ib2FyZCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5nYW1lLWNoYXQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDBweCkgYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4gIC5nYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5nYW1lLXNjb3JlLWJvYXJkIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5nYW1lLWJvYXJkIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4O1xuICB9XG4gIC5nYW1lLWNoYXQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA1NDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5nYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5nYW1lLXNjb3JlLWJvYXJkIHtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAuZ2FtZS1ib2FyZCB7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLmdhbWUtY2hhdCB7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA2NDBweCkge1xuICAuZ2FtZSB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDg0MHB4KSB7XG4gIC5nYW1lIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5nYW1lLXNjb3JlLWJvYXJkIHtcbiAgICBoZWlnaHQ6IDU4NXB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5nYW1lLWJvYXJkIHtcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xuICAgIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4O1xuICAgIGhlaWdodDogNTg1cHg7XG4gICAgd2lkdGg6IDU4NXB4O1xuICB9XG4gIC5nYW1lLWNoYXQge1xuICAgIGhlaWdodDogNTg1cHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0dBO0FBNUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=style&index=0&id=442c4bb6&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/GameContainer.vue?vue&type=style&index=0&id=442c4bb6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.blank-col[data-v-442c4bb6] {\\n  width: 0px;\\n  padding: 0 0;\\n}\\n.game-score-board[data-v-442c4bb6] {\\n  height: 85vw;\\n  width: 200px;\\n}\\n.game-board[data-v-442c4bb6] {\\n  padding: 0px 0px;\\n  height: 100vw;\\n  width: 100vw;\\n  border: inset #2d353c 15px;\\n}\\n.game-chat[data-v-442c4bb6] {\\n  height: 85vw;\\n  width: 200px;\\n  border: inset #2d353c 10px;\\n  border-radius: 10px;\\n}\\n#game[data-v-442c4bb6] {\\n  -webkit-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n  position: absolute;\\n}\\n.game[data-v-442c4bb6] {\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-top: 40px;\\n}\\n.small-blank-col[data-v-442c4bb6] {\\n  width: 30px;\\n}\\n.large-blank-col[data-v-442c4bb6] {\\n  width: 70px;\\n}\\n@media (min-height: 200px) and (min-width: 500px) {\\n.game[data-v-442c4bb6] {\\n    margin-top: 0;\\n    display: -webkit-inline-box;\\n    display: -ms-inline-flexbox;\\n    display: inline-flex;\\n}\\n.game-board[data-v-442c4bb6] {\\n    margin-left: auto;\\n    margin-right: auto;\\n    height: 300px;\\n    width: 300px;\\n}\\n.game-score-board[data-v-442c4bb6] {\\n    height: 300px;\\n    border: inset #2d353c 10px;\\n    border-radius: 10px;\\n}\\n.game-chat[data-v-442c4bb6] {\\n    height: 300px;\\n    border: inset #2d353c 10px;\\n    border-radius: 10px;\\n}\\n}\\n@media only screen and (min-height: 300px) and (min-width: 650px) {\\n.game[data-v-442c4bb6] {\\n    margin-top: 0;\\n}\\n.game-score-board[data-v-442c4bb6] {\\n    height: 300px;\\n    width: 250px;\\n    border: inset #2d353c 10px;\\n    border-radius: 10px;\\n}\\n.game-board[data-v-442c4bb6] {\\n    padding: 0px 0px;\\n    border: inset #2d353c 15px;\\n}\\n.game-chat[data-v-442c4bb6] {\\n    height: 300px;\\n    width: 250px;\\n    border: inset #2d353c 10px;\\n    border-radius: 10px;\\n}\\n}\\n@media (min-height: 540px) and (min-width: 700px) {\\n.game[data-v-442c4bb6] {\\n    margin-top: 10px;\\n}\\n.game-score-board[data-v-442c4bb6] {\\n    height: 450px;\\n    width: 250px;\\n}\\n.game-board[data-v-442c4bb6] {\\n    height: 450px;\\n    width: 450px;\\n}\\n.game-chat[data-v-442c4bb6] {\\n    height: 450px;\\n    width: 250px;\\n}\\n}\\n@media (min-height: 640px) {\\n.game[data-v-442c4bb6] {\\n    margin-top: 25px;\\n}\\n}\\n@media (min-height: 840px) {\\n.game[data-v-442c4bb6] {\\n    margin-top: 50px;\\n}\\n.game-score-board[data-v-442c4bb6] {\\n    height: 585px;\\n    width: 250px;\\n    border: inset #2d353c 10px;\\n    border-radius: 10px;\\n}\\n.game-board[data-v-442c4bb6] {\\n    padding: 0px 0px;\\n    border: inset #2d353c 15px;\\n    height: 585px;\\n    width: 585px;\\n}\\n.game-chat[data-v-442c4bb6] {\\n    height: 585px;\\n    width: 250px;\\n    border: inset #2d353c 10px;\\n    border-radius: 10px;\\n}\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL0dhbWVDb250YWluZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDQyYzRiYjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZS1jb250YWluZXIvR2FtZUNvbnRhaW5lci52dWU/MGJkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ibGFuay1jb2xbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICB3aWR0aDogMHB4O1xcbiAgcGFkZGluZzogMCAwO1xcbn1cXG4uZ2FtZS1zY29yZS1ib2FyZFtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gIGhlaWdodDogODV2dztcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLmdhbWUtYm9hcmRbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICBwYWRkaW5nOiAwcHggMHB4O1xcbiAgaGVpZ2h0OiAxMDB2dztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4O1xcbn1cXG4uZ2FtZS1jaGF0W2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgaGVpZ2h0OiA4NXZ3O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jZ2FtZVtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uZ2FtZVtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuLnNtYWxsLWJsYW5rLWNvbFtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG4ubGFyZ2UtYmxhbmstY29sW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgd2lkdGg6IDcwcHg7XFxufVxcbkBtZWRpYSAobWluLWhlaWdodDogMjAwcHgpIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbi5nYW1lW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5nYW1lLWJvYXJkW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcbi5nYW1lLXNjb3JlLWJvYXJkW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmdhbWUtY2hhdFtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDBweCkgYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XFxuLmdhbWVbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcbi5nYW1lLXNjb3JlLWJvYXJkW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZ2FtZS1ib2FyZFtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gICAgcGFkZGluZzogMHB4IDBweDtcXG4gICAgYm9yZGVyOiBpbnNldCAjMmQzNTNjIDE1cHg7XFxufVxcbi5nYW1lLWNoYXRbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDU0MHB4KSBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4uZ2FtZVtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmdhbWUtc2NvcmUtYm9hcmRbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuLmdhbWUtYm9hcmRbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICAgIGhlaWdodDogNDUwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG59XFxuLmdhbWUtY2hhdFtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gICAgaGVpZ2h0OiA0NTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4taGVpZ2h0OiA2NDBweCkge1xcbi5nYW1lW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4taGVpZ2h0OiA4NDBweCkge1xcbi5nYW1lW2RhdGEtdi00NDJjNGJiNl0ge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG4uZ2FtZS1zY29yZS1ib2FyZFtkYXRhLXYtNDQyYzRiYjZdIHtcXG4gICAgaGVpZ2h0OiA1ODVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IGluc2V0ICMyZDM1M2MgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmdhbWUtYm9hcmRbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICAgIHBhZGRpbmc6IDBweCAwcHg7XFxuICAgIGJvcmRlcjogaW5zZXQgIzJkMzUzYyAxNXB4O1xcbiAgICBoZWlnaHQ6IDU4NXB4O1xcbiAgICB3aWR0aDogNTg1cHg7XFxufVxcbi5nYW1lLWNoYXRbZGF0YS12LTQ0MmM0YmI2XSB7XFxuICAgIGhlaWdodDogNTg1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm9yZGVyOiBpbnNldCAjMmQzNTNjIDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/GameContainer.vue?vue&type=style&index=0&id=442c4bb6&scoped=true&lang=css&\n");

/***/ })

})