function isRookDirectlyAboveKing(board, rowOfKing, columnOfKing) {
  const rowOfRook = rowOfKing - 1;
  return board[rowOfRook][columnOfKing] === "R";
}

function canKingSeeARookOnTheRight(board, rowOfKing, columnOfKing) {
  const boardWidth = board[0].length;
  for (let column = columnOfKing + 1; column <= boardWidth; column++) {
    if (board[rowOfKing][column] === "R") return true;
  }
  return false;
}


function isRookDirectlyBelowKing(board, rowOfKing, columnOfKing) {
  const rowOfRook = rowOfKing + 1;
  return board[rowOfRook][columnOfKing] === "R";
}

function canTheKingSeeARookOnTheLeft(board, rowOfKing, columnOfKing) {
  for (let column = columnOfKing - 1; column >= 0; column--) {
    if (board[rowOfKing][column] === "R") return true;
  }
  return false;
}

function canKingBeTakenByRook(board, rowOfKing, columnOfKing) {
  return (
    isRookDirectlyAboveKing(board, rowOfKing, columnOfKing) ||
    canKingSeeARookOnTheRight(board, rowOfKing, columnOfKing) ||
    isRookDirectlyBelowKing(board, rowOfKing, columnOfKing) ||
    canTheKingSeeARookOnTheLeft(board, rowOfKing, columnOfKing)
  );
}

module.exports = {
  canKingBeTakenByRook,
};
