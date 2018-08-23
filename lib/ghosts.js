const MovingObjects = require("./moving_objects");

class Ghosts extends MovingObjects {
  constructor(posX, posY, color, radius, game, vel) {
    super(posX, posY, color, radius, game, vel);
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

  ghostMove() {
    let randX = Math.random();
    let randY = Math.random();
    let x = this.randomMove(randX);
    let y = this.randomMove(randY);
    if (x != 0) {
      y = 0;
    }
    return [x, y];
  }

  gameOver(obj) {
    this.isCollidedWith(obj);
  }
}

module.exports = Ghosts;
