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

eval("class Board {\n  constructor() {\n    this.board = [];\n  }\n\n  generateBoard() {\n    let entireBoard = [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0],\n      [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],\n      [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],\n      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n    ];\n\n    this.board = entireBoard;\n  }\n\n  eatenDots(posI, posJ) {\n    this.board[posJ][posI] = 2;\n  }\n\n  hasWon() {\n    for (var i = 0; i < this.board.length; i++) {\n      for (var j = 0; j < this.board[i].length; j++) {\n        if (this.board[i][j] === 1) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n\n  validMove(nextMoveX, nextMoveY) {\n    if (this.board[nextMoveY][nextMoveX] === 0 || nextMoveX > 15 || nextMoveX < 0 || nextMoveY < 0 || nextMoveY > 15)  {\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  draw(ctx) {\n    for (let i = 0; i < this.board.length; i++) {\n      for (let j = 0; j < this.board[i].length; j++) {\n        if ( (i === 7 && j === 8) || (i === 8 && j === 8) || (i === 7 && j === 7) || (i === 8 && j === 7)) {\n          ctx.fillStyle = \"#FF9999\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n        } else if (this.board[i][j] === 0) {\n          ctx.fillStyle = \"#0000FF\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n        } else if (this.board[i][j] === 1){\n          ctx.fillStyle = \"#000000\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n          ctx.fillStyle = \"#ffffff\";\n          ctx.beginPath();\n          ctx.arc(j * 50 + 25, i * 50 + 25, 5, 0, 2 * Math.PI);\n          ctx.fill();\n        } else {\n          ctx.fillStyle = \"#000000\";\n          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);\n        }\n      }\n    }\n  }\n\n\n\n}\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./lib/board.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Pacman = __webpack_require__(/*! ./pac */ \"./lib/pac.js\");\nconst Ghosts = __webpack_require__(/*! ./ghosts */ \"./lib/ghosts.js\");\nconst Board = __webpack_require__(/*! ./board */ \"./lib/board.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board;\n    this.board.generateBoard();\n    this.pacman = new Pacman(1, 1, \"yellow\", 15);\n    this.g1 = new Ghosts(7, 7, \"green\", 15);\n    this.g2 = new Ghosts(7, 8, \"green\", 15);\n    this.g3 = new Ghosts(8, 7, \"green\", 15);\n    this.g4 = new Ghosts(8, 8, \"green\", 15);\n\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, 800, 800);\n    this.board.draw(ctx);\n    this.pacman.draw(ctx);\n    this.g1.draw(ctx);\n    this.g2.draw(ctx);\n    this.g3.draw(ctx);\n    this.g4.draw(ctx);\n\n  }\n\n  randomMove(num) {\n    if (num < 0.33) {\n      return -1;\n    } else if (num > 0.33 && num < 0.66) {\n      return 0;\n    } else {\n      return 1;\n    }\n  }\n\n  step(timeDelta) {\n    this.board.eatenDots(this.pacman.oPosX, this.pacman.oPosY)\n    if (this.board.hasWon()) {\n      window.alert(\"Congrats, you won!\");\n    }\n    let randX = Math.random();\n    let randY = Math.random();\n    let x = this.randomMove(randX);\n    let y = this.randomMove(randY);\n    if (x != 0) {\n      y = 0;\n    }\n\n    if (this.board.validMove(this.pacman.oPosX + x, this.pacman.oPosY + y)) {\n      this.pacman.move(x, y);\n    }\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/ghosts.js":
/*!***********************!*\
  !*** ./lib/ghosts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObjects = __webpack_require__(/*! ./moving_objects */ \"./lib/moving_objects.js\");\n\nclass Ghosts extends MovingObjects {\n  constructor(posX, posY, color, radius, game, vel) {\n    super(posX, posY, color, radius, game, vel);\n  }\n}\n\nmodule.exports = Ghosts;\n\n\n//# sourceURL=webpack:///./lib/ghosts.js?");

/***/ }),

/***/ "./lib/interface.js":
/*!**************************!*\
  !*** ./lib/interface.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Interface {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n  }\n\n\n\n  start() {\n    // this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(100000/60);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\nInterface.MOVES = {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0],\n};\n\nmodule.exports = Interface;\n\n\n//# sourceURL=webpack:///./lib/interface.js?");

/***/ }),

/***/ "./lib/moving_objects.js":
/*!*******************************!*\
  !*** ./lib/moving_objects.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./lib/board.js\");\nclass MovingObjects {\n\n  constructor(posX, posY, color, radius, game, vel) {\n    this.oPosX = posX;\n    this.oPosY = posY\n    this.posX = posX * 50 + 25;\n\t  this.posY = posY * 50 + 25;\n    this.color = color;\n    this.radius = radius;\n    this.game = game;\n    this.vel = vel;\n  }\n\n  move(nextMoveX, nextMoveY) {\n    this.oPosX = this.oPosX + nextMoveX;\n    this.oPosY = this.oPosY + nextMoveY;\n    this.posX = this.oPosX * 50 + 25;\n    this.posY = this.oPosY * 50 + 25;\n  }\n\n  collideWith(otherObj) {\n    //??\n  }\n\n  isCollidedWith(otherObj) {\n    return (Math.pow(this.posX, 2) + Math.pow(this.posY, 2)) / Math.pow(this.posX + otherObj.posY, 2) > (this.radius + otherObj.radius);\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(\n      this.posX, this.posY, this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n  }\n}\n\nmodule.exports = MovingObjects;\n\n\n//# sourceURL=webpack:///./lib/moving_objects.js?");

/***/ }),

/***/ "./lib/pac.js":
/*!********************!*\
  !*** ./lib/pac.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObjects = __webpack_require__(/*! ./moving_objects */ \"./lib/moving_objects.js\");\n\nclass Pacman extends MovingObjects {\n  constructor(posX, posY, color, radius, game, vel) {\n    super(posX, posY, color, radius, game, vel);\n  }\n\n}\n\nmodule.exports = Pacman;\n\n\n//# sourceURL=webpack:///./lib/pac.js?");

/***/ }),

/***/ "./lib/pacman.js":
/*!***********************!*\
  !*** ./lib/pacman.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./lib/board.js\");\nconst MovingObjects = __webpack_require__(/*! ./moving_objects */ \"./lib/moving_objects.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./lib/game.js\");\nconst Interface = __webpack_require__(/*! ./interface */ \"./lib/interface.js\")\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasElement = document.getElementById(\"game-canvas\");\n  let e = canvasElement.addEventListener(\"keypress\", console.log(\"hi\"));\n  var ctx = canvasElement.getContext(\"2d\");\n  canvasElement.width = 800;\n  canvasElement.height = 800;\n\n\n  const game = new Game;\n  const view = new Interface(game, ctx);\n  view.start();\n  // const board = new Board;\n  // board.generateBoard();\n  // board.draw(ctx);\n  //\n  // const pacman = new MovingObjects(1, 1, \"yellow\", 15);\n  // pacman.draw(ctx);\n});\n\n//\n// const canvasElement = document.getElementById(\"game-canvas\");\n// console.log(canvasElement);\n// var ctx = canvasElement.getContext(\"2d\");\n// canvasElement.width = 800;\n// canvasElement.height = 800;\n// ctx.fillStyle = \"red\";\n// ctx.fillRect(0,0,25,25);\n//\n// const board = new Board;\n// board.draw(ctx);\n\n\n//# sourceURL=webpack:///./lib/pacman.js?");

/***/ })

/******/ });