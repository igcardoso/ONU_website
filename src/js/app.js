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

var next = document.querySelector(".next");
var back = document.querySelector(".back");
var position = 1

next.addEventListener("click", ()=> {
  position++;
  current_position()
});
back.addEventListener("click", ()=> {
  position--;
  current_position()
});


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

      position = 0;
    }
  }