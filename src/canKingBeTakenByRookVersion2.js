function isRookDirectlyAboveKing(board, rowOfKing, columnOfKing) {
  const rowOfRook = rowOfKing - 1;
  return board[rowOfRook][columnOfKing] === "R";
}

function isRookDirectlyToTheRightOfKing(board, rowOfKing, columnOfKing) {
  const columnOfRook = columnOfKing + 1;
  return board[rowOfKing][columnOfRook] === "R";
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
    isRookDirectlyToTheRightOfKing(board, rowOfKing, columnOfKing) ||
    isRookDirectlyBelowKing(board, rowOfKing, columnOfKing) ||
    canTheKingSeeARookOnTheLeft(board, rowOfKing, columnOfKing)
  );
}

module.exports = {
  canKingBeTakenByRook,
};
