const openModal = document.querySelector('#innerModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cerrarModal')
const botonEnviar = document.querySelector('#botonContacto')
const ingresoEmpresa = document.querySelector('#ingresoEmpresa')
const ingresoOrg = document.querySelector('#ingresoOrg')


ingresoEmpresa.addEventListener('click',(e)=>{
    e.preventDefault();
    openModal.innerHTML= "Mi Empresa";
})

ingresoOrg.addEventListener('click',(e)=>{
    e.preventDefault();
    openModal.innerHTML= "Mi Organizacion";
})

botonEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
    validar_nombre_completo()
});

openModal.addEventListener('click', (e)=>{
     e.preventDefault();                             //evita el comportamiento por defecto
    modal.classList.add("modalShow");
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();                            
   modal.classList.remove("modalShow");
});



/* INTENTO DE VALIDACION

function validar(){
    let nombreCompleto = document.querySelector('#fname').value;
    let email = document.querySelector('#lname').value;
    let campoText = document.querySelector('#textArea').value;
    let textoError = ''
    if(!validar_vacio(nombreCompleto)){
       textoError += "EL CAMPO NOMBRE COMPLETO NO PUEDE SER VACIO"
    }
    if(!validar_vacio(email)){
        textoError += "EL CAMPO EMAIL NO PUEDE SER VACIO"
     }
     if(!validar_vacio(campoText)){
        textoError += "EL CAMPO MENSAJE NO PUEDE SER VACIO"
     }

     if(!validar_numero(nombreCompleto)){
        textoError += "EL CAMPO NOMBRE NO PUEDE CONTENER NUMEROS"
     }
}

function validar_vacio(texto){
  return texto !==''
}

function validar_numero(texto){
    return texto.match(/^[0-9]+$/)
}

function validar_length(texto){
    return texto.length >= 250
}

function validar_mail(texto){
    let caracteres = texto.split("")
    return caracteres.includes("@")
}
\

*/