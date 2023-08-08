
const containerDiv = document.getElementById('container')



class ChessBoard {
    constructor() {
        this.yAxis = [1, 2, 3, 4, 5, 6, 7, 8]
        this.xAxis = this.yAxis
        this.board = this.createBoard()
    }
    createBoard() {
        const squareId = []
        for (let i = 0; i < this.yAxis.length; i++) {
            for (let j = 0; j < this.xAxis.length; j++) {
                squareId.push([this.xAxis[j], this.yAxis[i]])
            }
        }
        // console.log(squareId)
        return squareId
    }
    findIndex(target) {
        
        const board = this.board
        for (let i = 0; i < board.length; i++) {

            if (board[i][0] === target[0] && board[i][1] === target[1]) return i            
        }
        return 'nope'
    }
    isValid(target) {
        const board = this.board
        if(board.find(element => element[0] === target[0]) &&
        board.find(element => element[1] === target[1])) return true
        return false       
    }
}

const chessBoard = new ChessBoard()
chessBoard.createBoard()

// console.log(chessBoard.findIndex([1, 1])); // Output: 0
// console.log(chessBoard.findIndex([4, 5])); // Output: 35
// console.log(chessBoard.findIndex([8, 8])); // Output: 63
// console.log(chessBoard.findIndex([9, 9])); // Output: 'nope'



class Knight {
    constructor(startingLocation) {
        this.location = startingLocation
        this.moves = this.possibleNextMoves()
    }
    possibleNextMoves(location = this.location) {
  
        const moves = [
                [1, 2], [1, -2],
                [2, 1], [2, -1],
                [-1, 2], [-1, -2],
                [-2, 1], [-2, -1]
            ]
            
        const possibleMoves = []
        for (const move of moves) {
            let potentialMove = [location[0] + move[0], location[1] + move[1]]
            if (chessBoard.isValid(potentialMove))
            possibleMoves.push(potentialMove)     
             
        }
        return possibleMoves
    }
    createMovesTree(depth = 0, maxDepth = 3) {
        if (depth >= maxDepth) return []

        const possibleMoves = this.possibleNextMoves()
        const movesTree = []

        for (const move of possibleMoves) {
            const knightCopy = new Knight(move) // Create a new instance for each move
            const subTree = knightCopy.createMovesTree(depth + 1, maxDepth) // Recursive call with the new instance
            movesTree.push({ location: move, moves: subTree })
        }

        return movesTree
    }
    bfsShortestPath(start, target) {
        const queue = [start]
        const visited = new Set()
        visited.add(start.toString()) 
        const parentMap = new Map()
    
        while (queue.length > 0) {
            const currentLocation = queue.shift()
    
            if (currentLocation[0] === target[0] && currentLocation[1] === target[1]) {
                return this.constructShortestPath(parentMap, start, target)
            }
            
            const possibleMoves = this.possibleNextMoves(currentLocation)
            
            for (const move of possibleMoves) {
                const moveString = move.toString()
                if (!visited.has(moveString)) {
                    queue.push(move)
                    visited.add(moveString)
                    parentMap.set(moveString, currentLocation)
                }
            }
        }
        return null // No path found
    }    
    constructShortestPath(parentMap, start, target) {
        const path = []
        let current = target.toString()

        while (current !== start.toString()) {
            path.unshift(current.split(',').map(Number))
            current = parentMap.get(current).toString()
        }
        path.unshift(start)
        return path
    }
    dfsShortestPath(currentLocation, target, visited = new Set()) {
        if (currentLocation[0] === target[0] && currentLocation[1] === target[1]) {
            console.log('Target Found')
            return [currentLocation] 
        }

        visited.add(currentLocation.toString())
        
        const possibleMoves = this.possibleNextMoves(currentLocation)

        for (const move of possibleMoves) {
            if (!visited.has(move.toString())) {
                const path = this.dfsShortestPath(move, target, visited)
                if (path.length > 0) {
                    return [currentLocation, ...path]
                }
            }
        }
        return []
    }
}


const knightStartsAt = [[1, 2], [1, 7], [8, 2], [8, 7]]
const leftKnightBlk = new Knight(knightStartsAt[0])
const rightKnightBlk = new Knight(knightStartsAt[1])
const leftKnightWht = new Knight(knightStartsAt[2])
const rightKnightWht = new Knight(knightStartsAt[3])

const movesTree = leftKnightWht.createMovesTree();

let startLocation = [1, 5]
let targetLocation = [8, 1]

// leftKnightBlk.bfsShortestPath(startLocation, targetLocation)
// leftKnightBlk.dfsShortestPath(startLocation, targetLocation)



