const { getRowOfKing } = require("../src/isKingInCheck");

describe("We want to be able to get the location of the King", () => {
  describe("When the king is at (1,1)", () => {
    const board = [
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", "K", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
    ];
    it("the row is 1", () => {
      expect(getRowOfKing(board)).toEqual(1);
    });
  });
  describe("When the king is at (6,3)", () => {
    const board = [
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", "K", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " "],
    ];
    it("the row is 6", () => {
      expect(getRowOfKing(board)).toEqual(6);
    });
  });
});
