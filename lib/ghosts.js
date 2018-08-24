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
    if (this.isCollidedWith(obj)) {
      window.alert("GG git gud scrub");
      return true;
    } else {
      return false;
    }
  }

  posEmpty(x, y, obj1, obj2, obj3) {
    let xPos = this.oPosX + x;
    let yPos = this.oPosY + y;
    if (xPos === obj1.oPosX && yPos === obj1.oPosY || xPos === obj2.oPosX && yPos === obj2.oPosY || xPos === obj3.oPosX && yPos === obj3.oPosY) {
      return false;
    } else {
      return true;
    }
  }

}

module.exports = Ghosts;
