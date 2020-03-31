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
        for (let i = 0, i < globalThis.phrase.length, i += 1){
            const letter = this.phrase.charAt(i);
            const li = document.createElement('li');
            li.textContent = letter;
            if (li.textContent === ' '){
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
            }
            div.children[0].appendChild(li);
        }

    }

    // Checks to see if the selected letter is in the phrase.
    checkletter(letter){
        const letters = document.getElementsByClassName('letter');
        for (let i = 0, i < letters.length; i += 1){
            if (letters[i].innerHTML === letter){
                return true;
            }
            return false;
        }
    }


    //Reveals any matched letters
    showMatchedLetter(letter){
        if (this.checkedLetter(letter)){
            const matchedLetters = document.getElementsByClassName(letter);
            for (let i = 0; i < matchedLetters.length; i += 1){
                matchedLetters[i].classList.remove('hide');
                matchedLetters[i].classList.add('show');
            }
        }
    }

}