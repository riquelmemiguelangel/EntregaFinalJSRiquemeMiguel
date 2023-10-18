// datos de los productos
class Producto {
    constructor(indice,tipo,descripcion,precio,stock,img){
        this.indice = indice ;
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.img =img;
    }  
    listaProducto() {
        return "-- " + this.indice + " - " + this.tipo + " _ " + this.descripcion;
    }
    mostrarListado(){
        return this.descripcion+" -- "+this.tipo+" - $"+this.precio;
    }

    
}
//Carga de datos BD PRODUCTOS
let producto1 = new Producto(1,"Bebida","Gaseosa",600,50,"gaseosa.jpeg");
let producto2 = new Producto(2,"Bebida","Jugo de naranja",700,50,"jugonaranja.jpeg");
let producto3 = new Producto(3,"Bebida","Cafe",300,50,"cafe.jpeg");
let producto4 = new Producto(4,"Comida","Hamburguesa",600,50,"hamburguesa.jpeg");
let producto5 = new Producto(5,"Comida","Pancho",500,50,"pancho.jpeg");
let producto6 = new Producto(6,"Comida","Emparedado Jamon y queso",800,50,"jyq.jpeg");
let producto7 = new Producto(7,"Postre","Helado dulce de leche",600,50,"helado.jpeg");
let producto8 = new Producto(8,"Postre","Torta ricota",700,50,"ricota.jpeg");


class GestionarProductos{
    iniciar(){





        productos = [
            {
                "indice": 1,
                "tipo": "comida",
                "descripcion": "pancho",
                "precio":500 ,
                "stock": 50,
                "img": "pancho.jpeg"
            },
        ]
        this.cargarProductos(productos);
    }
  



}




