export default class GameView{
    constructor(){

    }

    updateBoard(game){
        //text color change
        this.updateTurn(game);
        //find winnig combination
        const winningCombination = game.findWinningCombinations();

        //loops through an array for adding class: tile-winner to all wining divs
        for(let i =0; i<game.board.length; i++){
            //starting of loop at i = 0
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);

            tile.classList.remove("tile-winner");

            //checks value in array.
            let tileType = game.board[i] == 'X' ? "tile-x" : "tile-o";
            
            //adds span of x or o  with class to tile 1 accourding to array
            tile.innerHTML =`<span class ="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`

            //adds class to tile if part of winning combernation
            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }
    updateTurn(game){
        let playerX = document.querySelector(".player-X");
        let playerO = document.querySelector(".player-O");

        playerX.classList.remove('active');
        playerO.classList.remove('active');


        if(game.turn == 'X'){
            playerX.classList.add('active');
        } else {
            playerO.classList.add('active');
            
        }

    }
}