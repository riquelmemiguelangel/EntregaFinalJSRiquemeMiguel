
//Variables generales
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

sistema();
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

//Ingreso de usuario - validar descuento
function checkearCredenciales(user, pass) {
    let login = colleccion_logines.find((l) => l.user === user && l.pass == pass);
    if (login) {
        apeynom=login.getCliente().getNombreCompleto();
        //alert(login.getCliente().getDescuento());
        if(login.getCliente().getDescuento()=="Y"){
            descuento=true;
        }
        return 4;
    } else {
        alert("Credenciales incorrectas");
        return 1;
    }
}

function menuListado(){
    let salida=true;
    while(salida){
        let Nlistado = prompt("Seleccione el listado <Ingreso de PEDIDO> \n\n\nProcesando..."+"\n\n1. Listado de Socios   \n2. Listado de productos\n3. Agregar Producto\nVolver al menu Principal            - <Ingrese X>");    
        let mensaje="";
        switch(Nlistado){
            case"x":
                salida=false;
                break;
            case"X":
                salida=false;
                break;
            case"1":
                mensaje=mostrar_listado();
                alert(mensaje);
                break;
            case"2":
                mensaje=mostrar_listado_producto();
                alert("Listado de productos\n"+mensaje);
                break;           
            case"3":
                agregaProducto();
                break;
            default:
                break;
        }
    }
}

function agregaProducto(){
    let mayor_indice = 0
    for (let i = 0; i < coleccion_productos.length; i++) {
        let indice1 = coleccion_productos[i].indice;
        if(indice1>mayor_indice){
            mayor_indice=indice1
        }
       
    }
    mayor_indice=mayor_indice+1;
    let tipo1=prompt("Ingrese tipo de producto");
    let descripcion1 =prompt("Ingrese descripcion");
    let precio1= prompt("Ingrese precio del producto");
    if (tipo1==""||descripcion1==""||precio1==""){
        alert("Faltan datos para el ingreso de producto");
        return;
    }
    if(isNaN(precio1)){
        alert("Error.\nEl PRECIO ingresado debe ser numero");
        return;
    }
    let productonuevo = new Producto(mayor_indice,tipo1,descripcion1,precio1);
    coleccion_productos.push(productonuevo);
}

function mostrar_listado() {
    let stock = "";
    for (let i = 0; i < coleccion_clientes.length; i++) {
        stock += "\n" + coleccion_clientes[i].mostrarListado();
    }
    return stock;
}

function mostrar_listado_producto() {
    let stock = "";
    for (let i = 0; i < coleccion_productos.length; i++) {
        stock += "\n" + coleccion_productos[i].mostrarListado();
    }
    return stock;
}
function listado_Producto(queopcion) {
    let stockp = "";
    for (let i = 0; i < coleccion_productos.length; i++) {
        if(queopcion === coleccion_productos[i].tipo){
            stockp += "\n< " + coleccion_productos[i].indice + " >  » $" + coleccion_productos[i].precio + " - " + coleccion_productos[i].descripcion;
        }
    }
    return stockp;
}


// cuando esta todo cargado se le pide datos para ingresar al sistema

//window.addEventListener('load', function() {
//     sistema();
//});