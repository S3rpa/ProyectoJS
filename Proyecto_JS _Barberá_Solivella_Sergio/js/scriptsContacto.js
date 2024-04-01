function Nombre1() {
    //Introducimos por teclado letras mayusc. o minusc. 
    if ((event.keyCode != 32) && (event.keycode != 8) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)) {
        event.returnValue = false;
    }

}

function Nombre2() {
    //Si el nombre tiene mas de 20 carácteres devuelve un alert advirtiendolo.

    var valorN = document.getElementById("nombre").value;
    if (!(/^\D{1,20}$/.test(valorN))) {
        alert("El nombre no puede tener más de 20 carácteres");
        return false;
    }
    return true;
}

function Apellidos1() {
    //Introducimos por teclado letras mayusc. o minusc. según el codigo.

    if ((event.keyCode != 32) && (event.keycode != 8) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)) {
        event.returnValue = false;
    }

}

function Apellidos2() {
    // Si los apellidos superan los 50 carácteres, devuelve un alert advirtiendolo.

    valorAp = document.getElementById("apellidos").value;
    if (!(/^\D{1,50}$/.test(valorAp))) {
        alert("Los apellidos no pueden superar los 50 carácteres");
        return false;
    }
    return true;
}

function Telefono1() {
    //Introducimos por teclado solo números.

    if ((event.keyCode != 32) && (event.keycode != 8) && (event.keyCode < 48) || (event.keyCode > 57)) {
        event.returnValue = false;
    }
}

function Telefono2() {
    //Validamos que el nº de teléfono tenga 9 dígitos como max.
    var valorT = document.getElementById("tlf").value;

    if (!(/^\d{9}$/.test(valorT))) {
        alert("El número de teléfono debe tener un formato válido(9 dígitos.)");
        return false;
    }
    return true;
}

function Email1() {
    //Validamos el campo email.

    var valorE = document.getElementById("email").value;
    var expEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!expEmail.test(valorE)) {
        alert("El formato de correo no es válido");
        return false;
    }
    return true;
}

function CodPostal1() {
    //Introducimos por teclado sólo números.
    if ((event.keycode != 32) && (event.keycode != 8) && (event.keycode < 48) || (event.keycode > 57)) {
        event.returnValue = false;
    }
}

function CodPostal2() {
    //Validamos el campo cp.
    var valorT = document.getElementById("cp").value;

    if (!(/^\d{5}$/.test(valorT))) {
        alert("El código postal debe tener un formato válido(5 dígitos max.)");
        return false;
    }
    return true;
}

function validar(form) {
    //Validamos que no esten vacíos los campos.
    var txtnombre = document.getElementById("nombre").value;
    var txtap = document.getElementById("apellidos").value;
    var txttlf = document.getElementById("tlf").value;
    var txtdireccion = document.getElementById("direccion").value;
    var txtcp = document.getElementById("cp").value;
    var txtemail = document.getElementById("email").value;

    if (txtnombre == null || txtnombre.length == 0 && txtap == null || txtap.length == 0 && txttlf == null || txttlf.length == 0 && txtdireccion == null || txtdireccion.length == 0 && txtcp == null || txtcp.length == 0 && txtemail == null || txtemail == 0) {
        alert("Ningún campo puede estar vacío");
        return false;
    } else {
        return true;
    }
}
//Crea la cookie
function crearCookie(nombre, apellidos, tlf, direccion, cp, email, politicas) {
    document.cookie = "nombre= " + nombre;
    document.cookie = "apellidos= " + apellidos;
    document.cookie = "tlf= " + tlf;
    document.cookie = "direccion= " + direccion;
    document.cookie = "cp= " + cp;
    document.cookie = "email= " + email;
    document.cookie = "politicas= " + politicas;

}
//Escribe la cookie
function escribirCookies() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var tlf = document.getElementById("tlf").value;
    var direccion = document.getElementById("direccion").value;
    var cp = document.getElementById("cp").value;
    var email = document.getElementById("email").value;
    var politicas = document.getElementById("politicas").value;

    crearCookie(nombre, apellidos, tlf, direccion, cp, email, politicas);

    alert("La cookie " + nombre + " se ha creado correctamente.");

}
//Lee la cookie
function leerCookies(nombre) {
    alert(document.cookie)
}
//Borra cookies
function borrarCookie() {
    var d = new Date();
    d.setTime(d.getTime() - (1000 * 60 * 60 * 24));
    var expires = "expires=" + d.toGMTString();
    document.cookie = "nombre= " + expires;
    document.cookie = "apellidos= " + expires;
    document.cookie = "tlf= " + expires;
    document.cookie = "direccion= " + expires;
    document.cookie = "cp= " + expires;
    document.cookie = "email= " + expires;
    document.cookie = "politicas= " + expires;
}