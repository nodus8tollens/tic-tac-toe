function gameStart() {
    const gameBoard = [];

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

    let moveCount = 0;

    const pl1 = {
        name: this.name,
        marker: 'x'
    }

    const pl2 = {
        name: this.name,
        marker: 'o'
    }

    function currentPlayer() {
        if (moveCount % 2 === 0) return pl1.marker;
        else return pl2.marker;
    }

    const squares = document.querySelectorAll('[data-index]');

    squares.forEach(square => {
        square.innerText = '';
        square.addEventListener('click', () => {
            console.log(gameBoard);
            square.innerText = currentPlayer();
            gameBoard[parseInt(square.getAttribute('data-index'))] = currentPlayer();
            moveCount++;
        }, {once: true})
    })
}

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', gameStart);
