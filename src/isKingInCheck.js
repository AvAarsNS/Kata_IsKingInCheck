const { canKingBeTakenByRook } = require("./canKingBeTakenByRook");
const canKingBeTakenByPawn = require("./canKingBeTakenByPawn");

function getRowOfKing(board) {
  return board.findIndex((row) => row.includes("K"));
}

function getColumnOfKing(board) {
  return board[getRowOfKing(board)].findIndex((square) => square === "K");
}

function isKingInCheck(board) {
  const rowOfKing = getRowOfKing(board);
  const columnOfKing = getColumnOfKing(board);
  return (
    canKingBeTakenByPawn(board, rowOfKing, columnOfKing) ||
    canKingBeTakenByRook(board, rowOfKing, columnOfKing)
  );
}

module.exports = {
  isKingInCheck,
  getRowOfKing,
  getColumnOfKing,
};
