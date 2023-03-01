const { canKingBeTakenByRook } = require("../src/canKingBeTakenByRookVersion2");

describe("We want to be able to detect if the king can be taken by a rook", () => {
  describe("The king can be taken when", () => {
    it("a rook is directly in front of the king", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "R", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      const rowOfKing = 3;
      const columnOfKing = 3;
      expect(canKingBeTakenByRook(board, rowOfKing, columnOfKing)).toEqual(
        true
      );
    });
    it("a rook is directly to the right of the king", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", "R", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      const rowOfKing = 3;
      const columnOfKing = 3;
      expect(canKingBeTakenByRook(board, rowOfKing, columnOfKing)).toEqual(
        true
      );
    });
    it("a rook is directly below the king", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", "R", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      const rowOfKing = 3;
      const columnOfKing = 3;
      expect(canKingBeTakenByRook(board, rowOfKing, columnOfKing)).toEqual(
        true
      );
    });
    it("a rook is directly to the left of the king", () => {
        const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", "R", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(canKingBeTakenByRook(board, rowOfKing, columnOfKing)).toEqual(
        true
        );
    });
    it("a rook is two spots to the left of the king", () => {
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
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(canKingBeTakenByRook(board, rowOfKing, columnOfKing)).toEqual(
        true
        );
    });
  });
  describe("The king can not be taken when", () => {
    it("a rook is in a different column and row", () => {
      const board = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", "R", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "K", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
      ];
      const rowOfKing = 3;
      const columnOfKing = 3;
      expect(canKingBeTakenByRook(board, rowOfKing, columnOfKing)).toEqual(
        false
      );
    });
  });
});
