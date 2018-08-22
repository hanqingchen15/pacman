const MovingObjects = require("./moving_objects");

class Pacman extends MovingObjects {
  constructor(posX, posY, color, radius, game, vel) {
    super(posX, posY, color, radius, game, vel);
  }

}

module.exports = Pacman;
