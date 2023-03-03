const {
  whatDoesTheKingSeeOnTheRight,
  canKingBeTakenByPieceFromCardinalDirection,
  canKingBeTakenFromTheRight,
} = require("../src/canKingBeTaken");

describe("This test suite looks whether for a given chessboard, the king is in check", () => {
  describe("First we check if the king can be taken from the right", () => {
    describe("In order to do so, we first check what chess piece the king sees on the right side", () => {
      it("If on the right side there is nothing, the king sees an empty void", () => {
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
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          whatDoesTheKingSeeOnTheRight(board, rowOfKing, columnOfKing)
        ).toEqual(" ");
      });
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
      it("If on the right side there is a rook, and behind the rook there is a creepy person, the king sees the rook", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", "R", " ", "Mathijs"],
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
    describe("Then, depending on the chess piece seen, the king is in check", () => {
      describe("In the following cases the king is not in check in a straight line", () => {
        it("when there is no piece", () => {
          const piece = " ";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            false
          );
        });
        it("when the piece is a pawn", () => {
          const piece = "P";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            false
          );
        });
      });
      describe("In the following cases the king is in check in a straight line", () => {
        it("when the piece is a rook", () => {
          const piece = "R";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            true
          );
        });
        it("when the piece is a queen", () => {
          const piece = "Q";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            true
          );
        });
      });
    });
    describe("Finally, we can determine if the king is in check from the right", () => {
      describe("In the following cases the king is in not check from the right", () => {
        it("when there is no piece", () => {
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
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheRight(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
        it("when there is a pawn", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", "K", " ", "P", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
          ];
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheRight(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
      });
      describe("In the following cases the king is in check from the right", () => {
        it("when there is a rook", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", "K", " ", " ", " ", "R"],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
          ];
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheRight(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
        it("when there is a queen", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", "K", " ", " ", "Q", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
          ];
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheRight(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
      });
    });
  });
});
