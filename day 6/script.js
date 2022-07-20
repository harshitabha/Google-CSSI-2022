// CTRL + ALT + N to run

// guessing the number game
function guessNum(){
    let num = parseInt(prompt("Enter a secret number between 0 and 9\nNOTE: If a decimal number is entered it will be truncated"));
    console.log("Type a secret number here, and I'll try to guess it.");
    /** If the user enters:
     * A string
     * A number above 9
     * a neg number
     * ==> have the user re enter the number until they statisfy the conditions
     * NOTE: if a decimal number is entered it will be truncated
     */
    while(isNaN(num) == true || num > 9 || num < 0) num = parseInt(prompt("Error! please enter a number between 0 and 9\nNOTE: If a decimal number is entered it will be truncated"));

    for(let i = 0; i < 10; i++)
    {
        if(i !== num) console.log(`Looks like it's not ${i}, so I'll keep guessing...`); // check this val of i
        else
        {
            // if the number is found break out of the loop
            console.log("OH! Your number is " + i.toString);
            break;
        }
    }
}

// checking a person's age to see if they are meet certain reqs
function ageCheck()
{
    let age = parseInt(prompt("Enter your age (as a number)"));
    // make sure the value entered is a positive number
    while(isNaN(age) == true || age < 0)
    {
        // console.log(num.toString() + " " + typeof(age));
        age = parseInt(prompt("Error! Please enter a valid age (as a number)"));
    } 

    if(age >= 18) console.log("You're old enough to vote!");
    else if(age >= 21) console.log("You're legally allowed to drink in the US\nYou can rent a car in the US");
    else if(age >= 25) console.log("You can rent a car without a subcharge");
    else if(age >= 67) console.log("You're old enough to retire.");
    else console.log("You're not old enough to vote.");

}

ageCheck();
//JS practice from beginning of the lesson; commented out to avoid interferance

// Let's store a string in the name variable.
// let name = "Taylor Swift";

// Let's store a number in the age variable.
/*let age = 6;

// Let's store a third type of data called a boolean, which has only two possible values: true or false.
let bool = true;

// What’s another piece of information about Beyonce that would best be captured as a string?
let album = "Red";

// What’s another piece of information about Beyonce that would best be captured as a number?
let numAlbums = 9;

// What’s another piece of information about Beyonce that would best be captured as a boolean value?
let grammyWinner = true;
*/
// A string is a word, but a boolean is also a word - what’s the best way to tell them apart?
// console.log(typeof(name));

// Let's look at string concatenation.
// let name = prompt("What is your name?");
// console.log(`Welcome ${name}`);

// Let's check for a password as well.
/*let pass = prompt("Enter your password");
// Let's print a special greeting only for Beyonce.
if(name === "Beyonce" && pass === "PASS") console.log("Welcome Queen B");
else if(pass !== "PASS") console.log("WARNING: incorrect password");
else console.log(`Welcome to the program ${name}!`); // password must be correct to get this response*/


// How can we log "hello" multiple times?
/*for(let i = 0; i < 10; i++)
{
    console.log("i is currently " + i.toString());
}*/

// How can we find the sum of all the numbers between 10 and 20?
/*let sum=0;
for(let i = 10; i < 20; i++) sum += i;
console.log(sum);*/
