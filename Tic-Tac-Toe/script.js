//global object to track game state
function gameState(){
    return {start: 'none', current: ''};
}

let game = gameState();

//function to create the tiles for the board
function createBoard(){
    let board = Array.from(document.querySelectorAll(".tile"));

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

            if (gameOver(board, index)){
                console.log("game is over!");
                victory(true, board);
                return;
            }

            if (board.every(cell => cell.innerText != '')){
                victory(false, board);
                return;
            }
            //if current player is X 
            if (game.current == "X" && game.current != ''){
                game.current = "O";
                document.querySelector(".turn > p").innerText = game.current + "'s turn!";
            }
            else if (game.current == "O" && game.current != ''){
                game.current = "X";
                document.querySelector(".turn > p").innerText = game.current + "'s turn!";
            }
            else{game.current = ''};


        })
    })

    if (board.every(cell => cell.getAttribute('player') !== '')){
        
    }
    return board;
}

createBoard();

//global scope var 1
const choice = document.querySelectorAll(".choice");

choice.forEach((item) => {item.addEventListener('click', () => {
    game.start = item.textContent;
    game.current = item.textContent;
    startGame();
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
            break;
        case 6:
            if ((board[2].getAttribute('player') == board[4].getAttribute('player')) && (board[4].getAttribute('player') == board[6].getAttribute('player'))){
                return true;
            }

            if ((board[index].getAttribute('player') == board[index+1].getAttribute('player')) && (board[index+1].getAttribute('player') == board[index + 2].getAttribute('player'))){
                return true;
            }
            break;

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

function victory(condition, board){
    if (condition == true){
    document.querySelector('.winner').innerText = game.current + " Wins!";
    victoryModal.showModal();
    closeButton.addEventListener('click', () => {
        victoryModal.close();
        reset(board);
    })}
    else{
        document.querySelector('.winner').innerText = "It is a draw!";
        victoryModal.showModal();
        closeButton.addEventListener('click', () => {
            victoryModal.close();
            reset(board);
})}   
    }

//function to start the game

function startGame(){
    document.querySelector(".bottom").style.display = 'none';
    document.querySelector(".turn").style.display = 'flex';
    document.querySelector(".turn > p").innerText = game.current + "'s turn!";
}

//function to reset game
function reset(board){
    board.forEach((item) => {
        item.setAttribute('player', '');
        item.innerText = '';
    })
}

