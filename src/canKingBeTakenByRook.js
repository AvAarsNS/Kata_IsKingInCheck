function extractRowsAboveKingFromBoard(board, rowOfKing) {
  return board.slice(0, rowOfKing);
}

function getRowOfRookFromRowsAboveKing(rowsAboveKing, columnOfKing) {
  return rowsAboveKing.findIndex((row) => row[columnOfKing] === "R");
}

function isRookInColumnAboveKing(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook) {
  if (rowOfRook === -1) return false;
  return true;
}

function isThereNothingBetweenTheRookAndTheKing(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook) {
  return rowsAboveKing.slice(rowOfRook + 1, rowOfKing).every((row) => row[columnOfKing] === " ");
}

function canKingBeTakenByRookFromAbove(board, rowOfKing, columnOfKing) {
  const rowsAboveKing = extractRowsAboveKingFromBoard(board, rowOfKing);
  const rowOfRook = getRowOfRookFromRowsAboveKing(rowsAboveKing, columnOfKing);
  return (
    isRookInColumnAboveKing(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook) &&
    isThereNothingBetweenTheRookAndTheKing(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook)
  );
}

function isRookInColumnBelowKing(board, rowOfKing, columnOfKing) {
  return board.slice(rowOfKing).some((row) => row[columnOfKing] === "R");
}

function isRookInRowLeftOfKing(board, rowOfKing, columnOfKing) {
  return board[rowOfKing].slice(0, columnOfKing).some((piece) => piece === "R");
}

function isRookInRowRightOfKing(board, rowOfKing, columnOfKing) {
  return board[rowOfKing].slice(columnOfKing).some((piece) => piece === "R");
}

function canKingBeTakenByRook(board, rowOfKing, columnOfKing) {
  return (
    canKingBeTakenByRookFromAbove(board, rowOfKing, columnOfKing) ||
    isRookInColumnBelowKing(board, rowOfKing, columnOfKing) ||
    isRookInRowLeftOfKing(board, rowOfKing, columnOfKing) ||
    isRookInRowRightOfKing(board, rowOfKing, columnOfKing)
  );
}

module.exports = canKingBeTakenByRook;
