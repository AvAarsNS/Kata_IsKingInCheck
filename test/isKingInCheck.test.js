const { isKingInCheck } = require("../src/isKingInCheck");

describe("This is a testsuite for a piece of functionality that is called IsKingInCheck. This functionality checks a simplified version of a chessboard. The chessboard is a 8x8 board. The board only contains a black King and can contain multiple white pieces. And then we have to check if the black King is in check or if he is safe at that moment. ", () => {
  describe("In the following cases, the king is safe", () => {
    it("In a board with only a king", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(false);
    });
    it("When the pawn is far away from the king", () => {
      const board = [
        [" ", " ", " ", " ", "P", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(false);
    });
    it("When the pawn is directly in front of the king", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "P", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(false);
    });
    it("When the king is at the first row, and the pawn is at the second row", () => {
      const board = [
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", "P", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(false);
    });
  });
  describe("In the following cases the king is in check", () => {
    it("When the pawn can take the king from the left", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", "P", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(true);
    });

    it("When the pawn can take the king from the right", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "P", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(true);
    });
  });
  describe("In a board where a rook is present", () => {
    it("The king is in check when there is a rook in the same column", () => {
      const board = [
        [" ", " ", " ", "R", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(true);
    });
    it("The king is not in check when there are no rooks in the same column", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", "R", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      expect(isKingInCheck(board)).toEqual(false);
    });
  });
});
