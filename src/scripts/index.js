var swiper = new Swiper(".mySwiper", {
    slidesPerView: "1.5",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });




const signUpButton = document.getElementById("sign-btn");
const modalReg = document.getElementById("regModal");
const closeModalButton = document.getElementById("close-modal-btn");
const html = document.getElementById("html");


signUpButton.addEventListener("click", function() {
  modalReg.classList.add("open");
  html.classList.add("lock");
})

closeModalButton.addEventListener("click", function() {
  modalReg.classList.remove("open");
  html.classList.remove("lock");
})


