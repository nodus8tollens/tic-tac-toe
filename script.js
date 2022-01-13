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

    const squares = document.querySelectorAll('[data-index]');

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


const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', gamestart);
