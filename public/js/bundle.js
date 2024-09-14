/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ppt/components/slidenumber/slideNumber.js":
/*!***************************************************!*\
  !*** ./ppt/components/slidenumber/slideNumber.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displaySlideNumber: () => (/* binding */ displaySlideNumber)
/* harmony export */ });
// ppt/components/slidenumber/slideNumber.js
function displaySlideNumber(current, total) {
  var counter = document.getElementById('slide-counter');
  counter.textContent = "".concat(current + 1, " / ").concat(total);
}

/***/ }),

/***/ "./ppt/controllers/defaultController.js":
/*!**********************************************!*\
  !*** ./ppt/controllers/defaultController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultController)
/* harmony export */ });
/* harmony import */ var _models_slideshow_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/slideshow/navigation.js */ "./ppt/models/slideshow/navigation.js");
/* harmony import */ var _inputs_keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs/keyboard.js */ "./ppt/controllers/inputs/keyboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ppt/controllers/defaultController.js


var DefaultController = /*#__PURE__*/function () {
  function DefaultController(slides) {
    _classCallCheck(this, DefaultController);
    this.controller = new _models_slideshow_navigation_js__WEBPACK_IMPORTED_MODULE_0__["default"](slides);
    this.setupInputHandlers();
  }
  return _createClass(DefaultController, [{
    key: "setupInputHandlers",
    value: function setupInputHandlers() {
      var _this = this;
      document.addEventListener('keydown', function (event) {
        (0,_inputs_keyboard_js__WEBPACK_IMPORTED_MODULE_1__.handleKeyboardInput)(event, _this.controller);
      });
    }
  }]);
}();


/***/ }),

/***/ "./ppt/controllers/inputs/keyboard.js":
/*!********************************************!*\
  !*** ./ppt/controllers/inputs/keyboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleKeyboardInput: () => (/* binding */ handleKeyboardInput)
/* harmony export */ });
// ppt/controllers/inputs/keyboard.js
function handleKeyboardInput(event, controller) {
  if (event.key === 'ArrowRight' || event.key === ' ') {
    controller.nextSlide();
  } else if (event.key === 'ArrowLeft') {
    controller.previousSlide();
  }
}

/***/ }),

/***/ "./ppt/models/slide.js":
/*!*****************************!*\
  !*** ./ppt/models/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slide)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ppt/models/slide.js
var Slide = /*#__PURE__*/function () {
  function Slide(content) {
    _classCallCheck(this, Slide);
    this.content = content;
  }
  return _createClass(Slide, [{
    key: "render",
    value: function render() {
      var slideElement = document.createElement('div');
      slideElement.classList.add('slide');
      slideElement.innerHTML = this.content;
      return slideElement;
    }
  }]);
}();


/***/ }),

/***/ "./ppt/models/slideshow.js":
/*!*********************************!*\
  !*** ./ppt/models/slideshow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideShow)
/* harmony export */ });
/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ "./ppt/models/slide.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ppt/models/slideshow.js

var SlideShow = /*#__PURE__*/function () {
  function SlideShow(slidesData) {
    _classCallCheck(this, SlideShow);
    this.slides = slidesData.map(function (content, index) {
      return new _slide_js__WEBPACK_IMPORTED_MODULE_0__["default"](content, index);
    });
  }
  return _createClass(SlideShow, [{
    key: "getSlides",
    value: function getSlides() {
      return this.slides;
    }
  }, {
    key: "getSlide",
    value: function getSlide(index) {
      return this.slides[index];
    }
  }, {
    key: "getSlideCount",
    value: function getSlideCount() {
      return this.slides.length;
    }
  }]);
}();


/***/ }),

/***/ "./ppt/models/slideshow/navigation.js":
/*!********************************************!*\
  !*** ./ppt/models/slideshow/navigation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideController)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ppt/models/slideshow/navigation.js
var SlideController = /*#__PURE__*/function () {
  function SlideController(slides) {
    _classCallCheck(this, SlideController);
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.updateSlide();
  }
  return _createClass(SlideController, [{
    key: "nextSlide",
    value: function nextSlide() {
      if (this.currentSlideIndex < this.slides.length - 1) {
        this.currentSlideIndex++;
        this.updateSlide();
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
        this.updateSlide();
      }
    }
  }, {
    key: "updateSlide",
    value: function updateSlide() {
      var currentSlide = this.slides[this.currentSlideIndex];
      document.getElementById('slideshow').innerHTML = currentSlide.render().outerHTML;
    }
  }]);
}();


/***/ }),

/***/ "./ppt/views/slideView.js":
/*!********************************!*\
  !*** ./ppt/views/slideView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displaySlide: () => (/* binding */ displaySlide)
/* harmony export */ });
// ppt/views/slideView.js
function displaySlide(slide) {
  var slideElement = document.getElementById('slideshow');
  slideElement.innerHTML = '';
  slideElement.appendChild(slide.render());
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./ppt/views/slideshowView.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideShowView)
/* harmony export */ });
/* harmony import */ var _models_slideshow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/slideshow.js */ "./ppt/models/slideshow.js");
/* harmony import */ var _slideView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideView.js */ "./ppt/views/slideView.js");
/* harmony import */ var _controllers_defaultController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/defaultController.js */ "./ppt/controllers/defaultController.js");
/* harmony import */ var _components_slidenumber_slideNumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/slidenumber/slideNumber.js */ "./ppt/components/slidenumber/slideNumber.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var SlideShowView = /*#__PURE__*/function () {
  function SlideShowView(markdownContent) {
    _classCallCheck(this, SlideShowView);
    this.slideshow = new _models_slideshow_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.parseSlides(markdownContent));
    this.controller = new _controllers_defaultController_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.slideshow.getSlides());
    this.init();
  }
  return _createClass(SlideShowView, [{
    key: "parseSlides",
    value: function parseSlides(markdown) {
      return markdown.split('---').map(function (slide) {
        return slide.trim();
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      var totalSlides = this.slideshow.getSlideCount();
      document.addEventListener('slideChange', function (event) {
        var currentSlide = event.detail;
        (0,_slideView_js__WEBPACK_IMPORTED_MODULE_1__.displaySlide)(currentSlide);
        (0,_components_slidenumber_slideNumber_js__WEBPACK_IMPORTED_MODULE_3__.displaySlideNumber)(_this.controller.controller.currentSlideIndex, totalSlides);
      });
    }
  }]);
}();

/******/ })()
;
//# sourceMappingURL=bundle.js.map