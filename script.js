//alert("Hola este es mi Javascript");
//let nombre = "steeven";
//nombre = "javier"
//var nombre1 = "sotelo"
//const nombre2 = "dix"
//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)

//seleccionar elementos
let titulo = document.querySelector(".contenedor .logo");
console.log(titulo);

titulo.innerHTML ="mi web";

//condicionales
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo =="mi web"){titulo.innerText="otro";} else{
    console.log("no se cumple");
}
//funciones
let nombre = "carlos";
let carrera = "sistemas";
let gusto = "quimica";

let parrafo = documet.requySelector("parrafo2");

function cambiarTexto(nombre, carrera, gusto) {let contenido ='mi nombre es ${nombre}, soy ${nombre} de la universidad Minuto de Dios, me gustan las ${gusto}, dibujar y hacer ejercicio; en este momento me encuentro haciendo unos cursos para ampliar mi campus profesional.';
return contenido;
}
//-----------------------------------------------------------------------------
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});