const Board = require("./board");
const MovingObjects = require('./moving_objects');
const Game = require('./game');
const Interface = require('./interface')


document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementById("game-canvas");
  let e = canvasElement.addEventListener("keypress", console.log("hi"));
  var ctx = canvasElement.getContext("2d");
  canvasElement.width = 800;
  canvasElement.height = 800;


  const game = new Game;
  const view = new Interface(game, ctx);
  view.start();
  // const board = new Board;
  // board.generateBoard();
  // board.draw(ctx);
  //
  // const pacman = new MovingObjects(1, 1, "yellow", 15);
  // pacman.draw(ctx);
});

//
// const canvasElement = document.getElementById("game-canvas");
// console.log(canvasElement);
// var ctx = canvasElement.getContext("2d");
// canvasElement.width = 800;
// canvasElement.height = 800;
// ctx.fillStyle = "red";
// ctx.fillRect(0,0,25,25);
//
// const board = new Board;
// board.draw(ctx);
