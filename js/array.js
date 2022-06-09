const num = 3;
//num = 4;

edad = [18,14,15,92,78,63];

console.log(edad[2]);

let nombre = ["JULIANA", "MARBEL","ZULUAGA","VELEZ","SANTOS"];

console.log(nombre.splice(0,1));

let correo = [
    "juliana@misena.edu.co",
    "marbel@misena.edu.co",
    "zuluaga@misena.edu.co",
    "velez@misena.edu.co",
    "santos@misena.edu.co",
];
console.log(correo);
console.log(correo.length);

let telefono = [
    "3025478962",
    "7895848854",
    "1026548205",
    "3658974152",
    "3878521463",
];

console.log(telefono);

let direccion = [
    "CALLE #45 98B23",
    "CARRERA METAFETAMINE 52A32",
    "CALLE #91 23A",
    "CARRERA #61 42A23",
    "CALLE CHUPONA 45B12",
];

console.log(direccion);

console.log(edad[0],nombre[0],correo[0],telefono[0],direccion[0]);
console.log(edad[1],nombre[1],correo[1],telefono[1],direccion[1]);
console.log(edad[2],nombre[2],correo[2],telefono[2],direccion[2]);
console.log(edad[3],nombre[3],correo[3],telefono[3],direccion[3]);
console.log(edad[4],nombre[4],correo[4],telefono[4],direccion[4]);
console.log(edad[5],nombre[5],correo[5],telefono[5],direccion[5]);

/*for (let i=0; i < nombre.length; i++){
    console.log(nombre[i] + "" + telefono[i] + "" + correo [i]);
    console.log(`el nombre es${nombre[i]} el telefono es${telefono[i]} el correo es${correo[i]}`);
}*/
nombre.forEach(element => {
    console.log(`el nombre es ${element}`);
});

let persona = {"nombre":"luis","apellido":"becerra","gustos":["futbol","basquet","natacion"]}
/* objeto puede tener propiedad y valor.... el valor que tiene una propiedad puede ser un vector u otro objeto */
console.log(persona);

let cursos = [{
    "nombre":"ADSI",
    "id":"1",
    "fecha":"64949884",
    "duracion":10
},{
    "nombre":"ADSO",
    "id":"2",
    "fecha":"+99594894",
    "duracion":10,
    "valor":"gratis"
},{
    "nombre":"RECURSOS HUMANOS",
    "id":"3",
    "fecha":"9794984984894",
    "duracion":10
},{
    "nombre":"CARPINTERIA",
    "id":"4",
    "fecha":"846894948",
    "duracion":10
}];

console.log(cursos);

