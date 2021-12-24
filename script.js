let gameBoard = new Array(9);


let marker = 'x';

const squares = document.querySelectorAll('[data-index]');

squares.forEach(square => {
    square.addEventListener('click', () => {
        square.innerText = marker;
        gameBoard[parseInt(square.getAttribute('data-index'))] = marker;


    })
})




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