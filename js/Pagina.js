let cedula = document.getElementById("Cedula");
let nombre = document.getElementById("Nombre");
let btnValida = document.getElementById("btn-valida");
let mensaje = document.getElementById("Mensa");
let prueba = document.getElementById("Prueba");
let borrar = document.getElementById("borrar")

borrar.addEventListener("click",borre);
btnValida.addEventListener("click",validar);

function borre(){
    prueba.classList.remove("fondo");
}
function validar(){
    if (cedula.value == ""){
        console.log("esta en blanco");
        cedula.style.borderColor="red";
        mensaje.classList.add("fondo");
        prueba.classList.add("fondo");
        mensaje.innerHTML = "Cedula vacia";
    } 
}