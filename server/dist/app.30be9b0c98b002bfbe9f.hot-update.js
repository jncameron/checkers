webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/BluePiece.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/game-container/game/BluePiece.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ \"./node_modules/core-js/modules/es6.regexp.split.js\");\n/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    transform: {\n      type: String\n    },\n    turn: {\n      type: String\n    },\n    crownedBlue: {\n      type: Boolean\n    },\n    user: {\n      type: Object\n    },\n    player: {\n      type: Object\n    }\n  },\n  data: function data() {\n    return {\n      posX: 0,\n      posY: 0,\n      posXY: []\n    };\n  },\n  methods: {\n    selectBlue: function selectBlue() {\n      if (this.player.name === this.user.name || this.player.name === 'Player 2') {\n        this.position = this.transform;\n        this.posX = this.position.split('(').pop().split(',').shift() - 30;\n        this.posY = this.position.split(',').pop().split(')').shift() - 30;\n        this.posXY = [this.posX, this.posY];\n        this.$emit('blueSelected', this.posXY);\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2dhbWUtY29udGFpbmVyL2dhbWUvQmx1ZVBpZWNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQmx1ZVBpZWNlLnZ1ZT82M2NhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGcgaWQ9XCJibGFjay1saW5rXCIgOnRyYW5zZm9ybT1cInRyYW5zZm9ybVwiIHN0cm9rZT1cIiMwMDAwMDBcIiBzdHJva2Utd2lkdGg9XCIzXCI+XG4gICAgPGcgaWQ9XCJibGFja1wiPlxuICAgICAgPGVsbGlwc2UgY2xhc3M9XCJzbGlkZS1pblwiIGlkPVwiT3ZhbFwiIGZpbGw9XCIjMDAwMDAwXCIgY3g9XCIxOS45MzQzMzRcIiBjeT1cIjIwLjU0MjgyODdcIiByeD1cIjM1XCIgcnk9XCIzMFwiPjwvZWxsaXBzZT5cbiAgICAgIDxlbGxpcHNlIGlkPVwiT3ZhbFwiIGZpbGw9XCJ1cmwoI2JsdWVHcmFkaWVudClcIiBjeD1cIjE5LjkzNDMzNFwiIGN5PVwiMTYuMTg1MjU5XCIgcng9XCIzNVwiIHJ5PVwiMjlcIj48L2VsbGlwc2U+XG4gICAgICA8ZWxsaXBzZSB2LWlmPVwidHVybiA9PT0gJ2JsdWUnXCIgdi1vbjpjbGljaz1cInNlbGVjdEJsdWUoKVwiIGlkPVwiT3ZhbFwiIGZpbGw9XCJ1cmwoI2JsdWVHcmFkaWVudClcIiBjeD1cIjE5LjkzNDMzNFwiIGN5PVwiMTYuMTg1MjU5XCIgcng9XCIzNVwiIHJ5PVwiMjlcIj48L2VsbGlwc2U+ICAgICAgICAgICBcbiAgICAgIDxpbWFnZSB2LWlmPVwiY3Jvd25lZEJsdWUgJiYgdHVybj09PSdibHVlJ1wiIHYtb246Y2xpY2s9XCJzZWxlY3RCbHVlKClcIiBjbGFzcz1cImV4cGFuZE9wZW5cIiB4PVwiLTZcIiB5PVwiLTEwXCIgd2lkdGg9XCI1M1wiIGhlaWdodD1cIjUzXCIgeGxpbms6aHJlZj1cImdvbGQtY3Jvd24uc3ZnXCIgLz5cbiAgICAgIDxpbWFnZSB2LWVsc2UtaWY9XCJjcm93bmVkQmx1ZVwiIGNsYXNzPVwiZXhwYW5kT3BlblwiIHg9XCItNlwiIHk9XCItMTBcIiB3aWR0aD1cIjUzXCIgaGVpZ2h0PVwiNTNcIiB4bGluazpocmVmPVwiZ29sZC1jcm93bi5zdmdcIiAvPlxuXHRcdDwvZz5cbiAgPC9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuXHRcdHRyYW5zZm9ybToge3R5cGU6IFN0cmluZ30sXG5cdFx0dHVybjoge3R5cGU6IFN0cmluZ30sXG4gICAgICAgIGNyb3duZWRCbHVlOiB7dHlwZTogQm9vbGVhbn0sXG4gICAgICAgIHVzZXI6IHt0eXBlOiBPYmplY3R9LFxuICAgICAgICBwbGF5ZXI6IHt0eXBlOiBPYmplY3R9LFxuICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NYOiAwLFxuICAgICAgICAgICAgcG9zWTogMCxcbiAgICAgICAgICAgIHBvc1hZOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiBcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNlbGVjdEJsdWUoKSB7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllci5uYW1lID09PSB0aGlzLnVzZXIubmFtZSB8fCB0aGlzLnBsYXllci5uYW1lID09PSAnUGxheWVyIDInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zWCA9IHRoaXMucG9zaXRpb24uc3BsaXQoJygnKS5wb3AoKS5zcGxpdCgnLCcpLnNoaWZ0KCkgLSAzMDtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc1kgPSB0aGlzLnBvc2l0aW9uLnNwbGl0KCcsJykucG9wKCkuc3BsaXQoJyknKS5zaGlmdCgpIC0gMzA7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NYWSA9IFt0aGlzLnBvc1gsIHRoaXMucG9zWV07XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1ZVNlbGVjdGVkJywgdGhpcy5wb3NYWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmV4cGFuZE9wZW57XG5cdGFuaW1hdGlvbi1uYW1lOiBleHBhbmRPcGVuO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBleHBhbmRPcGVuO1x0XG5cblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1x0XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xuXG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1x0XG5cdC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHRcblxuXHR2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHRcbn1cblxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFoQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/game-container/game/BluePiece.vue?vue&type=script&lang=js&\n");

/***/ })

})