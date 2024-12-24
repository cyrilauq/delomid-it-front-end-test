var navElement = document.getElementsByClassName("navbar")[0];

window.addEventListener('scroll', () => {
    const scrolled = document.scrollingElement.scrollTop;

    if(scrolled > 0) {
        navElement.classList.add("bg-secondary");
    } else {
        navElement.classList.remove("bg-secondary");
    }
})