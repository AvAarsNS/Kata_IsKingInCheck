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
    describe("When there is a single pawn, and the pawn is", () => {
      it("far away from the king", () => {
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
      it("directly in front of the king", () => {
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
      it("in the second row, and the king is on the first row", () => {
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
    describe("When there is a single rook, and the rook is", () => {
      it("in another column than the king", () => {
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
      it("directly above the king, but there is a pawn inbetween", () => {
        const board = [
          [" ", " ", " ", "R", " ", " ", " ", " "],
          [" ", " ", " ", "P", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
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
  describe("In the following cases the king is in check", () => {
    describe("When there is a single pawn, and the pawn is", () => {
      it("able to take the king from the left", () => {
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

      it("able to take the king from the right", () => {
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
    describe("When there is a single rook, and the rook is", () => {
      it("directly above the king", () => {
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
      it("directly below the king", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "R", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        expect(isKingInCheck(board)).toEqual(true);
      });
      it("directly to the left of the king", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", "R", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        expect(isKingInCheck(board)).toEqual(true);
      });
      it("directly to the right of the king", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", "R", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        expect(isKingInCheck(board)).toEqual(true);
      });
    });
  });
});
