//global object to track game state
function gameState(){
    return {start: 'none', current: ''};
}

let game = gameState();

//function to create the tiles for the board
function createBoard(){
    let board = document.querySelectorAll(".tile");

    board.forEach((item, index) => {
        item.setAttribute('player', 'none');

        item.addEventListener('click', () =>{
            item.setAttribute('player', game.current);

            //if the div is empty
            if (item.innerText == ''){
                item.innerText = game.current;
            }
            //if the div contains something, then we want to stop the change of turns
            else{
                return;
            }

            //if current player is X 
            if (game.current == "X" && game.current != ''){
                game.current = "O";
            }
            else if (game.current == "O" && game.current != ''){
                game.current = "X";
            }
            else{game.current = ''};

            if (gameOver(board, index)){
                console.log("game is over!");
            }
        })
    })

    return board;
}

createBoard();

//global scope var 1
const choice = document.querySelectorAll(".choice");

choice.forEach((item) => {item.addEventListener('click', () => {
    game.start = item.textContent;
    game.current = item.textContent;
})});




//function to check if game is over
function gameOver(board, index){
    switch (index){
        //check rows for center tiles, which have index 1 4 and 7
        case 4:
            //check for diagonals
            if ((board[0].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[8].getAttribute('player'))){
                return true;
            }
            else if ((board[2].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[6].getAttribute('player'))){
                return true;
            }
            else if ((board[index].getAttribute('player') == board[index-1].getAttribute('player')) && (board[index].getAttribute('player') == board[index + 1].getAttribute('player'))){
                return true;
            }
            else{
                break;
            }
        case 1:
            if ((board[index].getAttribute('player') == board[index-1].getAttribute('player')) && (board[index].getAttribute('player') == board[index + 1].getAttribute('player'))){
                return true;
            }
            else{
                break;
            }
        case 7:
            //check for rows
            if ((board[index].getAttribute('player') == board[index-1].getAttribute('player')) && (board[index].getAttribute('player') == board[index + 1].getAttribute('player'))){
                return true;
            }
            else{
                break;
            }

        //check rows for left side tiles, which have index 0, 3 and 6
        case 0:
            if ((board[0].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[8].getAttribute('player'))){
                return true;
            }
            else if ((board[index].getAttribute('player') == board[index+1].getAttribute('player')) && (board[index+1].getAttribute('player') == board[index + 2].getAttribute('player'))){
                return true;
            }
            else{
                break;
            }
        case 3:
            if ((board[index].getAttribute('player') == board[index+1].getAttribute('player')) && (board[index+1].getAttribute('player') == board[index + 2].getAttribute('player'))){
                return true;
            }
        case 6:
            if ((board[2].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[6].getAttribute('player'))){
                return true;
            }

            if ((board[index].getAttribute('player') == board[index+1].getAttribute('player')) && (board[index+1].getAttribute('player') == board[index + 2].getAttribute('player'))){
                return true;
            }

        //check rows for right hand side tiles, which have index 2, 5 and 8
        case 2:
            if ((board[2].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[6].getAttribute('player'))){
                return true;
            }
            
            else if ((board[index].getAttribute('player') == board[index-1].getAttribute('player')) && (board[index-1].getAttribute('player') == board[index -2].getAttribute('player'))){
                return true;
            }
            else{
                break;
            }
        case 5:
            if ((board[index].getAttribute('player') == board[index-1].getAttribute('player')) && (board[index-1].getAttribute('player') == board[index -2].getAttribute('player'))){
                return true;
            }
            else{
                break;
            }
        case 8:
            if ((board[0].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[8].getAttribute('player'))){
                return true;
            }

            if ((board[index].getAttribute('player') == board[index-1].getAttribute('player')) && (board[index-1].getAttribute('player') == board[index -2].getAttribute('player'))){
                return true;
            }
            
    }

    return false;
}

const victoryModal = document.querySelector("[victory-screen]");
const closeButton = document.querySelector("[victory-close]");
function victory(){
    victoryModal.showModal();
    closeButton.addEventListener('click', () => {
        victoryModal.close();
    })
}

