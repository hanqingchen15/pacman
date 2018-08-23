class Interface {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    // this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  keyPressed(e)
  {
    e.preventDefault();
    if (e.keyCode == 39)
    {
      this.game.direction = "r";
      console.log(this.game.direction);
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

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(100000/60);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}
Interface.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

module.exports = Interface;
