const nav = document.querySelector(".navbar .background");
const navbar = document.querySelector(".navbar");
var back_to_top = document.querySelector('.back_to_top');

window.addEventListener("scroll", ()=> {
  back_to_top.classList.toggle("active", window.scrollY > 600);
});

const animated_elements = document.querySelectorAll(".animated_elements");

let windowHeight = window.innerHeight;

function animate_elements() {
  animated_elements.forEach((animated_element) => {
    let bounding = animated_element.getBoundingClientRect();
    if (bounding.bottom > windowHeight) {
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

var carousel_orward_button = document.querySelector('.introduction .merry-go-round .next');
var back_carousel_button = document.querySelector('.introduction .merry-go-round .back');
var carousel_element = document.querySelector('.introduction .merry-go-round .highlight_element');
var carousel_elementH1 = document.querySelector('.introduction .merry-go-round .h1');
var carousel_elementH2 = document.querySelector('.introduction .merry-go-round .h2');

carousel_orward_button.addEventListener('click', ()=> {
  carousel_orward_button.classList.add('active');
  setTimeout(function() {
    carousel_orward_button.classList.remove('active');
    carousel_element.style.marginLeft = "-100%";
    // carousel_element.style.opacity = "0";
    carousel_elementH2.style.marginRight = "0";
    // carousel_elementH2.style.opacity = "1";
    carousel_orward_button.style.display = "none";
    back_carousel_button.style.display = "flex";
  }, 890);
})

back_carousel_button.addEventListener('click', ()=> {
  back_carousel_button.classList.add('active');
  setTimeout(function() {
    back_carousel_button.classList.remove('active');
    carousel_element.style.marginLeft = "0";
    // carousel_element.style.opacity = "1";
    carousel_elementH2.style.marginRight = "-100%";
    // carousel_elementH2.style.opacity = "0";
    carousel_orward_button.style.display = "flex";
    back_carousel_button.style.display = "none";
  }, 890);
})
/*
var day = new Date();
var hr = day.getHours();
var span_homepage_title = document.querySelector('.introduction  .highlight_element h1 .hour')


if (hr >= 0 && hr < 12) {
  span_homepage_title.innerHTML = "Bom dia,";
} else if (hr == 12) {
  span_homepage_title.innerHTML = "Bom meio-dia,";
} else if (hr > 12 && hr <= 17) {
  span_homepage_title.innerHTML = "Boa tarde,";
} else {
  span_homepage_title.innerHTML = "Boa noite,";

}*/


var project_page = document.querySelectorAll('.project_page');

project_page.forEach((project_page) =>
  project_page.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "project_page.html";
  })
);

var about_us_page = document.querySelectorAll('.about_us');

about_us_page.forEach((about_us_page) =>
  about_us_page.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "../pages/about_us.html";
  })
);

/*
var team_list = document.querySelectorAll('.team_list .team');

team_list.forEach((team_list) =>
  team_list.addEventListener('click', (event) => {
    team_list.classList.toggle('active');
  })
)*/

var menu_button = document.querySelector('.navbar .menu_button .menu');
var side_menu = document.querySelector('.side_menu');
var take_menu = document.querySelector('.take_menu');

menu_button.addEventListener('click', ()=> {
  side_menu.classList.toggle('active');
  take_menu.classList.toggle('active');
  // if (window.scrollY == 0) {
  //  nav.classList.toggle('sticky');
  //  navbar.classList.toggle('sticky');
  // }
});

take_menu.addEventListener('click', ()=> {
  side_menu.classList.toggle('active');
  take_menu.classList.toggle('active');
});

window.onscroll = () => {
  side_menu.classList.remove('active');
};