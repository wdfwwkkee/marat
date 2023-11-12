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
const tabButton = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".tab-content");

tabButton.forEach((tab, index)=> {
  tab.addEventListener('click', (e)=> {
    tabButton.forEach(tab=> {tab.classList.remove('active')});
    tab.classList.add('active');
    all_content.forEach(content=>{content.classList.remove('active')});
    all_content[index].classList.add('active');
  });
})



signUpButton.addEventListener("click", function() {
  modalReg.classList.add("open");
  html.classList.add("lock");
})

closeModalButton.addEventListener("click", function() {
  modalReg.classList.remove("open");
  html.classList.remove("lock");
})


