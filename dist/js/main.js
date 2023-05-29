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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_formValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidation */ \"./modules/formValidation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"22 october 2021\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValidation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\n  const calcSquare = document.querySelector(\".calc-square\");\n  const calcCount = document.querySelector(\".calc-count\");\n  const calcDay = document.querySelector(\".calc-day\");\n\n  const validateNumbers = function () {\n    this.value = this.value.replace(/\\D/g, \"\");\n  };\n\n  [calcSquare, calcCount, calcDay].forEach((input) => {\n    input.addEventListener(\"input\", validateNumbers);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/formValidation.js":
/*!***********************************!*\
  !*** ./modules/formValidation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidation = () => {\n  const formNameSelectors = document.querySelectorAll(\".form-name\");\n  const formNameTopSelector = document.querySelector(\".top-form\");\n  const messageSelector = document.querySelector(\".mess\");\n  const emailSelectors = document.querySelectorAll(\".form-email\");\n  const phoneSelectors = document.querySelectorAll(\".form-phone\");\n\n  // const validtionMessage = function () {\n  //   this.value = this.value.replace(/^[a-zA-Z0-9]+$/, \"\");\n  // };\n\n  const validtionMessage = function () {\n    const message = this.value;\n    const messagePattern = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i;\n    const isValid = messagePattern.test(message);\n    if (!isValid) {\n      this.setCustomValidity(\"Неправильный формат вода.Только кириллица.\");\n    } else {\n      this.setCustomValidity(\"\");\n    }\n    this.reportValidity();\n  };\n\n  const validationEmail = function () {\n    const email = this.value;\n    const emailPattern = /[\\-\\.\\w\\_\\.\\!\\~\\*\\']+@([\\w]+\\.)+[\\w]+/gi;\n    const isValid = emailPattern.test(email);\n    if (!isValid) {\n      this.setCustomValidity(\"Неправильный формат email\");\n    } else {\n      this.setCustomValidity(\"\");\n    }\n\n    this.reportValidity();\n  };\n\n  const validationPhone = function () {\n    const phone = this.value;\n    console.log(phone);\n    const phonePattern = /\\d{1}\\(\\d{3}\\)\\d{3}\\-\\d{2}\\-\\d{2}/g;\n    const isValid = phonePattern.test(phone);\n    console.log(isValid);\n    if (!isValid) {\n      this.setCustomValidity(\"Формат телефона в виде: X(XXX)XXX-XX-XX\");\n    } else {\n      this.setCustomValidity(\"\");\n    }\n\n    this.reportValidity();\n  };\n\n  messageSelector.addEventListener(\"input\", validtionMessage);\n\n  formNameSelectors.forEach((form) =>\n    form.addEventListener(\"input\", validtionMessage)\n  );\n\n  formNameTopSelector.addEventListener(\"input\", validtionMessage);\n\n  emailSelectors.forEach((email) =>\n    email.addEventListener(\"input\", validationEmail)\n  );\n\n  phoneSelectors.forEach((phone) => {\n    phone.addEventListener(\"input\", validationPhone);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidation);\n\n\n//# sourceURL=webpack:///./modules/formValidation.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n  const anchors = menu.querySelectorAll('ul>li>a[href*=\"#\"]');\r\n  const serviceBlock = document.querySelector('a[href*=\"#\"]');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  // const scrollIntoView = function (event) {\r\n  //   event.preventDefault();\r\n  //   const blockID = event.currentTarget.getAttribute(\"href\");\r\n  //   const blockElem = document.querySelector(\"\" + blockID);\r\n  //   console.log(blockElem);\r\n  //   blockElem.scrollIntoView({\r\n  //     behavior: \"smooth\",\r\n  //     block: \"start\",\r\n  //   });\r\n  // };\r\n\r\n  const smoothScroll = (target, duration) => {\r\n    //текущая позиция в пикселях\r\n    let currentY = window.pageYOffset;\r\n\r\n    //отслеживает позицию Y в пикселях\r\n    target = document.getElementById(target);\r\n\r\n    let targetYPos = target.offsetTop;\r\n\r\n    //оставшееся расстояние до цели в пикселях\r\n    let distance = targetYPos - currentY;\r\n\r\n    //отслеживание времни\r\n    let start = null;\r\n\r\n    const animation = (timestamp) => {\r\n      if (!start) start = timestamp;\r\n\r\n      let timeElapsed = timestamp - start;\r\n\r\n      let run = ease(timeElapsed, currentY, distance, duration);\r\n\r\n      window.scrollTo(0, run);\r\n      if (timeElapsed < duration) {\r\n        requestAnimationFrame(animation);\r\n      } else {\r\n        cancelAnimationFrame(animationID);\r\n      }\r\n    };\r\n\r\n    let animationID = requestAnimationFrame(animation);\r\n  };\r\n\r\n  let ease = (timeElapsed, currentY, distance, duration) => {\r\n    timeElapsed /= duration / 2;\r\n    if (timeElapsed < 1) {\r\n      return (\r\n        (distance / 2) * timeElapsed * timeElapsed * timeElapsed + currentY\r\n      );\r\n    }\r\n    timeElapsed -= 2;\r\n    return (\r\n      (distance / 2) * (timeElapsed * timeElapsed * timeElapsed + 2) + currentY\r\n    );\r\n  };\r\n\r\n  const scrollAnimation = function (event) {\r\n    event.preventDefault();\r\n    let scrollTarget = event.currentTarget.getAttribute(\"href\").slice(1);\r\n    console.log(\"scrollTarget\", scrollTarget);\r\n    smoothScroll(scrollTarget, 1000);\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", handleMenu)\r\n  );\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", scrollAnimation)\r\n  );\r\n\r\n  serviceBlock.addEventListener(\"click\", scrollAnimation);\r\n\r\n  // anchors.forEach((anchor) => {\r\n  //   anchor.addEventListener(\"click\", scrollIntoView);\r\n  // });\r\n  // serviceBlock.addEventListener(\"click\", scrollIntoView);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n\r\n  const width = document.documentElement.clientWidth;\r\n\r\n  let count = 0;\r\n  let idInvertal;\r\n\r\n  const modalAnimation = () => {\r\n    if (width > 768) {\r\n      count++;\r\n\r\n      idInvertal = requestAnimationFrame(modalAnimation);\r\n\r\n      if (count <= 50) {\r\n        modal.style.display = \"block\";\r\n        modalContent.style.transform = `translateX(-${count}px)`;\r\n      } else {\r\n        cancelAnimationFrame(idInvertal);\r\n        modalContent.style = \"\";\r\n        count = 0;\r\n      }\r\n    } else {\r\n      modal.style.display = \"block\";\r\n    }\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", modalAnimation);\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  const divTime = document.querySelector(\".timer-action\");\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let hours = Math.floor(timeRemaining / 60 / 60);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n\n    if (hours < 10) {\n      hours = \"0\" + hours;\n    }\n    if (minutes < 10) {\n      minutes = \"0\" + minutes;\n    }\n    if (seconds < 10) {\n      seconds = \"0\" + seconds;\n    }\n\n    return {\n      timeRemaining,\n      hours,\n      minutes,\n      seconds,\n    };\n  };\n\n  // const updateClock = () => {\n  //   let getTime = getTimeRemaining();\n  //   timerHours.textContent = getTime.hours;\n  //   timerMinutes.textContent = getTime.minutes;\n  //   timerSeconds.textContent = getTime.seconds;\n\n  //   if (getTime.timeRemaining > 0) {\n  //     setInterval(updateClock, 1000);\n  //   }\n  // };\n\n  // updateClock();\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n    timerHours.textContent = getTime.hours;\n\n    timerMinutes.textContent = getTime.minutes;\n\n    timerSeconds.textContent = getTime.seconds;\n  };\n\n  const timerInterval = () => {\n    let getTime = getTimeRemaining();\n    if (getTime.timeRemaining > 0) {\n      setInterval(() => {\n        updateClock();\n      }, 1000);\n    }\n    if (getTime.timeRemaining < 0) {\n      divTime.innerHTML = \"Акция закончилась\";\n    }\n  };\n\n  timerInterval();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;