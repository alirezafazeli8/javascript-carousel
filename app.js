"use strict";

// slides
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
// button
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
// counter
let counter = 0;
// image clientWidth size
const size = slideImages[0].clientWidth;
// transfer func for transfer image
const transferFunc = (varCondition) => {
    slides.style.transition = "transform 0.4s ease-in-out"
    slides.style.transform = `translateX(${varCondition}px)`
};

// stop condition for stop moving slide
const stopCondition = (condition, stop) => {
    if(condition) {
        counter = 0;
    } else {
        stop;
    }
}

// next button event
nextButton.addEventListener("click", ()=> {
    // stop condition with next rule
    stopCondition(counter == slideImages.length - 1, counter++);
    // trans function with next rule
    transferFunc(-size * counter - 1);
});


prevButton.addEventListener("click", ()=> {
    // stop condition with prev rule
    stopCondition(counter == 0, counter--);
    // trans function with prev rule
    transferFunc(-size * counter);
});
