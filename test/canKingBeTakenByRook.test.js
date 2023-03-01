const { 
  isThereNothingBelowTheKingAndBetweenTheRook,
  extractRowsBelowKingFromBoard,
  getRowOfRookClosestBelowKing,
  isRookInColumnBelowKing
} = require("../src/canKingBeTakenByRook");

describe("We want to be able to detect if the king can be taken by a rook", () => {
    describe("We want to be able to extract the rows below the king", () => {
        it("With the king on the fourth row, and a rook on the seventh", () => {
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

            const rowOfKing = 3;

            const expectedResult = [
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", "R", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
            ];

            expect(extractRowsBelowKingFromBoard(board, rowOfKing)).toEqual(expectedResult);
        })
    });
    describe("We want to check whether there is a rook in the same column as the king", () => {
        it("When there is a rook, we return true", () => {
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
            const rowOfKing = 3;
            const columnOfKing = 3;
            expect(isRookInColumnBelowKing(board, rowOfKing, columnOfKing)).toEqual(true);
        })
    });
    describe("We want to be able to extract the row of the rook closest to the king from the rows below the king", () => {
        it("When the rook is on the third row, we return 2", () => {
            const rowsBelowKing = [
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", "R", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
            ];
            const columnOfKing = 3;
            expect(getRowOfRookClosestBelowKing(rowsBelowKing, columnOfKing)).toEqual(2);
        })
    });
    describe("We want to be able to check whether there is something between the rook and the king", () => {
        it("When there is nothing inbetween, we want to return true", () => {
            const rowsBelowKing = [
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", "R", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
            ];
            
            const columnOfKing = 3;
            const rowOfRookInRowsBelowKing = 2;
            expect(isThereNothingBelowTheKingAndBetweenTheRook(rowsBelowKing, columnOfKing, rowOfRookInRowsBelowKing)).toBe(true);
        })
        it("When there is something inbetween, we want to return false", () => {
            const rowsBelowKing = [
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", "P", " ", " ", " ", " "],
                [" ", " ", " ", "R", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
            ];
            
            const columnOfKing = 3;
            const rowOfRookInRowsBelowKing = 2;
            expect(isThereNothingBelowTheKingAndBetweenTheRook(rowsBelowKing, columnOfKing, rowOfRookInRowsBelowKing)).toBe(false);
        })
    })
});