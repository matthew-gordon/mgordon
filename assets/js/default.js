'use strict';

  var toggles = document.querySelectorAll(".c-hamburger");

  for (let i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle)
  };

  function toggleHandler(toggle) {
    let overlay = document.getElementById("overlay");

    toggle.addEventListener("click", function(e) {
      e.preventDefault();

      (this.classList.contains("is-active") === true) ? overlay.style.zIndex = '0' : overlay.style.zIndex = '989';

      // toggle the overlay
      (!this.classList.contains("is-active") === true) ? overlay.style.opacity = '1' : overlay.style.opacity = '0';

      //toggle the menu icon
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });

  }

  var slideIndex = 1;

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var slides = document.getElementsByClassName("carousel-slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
      slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
  }
