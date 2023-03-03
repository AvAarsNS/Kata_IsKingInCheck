function whatDoesTheKingSeeOnTheRight(board, rowOfKing, columnOfKing) {
  const boardWidth = board[0].length;
  for (let column = columnOfKing + 1; column < boardWidth; column += 1) {
    if (board[rowOfKing][column] !== " ") return board[rowOfKing][column];
  }
  return " ";
}

function canKingBeTakenByPieceFromCardinalDirection(piece) {
  return piece === "R" || piece === "Q";
}

function canKingBeTakenFromTheRight(board, rowOfKing, columnOfKing) {
  const pieceToTheRight = whatDoesTheKingSeeOnTheRight(
    board,
    rowOfKing,
    columnOfKing
  );
  return canKingBeTakenByPieceFromCardinalDirection(pieceToTheRight);
}

module.exports = {
  whatDoesTheKingSeeOnTheRight,
  canKingBeTakenByPieceFromCardinalDirection,
  canKingBeTakenFromTheRight,
};
