function isKingOnFirstRow(board, rowOfKing) {
  return rowOfKing === 0;
}

function isKingNotOnFirstRow(board, rowOfKing) {
  return !isKingOnFirstRow(board, rowOfKing);
}

function canKingBeTakenByPawnToLeft(board, rowOfKing, columnOfKing) {
  const rowOfPawn = rowOfKing - 1;
  const columnOfPawn = columnOfKing - 1;
  return board[rowOfPawn][columnOfPawn] === "P";
}

function canKingBeTakenByPawnToRight(board, rowOfKing, columnOfKing) {
  const rowOfPawn = rowOfKing - 1;
  const columnOfPawn = columnOfKing + 1;
  return board[rowOfPawn][columnOfPawn] === "P";
}

function canKingBeTakenByPawn(board, rowOfKing, columnOfKing) {
  return (
    isKingNotOnFirstRow(board, rowOfKing) &&
    (canKingBeTakenByPawnToLeft(board, rowOfKing, columnOfKing) ||
      canKingBeTakenByPawnToRight(board, rowOfKing, columnOfKing))
  );
}

module.exports = canKingBeTakenByPawn;
