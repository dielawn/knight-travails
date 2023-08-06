const containerDiv = document.getElementById('container')

class Knight {

}

class ChessBoard {
    constructor() {
        this.yAxis = ['1','2','3','4','5','6','7','8']
        this.xAxis = ['a','b','c','d','e','f','g','h']
    }
    createBoard() {
        const squareId = []
        for (let i = 0; i < this.yAxis.length; i++) {
            for (let j = 0; j < this.xAxis.length; j++) {
                squareId.push(this.xAxis[i] + this.yAxis[j])
            }
        }
        console.log(squareId)
    }
}

const chessBoard = new ChessBoard()
chessBoard.createBoard()
