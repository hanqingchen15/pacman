const MovingObjects = require("./moving_objects");

class Ghosts extends MovingObjects {
  constructor(posX, posY, color, radius, game, vel) {
    super(posX, posY, color, radius, game, vel);
  }
}

module.exports = Ghosts;
