
function ir() {
    
    var contraseña= 1234    
    var usuario = "andreacampos"

    if (document.form.password.value == contraseña && document.form.login.value == usuario) {
        alert ("Bienvenido a su cuenta")
        window.location = "home.html" ;
    }  else {
        alert ("Por favor ingrese su nombre y usuario correcto.")
    }
}

function cambiocontraseña() {
    
    var contraseñaactual = 1234
    

    if (document.form.actualpassword.value == contraseñaactual && document.form.newpassword.value == document.form.newpassword2.value) {
        alert ("Su contraseña ha sido modificada, Bienvenido a su cuenta")
        window.location = "home.html" ;
    } else {
        alert ("La contraseña no coincide, por favor intentar nuevamente")
    }
}

// OTRA MANERA PARA QUE FUNCIONE //
/*function cambiocontraseña() {
    
    var contraseñaactual = 1234
    var nuevacontra = 3208

    if (document.form.actualpassword.value == contraseñaactual && document.form.newpassword.value == nuevacontra) {
        alert ("Su contraseña ha sido modificada, Bienvenido a su cuenta")
        window.location = "index.html" ;
    } else {
        alert ("La contraseña no coincide, por favor intentar nuevamente")
    }
}*/