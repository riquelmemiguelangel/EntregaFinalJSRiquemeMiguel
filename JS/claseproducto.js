6// datos de los productos
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

            {
                "indice": 2,
                "tipo": "bebida",
                "descripcion": "cafe",
                "precio": 300,
                "stock": 50,
                "img": "cafe.jpeg"
            },
            

        ]


       // let productosDestacados = productos.filter (prod => prod.destacado == 1) ;


        this.cargarProductos(productos);



    }


    cargarProductos(productos){
        //const divProductos = document.getElementById("productos")
        const divProductos = document.querySelector("#productos")
        divProductos.innerHTML = "" ;

        if (productos.length == 0 ){
            console.log("No se han encontrado productos");
        }else{

            productos.forEach(producto => {

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
                                    <p>${tipo}</p>
                                    <p>Cantidad disonible: ${stock}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                    <p class="precio">$${precio}</p>
                                    
                                    <a href="javascript:addCarrito(${indice})"  class="btn btn-primary"> Agregar al pedido </a>
                                </div>
                                `;
                 divProductos.appendChild(prod);
            });
        }
    }


    listadepedido(item){
        this.actualizarCarrito();
        const {indice,tipo,descripcion,precio,stock,img}= productos.filter (prod => prod.indice == 1) ;
        alert("filaaaa" + tipo);
        carrito.push(filaitem);
       
        this.actualizarCarrito();
    }
    addCart(item){
          const existe = carrito.some(producto => producto.indice === item.indice) ;
        if (existe){
            const articulo = carrito.map(producto =>{
                if (producto.indice === item.indice ){
                    //producto.cantidad++;
                    return producto;
                }else{
                    return producto ;
                }

            })

        }else{
            carrito.push(item);
            alert("producto agregado con exito");
        }
        this.mostarpedido();
        //this.actualizarCarrito();
    }


    actualizarCarrito(){
        //actualizar el contador
        //this.actualizarContador();
        this.mostarpedido();
        //this.guardarCarrito();
    }


    mostarpedido(){

        const detalleCarrito = document.querySelector("#pedidolista");
        detalleCarrito.innerHTML = "" ;  
        const row = document.createElement("div");
        row.classList.add("row");

        row.innerHTML = `
                            <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                <p> fila </p>                                    
                            </div>.
                                    
                        `

        detalleCarrito.append(row);

        carrito.forEach((producto)=>{

            //const {id,nombre,precio,img,cantidad} = producto;

            const row = document.createElement("div");
            row.classList.add("row");

            row.innerHTML = `
                                <div class="col-3 d-flex align-items-center p-2 border-bottom">
                                    <p fila />                                    
                                </div>.
                                        
                            `

            detalleCarrito.append(row);


        })


    }







}
