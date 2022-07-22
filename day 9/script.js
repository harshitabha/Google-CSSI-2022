console.log("script running!");

// Access all the figures using the class.
let pictures = document.querySelectorAll(".card-image");

// accessing the finish btn
const finish = document.querySelector(".button");
 
// Fill in the object.
let quiz = {
  color: ["logical", "creative", "logical", "creative"],
  vacation: ["extrovert", "introvert", "extrovert", "introvert"],
  pizza: ["creative", "logical", "creative", "logical"],
  house: ["introvert", "extrovert", "introvert", "extrovert"],
  fruit: ["logical", "creative", "logical", "creative"],
  activity: ["extrovert", "introvert", "extrovert", "introvert"],
};

// 'quizTaker' object here.
let quizTaker = {
    logical: 0,
    creative: 0,
    extrovert: 0,
    introvert: 0
};

let answers = {
    color: "",
    vacation: "",
    pizza: "",
    house: "",
    fruit: "",
    activity: ""
}

// Make every image clickable!
pictures.forEach((picture) => {
    picture.addEventListener("click", (e) => {
        // Save the user's choice in a variable.
        let choice = picture.id.split("-");
        // console.log(choice);

        // Change the background yellow.
        // picture.classList.toggle("has-background-light"); // not  needed ??
        // picture.classList.toggle("has-background-warning");

        let q = choice[0]
        let ans = choice[1]

        // check if answeres[key] is defined
        if(answers[q] !== "") // if the question has already been answered
        {
            for(let i = 0; i < 4; i++)
            {
                let ele = document.querySelector(q + i);
                ele.classList.toggle("has-background-warning"); // deselect any previous choices
            }
        }

        picture.classList.toggle("has-background-warning"); // change the color of the selected choice
        // assign the val of the choice to the answeres obj
        // answers[q] = quizTaker[q][ans];

        // if it is go through all the ids of that q and toggel them off
        // otherwise toggel on
        console.log(quizTaker[q][ans])
        console.log(quizTaker)
        // quizTaker[ans]++;

    });
});
// If all the questions have been answeredd and the finished button is clicked, unhide the result.
finish.addEventListener("click", c => {

    let answered = true;
    // check if all the questions have been answered
    for(let a in answers){
        if(answers[a] == "" || answers[a] == undefined) answered = false;
    }
    
    if (answered) {
        finish.classList.toggle("hidden");
        let resultID;

        if (quizTaker.logical > quizTaker.creative) {
            resultID = "#logical-";
        } else {
            resultID = "#creative-";
        }

        if (quizTaker.introvert > quizTaker.extrovert) {
            resultID += "introvert";
        } else {
            resultID += "extrovert";
        }

        let result = document.querySelector(resultID);
        console.log(result);
        result.classList.remove("hidden");
    }
    // if all the questions have not been answered then send an alert telling the user to ans the questions
    else alert("❗Please answer all the questions❗");
});