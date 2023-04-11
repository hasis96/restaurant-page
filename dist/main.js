/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\n\nfunction renderContact() {\n    const main = document.getElementById(\"content\");\n    const createDiv = document.createElement(\"div\");\n    const getCont = document.getElementById(\"contactCont\");\n\n    let contactCont = createDiv;\n    contactCont.id = \"contactCont\";\n    main.appendChild(contactCont);\n\n    let lorem = createDiv;\n    lorem.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit\";\n    getCont.appendChild(lorem);\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome() {\n    const main = document.getElementById(\"content\");\n    const createDiv = document.createElement(\"div\");\n\n    const homePgCont = document.createElement(\"div\");\n    \n    homePgCont.id = \"homePgCont\";\n    homePgCont.classList.add(\"homePgCont\");\n    \n    let title = createDiv;\n    title.id = \"title\";\n    title.classList.add(\"title\");\n    title.textContent = \"Attack on Steak\";\n\n    main.appendChild(homePgCont);\n    homePgCont.appendChild(title);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst main = document.getElementById(\"content\");\n\nfunction home() {\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_0__.renderTabs)();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n}\n\nhome();\n\nconst tabNav = document.getElementById(\"tabNav\");\n\ntabNav.addEventListener(\"click\", (e) => {\n    let targetTab = e.target.textContent;\n    console.log(targetTab);\n    if (targetTab == \"home\") {\n        main.removeChild(main.lastElementChild);\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\n        console.log(\"rendered:home\")\n    } if (targetTab == \"menu\") {\n        main.removeChild(main.lastElementChild);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)();\n        console.log(\"rendered:menu\")\n    } if (targetTab == \"contact\") {\n        main.removeChild(main.lastElementChild);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.renderContact)();\n        console.log(\"rendered:contact\")\n    }\n}\n);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\nfunction renderMenu() {\n    const main = document.getElementById(\"content\");\n    const createDiv = document.createElement(\"div\");\n\n    let menuPgCont = createDiv;\n    menuPgCont.id = \"menuPgCont\";\n    menuPgCont.classList.add(\"menuPgCont\");\n    main.appendChild(menuPgCont);\n\n    const menuItems = [\n        {\n            title: \"Mikasa\",\n            description: \"Filet Mignon\",\n            price: \"$49.99\"\n        },\n        {\n            title: \"Erwin Dancho\",\n            description: \"Commander's Steak\",\n            price: \"$99.99\"\n        },\n        {\n            title: \"Annie's Cut\",\n            description: \"Crystalized Salt\",\n            price: \"$49.99\"\n        },\n        {\n            title: \"Eren Special\",\n            description: \"Founding Steak: 2,000 Year Dry Aged\",\n            price: \"$199.99\"\n        }\n    ];\n\n    function createElementsFromArray(objectsArray, targetDivId) {\n        const targetDiv = document.getElementById(targetDivId);\n        \n        objectsArray.forEach(object => {\n          const element = document.createElement(\"div\");\n          \n          Object.keys(object).forEach(key => {\n            const valueElement = document.createElement(\"span\");\n            valueElement.textContent = object[key];\n            element.id = \"itemCont\";\n            element.appendChild(valueElement);\n          });\n          \n          targetDiv.appendChild(element);\n        });\n      }\n\n    createElementsFromArray(menuItems, \"menuPgCont\");\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTabs\": () => (/* binding */ renderTabs)\n/* harmony export */ });\nfunction renderTabs() {\n\n    const main = document.getElementById(\"content\");\n    const tabs = [\"home\", \"menu\", \"contact\"];\n\n\n    let tabNav = document.createElement(\"div\");\n    tabNav.id = \"tabNav\";\n    tabNav.classList.add(\"tabNav\");\n    main.appendChild(tabNav);\n\n    for (let i = 0; i < tabs.length; i++) {\n        let createDiv = document.createElement(\"div\");\n        createDiv.id = tabs[i];\n        createDiv.classList.add(tabs[i]);\n        createDiv.textContent = tabs[i];\n        tabNav.appendChild(createDiv);\n        }\n\n    }\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabs.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;