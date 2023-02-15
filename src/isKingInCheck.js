function isKingInCheck(board) {
  return board.some((row) => row.includes("P"));
}

function getRowOfKing(board) {
  return board.findIndex((row) => row.includes("K"));
}

module.exports = {
  isKingInCheck,
  getRowOfKing,
};
