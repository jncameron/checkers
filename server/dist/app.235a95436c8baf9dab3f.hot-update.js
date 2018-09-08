webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/chat/GameChat.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/game/chat/GameChat.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BluePlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BluePlayerUserMessage.vue */ \"./src/components/game-container/game/chat/BluePlayerUserMessage.vue\");\n/* harmony import */ var _RedPlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RedPlayerUserMessage.vue */ \"./src/components/game-container/game/chat/RedPlayerUserMessage.vue\");\n/* harmony import */ var _BluePlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BluePlayerOpponentMessage.vue */ \"./src/components/game-container/game/chat/BluePlayerOpponentMessage.vue\");\n/* harmony import */ var _RedPlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RedPlayerOpponentMessage.vue */ \"./src/components/game-container/game/chat/RedPlayerOpponentMessage.vue\");\n/* harmony import */ var _NewMessage_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewMessage.vue */ \"./src/components/game-container/game/chat/NewMessage.vue\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//TODO: Fix - GameChat component does not scroll all the way to the bottom on new message\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    player1: {\n      type: Object\n    },\n    player2: {\n      type: Object\n    },\n    user: {\n      type: Object\n    },\n    opponent: {\n      type: Object\n    }\n  },\n  data: function data() {\n    return {\n      usrMsg: [],\n      usrMsgs: [],\n      baseUrl: \"/\"\n    };\n  },\n  components: {\n    'blue-player-user-message': _BluePlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    'red-player-user-message': _RedPlayerUserMessage_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    'blue-player-opponent-message': _BluePlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    'red-player-opponent-message': _RedPlayerOpponentMessage_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    'new-message': _NewMessage_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  methods: {\n    scrollToEnd: function scrollToEnd() {\n      var allMessages = this.$el.querySelector(\"#all-messages\");\n      allMessages.scrollTop = allMessages.scrollHeight;\n    },\n    listenForMessages: function listenForMessages() {\n      var usrMsgs = this.usrMsgs;\n      var usrMsg = this.usrMsg;\n      var scrollToEnd = this.scrollToEnd;\n      var url = window.location.href;\n      var room = url.split('game/').pop();\n      var $http = this.$http;\n      socket.on('chat', function (data) {\n        usrMsg = data.msg.slice(0, -1);\n        var usr = data.usr;\n        var moves = \" Moves So Far: \";\n\n        if (usrMsg === \"/printmoves\") {\n          console.log(\"IN USRMSG\");\n          var id = url.split('game/').pop();\n          $http.post(\"newgame/requestmoves\", {\n            id: id\n          }).then(function (response) {\n            moves += response.body.moves;\n          }, function (error) {\n            console.log(error);\n          });\n          userMsgs.push(moves);\n        }\n\n        if (usrMsg[0] !== \"/\") {\n          usrMsgs.push([usrMsg, usr]);\n          scrollToEnd();\n          console.log(\"IN ROOM \" + room + \" DATA: \" + usrMsg + usr);\n        }\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.listenForMessages();\n  },\n  watch: {\n    usrMsgs: {\n      handler: function handler() {\n        this.scrollToEnd();\n      },\n      deep: true\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL2dhbWUvY2hhdC9HYW1lQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0dhbWVDaGF0LnZ1ZT9iNTdmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6NyU7YmFja2dyb3VuZC1jb2xvcjojN2YwMDAwO2NvbG9yOiNGRkY7ZGlzcGxheTpmbGV4XCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWxsLW1lc3NhZ2VzXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKHVzck1zZywgaW5kZXgpIGluIHVzck1zZ3NcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c3JNc2dbMV0gIT09IHVzZXIubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cmVkLXBsYXllci1vcHBvbmVudC1tZXNzYWdlIHYtaWY9XCJvcHBvbmVudC5jb2xvciA9PT0gJ3JlZCdcIiA6dXNyTXNnPVwidXNyTXNnWzBdXCIgOm9wcG9uZW50PVwib3Bwb25lbnRcIj48L3JlZC1wbGF5ZXItb3Bwb25lbnQtbWVzc2FnZT5cbiAgICAgICAgICAgICAgICAgICAgPGJsdWUtcGxheWVyLW9wcG9uZW50LW1lc3NhZ2Ugdi1pZj1cIm9wcG9uZW50LmNvbG9yID09PSAnYmx1ZSdcIiA6dXNyTXNnPVwidXNyTXNnWzBdXCIgOm9wcG9uZW50PVwib3Bwb25lbnRcIj48L2JsdWUtcGxheWVyLW9wcG9uZW50LW1lc3NhZ2U+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInVzck1zZ1sxXSA9PT0gdXNlci5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxibHVlLXBsYXllci11c2VyLW1lc3NhZ2Ugdi1pZj1cIm9wcG9uZW50LmNvbG9yID09PSAncmVkJ1wiIDp1c3JNc2c9XCJ1c3JNc2dbMF1cIiA6dXNlcj1cInVzZXJcIj48L2JsdWUtcGxheWVyLXVzZXItbWVzc2FnZT4gIFxuICAgICAgICAgICAgICAgICAgICA8cmVkLXBsYXllci11c2VyLW1lc3NhZ2Ugdi1pZj1cIm9wcG9uZW50LmNvbG9yID09PSAnYmx1ZSdcIiA6dXNyTXNnPVwidXNyTXNnWzBdXCIgOnVzZXI9XCJ1c2VyXCI+PC9yZWQtcGxheWVyLXVzZXItbWVzc2FnZT4gIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibmV3LW1lc3NhZ2UtYm94XCI+XG4gICAgICAgICAgICA8bmV3LW1lc3NhZ2UgaWQ9XCJuZXctbWVzc2FnZVwiIDp1c2VyPVwidXNlclwiPjwvbmV3LW1lc3NhZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkPVwiYmFzZVwiIHN0eWxlPVwiaGVpZ2h0OjclO2JhY2tncm91bmQ6IzM0NTM3YztwYWRkaW5nLXRvcDo3cHhcIj5cbiAgICAgICAgICAgIDxoMyBzdHlsZT1cIm1hcmdpbjowIDAgMCAwO2NvbG9yOiNGRkZcIj4gQ0hBVDwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4vL1RPRE86IEZpeCAtIEdhbWVDaGF0IGNvbXBvbmVudCBkb2VzIG5vdCBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbSBvbiBuZXcgbWVzc2FnZVxuXG5pbXBvcnQgQmx1ZVBsYXllclVzZXJNZXNzYWdlIGZyb20gJy4vQmx1ZVBsYXllclVzZXJNZXNzYWdlLnZ1ZSc7XG5pbXBvcnQgUmVkUGxheWVyVXNlck1lc3NhZ2UgZnJvbSAnLi9SZWRQbGF5ZXJVc2VyTWVzc2FnZS52dWUnO1xuaW1wb3J0IEJsdWVQbGF5ZXJPcHBvbmVudE1lc3NhZ2UgZnJvbSAnLi9CbHVlUGxheWVyT3Bwb25lbnRNZXNzYWdlLnZ1ZSc7XG5pbXBvcnQgUmVkUGxheWVyT3Bwb25lbnRNZXNzYWdlIGZyb20gJy4vUmVkUGxheWVyT3Bwb25lbnRNZXNzYWdlLnZ1ZSc7XG5pbXBvcnQgTmV3TWVzc2FnZSBmcm9tICcuL05ld01lc3NhZ2UudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHBsYXllcjE6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgICBwbGF5ZXIyOiB7dHlwZTogT2JqZWN0fSxcbiAgICAgICAgdXNlcjoge3R5cGU6IE9iamVjdH0sXG4gICAgICAgIG9wcG9uZW50OiB7dHlwZTogT2JqZWN0fSxcbiAgICB9LFxuICAgIGRhdGEoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzck1zZzogW10sXG4gICAgICAgICAgICB1c3JNc2dzOiBbXSxcbiAgICAgICAgICAgIGJhc2VVcmw6IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ2JsdWUtcGxheWVyLXVzZXItbWVzc2FnZSc6IEJsdWVQbGF5ZXJVc2VyTWVzc2FnZSxcbiAgICAgICAgJ3JlZC1wbGF5ZXItdXNlci1tZXNzYWdlJzogUmVkUGxheWVyVXNlck1lc3NhZ2UsXG4gICAgICAgICdibHVlLXBsYXllci1vcHBvbmVudC1tZXNzYWdlJzogQmx1ZVBsYXllck9wcG9uZW50TWVzc2FnZSxcbiAgICAgICAgJ3JlZC1wbGF5ZXItb3Bwb25lbnQtbWVzc2FnZSc6IFJlZFBsYXllck9wcG9uZW50TWVzc2FnZSxcbiAgICAgICAgJ25ldy1tZXNzYWdlJzogTmV3TWVzc2FnZVxuICAgIH0sIG1ldGhvZHM6IHtcbiAgICAgICAgc2Nyb2xsVG9FbmQoKSB7XG4gICAgICAgICAgICBsZXQgYWxsTWVzc2FnZXMgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1tZXNzYWdlc1wiKTtcbiAgICAgICAgICAgIGFsbE1lc3NhZ2VzLnNjcm9sbFRvcCA9IGFsbE1lc3NhZ2VzLnNjcm9sbEhlaWdodDtcbiAgICAgICAgfSxcbiAgICAgICAgbGlzdGVuRm9yTWVzc2FnZXMoKSB7XG4gICAgICAgICAgICBsZXQgdXNyTXNncyA9IHRoaXMudXNyTXNncztcbiAgICAgICAgICAgIGxldCB1c3JNc2cgPSB0aGlzLnVzck1zZztcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb0VuZCA9IHRoaXMuc2Nyb2xsVG9FbmQ7XG4gICAgICAgICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBsZXQgcm9vbSA9IHVybC5zcGxpdCgnZ2FtZS8nKS5wb3AoKTtcbiAgICAgICAgICAgIGxldCAkaHR0cCA9IHRoaXMuJGh0dHA7XG5cbiAgICAgICAgICAgIHNvY2tldC5vbignY2hhdCcsIGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgIHVzck1zZyA9IGRhdGEubXNnLnNsaWNlKDAsIC0xKVxuICAgICAgICAgICAgICAgIGxldCB1c3IgPSBkYXRhLnVzclxuICAgICAgICAgICAgICAgIGxldCBtb3ZlcyA9IFwiIE1vdmVzIFNvIEZhcjogXCI7XG4gICAgICAgICAgICAgICAgaWYgKHVzck1zZyA9PT0gXCIvcHJpbnRtb3Zlc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTiBVU1JNU0dcIilcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdXJsLnNwbGl0KCdnYW1lLycpLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KGBuZXdnYW1lL3JlcXVlc3Rtb3Zlc2AsIHtpZDogaWR9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlcyArPSByZXNwb25zZS5ib2R5Lm1vdmVzO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB1c2VyTXNncy5wdXNoKG1vdmVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXNyTXNnWzBdICE9PSBcIi9cIikge1xuICAgICAgICAgICAgICAgICAgICB1c3JNc2dzLnB1c2goW3Vzck1zZyx1c3JdKVxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb0VuZCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOIFJPT00gXCIgKyByb29tICsgXCIgREFUQTogXCIgKyB1c3JNc2cgKyB1c3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubGlzdGVuRm9yTWVzc2FnZXMoKTtcbiAgICB9LFxuICAgIHdhdGNoOntcbiAgICAgICAgdXNyTXNnczoge1xuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0VuZCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZD5cbiNjb250YWluZXIge1xuICBwYWRkaW5nOiAwIDA7XG5cbn1cbiNhbGwtbWVzc2FnZXMge1xuICAgIGhlaWdodDozMTBweDtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICBvdmVyZmxvdy15OmF1dG87XG59XG4jbmV3LW1lc3NhZ2UtYm94IHtcbiAgICBoZWlnaHQ6MTA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA3MmEwO1xufVxuI25ldy1tZXNzYWdlIHtcbiAgICBoZWlnaHQ6OTBweDtcbn1cbmgxIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDBweCkgYW5kIChtaW4td2lkdGg6IDY1MHB4KXtcbiAgICAjYWxsLW1lc3NhZ2VzIHtcbiAgICAgICAgaGVpZ2h0OjE0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4taGVpZ2h0OiA1NDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgI2FsbC1tZXNzYWdlcyB7XG4gICAgICAgIGhlaWdodDoyNjZweDtcbiAgICB9XG4gICAgI2Jhc2Uge1xuICAgICAgICBwYWRkaW5nLXRvcDowcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjVweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgI2FsbC1tZXNzYWdlcyB7XG4gICAgICAgIGhlaWdodDozODJweDtcbiAgICB9XG59XG5cbjwvc3R5bGU+XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQXJDQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBaEVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/chat/GameChat.vue?vue&type=script&lang=js&\n");

/***/ })

})