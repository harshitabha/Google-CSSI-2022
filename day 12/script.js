console.log("script running!");

// Helper function to get a random integer up to (but not including) the maximum.
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
    let apiKey = "X6BxjjpyYUT7Kj22RHIIO5Waow3StgwE";
    let topic = queryField.value + " dog";
    let myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${topic}`; 

    const response = await fetch(myQuery);
    const myJSON = await response.json();
    console.log(myJSON);

    let i = getRandomInt(myJSON.data.length)
    const imgurl = myJSON.data[i].images.downsized.url;
    imageHolderDiv.innerHTML = `<img src="${imgurl}"/>` + imageHolderDiv.innerHTML;
    queryField.value = "";

});