const {
  whatDoesTheKingSeeInTheEast,
  whatDoesTheKingSeeInTheWest,
  whatDoesTheKingSeeInTheNorth,
  whatDoesTheKingSeeInTheSouth,
  whatDoesTheKingSeeInTheNorthWest,
  canKingBeTakenByPieceFromCardinalDirection,
  canKingBeTakenFromTheEast,
  canKingBeTakenFromTheWest,
  canKingBeTakenFromTheNorth,
  canKingBeTakenFromTheNorthWestDiagonal,
  canKingBeTakenByKnight
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
    describe("We then check if the king is in check from the north when", () => {
      describe("The king is not in check from the north when", () => {
        it("there is nothing north of the King", () => {
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
            canKingBeTakenFromTheNorth(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
        it("there is a pawn north of the King", () => {
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
          const rowOfKing = 3;
          const columnOfKing = 3;
          expect(
            canKingBeTakenFromTheNorth(board, rowOfKing, columnOfKing)
          ).toEqual(false);
        });
      });
      describe("The king is in check from the north when", () => {
        it("there is a rook north of the King", () => {
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
            canKingBeTakenFromTheNorth(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
        it("there is a queen north of the King", () => {
          const board = [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", "Q", " ", " ", " ", " "],
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
            canKingBeTakenFromTheNorth(board, rowOfKing, columnOfKing)
          ).toEqual(true);
        });
      });
    });
  });
  describe("We want to determine if the king is in check from the south", () => {
    describe("We first check what chess piece the king sees looking to the south. If on the south side there is", () => {
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
          whatDoesTheKingSeeInTheSouth(board, rowOfKing, columnOfKing)
        ).toEqual(" ");
      });
      it("a rook, the king sees the rook", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "R", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          whatDoesTheKingSeeInTheSouth(board, rowOfKing, columnOfKing)
        ).toEqual("R");
      });
    });
  });
  describe("We want to determine if the king is in check from the north west. The king is at D4", () => {
    describe("We first check what chess piece the king sees looking to the north west. If on the north west there is", () => {
      it("nothing, the king sees an empty void ", () => {
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
          whatDoesTheKingSeeInTheNorthWest(board, rowOfKing, columnOfKing)
        ).toEqual(" ");
      });
      it("a bishop at C3, the king sees a bishop ", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", "B", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          whatDoesTheKingSeeInTheNorthWest(board, rowOfKing, columnOfKing)
        ).toEqual("B");
      });
      it("a bishop at A1, the king sees a bishop ", () => {
        const board = [
          ["B", " ", " ", " ", " ", " ", " ", " "],
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
          whatDoesTheKingSeeInTheNorthWest(board, rowOfKing, columnOfKing)
        ).toEqual("B");
      });
      it("a bishop at B2, pawn at A1 the king sees a bishop ", () => {
        const board = [
          ["P", " ", " ", " ", " ", " ", " ", " "],
          [" ", "B", " ", " ", " ", " ", " ", " "],
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
          whatDoesTheKingSeeInTheNorthWest(board, rowOfKing, columnOfKing)
        ).toEqual("B");
      });
    });
    describe("We then determine if the king can be taken", () => {
      it("a bishop, yes", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", "B", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenFromTheNorthWestDiagonal(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
      it("a 👩‍🦳👑, yes", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", "Q", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenFromTheNorthWestDiagonal(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
      it("a rook, no", () => {
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
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenFromTheNorthWestDiagonal(board, rowOfKing, columnOfKing)
        ).toEqual(false);
      });
      it("a pawn at C3, yes", () => {
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
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenFromTheNorthWestDiagonal(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
      it("a pawn at B2, no, the pawn is too far away :(", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", "P", " ", " ", " ", " ", " ", " "],
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
          canKingBeTakenFromTheNorthWestDiagonal(board, rowOfKing, columnOfKing)
        ).toEqual(false);
      });
      it("Pawn at B2, Pawn at E8, Pawn at C1? No", () => {
        const board = [
          [" ", " ", "P", " ", " ", " ", " ", " "],
          [" ", "P", " ", " ", " ", " ", " ", " "],
          [" ", "N", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", "P", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenFromTheNorthWestDiagonal(board, rowOfKing, columnOfKing)
        ).toEqual(false);
      });
      it("Knight at C2? Yes", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", "N", " ", " ", " ", " ", " "],
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
          canKingBeTakenByKnight(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
      it("Knight at B3? Yes", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", "N", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenByKnight(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
      it("Knight at A1? No", () => {
        const board = [
          ["N", " ", " ", " ", " ", " ", " ", " "],
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
          canKingBeTakenByKnight(board, rowOfKing, columnOfKing)
        ).toEqual(false);
      });
      it("King at A1 and no knights? No", () => {
        const board = [
          ["K", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenByKnight(board, rowOfKing, columnOfKing)
        ).toEqual(false);
      });
      it("Knight at E6? Yes", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", "N", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenByKnight(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
      it("Knight at B3? Yes", () => {
        const board = [
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", "N", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", "K", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
          [" ", " ", " ", " ", " ", " ", " ", " "],
        ];
        const rowOfKing = 3;
        const columnOfKing = 3;
        expect(
          canKingBeTakenByKnight(board, rowOfKing, columnOfKing)
        ).toEqual(true);
      });
    });
  });
  describe('The knight is an odd piece. It is able to capture pieces with an L-shaped move.', () => {
    it('Given the knight is at C6. When he moves up right he jumps C7, C8and lands on D8.', () => {
      
    });
  });
});
