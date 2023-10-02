
let carrito = [] ;
let productos = new Array() ;
let venta = new Array ();
let gestor ;
let mensajeventa="";
const key_carrito = "carrito";

//cuando este todo cargado recien ahi ejecuta lo qeu te pongo
document.addEventListener("DOMContentLoaded",()=>{

    //utilizo operador or para chequear si hay algo en localstorage
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [] ;
    
    ///// ACA INICIAMOSA EL DOM DESDE JS - > PEDIDO.HTML
    gestor = new GestionarProductos();
    gestor.iniciar();

})


document.querySelector("#buscar").addEventListener("keyup",()=>{
    let q = document.querySelector("#buscar").value ;
    if (q.length >= 3){
        console.log("entre descpues d escribir 3 letras");
    }
})

function addCarrito (indice){
    let resultado = coleccion_productos.find((w) =>  w.indice == indice);
   mensajeventa = mensajeventa + "<br>      ---> " + resultado.descripcion + " precio =$"+resultado.precio;
    const detalleCarrito = document.querySelector("#pedidolista");
    detalleCarrito.innerHTML = "" ;  
    const row = document.createElement("div");
    row.classList.add("row");

    row.innerHTML = `
                        <div class="col-12 d-flex align-items-center p-2 border-bottom">
                            <h3> ${mensajeventa} </h3>                                    
                        </div>.
                    `
    detalleCarrito.append(row);
    gestor.listadepedido(indice);    
}