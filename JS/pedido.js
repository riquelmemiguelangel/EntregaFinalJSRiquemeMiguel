
let carrito = [] ;
let productos = new Array() ;

let gestor ;

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
    alert(indice);
    const prod = document.querySelector("#row_" + indice) ;

    let titulo = "titulo";//prod.querySelector("h3").textContent;

    //alert(titulo);
    //corto el simbolo $-----ej: $8600  -> 8600
    //let precio = prod.querySelector(".precio").textContent.substring(1,prod.querySelector(".precio").textContent.length);
    
    //let img = prod.querySelector ("img").src ;

    //let producto = new Producto(indice,tipo,precio,img);

    //gestor.addCart(producto);    
    gestor.listadepedido(indice);    



}