console.log("script running!");

/** OBJECTS */
let myCar;
myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
};
myCar.description = myCar.year + " " + myCar.make + " " + myCar.model;
// console.log(myCar);

myCar.make = "Ford";
myCar.model = "F-150";

// console.log("My new car is a", myCar.year, myCar.make, myCar.model + "!");
// console.log("My new car is a", myCar.description + "!");


/** ARRAYS */
let animals = ["pig", "tapir", "donkey", "fish", "cat", "bird"];
animals.push("dog");



/** OBJECTS WITH ARRAYS */
let tutor1 = {
    name: "Marie",
    subject: "Math",
    age: 28,
    students: ["Stefan", "Dianna", "Earl", "Alice"]
};
let tutor2 = {
    name: "Jonathon",
    subject: "ENglish",
    age: 27,
    students: ["Marcos", "Dianna", "Tonya", "Erin"]
};

tutor1.students.push("Andy");
let allTutors = [tutor1, tutor2];
// console.log(allTutors[1]);

/** ARRAYS WITH OBJECTS */
let bouquet = [
    { type: "rose", color: "pink", count: 4 },
    { type: "rose", color: "yellow", count: 3 },
    { type: "carnation", color: "pink", count: 4 },
    { type: "delphiniums", color: "purple", count: 7 },
  ];
 
//   console.log(bouquet[1].color);
  // Output 1 - yellow
 
//   console.log(bouquet[3]);
  // Output 2 - the 4th obj { type: "delphiniums", color: "purple", count: 7 }
 
//   console.log(bouquet[0].type);
  // Output 3 - rose


/** ARRAY ITERATION */
/*for(let ani of animals)
{
    console.log(`There is a ${ani} in the house`);
}*/

// Challenges
// mild
let musician = {
    name: "Saxon",
    instrument: "Saxophone",
    age: 15,
    yrs_experience: 3,
};
if(musician.yrs_experience > 10 && musician.age < 18) musician.protigy = true;

console.log(`Hi, I'm a musician and my name is ${musician.name}. I'm ${musician.age} and I have been playing the ${musician.instrument} for ${musician.yrs_experience} years`);

let colors = ["orange", "beige", "gold", "grey", "green", "red", "violet", "white", "blue"];
console.log(colors[4]);
colors.push("chartreuse");
console.log(colors.indexOf("blue"));

//medium
const all_words = [
    "control",
    "discussion",
    "hope",
    "swing",
    "frantic",
    "clam",
    "judge",
    "alive",
    "incompetent",
    "dress",
    "heave",
    "splendid",
    "zippy",
    "jeans",
    "regret",
    "kick",
    "sentence",
    "clever",
    "oafish",
    "treat",
    "mine",
    "kneel",
    "smile",
    "soar",
    "murky",
    "bitter",
    "lively",
    "protest",
    "fluttering",
    "elderly",
    "sidewalk",
    "shout",
    "sew",
    "chase",
    "miscreant",
    "merge",
    "assort",
    "swift",
    "fireman",
    "square",
    "wash",
    "ball",
    "summer",
    "send",
    "digestion",
    "office",
    "space",
    "lose",
];

let count = 0;
for(let w of all_words)
{
    if(w.length == 5) count++;
}

console.log("The number of 5 letter words in all_words are:", count); // Save the total count in this variable

// Spicy
const scrambled_numbers = [
    9, 25, 28, 22, 21, 0, 27, 14, 23, 26, 13, 12, 19, 20, 7, 29, 4, 6, 15, 17, 16,
    24, 5, 3, 8, 1, 2, 11, 18, 10,
];
const scrambled_words = [
    "in",
    "and",
    "their",
    "away",
    "mile",
    "Before",
    "have",
    "when",
    "from",
    "you",
    "way",
    "That",
    "are",
    "a",
    "a",
    "shoes.",
    "you",
    "walk",
    "you",
    "them,",
    "criticize",
    "them",
    "should",
    "someone,",
    "mile",
    "you",
    "criticize",
    "shoes.",
    "you",
    "their",
];

let unscrambled_words = [];
// poplulate an empty array
unscrambled_words.fill("", 0, scrambled_numbers.length);

// unscrabling the message
for(let w = 0; w < scrambled_numbers.length; w++) unscrambled_words[scrambled_numbers[w]] = scrambled_words[w];

let secret_message = unscrambled_words.join(" ");

console.log(secret_message);