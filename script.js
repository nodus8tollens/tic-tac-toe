<<<<<<< HEAD
function gamestart() {
    const gameboard = [];

    let moveCount = 0;

    const pl1 = {
        name: this.name,
        marker: 'x'
    }

    const pl2 = {
        name: this.name,
        marker: 'o'
    }

    function currentPlayer(){
        if(moveCount % 2 === 0) return pl1.marker;
        else return pl2.marker;
    }
=======
const squares = document.querySelectorAll('[data-index]');

let gameBoard = new Array(9);

const gameCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let count = 0;

function toggleMarker(){
    if(count % 2 === 0) return 'x';
    else return 'o';
}

function makeMove(square){
    square.addEventListener('click', () => {
        let marker = toggleMarker();
        gameBoard[parseInt(square.getAttribute('data-index'))] = marker;
        square.innerText = marker;
        if(gameBoard.length > 3) gameCheck();
        count++;
    }, {once: true})
}
function startGame(){
    squares.forEach(makeMove);
}

function gameCheck() {
    for (let i = 0; i < gameCombo.length; i++) {
        if (gameBoard[gameCombo[i][0]] === 'x' && gameBoard[gameCombo[i][1]] ==='x' && gameBoard[gameCombo[i][2]] === 'x') {
            squares.forEach(square => {
                square.removeEventListener('click', makeMove);
                gameBoard = [];
            })
            return console.log('X WINS');

        }
        if (gameBoard[gameCombo[i][0]] === 'o' && gameBoard[gameCombo[i][1]] === 'o' && gameBoard[gameCombo[i][2]] === 'o') {
            squares.forEach(square => {
                square.removeEventListener('click', makeMove); //DOESNT WORKKKK
                gameBoard = [];
            })
            return console.log('O WINS');
        }
    }
}

startGame();



>>>>>>> fcc105f688ed852bbb46184193eddf846effcfce

    const squares = document.querySelectorAll('[data-index]');

<<<<<<< HEAD
    squares.forEach(square => {
        square.innerText = '';
        square.addEventListener('click', () => {
            console.log(gameboard);
            square.innerText = currentPlayer();
            gameboard[parseInt(square.getAttribute('data-index'))] = currentPlayer();
            moveCount++;
        }, {once: true})
    })
}
=======
>>>>>>> fcc105f688ed852bbb46184193eddf846effcfce


const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', gamestart);
