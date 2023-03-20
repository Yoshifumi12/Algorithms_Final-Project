let nodes = [[], [], [], [], [], [], [], []];

let currentPlayer = 0;

let flipQueue = new Array();


const generateBoard = () => {
    let board = document.getElementById('board')
    for (let i = 0; i < 8; i++) {
        const row = document.createElement("div");
        row.className = "row"
        row.id = `${i}`
        for (let j = 0; j < 8; j++) {
            const col = document.createElement("div");
            col.className = "col"
            col.id = `${i}${j}`

            col.addEventListener('click', (event) => {
               changeValue(currentPlayer, col.id)
            });

            row.appendChild(col)

            nodes[i].push(0)
        }
        board.appendChild(row)
    }
}


const gameStart = () => {
    currentPlayer = 1;
    let score = document.getElementById("score")
    score.style.cssText = "max-width: 30%; margin-top:-600px; margin-left:0%;"
    nodes[3][3] = 1;
    nodes[3][4] = 2;
    nodes[4][4] = 1;
    nodes[4][3] = 2;

    updateBoard();
}

const changeValue = (currentPlayer, id)=> {
    let row = id[0];
    let column = id[1];

    nodes[row][column] === currentPlayer;
}
const updateBoard = () => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            setNode(i, j)
        }
    }
}
const play = (node) => {
    
    }

const setNode = (row, column) => {
    let value = nodes[row][column]
    let cell = document.getElementById(`${row}${column}`)

    let circle = document.createElement("div")
    circle.className = "circle"

    if (value === 1) {
        circle.style.backgroundColor = "white"
    }
    if (value === 2) {
        circle.style.backgroundColor = "black"
    }
    cell.appendChild(circle)
    updateScore()
}

const getScore = (player) => {
    let score = 0;
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (nodes[i][k] === player) {
                score += 1
            }
        }
    }
    return score;
}

const updateScore = () => {
    let white = document.getElementById("white")
    let black = document.getElementById("black")

    let whiteScore = getScore(1)
    let blackScore = getScore(2)

    white.innerHTML = `White: ${whiteScore}`;
    black.innerHTML = `Black: ${blackScore}`;;
}

