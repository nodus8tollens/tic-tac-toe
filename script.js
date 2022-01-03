const squares = document.querySelectorAll('[data-index]');

let gameBoard = new Array(9);

let count = 0;
function toggleMarker(){
    if(count % 2 === 0) return 'x';
    else return 'o';
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        let marker = toggleMarker();
        gameBoard[parseInt(square.getAttribute('data-index'))] = marker;
        square.innerText = marker;
        gameCheck();
        count++;

    }, {once: true})
})



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

function gameCheck() {
    for (let i = 0; i < gameCombo.length; i++) {
        if (gameBoard[gameCombo[i][0]] === 'x' && gameBoard[gameCombo[i][1]] ==='x' && gameBoard[gameCombo[i][2]] === 'x') {
            console.log('X WINS')
        }
        else if (gameBoard[gameCombo[i][0]] === 'o' && gameBoard[gameCombo[i][1]] === 'o' && gameBoard[gameCombo[i][2]] === 'o') {
            console.log('O WINS')
        }
    }
}

const myModule = (function() {
    'use strict';

    //PUBLIC
    const publicProperty = 'I am a public property';
    function publicMethod() {
        _privateMethod();
    }

    //PRIVATE
    const _privateProperty = 'Hello World';
    function _privateMethod() {
        console.log(_privateProperty);
    }



    return {
        publicMethod: publicMethod,
        publicProperty: publicProperty
    };
})();