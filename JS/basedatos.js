//datos de los clientes/usuarios
class Cliente {
    constructor(nro_cliente,nombre,apellido,direccion,socio){
        this.nro_cliente = nro_cliente ;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.socio = socio;
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
}
//Carga de datos BD clientes/usuarios
let cliente0 =  new Cliente(0,"Usuario","Administrador","LOCAL","N");
let cliente1 =  new Cliente(1,"Pablo","Perez","Cabildo 123 - San Miguel","Y");
let cliente2 =  new Cliente(1,"Alberto","Milei","Mitre 345 - San Miguel","Y");
let cliente3 =  new Cliente(3,"Patricia","Massa","Paso alto 567 - San Miguel","N");
let cliente4 =  new Cliente(4,"Sergio","Bullrich","San Benito 789 - San Miguel","N");


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
//Carga de datos BD PRODUCTOS
let producto1 = new Producto(1,"Bebida","Gaseosa",700);
let producto2 = new Producto(2,"Bebida","Agua",500);
let producto3 = new Producto(3,"Bebida","Cafe",600);
let producto4 = new Producto(4,"Comida","Hamburguesa",900);
let producto5 = new Producto(5,"Comida","Pancho",650);
let producto6 = new Producto(6,"Comida","Emparedado Jamon y queso",800);
let producto7 = new Producto(7,"Postre","Helado dulce de leche",650);
let producto8 = new Producto(8,"Postre","Torta ricota",680);

let coleccion_productos = new Array();
coleccion_productos.push(producto1);
coleccion_productos.push(producto2);
coleccion_productos.push(producto3);
coleccion_productos.push(producto4);
coleccion_productos.push(producto5);
coleccion_productos.push(producto6);
coleccion_productos.push(producto7);
coleccion_productos.push(producto8);