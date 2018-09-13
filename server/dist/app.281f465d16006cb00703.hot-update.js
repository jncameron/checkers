webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'vue-line-chart',\n  data: function data() {\n    return {\n      data: [99, 71, 78, 25, 36, 92],\n      line: '',\n      createdGames: []\n    };\n  },\n  mounted: function mounted() {\n    this.calculatePath();\n    this.getStats();\n  },\n  methods: {\n    getScales: function getScales() {\n      var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleTime\"]().range([0, 430]);\n      var y = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().range([210, 0]);\n      d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"]().scale(x);\n      d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"]().scale(y);\n      x.domain(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"](this.data, function (d, i) {\n        return i;\n      }));\n      y.domain([0, d3__WEBPACK_IMPORTED_MODULE_3__[\"max\"](this.data, function (d) {\n        return d;\n      })]);\n      return {\n        x: x,\n        y: y\n      };\n    },\n    calculatePath: function calculatePath() {\n      var scale = this.getScales();\n      var path = d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"]().x(function (d, i) {\n        return scale.x(i);\n      }).y(function (d) {\n        return scale.y(d);\n      });\n      this.line = path(this.data);\n    },\n    getStats: function getStats() {\n      var createdGames = this.createdGames;\n      this.$http.get('/newgame/stats').then(function (response) {\n        createdGames.push(response.body.games.length);\n        console.log(\"Created Games \" + JSON.stringify(createdGames));\n      }, function (error) {\n        console.log(error);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9ubGluZS11c2Vyc1wiPlxyXG4gICAgICAgICAgICA8aDM+T25saW5lIFVzZXJzPC9oMz5cclxuICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjUwMFwiIGhlaWdodD1cIjI3MFwiPlxyXG4gICAgICAgICAgICAgICAgPGcgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggOmQ9XCJsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAndnVlLWxpbmUtY2hhcnQnLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGE6IFs5OSwgNzEsIDc4LCAyNSwgMzYsIDkyXSxcclxuICAgICAgICBsaW5lOiAnJyxcclxuICAgICAgICBjcmVhdGVkR2FtZXM6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVBhdGgoKTtcclxuICAgIHRoaXMuZ2V0U3RhdHMoKTtcclxuICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldFNjYWxlcygpIHtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCA0MzBdKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoWzIxMCwgMF0pO1xyXG4gICAgICAgICAgICBkMy5heGlzTGVmdCgpLnNjYWxlKHgpO1xyXG4gICAgICAgICAgICBkMy5heGlzQm90dG9tKCkuc2NhbGUoeSk7XHJcbiAgICAgICAgICAgIHguZG9tYWluKGQzLmV4dGVudCh0aGlzLmRhdGEsIChkLCBpKSA9PiBpKSk7XHJcbiAgICAgICAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgodGhpcy5kYXRhLCBkID0+IGQpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHgsIHkgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FsY3VsYXRlUGF0aCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gZDMubGluZSgpXHJcbiAgICAgICAgICAgIC54KChkLCBpKSA9PiBzY2FsZS54KGkpKVxyXG4gICAgICAgICAgICAueShkID0+IHNjYWxlLnkoZCkpO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmUgPSBwYXRoKHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0cygpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0ZWRHYW1lcyA9IHRoaXMuY3JlYXRlZEdhbWVzO1xyXG4gICAgICAgICAgICB0aGlzLiRodHRwLmdldCgnL25ld2dhbWUvc3RhdHMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkR2FtZXMucHVzaChyZXNwb25zZS5ib2R5LmdhbWVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlZCBHYW1lcyBcIiArIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRHYW1lcykpO1xyXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbnN2ZyB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbn1cclxucGF0aCB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiAjNzZCRjhBO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBYkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})