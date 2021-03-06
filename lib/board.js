class Board {
  constructor() {
    this.board = [];
  }

  generateBoard() {
    let entireBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.board = entireBoard;
  }

  eatenDots(posI, posJ) {
    this.board[posJ][posI] = 2;
  }

  hasWon() {
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 1) {
          return false;
        }
      }
    }
    return true;
  }

  validMove(nextMoveX, nextMoveY) {
    if (this.board[nextMoveY][nextMoveX] === 0 || nextMoveX > 15 || nextMoveX < 0 || nextMoveY < 0 || nextMoveY > 15)  {
      return false;
    } else {
      return true;
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if ( (i === 7 && j === 8) || (i === 8 && j === 8) || (i === 7 && j === 7) || (i === 8 && j === 7)) {
          ctx.fillStyle = "#FF9999";
          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);
        } else if (this.board[i][j] === 0) {
          ctx.fillStyle = "#0000FF";
          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);
        } else if (this.board[i][j] === 1){
          ctx.fillStyle = "#000000";
          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(j * 50 + 25, i * 50 + 25, 5, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          ctx.fillStyle = "#000000";
          ctx.fillRect(j * 50, i * 50, (j+1) * 50, (i+1) * 50);
        }
      }
    }
  }



}
module.exports = Board;
