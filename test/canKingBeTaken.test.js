const { whatDoesTheKingSeeOnTheRight } = require("../src/canKingBeTaken");

describe("This test suite looks whether for a given chessboard, the king is in check", () => {
  describe("First we check if the king can be taken from the right", () => {
    describe("In order to do so, we first check what chess piece the king sees on the right side", () => {
      it("If on the right side there is a rook, the king sees the rook", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", "R", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          whatDoesTheKingSeeOnTheRight(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
    });
  });
});
