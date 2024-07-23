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
function gameOver(board, index){
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
        case 1:
        case 7:
            //check for rows
            if ((board[index].player == board[index-1].player) && (board[index].player == board[index + 1].player)){
                return true;
            }

        //check rows for left side tiles, which have index 0, 3 and 6
        case 0:
            if ((board[0].player == board[4].player) && (board[4].player == board[8].player)){
                return true;
            }
        case 3:
        case 6:
            if ((board[2].player == board[4].player) && (board[4].player == board[6].player)){
                return true;
            }

            if ((board[index].player == board[index+1].player) && (board[index+1].player == board[index + 2].player)){
                return true;
            }

        //check rows for right hand side tiles, which have index 2, 5 and 8
        case 2:
            if ((board[2].player == board[4].player) && (board[4].player == board[6].player)){
                return true;
            }
        case 5:
        case 8:
            if ((board[0].player == board[4].player) && (board[4].player == board[8].player)){
                return true;
            }

            if ((board[index].player == board[index-1].player) && (board[index-1].player == board[index -2].player)){
                return true;
            }

    }

    return false;
}

