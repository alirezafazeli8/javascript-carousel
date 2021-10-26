"use strict";

// slides
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
// button
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
// dots container
const dotsContainer = document.querySelector(".dots");
const allDots = dotsContainer.children;

// counter
let counter = 0;

// image clientWidth size
const size = slideImages[0].clientWidth;

// create dots in dots container
const createDots = function () {
  slideImages.forEach((undefined, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `
          <button class="dots__dot" data-slide="${i}"></button>
        `
    );
  });
};

// call create dots
createDots();

// update dots function for
const updateDot = function () {
  for (let dot of allDots) {
    counter == dot.dataset.slide
      ? dot.classList.add("active-dot")
      : dot.classList.remove("active-dot");
  }
};

// when we reload the page , dots index must showed
window.addEventListener("load", updateDot);

// transfer func for transfer image
const transferFunc = (varCondition) => {
  slides.style.transition = "transform 0.4s ease-in-out";
  slides.style.transform = `translateX(${varCondition}px)`;
};

// dots container event propagation for all child of container
dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    for (let dot of allDots) {
      dot.classList.remove("active-dot");
    }
    const { slide } = e.target.dataset;
    e.target.classList.add("active-dot");
    transferFunc(-size * slide);
  }
});

// stop condition for stop moving slide
const stopCondition = (condition, stop) => {
  if (condition) {
    counter = 0;
  } else {
    stop;
  }
};

// next function right slide
function next() {
  // stop condition with next rule
  stopCondition(counter == slideImages.length - 1, counter++);
  // trans function with next rule
  transferFunc(-size * counter - 1);
  updateDot();
}

// prev function for left slide
function prev() {
  // stop condition with prev rule
  stopCondition(counter == 0, counter--);
  // trans function with prev rule
  transferFunc(-size * counter);
  updateDot();
}

// next button event
nextButton.addEventListener("click", next);
// prev button event listener
prevButton.addEventListener("click", prev);

// key event
// arrow right event
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    next();
  }
});

// arrow left event
window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    prev();
  }
});
