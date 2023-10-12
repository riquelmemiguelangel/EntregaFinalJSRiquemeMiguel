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

let coleccion_productos = new Array();
coleccion_productos.push(producto1);
coleccion_productos.push(producto2);
coleccion_productos.push(producto3);
coleccion_productos.push(producto4);
coleccion_productos.push(producto5);
coleccion_productos.push(producto6);
coleccion_productos.push(producto7);
coleccion_productos.push(producto8);



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
  


    cargarProductos(productos){
        //const divProductos = document.getElementById("productos")
        alert("hasta aca ---- ");
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "" ;
        
        if (coleccion_productos.length == 0 ){
            console.log("No se han encontrado productos");
        }else{

            coleccion_productos.forEach(producto => {

                const {indice,tipo,descripcion,precio,stock,img} =  producto;

                let prod = document.createElement("div");
                //Dandole css al DOM desde JS
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
              
                prod.indice = "row_" + indice ;
                prod.innerHTML = `
                                <div class="w-20">
                                    <img src="../images/menu/${img}" alt="" width="140" height="140" > </img>
                                </div>

                                <div class="p-3 d-flex flex-column w-60 h-150">
                                    <h3>${descripcion}</h3>
                                    <h4>${tipo}</h4>
                                    <p>Cantidad disponible: ${stock}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                    <p class="tLg">$${precio}</p>
                                    
                                    <a href="javascript:addCarrito(${indice})"  class="btn btn-primary"> Agregar al pedido </a>
                                </div>
                                `;
                 divProductos.appendChild(prod);
            });
        }
    }
}

