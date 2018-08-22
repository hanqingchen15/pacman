const Pacman = require("./pac");
const Ghosts = require("./ghosts");
const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board;
    this.board.generateBoard();
    this.pacman = new Pacman(1, 1, "yellow", 15);
    this.g1 = new Ghosts(7, 7, "green", 15);
    this.g2 = new Ghosts(7, 8, "green", 15);
    this.g3 = new Ghosts(8, 7, "green", 15);
    this.g4 = new Ghosts(8, 8, "green", 15);

  }

  draw(ctx) {
    ctx.clearRect(0, 0, 800, 800);
    this.board.draw(ctx);
    this.pacman.draw(ctx);
    this.g1.draw(ctx);
    this.g2.draw(ctx);
    this.g3.draw(ctx);
    this.g4.draw(ctx);

  }

  randomMove(num) {
    if (num < 0.33) {
      return -1;
    } else if (num > 0.33 && num < 0.66) {
      return 0;
    } else {
      return 1;
    }
  }

  step(timeDelta) {
    this.board.eatenDots(this.pacman.oPosX, this.pacman.oPosY)
    if (this.board.hasWon()) {
      window.alert("Congrats, you won!");
    }
    let randX = Math.random();
    let randY = Math.random();
    let x = this.randomMove(randX);
    let y = this.randomMove(randY);
    if (x != 0) {
      y = 0;
    }

    if (this.board.validMove(this.pacman.oPosX + x, this.pacman.oPosY + y)) {
      this.pacman.move(x, y);
    }
  }
}

module.exports = Game;
