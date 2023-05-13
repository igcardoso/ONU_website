const animated_elements = document.querySelectorAll(".animated_elements");

var windowHeight = window.innerHeight;

function animate_elements() {
  animated_elements.forEach((animated_element) => {
    let bounding = animated_element.getBoundingClientRect();
    if (bounding.bottom > windowHeight + 200) {
      animated_element.classList.add("is-down");
    } else if (bounding.top < 0) {
      animated_element.classList.add("is-up");
    } else {
      animated_element.classList.remove("is-up");
      animated_element.classList.remove("is-down");
    }
  });
}

document.addEventListener("scroll", function () {
  animate_elements();
  document.removeEventListener("scroll", this);
});

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  window.removeEventListener("resize", this);
});

animate_elements();

/*========= animate stars =========*/

const stars_elements = document.querySelectorAll(".stars");

function animate_stars() {
  stars_elements.forEach((star_element) => {
    let bounding = star_element.getBoundingClientRect();
    if (bounding.bottom > windowHeight) {
      star_element.classList.add("stars-down");
      star_element.classList.remove("stars-up");
    } else if (bounding.bottom < windowHeight) {
      star_element.classList.add("stars-up");
      star_element.classList.remove("stars-down");
    } else {
      star_element.classList.remove("stars-up");
      star_element.classList.remove("stars-down");
    }
  });
}

document.addEventListener("scroll", function () {
  animate_stars();
  document.removeEventListener("scroll", this);
});

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  window.removeEventListener("resize", this);
});

animate_stars();

/*========= animate statistics =========*/

const statistics_elements = document.querySelectorAll(".statistic");

function animate_statistics() {
  statistics_elements.forEach((statistic_element) => {
    let bounding = statistic_element.getBoundingClientRect();
    if (bounding.bottom > windowHeight) {
      statistic_element.classList.add("statistics-down");
      statistic_element.classList.remove("statistics-up");
    } else if (bounding.bottom < windowHeight) {
      statistic_element.classList.add("statistics-up");
      statistic_element.classList.remove("statistics-down");
    } else {
      statistic_element.classList.remove("statistics-up");
      statistic_element.classList.remove("statistics-down");
    }
  });
}

document.addEventListener("scroll", function () {
  animate_statistics();
  document.removeEventListener("scroll", this);
});

window.addEventListener("resize", function () {
  windowHeight = window.innerHeight;
  window.removeEventListener("resize", this);
});

animate_statistics();

var nav_bar = document.querySelector("header");

window.addEventListener("scroll", ()=> {
  nav_bar.classList.toggle("sticky", window.scrollY > 0);
});

var nav_menu_btn = document.querySelector(".nav-menu-btn");
var navigation = document.querySelector(".side_navigation");
var disable_menu = document.querySelector(".disable_menu");
var disable_menu_icon = document.querySelector(".nav-close-btn");

nav_menu_btn.addEventListener("click", ()=> {
  navigation.classList.toggle('active');
  disable_menu.classList.toggle('active');
});

disable_menu.addEventListener("click", ()=> {
  navigation.classList.toggle('active');
  disable_menu.classList.toggle('active');
});

disable_menu_icon.addEventListener("click", ()=> {
  navigation.classList.toggle('active');
  disable_menu.classList.toggle('active');
});

window.onscroll = () => {
  navigation.classList.remove('active');
  disable_menu.classList.remove('active');
};

var next = document.querySelector("#next");
var back = document.querySelector("#back");
var position = 1

next.addEventListener("click", ()=> {
  position++;
  current_position()
});
back.addEventListener("click", ()=> {
  position--;
  current_position()
});


if (position < 0) {
  position = 4;
}

function current_position() {

  switch (position) {
    case 1:
      document.querySelector(".card1").style.marginLeft = "0";
      document.querySelector(".active").classList.remove('active');
      document.querySelector(".thumbs1").classList.add('active');

      break;
    case 2:
      document.querySelector(".card1").style.marginLeft = "-100%";
      document.querySelector(".active").classList.remove('active');
      document.querySelector(".thumbs2").classList.add('active');

      break;
    case 3:
      document.querySelector(".card1").style.marginLeft = "-200%";
      document.querySelector(".active").classList.remove('active');
      document.querySelector(".thumbs3").classList.add('active');

      break;
    case 4:
      document.querySelector(".card1").style.marginLeft = "-300%";
      document.querySelector(".active").classList.remove('active');
      document.querySelector(".thumbs4").classList.add('active');

      break;

    default:
      document.querySelector(".card1").style.marginLeft = "0";
      document.querySelector(".active").classList.remove('active');
      document.querySelector(".thumbs1").classList.add('active');

      position = 1;
    }
  }

  /*========= first slide =========*/

  document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream.s1');
    var items = document.querySelectorAll('.gallery__item.s1');

    var prev = document.querySelector('.gallery__prev.s1');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item.s1');
    });

    var next = document.querySelector('.gallery__next.s1');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item.s1');
    });
  });


  /*========= second slide =========*/

  document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream.s2');
    var items = document.querySelectorAll('.gallery__item.s2');

    var prev = document.querySelector('.gallery__prev.s2');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item.s2');
    });

    var next = document.querySelector('.gallery__next.s2');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item.s2');
    });
  });

  /*========= second slide =========*/

  document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.large_gallery__stream.s3 ');
    var items = document.querySelectorAll('.large_gallery__item.s3');

    var prev = document.querySelector('.large_gallery__prev.s3');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.large_gallery__item.s3');
    });

    var next = document.querySelector('.large_gallery__next.s3');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.large_gallery__item.s3');
    });
  });