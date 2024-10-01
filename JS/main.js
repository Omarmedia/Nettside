const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


/* THE STATS*/
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".number");
  const statsSection = document.getElementById("stats");
  let hasScrolled = false;

  function animateStats() {
    stats.forEach((stat) => {
      const target = +stat.getAttribute("data-target");
      const updateCount = () => {
        const current = +stat.innerText;
        const increment = target / 100;

        if (current < target) {
          stat.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 50);
        } else {
          stat.innerText = target;
        }
      };
      updateCount();
    });
  }

  function checkScroll() {
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && !hasScrolled) {
      hasScrolled = true;
      animateStats();
    }
  }

  window.addEventListener("scroll", checkScroll);
});

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-image");
var images = document.querySelectorAll(".gallery-image");

images.forEach(function (image) {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside of the image
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

("use strict");
const tabs = document.querySelectorAll("[data-id]");
const contents = document.querySelectorAll("[data-content]");
let id = 0;

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs[id].classList.remove("active");
    tab.classList.add("active");
    id = tab.getAttribute("data-id");
    contents.forEach(function (box) {
      box.classList.add("hide");
      if (box.getAttribute("data-content") == id) {
        box.classList.remove("hide");
        box.classList.add("show");
      }
    });
  });
});



// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();

