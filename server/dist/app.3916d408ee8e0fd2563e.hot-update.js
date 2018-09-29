webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/chat/GameChat.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/game/chat/GameChat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BluePlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BluePlayerUserMessage.vue */ \"./src/components/game-container/game/chat/BluePlayerUserMessage.vue\");\n/* harmony import */ var _RedPlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedPlayerUserMessage.vue */ \"./src/components/game-container/game/chat/RedPlayerUserMessage.vue\");\n/* harmony import */ var _BluePlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BluePlayerOpponentMessage.vue */ \"./src/components/game-container/game/chat/BluePlayerOpponentMessage.vue\");\n/* harmony import */ var _RedPlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RedPlayerOpponentMessage.vue */ \"./src/components/game-container/game/chat/RedPlayerOpponentMessage.vue\");\n/* harmony import */ var _NewMessage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewMessage.vue */ \"./src/components/game-container/game/chat/NewMessage.vue\");\n/* harmony import */ var _MovesMessage_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MovesMessage.vue */ \"./src/components/game-container/game/chat/MovesMessage.vue\");\n/* harmony import */ var _RulesMessage_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RulesMessage.vue */ \"./src/components/game-container/game/chat/RulesMessage.vue\");\n/* harmony import */ var _WelcomeMessage_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WelcomeMessage.vue */ \"./src/components/game-container/game/chat/WelcomeMessage.vue\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//TODO: Fix - GameChat component does not scroll all the way to the bottom on new message\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    player1: {\n      type: Object\n    },\n    player2: {\n      type: Object\n    },\n    user: {\n      type: Object\n    },\n    opponent: {\n      type: Object\n    },\n    showTileNumbers: {\n      type: Boolean\n    },\n    rulesString: {\n      type: String\n    }\n  },\n  data: function data() {\n    return {\n      usrMsg: [],\n      usrMsgs: [],\n      baseUrl: \"/\"\n    };\n  },\n  components: {\n    \"blue-player-user-message\": _BluePlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    \"red-player-user-message\": _RedPlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    \"blue-player-opponent-message\": _BluePlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    \"red-player-opponent-message\": _RedPlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    \"new-message\": _NewMessage_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    \"moves-message\": _MovesMessage_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    \"rules-message\": _RulesMessage_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    \"welcome-message\": _WelcomeMessage_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  },\n  methods: {\n    listenForMessages: function listenForMessages() {\n      var _this = this;\n\n      var usrMsgs = this.usrMsgs;\n      var usrMsg = this.usrMsg;\n      var url = window.location.href;\n      var room = url.split(\"game/\").pop();\n      var $http = this.$http;\n      var rulesString = this.rulesString;\n      socket.on(\"chat\", function (data) {\n        usrMsg = data.msg.slice(0, -1);\n        var usr = data.usr;\n        var moves = \"\";\n\n        if (usrMsg === \"/moves\") {\n          var id = url.split(\"game/\").pop();\n          $http.post(\"newgame/requestmoves\", {\n            id: id\n          }).then(function (response) {\n            moves = moves + response.body.moves;\n            usrMsgs.push([moves, \"info\"]);\n          }, function (error) {\n            console.log(error);\n          });\n        }\n\n        if (usrMsg === \"/toggletiles\") {\n          _this.$emit(\"requestTileNumbers\", !_this.showTileNumbers);\n        }\n\n        if (usrMsg === \"/rules\") {\n          usrMsgs.push([rulesString, \"rules\"]);\n        }\n\n        if (usrMsg[0] !== \"/\") {\n          usrMsgs.push([usrMsg, usr]);\n          console.log(\"IN ROOM \" + room + \" DATA: \" + usrMsg + usr);\n        }\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.listenForMessages();\n  },\n  updated: function updated() {\n    {\n      var el = document.getElementById(\"all-messages\");\n      el.scrollTop = el.scrollHeight;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL2dhbWUvY2hhdC9HYW1lQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0dhbWVDaGF0LnZ1ZT9iNTdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NyU7YmFja2dyb3VuZC1jb2xvcjojN2YwMDAwO2NvbG9yOiNGRkY7ZGlzcGxheTpmbGV4XCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBpZD1cImFsbC1tZXNzYWdlc1wiPlxuICAgICAgICA8d2VsY29tZS1tZXNzYWdlPjwvd2VsY29tZS1tZXNzYWdlPlxuICAgICAgPGRpdiB2LWZvcj1cIih1c3JNc2csIGluZGV4KSBpbiB1c3JNc2dzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwidXNyTXNnWzFdID09PSAnaW5mbydcIj5cbiAgICAgICAgICA8bW92ZXMtbWVzc2FnZSA6dXNyTXNnPVwidXNyTXNnWzBdXCIgPjwvbW92ZXMtbWVzc2FnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cInVzck1zZ1sxXSA9PT0gJ3J1bGVzJ1wiPlxuICAgICAgICAgICAgPHJ1bGVzLW1lc3NhZ2UgOnVzck1zZz1cInVzck1zZ1swXVwiID48L3J1bGVzLW1lc3NhZ2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJ1c3JNc2dbMV0gIT09IHVzZXIubmFtZSAmJiB1c3JNc2dbMV0gIT09ICdpbmZvJyAmJiB1c3JNc2dbMV0gIT09ICdydWxlcydcIj5cbiAgICAgICAgICAgIDxyZWQtcGxheWVyLW9wcG9uZW50LW1lc3NhZ2Ugdi1pZj1cIm9wcG9uZW50LmNvbG9yID09PSAncmVkJ1wiIDp1c3JNc2c9XCJ1c3JNc2dbMF1cIiA6b3Bwb25lbnQ9XCJvcHBvbmVudFwiPjwvcmVkLXBsYXllci1vcHBvbmVudC1tZXNzYWdlPlxuICAgICAgICAgICAgPGJsdWUtcGxheWVyLW9wcG9uZW50LW1lc3NhZ2Ugdi1pZj1cIm9wcG9uZW50LmNvbG9yID09PSAnYmx1ZSdcIiA6dXNyTXNnPVwidXNyTXNnWzBdXCIgOm9wcG9uZW50PVwib3Bwb25lbnRcIj48L2JsdWUtcGxheWVyLW9wcG9uZW50LW1lc3NhZ2U+ICAgICAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgdi1pZj1cInVzck1zZ1sxXSA9PT0gdXNlci5uYW1lXCI+XG4gICAgICAgICAgICA8Ymx1ZS1wbGF5ZXItdXNlci1tZXNzYWdlIHYtaWY9XCJvcHBvbmVudC5jb2xvciA9PT0gJ3JlZCdcIiA6dXNyTXNnPVwidXNyTXNnWzBdXCIgOnVzZXI9XCJ1c2VyXCI+PC9ibHVlLXBsYXllci11c2VyLW1lc3NhZ2U+ICBcbiAgICAgICAgICAgIDxyZWQtcGxheWVyLXVzZXItbWVzc2FnZSB2LWlmPVwib3Bwb25lbnQuY29sb3IgPT09ICdibHVlJ1wiIDp1c3JNc2c9XCJ1c3JNc2dbMF1cIiA6dXNlcj1cInVzZXJcIj48L3JlZC1wbGF5ZXItdXNlci1tZXNzYWdlPiAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwibmV3LW1lc3NhZ2UtYm94XCI+XG4gICAgICAgICAgPG5ldy1tZXNzYWdlIGlkPVwibmV3LW1lc3NhZ2VcIiA6dXNlcj1cInVzZXJcIj48L25ldy1tZXNzYWdlPlxuICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9XCJiYXNlXCIgc3R5bGU9XCJoZWlnaHQ6NyU7YmFja2dyb3VuZDojMzQ1MzdjO3BhZGRpbmctdG9wOjdweFwiPlxuICAgICAgICA8aDMgc3R5bGU9XCJtYXJnaW46MCAwIDAgMDtjb2xvcjojRkZGXCI+IENIQVQ8L2gzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vVE9ETzogRml4IC0gR2FtZUNoYXQgY29tcG9uZW50IGRvZXMgbm90IHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgYm90dG9tIG9uIG5ldyBtZXNzYWdlXG5cbmltcG9ydCBCbHVlUGxheWVyVXNlck1lc3NhZ2UgZnJvbSBcIi4vQmx1ZVBsYXllclVzZXJNZXNzYWdlLnZ1ZVwiO1xuaW1wb3J0IFJlZFBsYXllclVzZXJNZXNzYWdlIGZyb20gXCIuL1JlZFBsYXllclVzZXJNZXNzYWdlLnZ1ZVwiO1xuaW1wb3J0IEJsdWVQbGF5ZXJPcHBvbmVudE1lc3NhZ2UgZnJvbSBcIi4vQmx1ZVBsYXllck9wcG9uZW50TWVzc2FnZS52dWVcIjtcbmltcG9ydCBSZWRQbGF5ZXJPcHBvbmVudE1lc3NhZ2UgZnJvbSBcIi4vUmVkUGxheWVyT3Bwb25lbnRNZXNzYWdlLnZ1ZVwiO1xuaW1wb3J0IE5ld01lc3NhZ2UgZnJvbSBcIi4vTmV3TWVzc2FnZS52dWVcIjtcbmltcG9ydCBNb3Zlc01lc3NhZ2UgZnJvbSBcIi4vTW92ZXNNZXNzYWdlLnZ1ZVwiO1xuaW1wb3J0IFJ1bGVzTWVzc2FnZSBmcm9tIFwiLi9SdWxlc01lc3NhZ2UudnVlXCI7XG5pbXBvcnQgV2VsY29tZU1lc3NhZ2UgZnJvbSBcIi4vV2VsY29tZU1lc3NhZ2UudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBwbGF5ZXIxOiB7IHR5cGU6IE9iamVjdCB9LFxuICAgIHBsYXllcjI6IHsgdHlwZTogT2JqZWN0IH0sXG4gICAgdXNlcjogeyB0eXBlOiBPYmplY3QgfSxcbiAgICBvcHBvbmVudDogeyB0eXBlOiBPYmplY3QgfSxcbiAgICBzaG93VGlsZU51bWJlcnM6IHsgdHlwZTogQm9vbGVhbiB9LFxuICAgIHJ1bGVzU3RyaW5nOiB7IHR5cGU6IFN0cmluZyB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzck1zZzogW10sXG4gICAgICB1c3JNc2dzOiBbXSxcbiAgICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkJBU0VfVVJMXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFwiYmx1ZS1wbGF5ZXItdXNlci1tZXNzYWdlXCI6IEJsdWVQbGF5ZXJVc2VyTWVzc2FnZSxcbiAgICBcInJlZC1wbGF5ZXItdXNlci1tZXNzYWdlXCI6IFJlZFBsYXllclVzZXJNZXNzYWdlLFxuICAgIFwiYmx1ZS1wbGF5ZXItb3Bwb25lbnQtbWVzc2FnZVwiOiBCbHVlUGxheWVyT3Bwb25lbnRNZXNzYWdlLFxuICAgIFwicmVkLXBsYXllci1vcHBvbmVudC1tZXNzYWdlXCI6IFJlZFBsYXllck9wcG9uZW50TWVzc2FnZSxcbiAgICBcIm5ldy1tZXNzYWdlXCI6IE5ld01lc3NhZ2UsXG4gICAgXCJtb3Zlcy1tZXNzYWdlXCI6IE1vdmVzTWVzc2FnZSxcbiAgICBcInJ1bGVzLW1lc3NhZ2VcIjogUnVsZXNNZXNzYWdlLFxuICAgIFwid2VsY29tZS1tZXNzYWdlXCI6IFdlbGNvbWVNZXNzYWdlXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsaXN0ZW5Gb3JNZXNzYWdlcygpIHtcbiAgICAgIGxldCB1c3JNc2dzID0gdGhpcy51c3JNc2dzO1xuICAgICAgbGV0IHVzck1zZyA9IHRoaXMudXNyTXNnO1xuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgbGV0IHJvb20gPSB1cmwuc3BsaXQoXCJnYW1lL1wiKS5wb3AoKTtcbiAgICAgIGxldCAkaHR0cCA9IHRoaXMuJGh0dHA7XG4gICAgICBsZXQgcnVsZXNTdHJpbmcgPSB0aGlzLnJ1bGVzU3RyaW5nO1xuXG4gICAgICBzb2NrZXQub24oXCJjaGF0XCIsIGRhdGEgPT4ge1xuICAgICAgICB1c3JNc2cgPSBkYXRhLm1zZy5zbGljZSgwLCAtMSk7XG4gICAgICAgIGxldCB1c3IgPSBkYXRhLnVzcjtcbiAgICAgICAgbGV0IG1vdmVzID0gXCJcIjtcbiAgICAgICAgaWYgKHVzck1zZyA9PT0gXCIvbW92ZXNcIikge1xuICAgICAgICAgIGxldCBpZCA9IHVybC5zcGxpdChcImdhbWUvXCIpLnBvcCgpO1xuICAgICAgICAgICRodHRwLnBvc3QoYG5ld2dhbWUvcmVxdWVzdG1vdmVzYCwgeyBpZDogaWQgfSkudGhlbihcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgbW92ZXMgPSBtb3ZlcyArIHJlc3BvbnNlLmJvZHkubW92ZXM7XG4gICAgICAgICAgICAgIHVzck1zZ3MucHVzaChbbW92ZXMsIFwiaW5mb1wiXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNyTXNnID09PSBcIi90b2dnbGV0aWxlc1wiKSB7XG4gICAgICAgICAgdGhpcy4kZW1pdChcInJlcXVlc3RUaWxlTnVtYmVyc1wiLCAhdGhpcy5zaG93VGlsZU51bWJlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzck1zZyA9PT0gXCIvcnVsZXNcIikge1xuICAgICAgICAgIHVzck1zZ3MucHVzaChbcnVsZXNTdHJpbmcsIFwicnVsZXNcIl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzck1zZ1swXSAhPT0gXCIvXCIpIHtcbiAgICAgICAgICB1c3JNc2dzLnB1c2goW3Vzck1zZywgdXNyXSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTiBST09NIFwiICsgcm9vbSArIFwiIERBVEE6IFwiICsgdXNyTXNnICsgdXNyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmxpc3RlbkZvck1lc3NhZ2VzKCk7XG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGwtbWVzc2FnZXNcIik7XG4gICAgICBlbC5zY3JvbGxUb3AgPSBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbiNjb250YWluZXIge1xucGFkZGluZzogMCAwO1xufVxuI2FsbC1tZXNzYWdlcyB7XG5oZWlnaHQ6IDMxMHB4O1xub3ZlcmZsb3cteDogaGlkZGVuO1xub3ZlcmZsb3cteTogYXV0bztcbn1cbiNuZXctbWVzc2FnZS1ib3gge1xuaGVpZ2h0OiAxMDRweDtcbmJhY2tncm91bmQtY29sb3I6ICM0MDcyYTA7XG59XG4jbmV3LW1lc3NhZ2Uge1xuaGVpZ2h0OiA5MHB4O1xufVxuaDEge1xubWFyZ2luLXRvcDogMHB4O1xubWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDBweCkgYW5kIChtaW4td2lkdGg6IDY1MHB4KSB7XG4jYWxsLW1lc3NhZ2VzIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA1NDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4jYWxsLW1lc3NhZ2VzIHtcbiAgaGVpZ2h0OiAyNjZweDtcbn1cbiNiYXNlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODQwcHgpIHtcbiNhbGwtbWVzc2FnZXMge1xuICBoZWlnaHQ6IDM4MnB4O1xufVxufVxuPC9zdHlsZT5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/chat/GameChat.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/chat/GameChat.vue?vue&type=style&index=0&id=4f84e9ed&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/game/chat/GameChat.vue?vue&type=style&index=0&id=4f84e9ed&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#container[data-v-4f84e9ed] {\\npadding: 0 0;\\n}\\n#all-messages[data-v-4f84e9ed] {\\nheight: 310px;\\noverflow-x: hidden;\\noverflow-y: auto;\\n}\\n#new-message-box[data-v-4f84e9ed] {\\nheight: 104px;\\nbackground-color: #4072a0;\\n}\\n#new-message[data-v-4f84e9ed] {\\nheight: 90px;\\n}\\nh1[data-v-4f84e9ed] {\\nmargin-top: 0px;\\nmargin-bottom: 0px;\\n}\\n@media only screen and (min-height: 300px) and (min-width: 650px) {\\n#all-messages[data-v-4f84e9ed] {\\n  height: 140px;\\n}\\n}\\n@media (min-height: 540px) and (min-width: 700px) {\\n#all-messages[data-v-4f84e9ed] {\\n  height: 266px;\\n}\\n#base[data-v-4f84e9ed] {\\n  padding-top: 0px;\\n  padding-bottom: 5px;\\n}\\n}\\n@media only screen and (min-height: 840px) {\\n#all-messages[data-v-4f84e9ed] {\\n  height: 382px;\\n}\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL2dhbWUvY2hhdC9HYW1lQ2hhdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00Zjg0ZTllZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nYW1lLWNvbnRhaW5lci9nYW1lL2NoYXQvR2FtZUNoYXQudnVlPzU3NDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jY29udGFpbmVyW2RhdGEtdi00Zjg0ZTllZF0ge1xcbnBhZGRpbmc6IDAgMDtcXG59XFxuI2FsbC1tZXNzYWdlc1tkYXRhLXYtNGY4NGU5ZWRdIHtcXG5oZWlnaHQ6IDMxMHB4O1xcbm92ZXJmbG93LXg6IGhpZGRlbjtcXG5vdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4jbmV3LW1lc3NhZ2UtYm94W2RhdGEtdi00Zjg0ZTllZF0ge1xcbmhlaWdodDogMTA0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogIzQwNzJhMDtcXG59XFxuI25ldy1tZXNzYWdlW2RhdGEtdi00Zjg0ZTllZF0ge1xcbmhlaWdodDogOTBweDtcXG59XFxuaDFbZGF0YS12LTRmODRlOWVkXSB7XFxubWFyZ2luLXRvcDogMHB4O1xcbm1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogMzAwcHgpIGFuZCAobWluLXdpZHRoOiA2NTBweCkge1xcbiNhbGwtbWVzc2FnZXNbZGF0YS12LTRmODRlOWVkXSB7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4taGVpZ2h0OiA1NDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuI2FsbC1tZXNzYWdlc1tkYXRhLXYtNGY4NGU5ZWRdIHtcXG4gIGhlaWdodDogMjY2cHg7XFxufVxcbiNiYXNlW2RhdGEtdi00Zjg0ZTllZF0ge1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4NDBweCkge1xcbiNhbGwtbWVzc2FnZXNbZGF0YS12LTRmODRlOWVkXSB7XFxuICBoZWlnaHQ6IDM4MnB4O1xcbn1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/chat/GameChat.vue?vue&type=style&index=0&id=4f84e9ed&scoped=true&lang=css&\n");

/***/ })

})