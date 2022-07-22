console.log("script running!");

// let picture = document.querySelector(".card-image");
// console.log(picture);

let pictures = document.querySelectorAll(".card-image");
// pictures.forEach((picture) => {
//   console.log(picture);
// });

let quiz = {
  flavor: ["active", "calm", "active", "calm", "active"],
  temperature: ["cold", "hot", "cold", "hot"],
  transp: ["active", "active", "calm", "active"],
  activity1: ["active", "calm", "active", "calm"],
  fruit: ["active", "calm", "active", "calm"],
  activity2: ["active", "calm", "active", "calm"],
};
let quizLength = Object.keys(quiz).length;

let quizTaker = {
  active: 0,
  calm: 0,
  hot: 0,
  cold: 0,
};
// console.log(quizTaker);

let selections = {};

// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    let choice = picture.id.split("-");
    // console.log(choice);

    let question = choice[0];
    let index = choice[1];
    let answer = quiz[question][index];
    // quiz["color"][1];
    // quiz.color[1];
    // console.log(answer);

    if (selections[question] === undefined) {
      quizTaker[answer]++;
      selections[question] = picture.id;
    } else if (selections[question] === picture.id) {
      quizTaker[answer]--;
      delete selections[question];
    } else if (selections[question] !== picture.id) {
      let prevID = selections[question];

      let prevChoice = prevID.split("-");
      let prevAnswer = quiz[prevChoice[0]][prevChoice[1]];
      quizTaker[prevAnswer]--;

      let prevPicture = document.querySelector("#" + prevID);
      prevPicture.classList.toggle("has-background-light");
      prevPicture.classList.toggle("is-info");

      selections[question] = picture.id;
      quizTaker[answer]++;
    }
    console.log(quizTaker);

    picture.classList.toggle("has-background-light");
    picture.classList.toggle("is-info");

    if (Object.keys(selections).length === quizLength) {
      let resultID;

      if (quizTaker.active > quizTaker.calm) {
        resultID = "#active-";
      } else {
        resultID = "#calm-";
      }

      if (quizTaker.hot > quizTaker.cold) {
        resultID += "hot";
      } else {
        resultID += "cold";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});