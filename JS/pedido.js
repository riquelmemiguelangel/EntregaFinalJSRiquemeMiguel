
let carrito = [] ;
let productos = new Array() ;
let venta = new Array ();
let gestor ;
let mensajeventa="";
let mensajeprecio="";
const key_carrito = "carrito";
let acu_total = 0;
let descuento = false;
let totaldescuento="";
let mensajedescuento="";
let usuarioData ={
    nombre:"",
    contrasena:"",
    apeynom:"",
    descuento:""
};

//cuando este todo cargado recien ahi ejecuta 
document.addEventListener("DOMContentLoaded",()=>{
    ///// ACA INICIAMOS EL DOM DESDE JS - > PEDIDO.HTML

    if(localStorage.getItem("usuarioData")){
        gestor = new GestionarProductos();
        gestor.cargarProductos();
        let storedData = JSON.parse(localStorage.getItem("usuarioData"));
        
        let lsusuario1= storedData.nombre;
        let lsusuario2= storedData.contrasena;
        let lsusuario3= storedData.apeynom;
        let lsusuario4= storedData.descuento;
        let usuarioInfo = document.querySelector("#infousuario");

        usuarioInfo.innerHTML = "" ;  
        const row2 = document.createElement("div");
        row2.classList.add("row");
        if(lsusuario4 == "Y"){
            descuento=true;
        }else{
            descuento=false;
        }
        row2.innerHTML = `
                            <div>
                                <h3>DATOS DE USUARIO</h3> 
                                <h4>Usuario: ${lsusuario1}<br>
                                    Contraseña: ${lsusuario2}<br>
                                    Nombre: ${lsusuario3}<br>
                                    Descuento: ${lsusuario4}<h4>                            
                            </div>
                        `;
        usuarioInfo.append(row2);
    }else{
        alert("localstorage vacio 22");
    }
})



function addCarrito (indice){
    let resultado = coleccion_productos.find((w) =>  w.indice == indice);
    mensajeventa = mensajeventa + "<br> ---> " + resultado.descripcion ;
    mensajeprecio= mensajeprecio + "<br> $"+resultado.precio;
    acu_total = acu_total + resultado.precio;
    if(descuento){
        totaldescuento=acu_total*20/100;
        mensajedescuento= "Descuento de $" + totaldescuento;
    }else{
        mensajedescuento="Sin descuento";
    }
   
    const detalleCarrito = document.querySelector("#pedidolista");
    detalleCarrito.inenrHTML ="";  
    //const row = document.createElement("div");
    //row.classList.add("row");
    detalleCarrito.innerHTML = `
                        <div class="d-flex">
                            <h3>---> PRODUCTO <---- ${mensajeventa} <br> <br>Total pedido -> <br> ${mensajedescuento}</h3>                                    
                        </div>
                    `
    //detalleCarrito.append(row);
     

   const detalleVenta =document.querySelector("#pedidoprecio");
    detalleVenta.innerHTML="";
    const row2 =document.createElement("div");
    row2.classList.add("row");
    row2.innerHTML = `
                        <div class="d-flex">
                            <h3>PRECIO ${mensajeprecio} <br> <br>$${acu_total}</h3>                                    
                        </div>
                    `
    detalleVenta.append(row2);

}