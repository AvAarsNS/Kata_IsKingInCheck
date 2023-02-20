function isKingInCheck(board) {
  const rowOfKing = getRowOfKing(board);
  const columnOfKing = getColumnOfKing(board);
  return (
    isKingInCheckByPawn(board, rowOfKing, columnOfKing) ||
    canKingBeTakenByRook(board, rowOfKing, columnOfKing)
  );
}

function isKingInCheckByPawn(board, rowOfKing, columnOfKing) {
  return (
    isKingNotOnFirstRow(board, rowOfKing) &&
    canKingBeTakenByPawn(board, rowOfKing, columnOfKing) 
  );
}

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
    canKingBeTakenByPawnToLeft(board, rowOfKing, columnOfKing) ||
    canKingBeTakenByPawnToRight(board, rowOfKing, columnOfKing)
  );
}

function getRowOfKing(board) {
  return board.findIndex((row) => row.includes("K"));
}

function getColumnOfKing(board) {
  return board[getRowOfKing(board)].findIndex((square) => square === "K");
}

function isRookInColumnAboveKing(board, rowOfKing, columnOfKing) {
  return board.slice(0, rowOfKing).some((row) => row[columnOfKing] === "R");
}

function canKingBeTakenByRook(board, rowOfKing, columnOfKing) {
  return isRookInColumnAboveKing(board, rowOfKing, columnOfKing);
}

module.exports = {
  isKingInCheck,
  getRowOfKing,
  getColumnOfKing,
  canKingBeTakenByRook,
};
