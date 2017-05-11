'use strict';
var toggles = document.querySelectorAll(".c-hamburger");
var nextArrow = document.getElementsByClassName("next");
var prevArrow = document.getElementsByClassName("previous");
var slides = document.querySelectorAll(".carousel-slide");
var fpItems = document.getElementsByClassName("fp-item center");
var arrows = document.getElementsByClassName("arrows");
var slideIndex = 1;
var direction;

for (let i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle)
};

window.onload = function() {
  loadIndicators();
  showSlidesFromRight(slideIndex);
}

nextArrow[0].addEventListener('click', function() {
  direction = 'next';
  console.log('next Clicked');
  showSlidesFromRight(slideIndex += 1);
  for (var i = 0; i < slides.length; i ++) {
    slides[i].classList.remove("fadeLeft");
    slides[i].classList.remove("fadeRight");
    slides[i].className += " fadeRight";
    fpItems[i].style.zIndex = 997;
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
    fpItems[i].style.zIndex = 997;
  }
});

function toggleHandler(toggle) {
  let overlay = document.getElementById("overlay");

  toggle.addEventListener("click", function(e) {
    e.preventDefault();

    // toggle layer on page
    (this.classList.contains("is-active") === true) ? overlay.style.zIndex = '0' : overlay.style.zIndex = '998';

    // toggle the overlay
    (!this.classList.contains("is-active") === true) ? overlay.style.opacity = '1' : overlay.style.opacity = '0';

    // toggle the menu icon
    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

    if (this.classList.contains("is-active") === true) {
      loadMenuItem()
    }
    if (!this.classList.contains("is-active") === true) {
      clearMenuItems()
    }

    // loadMenuItems();
  });

}

function currentSlide(n) {
  showSlidesFromRight(slideIndex = n);
}

function showSlidesFromRight(n) {
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

function loadIndicators() {
  var count = 1;
  var indicators = document.getElementsByClassName("indicators");

  for (var i = 0; i < slides.length; i++) {
    var indicator = document.createElement("span");

    indicator.classList += "dot";
    indicator.setAttribute("onclick", `currentSlide(${count})`);
    indicators[0].appendChild(indicator);
    count++;
  }
}


function loadMenuItem() {
  var menuItems = document.getElementsByClassName("navItem");
  var count = 0;
  // for (var i = 0; i < menuItems.length; i++) {
  //   console.log(menuItems[i]);
  //   menuItems[i].className += " show";
  // }
  setInterval(function() {
    if (count === menuItems.length) {
      return count;
    }
    menuItems[count].className += " show";
    count++
  }, 100);

}


function clearMenuItems() {
  var menuItems = document.getElementsByClassName("navItem");

  for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("show");
  }

}
