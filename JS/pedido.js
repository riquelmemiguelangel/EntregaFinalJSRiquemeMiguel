
let carrito = [] ;
let productos = new Array() ;
let venta = new Array ();
let gestor ;
let mensajeventa="";
const key_carrito = "carrito";
let acu_total = 0;

//cuando este todo cargado recien ahi ejecuta lo qeu te pongo
document.addEventListener("DOMContentLoaded",()=>{
    //utilizo operador or para chequear si hay algo en localstorage
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [] ;
    
    ///// ACA INICIAMOSA EL DOM DESDE JS - > PEDIDO.HTML
    if (localStorage.getItem("lsusuario")){
        let lsusuario2 =localStorage.getItem("lsusuario");
        let lscontrasena2=localStorage.getItem("lscontrasena");
        alert("Hay un usuario registrado");
    }else{
         alert("localstorage vacio");
     }

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
   mensajeventa = mensajeventa + "<br>      ---> " + resultado.descripcion + " precio :$"+resultado.precio;
   
   acu_total = acu_total + resultado.precio;
   
   const detalleCarrito = document.querySelector("#pedidolista");
    detalleCarrito.innerHTML = "" ;  
    const row = document.createElement("div");
    row.classList.add("row");

    row.innerHTML = `
                        <div class="col-12 d-flex align-items-center p-2 border-bottom">
                            <h3> ${mensajeventa} <br> <br>Totalpedido ${acu_total}</h3>                                    
                        </div>.
                    `
    detalleCarrito.append(row);
    //gestor.listadepedido(indice);    
}