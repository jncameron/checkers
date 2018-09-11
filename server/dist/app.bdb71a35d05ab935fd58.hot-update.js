webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/typeof */ \"./node_modules/@babel/runtime/helpers/builtin/es6/typeof.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header_Header_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/Header.vue */ \"./src/components/header/Header.vue\");\n/* harmony import */ var _components_game_container_GameContainer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game-container/GameContainer.vue */ \"./src/components/game-container/GameContainer.vue\");\n/* harmony import */ var _components_game_container_game_ChooseGame_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game-container/game/ChooseGame.vue */ \"./src/components/game-container/game/ChooseGame.vue\");\n/* harmony import */ var _data_UserModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/UserModel */ \"./src/data/UserModel.js\");\n/* harmony import */ var _data_Player1Model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/Player1Model */ \"./src/data/Player1Model.js\");\n/* harmony import */ var _data_Player2Model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/Player2Model */ \"./src/data/Player2Model.js\");\n/* harmony import */ var _data_OnlineUsers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/OnlineUsers */ \"./src/data/OnlineUsers.js\");\n/* harmony import */ var _data_NewGameModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/NewGameModel */ \"./src/data/NewGameModel.js\");\n/* harmony import */ var _data_RedPlayerModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/RedPlayerModel */ \"./src/data/RedPlayerModel.js\");\n/* harmony import */ var _data_BluePlayerModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/BluePlayerModel */ \"./src/data/BluePlayerModel.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//TODO: Make Profile, Signup, and ChooseGame UI compatible with Edge and Firefox (fine on Chrome)\n\n\n\n\n\n\n\n\n\n\nvar baseUrl = \"/\";\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'app',\n  data: function data() {\n    return {\n      user: _data_UserModel__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n      onlineUsers: _data_OnlineUsers__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n      challengeUrl: \"\",\n      challenged: false,\n      challenger: \"\",\n      gameId: \"\"\n    };\n  },\n  components: {\n    'app-header': _components_header_Header_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    GameContainer: _components_game_container_GameContainer_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  mounted: function mounted() {\n    this.listenForUsers();\n    this.listenForChallenges();\n    this.logInOnRefreshWithToken();\n  },\n  methods: {\n    listenForUsers: function listenForUsers() {\n      var updateOnlineUsers = this.updateOnlineUsers;\n      socket.on('login', function (data) {\n        updateOnlineUsers(data);\n      });\n    },\n    listenForChallenges: function listenForChallenges() {\n      var user = this.user;\n      var $router = this.$router;\n      var $route = this.$route;\n      var setChallenged = this.setChallenged;\n      var setChallenger = this.setChallenger;\n      var setGameId = this.setGameId;\n      socket.on('challenge', function (data) {\n        this.challengeUrl = \"\".concat(baseUrl, \"#/game/\").concat(data.id);\n        setGameId(data.id);\n\n        if (user.name === data.player2.name) {\n          setChallenger(data.player1.name);\n          setChallenged(true);\n        }\n      });\n    },\n    acceptChallenge: function acceptChallenge() {\n      this.$router.push({\n        path: '/game/' + this.gameId,\n        params: {\n          gameId: this.$route.params.gameId\n        }\n      });\n      this.setChallenged(false);\n    },\n    declineChallenge: function declineChallenge() {\n      this.setChallenged(false);\n    },\n    setChallenged: function setChallenged(chal) {\n      this.challenged = chal;\n    },\n    setChallenger: function setChallenger(chal) {\n      this.challenger = chal;\n    },\n    setGameId: function setGameId(id) {\n      this.gameId = id;\n    },\n    updateOnlineUsers: function updateOnlineUsers(userList) {\n      var _this = this;\n\n      this.onlineUsers.length = 0;\n      userList.forEach(function (user) {\n        _this.onlineUsers.push(user);\n      });\n      console.log(\"Online Users \" + JSON.stringify(this.onlineUsers));\n    },\n    updateUser: function updateUser(usr) {\n      this.user = usr;\n    },\n    logInOnRefreshWithToken: function logInOnRefreshWithToken() {\n      var _this2 = this;\n\n      //IF token exists in local storage and hasn't expired\n      if (this.user._id.length === 0 && localStorage.getItem(\"usertoken\" !== null)) {\n        var token = JSON.stringify(localStorage[\"usertoken\"]);\n        console.log(Object(_mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token));\n        console.log(token);\n        this.$http.post('/user/refreshlogin/', localStorage).then(function (response) {\n          _this2.user = response.body.user;\n\n          _this2.listenForUsers();\n\n          _this2.listenForChallenges();\n        }, function (error) {\n          console.log(error);\n        });\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9BcHAudnVlPzIzNGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXG5cdDxkaXYgaWQ9XCJhcHBcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87XCI+XG5cdFx0PGFwcC1oZWFkZXIgOnVzZXI9XCJ1c2VyXCIgc3R5bGU9XCJ6LWluZGV4Ojk5OThcIj48L2FwcC1oZWFkZXI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiIGlkPVwiaWYtY2hhbGxlbmdlZFwiIHYtaWY9XCJjaGFsbGVuZ2VkXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPjxoMj57eyBjaGFsbGVuZ2VyIH19IGhhcyBjaGFsbGVuZ2VkIHlvdTwvaDI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTJcIiBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZVwiPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuLXByaW1hcnlcIiBAY2xpY2s9XCJhY2NlcHRDaGFsbGVuZ2VcIj5BQ0NFUFQ8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1kYW5nZXJcIiBAY2xpY2s9XCJkZWNsaW5lQ2hhbGxlbmdlXCI+REVDTElORTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PHJvdXRlci12aWV3IEB1cGRhdGUtdXNlcj1cInVwZGF0ZVVzZXIoJGV2ZW50KVwiIFxuXHRcdFx0OnVzZXI9XCJ1c2VyXCJcblx0XHRcdDpvbmxpbmVVc2Vycz1cIm9ubGluZVVzZXJzXCJcbiAgICAgICAgICAgIDpuZXdHYW1lPVwibmV3R2FtZVwiXG4gICAgICAgICAgICA6cGxheWVyMT1cInBsYXllcjFcIlxuICAgICAgICAgICAgOnBsYXllcjI9XCJwbGF5ZXIyXCJcbiAgICAgICAgICAgIDpyZWRQaWVjZXM9XCJyZWRQaWVjZXNcIlxuICAgICAgICAgICAgOmJsdWVQaWVjZXM9XCJibHVlUGllY2VzXCI+PC9yb3V0ZXItdmlldz5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy9UT0RPOiBNYWtlIFByb2ZpbGUsIFNpZ251cCwgYW5kIENob29zZUdhbWUgVUkgY29tcGF0aWJsZSB3aXRoIEVkZ2UgYW5kIEZpcmVmb3ggKGZpbmUgb24gQ2hyb21lKVxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnZ1ZSc7XG5pbXBvcnQgR2FtZUNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvZ2FtZS1jb250YWluZXIvR2FtZUNvbnRhaW5lci52dWUnO1xuaW1wb3J0IENob29zZUdhbWUgZnJvbSAnLi9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL2dhbWUvQ2hvb3NlR2FtZS52dWUnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi9kYXRhL1VzZXJNb2RlbCc7XG5pbXBvcnQgcGxheWVyMSBmcm9tICcuL2RhdGEvUGxheWVyMU1vZGVsJztcbmltcG9ydCBwbGF5ZXIyIGZyb20gJy4vZGF0YS9QbGF5ZXIyTW9kZWwnO1xuaW1wb3J0IG9ubGluZVVzZXJzIGZyb20gJy4vZGF0YS9PbmxpbmVVc2Vycyc7XG5pbXBvcnQgbmV3R2FtZSBmcm9tICcuL2RhdGEvTmV3R2FtZU1vZGVsJztcbmltcG9ydCByZWRQaWVjZXMgZnJvbSAnLi9kYXRhL1JlZFBsYXllck1vZGVsJztcbmltcG9ydCBibHVlUGllY2VzIGZyb20gJy4vZGF0YS9CbHVlUGxheWVyTW9kZWwnO1xuXG5jb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkw7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ2FwcCcsXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVzZXI6IHVzZXIsXG5cdFx0XHRvbmxpbmVVc2Vyczogb25saW5lVXNlcnMsXG5cdFx0XHRjaGFsbGVuZ2VVcmw6IFwiXCIsXG5cdFx0XHRjaGFsbGVuZ2VkOiBmYWxzZSxcblx0XHRcdGNoYWxsZW5nZXI6IFwiXCIsXG5cdFx0XHRnYW1lSWQ6IFwiXCIsXG5cblx0XHR9XG5cdH0sXG4gIFx0Y29tcG9uZW50czoge1xuICAgIFx0J2FwcC1oZWFkZXInOiBIZWFkZXIsXG5cdFx0R2FtZUNvbnRhaW5lcixcblx0fSxcblx0bW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubGlzdGVuRm9yVXNlcnMoKTtcblx0XHR0aGlzLmxpc3RlbkZvckNoYWxsZW5nZXMoKTtcblx0XHR0aGlzLmxvZ0luT25SZWZyZXNoV2l0aFRva2VuKCk7XG4gICAgfSxcblxuICBcdG1ldGhvZHM6IHtcblx0XHRsaXN0ZW5Gb3JVc2VycygpIHtcblx0XHRcdGxldCB1cGRhdGVPbmxpbmVVc2VycyA9IHRoaXMudXBkYXRlT25saW5lVXNlcnM7XG5cdFx0XHRzb2NrZXQub24oJ2xvZ2luJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0dXBkYXRlT25saW5lVXNlcnMoZGF0YSk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGxpc3RlbkZvckNoYWxsZW5nZXMoKSB7XG5cdFx0XHRsZXQgdXNlciA9IHRoaXMudXNlcjtcblx0XHRcdGxldCAkcm91dGVyID0gdGhpcy4kcm91dGVyO1xuXHRcdFx0bGV0ICRyb3V0ZSA9IHRoaXMuJHJvdXRlO1xuXHRcdFx0bGV0IHNldENoYWxsZW5nZWQgPSB0aGlzLnNldENoYWxsZW5nZWQ7XG5cdFx0XHRsZXQgc2V0Q2hhbGxlbmdlciA9IHRoaXMuc2V0Q2hhbGxlbmdlcjtcblx0XHRcdGxldCBzZXRHYW1lSWQgPSB0aGlzLnNldEdhbWVJZDtcblx0XHRcdHNvY2tldC5vbignY2hhbGxlbmdlJywgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHR0aGlzLmNoYWxsZW5nZVVybCA9IGAke2Jhc2VVcmx9Iy9nYW1lLyR7ZGF0YS5pZH1gXG5cdFx0XHRcdHNldEdhbWVJZChkYXRhLmlkKVxuXHRcdFx0XHRpZih1c2VyLm5hbWUgPT09IGRhdGEucGxheWVyMi5uYW1lKSB7XG5cdFx0XHRcdHNldENoYWxsZW5nZXIoZGF0YS5wbGF5ZXIxLm5hbWUpXG5cdFx0XHRcdHNldENoYWxsZW5nZWQodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0YWNjZXB0Q2hhbGxlbmdlKCkge1xuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe3BhdGg6ICcvZ2FtZS8nICsgdGhpcy5nYW1lSWQsIHBhcmFtczogeyBnYW1lSWQ6IHRoaXMuJHJvdXRlLnBhcmFtcy5nYW1lSWQgfX0pO1xuXHRcdFx0dGhpcy5zZXRDaGFsbGVuZ2VkKGZhbHNlKTtcblx0XHR9LFxuXHRcdGRlY2xpbmVDaGFsbGVuZ2UoKSB7XG5cdFx0XHR0aGlzLnNldENoYWxsZW5nZWQoZmFsc2UpO1xuXHRcdH0sXG5cdFx0c2V0Q2hhbGxlbmdlZChjaGFsKSB7XG5cdFx0XHR0aGlzLmNoYWxsZW5nZWQgPSBjaGFsO1xuXHRcdH0sXG5cdFx0c2V0Q2hhbGxlbmdlcihjaGFsKSB7XG5cdFx0XHR0aGlzLmNoYWxsZW5nZXIgPSBjaGFsO1xuXHRcdH0sXG5cdFx0c2V0R2FtZUlkKGlkKSB7XG5cdFx0XHR0aGlzLmdhbWVJZCA9IGlkO1xuXHRcdH0sXG5cdFx0dXBkYXRlT25saW5lVXNlcnModXNlckxpc3QpIHtcblx0XHRcdHRoaXMub25saW5lVXNlcnMubGVuZ3RoID0gMDtcblx0XHRcdHVzZXJMaXN0LmZvckVhY2godXNlciA9PiB7XG5cdFx0XHRcdHRoaXMub25saW5lVXNlcnMucHVzaCh1c2VyKTtcblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJPbmxpbmUgVXNlcnMgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLm9ubGluZVVzZXJzKSk7XG5cdFx0fSxcblx0XHR1cGRhdGVVc2VyKHVzcikge1xuXHRcdFx0dGhpcy51c2VyID0gdXNyO1xuXHRcdH0sXG5cdFx0bG9nSW5PblJlZnJlc2hXaXRoVG9rZW4oKSB7XG5cdFx0XHQvL0lGIHRva2VuIGV4aXN0cyBpbiBsb2NhbCBzdG9yYWdlIGFuZCBoYXNuJ3QgZXhwaXJlZFxuXHRcdFx0aWYodGhpcy51c2VyLl9pZC5sZW5ndGggPT09IDAgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VydG9rZW5cIiAhPT0gbnVsbCkpIHtcblx0XHRcdFx0bGV0IHRva2VuID0gSlNPTi5zdHJpbmdpZnkobG9jYWxTdG9yYWdlW1widXNlcnRva2VuXCJdKTtcblx0XHRcdFx0Y29uc29sZS5sb2codHlwZW9mIHRva2VuKVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0b2tlbilcblx0XHRcdFx0dGhpcy4kaHR0cC5wb3N0KCcvdXNlci9yZWZyZXNobG9naW4vJywgbG9jYWxTdG9yYWdlKVxuXHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy51c2VyID0gcmVzcG9uc2UuYm9keS51c2VyO1xuXHRcdFx0XHRcdHRoaXMubGlzdGVuRm9yVXNlcnMoKTtcblx0XHRcdFx0XHR0aGlzLmxpc3RlbkZvckNoYWxsZW5nZXMoKTtcblxuXHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuI2FwcCB7XG5cdGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJywgY3Vyc2l2ZTtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6ICMyYzNlNTA7XG59XG4jaWYtY2hhbGxlbmdlZCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0ei1pbmRleDogOTk5ODtcblx0dG9wOiA3MHB4O1xuXHRib3JkZXItdG9wOiBzb2xpZCBibGFjayAzcHg7XG5cdGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDNweDsgXG5cdGJhY2tncm91bmQtY29sb3I6ICM3ZjAwMDA7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbmgyIHtcblx0bWFyZ2luOiAwIDA7XG5cdGNvbG9yOiAjRkZGXG59XG5idXR0b24ge1xuXHRwYWRkaW5nLXRvcDogNXB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuPC9zdHlsZT5cbiAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWxFQTtBQXZCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})