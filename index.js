//? How does the data look when i grab a date?
//* YYYY-MM-DD
let grabDate = document.querySelector("#birthDate")
console.log(grabDate)
let submitButton = document.querySelector("#submit")
let displayMessage = document.querySelector(".displayMsg h1")
console.log(displayMessage)

// //? if there has been data added, it will run this event.
// //* using this to see how the data is being output
submitButton.addEventListener("click", () => {
    let inputYear = new Date(grabDate.value);
    parsedYear = inputYear.getFullYear();
    checkAge();
});

function checkAge() {
    let todaysDate = new Date();
    let currentAge = todaysDate.getFullYear() - parsedYear;
    
    console.log(currentAge)

    if (currentAge < 18) {
        displayMessage.innerHTML = "YOU'RE NOT ALLOWED HERE, LEAVE!"
    } else if (currentAge >= 18) {
        displayMessage.innerHTML = "Welcome to da COOL KID ZONE!"
    } else {
        alert("INVALID YEAR, NO TIME TRAVEL")
    }
};

