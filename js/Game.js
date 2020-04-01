/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.gameStarted = false;
    }

    /**
     * Create my random phrases
     * @return {array} Array of possible phrases
     */
    createPhrases() {
        return[new Phrase('The Phantom Menace'),
                new Phrase('Attack of the Clones'),
                new Phrase('Revenge of the Sith'),
                new Phrase('A New Hope'),
                new Phrase('The Empire Strikes Back'),
                new Phrase('Return of the Jedi'),
                new Phrase('The Force Awakens'),
                new Phrase('The Last Jedi'),
                new Phrase('Rise of Skywalker')];
    };

    /**
     * Select random phrase from list above
     * @return {object} Phrase object
     */
    getRandomPhrase() {
        const phraseNum = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[phraseNum];
    };


    /**
     * Start game
     */
    startGame() {
        this.reset();
        this.gameStarted = true;
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        document.getElementById('banner').style.background = 'red';
        document.getElementById('phrase').style.background = 'silver';
        document.getElementById('qwerty').style.background = 'black';
        document.getElementById('scoreboard').style.background = 'silver';

    };


    /**
     * Controls what happens when letters are chosen
     * @param {string} Letter chosen 
     */
    handleInteraction(button){
        if (button.disabled){
            return;
        };
        button.disabled = true;
        const buttonLetter = button.innerHTML;
        console.log('buttonLetter =' + buttonLetter);
        if(this.activePhrase.checkLetter(buttonLetter)){
            this.activePhrase.showMatchedLetter(buttonLetter);
            button.classList.add('chosen');
            button.style.boxShadow = "5px 5px 5px green";
            if(this.checkForWin()){
                this.gameOver(true);
            };
        } else {
            button.classList.add('wrong');
            this.removeLife();
            button.style.boxShadow = "5px 5px 5px red";
        }
    }



    /**
     * Check whether player has guessed the full phrase.
     * @return {boolean} Check if won.  If yes, true.  If no, false.
     */
    checkForWin() {
        const hiddenLetters = document.getElementsByClassName('hide');
        const tries = document.getElementsByClassName('tries');
        if(hiddenLetters.length === 0 && tries.length > 0){
            return true
        }
        return false;
    }


    /**
     * If you miss, takes away a heart
     */
    removeLife() {
        this.missed += 1;
        const hearts = document.querySelectorAll('#scoreboard img');
        hearts[hearts.length-this.missed].src = 'images/lostHeart.png';
        if(this.missed === 5){
            this.gameOver(false);
        }
    };



    /**
     * Display game over message
     * @param {boolean} gameOver-won or lost
     */
    gameOver(gameWon){
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        const h1 = document.getElementsByTagName('h1')[0];
        this.gameStarted = false;
        if(gameWon){
            h1.textContent = 'You Won!!';
            overlay.classList.replace('start', 'win');
        } else {
            h1.textContent = 'You Lost!!';
            overlay.classList.replace('start', 'lose');
        }
    };




    /**
     * Reset gameboard
     */
    reset() {
        this.missed = 0;
        document.getElementById('phrase').children[0].innerHTML = '';
        const keyrows = document.getElementsByClassName('keyrow');
        for (let i=0; i < keyrows.length; i += 1){
            for (let j=0; j < keyrows[i].children.length; j += 1){
                keyrows[i].children[j].disabled = false;
                keyrows[i].children[j].className = 'key';
                keyrows[i].children[j].style.boxShadow = "5px 5px 5px grey";
            }
        }
        const hearts = document.querySelectorAll('#scoreboard img');
        for (let i=0; i < hearts.length; i += 1){
            hearts[i].src='images/liveHeart.png';
        }
        document.getElementById('overlay').className = 'start';
    }





 }