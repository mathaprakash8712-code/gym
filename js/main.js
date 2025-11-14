<<<<<<< HEAD
// Simple sticky header effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Diet Plan Slider
//let currentSlide = 0;
//const slides = document.querySelectorAll(".slide");
//const next = document.querySelector(".next");
//const prev = document.querySelector(".prev");

//function showSlide(index) {
 // slides.forEach((slide, i) => {
//    slide.classList.remove("active");
  //  if (i === index) slide.classList.add("active");
  //});
//}

//next.addEventListener("click", () => {
  //currentSlide = (currentSlide + 1) % slides.length;
 // showSlide(currentSlide);
//});

//prev.addEventListener("click", () => {
 // currentSlide = (currentSlide - 1 + slides.length) % slides.length;
 // showSlide(currentSlide);
//});

// Auto-slide every 5 seconds
//setInterval(() => {
 // currentSlide = (currentSlide + 1) % slides.length;
  //showSlide(currentSlide);
//}, 5000);
// WEIGHT LOSS SLIDER
let lossIndex = 0;
const lossSlides = document.querySelectorAll(".loss-slide");

function showLossSlide(i) {
  lossSlides.forEach(s => s.classList.remove("active"));
  lossSlides[i].classList.add("active");
}

document.querySelector(".next-loss").onclick = function () {
  lossIndex = (lossIndex + 1) % lossSlides.length;
  showLossSlide(lossIndex);
};

document.querySelector(".prev-loss").onclick = function () {
  lossIndex = (lossIndex - 1 + lossSlides.length) % lossSlides.length;
  showLossSlide(lossIndex);
};

setInterval(() => {
  lossIndex = (lossIndex + 1) % lossSlides.length;
  showLossSlide(lossIndex);
}, 4000);


// WEIGHT GAIN SLIDER
let gainIndex = 0;
const gainSlides = document.querySelectorAll(".gain-slide");

function showGainSlide(i) {
  gainSlides.forEach(s => s.classList.remove("active"));
  gainSlides[i].classList.add("active");
}

document.querySelector(".next-gain").onclick = function () {
  gainIndex = (gainIndex + 1) % gainSlides.length;
  showGainSlide(gainIndex);
};

document.querySelector(".prev-gain").onclick = function () {
  gainIndex = (gainIndex - 1 + gainSlides.length) % gainSlides.length;
  showGainSlide(gainIndex);
};

setInterval(() => {
  gainIndex = (gainIndex + 1) % gainSlides.length;
  showGainSlide(gainIndex);
}, 4000);

=======
// Simple sticky header effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Diet Plan Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

next.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prev.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
>>>>>>> 27bfafa1154e66c4ff3e9756f4aea786bba9e333
