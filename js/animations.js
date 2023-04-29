const nav = document.querySelector(".navbar .background");
const navbar = document.querySelector(".navbar");
var session_title_1 = document.querySelector('#session_title_1');
var controller = document.querySelector('.controller');
var back_to_top = document.querySelector('.back_to_top');
var title_third_page = document.querySelector('.title_third_page');
var subtitle_third_page = document.querySelector('.subtitle_third_page');

window.addEventListener("scroll", ()=> {
  // nav.classList.toggle ("sticky", window.scrollY > 0);
  // navbar.classList.toggle ("sticky", window.scrollY > 0);
  session_title_1.classList.toggle("deactivated", window.scrollY > 600);
  controller.classList.toggle("deactivated", window.scrollY > 600);
  back_to_top.classList.toggle("active", window.scrollY > 600);
  title_third_page.classList.toggle("active", window.scrollY > 1000);
  subtitle_third_page.classList.toggle("active", window.scrollY > 1100);
});

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