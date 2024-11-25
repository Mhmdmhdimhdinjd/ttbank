var swiper = new Swiper(".mySwiper", {
  rtl: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",

  },

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