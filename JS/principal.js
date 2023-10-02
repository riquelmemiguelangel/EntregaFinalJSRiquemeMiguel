
//Variables generales
const lsusuario="";
const lscontrasena="";
const lsapeynom="";
const lsdescuento="";
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
    alert("borrado");
    localStorage.removeItem("lsusuario");
    localStorage.removeItem("lscontrasena");
});
//Ingreso de usuario - validar descuento
function checkearCredenciales(user, pass) {
    let login = colleccion_logines.find((l) => l.user === user && l.pass == pass);
    if (login) {
        apeynom=login.getCliente().getNombreCompleto();
        
        let logueoapeynom =document.getElementById("usuariologueado");
        logueoapeynom.innerText= apeynom;
        localStorage.setItem("lsusuario",user);
        localStorage.setItem("lscontrasena",pass);

        localStorage.setItem("lsapeynom",apeynom);
        localStorage.setItem("lsdescuento",pass);
        let logueodescuento =document.getElementById("descuentocliente");
        if(login.getCliente().getDescuento()=="Y"){
            localStorage.setItem("lsdescuento",true);
            descuento=true;
            logueodescuento.innerText= "Socio con descuento";
        }else{
            localStorage.setItem("lsdescuento",true);
            logueodescuento.innerText="Cliente SIN descuento";
        }
        
    } else {
        alert("Credenciales incorrectas");
    }
}

comienzo();
function comienzo(){
    if (localStorage.getItem("lsusuario")){
       let lsusuario1 =localStorage.getItem("lsusuario");
       let lscontrasena1=localStorage.getItem("lscontrasena");
       alert("Hay un usuario registrado");
       checkearCredenciales(lsusuario1,lscontrasena1);
    }else{
        alert("localstorage vacio");
    }
}

//sistema();
/*
function sistema(){
     while(salida){
        Nusuario = prompt("Bienvenido al Bufet JS-2023!!! <Ingreso de PEDIDO> \n\nHoy es: " + hoy.toLocaleString() +"\nProcesando..."+"\n\nSocios       - <Ingrese su nombre de USUARIO>\nMENU Listados y Registros- <Ingrese L>\nSalir            - <Presione X>\n\nSocios 20% de descuento");
        if (Nusuario == "x"||Nusuario == "X"){
            salida=false;
            return;
        }
        if ((Nusuario) == "L" || (Nusuario) == "l"){
            menuListado();
            return;
        }
        //Validar Usuario
        pass = prompt("Ingrese su contraseña");
        if (Nusuario && pass) {
            bandera1=checkearCredenciales(Nusuario, pass);
            if (bandera1 == 1){
                salida=true;
                return;
            }
        } else {
            alert("Es necesario ingresar usuario y contraseña");
            return;
            
        }
        
        while(salidaComida){
            let mensajelistaproducto = listado_Producto("Comida");
            let opcion =prompt("\nSeleccione su comida\n\n " + mensajelistaproducto + "\n\n< c  >  » Continuar"+ "\n\n Seleccion:");
            if (opcion == "c" || opcion == "c"){
                salidaComida=false;
            }else{
                armadocomida(opcion);
            }
        }
        salidaComida=true;


        while(salidaBebida){
            mensajelistaproducto = listado_Producto("Bebida");
            let opcion =prompt("\nSeleccione su bebida\n\n " + mensajelistaproducto + "\n\n< c  >  » Continuar"+ "\n\n Seleccion:");
            if (opcion == "c" || opcion == "C"){
                salidaBebida=false;
            }else{
                armadobebida(opcion);
            }
        }
        salidaBebida=true;
        
        if(acu_total==0){
            alert("Cliente "+apeynom +" NO realizo Pedido");
        }else{
            if(descuento){
                acu_total=acu_total-(acu_total*20/100);
                MensajeComida= MensajeComida+"\nDescuento por socio";
            }
            MensajeComida="\nPedido de Cliente: "+apeynom+"\n"+MensajeComida;
            alert(MensajeComida +"\n\nTotal $"+acu_total);
            acu_total=0;
            descuento=false;
            MensajeComida="";
        }   
   
    }
}//fin de funcion sistema - Bloque PRINCIPAL del programa.


//  COMIENZAN LAS FUNCIONES A UTILIZAR.    
// armado de comida    
function armadocomida(caso){
	let resultado = coleccion_productos.find((w) => w.tipo == "Comida" && w.indice == caso);
	if (!resultado) {
		alert("Dato seleccionado no corresponde -indefenido");
	} else {
		acu_total = acu_total + resultado.precio;
		MensajeComida = MensajeComida + "\n" + resultado.descripcion + " - " + resultado.precio;
	}
}
//armado de bebida
function armadobebida(caso){
    let resultado = coleccion_productos.find((w) => w.tipo == "Bebida" && w.indice == caso);
    if (!resultado) {
        alert("indefenido");
    } else {
        acu_total=  acu_total + resultado.precio;
        MensajeComida = MensajeComida +"\n" + resultado.descripcion +" - " + resultado.precio;
    }
}
 */






