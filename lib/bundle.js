/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/pacman.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/board.js":
/*!**********************!*\
  !*** ./lib/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Board {\n  constructor() {\n    this.board = [];\n  }\n\n  generateBoard() {\n    let entireBoard = [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0],\n      [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],\n      [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],\n      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n    ];\n\n    // let entireBoard = [];\n    // for (let j = 0; j < 16; j++) {\n    //   let row = [];\n    //   for (var i = 0; i < 16; i++) {\n    //     let el = Math.random();\n    //     if (el >= 0.5) {\n    //       el = 1;\n    //     } else {\n    //       el = 0;\n    //     }\n    //     row.push(el);\n    //   }\n    //   entireBoard.push(row);\n    // }\n    this.board = entireBoard;\n  }\n\n  draw(ctx) {\n    console.log(this.board);\n    for (let i = 0; i < this.board.length; i++) {\n      for (let j = 0; j < this.board[i].length; j++) {\n        if ( (i === 7 && j === 8) || (i === 8 && j === 8) || (i === 7 && j === 7) || (i === 8 && j === 7)) {\n          ctx.fillStyle = \"#FF9999\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n        } else if (this.board[i][j] === 0) {\n          ctx.fillStyle = \"#0000FF\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n        } else if (this.board[i][j] === 1){\n          ctx.fillStyle = \"#000000\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n          ctx.fillStyle = \"#ffffff\";\n          ctx.beginPath();\n          ctx.arc(j * 50 + 25, i * 50 + 25, 5, 0, 2 * Math.PI);\n          ctx.fill();\n        } else {\n          ctx.fillStyle = \"#000000\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n        }\n      }\n    }\n  }\n\n\n\n}\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./lib/board.js?");

/***/ }),

/***/ "./lib/pacman.js":
/*!***********************!*\
  !*** ./lib/pacman.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./lib/board.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasElement = document.getElementById(\"game-canvas\");\n  console.log(canvasElement);\n  var ctx = canvasElement.getContext(\"2d\");\n  canvasElement.width = 800;\n  canvasElement.height = 800;\n\n\n  const board = new Board;\n  board.generateBoard();\n  board.draw(ctx);\n});\n\n//\n// const canvasElement = document.getElementById(\"game-canvas\");\n// console.log(canvasElement);\n// var ctx = canvasElement.getContext(\"2d\");\n// canvasElement.width = 800;\n// canvasElement.height = 800;\n// ctx.fillStyle = \"red\";\n// ctx.fillRect(0,0,25,25);\n//\n// const board = new Board;\n// board.draw(ctx);\n\n\n//# sourceURL=webpack:///./lib/pacman.js?");

/***/ })

/******/ });