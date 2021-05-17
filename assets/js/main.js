//Desafío

//Ejercicio 2
//Se solicitan números al usuario para definir las variables
let numero1 = parseFloat(prompt("Ingrese primer número mayor a 0"));
let numero2 = parseFloat(prompt("Ingrese segundo número mayor a 0"));

//Se indica: Hacer validación de números enteros mayores a cero 
do {
    if (numero1 <= 0) {
        alert('[ERROR] El campo debe tener un valor de número mayor a cero');
        numero1 = parseFloat(prompt("Ingrese primer número mayor a 0"));
    } else if (numero2 <= 0)
        numero2 = parseFloat(prompt("Ingrese segundo número mayor a 0"));
    alert('[ERROR] El campo debe tener un valor de número mayor a cero')
} while (numero1 <= 0 || numero2 <= 0);

function sumaEjercicio2(numero1, numero2) {
    let suma2 = numero1 + numero2;
    return suma2;
}
function restaEjercicio2(numero1, numero2) {
    let resta = numero1 - numero2;
    return resta;
}
function multiplicacionEjercicio2(numero1, numero2) {
    let multiplicacion = numero1 * numero2;
    return multiplicacion;
}
function divisionEjercicio2(numero1, numero2) {
    let division = numero1 / numero2;
    return division;
}
function moduloEjercicio2(numero1, numero2) {
    let modulo = numero1 % numero2;
    return modulo;
}
document​.write(`
    <tbody>
    <tr>
      <th scope="row">Suma</th>
      <td>${numero1}</td>
      <td>${numero2}</td>
      <td>${suma2}</td>
    </tr>
    <tr>
      <th scope="row">Resta</th>
      <td>${numero1}</td>
      <td>${numero2}</td>
      <td>${resta}</td>
    </tr>
    <tr>
      <th scope="row">Multiplicación</th>
      <td>${numero1}</td>
      <td>${numero2}</td>
      <td>${multiplicacion}</td>
    </tr>
    <tr>
      <th scope="row">División</th>
      <td>${numero1}</td>
      <td>${numero2}</td>
      <td>${division}</td>
    </tr>
    <tr>
      <th scope="row">Resto</th>
      <td>${numero1}</td>
      <td>${numero2}</td>
      <td>${modulo}</td>
    </tr>
  </tbody>`);

//Ejercicio 3
//Se definen las constantes
const kelvin = 273.15;
const Fahrenheit = 32;
//Se solicita al usuario ingresar la cantidad de grados celsius
let celsius = parseFloat(prompt("Ingrese temperatura Celsius"));

// Se realizan las operaciones de conversión
let tempKelvin = celsius + 273.15;
let fahrenheit = (celsius * 1.8) + 32;
//Se muestran lso resultados por consola
function transformarKFC (){
    return document.write(`<h3>La cantidad de ${celsius} grados celsius ingresada corresponde a: ${fahrenheit} grados Fahrenheit y a: ${tempKelvin} grados Kelvin</h3>`);
}

//Ejercicio 4
//Se solicita al usuario ingresar la cantidad de días
let cantDias = parseFloat(prompt("Ingrese cantidad de dias"));
//Se procesan los días con las siguintes operaciones
let años = Math.floor(cantDias / 365);
let semanas = Math.floor((cantDias % 365) / 7);
let dias = (cantDias % 365) % 7;
//Se muestra el resultado por consola
function conteoDias (){
    return document.write(`El número de días ingresado corresponde a ${años} años, ${semanas} semanas y ${dias} días`);
}

//Ejercicio 5
//Se solicita al usuario ingresar la cantidad de números a promediar
let n = parseInt(prompt("Ingrese la cantidad de números que desea sumar y promediar"));
let numero;
let suma = 0;
function sumaPromedio (){
    for (i = 0; i < n; i++) {
        numero = parseFloat(prompt(`Ingrese el número ${i}`));
        suma = suma + numero;
    }
    let promedio = suma / n;
    return document.write(`La suma de los números ingresados es de ${suma} y el promedio de los números es de ${promedio}.`);
}

