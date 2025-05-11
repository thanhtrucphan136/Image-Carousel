const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const prevBtn = document.querySelector(".carousel-btn--left");
const nextBtn = document.querySelector(".carousel-btn--right");

const dotNavs = document.querySelector(".carousel-nav");
const dots = Array.from(dotNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

//arrange the slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//slides[0].style.left = slideWidth * 0 + "px";
//slides[1].style.left = slideWidth * 1 + "px";
//slides[2].style.left = slideWidth * 2 + "px";

const moveToSlide = (track, currentSlide, targetSlide) => {
  //Amount to move to the target slide
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";

  //update the current-slide class
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

//move slides to the right when clicking next button
nextBtn.addEventListener("click", (e) => {
  console.log("next clicked");

  //current slide
  const currentSlide = track.querySelector(".current-slide");
  //next slide
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);

  //current dot
  const currentDot = dotNavs.querySelector(".current-slide");
  //next dot
  const nextDot = currentDot.nextElementSibling;
  //update dot
  updateDots(currentDot, nextDot);
});

//move slides to the left when clicking next button
prevBtn.addEventListener("click", (e) => {
  console.log("prev clicked");

  //current slide
  const currentSlide = track.querySelector(".current-slide");
  //prev slide
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);

  //current dot
  const currentDot = dotNavs.querySelector(".current-slide");
  //prev dot
  const prevDot = currentDot.previousElementSibling;
  //update dot
  updateDots(currentDot, prevDot);
});

dotNavs.addEventListener("click", (e) => {
  //clicked indicator
  const targetDot = e.target.closest("button");

  //if not click on dot, end the function.
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotNavs.querySelector(".current-slide");

  //get dot index
  const dotTargetIndex = dots.findIndex((dot) => dot === targetDot);

  const targetSlide = slides[dotTargetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});
