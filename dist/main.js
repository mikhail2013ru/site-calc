/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./js/model.js\");\n/* harmony import */ var _view_radioPrograms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/radioPrograms.js */ \"./js/view/radioPrograms.js\");\n\r\n\r\n\r\nconst getData = _model_js__WEBPACK_IMPORTED_MODULE_0__.getData\r\n;(0,_view_radioPrograms_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getData)\r\n\r\ndocument.addEventListener('updateForm', (e) => {\r\n    console.log(e.detail)\r\n\r\n    _model_js__WEBPACK_IMPORTED_MODULE_0__.setData(e.detail)\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9jb250cm9sbGVyLmpzIiwibWFwcGluZ3MiOiI7OztBQUFtQztBQUNXO0FBQzlDO0FBQ0EsZ0JBQWdCLDhDQUFhO0FBQzdCLG1FQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFhO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLWNhbGMvLi9qcy9jb250cm9sbGVyLmpzPzY2NWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTW9kZWwgZnJvbSAnLi9tb2RlbC5qcydcclxuaW1wb3J0IHByb2dyYW1zIGZyb20gJy4vdmlldy9yYWRpb1Byb2dyYW1zLmpzJ1xyXG5cclxuY29uc3QgZ2V0RGF0YSA9IE1vZGVsLmdldERhdGFcclxucHJvZ3JhbXMoZ2V0RGF0YSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZGF0ZUZvcm0nLCAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwpXHJcblxyXG4gICAgTW9kZWwuc2V0RGF0YShlLmRldGFpbClcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/controller.js\n");

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   setData: () => (/* binding */ setData)\n/* harmony export */ });\nlet data = {\r\n    selectedProgram: 0.1,\r\n    programs: {\r\n        base: 0.1,\r\n        it: 0.47,\r\n        gov: 0.067,\r\n        zero: 0.12\r\n    }\r\n}\r\n\r\nfunction getData() {\r\n    return {...data}\r\n}\r\n\r\nfunction setData(newData) {\r\n    console.log('data', newData)\r\n    data = {\r\n        ...data,\r\n        ...newData\r\n    }\r\n\r\n    console.log('New data', data)\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS1jYWxjLy4vanMvbW9kZWwuanM/MTVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZGF0YSA9IHtcclxuICAgIHNlbGVjdGVkUHJvZ3JhbTogMC4xLFxyXG4gICAgcHJvZ3JhbXM6IHtcclxuICAgICAgICBiYXNlOiAwLjEsXHJcbiAgICAgICAgaXQ6IDAuNDcsXHJcbiAgICAgICAgZ292OiAwLjA2NyxcclxuICAgICAgICB6ZXJvOiAwLjEyXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICByZXR1cm4gey4uLmRhdGF9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhdGEobmV3RGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCBuZXdEYXRhKVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIC4uLm5ld0RhdGFcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnTmV3IGRhdGEnLCBkYXRhKVxyXG59XHJcblxyXG5leHBvcnQgeyBnZXREYXRhLCBzZXREYXRhIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/model.js\n");

/***/ }),

/***/ "./js/view/radioPrograms.js":
/*!**********************************!*\
  !*** ./js/view/radioPrograms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction init(getData) {\r\n    const radioBtns = document.querySelectorAll('input[name=\"program\"]')\r\n    const { base, it, gov, zero } = getData().programs\r\n    document.getElementById('base-value').value = base\r\n    document.getElementById('it-value').value = it\r\n    document.getElementById('gov-value').value = gov\r\n    document.getElementById('zero-value').value = zero\r\n\r\n    document.getElementById('base-text').innerText = base * 100 + '%'\r\n    document.getElementById('it-text').innerText = it * 100 + '%'\r\n    document.getElementById('gov-text').innerText = gov * 100 + '%'\r\n    document.getElementById('zero-text').innerText = zero * 100 + '%'\r\n\r\n    radioBtns.forEach(function (radioBtn) {\r\n        radioBtn.addEventListener('change', function () {\r\n            console.log(this.value)\r\n\r\n            this.dispatchEvent(new CustomEvent('updateForm', {\r\n                bubbles: true,\r\n                detail: {\r\n                    selectedProgram: parseFloat(this.value),\r\n                    onUpdate: 'radioProgram',\r\n                    id: this.id\r\n                }\r\n            }))\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy92aWV3L3JhZGlvUHJvZ3JhbXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSxZQUFZLHNCQUFzQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLWNhbGMvLi9qcy92aWV3L3JhZGlvUHJvZ3JhbXMuanM/MzYxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0KGdldERhdGEpIHtcclxuICAgIGNvbnN0IHJhZGlvQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcm9ncmFtXCJdJylcclxuICAgIGNvbnN0IHsgYmFzZSwgaXQsIGdvdiwgemVybyB9ID0gZ2V0RGF0YSgpLnByb2dyYW1zXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZS12YWx1ZScpLnZhbHVlID0gYmFzZVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0LXZhbHVlJykudmFsdWUgPSBpdFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dvdi12YWx1ZScpLnZhbHVlID0gZ292XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemVyby12YWx1ZScpLnZhbHVlID0gemVyb1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlLXRleHQnKS5pbm5lclRleHQgPSBiYXNlICogMTAwICsgJyUnXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXQtdGV4dCcpLmlubmVyVGV4dCA9IGl0ICogMTAwICsgJyUnXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ292LXRleHQnKS5pbm5lclRleHQgPSBnb3YgKiAxMDAgKyAnJSdcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6ZXJvLXRleHQnKS5pbm5lclRleHQgPSB6ZXJvICogMTAwICsgJyUnXHJcblxyXG4gICAgcmFkaW9CdG5zLmZvckVhY2goZnVuY3Rpb24gKHJhZGlvQnRuKSB7XHJcbiAgICAgICAgcmFkaW9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndXBkYXRlRm9ybScsIHtcclxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFByb2dyYW06IHBhcnNlRmxvYXQodGhpcy52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgb25VcGRhdGU6ICdyYWRpb1Byb2dyYW0nLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/view/radioPrograms.js\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/controller.js");
/******/ 	
/******/ })()
;