'use strict';
  var toggles = document.querySelectorAll(".c-hamburger");
  var nextArrow = document.getElementsByClassName("next");
  var prevArrow = document.getElementsByClassName("previous");
  var slides = document.querySelectorAll(".carousel-slide");
  var slideIndex = 1;
  var direction;

  for (let i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle)
  };

  showSlidesFromRight(slideIndex);

  nextArrow[0].addEventListener('click', function() {
    direction = 'next';
    console.log('next Clicked');
    showSlidesFromRight(slideIndex += 1);
    for (var i = 0; i < slides.length; i ++) {
      slides[i].classList.remove("fadeLeft");
      slides[i].classList.remove("fadeRight");
      slides[i].className += " fadeRight";
    }
  });

  prevArrow[0].addEventListener('click', function() {
    direction = 'previous';
    console.log('previous Clicked');
    showSlidesFromRight(slideIndex -= 1);
    for (var i = 0; i < slides.length; i ++) {
      slides[i].classList.remove("fadeLeft");
      slides[i].classList.remove("fadeRight");
      slides[i].className += " fadeLeft";
    }
  });

  function toggleHandler(toggle) {
    let overlay = document.getElementById("overlay");

    toggle.addEventListener("click", function(e) {
      e.preventDefault();

      // toggle layer on page
      (this.classList.contains("is-active") === true) ? overlay.style.zIndex = '0' : overlay.style.zIndex = '989';

      // toggle the overlay
      (!this.classList.contains("is-active") === true) ? overlay.style.opacity = '1' : overlay.style.opacity = '0';

      // toggle the menu icon
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });

  }

  function currentSlide(n) {
    showSlidesFromRight(slideIndex = n);
  }

  function showSlidesFromRight(n) {
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
      slides[i].className += " fadeRight"
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
  }

  function showSlidesFromLeft(n) {
    var slides = document.getElementsByClassName("carousel-slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex + 1].style.display = "block";
    dots[slideIndex + 1].className += " active";
  }
