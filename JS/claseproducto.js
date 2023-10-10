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

