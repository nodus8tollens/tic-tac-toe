function gameStart() {
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

    function checkScore() {
        for (let i = 0; i < 8; i++) {
            if (gameBoard[gameCombo[i][0]] === 'x' && gameBoard[gameCombo[i][1]] === 'x' && gameBoard[gameCombo[i][2]] === 'x') {
                return pl1.name + ' Wins';
            }

            if (gameBoard[gameCombo[i][0]] === 'o' && gameBoard[gameCombo[i][1]] === 'o' && gameBoard[gameCombo[i][2]] === 'o') {
                return pl2.name + ' Wins';
            }
        }
    }

    let moveCount = 0;

    const pl1 = {
        name: this.name,
        marker: 'x'
    }

    const pl2 = {
        name: this.name,
        marker: 'o'
    }

    const pl1Name = document.querySelector("#playerOne");
    const pl2Name = document.querySelector("#playerTwo");

    pl1.name = pl1Name.value;
    pl2.name = pl2Name.value;

    function currentPlayer() {
        if (moveCount % 2 === 0) return pl1.marker;
        else return pl2.marker;
    }

    const squares = document.querySelectorAll('[data-index]');

    squares.forEach(square => {
        square.innerText = '';
        square.addEventListener('click', () => {
            square.innerText = currentPlayer();
            gameBoard[parseInt(square.getAttribute('data-index'))] = currentPlayer();
            moveCount++;
            console.log(checkScore());

        }, {once: true})
    })


}


const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', gameStart);