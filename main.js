const openModal = document.querySelector('#innerModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cerrarModal')


openModal.addEventListener('click', (e)=>{
     e.preventDefault();                             //evita el comportamiento por defecto
    modal.classList.add("modalShow");
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();                            
   modal.classList.remove("modalShow");
});