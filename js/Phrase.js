/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /*
    Set up the Gameboard with spots for phrase letters and spaces.
    */
    addPhraseToDisplay(){
        const div = document.getElementById('phrase');
        for (i = 0; i < this.phrase.length; i += 1) {
            const letter = this.phrase.charAt(i);
            const li = document.createElement('li');
            li.textContent = letter.toUpperCase();
            if (li.textContent === ' '){
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
            }
            div.children[0].appendChild(li);
        }

    }

    // Checks to see if the selected letter is in the phrase.
    checkLetter(letter){
        return this.phrase.includes(letter);
    }


    //Reveals any matched letters
    showMatchedLetter(letter){
        if (this.checkLetter(letter)){
            const matchedLetters = document.getElementsByClassName(letter);
            for (let i = 0; i < matchedLetters.length; i += 1){
                matchedLetters[i].classList.remove('hide');
                matchedLetters[i].classList.add('show');
            }
        }
    }

}