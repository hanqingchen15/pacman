var fps = 5;
var fpsInterval, startTime, now, then, elapsed;

class Interface {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }


  start() {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    // start the animation
    this.animate()
  }

  keyPressed(e)
  {
    e.preventDefault();
    if (e.keyCode == 39)
    {
      this.game.direction = "r";
    }
    else if (e.keyCode == 37)
    {
      this.game.direction = "l";
    }
    else if (e.keyCode == 38)
    {
      this.game.direction = "t";
    }
    else if (e.keyCode == 40)
    {
      this.game.direction = "b";
    }
  }

  animate() {

    requestAnimationFrame(this.animate.bind(this));

    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

        this.game.step();
        this.game.draw(this.ctx);
    }
  }
}
Interface.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

module.exports = Interface;
