//global object to track game state
function gameState(){
    return {start: 'none', current: 'none'};
}

let gameState = gameState();

//function to create the tiles for the board
function createBoard(){
    let board = document.querySelectorAll(".tile");

    board.forEach((item) => {
        item.setAttribute('player', 'none');
    })

    return board;
}

//global scope var 1
const choice = document.querySelectorAll(".choice");

choice.forEach((item) => addEventListener('click', () => {
    gameState.start = item.textContent;
    gameState.current = item.textContent;
}));

//function to check if game is over
function gameOver(board, index, player){
    switch (index){
        //check rows for center tiles, which have index 1 4 and 7
        case 1:
        case 4:
            //check for diagonals
            if ((board[0].player == board[4].player) && (board[4].player == board[8].player)){
                return true;
            }
            if ((board[2].player == board[4].player) && (board[4].player == board[6].player)){
                return true;
            }
        case 7:
            //check for rows if center tiles are clicked on
            if ((board[index].player == board[index-1].player) && (board[index].player == board[index + 1].player)){
                return true;
            }

    }
}

