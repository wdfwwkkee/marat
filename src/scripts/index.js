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
const orderButton = document.getElementById("orderButton");
const orderModal = document.querySelector(".order-modal");
const orderCloseModal = document.getElementById('close-modal-order-btn');
const priceButton = document.getElementById('priceButton');
const priceModal = document.querySelector('.price-modal');
const closePriceModal = document.getElementById('close-price-modal-order-btn');







priceButton.addEventListener('click', () => {
  priceModal.classList.add('open');
  html.classList.add("lock");
})

closePriceModal.addEventListener("click", ()=> {
  priceModal.classList.remove("open");
  html.classList.remove("lock");
})


orderButton.addEventListener('click', () => {
  orderModal.classList.add('open');
  html.classList.add("lock");
})


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

orderCloseModal.addEventListener('click', ()=> {
  orderModal.classList.remove('open');
  html.classList.remove('lock');
})



/// Карта
async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;
  
    const {YMap, YMapDefaultSchemeLayer, YMapMarker} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),
        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [52.276207771163946, 54.89797953538971],
                // Уровень масштабирования
                zoom: 17
            }           
        }

      
    );
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());


}



initMap();