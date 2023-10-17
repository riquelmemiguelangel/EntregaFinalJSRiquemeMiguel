
class Venta{
    constructor(indice,nfactura,descripcion,precio,cantidad){
        this.indice=indice;
        this.nfactura=nfactura;
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=cantidad

    }
}
let coleccion_venta= new Array();
//datos de los clientes/usuarios
class Cliente {
    constructor(nro_cliente,nombre,apellido,direccion,socio,foto){
        this.nro_cliente = nro_cliente ;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.socio = socio;
        this.foto=foto;
    }  

    getDatos(){
        return this.nro_cliente + " - "+ this.nombre + " - " + this.apellido ;
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
    getDescuento(){
        return this.socio;
    }

    mostrarListado(){
        return "--"+this.nombre+" - "+this.apellido;
    }
    
    getfoto(){
        return this.foto;
    }
}
//Carga de datos BD clientes/usuarios
let cliente0 =  new Cliente(0,"Usuario","Administrador","LOCAL","N","00.png");
let cliente1 =  new Cliente(1,"Pablo","Perez","Cabildo 123 - San Miguel","Y","01.png");
let cliente2 =  new Cliente(1,"Alberto","Milei","Mitre 345 - San Miguel","Y","02.png");
let cliente3 =  new Cliente(3,"Patricia","Massa","Paso alto 567 - San Miguel","N","03.png");
let cliente4 =  new Cliente(4,"Sergio","Bullrich","San Benito 789 - San Miguel","N","04.png");


let coleccion_clientes = new Array();
coleccion_clientes.push(cliente0);
coleccion_clientes.push(cliente1);
coleccion_clientes.push(cliente2);
coleccion_clientes.push(cliente3);
coleccion_clientes.push(cliente4);

//Datos de logueo
class Login {
    constructor(user,pass){
        this.user = user ;
        this.pass = pass;
        this.cliente = null ;
    }  
    getUser(){
        return this.user;
    }
    setCliente(cliente){
        this.cliente = cliente;
    }
    getCliente(){
        return this.cliente;
    }

}

//Carga de logueo
let login0 = new Login("log0",'1234');
login0.setCliente(cliente0);

let login1 = new Login("log1",'1234');
login1.setCliente(cliente1);

let login2 = new Login("log2",'1234');
login2.setCliente(cliente2);

let login3 = new Login("log3",'1234');
login3.setCliente(cliente3);

let login4 = new Login("log4",'1234');
login4.setCliente(cliente4);

let colleccion_logines = new Array();
colleccion_logines.push(login0);
colleccion_logines.push(login1);
colleccion_logines.push(login2);
colleccion_logines.push(login3);
colleccion_logines.push(login4);

// datos de los productos

class Producto {
    constructor(indice,tipo,descripcion,precio){
        this.indice = indice ;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
    }  
    listaProducto() {
        return "-- " + this.indice + " - " + this.tipo + " _ " + this.descripcion;
    }
    mostrarListado(){
        return this.descripcion+" -- "+this.tipo+" - $"+this.precio;
    }
}
