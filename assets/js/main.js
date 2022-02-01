import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll(".board-tile");

document.querySelector(".restart").addEventListener("click", () => {
    onClickRestart();
})

document.querySelector(".theme-changer").addEventListener("click", () => {onClickTheme()})

tiles.forEach((tile)=> {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index); //take index no to onTileClick
    })
})

function onClickTheme(){
    let on = true;
    if(on && !document.querySelector(".all").classList.contains("off") ){
        on = false
        document.querySelector(".all").classList.add("off")
    } else {
        document.querySelector(".all").classList.remove("off")
    }
}

function onTileClick(i){
    //do something

     // making a move
      //i is the clicked index on the board
    game.makeMove(i)

    //game hold info on array + who should play next
    //update the board
    gameView.updateBoard(game);
}

function onClickRestart(){

    //starts new game
    //assign game a mew game function
    game = new Game();

    //update frontend game view with new game function
    gameView.updateBoard(game);

}