webpackHotUpdate("app",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/btoa.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SignUp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SignUp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_UserModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/UserModel */ \"./src/data/UserModel.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    onlineUsers: {\n      type: Array\n    }\n  },\n  data: function data() {\n    return {\n      user: _data_UserModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      baseUrl: \"/\"\n    };\n  },\n  //signup component allows returning users to login in or new users to create account\n  //TODO: use local storage to keep users logged in on refresh\n  //TODO: Redirect to signup if player logged out(and no token / token expired)\n  methods: {\n    addUser: function addUser() {\n      var _this = this;\n\n      this.user.name = document.getElementById('reg-name').value;\n      this.user.email = document.getElementById('reg-email').value;\n      this.user.password = document.getElementById('reg-password').value;\n      this.$http.post(\"\".concat(this.baseUrl, \"user/signup\"), this.user).then(function (response) {\n        _this.user.id = response.body.id;\n        console.log(response);\n        var token = response.data.token;\n\n        _this.userOnline();\n\n        localStorage.setItem('user-token', token); // store the token in localstorage\n\n        _this.navigateToChooseGame();\n      }, function (error) {\n        console.log(error);\n      });\n    },\n    validateUser: function validateUser() {\n      var _this2 = this;\n\n      var user = this.user;\n      var validUser = {};\n      validUser.email = document.getElementById('login-email').value;\n      validUser.password = document.getElementById('login-password').value;\n      this.$http.post(\"\".concat(this.baseUrl, \"user/login\"), validUser).then(function (response) {\n        console.log(response);\n        var token = response.data.token;\n        localStorage.setItem('user-token', token); // store the token in localstorage\n\n        localStorage.setItem('name', _this2.user.name); //TODO - remain signed in on refresh if token not expired\n\n        localStorage.setItem('email', _this2.user.email);\n        localStorage.setItem('avatar', _this2.user.avatar);\n\n        _this2.updateUser(response.data.user);\n\n        _this2.navigateToChooseGame();\n      }).catch(function (err) {\n        localStorage.removeItem('user-token'); // if the request fails, remove any possible user token if possible\n      });\n    },\n    updateUser: function updateUser(update) {\n      this.user.name = update.name;\n      this.user.email = update.email;\n      this.user.avatar = update.avatar;\n      this.user.id = update._id;\n      this.userOnline();\n      this.$emit('update-user', this.user);\n    },\n    userOnline: function userOnline() {\n      socket.emit('login', {\n        name: this.user.name,\n        email: this.user.email,\n        avatar: this.user.avatar,\n        id: this.user.id\n      });\n    },\n    navigateToChooseGame: function navigateToChooseGame() {\n      this.$router.push('/choose-game');\n    },\n    navigateToProfile: function navigateToProfile() {\n      this.$router.push('/profile');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1NpZ25VcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NpZ25VcC52dWU/NDQyOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHRyYW5zaXRpb24gbmFtZT1cIm1vZGFsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNpZ24tdXBcIiBpZD1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtd3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgcmVnaXN0ZXItYm94XCIgaWQ9XCJyZWdpc3Rlci1ib3hcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3M9XCJjb2wtbWQtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxoMT5SZWdpc3RlcjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicmVnLW5hbWVcIiBzdHlsZT1cIm1hcmdpbi10b3A6MTBweDtcIj5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGlkPVwicmVnLW5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJyZWctZW1haWxcIj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cInJlZy1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJyZWctcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cInJlZy1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtb246a2V5dXAuMTM9XCJhZGRVc2VyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MjVweDtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJhZGRVc2VyXCIgY2xhc3M9XCJyZWctYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxhbmsxXCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3B0aW9uXCIgc3R5bGU9XCJ3aWR0aDoxMDAlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJgJHtiYXNlVXJsfXBpZWNlLnN2Z2BcIiBzdHlsZT1cIndpZHRoOjUwJVwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIiA+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgYmxhbmsyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9wdGlvblwiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyA6c3JjPVwiYCR7YmFzZVVybH1waWVjZS1yZWQuc3ZnYFwiIHN0eWxlPVwid2lkdGg6NTAlXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbG9naW4tYm94XCIgc3R5bGU9XCJtYXJnaW46IDAgMDtcIiBpZD1cImxvZ2luLWJveFwiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImNvbC1tZC0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDE+U2lnbiBJbjwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4O1wiPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGlkPVwibG9naW4tZW1haWxcIiB0eXBlPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImxvZ2luLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdi1vbjprZXl1cC4xMz1cInZhbGlkYXRlVXNlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjI1cHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwidmFsaWRhdGVVc2VyXCIgY2xhc3M9XCJsb2dpbi1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+U2lnbiBJbjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RyYW5zaXRpb24+XG5cdDwvZGl2PlxuXG5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB1c2VyIGZyb20gJy4uL2RhdGEvVXNlck1vZGVsJztcbmV4cG9ydCBkZWZhdWx0IHtcblx0cHJvcHM6IHtcblx0XHRvbmxpbmVVc2Vyczoge3R5cGU6IEFycmF5fSxcblxuXHR9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG5cdFx0XHR1c2VyOiB1c2VyLFxuXHRcdFx0YmFzZVVybDogcHJvY2Vzcy5lbnYuQkFTRV9VUkxcbiAgICAgICAgfVxuXHR9LFxuXHQvL3NpZ251cCBjb21wb25lbnQgYWxsb3dzIHJldHVybmluZyB1c2VycyB0byBsb2dpbiBpbiBvciBuZXcgdXNlcnMgdG8gY3JlYXRlIGFjY291bnRcblx0Ly9UT0RPOiB1c2UgbG9jYWwgc3RvcmFnZSB0byBrZWVwIHVzZXJzIGxvZ2dlZCBpbiBvbiByZWZyZXNoXG5cdC8vVE9ETzogUmVkaXJlY3QgdG8gc2lnbnVwIGlmIHBsYXllciBsb2dnZWQgb3V0KGFuZCBubyB0b2tlbiAvIHRva2VuIGV4cGlyZWQpXG4gICAgbWV0aG9kczoge1xuXHRcdGFkZFVzZXIoKSB7XG5cdFx0XHR0aGlzLnVzZXIubmFtZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZy1uYW1lJykudmFsdWU7XG5cdFx0XHR0aGlzLnVzZXIuZW1haWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWctZW1haWwnKS52YWx1ZTtcblx0XHRcdHRoaXMudXNlci5wYXNzd29yZD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZy1wYXNzd29yZCcpLnZhbHVlO1xuXHRcdFx0dGhpcy4kaHR0cC5wb3N0KGAke3RoaXMuYmFzZVVybH11c2VyL3NpZ251cGAsIHRoaXMudXNlcilcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdHRoaXMudXNlci5pZCA9IHJlc3BvbnNlLmJvZHkuaWRcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcblx0XHRcdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW5cblx0XHRcdFx0XHR0aGlzLnVzZXJPbmxpbmUoKTtcbiAgICAgIFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXItdG9rZW4nLCB0b2tlbikgLy8gc3RvcmUgdGhlIHRva2VuIGluIGxvY2Fsc3RvcmFnZVxuXHRcdFx0XHRcdHRoaXMubmF2aWdhdGVUb0Nob29zZUdhbWUoKTtcblx0XHRcdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dmFsaWRhdGVVc2VyKCkge1xuXHRcdFx0bGV0IHVzZXIgPSB0aGlzLnVzZXI7XG5cdFx0XHRsZXQgdmFsaWRVc2VyID0ge307XG5cdFx0XHR2YWxpZFVzZXIuZW1haWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1lbWFpbCcpLnZhbHVlO1xuXHRcdFx0dmFsaWRVc2VyLnBhc3N3b3JkPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQnKS52YWx1ZTtcblx0XHRcdHRoaXMuJGh0dHAucG9zdChgJHt0aGlzLmJhc2VVcmx9dXNlci9sb2dpbmAsIHZhbGlkVXNlcilcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdFx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlblxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyLXRva2VuJywgdG9rZW4pIC8vIHN0b3JlIHRoZSB0b2tlbiBpbiBsb2NhbHN0b3JhZ2Vcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIHRoaXMudXNlci5uYW1lKTsgLy9UT0RPIC0gcmVtYWluIHNpZ25lZCBpbiBvbiByZWZyZXNoIGlmIHRva2VuIG5vdCBleHBpcmVkXG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdGhpcy51c2VyLmVtYWlsKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXZhdGFyJywgdGhpcy51c2VyLmF2YXRhcik7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVVc2VyKHJlc3BvbnNlLmRhdGEudXNlcik7XG5cdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvQ2hvb3NlR2FtZSgpO1xuICAgIFx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXItdG9rZW4nKSAvLyBpZiB0aGUgcmVxdWVzdCBmYWlscywgcmVtb3ZlIGFueSBwb3NzaWJsZSB1c2VyIHRva2VuIGlmIHBvc3NpYmxlXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHVwZGF0ZVVzZXIodXBkYXRlKSB7XG5cdFx0XHR0aGlzLnVzZXIubmFtZSA9IHVwZGF0ZS5uYW1lO1xuXHRcdFx0dGhpcy51c2VyLmVtYWlsID0gdXBkYXRlLmVtYWlsO1xuXHRcdFx0dGhpcy51c2VyLmF2YXRhciA9IHVwZGF0ZS5hdmF0YXI7XG5cdFx0XHR0aGlzLnVzZXIuaWQgPSB1cGRhdGUuX2lkO1xuXHRcdFx0dGhpcy51c2VyT25saW5lKCk7XG5cdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGUtdXNlcicsIHRoaXMudXNlcilcblxuXHRcdH0sXG5cdFx0dXNlck9ubGluZSgpIHtcblx0XHRcdHNvY2tldC5lbWl0KCdsb2dpbicsIHtcblx0XHRcdFx0bmFtZTogdGhpcy51c2VyLm5hbWUsXG5cdFx0XHRcdGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG5cdFx0XHRcdGF2YXRhcjogdGhpcy51c2VyLmF2YXRhcixcblx0XHRcdFx0aWQ6IHRoaXMudXNlci5pZFxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRuYXZpZ2F0ZVRvQ2hvb3NlR2FtZSgpIHtcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKCcvY2hvb3NlLWdhbWUnKTtcblx0XHR9LFxuXHRcdG5hdmlnYXRlVG9Qcm9maWxlKCkge1xuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XG5cdFx0fVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG5cbi5jb250YWluZXIge1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5NjtcbiAgdG9wOiA0MHB4O1xuICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IC8qIHRpbnQgaW1hZ2UgKi9cbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuOCksIHJnYmEoMjU1LDI1NSwyNTUsMC44KSksXG4gICAgICAgICAgICAgICAgICAgIC8qIGNoZWNrZXJlZCBlZmZlY3QgKi9cbiAgICAgICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDY0LDExNCwxNjApIDUwJSwgI2QzZDNkMyA1MCUpLFxuICAgICAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDY0LDExNCwxNjApIDUwJSwgI2QzZDNkMyA1MCUpO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsLCBkaWZmZXJlbmNlLCBub3JtYWw7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMjBweCAzMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7ICovXG4gIGRpc3BsYXk6IHRhYmxlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xufVxuXG4ubG9naW4tYm94LFxuLnJlZ2lzdGVyLWJveCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNCNzFDMUM7XG5cdGhlaWdodDogNzUlO1xuXHRtYXJnaW46IDAgMDtcblx0Ym9yZGVyOiAjMDAwIHNvbGlkIDNweDtcblx0cGFkZGluZzogNDBweCAxNXB4O1xufVxuLmxvZ2luLWJveCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0MDcyYTA7XG59XG5cbi5yZWctYnV0dG9uIHtcblx0Y29sb3I6I0ZGRjtcbiAgICBiYWNrZ3JvdW5kOiAjQjcxQzFDO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjN2YwMDAwO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcblx0d2lkdGg6IDgwJTtcbn1cblxuLnJlZy1idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2YwMDAwO1xuXHRjb2xvcjogI0ZGRjtcbn1cbi5yZWctYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW4tYnV0dG9uIHtcblx0Y29sb3I6I0ZGRjtcbiAgICBiYWNrZ3JvdW5kOiAjNDA3MmEwO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjMzQ1MzdjO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcblx0d2lkdGg6IDgwJTtcbn1cblxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDUzN2M7XG5cdGNvbG9yOiAjRkZGO1xufVxuLmxvZ2luLWJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYmxhbmsxLFxuLmJsYW5rMiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGhlaWdodDogMjUlO1xuXHRtYXJnaW46IDAgMDtcblx0Ym9yZGVyOiAjMDAwIHNvbGlkIDNweDtcblxufVxuXG5cbi5tb2RhbC13cmFwcGVyIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG5cdGhlaWdodDo4MCU7XG5cdHdpZHRoOiA0MCU7XG5cdG1pbi13aWR0aDogODAwcHg7XG5cdG1hcmdpbjogYXV0bztcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHggMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAuMzMpO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG5cdGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJywgY3Vyc2l2ZTtcblxufVxuXG4uY29sLW1kLTYge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiA1MCU7XG5cdG1hcmdpbjogMCAwO1xuXHRwYWRkaW5nOiAwIDA7XG59XG5cbi5jb2wtbWQtMTIge1xuXHRjb2xvcjogI0ZGRjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbi5tb2RhbC1lbnRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tb2RhbC1sZWF2ZS1hY3RpdmUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubW9kYWwtZW50ZXIgLm1vZGFsLWNvbnRhaW5lcixcbi5tb2RhbC1sZWF2ZS1hY3RpdmUgLm1vZGFsLWNvbnRhaW5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDkwMHB4KSB7XG5cdC5sb2dpbi1ib3gsXG5cdC5yZWdpc3Rlci1ib3gge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNCNzFDMUM7XG5cdFx0aGVpZ2h0OiA1MCU7XG5cdFx0bWFyZ2luOiAwIDA7XG5cdFx0Ym9yZGVyOiAjMDAwIHNvbGlkIDNweDtcblx0XHRwYWRkaW5nOiA0MHB4IDE1cHg7XG5cdH1cblx0LmxvZ2luLWJveCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0MDcyYTA7XG5cdH1cblxuXHQuYmxhbmsxLFxuXHQuYmxhbmsyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcblx0aGVpZ2h0OiA1MCU7XG5cdG1hcmdpbjogMCAwO1xuXHRib3JkZXI6ICMwMDAgc29saWQgM3B4O1xuXG5cdH1cbn1cbiBcbjwvc3R5bGU+XG5cblxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1REE7QUFkQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SignUp.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/node-libs-browser/mock/process.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false

})