function isRookInColumnAboveKing(board, rowOfKing, columnOfKing) {
  const rowsAboveKing = board.slice(0, rowOfKing);
  const rowOfRook = rowsAboveKing.findIndex((row) => row[columnOfKing] === "R");
  if (rowOfRook === -1) return false;
  return true;
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
    isRookInColumnAboveKing(board, rowOfKing, columnOfKing) ||
    isRookInColumnBelowKing(board, rowOfKing, columnOfKing) ||
    isRookInRowLeftOfKing(board, rowOfKing, columnOfKing) ||
    isRookInRowRightOfKing(board, rowOfKing, columnOfKing)
  );
}

module.exports = canKingBeTakenByRook;
