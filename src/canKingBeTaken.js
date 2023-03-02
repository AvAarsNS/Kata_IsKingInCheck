function whatDoesTheKingSeeOnTheRight(board, rowOfKing, columnOfKing) {
  const boardWidth = board[0].length;
  for (let column = columnOfKing + 1; column <= boardWidth; column++) {
    if (board[rowOfKing][column] !== " ") return board[rowOfKing][column];
  }
  return " ";
}

module.exports = {
  whatDoesTheKingSeeOnTheRight,
};
