const Game = require('./game');
const Interface = require('./interface')


document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementById("game-canvas");

  var ctx = canvasElement.getContext("2d");
  canvasElement.width = 800;
  canvasElement.height = 800;


  const game = new Game;
  const view = new Interface(game, ctx);
  document.addEventListener("keydown", function(e) {
    view.keyPressed(e);
  });

  view.start();
});
