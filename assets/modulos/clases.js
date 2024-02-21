class Propietario {
    constructor (nombre, direccion, telefono) {
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    datosPropietario() {
        return `<li>El nombre del propietario es ${this._nombre}, vive en ${this._direccion} y su teléfono es ${this._telefono}</li>`
    }
}

class Animal extends Propietario {
    constructor (nombre, direccion, telefono, tipo) {
        super (nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo () {
        return `El tipo del animal es un ${this._tipo}`
    }
}

class Mascota extends Animal {
    constructor (nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super (nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota
        this._enfermedad = enfermedad
    }
    get nombreMascota () {
        return `<li>El tipo de la mascota es un: ${this._tipo}, se llama ${this._nombreMascota} y la enfermedad es ${this._enfermedad}</li>`
    }
    set nombreMascota (nombre) {
        nombre = nombre
    }
}

export {
    Propietario,
    Animal,
    Mascota
}