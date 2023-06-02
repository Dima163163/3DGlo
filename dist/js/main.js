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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_formValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/formValidation */ \"./modules/formValidation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"22 october 2021\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_formValidation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n\r\n  const validateNumbers = function () {\r\n    this.value = this.value.replace(/\\D/g, \"\");\r\n  };\r\n\r\n  [calcSquare, calcCount, calcDay].forEach((input) => {\r\n    input.addEventListener(\"input\", validateNumbers);\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/formValidation.js":
/*!***********************************!*\
  !*** ./modules/formValidation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst formValidation = () => {\r\n  const formNameSelectors = document.querySelectorAll(\".form-name\");\r\n  const formNameTopSelector = document.querySelector(\".top-form\");\r\n  const messageSelector = document.querySelector(\".mess\");\r\n  const emailSelectors = document.querySelectorAll(\".form-email\");\r\n  const phoneSelectors = document.querySelectorAll(\".form-phone\");\r\n\r\n  // const validtionMessage = function () {\r\n  //   this.value = this.value.replace(/^[a-zA-Z0-9]+$/, \"\");\r\n  // };\r\n\r\n  const validtionMessage = function () {\r\n    const message = this.value;\r\n    const messagePattern = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i;\r\n    const isValid = messagePattern.test(message);\r\n    if (!isValid) {\r\n      this.setCustomValidity(\"Неправильный формат вода.Только кириллица.\");\r\n    } else {\r\n      this.setCustomValidity(\"\");\r\n    }\r\n    this.reportValidity();\r\n  };\r\n\r\n  const validationEmail = function () {\r\n    const email = this.value;\r\n    const emailPattern = /[\\-\\.\\w\\_\\.\\!\\~\\*\\']+@([\\w]+\\.)+[\\w]+/gi;\r\n    const isValid = emailPattern.test(email);\r\n    if (!isValid) {\r\n      this.setCustomValidity(\"Неправильный формат email\");\r\n    } else {\r\n      this.setCustomValidity(\"\");\r\n    }\r\n\r\n    this.reportValidity();\r\n  };\r\n\r\n  const validationPhone = function () {\r\n    const phone = this.value;\r\n    console.log(phone);\r\n    const phonePattern = /\\d{1}\\(\\d{3}\\)\\d{3}\\-\\d{2}\\-\\d{2}/g;\r\n    const isValid = phonePattern.test(phone);\r\n    console.log(isValid);\r\n    if (!isValid) {\r\n      this.setCustomValidity(\"Формат телефона в виде: X(XXX)XXX-XX-XX\");\r\n    } else {\r\n      this.setCustomValidity(\"\");\r\n    }\r\n\r\n    this.reportValidity();\r\n  };\r\n\r\n  messageSelector.addEventListener(\"input\", validtionMessage);\r\n\r\n  formNameSelectors.forEach((form) =>\r\n    form.addEventListener(\"input\", validtionMessage)\r\n  );\r\n\r\n  formNameTopSelector.addEventListener(\"input\", validtionMessage);\r\n\r\n  emailSelectors.forEach((email) =>\r\n    email.addEventListener(\"input\", validationEmail)\r\n  );\r\n\r\n  phoneSelectors.forEach((phone) => {\r\n    phone.addEventListener(\"input\", validationPhone);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidation);\r\n\n\n//# sourceURL=webpack:///./modules/formValidation.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const blockMain = document.querySelector(\"main\");\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const menuItemsLinks = menu.querySelectorAll('ul>li>a[href*=\"#\"]');\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  const smoothScroll = (target, duration) => {\r\n    //текущая позиция в пикселях\r\n    let currentY = window.pageYOffset;\r\n\r\n    //отслеживает позицию Y в пикселях\r\n    target = document.getElementById(target);\r\n\r\n    let targetYPos = target.offsetTop;\r\n\r\n    //оставшееся расстояние до цели в пикселях\r\n    let distance = targetYPos - currentY;\r\n\r\n    let start = null;\r\n\r\n    const animation = (timestamp) => {\r\n      if (!start) start = timestamp;\r\n\r\n      let timeElapsed = timestamp - start;\r\n\r\n      let run = ease(timeElapsed, currentY, distance, duration);\r\n\r\n      window.scrollTo(0, run);\r\n      if (timeElapsed < duration) {\r\n        requestAnimationFrame(animation);\r\n      } else {\r\n        cancelAnimationFrame(animationID);\r\n      }\r\n    };\r\n\r\n    let animationID = requestAnimationFrame(animation);\r\n  };\r\n\r\n  let ease = (timeElapsed, currentY, distance, duration) => {\r\n    timeElapsed /= duration / 2;\r\n    if (timeElapsed < 1) {\r\n      return (\r\n        (distance / 2) * timeElapsed * timeElapsed * timeElapsed + currentY\r\n      );\r\n    }\r\n    timeElapsed -= 2;\r\n    return (\r\n      (distance / 2) * (timeElapsed * timeElapsed * timeElapsed + 2) + currentY\r\n    );\r\n  };\r\n\r\n  const scrollAnimation = function (event) {\r\n    event.preventDefault();\r\n    let scrollTarget = event.currentTarget.getAttribute(\"href\").slice(1);\r\n    console.log(\"scrollTarget\", scrollTarget);\r\n    smoothScroll(scrollTarget, 1000);\r\n  };\r\n\r\n  blockMain.addEventListener(\"click\", (e) => {\r\n    if (menu.classList.contains(\"active-menu\")) {\r\n      if (!e.target.closest(\".active-menu\")) {\r\n        handleMenu();\r\n      }\r\n    }\r\n\r\n    if (e.target.closest(\".menu\")) {\r\n      handleMenu();\r\n    }\r\n    const serveceBtn = e.target.closest(\"a\");\r\n    if (serveceBtn) {\r\n      serveceBtn.addEventListener(\"click\", scrollAnimation);\r\n    }\r\n  });\r\n\r\n  menu.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"close-btn\")) {\r\n      menu.classList.toggle(\"active-menu\");\r\n    }\r\n    if (e.target.closest(\"a\")) {\r\n      menuItemsLinks.forEach((item) => {\r\n        item.addEventListener(\"click\", scrollAnimation);\r\n      });\r\n    }\r\n  });\r\n\r\n  // document.addEventListener(\"click\", (e) => {\r\n  //   const serveceBtn = e.target.closest('a[href=\"#service-block\"]');\r\n  //   if (serveceBtn) {\r\n  //     serveceBtn.addEventListener(\"click\", scrollAnimation);\r\n  //   }\r\n\r\n  //   if (menu.classList.contains(\"active-menu\")) {\r\n  //     if (!e.target.closest(\".active-menu\")) {\r\n  //       handleMenu();\r\n  //     }\r\n  //   }\r\n\r\n  //   if (e.target.closest(\".menu\")) {\r\n  //     handleMenu();\r\n  //   }\r\n\r\n  //   if (e.target.classList.contains(\"close-btn\")) {\r\n  //     menu.classList.toggle(\"active-menu\");\r\n  //   }\r\n  //   if (e.target.closest(\"a\")) {\r\n  //     menuItemsLinks.forEach((item) => {\r\n  //       item.addEventListener(\"click\", scrollAnimation);\r\n  //     });\r\n  //   }\r\n  // });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  const modalContent = modal.querySelector(\".popup-content\");\r\n\r\n  const width = document.documentElement.clientWidth;\r\n\r\n  let count = 0;\r\n  let idInvertal;\r\n\r\n  const modalAnimation = () => {\r\n    if (width > 768) {\r\n      count++;\r\n\r\n      idInvertal = requestAnimationFrame(modalAnimation);\r\n\r\n      if (count <= 50) {\r\n        modal.style.display = \"block\";\r\n        modalContent.style.transform = `translateX(-${count}px)`;\r\n      } else {\r\n        cancelAnimationFrame(idInvertal);\r\n        modalContent.style = \"\";\r\n        count = 0;\r\n      }\r\n    } else {\r\n      modal.style.display = \"block\";\r\n    }\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", modalAnimation);\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n  const sliderBlock = document.querySelector(\".portfolio-content\");\n  const slides = document.querySelectorAll(\".portfolio-item\");\n  const dotsList = document.querySelector(\".portfolio-dots\");\n  const timerInterval = 2000;\n\n  let dots;\n\n  let currentSlide = 0;\n  let interval;\n\n  let currentDot = 0;\n\n  const createDots = () => {\n    slides.forEach((slide, index) => {\n      if (currentDot <= index) {\n        let dots = document.createElement(\"li\");\n        if (index === 0) {\n          dots.classList.add(\"dot\");\n          dots.classList.add(\"dot-active\");\n        } else {\n          dots.classList.add(\"dot\");\n        }\n        dotsList.append(dots);\n      }\n    });\n    dots = document.querySelectorAll(\".dot\");\n  };\n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\");\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  };\n\n  const startSlide = (timer = 1500) => {\n    console.log(dots);\n    interval = setInterval(autoSlide, timer);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  sliderBlock.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\n      return;\n    }\n    prevSlide(dots, currentSlide, \"dot-active\");\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n\n    if (e.target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (e.target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (e.target.classList.contains(\"dot\")) {\n      dots.forEach((dot, index) => {\n        if (e.target === dot) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  });\n\n  sliderBlock.addEventListener(\n    \"mouseenter\",\n    (e) => {\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\n        stopSlide();\n      }\n    },\n    true\n  );\n\n  sliderBlock.addEventListener(\n    \"mouseleave\",\n    (e) => {\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\n        startSlide(timerInterval);\n      }\n    },\n    true\n  );\n\n  createDots();\n  startSlide(timerInterval);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      tabs.forEach((tab, index) => {\r\n        const tabBtn = e.target.closest(\".service-header-tab\");\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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