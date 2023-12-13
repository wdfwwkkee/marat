const priceButton = document.getElementById('priceButton');
const priceModal = document.querySelector('.price-modal');




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
  
  
  orderCloseModal.addEventListener('click', ()=> {
    orderModal.classList.remove('open');
    html.classList.remove('lock');
  })