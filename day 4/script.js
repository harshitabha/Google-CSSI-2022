console.log("script running!");

// assigning the different btn to variables
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

btn1.addEventListener("click", goat => {alert("Meh-eh-eh-eh!")});

btn2.addEventListener("click", bun => {
    const status2 = document.querySelector("#status2");
    status2.innerHTML = "Thanks for petting the bunny! He looks really happy!";
    document.querySelector("#bunny").src = "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg";
});

let numCarrot = 2; //the number of carrots that we start with
btn3.addEventListener("click", carrot => {
    const status3 = document.querySelector("#status3");
    if(numCarrot > 9 ) alert("Mama goat has had too many carrots for today. She can not eat any more carrots");
    else{
        numCarrot++;
        status3.innerHTML = "Coco has had " + numCarrot + " carrots today!";
    }
});

btn4.addEventListener("click", carrot => {
    document.querySelector("#status4").innerHTML = "Blahaj was so happy to swim with you";
    document.querySelector("#blahaj").src = "https://c.tenor.com/3_uilA5_CuUAAAAM/wave-waving.gif";
});

let sure = false;
btn5.addEventListener("click", danger => {
    const zooPg = document.querySelector(".container");
    //have to use the special accent key because we need to specify a diff type of text. setting inner html automatically adds a p tag
    if(sure) zooPg.innerHTML =  `<h1 class="title" style="color:red; padding-top:25%;">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`; 

    else{
        alert("Warning: DON'T PET THE ALLIGATOR");
        btn5.innerHTML = "Click again to pet the Aligator";
        sure = true;
    }
    

});