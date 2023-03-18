class Node {
    row;
    column;
    value = 0;

    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}


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
        }
        board.appendChild(row)
    }
}

const setNode = (row, column, value) => {

}

const getNode = (row, column) => {

}
