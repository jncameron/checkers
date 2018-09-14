webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'vue-line-chart',\n  data: function data() {\n    return {\n      data: [{\n        signups: 25,\n        time: 1\n      }, {\n        signups: 150,\n        time: 2\n      }, {\n        signups: 43,\n        time: 3\n      }, {\n        signups: 87,\n        time: 4\n      }, {\n        signups: 12,\n        time: 5\n      }, {\n        signups: 14,\n        time: 6\n      }, {\n        signups: 138,\n        time: 7\n      }],\n      line: '',\n      createdGames: []\n    };\n  },\n  mounted: function mounted() {\n    this.getSignups();\n    this.getSignins();\n  },\n  methods: {\n    getSignins: function getSignins() {\n      var margin = 30;\n      var width = 120;\n      var height = 300;\n      var data = [4, 8, 15, 16, 23, 42]; // document.getElementById(\"data\").innerHTML = data;\n\n      var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleOrdinal\"]().domain([0, 1, 2, 3, 4, 5]).range([0, width]);\n      var y = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().domain([0, 42]).range([height, 0]);\n      var chart = d3__WEBPACK_IMPORTED_MODULE_3__[\"select\"](\".chart\");\n      chart.attr(\"width\", width + 2 * margin).attr(\"height\", height + 2 * margin).append(\"g\").attr(\"transform\", \"translate(\" + margin + \",\" + margin + \")\").selectAll(\"rect\").data(data).enter().append(\"rect\").attr(\"width\", 19).attr(\"height\", function (d) {\n        return height - y(d);\n      }).attr(\"x\", function (d, i) {\n        return x(i);\n      }).attr(\"y\", function (d) {\n        return y(d);\n      });\n      var xAxis = d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"]().scale(x).orient(\"bottom\").ticks(1);\n      var yAxis = d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"]().scale(y).orient(\"left\").ticks(5);\n      chart.append(\"g\").attr(\"transform\", \"translate(\" + margin + \",\" + (height + margin) + \")\").attr(\"class\", \"axis\").call(xAxis);\n      chart.append(\"g\").attr(\"transform\", \"translate(\" + margin + \",\" + margin + \")\").attr(\"class\", \"axis\").call(yAxis);\n    },\n    getSignups: function getSignups() {\n      var width = 400;\n      var height = 200;\n      var barPadding = 10;\n      var y = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().domain([0, 180]).range([height, 0]);\n      var yScale = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().domain(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"](this.data, function (d) {\n        return d.signups;\n      })).range([height, 0]);\n      var xScale = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleOrdinal\"]().domain(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"](this.data, function (d) {\n        return d.time;\n      })).range([0, width]);\n      var xAxis = d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"](xScale).ticks(7); //d3.select(\"signup-chart\")\n\n      d3__WEBPACK_IMPORTED_MODULE_3__[\"select\"](\"svg\").attr(\"height\", height + 50).append(\"g\").attr(\"transform\", \"translate(30,\" + (height + 30) + \")\").call(xAxis);\n      d3__WEBPACK_IMPORTED_MODULE_3__[\"select\"](\"svg\").selectAll(\"rect\").data(this.data).enter().append(\"rect\").attr(\"width\", 40).attr(\"height\", function (d) {\n        return height - y(d);\n      }).attr(\"y\", function (d) {\n        return height - d.signups;\n      }).attr(\"x\", function (d, i) {\n        return (50 + barPadding) * i;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiY2hvb3NlLWdhbWVcIj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHVzZXItc2lnbnVwc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCIgaWQ9XCJjaGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VXNlciBTaWdudXBzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggOmQ9XCJsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdXNlci1zaWduaW5zXCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlVzZXIgU2lnbmluczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIyNTBcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIDpkPVwibGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgZ2FtZXMtcGxheWVkXCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyA+R2FtZXMgUGxheWVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggOmQ9XCJsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbWVzc2FnZXMtc2VudFwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2hhdCBNZXNzYWdlcyBTZW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjI1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggOmQ9XCJsaW5lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90cmFuc2l0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ3Z1ZS1saW5lLWNoYXJ0JyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhOiBbe3NpZ251cHM6IDI1LCB0aW1lOiAxfSwgXHJcbiAgICAgICAgICAgICAgICB7c2lnbnVwczogMTUwLCB0aW1lOiAyfSxcclxuICAgICAgICAgICAgICAgIHtzaWdudXBzOiA0MywgdGltZTogM30sXHJcbiAgICAgICAgICAgICAgICB7c2lnbnVwczogODcsIHRpbWU6IDR9LFxyXG4gICAgICAgICAgICAgICAge3NpZ251cHM6IDEyLCB0aW1lOiA1fSxcclxuICAgICAgICAgICAgICAgIHtzaWdudXBzOiAxNCwgdGltZTogNn0sXHJcbiAgICAgICAgICAgICAgICB7c2lnbnVwczogMTM4LCB0aW1lOiA3fV0sXHJcbiAgICAgICAgbGluZTogJycsXHJcbiAgICAgICAgY3JlYXRlZEdhbWVzOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICBtb3VudGVkKCkge1xyXG5cclxuICAgIHRoaXMuZ2V0U2lnbnVwcygpO1xyXG4gICAgdGhpcy5nZXRTaWduaW5zKCk7XHJcbiAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICAgICAgZ2V0U2lnbmlucygpIHtcclxuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IDMwO1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSAxMjA7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSAzMDA7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFs0LDgsMTUsMTYsMjMsNDJdO1xyXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFcIikuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciB4ID0gZDMuc2NhbGVPcmRpbmFsKClcclxuICAgICAgICAgICAgICAgIC5kb21haW4oWzAsMSwyLDMsNCw1XSlcclxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCx3aWR0aF0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCw0Ml0pXHJcbiAgICAgICAgICAgICAgICAucmFuZ2UoW2hlaWdodCwwXSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY2hhcnQgPSBkMy5zZWxlY3QoXCIuY2hhcnRcIik7XHJcblxyXG4gICAgICAgICAgICBjaGFydC5hdHRyKFwid2lkdGhcIix3aWR0aCArIDIqbWFyZ2luKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIixoZWlnaHQgKyAyKm1hcmdpbilcclxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIiArIG1hcmdpbiArIFwiLFwiICsgbWFyZ2luICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKFwicmVjdFwiKVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwxOSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsZnVuY3Rpb24oZCkgeyByZXR1cm4gaGVpZ2h0IC0geShkKTsgfSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLGZ1bmN0aW9uKGQsaSkgeyByZXR1cm4geChpKTsgfSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXHJcbiAgICAgICAgICAgICAgICAuc2NhbGUoeClcclxuICAgICAgICAgICAgICAgIC5vcmllbnQoXCJib3R0b21cIilcclxuICAgICAgICAgICAgICAgIC50aWNrcygxKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcclxuICAgICAgICAgICAgICAgIC5zY2FsZSh5KVxyXG4gICAgICAgICAgICAgICAgLm9yaWVudChcImxlZnRcIilcclxuICAgICAgICAgICAgICAgIC50aWNrcyg1KTtcclxuXHJcbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luICsgXCIsXCIgKyAoaGVpZ2h0K21hcmdpbikgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIixcImF4aXNcIilcclxuICAgICAgICAgICAgICAgIC5jYWxsKHhBeGlzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjaGFydC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbiArIFwiLFwiICsgbWFyZ2luICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsXCJheGlzXCIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbCh5QXhpcyk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0U2lnbnVwcygpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IDQwMDtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IDIwMDtcclxuICAgICAgICAgICAgbGV0IGJhclBhZGRpbmcgPSAxMDtcclxuXHJcbiAgICAgICAgICAgIGxldCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCwxODBdKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtoZWlnaHQsMF0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcclxuICAgICAgICAgICAgICAgIC5kb21haW4oZDMuZXh0ZW50KHRoaXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICwgZCA9PiBkLnNpZ251cHMpKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKVxyXG5cclxuICAgICAgICAgICAgbGV0IHhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXHJcbiAgICAgICAgICAgICAgICAuZG9tYWluKGQzLmV4dGVudCh0aGlzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAsIGQgPT4gZC50aW1lKSlcclxuICAgICAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4U2NhbGUpLnRpY2tzKDcpXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAvL2QzLnNlbGVjdChcInNpZ251cC1jaGFydFwiKVxyXG5cclxuICAgICAgICAgICAgZDMuc2VsZWN0KFwic3ZnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyA1MClcclxuICAgICAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDMwLFwiICsgKGhlaWdodCArIDMwKSsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKHhBeGlzKVxyXG5cclxuICAgICAgICAgICAgZDMuc2VsZWN0KFwic3ZnXCIpXHJcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoXCJyZWN0XCIpXHJcbiAgICAgICAgICAgIC5kYXRhKHRoaXMuZGF0YSlcclxuICAgICAgICAgICAgLmVudGVyKClcclxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgNDApXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gaGVpZ2h0IC0gKHkoZCkpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiAoaGVpZ2h0IC0gZC5zaWdudXBzKSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCAoZCxpKSA9PiAoNTAgKyBiYXJQYWRkaW5nKSAqIGkpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuc3ZnIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxufVxyXG5wYXRoIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6ICM3NkJGOEE7XHJcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTY7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgXHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7ICovXHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZTtcclxufVxyXG5cclxuLm1vZGFsLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6ODAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZScsIGN1cnNpdmU7XHJcblxyXG59XHJcblxyXG4uY29sLW1kLTYge1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbn1cclxuXHJcbi5jb2wtbWQtMTIge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbmgye1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnJlZy1idXR0b24ge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIGJhY2tncm91bmQ6ICNCNzFDMUM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2YwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnJlZy1idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmMDAwMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbi5yZWctYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi5vcHRpb246YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4ubWVzc2FnZXMtc2VudCxcclxuLnVzZXItc2lnbnVwcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjcxQzFDO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgYm9yZGVyOiAjMDAwIHNvbGlkIDNweDtcclxuXHJcbn1cclxuXHJcblxyXG4udXNlci1zaWduaW5zLFxyXG4uZ2FtZXMtcGxheWVkIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDcyYTA7XHJcbiAgICBib3JkZXI6ICMwMDAgc29saWQgM3B4O1xyXG59XHJcbi5tZXNzYWdlcy1zZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNzJhMDtcclxufVxyXG5cclxuLnBsYXllci1ib3gge1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcblxyXG59XHJcbi5wbGF5LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgYmFja2dyb3VuZDogIzQwNzJhMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDUzN2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZSc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcblxyXG4ucGxheS1idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY29udGludWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbn1cclxuI2J1dHRvbiB7XHJcblxyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtZW50ZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1sZWF2ZS1hY3RpdmUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1lbnRlciAubW9kYWwtY29udGFpbmVyLFxyXG4ubW9kYWwtbGVhdmUtYWN0aXZlIC5tb2RhbC1jb250YWluZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAvKiB0aW50IGltYWdlICovXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuOCksIHJnYmEoMjU1LDI1NSwyNTUsMC44KSksXHJcbiAgICAgICAgICAgICAgICAgICAgLyogY2hlY2tlcmVkIGVmZmVjdCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg2NCwxMTQsMTYwKSA1MCUsICNkM2QzZDMgNTAlKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDY0LDExNCwxNjApIDUwJSwgI2QzZDNkMyA1MCUpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWwsIGRpZmZlcmVuY2UsIG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzIwcHggMzIwcHg7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAuMzMpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuYmxhbmtzIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIGhlaWdodDo1MCVcclxuICAgIH1cclxuICAgIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgIH1cclxuICAgIC5jb2wtbWQtMTIge1xyXG4gICAgICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC02IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnVzZXItc2lnbmlucyxcclxuICAgIC5nYW1lcy1wbGF5ZWQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAudXNlci1zaWdudXBzLFxyXG4gICAgLm1lc3NhZ2VzLXNlbnQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuPC9zdHlsZT5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFFQTtBQVFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFLQTtBQUtBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUFBO0FBR0E7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUtBO0FBTUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTlGQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})