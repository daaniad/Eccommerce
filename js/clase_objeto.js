/**
 * // clase coche
function coche(motor, chasis) {
    this.motor = motor;
    this.chasis = chasis;
    this.encender = function() {
        this.motor.encender();
    }
    this.apagar = function() {
        this.motor.apagar();
    }
    this.abrir = function() {
        this.chasis.abrir();
    }
    this.cerrar = function() {
        this.chasis.cerrar();
    }
}

// clase motor
function motor(potencia, valvulas) {
    this.potencia = potencia;
    this.valvulas = valvulas;
    this.encendido = false;
    this.encender = function() {
        this.encendido = true;
    }
    this.apagar = function() {
        this.encendido = false;
    }
}

// clase chasis
function chasis(puertas) {
    this.puertas = puertas;
    this.abierto = false;
    this.abrir = function() {
        this.abierto = true;
    }
    this.cerrar = function() {
        this.abierto = false;
    }
}

// objeto chasis de 4 puertas
let cuatroPuertas = new chasis(4);
// objeto chasis de 3 puertas
let tresPuertas = new chasis(3);

// objeto motor de 1500 de potencia y 4 valvulas
let motorCuatroV = new motor(1500, 4);
// objeto motor de 3000 de potencia
let motorSeisV = new motor(3000, 6);

// coche de 4 puerats con motor de 1500 de potencia y 4 valvulas
let cocheCuatro = new coche(motorCuatroV, cuatroPuertas);
// cochde de 3 puertas con motor de 3000 de potencia y 6 valvulas
let cocheSeis = new coche(motorSeisV, tresPuertas);
 * 
 * 
 * 
 * 
 * 
 * function ProductoAlimenticio(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.imprimeDatos = function() {
        console.log(`codigo: ${this.codigo}, nombre: ${this.nombre}, precio: ${this.precio}`);
    }
}

let productoUno = new ProductoAlimenticio("046", "Manzanas", 100);
let productoDos = new ProductoAlimenticio("092", "Calabaza", 63);
let productosTres = new ProductoAlimenticio("113", "Nueces", 90);

let productos = [productoUno, productoDos, productosTres];

for (let p of productos) {
    p.imprimeDatos();
}

productoUno.nombre = "Tortillas";
productoUno.codigo = "214";
productoUno.precio = 24;

productos.push(productoUno);

for (let p of productos) {
    p.imprimeDatos();
}
 */
