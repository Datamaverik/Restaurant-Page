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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePg_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePg.mjs */ \"./src/homePg.mjs\");\n/* harmony import */ var _menuPg_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPg.mjs */ \"./src/menuPg.mjs\");\n/* harmony import */ var _aboutPg_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutPg.mjs */ \"./src/aboutPg.mjs\");\n\n\n\n\nconst container = document.querySelector(\".container\");\n\n//Creating header\nconst header = document.createElement(\"div\");\nheader.classList.add(\"header\");\n\n//Adding title text\nconst title1 = document.createElement(\"h1\");\ntitle1.classList.add(\"title\");\ntitle1.id = \"first\";\ntitle1.textContent = \"The Goodwill\";\nconst title2 = document.createElement(\"h1\");\ntitle2.classList.add(\"title\");\ntitle2.id = \"second\";\ntitle2.textContent = \"DINER\";\nconst titleGroup = document.createElement(\"div\");\ntitleGroup.classList.add(\"titleGroup\");\ntitleGroup.appendChild(title1);\ntitleGroup.appendChild(title2);\nheader.appendChild(titleGroup);\n\n//Adding navigation buttons\nconst btnGroup = document.createElement(\"div\");\nbtnGroup.classList.add(\"btnGroup\");\n\n//Home button and functionality\nconst homeBtn = document.createElement(\"button\");\nhomeBtn.classList.add(\"navBtn\");\nhomeBtn.classList.add(\"selectedBtn\");\nhomeBtn.textContent = \"Home\";\n\n//Menu button and functionality\nconst menuBtn = document.createElement(\"button\");\nmenuBtn.classList.add(\"navBtn\");\nmenuBtn.textContent = \"Menu\";\n\n//About button and functionality\nconst aboutBtn = document.createElement(\"button\");\naboutBtn.classList.add(\"navBtn\");\naboutBtn.textContent = \"About\";\n\nbtnGroup.appendChild(homeBtn);\nbtnGroup.appendChild(menuBtn);\nbtnGroup.appendChild(aboutBtn);\nheader.appendChild(btnGroup);\n\n//Creating body\nconst body = document.createElement(\"div\");\nbody.classList.add(\"mainBody\");\n\n//Creating the footer\nconst footer = document.createElement(\"div\");\nfooter.classList.add(\"footer\");\nfooter.textContent = \"Copyright @ 2024 Datamaverik\";\nconst githublink = document.createElement(\"a\");\ngithublink.classList.add(\"gitLink\");\ngithublink.href = \"https://github.com/Datamaverik\";\ngithublink.target = \"blank\";\nfooter.appendChild(githublink);\n\ncontainer.appendChild(header);\ncontainer.appendChild(body);\ncontainer.appendChild(footer);\n\nwindow.onload = () => {\n  (0,_homePg_mjs__WEBPACK_IMPORTED_MODULE_0__.loadHome)(body);\n  if (aboutBtn.classList.contains(\"selectedBtn\"))\n    aboutBtn.classList.remove(\"selectedBtn\");\n  if (menuBtn.classList.contains(\"selectedBtn\"))\n    menuBtn.classList.remove(\"selectedBtn\");\n\n  homeBtn.classList.add(\"selectedBtn\");\n};\n\nhomeBtn.addEventListener(\"click\", () => {\n  (0,_homePg_mjs__WEBPACK_IMPORTED_MODULE_0__.loadHome)(body);\n  if (aboutBtn.classList.contains(\"selectedBtn\"))\n    aboutBtn.classList.remove(\"selectedBtn\");\n  if (menuBtn.classList.contains(\"selectedBtn\"))\n    menuBtn.classList.remove(\"selectedBtn\");\n\n  homeBtn.classList.add(\"selectedBtn\");\n});\n\nmenuBtn.addEventListener(\"click\", () => {\n  (0,_menuPg_mjs__WEBPACK_IMPORTED_MODULE_1__.loadMenu)(body);\n  if (aboutBtn.classList.contains(\"selectedBtn\"))\n    aboutBtn.classList.remove(\"selectedBtn\");\n  if (homeBtn.classList.contains(\"selectedBtn\"))\n    homeBtn.classList.remove(\"selectedBtn\");\n\n  menuBtn.classList.add(\"selectedBtn\");\n});\n\naboutBtn.addEventListener(\"click\", () => {\n  (0,_aboutPg_mjs__WEBPACK_IMPORTED_MODULE_2__.loadAbout)(body);\n  if (menuBtn.classList.contains(\"selectedBtn\"))\n    menuBtn.classList.remove(\"selectedBtn\");\n  if (homeBtn.classList.contains(\"selectedBtn\"))\n    homeBtn.classList.remove(\"selectedBtn\");\n\n  aboutBtn.classList.add(\"selectedBtn\");\n});\n\n//# sourceURL=webpack://restaurant-page/./src/script.js?");

/***/ }),

