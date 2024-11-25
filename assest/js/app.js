var swiper = new Swiper(".mySwiper", {
  rtl: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",

  },

});

const androidButton = document.getElementById('section__android');
const iphoneButton = document.getElementById('section__ios');
const webappButton = document.getElementById('section__webapp')
const download__andriod = document.getElementById('section__download__andriod')

androidButton.addEventListener('click', function () {
  if (!androidButton.getAttribute("class").includes("active")) {
    androidButton.classList.add('active');
    download__andriod.style.display = 'flex'
    iphoneButton.classList.remove('active');
    webappButton.classList.remove('active');
  }
});

iphoneButton.addEventListener('click', function () {
  if (!iphoneButton.getAttribute("class").includes("active")) {
    iphoneButton.classList.add('active');
    download__andriod.style.display = 'none'
    androidButton.classList.remove('active');
    webappButton.classList.remove('active');
  }
});

webappButton.addEventListener('click', function () {
  if (!webappButton.getAttribute("class").includes("active")) {
    webappButton.classList.add('active');
    download__andriod.style.display = 'none'
    androidButton.classList.remove('active');
    iphoneButton.classList.remove('active');
  }
});

function open__nav__mobile__menu() {
  document.getElementById('nav__mobile').classList.add("active")
}

function close__nav__mobile__menu() {
  document.getElementById('nav__mobile').classList.remove("active")
}

function opentext(event) {


  event.target.parentElement.parentElement.parentElement.classList.toggle('open')

}

var swiper2 = new Swiper(".mySwiper2", {
  rtl: true,
  spaceBetween: 30,
  slidesPerView: 1.1,
  breakpoints: {
    // when window width is >= 640px
    475: {
      slidesPerView: 1.75, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    560: {
      slidesPerView: 2, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.5, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    750: {
      slidesPerView: 2.7, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    800: {
      slidesPerView: 2.8, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 2.9, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    930: {
      slidesPerView: 3, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    970: {
      slidesPerView: 3.5, // Show 2 slides for screens >= 960px
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3.7, // Show 2 slides for screens >= 960px
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});