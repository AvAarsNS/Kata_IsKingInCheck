# Kata Kata_IsKingInCheck

You have to write a function that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (or strings of length 1, depending on the language) and returns a boolean indicating whether the king is in check.

The array will include 64 squares which can contain the following characters :

    'K' for the black King;
    'Q' for a white Queen;
    'B' for a white Bishop;
    'N' for a white kNight;
    'R' for a white Rook;
    'P' for a white Pawn;
    ' ' (a space) if there is no piece on that square.

There will always be exactly one king, which is the black king, whereas all the other pieces are white.
The board is oriented from Black's perspective.
Remember that pawns can only move and take forward.
Also be careful with the pieces' lines of sight ;-) .