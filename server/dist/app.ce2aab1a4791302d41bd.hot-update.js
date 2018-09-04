webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/ChooseGame.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/game/ChooseGame.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty */ \"./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_GameBoardModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/GameBoardModel */ \"./src/data/GameBoardModel.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//ChooseGame Component: User has option to:\n// i - play against Computer (TODO)\n// ii - find a player online and challenge them/create game\n// iii - play local 2 player\n// iv - continue a previous local/online game (TODO)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    user: {\n      type: Object\n    },\n    player1: {\n      type: Object\n    },\n    player2: {\n      type: Object\n    },\n    redPieces: {\n      type: Object\n    },\n    bluePieces: {\n      type: Object\n    },\n    newGame: {\n      type: Object\n    }\n  },\n  data: function data() {\n    return {\n      connectOnline: false,\n      gameCreated: false,\n      gameBoardTiles: _data_GameBoardModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      onlineUsers: [],\n      baseUrl: \"/\"\n    };\n  },\n  mounted: function mounted() {\n    this.listenForUsers();\n  },\n  methods: Object(_mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    listenForUsers: function listenForUsers() {\n      var updateOnlineUsers = this.updateOnlineUsers;\n      socket.on('login', function (data) {\n        updateOnlineUsers(data);\n      });\n    },\n    playOnline: function playOnline() {\n      this.connectOnline = true;\n    },\n    updateOnlineUsers: function updateOnlineUsers(users) {\n      this.onlineUsers = users;\n    },\n    createVsComputerGame: function createVsComputerGame(button) {\n      var _this = this;\n\n      this.player1.name = this.user.name;\n      this.player1.avatar = this.user.avatar;\n      this.player1.email = this.user.email;\n      var assignColor = this.getRandom();\n      console.log(\"ASSIGNCOLOR: \" + assignColor);\n\n      if (assignColor <= 0.5) {\n        this.player1.pieces = this.redPieces;\n        this.player1.color = 'red';\n        this.player2.pieces = this.bluePieces;\n        this.player2.color = 'blue';\n      } else if (assignColor > 0.5) {\n        this.player1.pieces = this.bluePieces;\n        this.player1.color = 'blue';\n        this.player2.pieces = this.redPieces;\n        this.player2.color = 'red';\n      }\n\n      this.player2.name = \"Computer\";\n      this.player2.avatar = \"robot.svg\";\n      this.player2.email = \"computer@computermail.com\";\n      this.newGame.player1 = this.player1;\n      this.newGame.player2 = this.player2;\n      this.newGame.turn = 'red';\n      this.newGame.tiles = _data_GameBoardModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      console.log(this.newGame);\n      var gameId = \"\";\n      this.$http.post(\"\".concat(this.baseUrl, \"newgame/\"), this.newGame).then(function (response) {\n        gameId = response.body.id;\n        _this.newGame.id = gameId;\n        console.log(_this.newGame);\n\n        _this.$router.push({\n          path: '/game/' + gameId,\n          params: {\n            gameId: _this.$route.params.gameId\n          }\n        });\n      }, function (error) {\n        console.log(error);\n      });\n      this.gameCreated = true;\n    },\n    createLocalGame: function createLocalGame(button) {\n      var _this2 = this;\n\n      this.player1.name = this.user.name;\n      this.player1.avatar = this.user.avatar;\n      this.player1.email = this.user.email;\n      var assignColor = this.getRandom();\n      console.log(\"ASSIGNCOLOR: \" + assignColor);\n\n      if (assignColor <= 0.5) {\n        this.player1.pieces = this.redPieces;\n        this.player1.color = 'red';\n        this.player2.pieces = this.bluePieces;\n        this.player2.color = 'blue';\n      } else if (assignColor > 0.5) {\n        this.player1.pieces = this.bluePieces;\n        this.player1.color = 'blue';\n        this.player2.pieces = this.redPieces;\n        this.player2.color = 'red';\n      }\n\n      this.player2.name = \"Player2\";\n      this.player2.avatar = \"man.svg\";\n      this.player2.email = \"larry@larrymail.com\";\n      this.newGame.player1 = this.player1;\n      this.newGame.player2 = this.player2;\n      this.newGame.turn = 'red';\n      this.newGame.tiles = _data_GameBoardModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      console.log(this.newGame);\n      var gameId = \"\";\n      this.$http.post(\"\".concat(this.baseUrl, \"newgame/\"), this.newGame).then(function (response) {\n        gameId = response.body.id;\n        _this2.newGame.id = gameId;\n        console.log(_this2.newGame);\n\n        _this2.$router.push({\n          path: '/game/' + gameId,\n          params: {\n            gameId: _this2.$route.params.gameId\n          }\n        });\n      }, function (error) {\n        console.log(error);\n      });\n      this.gameCreated = true;\n    },\n    getRandom: function getRandom() {\n      return Math.random();\n    },\n    createGame: function createGame(button) {\n      var _this3 = this;\n\n      this.player1.name = this.user.name;\n      this.player1.avatar = this.user.avatar;\n      this.player1.email = this.user.email;\n      this.player1.id = this.user.id;\n      var assignColor = this.getRandom();\n      console.log(\"ASSIGNCOLOR: \" + assignColor);\n\n      if (assignColor <= 0.5) {\n        this.player1.pieces = this.redPieces;\n        this.player1.color = 'red';\n        this.player2.pieces = this.bluePieces;\n        this.player2.color = 'blue';\n      } else if (assignColor > 0.5) {\n        this.player1.pieces = this.bluePieces;\n        this.player1.color = 'blue';\n        this.player2.pieces = this.redPieces;\n        this.player2.color = 'red';\n      }\n\n      this.player2.name = this.onlineUsers[button]['name'];\n      this.player2.avatar = this.onlineUsers[button]['avatar'];\n      this.player2.email = this.onlineUsers[button]['email'];\n      this.player2.id = this.onlineUsers[button]['id'];\n      this.newGame.player1 = this.player1;\n      this.newGame.player2 = this.player2;\n      this.newGame.turn = 'red';\n      this.newGame.tiles = _data_GameBoardModel__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n      console.log(this.newGame);\n      var gameId = \"\";\n      this.$http.post(\"\".concat(this.baseUrl, \"newgame/\"), this.newGame).then(function (response) {\n        gameId = response.body.id;\n        _this3.newGame.id = gameId;\n        console.log(_this3.newGame);\n        socket.emit('challenge', _this3.newGame);\n\n        _this3.$router.push({\n          path: '/game/' + gameId,\n          params: {\n            gameId: _this3.$route.params.gameId\n          }\n        });\n      }, function (error) {\n        console.log(error);\n      });\n      this.gameCreated = true;\n    }\n  }, \"getRandom\", function getRandom() {\n    return Math.random();\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL2dhbWUvQ2hvb3NlR2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Nob29zZUdhbWUudnVlPzNkMTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgaWQ9XCJjaG9vc2UtZ2FtZVwiPlxyXG5cdFx0PHRyYW5zaXRpb24gbmFtZT1cIm1vZGFsXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1tYXNrXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbXB1dGVyXCIgQGNsaWNrPVwiY3JlYXRlVnNDb21wdXRlckdhbWUoKVwiID5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPlZTIENvbXB1dGVyPC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdHdvLWxvY2FsXCIgQGNsaWNrPVwiY3JlYXRlTG9jYWxHYW1lKClcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9wdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+VHdvIFBsYXllcnMgb24gdGhpcyBjb21wdXRlcjwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCIgPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdHdvLW9ubGluZVwiIEBjbGljaz1cInBsYXlPbmxpbmVcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9wdGlvblwiIHYtaWY9XCJjb25uZWN0T25saW5lID09PSBmYWxzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgPkZpbmQgUGxheWVyIE9ubGluZTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImNvbm5lY3RPbmxpbmUgPT09IHRydWVcIiBjbGFzcz1cImNob29zZS1wbGF5ZXJcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5QbGF5ZXJzIE9ubGluZTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxocj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBsYXllci1ib3hcIiB2LWZvcj1cIihwbGF5ZXIsaW5kZXgpIGluIG9ubGluZVVzZXJzXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJwbGF5ZXIubmFtZSAhPT0gdXNlci5uYW1lIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgb25saW5lVXNlcnMubGVuZ3RoID4gMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJwbGF5ZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6I2QzZDNkM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNCA6aWQ9XCInbmFtZScrIGluZGV4XCI+e3sgcGxheWVyLm5hbWUgfX08L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJgJHtiYXNlVXJsfSR7cGxheWVyLmF2YXRhcn1gXCIgYWx0PVwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6MzBweDt3aWR0aDozMHB4O21hcmdpbi10b3A6NXB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImNyZWF0ZUdhbWUoaW5kZXgpXCIgY2xhc3M9XCJwbGF5LWJ1dHRvblwiIDppZD1cIididXR0b24nK2luZGV4XCI+UExBWTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJvbmxpbmVVc2Vycy5sZW5ndGggPD0gMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoND5Tb3JyeSwgbm8gb3RoZXIgcGxheWVycyBjdXJyZW50bHkgb25saW5lPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbnRpbnVlXCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyPkNvbnRpbnVlIEdhbWU8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC90cmFuc2l0aW9uPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbi8vQ2hvb3NlR2FtZSBDb21wb25lbnQ6IFVzZXIgaGFzIG9wdGlvbiB0bzpcclxuLy8gaSAtIHBsYXkgYWdhaW5zdCBDb21wdXRlciAoVE9ETylcclxuLy8gaWkgLSBmaW5kIGEgcGxheWVyIG9ubGluZSBhbmQgY2hhbGxlbmdlIHRoZW0vY3JlYXRlIGdhbWVcclxuLy8gaWlpIC0gcGxheSBsb2NhbCAyIHBsYXllclxyXG4vLyBpdiAtIGNvbnRpbnVlIGEgcHJldmlvdXMgbG9jYWwvb25saW5lIGdhbWUgKFRPRE8pXHJcblxyXG5pbXBvcnQgZ2FtZUJvYXJkVGlsZXMgZnJvbSAnLi4vLi4vLi4vZGF0YS9HYW1lQm9hcmRNb2RlbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG5cdFx0dXNlcjoge3R5cGU6IE9iamVjdH0sXHJcblx0XHRwbGF5ZXIxOiB7dHlwZTogT2JqZWN0fSxcclxuXHRcdHBsYXllcjI6IHt0eXBlOiBPYmplY3R9LFxyXG5cdFx0cmVkUGllY2VzOiB7dHlwZTogT2JqZWN0fSxcclxuXHRcdGJsdWVQaWVjZXM6IHt0eXBlOiBPYmplY3R9LFxyXG5cdFx0bmV3R2FtZToge3R5cGU6IE9iamVjdH0sXHJcblxyXG5cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG5cdCAgY29ubmVjdE9ubGluZTogZmFsc2UsXHJcblx0ICBnYW1lQ3JlYXRlZDogZmFsc2UsXHJcblx0ICBnYW1lQm9hcmRUaWxlczogZ2FtZUJvYXJkVGlsZXMsXHJcblx0ICBvbmxpbmVVc2VyczogW10sXHJcblx0ICBiYXNlVXJsOiBwcm9jZXNzLmVudi5CQVNFX1VSTFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuRm9yVXNlcnMoKTtcclxuICAgIH0sXHJcblxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGxpc3RlbkZvclVzZXJzKCkge1xyXG5cdFx0XHRsZXQgdXBkYXRlT25saW5lVXNlcnMgPSB0aGlzLnVwZGF0ZU9ubGluZVVzZXJzO1xyXG5cdFx0XHRzb2NrZXQub24oJ2xvZ2luJywgZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdHVwZGF0ZU9ubGluZVVzZXJzKGRhdGEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRwbGF5T25saW5lKCkge1xyXG5cdFx0XHR0aGlzLmNvbm5lY3RPbmxpbmUgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZU9ubGluZVVzZXJzKHVzZXJzKSB7XHJcblx0XHRcdHRoaXMub25saW5lVXNlcnMgPSB1c2VycztcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVWc0NvbXB1dGVyR2FtZShidXR0b24pIHtcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLm5hbWUgPSB0aGlzLnVzZXIubmFtZTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLmF2YXRhciA9IHRoaXMudXNlci5hdmF0YXI7XHJcblx0XHRcdHRoaXMucGxheWVyMS5lbWFpbCA9IHRoaXMudXNlci5lbWFpbDtcclxuXHRcdFx0bGV0IGFzc2lnbkNvbG9yID0gdGhpcy5nZXRSYW5kb20oKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJBU1NJR05DT0xPUjogXCIgKyBhc3NpZ25Db2xvcik7XHJcblx0XHRcdGlmKGFzc2lnbkNvbG9yIDw9IDAuNSkge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5waWVjZXMgPSB0aGlzLnJlZFBpZWNlcztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuY29sb3IgPSAncmVkJztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucGllY2VzID0gdGhpcy5ibHVlUGllY2VzO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5jb2xvciA9ICdibHVlJztcclxuXHRcdFx0fSBlbHNlIGlmIChhc3NpZ25Db2xvciA+IDAuNSApIHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEucGllY2VzID0gdGhpcy5ibHVlUGllY2VzO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5jb2xvciA9ICdibHVlJztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucGllY2VzID0gdGhpcy5yZWRQaWVjZXM7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmNvbG9yID0gJ3JlZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wbGF5ZXIyLm5hbWUgPSBcIkNvbXB1dGVyXCI7XHJcblx0XHRcdHRoaXMucGxheWVyMi5hdmF0YXIgPSBcInJvYm90LnN2Z1wiO1xyXG5cdFx0XHR0aGlzLnBsYXllcjIuZW1haWwgPSBcImNvbXB1dGVyQGNvbXB1dGVybWFpbC5jb21cIjtcclxuXHRcdFx0dGhpcy5uZXdHYW1lLnBsYXllcjEgPSB0aGlzLnBsYXllcjE7XHJcblx0XHRcdHRoaXMubmV3R2FtZS5wbGF5ZXIyID0gdGhpcy5wbGF5ZXIyO1xyXG5cdFx0XHR0aGlzLm5ld0dhbWUudHVybiA9ICdyZWQnO1xyXG5cdFx0XHR0aGlzLm5ld0dhbWUudGlsZXMgPSBnYW1lQm9hcmRUaWxlcztcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5uZXdHYW1lKVxyXG5cclxuXHJcblx0XHRcdGxldCBnYW1lSWQgPSBcIlwiO1xyXG5cclxuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KGAke3RoaXMuYmFzZVVybH1uZXdnYW1lL2AsIHRoaXMubmV3R2FtZSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRnYW1lSWQgPSByZXNwb25zZS5ib2R5LmlkXHJcblx0XHRcdFx0XHR0aGlzLm5ld0dhbWUuaWQgPSBnYW1lSWQ7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld0dhbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe3BhdGg6ICcvZ2FtZS8nICsgZ2FtZUlkLCBwYXJhbXM6IHsgZ2FtZUlkOiB0aGlzLiRyb3V0ZS5wYXJhbXMuZ2FtZUlkIH19KVxyXG5cdFx0XHRcdH0sIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZ2FtZUNyZWF0ZWQgPSB0cnVlO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZUxvY2FsR2FtZShidXR0b24pIHtcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLm5hbWUgPSB0aGlzLnVzZXIubmFtZTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIxLmF2YXRhciA9IHRoaXMudXNlci5hdmF0YXI7XHJcblx0XHRcdHRoaXMucGxheWVyMS5lbWFpbCA9IHRoaXMudXNlci5lbWFpbDtcclxuXHRcdFx0bGV0IGFzc2lnbkNvbG9yID0gdGhpcy5nZXRSYW5kb20oKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJBU1NJR05DT0xPUjogXCIgKyBhc3NpZ25Db2xvcik7XHJcblx0XHRcdGlmKGFzc2lnbkNvbG9yIDw9IDAuNSkge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5waWVjZXMgPSB0aGlzLnJlZFBpZWNlcztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuY29sb3IgPSAncmVkJztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucGllY2VzID0gdGhpcy5ibHVlUGllY2VzO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5jb2xvciA9ICdibHVlJztcclxuXHRcdFx0fSBlbHNlIGlmIChhc3NpZ25Db2xvciA+IDAuNSApIHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEucGllY2VzID0gdGhpcy5ibHVlUGllY2VzO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5jb2xvciA9ICdibHVlJztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucGllY2VzID0gdGhpcy5yZWRQaWVjZXM7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmNvbG9yID0gJ3JlZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wbGF5ZXIyLm5hbWUgPSBcIlBsYXllcjJcIjtcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLmF2YXRhciA9IFwibWFuLnN2Z1wiO1xyXG5cdFx0XHR0aGlzLnBsYXllcjIuZW1haWwgPSBcImxhcnJ5QGxhcnJ5bWFpbC5jb21cIjtcclxuXHRcdFx0dGhpcy5uZXdHYW1lLnBsYXllcjEgPSB0aGlzLnBsYXllcjE7XHJcblx0XHRcdHRoaXMubmV3R2FtZS5wbGF5ZXIyID0gdGhpcy5wbGF5ZXIyO1xyXG5cdFx0XHR0aGlzLm5ld0dhbWUudHVybiA9ICdyZWQnO1xyXG5cdFx0XHR0aGlzLm5ld0dhbWUudGlsZXMgPSBnYW1lQm9hcmRUaWxlcztcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5uZXdHYW1lKVxyXG5cclxuXHJcblx0XHRcdGxldCBnYW1lSWQgPSBcIlwiO1xyXG5cclxuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KGAke3RoaXMuYmFzZVVybH1uZXdnYW1lL2AsIHRoaXMubmV3R2FtZSlcclxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHRnYW1lSWQgPSByZXNwb25zZS5ib2R5LmlkXHJcblx0XHRcdFx0XHR0aGlzLm5ld0dhbWUuaWQgPSBnYW1lSWQ7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld0dhbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe3BhdGg6ICcvZ2FtZS8nICsgZ2FtZUlkLCBwYXJhbXM6IHsgZ2FtZUlkOiB0aGlzLiRyb3V0ZS5wYXJhbXMuZ2FtZUlkIH19KVxyXG5cdFx0XHRcdH0sIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZ2FtZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuXHRcdH0sXHJcblx0XHRnZXRSYW5kb20oKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZUdhbWUoYnV0dG9uKSB7XHJcblx0XHRcdHRoaXMucGxheWVyMS5uYW1lID0gdGhpcy51c2VyLm5hbWU7XHJcblx0XHRcdHRoaXMucGxheWVyMS5hdmF0YXIgPSB0aGlzLnVzZXIuYXZhdGFyO1xyXG5cdFx0XHR0aGlzLnBsYXllcjEuZW1haWwgPSB0aGlzLnVzZXIuZW1haWw7XHJcblx0XHRcdHRoaXMucGxheWVyMS5pZCA9IHRoaXMudXNlci5pZDtcclxuXHRcdFx0bGV0IGFzc2lnbkNvbG9yID0gdGhpcy5nZXRSYW5kb20oKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJBU1NJR05DT0xPUjogXCIgKyBhc3NpZ25Db2xvcik7XHJcblx0XHRcdGlmKGFzc2lnbkNvbG9yIDw9IDAuNSkge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5waWVjZXMgPSB0aGlzLnJlZFBpZWNlcztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEuY29sb3IgPSAncmVkJztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucGllY2VzID0gdGhpcy5ibHVlUGllY2VzO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMi5jb2xvciA9ICdibHVlJztcclxuXHRcdFx0fSBlbHNlIGlmIChhc3NpZ25Db2xvciA+IDAuNSApIHtcclxuXHRcdFx0XHR0aGlzLnBsYXllcjEucGllY2VzID0gdGhpcy5ibHVlUGllY2VzO1xyXG5cdFx0XHRcdHRoaXMucGxheWVyMS5jb2xvciA9ICdibHVlJztcclxuXHRcdFx0XHR0aGlzLnBsYXllcjIucGllY2VzID0gdGhpcy5yZWRQaWVjZXM7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXIyLmNvbG9yID0gJ3JlZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wbGF5ZXIyLm5hbWUgPSB0aGlzLm9ubGluZVVzZXJzW2J1dHRvbl1bJ25hbWUnXTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLmF2YXRhciA9IHRoaXMub25saW5lVXNlcnNbYnV0dG9uXVsnYXZhdGFyJ107XHJcblx0XHRcdHRoaXMucGxheWVyMi5lbWFpbCA9IHRoaXMub25saW5lVXNlcnNbYnV0dG9uXVsnZW1haWwnXTtcclxuXHRcdFx0dGhpcy5wbGF5ZXIyLmlkID0gdGhpcy5vbmxpbmVVc2Vyc1tidXR0b25dWydpZCddO1xyXG5cdFx0XHR0aGlzLm5ld0dhbWUucGxheWVyMSA9IHRoaXMucGxheWVyMTtcclxuXHRcdFx0dGhpcy5uZXdHYW1lLnBsYXllcjIgPSB0aGlzLnBsYXllcjI7XHJcblx0XHRcdHRoaXMubmV3R2FtZS50dXJuID0gJ3JlZCc7XHJcblx0XHRcdHRoaXMubmV3R2FtZS50aWxlcyA9IGdhbWVCb2FyZFRpbGVzO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld0dhbWUpXHJcblxyXG5cdFx0XHRsZXQgZ2FtZUlkID0gXCJcIjtcclxuXHJcblx0XHRcdHRoaXMuJGh0dHAucG9zdChgJHt0aGlzLmJhc2VVcmx9bmV3Z2FtZS9gLCB0aGlzLm5ld0dhbWUpXHJcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0Z2FtZUlkID0gcmVzcG9uc2UuYm9keS5pZFxyXG5cdFx0XHRcdFx0dGhpcy5uZXdHYW1lLmlkID0gZ2FtZUlkO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5uZXdHYW1lKTtcclxuXHRcdFx0XHRcdHNvY2tldC5lbWl0KCdjaGFsbGVuZ2UnLCB0aGlzLm5ld0dhbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe3BhdGg6ICcvZ2FtZS8nICsgZ2FtZUlkLCBwYXJhbXM6IHsgZ2FtZUlkOiB0aGlzLiRyb3V0ZS5wYXJhbXMuZ2FtZUlkIH19KVxyXG5cdFx0XHRcdH0sIGVycm9yID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZ2FtZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuXHRcdH0sXHJcblx0XHRnZXRSYW5kb20oKSB7XHJcblx0XHRcdHJldHVybiBNYXRoLnJhbmRvbSgpO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5tb2RhbC1tYXNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5NjtcclxuICB0b3A6IDcwcHg7XHJcbiAgcGFkZGluZzogMjVweCAxNXB4O1xyXG5cdFxyXG4gIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAvKiB0aW50IGltYWdlICovXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuOCksIHJnYmEoMjU1LDI1NSwyNTUsMC44KSksXHJcbiAgICAgICAgICAgICAgICAgICAgLyogY2hlY2tlcmVkIGVmZmVjdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg2NCwxMTQsMTYwKSA1MCUsICNkM2QzZDMgNTAlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDY0LDExNCwxNjApIDUwJSwgI2QzZDNkMyA1MCUpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWwsIGRpZmZlcmVuY2UsIG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzIwcHggMzIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpOyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RhbC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG5cdGhlaWdodDo4MCU7XHJcblx0d2lkdGg6IDQwJTtcclxuXHRtaW4td2lkdGg6IDgwMHB4O1xyXG5cdG1hcmdpbjogYXV0bztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cGFkZGluZzogMTBweCAxMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIC4zMyk7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG5cdGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJywgY3Vyc2l2ZTtcclxuXHJcbn1cclxuXHJcbi5jb2wtbWQtNiB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luOiAwIDA7XHJcblx0cGFkZGluZzogMCAwO1xyXG59XHJcblxyXG4uY29sLW1kLTEyIHtcclxuXHRjb2xvcjogI0ZGRjtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLm9wdGlvbiB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoMntcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0fVxyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuLm9wdGlvbjphY3RpdmUge1xyXG5cdG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmNvbXB1dGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQjcxQzFDO1xyXG5cdGhlaWdodDogNTAlO1xyXG5cdG1hcmdpbjogMCAwO1xyXG5cdGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XHJcbn1cclxuLmNvbXB1dGVyOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy91bmRlci1jb25zdHJ1Y3Rpb24uc3ZnJyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG59XHJcbi50d28tbG9jYWwge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0aGVpZ2h0OiA1MCU7XHJcblx0bWFyZ2luOiAwIDA7XHJcblx0Ym9yZGVyOiAjMDAwIHNvbGlkIDNweDtcclxuXHJcbn1cclxuLnR3by1vbmxpbmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0aGVpZ2h0OiA1MCU7XHJcblx0bWFyZ2luOiAwIDA7XHJcblx0Ym9yZGVyOiAjMDAwIHNvbGlkIDNweDtcclxufVxyXG4uY2hvb3NlLXBsYXllciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGNvbG9yOiNGRkY7XHJcbn1cclxuLnBsYXllci1ib3gge1xyXG5cdG1pbi1oZWlnaHQ6NDBweDtcclxuXHRtYXJnaW4tdG9wOjEwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcblxyXG59XHJcbi5wbGF5LWJ1dHRvbiB7XHJcblx0Y29sb3I6I0ZGRjtcclxuICAgIGJhY2tncm91bmQ6ICM0MDcyYTA7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzM0NTM3YztcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZSc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcbi5wbGF5LWJ1dHRvbjpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzM0NTM3YztcclxuXHRjb2xvcjogI0ZGRjtcclxufVxyXG4ucGxheS1idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jb250aW51ZXtcclxuXHRcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3MmEwO1xyXG5cdGhlaWdodDogNTAlO1xyXG5cdG1hcmdpbjogMCAwO1xyXG5cdGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XHJcbn1cclxuLmNvbnRpbnVlOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy91bmRlci1jb25zdHJ1Y3Rpb24uc3ZnJyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG59XHJcbiNidXR0b24ge1xyXG5cclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1lbnRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1vZGFsLWxlYXZlLWFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyIC5tb2RhbC1jb250YWluZXIsXHJcbi5tb2RhbC1sZWF2ZS1hY3RpdmUgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG48L3N0eWxlPlxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQTNJQTtBQTZJQTtBQUNBO0FBdEtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/ChooseGame.vue?vue&type=script&lang=js&\n");

/***/ })

})