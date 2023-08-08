# knight-travails

A solution to a "knight travails" problem

This project focuses on solving the movement paths of a chess knight on an 8x8 chessboard using JavaScript. The project consists of two main classes: ChessBoard and Knight, designed to facilitate various operations related to the knight's movement.

ChessBoard Class:

Represents the chessboard with an 8x8 grid.
Initializes with x and y axis arrays representing the coordinates on the board.
Contains methods to create the board and check if a given target location is valid on the board.
Provides a method to find the index of a given target location within the board array.

Knight Class:

Represents a chess knight and its possible moves.
Initializes with a starting location and calculates the possible next moves for the knight.
Offers a method to create a tree of possible moves up to a given depth.
Implements breadth-first search (BFS) to find the shortest path from a starting location to a target location on the chessboard.
Implements depth-first search (DFS) to find the first path encountered from a starting location to a target location on the chessboard. Note that this may not always be the shortest path.

Usage:

1. Instantiate the ChessBoard class to create the chessboard.
2. Instantiate the Knight class with a starting location to create a knight object.
3. Use the createMovesTree method to generate a tree of possible moves for the knight.
4. Utilize the knightMoves method to find the shortest path from a starting location to a target location using BFS.
5. Use the dfsFirstPathFound method to find the first path encountered from a starting location to a target location using DFS.

Example:

Example instances of Knight are created for different starting locations.
The createMovesTree method is demonstrated to generate a tree of possible moves.
Examples of finding the shortest path and the first path using both BFS and DFS are provided for different scenarios.
Note: The project is a basic implementation for educational purposes and may not be optimized for all use cases. It showcases the use of tree structures, breadth-first search, and depth-first search to explore the possible movement paths of a chess knight on a chessboard.
