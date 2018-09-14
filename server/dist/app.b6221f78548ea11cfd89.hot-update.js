webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'vue-line-chart',\n  data: function data() {\n    return {\n      data: [{\n        signups: 25,\n        time: 1\n      }, {\n        signups: 6,\n        time: 2\n      }, {\n        signups: 43,\n        time: 3\n      }, {\n        signups: 87,\n        time: 4\n      }, {\n        signups: 12,\n        time: 5\n      }, {\n        signups: 14,\n        time: 6\n      }, {\n        signups: 32,\n        time: 7\n      }],\n      line: '',\n      createdGames: []\n    };\n  },\n  mounted: function mounted() {\n    this.getSignups();\n    this.getSignins();\n    this.getGamesPlayed();\n  },\n  methods: {\n    getSignins: function getSignins() {\n      var margin = {\n        top: 20,\n        right: 20,\n        bottom: 30,\n        left: 40\n      },\n          width = 350 - margin.left - margin.right,\n          height = 250 - margin.top - margin.bottom; // set the ranges\n\n      var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleBand\"]().range([0, width]).padding(0.1);\n      var y = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().range([height, 0]); // append a 'group' element to 'svg'\n      // moves the 'group' element to the top left margin\n\n      var svg = d3__WEBPACK_IMPORTED_MODULE_3__[\"select\"](\"#signin-svg\").attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // get the data\n\n      var data = this.data; // Scale the range of the data in the domains\n\n      x.domain(data.map(function (d) {\n        return d.time;\n      }));\n      y.domain([0, d3__WEBPACK_IMPORTED_MODULE_3__[\"max\"](data, function (d) {\n        return d.signups;\n      })]); // append the rectangles for the bar chart\n\n      svg.selectAll(\".bar\").data(data).enter().append(\"rect\").attr(\"class\", \"bar\").style(\"fill\", \"#B71C1C\").attr(\"x\", function (d) {\n        return x(d.time);\n      }).attr(\"width\", x.bandwidth()).attr(\"y\", function (d) {\n        return y(d.signups);\n      }).attr(\"height\", function (d) {\n        return height - y(d.signups);\n      }); // add the x Axis\n\n      svg.append(\"g\").attr(\"transform\", \"translate(0,\" + height + \")\").call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"](x)); // add the y Axis\n\n      svg.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"](y));\n    },\n    getSignups: function getSignups() {\n      var margin = {\n        top: 20,\n        right: 20,\n        bottom: 30,\n        left: 40\n      },\n          width = 350 - margin.left - margin.right,\n          height = 250 - margin.top - margin.bottom; // set the ranges\n\n      var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleBand\"]().range([0, width]).padding(0.1);\n      var y = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().range([height, 0]); // append a 'group' element to 'svg'\n      // moves the 'group' element to the top left margin\n\n      var svg = d3__WEBPACK_IMPORTED_MODULE_3__[\"select\"](\"#signup-svg\").attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // get the data\n\n      var data = this.data; // Scale the range of the data in the domains\n\n      x.domain(data.map(function (d) {\n        return d.time;\n      }));\n      y.domain([0, d3__WEBPACK_IMPORTED_MODULE_3__[\"max\"](data, function (d) {\n        return d.signups;\n      })]); // append the rectangles for the bar chart\n\n      svg.selectAll(\".bar\").data(data).enter().append(\"rect\").attr(\"class\", \"bar\").style(\"fill\", \"#000\").attr(\"x\", function (d) {\n        return x(d.time);\n      }).attr(\"width\", x.bandwidth()).attr(\"y\", function (d) {\n        return y(d.signups);\n      }).attr(\"height\", function (d) {\n        return height - y(d.signups);\n      }); // add the x Axis\n\n      svg.append(\"g\").attr(\"transform\", \"translate(0,\" + height + \")\").call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"](x)); // add the y Axis\n\n      svg.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"](y));\n    },\n    getGamesPlayed: function getGamesPlayed() {\n      var margin = {\n        top: 20,\n        right: 20,\n        bottom: 30,\n        left: 50\n      },\n          width = 350 - margin.left - margin.right,\n          height = 250 - margin.top - margin.bottom; // parse the date / time\n\n      var parseTime = d3__WEBPACK_IMPORTED_MODULE_3__[\"timeParse\"](\"%d-%b-%y\"); // set the ranges\n\n      var x = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().range([0, width]);\n      var y = d3__WEBPACK_IMPORTED_MODULE_3__[\"scaleLinear\"]().range([height, 0]); // define the line\n\n      var valueline = d3__WEBPACK_IMPORTED_MODULE_3__[\"line\"]().x(function (d) {\n        return x(d.time);\n      }).y(function (d) {\n        return y(d.signups);\n      }); // append the svg obgect to the body of the page\n      // appends a 'group' element to 'svg'\n      // moves the 'group' element to the top left margin\n\n      var svg = d3__WEBPACK_IMPORTED_MODULE_3__[\"select\"](\"#games-played-svg\").attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // .style(\"stroke\", \"#4072a0\")\n      // Get the data\n\n      var data = this.data; // format the data\n      // Scale the range of the data\n\n      x.domain(d3__WEBPACK_IMPORTED_MODULE_3__[\"extent\"](data, function (d) {\n        return d.time;\n      }));\n      y.domain([0, d3__WEBPACK_IMPORTED_MODULE_3__[\"max\"](data, function (d) {\n        return d.signups;\n      })]); // Add the valueline path.\n\n      svg.append(\"path\").data([data]).attr(\"class\", \"line\").attr(\"d\", valueline); // Add the X Axis\n\n      svg.append(\"g\").attr(\"transform\", \"translate(0,\" + height + \")\").call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisBottom\"](x)); // Add the Y Axis\n\n      svg.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_3__[\"axisLeft\"](y));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwiY2hvb3NlLWdhbWVcIj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHVzZXItc2lnbnVwc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCIgaWQ9XCJzaWdudXAtY2hhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlVzZXIgU2lnbnVwczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJzaWdudXAtc3ZnXCI+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdXNlci1zaWduaW5zXCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lnbmluLWNoYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Vc2VyIFNpZ25pbnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwic2lnbmluLXN2Z1wiPjwvc3ZnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGdhbWVzLXBsYXllZFwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgPkdhbWVzIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJnYW1lcy1wbGF5ZWQtc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIG1lc3NhZ2VzLXNlbnRcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkNoYXQgTWVzc2FnZXMgU2VudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIyNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIDpkPVwibGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICd2dWUtbGluZS1jaGFydCcsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogW3tzaWdudXBzOiAyNSwgdGltZTogMX0sIFxyXG4gICAgICAgICAgICAgICAge3NpZ251cHM6IDYsIHRpbWU6IDJ9LFxyXG4gICAgICAgICAgICAgICAge3NpZ251cHM6IDQzLCB0aW1lOiAzfSxcclxuICAgICAgICAgICAgICAgIHtzaWdudXBzOiA4NywgdGltZTogNH0sXHJcbiAgICAgICAgICAgICAgICB7c2lnbnVwczogMTIsIHRpbWU6IDV9LFxyXG4gICAgICAgICAgICAgICAge3NpZ251cHM6IDE0LCB0aW1lOiA2fSxcclxuICAgICAgICAgICAgICAgIHtzaWdudXBzOiAzMiwgdGltZTogN31dLFxyXG4gICAgICAgIGxpbmU6ICcnLFxyXG4gICAgICAgIGNyZWF0ZWRHYW1lczogW10sXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuXHJcbiAgICB0aGlzLmdldFNpZ251cHMoKTtcclxuICAgIHRoaXMuZ2V0U2lnbmlucygpO1xyXG4gICAgdGhpcy5nZXRHYW1lc1BsYXllZCgpO1xyXG4gIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblxyXG4gICAgZ2V0U2lnbmlucygpIHtcclxuICAgICAgICB2YXIgbWFyZ2luID0ge3RvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNDB9LFxyXG4gICAgICAgICAgICB3aWR0aCA9IDM1MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxyXG4gICAgICAgICAgICBoZWlnaHQgPSAyNTAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSByYW5nZXNcclxuICAgICAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpXHJcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcclxuICAgICAgICAgICAgICAgIC5wYWRkaW5nKDAuMSk7XHJcbiAgICAgICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgICAgICAucmFuZ2UoW2hlaWdodCwgMF0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gYXBwZW5kIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXHJcbiAgICAgICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXHJcbiAgICAgICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcIiNzaWduaW4tc3ZnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXHJcbiAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXHJcbiAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGRhdGFcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgLy8gU2NhbGUgdGhlIHJhbmdlIG9mIHRoZSBkYXRhIGluIHRoZSBkb21haW5zXHJcbiAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50aW1lOyB9KSk7XHJcbiAgICAgICAgeS5kb21haW4oWzAsIGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNpZ251cHM7IH0pXSk7XHJcblxyXG4gICAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxyXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXHJcbiAgICAgICAgICAgIC5kYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxyXG4gICAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI0I3MUMxQ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geChkLnRpbWUpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHguYmFuZHdpZHRoKCkpXHJcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5KGQuc2lnbnVwcyk7IH0pXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGhlaWdodCAtIHkoZC5zaWdudXBzKTsgfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgeCBBeGlzXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSB5IEF4aXNcclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSk7XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2lnbnVwcygpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hcmdpbiA9IHt0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDQwfSxcclxuICAgICAgICAgICAgd2lkdGggPSAzNTAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodCxcclxuICAgICAgICAgICAgaGVpZ2h0ID0gMjUwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgcmFuZ2VzXHJcbiAgICAgICAgdmFyIHggPSBkMy5zY2FsZUJhbmQoKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXHJcbiAgICAgICAgICAgICAgICAucGFkZGluZygwLjEpO1xyXG4gICAgICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKVxyXG4gICAgICAgICAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIGFwcGVuZCBhICdncm91cCcgZWxlbWVudCB0byAnc3ZnJ1xyXG4gICAgICAgIC8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxyXG4gICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIjc2lnbnVwLXN2Z1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxyXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBkYXRhXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgICAgIC8vIFNjYWxlIHRoZSByYW5nZSBvZiB0aGUgZGF0YSBpbiB0aGUgZG9tYWluc1xyXG4gICAgICAgIHguZG9tYWluKGRhdGEubWFwKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudGltZTsgfSkpO1xyXG4gICAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5zaWdudXBzOyB9KV0pO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGhlIHJlY3RhbmdsZXMgZm9yIHRoZSBiYXIgY2hhcnRcclxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxyXG4gICAgICAgICAgICAuZGF0YShkYXRhKVxyXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJyZWN0XCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcclxuICAgICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiMwMDBcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHgoZC50aW1lKTsgfSlcclxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxyXG4gICAgICAgICAgICAuYXR0cihcInlcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geShkLnNpZ251cHMpOyB9KVxyXG4gICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQuc2lnbnVwcyk7IH0pO1xyXG5cclxuICAgICAgICAvLyBhZGQgdGhlIHggQXhpc1xyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSk7XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgeSBBeGlzXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpO1xyXG4gICAgfSxcclxuICAgIGdldEdhbWVzUGxheWVkKCkge1xyXG4gICAgICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA1MH0sXHJcbiAgICAgICAgICAgIHdpZHRoID0gMzUwIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQsXHJcbiAgICAgICAgICAgIGhlaWdodCA9IDI1MCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xyXG5cclxuICAgICAgICAvLyBwYXJzZSB0aGUgZGF0ZSAvIHRpbWVcclxuICAgICAgICB2YXIgcGFyc2VUaW1lID0gZDMudGltZVBhcnNlKFwiJWQtJWItJXlcIik7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgcmFuZ2VzXHJcbiAgICAgICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pO1xyXG4gICAgICAgIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbaGVpZ2h0LCAwXSk7XHJcblxyXG4gICAgICAgIC8vIGRlZmluZSB0aGUgbGluZVxyXG4gICAgICAgIHZhciB2YWx1ZWxpbmUgPSBkMy5saW5lKClcclxuICAgICAgICAgICAgLngoZnVuY3Rpb24oZCkgeyByZXR1cm4geChkLnRpbWUpOyB9KVxyXG4gICAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5KGQuc2lnbnVwcyk7IH0pO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdGhlIHN2ZyBvYmdlY3QgdG8gdGhlIGJvZHkgb2YgdGhlIHBhZ2VcclxuICAgICAgICAvLyBhcHBlbmRzIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXHJcbiAgICAgICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXHJcbiAgICAgICAgdmFyIHN2ZyA9IGQzLnNlbGVjdChcIiNnYW1lcy1wbGF5ZWQtc3ZnXCIpXHJcbiAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcclxuICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXHJcbiAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIixcclxuICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgIC8vIC5zdHlsZShcInN0cm9rZVwiLCBcIiM0MDcyYTBcIilcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBkYXRhXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XHJcblxyXG4gICAgICAgIC8vIGZvcm1hdCB0aGUgZGF0YVxyXG5cclxuICAgICAgICAvLyBTY2FsZSB0aGUgcmFuZ2Ugb2YgdGhlIGRhdGFcclxuICAgICAgICB4LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC50aW1lOyB9KSk7XHJcbiAgICAgICAgeS5kb21haW4oWzAsIGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnNpZ251cHM7IH0pXSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgdmFsdWVsaW5lIHBhdGguXHJcbiAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgLmRhdGEoW2RhdGFdKVxyXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxyXG4gICAgICAgICAgICAuYXR0cihcImRcIiwgdmFsdWVsaW5lKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHRoZSBYIEF4aXNcclxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGhlIFkgQXhpc1xyXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbn1cclxuXHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbnN2ZyB7XHJcbiAgICBtYXJnaW46IDI1cHg7XHJcbn1cclxucGF0aCB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiAjNzZCRjhBO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogOTk5NjtcclxuICB0b3A6IDQwcHg7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTsgKi9cclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubW9kYWwtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDo4MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJywgY3Vyc2l2ZTtcclxuXHJcbn1cclxuXHJcbi5jb2wtbWQtNiB7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxufVxyXG5cclxuLmNvbC1tZC0xMiB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucmVnLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjojRkZGO1xyXG4gICAgYmFja2dyb3VuZDogI0I3MUMxQztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZjAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ0F1ZGlvd2lkZSc7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ucmVnLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2YwMDAwO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLnJlZy1idXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuLm9wdGlvbjphY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5tZXNzYWdlcy1zZW50LFxyXG4udXNlci1zaWdudXBzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCNzFDMUM7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBib3JkZXI6ICMwMDAgc29saWQgM3B4O1xyXG5cclxufVxyXG5cclxuXHJcbi51c2VyLXNpZ25pbnMsXHJcbi5nYW1lcy1wbGF5ZWQge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNzJhMDtcclxuICAgIGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XHJcbn1cclxuLm1lc3NhZ2VzLXNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3MmEwO1xyXG59XHJcblxyXG4ucGxheWVyLWJveCB7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxuXHJcbn1cclxuLnBsYXktYnV0dG9uIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA3MmEwO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0NTM3YztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbn1cclxuXHJcbi5wbGF5LWJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250aW51ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxufVxyXG4jYnV0dG9uIHtcclxuXHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1lbnRlciB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1vZGFsLWxlYXZlLWFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyIC5tb2RhbC1jb250YWluZXIsXHJcbi5tb2RhbC1sZWF2ZS1hY3RpdmUgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC8qIHRpbnQgaW1hZ2UgKi9cclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMC44KSwgcmdiYSgyNTUsMjU1LDI1NSwwLjgpKSxcclxuICAgICAgICAgICAgICAgICAgICAvKiBjaGVja2VyZWQgZWZmZWN0ICovXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDY0LDExNCwxNjApIDUwJSwgI2QzZDNkMyA1MCUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNjQsMTE0LDE2MCkgNTAlLCAjZDNkM2QzIDUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbCwgZGlmZmVyZW5jZSwgbm9ybWFsO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMjBweCAzMjBweDtcclxuICAgIH1cclxuICAgIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIC4zMyk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5ibGFua3Mge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjUwJVxyXG4gICAgfVxyXG4gICAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC1tZC0xMiB7XHJcbiAgICAgICAgd2lkdGg6NTAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTYge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAudXNlci1zaWduaW5zLFxyXG4gICAgLmdhbWVzLXBsYXllZCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIH1cclxuICAgIC51c2VyLXNpZ251cHMsXHJcbiAgICAubWVzc2FnZXMtc2VudCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG48L3N0eWxlPlxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUVBO0FBekpBO0FBckJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})