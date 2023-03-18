class Node {
    row;
    column;
    value = 0;

    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}

let nodes = [[],[],[],[],[],[],[],[]];

const generateBoard = () => {
    let board = document.getElementById('board')
    for (let i = 0; i < 8; i++) {
        const row = document.createElement("div");
        row.className = "row"
        row.id = `${i}`
        for (let j = 0; j < 8; j++) {
            const col = document.createElement("div");
            col.className = "col"
            col.id = `${j}`
            row.appendChild(col)

            let newNode = new Node(i,j)
            nodes[i].push(newNode)
        }
        board.appendChild(row)
    }
    console.log(nodes)
}

const gameStart = () => {
    let score = document.getElementById("score")
    score.style.cssText = "max-width: 30%; margin-top:-600px; margin-left:0%;"
    setNode(3,3,1)
    setNode(4,4,1)
    setNode(3,4,2)
    setNode(4,3,2)



}

const setNode = (row, column, value) => {

}

const getNode = (row, column) => {

}
