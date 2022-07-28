let clue1 = document.querySelector("#clue-1");
let button = document.querySelector("#button");
let clue2 = document.querySelector("#clue-2");

let page = document.querySelector(".hero");
let body = document.querySelector("#main-body");

const alphaCode = "what";
const numCode = "13518" 

button.addEventListener("click", (e) => {
  button.classList.add("hidden");
  clue2.classList.remove("hidden");
});

// window is the viewable part of the website => anything that you see; predfined
let pass = [];
window.addEventListener("keypress", k =>
{
    pass.push(k.key);
    let alphaAttempt = pass.slice(-alphaCode.length); // gets the last 4 letters entered
    let numAttempt = pass.slice(-numCode.length); // gets the last 4 letters entered


    if(alphaAttempt.join("").toLowerCase() === alphaCode.toLowerCase())
    {
        clue1.classList.add("hidden");
        button.classList.remove("hidden");
    }

    // only if the 2nd clue is visible and if the user 
    if(!clue2.classList.value.includes("hidden") && numAttempt.join("").toLowerCase() === numCode.toLowerCase())
    {
        page.classList.remove("has-background-black");
        body.innerHTML = `<figure class="image center"><img id="main" src="https://media3.giphy.com/media/StKiS6x698JAl9d6cx/200w.gif?cid=82a1493b1bphdyqd2sd8prvnnrv259r2toyg4wamk8nuynq4&rid=200w.gif&ct=g" alt="Welcome to the Club"></figure>`
        
    }

});
if(!clue2.classList.value.includes("hidden")){
    console.log("clue 2 visible");
}