/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game = new Game();
/*
Starts by putting event listener on start button
 */
 const startBtn = document.getElementById('btn__reset');
 startBtn.addEventListener('click', function(){
    game.startGame();
 });


 /*
 Add event listener to keyboard buttons
 */
const keys = document.getElementsByClassName('key');
for (i=0; i < keys.length; i += 1) {
    keys[i].addEventListener('click', function(e){
        game.handleInteraction(e.target);
    })
    keys[i].style.boxShadow = "5px 5px 5px grey";
};


/*
Add keyboard interaction
*/
addEventListener('keyup', function(e){
    if(game.gameStarted){
        for (let i=0; i < keys.length; i += 1){
            if (e.key.toLowerCase() === keys[i].innerHTML){
                keys[i].focus();
                game.handleInteraction(keys[i]);
                return;
            }
        }
    }
});