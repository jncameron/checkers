webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"265b6755-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header/Header.vue?vue&type=template&id=ed558de2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"265b6755-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/Header.vue?vue&type=template&id=ed558de2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"nav\", { staticClass: \"navbar navbar-default\" }, [\n    _c(\"div\", { staticClass: \"container-fluid\" }, [\n      _vm._m(0),\n      _c(\n        \"div\",\n        { staticClass: \"collapse navbar-collapse\", attrs: { id: \"myNavbar\" } },\n        [\n          _c(\n            \"div\",\n            {\n              staticClass: \"nav navbar navbar-right\",\n              staticStyle: { \"margin-bottom\": \"0\", \"margin-top\": \"10px\" }\n            },\n            [\n              _c(\n                \"ul\",\n                {\n                  staticClass: \"nav navbar-nav\",\n                  staticStyle: { \"margin-top\": \"7px\" }\n                },\n                [\n                  _c(\n                    \"router-link\",\n                    {\n                      attrs: {\n                        to: \"/choose-game\",\n                        tag: \"li\",\n                        \"active-class\": \"active\"\n                      },\n                      on: { click: _vm.toPlay }\n                    },\n                    [_c(\"a\", { staticClass: \"nav-link\" }, [_vm._v(\"PLAY\")])]\n                  )\n                ],\n                1\n              ),\n              _vm.user.id.length === 0\n                ? _c(\n                    \"ul\",\n                    {\n                      staticClass: \"nav navbar-nav\",\n                      staticStyle: { \"margin-top\": \"7px\" }\n                    },\n                    [\n                      _c(\n                        \"router-link\",\n                        {\n                          attrs: {\n                            to: \"/signup\",\n                            tag: \"li\",\n                            \"active-class\": \"hidden\"\n                          }\n                        },\n                        [\n                          _c(\n                            \"a\",\n                            {\n                              staticClass: \"nav-link\",\n                              staticStyle: { \"margin-right\": \"10px\" }\n                            },\n                            [_vm._v(\"SIGN IN\")]\n                          )\n                        ]\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e(),\n              _c(\"div\", { staticClass: \"nav navbar-nav\" }, [\n                _vm.user.id.length > 0\n                  ? _c(\"img\", {\n                      staticClass: \" nav navbar-brand profile-image\",\n                      staticStyle: {\n                        \"margin-top\": \"0px\",\n                        \"margin-left\": \"5px\",\n                        \"margin-right\": \"15px\"\n                      },\n                      attrs: { src: _vm.getAvatarLink() },\n                      on: { click: _vm.toProfile }\n                    })\n                  : _vm._e(),\n                _vm.user.id.length > 0\n                  ? _c(\"p\", { staticStyle: { \"margin-bottom\": \"0px\" } }, [\n                      _vm._v(_vm._s(_vm.user.name))\n                    ])\n                  : _vm._e()\n              ])\n            ]\n          )\n        ]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"navbar-header\" }, [\n      _c(\n        \"button\",\n        {\n          staticClass: \"navbar-toggle\",\n          attrs: {\n            type: \"button\",\n            \"data-toggle\": \"collapse\",\n            \"data-target\": \"#myNavbar\"\n          }\n        },\n        [\n          _c(\"span\", { staticClass: \"icon-bar\" }),\n          _c(\"span\", { staticClass: \"icon-bar\" }),\n          _c(\"span\", { staticClass: \"icon-bar\" })\n        ]\n      ),\n      _c(\"img\", {\n        staticClass: \" nav navbar-brand\",\n        staticStyle: { \"margin-left\": \"5px\", \"margin-top\": \"20px\" },\n        attrs: { src: __webpack_require__(/*! ./checkers-icon.svg */ \"./src/components/header/checkers-icon.svg\") }\n      }),\n      _c(\n        \"h1\",\n        {\n          staticClass: \"navbar-brand\",\n          staticStyle: {\n            color: \"#FFF\",\n            \"font-size\": \"32px\",\n            \"margin-top\": \"20px\"\n          }\n        },\n        [_vm._v(\"Checkers\")]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMjY1YjY3NTUtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVkNTU4ZGUyJnNjb3BlZD10cnVlJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudnVlPzE2MTMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLCBhdHRyczogeyBpZDogXCJteU5hdmJhclwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdmJhciBuYXZiYXItcmlnaHRcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiMFwiLCBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI3cHhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9jaG9vc2UtZ2FtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jbGFzc1wiOiBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvUGxheSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiIH0sIFtfdm0uX3YoXCJQTEFZXCIpXSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS51c2VyLmlkLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXZiYXItbmF2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiN3B4XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL3NpZ251cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiMTBweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTSUdOIElOXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYgbmF2YmFyLW5hdlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0udXNlci5pZC5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCIgbmF2IG5hdmJhci1icmFuZCBwcm9maWxlLWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tcmlnaHRcIjogXCIxNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdldEF2YXRhckxpbmsoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9Qcm9maWxlIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLnVzZXIuaWQubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci10b2dnbGVcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNteU5hdmJhclwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1iYXJcIiB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uLWJhclwiIH0pLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tYmFyXCIgfSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiIG5hdiBuYXZiYXItYnJhbmRcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIjVweFwiLCBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9jaGVja2Vycy1pY29uLnN2Z1wiKSB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImgxXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItYnJhbmRcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IFwiI0ZGRlwiLFxuICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIzMnB4XCIsXG4gICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDaGVja2Vyc1wiKV1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"265b6755-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header/Header.vue?vue&type=template&id=ed558de2&scoped=true&\n");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header/Header.vue?vue&type=style&index=0&id=ed558de2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/Header.vue?vue&type=style&index=0&id=ed558de2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nnav[data-v-ed558de2] {\\n    font-family: 'Audiowide', cursive;\\n    font-weight: bold;\\n    background-color: #4072a0;\\n    color: #FFF;\\n    z-index: 9998;\\n    margin-bottom:0;\\n    padding-bottom:3px;\\n    height:87px;\\n}\\nh1[data-v-ed558de2] {\\n    padding-left: 20px;\\n    margin-top: 15px;\\n    margin-bottom: 5px;\\n    font-size: 24px;\\n}\\nimg[data-v-ed558de2] {\\n    padding-top: 0px;\\n    padding-bottom: 0px;\\n    padding-right: 0px;\\n    margin-top: 15px;\\n}\\n.profile-image[data-v-ed558de2]:hover {\\n\\topacity: 0.8;\\n}\\n.nav .navbar-nav[data-v-ed558de2]:hover {\\n    opacity: 0.8;\\n}\\n.navbar-default .navbar-nav>li>a[data-v-ed558de2] {\\n    color: #d3d3d3;\\n}\\n.navbar-default .navbar-nav>.active>a[data-v-ed558de2], .navbar-default .navbar-nav>.active>a[data-v-ed558de2]:focus, .navbar-default .navbar-nav>.active>a:hover\\n\\n.active .nav-link[data-v-ed558de2] {\\n    color: #FFF;\\n    background-color: #34537c;\\n}\\n@media (max-width: 500px) {\\nnav .navbar-nav[data-v-ed558de2] {\\n        width: 100%;\\n        margin: 0 auto;\\n}\\n}\\n\\n\\n\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWQ1NThkZTImc2NvcGVkPXRydWUmbGFuZz1jc3MmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci52dWU/ZjAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbm5hdltkYXRhLXYtZWQ1NThkZTJdIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBdWRpb3dpZGUnLCBjdXJzaXZlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNzJhMDtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIHotaW5kZXg6IDk5OTg7XFxuICAgIG1hcmdpbi1ib3R0b206MDtcXG4gICAgcGFkZGluZy1ib3R0b206M3B4O1xcbiAgICBoZWlnaHQ6ODdweDtcXG59XFxuaDFbZGF0YS12LWVkNTU4ZGUyXSB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcbmltZ1tkYXRhLXYtZWQ1NThkZTJdIHtcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4ucHJvZmlsZS1pbWFnZVtkYXRhLXYtZWQ1NThkZTJdOmhvdmVyIHtcXG5cXHRvcGFjaXR5OiAwLjg7XFxufVxcbi5uYXYgLm5hdmJhci1uYXZbZGF0YS12LWVkNTU4ZGUyXTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmFbZGF0YS12LWVkNTU4ZGUyXSB7XFxuICAgIGNvbG9yOiAjZDNkM2QzO1xcbn1cXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+LmFjdGl2ZT5hW2RhdGEtdi1lZDU1OGRlMl0sIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdj4uYWN0aXZlPmFbZGF0YS12LWVkNTU4ZGUyXTpmb2N1cywgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5hY3RpdmU+YTpob3Zlclxcblxcbi5hY3RpdmUgLm5hdi1saW5rW2RhdGEtdi1lZDU1OGRlMl0ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NTM3YztcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxubmF2IC5uYXZiYXItbmF2W2RhdGEtdi1lZDU1OGRlMl0ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXG59XFxufVxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/header/Header.vue?vue&type=style&index=0&id=ed558de2&scoped=true&lang=css&\n");

/***/ })

})