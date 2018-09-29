webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var _data_OnlineUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/OnlineUsers */ \"./src/data/OnlineUsers.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    onlineUsers: {\n      type: Array\n    }\n  },\n  data: function data() {\n    return {\n      gameData: [0, 0, 0, 0, 0, 0, 0],\n      userData: [0, 0, 0, 0, 0, 0, 0],\n      line: ''\n    };\n  },\n  mounted: function mounted() {\n    this.getGameData();\n    this.getUserData();\n  },\n  watch: {\n    onlineUsers: function onlineUsers() {\n      console.log(_data_OnlineUsers__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length);\n      this.getSignins();\n      this.getGamesBeingPlayed();\n    }\n  },\n  methods: {\n    setGameData: function setGameData(d) {\n      var _this = this;\n\n      var now = new Date();\n      var day = now.getDay();\n      var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n      var todayMidnight = new Date(now);\n      todayMidnight.setHours(0, 0, 0, 0);\n      var msSinceMidnight = now - todayMidnight;\n      d.forEach(function (el) {\n        var date = new Date(el);\n\n        for (var _d in week) {\n          if (date.getDay() == _d) {\n            _this.gameData[_d] += 1;\n          }\n        }\n      });\n    },\n    getGameData: function getGameData() {\n      var _this2 = this;\n\n      var setGameData = this.setGameData;\n      var getGamesPlayed = this.getGamesPlayed;\n      this.$http.get('/newgame/stats').then(function (response) {\n        setGameData(response.body.games);\n      }, function (error) {\n        console.log(error);\n      }).then(function (response) {\n        getGamesPlayed();\n\n        _this2.getGamesBeingPlayed();\n      });\n    },\n    setUserData: function setUserData(d) {\n      var _this3 = this;\n\n      var now = new Date();\n      var day = now.getDay();\n      var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n      d.forEach(function (el) {\n        var date = new Date(el);\n\n        for (var _d2 in week) {\n          if (date.getDay() == _d2) {\n            _this3.userData[_d2] += 1;\n          }\n        }\n      });\n    },\n    getUserData: function getUserData() {\n      var _this4 = this;\n\n      var setUserData = this.setUserData;\n      this.$http.get('/user/userstats').then(function (response) {\n        setUserData(response.body.users);\n      }, function (error) {\n        console.log(error);\n      }).then(function (response) {\n        _this4.getSignups();\n\n        _this4.getSignins();\n      });\n    },\n    getSignups: function getSignups() {\n      var margin = {\n        top: 20,\n        right: 20,\n        bottom: 30,\n        left: 40\n      },\n          width = 350 - margin.left - margin.right,\n          height = 250 - margin.top - margin.bottom; // set the ranges\n\n      var x = d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleBand\"]().range([1, width]).padding(0.1);\n      var y = d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleLinear\"]().range([height, 0]);\n      var week = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']; // append a 'group' element to 'svg'\n      // moves the 'group' element to the top left margin\n\n      var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](\"#signup-svg\").attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // get the data\n\n      var data = this.userData; // Scale the range of the data in the domains\n\n      x.domain(data.map(function (d, i) {\n        return i;\n      }));\n      y.domain([0, d3__WEBPACK_IMPORTED_MODULE_2__[\"max\"](data, function (d) {\n        return d;\n      })]); // append the rectangles for the bar chart\n\n      svg.selectAll(\".bar\").data(data).enter().append(\"rect\").attr(\"class\", \"bar\").style(\"fill\", \"#000\").attr(\"x\", function (d, i) {\n        return x(i);\n      }).attr(\"width\", x.bandwidth()).attr(\"y\", function (d) {\n        return y(d);\n      }).attr(\"height\", function (d) {\n        return height - y(d);\n      }); // add the x Axis\n\n      svg.append(\"g\").attr(\"transform\", \"translate(0,\" + height + \")\").call(d3__WEBPACK_IMPORTED_MODULE_2__[\"axisBottom\"](x).tickSize(10).tickFormat(function (d, i) {\n        return week[i];\n      })); // add the y Axis\n\n      svg.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_2__[\"axisLeft\"](y).tickSize(10).tickFormat(function (d, i) {\n        return i;\n      }).ticks(Math.max.apply(Math, Object(_mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data))));\n    },\n    getSignins: function getSignins() {\n      var onlineUsers = this.onlineUsers;\n      var signinNumber = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](\"#users-signed-in\");\n      signinNumber.text(onlineUsers.length).style(\"color\", \"#4072a0\").style(\"margin-top\", \"120px\").style(\"font-size\", \"68px\");\n    },\n    getGamesPlayed: function getGamesPlayed() {\n      var margin = {\n        top: 20,\n        right: 20,\n        bottom: 30,\n        left: 50\n      },\n          width = 350 - margin.left - margin.right,\n          height = 250 - margin.top - margin.bottom; // set the ranges\n\n      var x = d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleLinear\"]().range([0, width]);\n      var y = d3__WEBPACK_IMPORTED_MODULE_2__[\"scaleLinear\"]().range([height, 0]); // define the line\n\n      var valueline = d3__WEBPACK_IMPORTED_MODULE_2__[\"line\"]().x(function (d, i) {\n        return x(i);\n      }).y(function (d) {\n        return y(d);\n      });\n      var week = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']; // append the svg obgect to the body of the page\n      // appends a 'group' element to 'svg'\n      // moves the 'group' element to the top left margin\n\n      var svg = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](\"#games-played-svg\").attr(\"width\", width + margin.left + margin.right).attr(\"height\", height + margin.top + margin.bottom).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // Get the data\n\n      var data = this.gameData; // format the data\n      // Scale the range of the data\n\n      x.domain([0, d3__WEBPACK_IMPORTED_MODULE_2__[\"max\"](data, function (d, i) {\n        return i;\n      })]);\n      y.domain([0, d3__WEBPACK_IMPORTED_MODULE_2__[\"max\"](data, function (d) {\n        return d;\n      })]); // Add the valueline path.\n\n      svg.append(\"path\").data([data]).attr(\"class\", \"line\").attr(\"d\", valueline).style(\"stroke\", \"#B71c1c\"); // Add the X Axis\n\n      svg.append(\"g\").attr(\"transform\", \"translate(0,\" + height + \")\").call(d3__WEBPACK_IMPORTED_MODULE_2__[\"axisBottom\"](x).tickSize(10).ticks(7).tickFormat(function (d, i) {\n        return week[i];\n      })); // Add the Y Axis\n\n      svg.append(\"g\").call(d3__WEBPACK_IMPORTED_MODULE_2__[\"axisLeft\"](y).tickSize(10).tickFormat(function (d, i) {\n        return i;\n      }).ticks(Math.max.apply(Math, Object(_mnt_f_COSC560_checkers_deployed_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data))));\n    },\n    getGamesBeingPlayed: function getGamesBeingPlayed() {\n      var gamesBeingPlayed = d3__WEBPACK_IMPORTED_MODULE_2__[\"select\"](\"#games-being-played\");\n      gamesBeingPlayed.text(this.gameData.reduce(function (a, b) {\n        return a + b;\n      }, 0)).style(\"color\", \"#000\").style(\"margin-top\", \"120px\").style(\"font-size\", \"68px\");\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImNob29zZS1nYW1lXCI+XHJcbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwibW9kYWxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHVzZXItc2lnbnVwc1wiID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wdGlvblwiIGlkPVwic2lnbnVwLWNoYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlVzZXIgU2lnbnVwczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlRoaXMgd2VlazwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBpZD1cInNpZ251cC1zdmdcIj48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdXNlci1zaWduaW5zXCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZ25pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5Vc2VycyBTaWduZWQgSW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBpZD1cInVzZXJzLXNpZ25lZC1pblwiPjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBnYW1lcy1wbGF5ZWRcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzID5HYW1lcyBQbGF5ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5UaGlzIHdlZWs8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgaWQ9XCJnYW1lcy1wbGF5ZWQtc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIG1lc3NhZ2VzLXNlbnRcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlRvdGFsIEdhbWVzIFBsYXllZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGlkPVwiZ2FtZXMtYmVpbmctcGxheWVkXCI+PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvdHJhbnNpdGlvbj5cclxuICA8L2Rpdj5cclxuICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xyXG5pbXBvcnQgb25saW5lVXNlcnMgZnJvbSAnLi4vZGF0YS9PbmxpbmVVc2Vycyc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7IFxyXG4gICAgICBvbmxpbmVVc2Vyczoge3R5cGU6IEFycmF5fVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2FtZURhdGE6IFswLDAsMCwwLDAsMCwwXSxcclxuICAgICAgICB1c2VyRGF0YTogWzAsMCwwLDAsMCwwLDBdLFxyXG4gICAgICBsaW5lOiAnJyxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuZ2V0R2FtZURhdGEoKTtcclxuICAgIHRoaXMuZ2V0VXNlckRhdGEoKTtcclxuICB9LFxyXG4gIFx0d2F0Y2g6IHtcclxuXHRcdG9ubGluZVVzZXJzOiBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2cob25saW5lVXNlcnMubGVuZ3RoKVxyXG4gICAgICB0aGlzLmdldFNpZ25pbnMoKTtcclxuICAgICAgdGhpcy5nZXRHYW1lc0JlaW5nUGxheWVkKCk7XHJcblx0XHR9XHJcblx0fSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgc2V0R2FtZURhdGEoZCkge1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF5KCk7XHJcbiAgICAgICAgbGV0IHdlZWsgPSBbJ1N1bmRheScsJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxyXG4gICAgICAgIGxldCB0b2RheU1pZG5pZ2h0ID0gbmV3IERhdGUobm93KTtcclxuICAgICAgICB0b2RheU1pZG5pZ2h0LnNldEhvdXJzKDAsMCwwLDApO1xyXG4gICAgICAgIGxldCBtc1NpbmNlTWlkbmlnaHQgPSBub3cgLSB0b2RheU1pZG5pZ2h0O1xyXG4gICAgICAgIGQuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGVsKVxyXG4gICAgICAgICAgZm9yIChsZXQgZCBpbiB3ZWVrKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmdldERheSgpID09IGQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdhbWVEYXRhW2RdICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRHYW1lRGF0YSgpIHtcclxuICAgICAgICBsZXQgc2V0R2FtZURhdGEgPSB0aGlzLnNldEdhbWVEYXRhO1xyXG4gICAgICAgIGxldCBnZXRHYW1lc1BsYXllZCA9IHRoaXMuZ2V0R2FtZXNQbGF5ZWQ7XHJcbiAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy9uZXdnYW1lL3N0YXRzJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBzZXRHYW1lRGF0YShyZXNwb25zZS5ib2R5LmdhbWVzKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBnZXRHYW1lc1BsYXllZCgpO1xyXG4gICAgICAgICAgdGhpcy5nZXRHYW1lc0JlaW5nUGxheWVkKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgc2V0VXNlckRhdGEoZCkge1xyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBkYXkgPSBub3cuZ2V0RGF5KCk7XHJcbiAgICAgICAgbGV0IHdlZWsgPSBbJ1N1bmRheScsJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxyXG4gICAgICAgIGQuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGVsKVxyXG4gICAgICAgICAgZm9yIChsZXQgZCBpbiB3ZWVrKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmdldERheSgpID09IGQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhW2RdICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG5cclxuICAgICAgZ2V0VXNlckRhdGEoKSB7XHJcbiAgICAgICAgICBsZXQgc2V0VXNlckRhdGEgPSB0aGlzLnNldFVzZXJEYXRhO1xyXG4gICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJy91c2VyL3VzZXJzdGF0cycpXHJcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VXNlckRhdGEocmVzcG9uc2UuYm9keS51c2Vycyk7XHJcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRTaWdudXBzKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRTaWduaW5zKCk7XHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0U2lnbnVwcygpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA0MH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDM1MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjUwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHJhbmdlc1xyXG4gICAgICAgICAgICB2YXIgeCA9IGQzLnNjYWxlQmFuZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFsxLCB3aWR0aF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhZGRpbmcoMC4xKTtcclxuICAgICAgICAgICAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHdlZWsgPSBbJ1N1JywnTScsICdUdScsICdXJywgJ1RoJywgJ0YnLCAnU2EnXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gYXBwZW5kIGEgJ2dyb3VwJyBlbGVtZW50IHRvICdzdmcnXHJcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxyXG4gICAgICAgICAgICB2YXIgc3ZnID0gZDMuc2VsZWN0KFwiI3NpZ251cC1zdmdcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxyXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgZGF0YVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMudXNlckRhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBTY2FsZSB0aGUgcmFuZ2Ugb2YgdGhlIGRhdGEgaW4gdGhlIGRvbWFpbnNcclxuICAgICAgICAgICAgeC5kb21haW4oZGF0YS5tYXAoZnVuY3Rpb24oZCxpKSB7IHJldHVybiBpOyB9KSk7XHJcbiAgICAgICAgICAgIHkuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZDsgfSldKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgcmVjdGFuZ2xlcyBmb3IgdGhlIGJhciBjaGFydFxyXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoZGF0YSlcclxuICAgICAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInJlY3RcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJiYXJcIilcclxuICAgICAgICAgICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjMDAwXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24oZCxpKSB7IHJldHVybiB4KGkpOyB9KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB4LmJhbmR3aWR0aCgpKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBoZWlnaHQgLSB5KGQpOyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgeCBBeGlzXHJcblxyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KS50aWNrU2l6ZSgxMCkudGlja0Zvcm1hdCgoZCxpKSA9PiB3ZWVrW2ldKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIHkgQXhpc1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkudGlja1NpemUoMTApLnRpY2tGb3JtYXQoKGQsaSkgPT4gaSkudGlja3MoTWF0aC5tYXgoLi4uZGF0YSkpKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldFNpZ25pbnMoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgb25saW5lVXNlcnMgPSB0aGlzLm9ubGluZVVzZXJzO1xyXG4gICAgICAgICAgICBsZXQgc2lnbmluTnVtYmVyID0gZDMuc2VsZWN0KFwiI3VzZXJzLXNpZ25lZC1pblwiKTtcclxuICAgICAgICAgICAgc2lnbmluTnVtYmVyLnRleHQob25saW5lVXNlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiY29sb3JcIixcIiM0MDcyYTBcIilcclxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpbi10b3BcIixcIjEyMHB4XCIpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIixcIjY4cHhcIilcclxuXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0R2FtZXNQbGF5ZWQoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXJnaW4gPSB7dG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA1MH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IDM1MCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gMjUwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSByYW5nZXNcclxuICAgICAgICAgICAgdmFyIHggPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCB3aWR0aF0pO1xyXG4gICAgICAgICAgICB2YXIgeSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW2hlaWdodCwgMF0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZGVmaW5lIHRoZSBsaW5lXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZWxpbmUgPSBkMy5saW5lKClcclxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uKGQsaSkgeyByZXR1cm4geChpKTsgfSlcclxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHkoZCk7IH0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHdlZWsgPSBbJ1N1JywnTScsICdUdScsICdXJywgJ1RoJywgJ0YnLCAnU2EnXVxyXG5cclxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JnZWN0IHRvIHRoZSBib2R5IG9mIHRoZSBwYWdlXHJcbiAgICAgICAgICAgIC8vIGFwcGVuZHMgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2ZydcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhlICdncm91cCcgZWxlbWVudCB0byB0aGUgdG9wIGxlZnQgbWFyZ2luXHJcbiAgICAgICAgICAgIHZhciBzdmcgPSBkMy5zZWxlY3QoXCIjZ2FtZXMtcGxheWVkLXN2Z1wiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXHJcbiAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIilcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZGF0YVxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2FtZURhdGE7XHJcblxyXG4gICAgICAgICAgICAvLyBmb3JtYXQgdGhlIGRhdGFcclxuXHJcbiAgICAgICAgICAgIC8vIFNjYWxlIHRoZSByYW5nZSBvZiB0aGUgZGF0YVxyXG4gICAgICAgICAgICB4LmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uKGQsaSkgeyByZXR1cm4gaTsgfSldKTtcclxuICAgICAgICAgICAgeS5kb21haW4oWzAsIGQzLm1heChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkOyB9KV0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSB2YWx1ZWxpbmUgcGF0aC5cclxuICAgICAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgICAgIC5kYXRhKFtkYXRhXSlcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgdmFsdWVsaW5lKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsIFwiI0I3MWMxY1wiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgWCBBeGlzXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHgpLnRpY2tTaXplKDEwKS50aWNrcyg3KS50aWNrRm9ybWF0KChkLGkpID0+IHdlZWtbaV0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgWSBBeGlzXHJcbiAgICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXHJcbiAgICAgICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5KS50aWNrU2l6ZSgxMCkudGlja0Zvcm1hdCgoZCxpKSA9PiBpKS50aWNrcyhNYXRoLm1heCguLi5kYXRhKSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRHYW1lc0JlaW5nUGxheWVkKCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGdhbWVzQmVpbmdQbGF5ZWQgPSBkMy5zZWxlY3QoXCIjZ2FtZXMtYmVpbmctcGxheWVkXCIpO1xyXG4gICAgICAgICAgICBnYW1lc0JlaW5nUGxheWVkLnRleHQodGhpcy5nYW1lRGF0YS5yZWR1Y2UoKGEsYikgPT4gYSArIGIsIDApKVxyXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwiY29sb3JcIixcIiMwMDBcIilcclxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpbi10b3BcIixcIjEyMHB4XCIpXHJcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIixcIjY4cHhcIilcclxuXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuICAgICAgICBcclxufVxyXG5cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuc3ZnIHtcclxuICAgIG1hcmdpbjogMjVweDtcclxufVxyXG5wYXRoIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6ICM3NkJGOEE7XHJcbiAgICBzdHJva2Utd2lkdGg6IDNweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk2O1xyXG4gIHRvcDogNDBweDtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIFxyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpOyAqL1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RhbC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OjgwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLCBjdXJzaXZlO1xyXG5cclxufVxyXG5cclxuLmNvbC1tZC02IHtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAwO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG59XHJcblxyXG4uY29sLW1kLTEyIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5oMntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5yZWctYnV0dG9uIHtcclxuICAgIGNvbG9yOiNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjcxQzFDO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdmMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5yZWctYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZjAwMDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4ucmVnLWJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ub3B0aW9uOmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLm1lc3NhZ2VzLXNlbnQsXHJcbi51c2VyLXNpZ251cHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I3MUMxQztcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XHJcblxyXG59XHJcblxyXG5cclxuLnVzZXItc2lnbmlucyxcclxuLmdhbWVzLXBsYXllZCB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3MmEwO1xyXG4gICAgYm9yZGVyOiAjMDAwIHNvbGlkIDNweDtcclxufVxyXG4ubWVzc2FnZXMtc2VudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDcyYTA7XHJcbn1cclxuXHJcbi5wbGF5ZXItYm94IHtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xyXG5cclxufVxyXG4ucGxheS1idXR0b24ge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIGJhY2tncm91bmQ6ICM0MDcyYTA7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzQ1MzdjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxufVxyXG5cclxuLnBsYXktYnV0dG9uOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRpbnVlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG59XHJcbiNidXR0b24ge1xyXG5cclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWVudGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubW9kYWwtbGVhdmUtYWN0aXZlIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubW9kYWwtZW50ZXIgLm1vZGFsLWNvbnRhaW5lcixcclxuLm1vZGFsLWxlYXZlLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLyogdGludCBpbWFnZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwwLjgpLCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8qIGNoZWNrZXJlZCBlZmZlY3QgKi9cclxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoNjQsMTE0LDE2MCkgNTAlLCAjZDNkM2QzIDUwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg2NCwxMTQsMTYwKSA1MCUsICNkM2QzZDMgNTAlKTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBkaWZmZXJlbmNlLCBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMyMHB4IDMyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjMzKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmJsYW5rcyB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6NTAlXHJcbiAgICB9XHJcbiAgICAubW9kYWwtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICB9XHJcbiAgICAuY29sLW1kLTEyIHtcclxuICAgICAgICB3aWR0aDo0OTBweDtcclxuICAgIH1cclxuICAgIC5jb2wtbWQtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC51c2VyLXNpZ25pbnMsXHJcbiAgICAuZ2FtZXMtcGxheWVkIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLnVzZXItc2lnbnVwcyxcclxuICAgIC5tZXNzYWdlcy1zZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbjwvc3R5bGU+XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFHQTtBQUdBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFRQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBeExBO0FBdEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})