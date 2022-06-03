btnN1= document.getElementById("btn-n1")
btnN2= document.getElementById("btn-n2")
btnN3= document.getElementById("btn-n3")
btnN4= document.getElementById("btn-n4")
btnN5= document.getElementById("btn-n5")
btnN6= document.getElementById("btn-n6")
btnN7= document.getElementById("btn-n7")
nombre = document.getElementById("nombre")
OwO = document.getElementById("OwO")

btnN1.addEventListener("click",function(){
        alert("Maria");
})
btnN2.addEventListener("click",imprimir);

    function imprimir(){
        alert("Pedro");
    }
btnN3.addEventListener("click",function(){
        alert("Duban");
})
btnN4.addEventListener("click",function(){
        alert("Margarita");
})
btnN5.addEventListener("click",function(){
        alert("Francia");
})
btnN6.addEventListener("click",function(){
        alert("Ximena");
})
btnN7.addEventListener("click",mostrarTexto);

function mostrarTexto(){
    alert(nombre.value);
}

OwO.addEventListener("keydown",mostrarTexto);
function mostrarTexto(){
    alert(OwO.value);
}

