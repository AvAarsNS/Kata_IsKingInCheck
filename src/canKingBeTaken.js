function whatDoesTheKingSeeInTheEast(board, rowOfKing, columnOfKing) {
  const boardWidth = board[0].length;
  for (let column = columnOfKing + 1; column < boardWidth; column += 1) {
    if (board[rowOfKing][column] !== " ") return board[rowOfKing][column];
  }
  return " ";
}

function whatDoesTheKingSeeInTheWest(board, rowOfKing, columnOfKing) {
  for (let column = columnOfKing - 1; column >= 0; column -= 1) {
    if (board[rowOfKing][column] !== " ") return board[rowOfKing][column];
  }
  return " ";
}

function whatDoesTheKingSeeInTheNorth(board, rowOfKing, columnOfKing) {
  for (let row = rowOfKing - 1; row >= 0; row -= 1) {
    if (board[row][columnOfKing] !== " ") return board[row][columnOfKing];
  }
  return " ";
}

function canKingBeTakenByPieceFromCardinalDirection(piece) {
  return piece === "R" || piece === "Q";
}

function canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing) {
  const pieceToTheRight = whatDoesTheKingSeeInTheEast(
    board,
    rowOfKing,
    columnOfKing
  );
  return canKingBeTakenByPieceFromCardinalDirection(pieceToTheRight);
}

function canKingBeTakenFromTheWest(board, rowOfKing, columnOfKing) {
  const pieceToTheRight = whatDoesTheKingSeeInTheWest(
    board,
    rowOfKing,
    columnOfKing
  );
  return canKingBeTakenByPieceFromCardinalDirection(pieceToTheRight);
}

function canKingBeTakenFromTheNorth(board, rowOfKing, columnOfKing) {
    const pieceToTheNorth = whatDoesTheKingSeeInTheNorth(
      board,
      rowOfKing,
      columnOfKing
    );
    return canKingBeTakenByPieceFromCardinalDirection(pieceToTheNorth);
}

module.exports = {
  whatDoesTheKingSeeInTheEast,
  whatDoesTheKingSeeInTheWest,
  whatDoesTheKingSeeInTheNorth,
  canKingBeTakenByPieceFromCardinalDirection,
  canKingBeTakenFromTheEast,
  canKingBeTakenFromTheWest,
  canKingBeTakenFromTheNorth
};
