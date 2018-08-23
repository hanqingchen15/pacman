const Board = require("./board");
class MovingObjects {

  constructor(posX, posY, color, radius, game, vel) {
    this.oPosX = posX;
    this.oPosY = posY
    this.posX = posX * 50 + 25;
	  this.posY = posY * 50 + 25;
    this.color = color;
    this.radius = radius;
    this.game = game;
    this.vel = vel;
  }

  move(nextMoveX, nextMoveY) {
    this.oPosX = this.oPosX + nextMoveX;
    this.oPosY = this.oPosY + nextMoveY;
    this.posX = this.oPosX * 50 + 25;
    this.posY = this.oPosY * 50 + 25;
  }

  collideWith(otherObj) {
    //??
  }

  isCollidedWith(otherObj) {
    return (Math.pow((this.posX - otherObj.posX), 2) + Math.pow(this.posY - otherObj.posY, 2))  < Math.pow((this.radius + otherObj.radius), 2);
  }

  draw(ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
      this.posX, this.posY, this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }
}

module.exports = MovingObjects;
