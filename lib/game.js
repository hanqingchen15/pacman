const Pacman = require("./pac");
const Ghosts = require("./ghosts");
const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board;
    this.board.generateBoard();
    this.pacman = new Pacman(1, 1, "yellow", 15);
    this.g1 = new Ghosts(7, 7, "green", 15);
    this.g2 = new Ghosts(7, 8, "purple", 15);
    this.g3 = new Ghosts(8, 7, "white", 15);
    this.g4 = new Ghosts(8, 8, "red", 15);
    this.direction = null;
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

  step(timeDelta) {
    if (this.direction) {
      let g1Move = this.g1.ghostMove();
      console.log(g1Move);
      const g1x = g1Move[0];
      const g1y = g1Move[1];
      if (this.board.validMove(this.g1.oPosX + g1x, this.g1.oPosY + g1y)) {
        this.g1.move(g1x, g1y);
      }

      let g2Move = this.g2.ghostMove();
      const g2x = g2Move[0];
      const g2y = g2Move[1];
      if (this.board.validMove(this.g2.oPosX + g2x, this.g2.oPosY + g2y)) {
        this.g2.move(g2x, g2y);
      }

      let g3Move = this.g3.ghostMove();
      const g3x = g3Move[0];
      const g3y = g3Move[1];
      if (this.board.validMove(this.g3.oPosX + g3x, this.g3.oPosY + g3y)) {
        this.g3.move(g3x, g3y);
      }

      let g4Move = this.g4.ghostMove();
      const g4x = g4Move[0];
      const g4y = g4Move[1];
      if (this.board.validMove(this.g4.oPosX + g4x, this.g4.oPosY + g4y)) {
        this.g4.move(g4x, g4y);
      }

    }
    this.board.eatenDots(this.pacman.oPosX, this.pacman.oPosY)
    if (this.board.hasWon()) {
      window.alert("Congrats, you won!");
    }
    let x = 0;
    let y = 0;

    switch (this.direction) {
      case "l":
        x = -1;
        break;
      case "r":
        x = 1;
        break;
      case "t":
        y = -1;
        break;
      case "b":
        y = 1;
        break;
      default:
      break;
    }

    if (this.board.validMove(this.pacman.oPosX + x, this.pacman.oPosY + y)) {
      this.pacman.move(x, y);
    }
  }
}

module.exports = Game;
