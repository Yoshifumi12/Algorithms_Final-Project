let nodes = [[], [], [], [], [], [], [], []];

let currentPlayer = 1;

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

            col.addEventListener('click', () => {
                if (verifyUp(col.id, currentPlayer) === true) {
                    drawTile(col.id, currentPlayer)
                } else if (verifyDown(col.id, currentPlayer) === true) {
                    drawTile(col.id, currentPlayer)
                } else if (verifyRight(col.id, currentPlayer) === true) {
                    drawTile(col.id, currentPlayer)
                } else if (verifyLeft(col.id, currentPlayer) === true) {
                    drawTile(col.id, currentPlayer)
                }

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
    drawTile('33', 1)
    drawTile('44', 1)
    drawTile('34', 2)
    drawTile('43', 2)
}

const drawTile = (id, value) => {
    let row = id[0];
    let column = id[1];
    let cell = document.getElementById(`${row}${column}`)

    let circle = document.createElement("div")
    circle.className = "circle"
    if (value === 1) {
        nodes[row][column] = 1;
        circle.style.backgroundColor = "white"
    }
    if (value === 2) {
        nodes[row][column] = 2;
        circle.style.backgroundColor = "black"
    }
    cell.appendChild(circle);
    updateScore();
    changeTurn();

}

const verify = (id, value) => {
    if (verifyUp(id, value) === true || verifyDown(id, value) === true || verifyLeft(id, value) === true || verifyRight(id, value) === true) {
        return true;
    } else {
        return false
    }
}

const getFlippables = (id, value) => {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);

    for (let i = row - 1; i >= 0; i--) {
        if (nodes[i][column] === value) {
            for (let j = row - 1; j >= i; j--) {
                if (nodes[j][column] != value) {
                    flipQueue.push(`${j}${column}`)
                }
            }
        }
    }
    for (let i = row + 1; i < 8; i++) {
        if (nodes[i][column] === value) {
            for (let j = row + 1; j <= i; j++) {
                flipQueue.push()
            }
        }
    }
    console.log(flipQueue)
}




const verifyUp = (id, value) => {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);

    if (nodes[row][column] != 0) {
        return false;
    }
    for (let i = row - 1; i >= 0; i--) {
        if (nodes[i][column] === value) {
            for (let j = row - 1; j >= i; j--) {
                if (nodes[j][column] === value || nodes[j][column] === 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
}

const verifyDown = (id, value) => {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);

    if (nodes[row][column] != 0) {
        return false;
    }
    for (let i = row + 1; i < 8; i++) {
        if (nodes[i][column] === value) {
            for (let j = row + 1; j <= i; j++) {
                if (nodes[j][column] === value || nodes[j][column] === 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
}

const verifyRight = (id, value) => {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);

    if (nodes[row][column] != 0) {
        return false;
    }
    for (let i = column + 1; i < 8; i++) {
        if (nodes[row][i] === value) {
            for (let j = column + 1; j <= i; j++) {
                if (nodes[row][j] === value || nodes[row][j] === 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
}

const verifyLeft = (id, value) => {
    let row = parseInt(id[0]);
    let column = parseInt(id[1]);

    if (nodes[row][column] != 0) {
        return false;
    }
    for (let i = column - 1; i >= 0; i--) {
        if (nodes[row][i] === value) {
            for (let j = column - 1; j >= i; j--) {
                if (nodes[row][j] === value || nodes[row][j] === 0) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    }
}

changeTurn = () => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

const getScore = (player) => {
    let score = 0;
    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (nodes[i][k] === player) {
                score++
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
    black.innerHTML = `Black: ${blackScore}`;
}


