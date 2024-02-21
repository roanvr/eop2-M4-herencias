import { Propietario, Animal, Mascota } from '../modulos/clases.js'

function mostrarDatos (masc) {
    let resultado = document.getElementById('resultado')
    let lista = document.createElement('li')
    resultado.append(lista)
}

function capturarDatos () {
    let nombre = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let paciente = new Mascota (nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
    mostrarDatos(paciente)
    
}

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    capturarDatos()
})