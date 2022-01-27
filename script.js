function gameStart() {
    let gameBoard = ['','','','','','','','','',];

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
        name: document.querySelector("#playerOne").value,
        marker: 'x'
    }

    const pl2 = {
        name: document.querySelector("#playerTwo").value,
        marker: 'o'
    }

    const squares = document.querySelectorAll('[data-index]');

    //CHECK FOR WIN OR DRAW
    function checkScore() {
        for (let i = 0; i < 8; i++) {
            if (gameBoard[gameCombo[i][0]] === 'x' && gameBoard[gameCombo[i][1]] === 'x' && gameBoard[gameCombo[i][2]] === 'x') {
                removeListeners();
                return pl1.name + ' Wins';
            }

            else if (gameBoard[gameCombo[i][0]] === 'o' && gameBoard[gameCombo[i][1]] === 'o' && gameBoard[gameCombo[i][2]] === 'o') {
                removeListeners();
                return pl2.name + ' Wins';
            }

        }
    }

    //KEEPS TRACK OF CURRENT PLAYER BASED ON MOVE COUNT (EVEN FOR PL1, ODD FOR PL2)
    function currentPlayer() {
        if (moveCount % 2 === 0) return pl1.marker;
        else return pl2.marker;
    }

    function placeMarker() {
        this.innerText = currentPlayer();
        gameBoard[parseInt(this.getAttribute('data-index'))] = currentPlayer();
        moveCount++;
        checkScore();
        console.log(checkScore());
    }

    for(let i = 0; i < squares.length; i++){
        squares[i].innerText = '';
        squares[i].addEventListener('click', placeMarker , {once: true})
    }

    function removeListeners(){
        for(let i = 0; i < squares.length; i++){
            squares[i].removeEventListener('click', placeMarker);
        }
    }
}

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', gameStart);