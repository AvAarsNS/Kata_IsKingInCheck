function extractRowsAboveKingFromBoard(board, rowOfKing) {
  return board.slice(0, rowOfKing);
}

function extractRowsBelowKingFromBoard(board, rowOfKing) {
  return board.slice(rowOfKing + 1);
}

function getRowOfRookClosestAboveKing(rowsAboveKing, columnOfKing) {
  for (let row = rowsAboveKing.length - 1; row >= 0; row--) {
    if (rowsAboveKing[row][columnOfKing] === "R") {
      return row;
    }
  }
  return -1;
}

function getRowOfRookClosestBelowKing(rowsBelowKing, columnOfKing) {
  for (let row = 0; row < rowsBelowKing.length; row++) {
    if (rowsBelowKing[row][columnOfKing] === "R") {
      return row;
    }
  }
  return -1;
}

// TODO: TECH DEBT: Unused parameters
function isRookInColumnAboveKing(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook) {
  if (rowOfRook === -1) return false;
  return true;
}

// TODO: TECH DEBT: Slice not needed
function isThereNothingAboveTheKingAndBetweenTheRook(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook) {
  return rowsAboveKing.slice(rowOfRook + 1).every((row) => row[columnOfKing] === " ");
}

function isThereNothingBelowTheKingAndBetweenTheRook(rowsBelowKing, columnOfKing, rowOfRookInRowsBelowKing) {
  for (let i = 0; i < rowOfRookInRowsBelowKing; i++) {
    if (rowsBelowKing[i][columnOfKing] !== " ") return false;
  }

  return true;
}

function canKingBeTakenByRookFromAbove(board, rowOfKing, columnOfKing) {
  const rowsAboveKing = extractRowsAboveKingFromBoard(board, rowOfKing);
  const rowOfRook = getRowOfRookClosestAboveKing(rowsAboveKing, columnOfKing);
  return (
    isRookInColumnAboveKing(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook) &&
    isThereNothingAboveTheKingAndBetweenTheRook(rowsAboveKing, rowOfKing, columnOfKing, rowOfRook)
  );
} 

function isRookInColumnBelowKing(board, rowOfKing, columnOfKing) {
  return board.slice(rowOfKing).some((row) => row[columnOfKing] === "R");
}

function canKingBeTakenByRookFromBelow(board, rowOfKing, columnOfKing) {
  const rowsBelowKing = extractRowsBelowKingFromBoard(board, rowOfKing);
  const rowOfRookInRowsBelowKing = getRowOfRookClosestBelowKing(rowsBelowKing, columnOfKing);
  return (
    isRookInColumnBelowKing(board, rowOfKing, columnOfKing) &&
    isThereNothingBelowTheKingAndBetweenTheRook(rowsBelowKing, columnOfKing, rowOfRookInRowsBelowKing)
  );
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
    canKingBeTakenByRookFromBelow(board, rowOfKing, columnOfKing) ||
    isRookInRowLeftOfKing(board, rowOfKing, columnOfKing) ||
    isRookInRowRightOfKing(board, rowOfKing, columnOfKing)
  );
}

module.exports = {
  canKingBeTakenByRook,
  isThereNothingBelowTheKingAndBetweenTheRook,
  extractRowsBelowKingFromBoard,
  getRowOfRookClosestBelowKing,
  isRookInColumnBelowKing
};
