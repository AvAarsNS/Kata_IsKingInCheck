const { isKingInCheck } = require("../src/isKingInCheck");

describe("This test suite checks the IsKingInCheck functionality", () => {
  it("In a board with only a king the king is not in check", () => {
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
  describe("In a board with a pawn", () => {
    it("When the pawn can take the king from the left, the king is in check", () => {
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
    // it("When the pawn can not take the king, the king is not in check", () => {
    //   const board = [
    //     [" ", " ", " ", " ", " ", " ", " ", " "],
    //     [" ", " ", " ", " ", " ", " ", " ", " "],
    //     [" ", " ", " ", "P", " ", " ", " ", " "],
    //     [" ", " ", " ", "K", " ", " ", " ", " "],
    //     [" ", " ", " ", " ", " ", " ", " ", " "],
    //     [" ", " ", " ", " ", " ", " ", " ", " "],
    //     [" ", " ", " ", " ", " ", " ", " ", " "],
    //     [" ", " ", " ", " ", " ", " ", " ", " "],
    //   ];
    //   expect(isKingInCheck(board)).toEqual(false);
    // });
  });
});
