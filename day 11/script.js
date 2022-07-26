// Helper function to get a random integer up to (but not including) the maximum.
const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
  // Select the spans & divs where we'll display outputs.
  const pointsSpan = document.querySelector("#points");
  const scoreSpan = document.querySelector("#score");
  const questionDiv = document.querySelector("#question");
  
  // Select the buttons and input fields where users can provide inputs.
  const randomButton = document.querySelector("#random");
  const hardButton = document.querySelector("#hard");
  const catPunsButton = document.querySelector("#catPuns");
  const submitButton = document.querySelector("#submit");
  const answerInputBox = document.querySelector("#userAnswer");
  
  // Starting variables - we'll fill replace these with the API.
  let currentQuestion =
    "The Japanese name for this grass-type pokemon, Fushigidane, is a pun on the phrase 'strange seed.'";
  let currentAnswer = "bulbasaur";
  let currentPoints = 300;
  let currentCat = "";
  let currentScore = 0;

  let live = true;
  
  // Function to update the text on the board to match our variables.
  const updateBoard = () => {
    pointsSpan.innerHTML = currentPoints;
    scoreSpan.innerHTML = currentScore;
    questionDiv.innerHTML = currentQuestion;
  };
  
  // Populate the board on page load!
  updateBoard();
  
  // Finish this function that checks the user's answer.
  const checkAnswer = () => {
    console.log("You guessed:", answerInputBox.value);
    console.log("Correct answer:", currentAnswer);
    let ans = answerInputBox.value.toLowerCase().trim();

    if(live)
    {
        if(ans === currentAnswer.toLowerCase()) currentScore += currentPoints;
        else currentScore -= currentPoints;
        live = false
    }
    else alert("You have already answered the question. Please generate a new one");


    updateBoard();
    answerInputBox.value = "";

  };
  
  // Attach the function to the submit button via an event listener.
  submitButton.addEventListener("click", checkAnswer);

  // Write out an API call for each of the three question byttons on screen.

  const updateVals = (data, i=0) => {
    currentQuestion = data[i].question;
    currentPoints = data[i].value;
    currentAnswer = data[i].answer;
    currentCat = data[i].category_id;
    live = true

    updateBoard();
  };
  // Getting a random question
  const getRandomQuestion = async () => {
    // get one random question
    const response = await fetch("https://jeopardy.wang-lu.com/api/random?count=1");
    const data = await response.json();
    updateVals(data);
  };
  const getHardQuestion = async () => {
    // get one random question
    const response = await fetch("https://jeopardy.wang-lu.com/api/clues?value=1000");
    const data = await response.json();
    const i = getRandomInt(data.length); // get a random question from the qs returened
    
    updateVals(data, i);
  };
  const getCatQuestion = async () => {
    // get one random question
    const response = await fetch("https://jeopardy.wang-lu.com/api/clues?category=" + currentCat);
    const data = await response.json();
    const i = getRandomInt(data.length); // get a random question from the qs returened
    updateVals(data, i);
  };

  randomButton.addEventListener("click", getRandomQuestion);
  hardButton.addEventListener("click", getHardQuestion);
  catPunsButton.addEventListener("click", getCatQuestion);