
//Variables generales

let usuarioData ={
    nombre:"",
    contrasena:"",
    apeynom:"",
    descuento:""
};

let apeynom ="";
let salida = true;
let salidaComida=true;
let salidaBebida=true;
let cantidad = 0;
let comida = "0";
let acu_total = 0;
let descuento = false;
const hoy = new Date();
//Variables let para mensajes
let MensajeComida ="";
let pass;
let Nusuario;
let bandera1;

// Obtener referencia a botón
const boton = document.querySelector("#logueo");
boton.addEventListener("click", function (evento) {
    let ingresousuario =document.getElementById("usuario").value;
    let ingresocontrasena =document.getElementById("contrasena").value;
    if (ingresousuario && ingresocontrasena) {
        //alert(ingresousuario);
        checkearCredenciales(ingresousuario,ingresocontrasena);
        document.getElementById("contrasena").value ="";
        document.getElementById("usuario").value ="";
    } else {
        alert("Es necesario ingresar usuario y contraseña");
        return;
        
    }
});
// borrar local storage
const boton2 = document.querySelector("#logueoout");
boton2.addEventListener("click", function (evento) {

    Swal.fire('genial');

     localStorage.removeItem("usuarioData");
});

//Ingreso de usuario - validar descuento
function checkearCredenciales(user, pass) {
    //let foto = 

    
    let login = colleccion_logines.find((l) => l.user === user && l.pass == pass);
    if (login) {
        apeynom=login.getCliente().getNombreCompleto();
        
        let logueoapeynom =document.getElementById("usuariologueado");
        logueoapeynom.innerText= apeynom;
        let descontar="";
        let logueodescuento =document.getElementById("descuentocliente");
        let fotoaux=(login.getCliente().getfoto());
        document.getElementById("fotoUsuario").src="images/usuarios/"+fotoaux;

        if(login.getCliente().getDescuento()=="Y"){
            descontar="Y";
            descuento=true;
            logueodescuento.innerText= "Socio con descuento";
        }else{
            descontar="N";
            logueodescuento.innerText="Cliente SIN descuento";
        }
        usuarioData.nombre=user;
        usuarioData.contrasena=pass;
        usuarioData.apeynom=apeynom;
        usuarioData.descuento= descontar;
        localStorage.setItem("usuarioData", JSON.stringify(usuarioData));
    } else {
        alert("Credenciales incorrectas");
    }
}

comienzo();
function comienzo(){
        if(localStorage.getItem("usuarioData")){
            let storedData = JSON.parse(localStorage.getItem("usuarioData"));
            let lsusuario1= storedData.nombre;
            
            let lsusuario2= storedData.contrasena;
            checkearCredenciales(lsusuario1,lsusuario2);
        }else{
            //alert("localstorage vacio");
            Swal.fire(
                'No hay un Usuario Almacenado?',
                'ingresa un usuario !',
                'question'
              )
        }
}