/***/ "./src/aboutPg.mjs":
/*!*************************!*\
  !*** ./src/aboutPg.mjs ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout(container) {\n  container.innerHTML = \"\";\n\n  const infoCont = document.createElement(\"div\");\n  infoCont.classList.add(\"infoCont\");\n\n  const contact = document.createElement(\"div\");\n  contact.id = \"contact-info\";\n  const contactPng = document.createElement(\"div\");\n  contactPng.id = \"contactPng\";\n  //add image\n  const contactNo = document.createElement(\"div\");\n  contactNo.textContent = \"7694201278\";\n  contact.appendChild(contactPng);\n  contact.appendChild(contactNo);\n  infoCont.appendChild(contact);\n\n  const social = document.createElement(\"div\");\n  social.id = \"social-info\";\n  const socialPng = document.createElement(\"a\");\n  socialPng.id = \"socialPng\";\n  socialPng.src = \"./assets/instagram-logo.png\";\n  socialPng.href =\n    \"https://www.instagram.com/art.shrey?igsh=MWlkcDJiM2w1NHFqZQ==\";\n  socialPng.target = \"blank\";\n  const socailId = document.createElement(\"div\");\n  socailId.textContent = \"Follow us Instagram\";\n  social.appendChild(socialPng);\n  social.appendChild(socailId);\n  infoCont.appendChild(social);\n\n  const location = document.createElement(\"div\");\n  location.id = \"location-info\";\n  const locationPng = document.createElement(\"div\");\n  locationPng.id = \"locationPng\";\n  //add image\n  const locationNo = document.createElement(\"div\");\n  locationNo.textContent =\n    \"Kailash Mess, infront of Garnet-B hostel, NIT Trichy, Tamil Nadu\";\n  location.appendChild(locationPng);\n  location.appendChild(locationNo);\n  infoCont.appendChild(location);\n\n  const mapImg = document.createElement(\"div\");\n  mapImg.id = \"mapImg\";\n  infoCont.appendChild(mapImg);\n\n  container.appendChild(infoCont);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/aboutPg.mjs?");

/***/ }),

/***/ "./src/homePg.mjs":
/*!************************!*\
  !*** ./src/homePg.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome(body) {\n  console.log(body);\n  body.innerHTML = \"\";\n  //Creaing the body\n  const article = document.createElement(\"div\");\n  article.classList.add(\"article\");\n  const para1 = document.createElement(\"p\");\n  para1.classList.add(\"para\");\n  const para2 = document.createElement(\"p\");\n  para2.classList.add(\"para\");\n\n  para1.textContent =\n    \"Indulge in the rich vibrant flavors of North India at our restaurant, where authenticity meets affordability.\";\n  para2.textContent =\n    \"We take pride in serving up traditional North Indian cuisine bursting with aromatic spices and mouthwatering dishes, all at prices that won't break the bank.\";\n  article.appendChild(para1);\n  article.appendChild(para2);\n\n  const centerImg = document.createElement(\"div\");\n  centerImg.classList.add('centerImg');\n  article.appendChild(centerImg);\n  const entTxt = document.createElement(\"div\");\n  entTxt.id = \"endTxt\";\n  entTxt.textContent = \"Order online or visit us\";\n  article.appendChild(entTxt);\n  body.appendChild(article);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/homePg.mjs?");

/***/ }),

/***/ "./src/menuPg.mjs":
/*!************************!*\
  !*** ./src/menuPg.mjs ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _utilityFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilityFunctions.mjs */ \"./src/utilityFunctions.mjs\");\n\n\nconst MenuList = [\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n  {\n    dish: \"Palak Paneer\",\n    price: 259,\n    desc: \" A delightful blend of fresh spinach and soft paneer cubes, simmered in a creamy curry infused with aromatic spices. A beloved vegetarian classic from North India, offering a rich, flavorful experience for your palate.\",\n  },\n];\n\nfunction loadMenu(body) {\n  body.innerHTML = \"\";\n  //Making the menu card container\n  const cardCont = document.createElement(\"div\");\n  cardCont.classList.add(\"cardCont\");\n\n  MenuList.forEach((menu) => {\n    (0,_utilityFunctions_mjs__WEBPACK_IMPORTED_MODULE_0__.makeMenuCard)(\n      cardCont,\n      menu.dish,\n      menu.price,\n      menu.desc,\n      \"/src/assets/palak-paneer.jpg\"\n    );\n  });\n\n  body.appendChild(cardCont);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPg.mjs?");

/***/ }),

/***/ "./src/utilityFunctions.mjs":
/*!**********************************!*\
  !*** ./src/utilityFunctions.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMenuCard: () => (/* binding */ makeMenuCard)\n/* harmony export */ });\nfunction makeMenuCard(container, dish, price, description, url) {\n  const cardBody = document.createElement(\"div\");\n  cardBody.classList.add(\"cardBody\");\n\n  const imgCont = document.createElement(\"div\");\n  imgCont.classList.add(\"imgCont\");\n  imgCont.style.backgroundImage = `url(${url})`;\n\n  const titleCont = document.createElement(\"div\");\n  titleCont.classList.add(\"dishTitle\");\n  const dishName = document.createElement(\"h1\");\n  dishName.textContent = dish;\n  const pricetag = document.createElement(\"h1\");\n  pricetag.textContent = price;\n  const desc = document.createElement(\"p\");\n  desc.textContent = description;\n\n  titleCont.appendChild(dishName);\n  titleCont.appendChild(pricetag);\n\n  cardBody.appendChild(imgCont);\n  cardBody.appendChild(titleCont);\n  cardBody.appendChild(desc);\n\n  container.appendChild(cardBody);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/utilityFunctions.mjs?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;