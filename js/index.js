var navElement = document.getElementsByClassName("navbar")[0];
var newsLettersEmailForm = document.getElementById("newsletter-form");
var emailNewsLetterField = document.querySelector("input[name=\"email\"]");
var emailError = document.getElementById("email_error");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

window.addEventListener('scroll', scrollListener);
window.addEventListener('load', scrollListener);

newsLettersEmailForm.addEventListener("submit", (event) => {
    subscribeToNewsLetter(event);
})

function scrollListener() {
    if(hasScrolled()) {
        navElement.classList.add("bg-secondary");
    } else {
        navElement.classList.remove("bg-secondary");
    }
}

function hasScrolled() {
    console.log(document.scrollingElement.scrollTop)
    return document.scrollingElement.scrollTop !== 0;
}

function subscribeToNewsLetter(event) {
    event.stopPropagation();
    event.preventDefault();
    
    if(!emailRegex.test(emailNewsLetterField.value)) {
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }
}