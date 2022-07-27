const toppings = document.querySelectorAll("#nav .topping");
const checkOut = document.querySelector("#checkout");

const orderDiv = document.querySelector(".order");
const total = document.querySelector("#total");

// let tData;
toppings.forEach((topping) => {
    topping.addEventListener("click", (e) => {
        // data from the topping that is being added
        // includes the ingredient name and price
        let tData = topping.dataset;

        orderDiv.innerHTML += `<div class="topping ${tData.ingredient}" data-ingredient="${tData.ingredient}" data-price="${tData.price}"> ${tData.ingredient[0].toUpperCase() + tData.ingredient.slice(1)} </div>`

    });
});

checkOut.addEventListener("click", check => {
    let cost = 0;

    const burger = document.querySelectorAll(".order .topping"); // update the items in the burger each time the checkout button is clicked
    burger.forEach((ingredient) => {
        cost += Number(ingredient.dataset.price);
        // console.log(ingredient.dataset.price);
    })
    // add a html element that shows the price of the burger
    total.innerHTML = `Your burger costs $${cost.toFixed(2)}`;
});

// removing the 
const burger = document.querySelectorAll(".order .topping"); // update the items in the burger each time the checkout button is clicked
burger.forEach((ingredient) => {
    // cost += Number(ingredient.dataset.price);
    // console.log(ingredient.dataset.price);
})