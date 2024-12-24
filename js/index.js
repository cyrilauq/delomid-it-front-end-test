var navElement = document.getElementsByClassName("navbar")[0];

window.addEventListener('scroll', scrollListener);
window.addEventListener('load', scrollListener);

function scrollListener() {
    if(hasScrolled()) {
        navElement.classList.add("bg-secondary");
    } else {
        navElement.classList.remove("bg-secondary");
    }
}

function hasScrolled() {
    return document.scrollingElement.scrollTop > 0;
}