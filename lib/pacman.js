const Board = require("./board");

document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementById("game-canvas");
  console.log(canvasElement);
  var ctx = canvasElement.getContext("2d");
  canvasElement.width = 800;
  canvasElement.height = 800;


  const board = new Board;
  board.generateBoard();
  board.draw(ctx);
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
