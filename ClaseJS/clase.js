//let declara variable, prompt escribe en la pagina//
//= asignacion. == comparacion. === compraracion estricta//
//let mate = "yerba"
// const pi = 3.14
// let numero1 = 5
// let numero2 = 12
// console.log(resultado)
// let resultado = numero1 + numero2



/* let nombre = prompt("ingresa tu nombre");
if (nombre == "santi") {

    alert("bienvenido santi");

} else if(nombre== "male") {
    alert("vos no sos santi")

} */

/* let numero = prompt("ingrese numero")
let resultado = (numero > 5)

console.log(resultado);

if (resultado) {
    alert("es mayor a 5")
} else {
    alert("no es mayor")
}

console.warn("mensaje alerta")
console.error("mensaje error") */


//for   desde,hasta,acturalizacion o incremento



/* for(let i=0 ; i > 5; i++ ) {

    console.log("hola mundo" + i)

} */
/* 
let numero1 =parseInt(prompt("ingrese numero"))

for(let i = 1 ; i <= 10 ; i++ ){

    let resultado1 = numero1 * i

    alert( resultado1)
}
 */


//breaks

/* for(let i=0 ; i <= 10 ; i++ ){
    if(i==5){
        break;
    }
    alert(i)
}
 */

//while, se repite hasta que el usuario aprete esc

/* while(entrada != "ESC"){

    alert("el usuario ingreso" + entrada);

    entrada= prompt("ingresar otro ")

} */

/* let nombre=prompt("ingrese su nombre")
alert("bienvenido"+nombre)

function saludar(){
    let nombre=prompt("ingrese su nombre")
    alert("bienvenido"+nombre)

} */
/* 
let nombre= prompt("ingresa tu nombre")

function saludar(nombre){
    console.log("hola ${nombre}")
}

saludar(nombre) */

/* const iva = 1.21

function calcularIva(importe){
    if(parseFloat(importe)){
        let resultado = importe * iva
        alert("el importe mas iva es: " + resultado)
    
    }
}

function calcularpreciofinal(){
    let precioDelProducto = parseFloat(prompt("ingresa precio del producto"))
    calcularIva(precioDelProducto)
    alert("el importe final es:" + resultado)
}

calcularpreciofinal()
 */



/* bucles: while o do while o for */

/* function suma(num1,num2){
    let resultado = num1 + num2
    alert(resultado)
}


function normal(num1,num2){
    return num1+num2
}


let funcionAnonima = function (a,b){
    return a+b
}


let funcionFlecha = (a,b)=> { //funcion flecha es literalmente =>
    return a+b
}
let funcionFlecha2 = (a,b) => a+b */

//objetos

/* const computadora1 = {  //variable que contiene objetos
    //clave:valor
    marca:"lenovo",
    procesador:"ryzen 7 5700",
    ram: 32,

}

console.log(computadora1)

computadora2.marca="mac"

console.log(computadora2.marca) */
/* let entradasDisponibles = 100; */ // Entradas totales

/* const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = this
    this.precio = stock
}

let producto1 = new Producto ("lenovo",1950000, 45)
let producto2 = new Producto ("samsung",100000, 2)
let producto3 = new Producto ("mac",1950000, 5)
let producto4 = new Producto ("xiaomi",1950000, 25)

const lista = [producto1,producto2,producto3,producto4]

function filtrarProducto(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim()
    let resultado = lista.filter((producto)=>producto.nombre.toUppercase().include(palabraClave))
    if(resultado.length > 0){
        console.log(resultado)
    } else{
        alert("no ecnontre ningun producto llamado"+ palabraClave)
    }
}
 */


/* const coche={
    marca: "toyota",
    modelo: "corola",
    color: "rojo",
    arrancar: function(){
        crossOriginIsolated.log("ell coche esta arrnacando")
    }
}
coche.arrancar()
 */

/* const frutas = ["mazana" , "banana" , "pera"] */

//forEache, ejecuta una duncion para cada elemenot del array

/* frutas.forEach(function(x){console.log(x.toUpperCase())}) */



//ejemplo de mostrar los numeros pares que hay en el array, cambiando
/* const numeros=[12,2,12,3,1,23,1,21,,31,3,1,31,23,3,24,,5,46,567,56,7,4,534,4,1,34,1,20]
const numerosPares = numeros.filter(function(x){
    return x %2===0
})
console.log(numerosPares) */ //numerosPares.lenght muestra la cantidad de numeros pares no los numeros en si


/* const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
 */

/* DOM */

/* ejepmlo con el trabjo */
/* let colonias = 50;

function coloniasEnVenta(){
let cantidad = prompt("¿cuantas colonias quiere?");
    if(cantidad <= colonias && cantidad > 0){
        colonias -= cantidad;
        document.getElementById("colonias").textContent = colonias;
        alert(`Compraste ${cantidad} de colonias, gracias por su compra.Quedan ${colonias} disponibles.`);

    } else{
        if(cantidad <= 0){
            alert("No es posible comprar menos de cero colonias. :(");
        } else{
            alert(`Disculpe no quedan esa cantidad de colonias. Quedan ${colonias} disponibles`)
        }
    }
    while(colonias > 0){
        break
    }

} */

// Distintos metodos. getElementById() .Accede a un elemento utilizando atributom de html
//ejepmlos 
/* let titulo = document.getElementById("titulo")
                        getElementByClassName
                        getElementByTagName("div")
let paises=document.getElementsByClassName("paises")
let contenedores= document.getElementsByTagName("div")

for(const pais of paises){
    function(){
        alert("bienvenido a"+ pais)
        console.log(pais);
    }
}

let botones = document.querySelector(".botones")
     querySelectorAll("div/#id/etc")
 */



//EVENTOS
/* let botoncito = document.getElementById("boton")

function saludar(){
    alert("hola mundo")
}
botoncito.addEventListener("click", saludar) */


/* let titulo = document.getElementById("boton")

function saludar(){
    console.log("hola mundo")
}

titulo.addEventListener("mousedown",console.log("tatatatatattatta"))
titulo.addEventListener("mouseup",console.log("recargar"))
titulo.addEventListener("mousemove", function(event){
    console.log("la mira esta en la posicion"+ event.clientX + " y " + event.clientY)
}) */

/* let inputField = document.getElementById("inputField")

inputField.addEventListener("change", function(event){
    console.log("valor del campo cambiado a " + event.target.value)
})
 */


// AFTER AYUDA PARA SEGUNDA ENTREGA

const Producto = function(nombre,precio,cantidad){
    this.nombre=nombre;
    this.precio=precio;
    this.stock=stock;
}

let colonia1= new Producto (Inglesa, 8000, 20)
let colonia2= new Producto (Henon, 8000, 20)
let colonia3= new Producto (Lavanda, 8000, 20)

let lista = [colonia1,colonia2,colonia3]
