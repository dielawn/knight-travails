
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
        console.log(squareId)
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

console.log(chessBoard.findIndex([1, 1])); // Output: 0
console.log(chessBoard.findIndex([4, 5])); // Output: 35
console.log(chessBoard.findIndex([8, 8])); // Output: 63
console.log(chessBoard.findIndex([9, 9])); // Output: 'nope'



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
        for (let i = 0; i < moves.length; i++) {
            let potentialMove = [location[0] + moves[i][0], location[1] + moves[i][1]]
            if (chessBoard.isValid(potentialMove))
            possibleMoves.push(potentialMove)        
        }
        return possibleMoves
    }
    createMovesTree(depth = 0, maxDepth = 3) {
        if (depth >= maxDepth) return [];

        const possibleMoves = this.possibleNextMoves();
        const movesTree = [];

        for (const move of possibleMoves) {
            this.location = move; // Update the knight's location for each move
            const subTree = this.createMovesTree(depth + 1, maxDepth); // Recursive call with the updated location
            movesTree.push({ location: move, moves: subTree });
        }

        return movesTree;
    }
}
//     createMovesTree(depth = 0, maxDepth = 3) {
//         if (depth >= maxDepth) return []

//         const possibleMoves = this.possibleNextMoves()
//         const movesTree = []
//         for (const move of possibleMoves) {
            
//             const subTree = this.createMovesTree(depth + 1, maxDepth)
//             console.log(subTree)
  
//             movesTree.push({location: move, moves: subTree})
//         }
//         return movesTree
//     }
// }

const knightStartsAt = [[1, 2], [1, 7], [8, 2], [8, 7]]
const leftKnightBlk = new Knight(knightStartsAt[0])
const rightKnightBlk = new Knight(knightStartsAt[1])
const leftKnightWht = new Knight(knightStartsAt[2])
const rightKnightWht = new Knight(knightStartsAt[3])

const movesTree = leftKnightWht.createMovesTree();









// class Graph {

//     constructor(vertices) {
//         this.vertices = vertices
//         this.adjacencyList = new Map()
//     }
//     addVertex(vertex) {
//         this.adjacencyList.set(vertex, [])
//     }
//     addEdge(vertex, vertex2) {
//         this.adjacencyList.get(vertex).push(vertex2)
//         this.adjacencyList.get(vertex2).push(vertex)
//     }
//     printGraph() {
//         let getKeys = this.adjacencyList.keys()
//         for (let key of getKeys) {
//             let getValues = this.adjacencyList.get(key)
//             let conc = ''

//             for (let j of getValues) {
//                 conc += j + " "
//             }
//             console.log(key + ' -> ' + conc)
//         }
//     }
// }

// const newGraph = new Graph(8)
// let vertices = ['a','b','c','d','e','f','g','h']


// for (let i = 0; i < vertices.length; i++) {
//     newGraph.addVertex(vertices[i])
// }

// newGraph.addEdge('a', 'b')
// newGraph.addEdge('a', 'd')
// newGraph.addEdge('a', 'e')
// newGraph.addEdge('b', 'c')
// newGraph.addEdge('d', 'e')
// newGraph.addEdge('e', 'f')
// newGraph.addEdge('e', 'c')
// newGraph.addEdge('c', 'f')

// newGraph.printGraph()

// breadthFirstSearch(startingNode) {
//     let visited = {}
//     let queue = new Queue()

// }