//SLIDER DE FONDO DE PANTALLA DEL LA PAGINA PRINCIPAL
let slider = document.getElementById("slider");
let images = slider.getElementsByTagName("img");
let current = 0;

function showNext() {
  let next = (current + 1) % images.length;
  images[current].classList.remove("show");
  images[next].classList.add("show");
  current = next;
}
setInterval(showNext, 3000);

//CAMBIO DE LAS PROPIEDADES CSS EN EL HEADER CUANDO SE HACE SCROLL EN LA PAGINA WEB
let header = document.querySelector("header");
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

//ABRIR MENU AL PULSAR EN EL BOTON EN PANTALLAS PEQUEÑAS

const desplegarMenu=document.querySelector('#btn_menu');
const menuModal=document.getElementById('menu');
desplegarMenu.addEventListener('click',()=>{
  menuModal.style.marginTop='0vh'
  menuModal.style.transition='0.5s'
})

//CERRAR MENU CUANDO SE PULSA EL BOTON DE CERRAR

let close=document.querySelector('#cerrarMenu')

close.addEventListener('click',()=>{
  menuModal.style.marginTop='-100vh'
  menuModal.style.transition='0.5s'
})
