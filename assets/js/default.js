'use strict';

var toggles = document.querySelectorAll(".c-hamburger");

var card = document.getElementsByClassName("ItemCard__thumb");
console.log(card);

for (var i = 0; i < card.length; i++) {
//   setInterval(function() {
//     card.item(i).style.opacity = "1";
//   }, 1000);
  card[i].style.opacity = "1";
}

for (let i = toggles.length - 1; i >= 0; i--) {
  var toggle = toggles[i];
  toggleHandler(toggle)
};

function toggleHandler(toggle) {
  let overlay = document.getElementById("overlay");

  toggle.addEventListener("click", function(e) {
    e.preventDefault();

    // toggle layer on page
    (this.classList.contains("is-active") === true) ? overlay.style.zIndex = '-1' : overlay.style.zIndex = '998';

    // toggle the overlay
    (!this.classList.contains("is-active") === true) ? overlay.style.opacity = '1' : overlay.style.opacity = '0';

    // toggle the menu icon
    (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");

    // load menu items
    if (this.classList.contains("is-active") === true) {
      loadMenuItem()
    }

    // reset menu items
    if (!this.classList.contains("is-active") === true) {
      clearMenuItems()
    }

  });

}

function loadMenuItem() {
  var menuItems = document.getElementsByClassName("navItem");
  var icons = document.getElementsByClassName("flex-icon");
  var count = 0;

  setInterval(function() {
    if (count === menuItems.length) {
      return;
    }
    menuItems[count].className += " show";
    count++
  }, 100);
  icons[0].style.opacity = 1;
  icons[0].style.bottom = 0;
}

function clearMenuItems() {
  var menuItems = document.getElementsByClassName("navItem");
  var icons = document.getElementsByClassName("flex-icon");

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("show");
  }

  icons[0].style.opacity = 0;
  icons[0].style.bottom = "-50px";

}
