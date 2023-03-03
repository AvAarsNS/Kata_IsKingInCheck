const {
  whatDoesTheKingSeeInTheEast,
  whatDoesTheKingSeeInTheWest,
  whatDoesTheKingSeeInTheNorth,
  canKingBeTakenByPieceFromCardinalDirection,
  canKingBeTakenFromTheEast,
  canKingBeTakenFromTheWest,
} = require("../src/canKingBeTaken");

describe("This test suite looks whether for a given chessboard, the king is in check", () => {
  describe("We want to be able to determine whether the king can be taken by a piece", () => {
    describe("The king can be taken by a rook and a queen in the 4 cardinal directions", () => {
      describe("The king is not in check when", () => {
        it("there is no piece", () => {
          const piece = " ";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            false
          );
        });
        it("the piece is a pawn", () => {
          const piece = "P";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            false
          );
        });
      });
      describe("The king is in check when", () => {
        it("the piece is a rook", () => {
          const piece = "R";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            true
          );
        });
        it("the piece is a queen", () => {
          const piece = "Q";
          expect(canKingBeTakenByPieceFromCardinalDirection(piece)).toEqual(
            true
          );
        });
      });
    });
  });
  describe("We want to determine if the king is in check from the east", () => {
    describe("We first check what chess piece the king sees looking to the east. If on the east side there is", () => {
      it("nothing, the king sees an empty void", () => {
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
          whatDoesTheKingSeeInTheEast(board, rowOfKing, columnOfKing)
        ).toEqual(" ");
      });
      it("a rook, the king sees the rook", () => {
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
          whatDoesTheKingSeeInTheEast(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
      it("a rook, and behind the rook there is a creepy person, the king sees the rook", () => {
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
          whatDoesTheKingSeeInTheEast(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
    });
    describe("Finally, we can determine if the king is in check from the east", () => {
      describe("The king is not in check from the east when", () => {
        it("there is no piece", () => {
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
            canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
        it("there is a pawn", () => {
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
            canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
      });
      describe("The king is in check from the east when", () => {
        it("there is a rook", () => {
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
            canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
        it("there is a queen", () => {
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
            canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
      });
    });
  });
  describe("We want to determine if the king is in check from the west", () => {
    describe("We first check what chess piece the king sees looking to the west. If on the west side there is", () => {
      it("nothing, the king sees an empty void", () => {
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
          whatDoesTheKingSeeInTheWest(board, rowOfKing, columnOfKing)
        ).toEqual(" ");
      });
      it("a rook, the king sees the rook", () => {
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
        expect(
          whatDoesTheKingSeeInTheWest(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
      it("a rook, and behind the rook there is a creepy person, the king sees the rook", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          ["Mathijs", "R", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          whatDoesTheKingSeeInTheWest(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
    });
    describe("Finally, we can determine if the king is in check from the west", () => {
      describe("The king is not in check from the west when", () => {
        it("there is no piece", () => {
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
            canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
        it("there is a pawn", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", "P", "K", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
          ];
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheEast(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
      });
      describe("The king is in check from the west when", () => {
        it("there is a rook", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            ["R", " ", " ", "K", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
          ];
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheWest(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
        it("there is a queen", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", "Q", " ", "K", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
          ];
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheWest(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
      });
    });
  });
  describe("We want to determine if the king is in check from the north", () => {
    describe("We first check what chess piece the king sees looking to the north. If on the north side there is", () => {
      it("nothing, the king sees an empty void", () => {
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
          whatDoesTheKingSeeInTheNorth(board, rowOfKing, columnOfKing)
        ).toEqual(" ");
      });
      it("a rook, the king sees the rook", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "R", " ", " ", " ", " "],
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
          whatDoesTheKingSeeInTheNorth(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
      it("a rook, and behind the rook there is a creepy person, the king sees the rook", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "Mathijs", " ", " ", " ", " "],
          [" ", " ", " ", "R", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          whatDoesTheKingSeeInTheNorth(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
    });
  });
});
