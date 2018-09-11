webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SignUp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SignUp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_UserModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/UserModel */ \"./src/data/UserModel.js\");\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    onlineUsers: {\n      type: Array\n    }\n  },\n  data: function data() {\n    return {\n      user: _data_UserModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      baseUrl: \"/\"\n    };\n  },\n  //signup component allows returning users to login in or new users to create account\n  //TODO: use local storage to keep users logged in on refresh\n  //TODO: Redirect to signup if player logged out(and no token / token expired)\n  methods: {\n    addUser: function addUser() {\n      var _this = this;\n\n      this.user.name = document.getElementById('reg-name').value;\n      this.user.email = document.getElementById('reg-email').value;\n      this.user.password = document.getElementById('reg-password').value;\n      this.$http.post(\"\".concat(this.baseUrl, \"user/signup\"), this.user).then(function (response) {\n        _this.user._id = response.body.id;\n        console.log(response);\n        var token = response.data.token;\n\n        _this.userOnline();\n\n        localStorage.setItem('usertoken', token); // store the token in localstorage\n\n        _this.navigateToChooseGame();\n      }, function (error) {\n        console.log(error);\n      });\n    },\n    validateUser: function validateUser() {\n      var _this2 = this;\n\n      var user = this.user;\n      var validUser = {};\n      validUser.email = document.getElementById('login-email').value;\n      validUser.password = document.getElementById('login-password').value;\n      this.$http.post(\"\".concat(this.baseUrl, \"user/login\"), validUser).then(function (response) {\n        console.log(response);\n        var token = response.data.token;\n        _this2.user = response.body.user;\n        localStorage.setItem('usertoken', token); // store the token in localstorage\n\n        if (_this2.user.name === 'admin') {\n          _this2.navigateToDashboard();\n        } else if (_this2.user.name !== 'admin') {\n          localStorage.setItem('avatar', _this2.user.avatar);\n\n          _this2.updateUser(response.data.user);\n\n          _this2.navigateToChooseGame();\n        }\n      }).catch(function (err) {\n        localStorage.removeItem('usertoken'); // if the request fails, remove any possible user token if possible\n      });\n    },\n    updateUser: function updateUser(update) {\n      this.user.name = update.name;\n      this.user.email = update.email;\n      this.user.avatar = update.avatar;\n      this.user._id = update._id; //this.userOnline();\n\n      this.$emit('update-user', this.user);\n    },\n    navigateToChooseGame: function navigateToChooseGame() {\n      this.$router.push('/choose-game');\n    },\n    navigateToProfile: function navigateToProfile() {\n      this.$router.push('/profile');\n    },\n    navigateToDashboard: function navigateToDashboard() {\n      this.$router.push('/dashboard');\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1NpZ25VcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NpZ25VcC52dWU/NDQyOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHRyYW5zaXRpb24gbmFtZT1cIm1vZGFsXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNpZ24tdXBcIiBpZD1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtd3JhcHBlclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIHN0eWxlPVwibWFyZ2luOiAwIDA7XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgcmVnaXN0ZXItYm94XCIgaWQ9XCJyZWdpc3Rlci1ib3hcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3M9XCJjb2wtbWQtMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkZXRhaWxzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3VtbWFyeT48aDEgc3R5bGU9XCJmb250LWZhbWlseTonQXVkaW93aWRlJ1wiPlJlZ2lzdGVyPC9oMT48L3N1bW1hcnk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJyZWctbmFtZVwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4O1wiPk5pY2tuYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGlkPVwicmVnLW5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJyZWctZW1haWxcIj5FbWFpbDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cInJlZy1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJyZWctcGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cInJlZy1wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtb246a2V5dXAuMTM9XCJhZGRVc2VyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206MjVweDtcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJhZGRVc2VyXCIgY2xhc3M9XCJyZWctYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlJlZ2lzdGVyPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2RldGFpbHM+XG5cblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibGFuazFcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJibGFua3NcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWcgOnNyYz1cImAke2Jhc2VVcmx9cGllY2Uuc3ZnYFwiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiID5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBibGFuazJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmxhbmtzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJgJHtiYXNlVXJsfXBpZWNlLXJlZC5zdmdgXCIvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBsb2dpbi1ib3hcIiBzdHlsZT1cIm1hcmdpbjogMCAwO1wiIGlkPVwibG9naW4tYm94XCI+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwiY29sLW1kLTEwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkZXRhaWxzPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdW1tYXJ5PjxoMSBzdHlsZT1cImZvbnQtZmFtaWx5OidBdWRpb3dpZGUnXCI+U2lnbiBJbjwvaDE+PC9zdW1tYXJ5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJlbWFpbFwiIHN0eWxlPVwibWFyZ2luLXRvcDoxMHB4O1wiPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJsb2dpbi1lbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjEwcHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBpZD1cImxvZ2luLXBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgdi1vbjprZXl1cC4xMz1cInZhbGlkYXRlVXNlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOjI1cHg7XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJ2YWxpZGF0ZVVzZXJcIiBjbGFzcz1cImxvZ2luLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj5TaWduIEluPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGV0YWlscz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC90cmFuc2l0aW9uPlxuXHQ8L2Rpdj5cblxuXG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdXNlciBmcm9tICcuLi9kYXRhL1VzZXJNb2RlbCc7XG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiB7XG5cdFx0b25saW5lVXNlcnM6IHt0eXBlOiBBcnJheX0sXG5cblx0fSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuXHRcdFx0dXNlcjogdXNlcixcblx0XHRcdGJhc2VVcmw6IHByb2Nlc3MuZW52LkJBU0VfVVJMXG4gICAgICAgIH1cblx0fSxcblx0Ly9zaWdudXAgY29tcG9uZW50IGFsbG93cyByZXR1cm5pbmcgdXNlcnMgdG8gbG9naW4gaW4gb3IgbmV3IHVzZXJzIHRvIGNyZWF0ZSBhY2NvdW50XG5cdC8vVE9ETzogdXNlIGxvY2FsIHN0b3JhZ2UgdG8ga2VlcCB1c2VycyBsb2dnZWQgaW4gb24gcmVmcmVzaFxuXHQvL1RPRE86IFJlZGlyZWN0IHRvIHNpZ251cCBpZiBwbGF5ZXIgbG9nZ2VkIG91dChhbmQgbm8gdG9rZW4gLyB0b2tlbiBleHBpcmVkKVxuICAgIG1ldGhvZHM6IHtcblx0XHRhZGRVc2VyKCkge1xuXHRcdFx0dGhpcy51c2VyLm5hbWU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWctbmFtZScpLnZhbHVlO1xuXHRcdFx0dGhpcy51c2VyLmVtYWlsPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnLWVtYWlsJykudmFsdWU7XG5cdFx0XHR0aGlzLnVzZXIucGFzc3dvcmQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWctcGFzc3dvcmQnKS52YWx1ZTtcblx0XHRcdHRoaXMuJGh0dHAucG9zdChgJHt0aGlzLmJhc2VVcmx9dXNlci9zaWdudXBgLCB0aGlzLnVzZXIpXG5cdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHR0aGlzLnVzZXIuX2lkID0gcmVzcG9uc2UuYm9keS5pZFxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdFx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlblxuXHRcdFx0XHRcdHRoaXMudXNlck9ubGluZSgpO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VydG9rZW4nLCB0b2tlbikgLy8gc3RvcmUgdGhlIHRva2VuIGluIGxvY2Fsc3RvcmFnZVxuXHRcdFx0XHRcdHRoaXMubmF2aWdhdGVUb0Nob29zZUdhbWUoKTtcblx0XHRcdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKVxuXHRcdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0dmFsaWRhdGVVc2VyKCkge1xuXHRcdFx0bGV0IHVzZXIgPSB0aGlzLnVzZXI7XG5cdFx0XHRsZXQgdmFsaWRVc2VyID0ge307XG5cdFx0XHR2YWxpZFVzZXIuZW1haWw9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1lbWFpbCcpLnZhbHVlO1xuXHRcdFx0dmFsaWRVc2VyLnBhc3N3b3JkPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcGFzc3dvcmQnKS52YWx1ZTtcblx0XHRcdHRoaXMuJGh0dHAucG9zdChgJHt0aGlzLmJhc2VVcmx9dXNlci9sb2dpbmAsIHZhbGlkVXNlcilcblx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdFx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcblx0XHRcdFx0XHR0aGlzLnVzZXIgPSByZXNwb25zZS5ib2R5LnVzZXI7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJ0b2tlbicsIHRva2VuKSAvLyBzdG9yZSB0aGUgdG9rZW4gaW4gbG9jYWxzdG9yYWdlXG5cdFx0XHRcdFx0aWYgKHRoaXMudXNlci5uYW1lID09PSAnYWRtaW4nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5hdmlnYXRlVG9EYXNoYm9hcmQoKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYodGhpcy51c2VyLm5hbWUgIT09ICdhZG1pbicpIHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdmF0YXInLCB0aGlzLnVzZXIuYXZhdGFyKTtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlVXNlcihyZXNwb25zZS5kYXRhLnVzZXIpO1xuXHRcdFx0XHRcdFx0dGhpcy5uYXZpZ2F0ZVRvQ2hvb3NlR2FtZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJ0b2tlbicpIC8vIGlmIHRoZSByZXF1ZXN0IGZhaWxzLCByZW1vdmUgYW55IHBvc3NpYmxlIHVzZXIgdG9rZW4gaWYgcG9zc2libGVcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0dXBkYXRlVXNlcih1cGRhdGUpIHtcblx0XHRcdHRoaXMudXNlci5uYW1lID0gdXBkYXRlLm5hbWU7XG5cdFx0XHR0aGlzLnVzZXIuZW1haWwgPSB1cGRhdGUuZW1haWw7XG5cdFx0XHR0aGlzLnVzZXIuYXZhdGFyID0gdXBkYXRlLmF2YXRhcjtcblx0XHRcdHRoaXMudXNlci5faWQgPSB1cGRhdGUuX2lkO1xuXHRcdFx0Ly90aGlzLnVzZXJPbmxpbmUoKTtcblx0XHRcdHRoaXMuJGVtaXQoJ3VwZGF0ZS11c2VyJywgdGhpcy51c2VyKVxuXG5cdFx0fSxcblx0XHRcblx0XHRuYXZpZ2F0ZVRvQ2hvb3NlR2FtZSgpIHtcblx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKCcvY2hvb3NlLWdhbWUnKTtcblx0XHR9LFxuXHRcdG5hdmlnYXRlVG9Qcm9maWxlKCkge1xuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XG5cdFx0fSxcblx0XHRuYXZpZ2F0ZVRvRGFzaGJvYXJkKCkge1xuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuXHRcdH1cblxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQ+XG5cbi5jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTY7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMDtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTsgKi9cbiAgZGlzcGxheTogdGFibGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG59XG5cbi5sb2dpbi1ib3gsXG4ucmVnaXN0ZXItYm94IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0I3MUMxQztcblx0aGVpZ2h0OiA3NSU7XG5cdG1hcmdpbjogMCAwO1xuXHRib3JkZXI6ICMwMDAgc29saWQgM3B4O1xuXHRwYWRkaW5nOiA0MHB4IDE1cHg7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmxvZ2luLWJveCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0MDcyYTA7XG59XG4uYmxhbmtzIHtcblx0aGVpZ2h0OiAwJTtcblx0d2lkdGg6IDAlO1xufVxuXG5pbWcge1xuXHR3aWR0aDogMCU7XG59XG5cbi5yZWctYnV0dG9uIHtcblx0Y29sb3I6I0ZGRjtcbiAgICBiYWNrZ3JvdW5kOiAjQjcxQzFDO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjN2YwMDAwO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcblx0d2lkdGg6IDgwJTtcbn1cblxuLnJlZy1idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2YwMDAwO1xuXHRjb2xvcjogI0ZGRjtcbn1cbi5yZWctYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW4tYnV0dG9uIHtcblx0Y29sb3I6I0ZGRjtcbiAgICBiYWNrZ3JvdW5kOiAjNDA3MmEwO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjMzQ1MzdjO1xuXHRib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcblx0d2lkdGg6IDgwJTtcbn1cblxuLmxvZ2luLWJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzNDUzN2M7XG5cdGNvbG9yOiAjRkZGO1xufVxuLmxvZ2luLWJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYmxhbmsxLFxuLmJsYW5rMiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGhlaWdodDogMCU7XG5cdHdpZHRoOiAwJTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWFyZ2luOiAwIDA7XG5cdGJvcmRlcjogIzAwMCBzb2xpZCAzcHg7XG5cbn1cblxuXG4ubW9kYWwtd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuXHRoZWlnaHQ6ODAlO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luOiBhdXRvO1xuXHRkaXNwbGF5OiBpbmxpbmU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAxMHB4IDEwcHg7XG5cdHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcblx0Zm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLCBjdXJzaXZlO1xuXG59XG5cbi5jb2wtbWQtNiB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMCAwO1xuXHRwYWRkaW5nOiAwIDA7XG59XG5cbi5jb2wtbWQtMTAge1xuXHR3aWR0aDogOTUlO1xufVxuXG4uY29sLW1kLTEyIHtcblx0Y29sb3I6ICNGRkY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblxufVxuLm1vZGFsLWVudGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1vZGFsLWxlYXZlLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tb2RhbC1lbnRlciAubW9kYWwtY29udGFpbmVyLFxuLm1vZGFsLWxlYXZlLWFjdGl2ZSAubW9kYWwtY29udGFpbmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuc3VtbWFyeTpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cblxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDQ1MHB4KSBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcblx0LmNvbnRhaW5lciB7XG5cdFx0dG9wOiA0MHB4O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiAvKiB0aW50IGltYWdlICovXG5cdFx0XHRcdFx0bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDAuOCksIHJnYmEoMjU1LDI1NSwyNTUsMC44KSksXG5cdFx0XHRcdFx0LyogY2hlY2tlcmVkIGVmZmVjdCAqL1xuXHRcdFx0XHRcdGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg2NCwxMTQsMTYwKSA1MCUsICNkM2QzZDMgNTAlKSxcblx0XHRcdFx0XHRsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDY0LDExNCwxNjApIDUwJSwgI2QzZDNkMyA1MCUpO1xuXHRiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbCwgZGlmZmVyZW5jZSwgbm9ybWFsO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDMyMHB4IDMyMHB4O1xuXHR9XG5cdC5tb2RhbC1jb250YWluZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdFx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIC4zMyk7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXgtd2lkdGg6IDgwMHB4O1xuXHR9XG5cdC5ibGFua3Mge1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0aGVpZ2h0OjUwJVxuXHR9XG5cdC5jb2wtbWQtNiB7XG5cdFx0d2lkdGg6IDUwJTtcblx0fVxuXHRkZXRhaWxzID4gc3VtbWFyeXtcblx0XHRsaXN0LXN0eWxlOiBub25lXG5cdH1cblx0ZGV0YWlscyA+IHN1bW1hcnk6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmJsYW5rMSxcblx0LmJsYW5rMiB7XG5cdGhlaWdodDogMjUlO1xuXHRib3JkZXI6ICMwMDAgc29saWQgM3B4O1xuXHR9XG5cdGltZyB7XG5cdFx0d2lkdGg6MjUlO1xuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuXHRibGFuazEsXG5cdGJsYW5rMixcblx0YmxhbmtzIHtcblx0aGVpZ2h0OiAwJTtcblx0fVxuXHRcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWhlaWdodDogOTAwcHgpIHtcblxuXHRkZXRhaWxzID4gc3VtbWFyeXtcblx0XHRsaXN0LXN0eWxlOiBub25lXG5cdH1cblx0ZGV0YWlscyA+IHN1bW1hcnk6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQubG9naW4tYm94LFxuXHQucmVnaXN0ZXItYm94IHtcblx0XHRoZWlnaHQ6IDUwJTtcblx0XHRtYXJnaW46IDAgMDtcblx0XHRib3JkZXI6ICMwMDAgc29saWQgM3B4O1xuXHRcdHBhZGRpbmc6IDQwcHggMTVweDtcblx0fVxuXG5cblx0LmJsYW5rMSxcblx0LmJsYW5rMiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5cdGhlaWdodDogNTAlO1xuXHRtYXJnaW46IDAgMDtcblx0Ym9yZGVyOiAjMDAwIHNvbGlkIDNweDtcblx0fVxuXHRpbWcge1xuXHRcdHdpZHRoOjUwJTtcblx0fVxufVxuXG4gXG48L3N0eWxlPlxuXG5cblxuXG5cblxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0RBO0FBZEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/SignUp.vue?vue&type=script&lang=js&\n");

/***/ })

})