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



const $form=document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
  event.preventDefault()
  const form=new FormData(this)
  const response = await fetch(this.action,{
    method: this.method,
    body: form,
    headers:{
      'Accept': 'application/json'
    }
  })
  if(response.ok){
    this.reset()
    alert('Gracias por contactarme, espera pronto mi respuesta')
  }
}