const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});


function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  // nav: true,
  dots: true,
  // center: true,
  slideBy: 2,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
      navbar.classList.remove("navbar-shrink");
   }
}
window.addEventListener("scroll", function () {
  toggleBacktop();
});


let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}
