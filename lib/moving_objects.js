class MovingObjects {

  constructor(options) {
    this.pos = options.pos;
    this.color = options.color;
    this.radius = options.radius;
    this.game = options.game;
    this.vel = options.vel;
  }

  collideWith(otherObj) {
    //??
  }

  isCollidedWith(otherObj) {
    return (this.pos + otherObj.pos) > (this.radius + otherObj.radius);
  }
  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }
}

module.exports = MovingObjects;
