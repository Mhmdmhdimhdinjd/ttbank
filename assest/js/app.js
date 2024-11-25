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