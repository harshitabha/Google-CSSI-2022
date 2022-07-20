console.log("script running!");

// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");
const germanTile = document.querySelector("#German");
const haitianCreoleTile = document.querySelector("#Haitian_Creole");
const hindiTile = document.querySelector("#Hindi");

let langs = ["english", "mandarin", "hindi", "spanish", "french", "arabic", "bengali", "russian", "portuguese", "indonesian", "urdu", "german"];
const numLangs = langs.length;
/*console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);*/

// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
const numGuess = document.querySelector("#numGuess");

let ans = 0;

inputField.addEventListener("change", change => {
    let guess = inputField.value.toLowerCase(); // store the val entered
    console.log(guess);
    
    //check if guess is one of the top 12 langs spoken in the world
    if(langs.includes(guess))
    {
        // keep the languages that are not the one that the user guessed
        console.log(langs.filter(f => {return f.name !== guess}));
        console.log(langs)
        document.querySelector("#" + guess).classList.remove("hidden");
    }
    //increment guess count
    ans++;
    //change the html to update the guess and num correct
    numGuess.innerHTML = "Guesses: " + (numLangs-langs.length) + `/${ans}`;

    inputField.value = ""; // clear the input field
});