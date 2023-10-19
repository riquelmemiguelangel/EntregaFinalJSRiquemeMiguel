
let carrito = [] ;
let productos = new Array() ;
let venta = new Array ();
let gestor ;
let mensajeventa="";
let mensajeprecio="";

let apeynomfac="";

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

let numeroFactura ={
    numero:1
};



// carga de listados de productos

const botonAAA = document.querySelector("#productoSeleccion1");
botonAAA.addEventListener("click", function (evento) {
cargaListaDeProductos("todo");
});
const botonA = document.querySelector("#productoSeleccion2");
botonA.addEventListener("click", function (evento) {
cargaListaDeProductos("Comida");
});
const botonB = document.querySelector("#productoSeleccion3");
botonB.addEventListener("click", function (evento) {
cargaListaDeProductos("Bebida");
});
const botonC = document.querySelector("#productoSeleccion4");
botonC.addEventListener("click", function (evento) {
cargaListaDeProductos("Postre");
});

//class Venta{
// constructor(indice,nfactura,descripcion,precio,cantidad){
const botonCompra = document.querySelector("#guardaPedido");
botonCompra.addEventListener("click", function (evento) {
    let storeNumeroFactura = JSON.parse(localStorage.getItem("numeroFactura"));
    storeNumeroFactura.numero = storeNumeroFactura.numero +1;
    localStorage.setItem("numeroFactura", JSON.stringify(storeNumeroFactura));
    
    
    let factura =  new Factura(1 ,apeynomfac,acu_total,totaldescuento,acu_total - totaldescuento);
    coleccion_factura.push(factura);
    localStorage.setItem("coleccion_factura", JSON.stringify(coleccion_factura));
    
});

function cargaListaDeProductos(filtro1){
    const divProductos = document.querySelector("#productos");
    divProductos.innerHTML = "" ;

    fetch("../API/tablaProducto.json")

    .then(response => response.json())
    .then(data =>{
        data.forEach(elemento1 => {

            if(elemento1.tipo == filtro1 || filtro1 == "todo"){
                 let prod = document.createElement("div");
                //Dandole css al DOM desde JS
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
            
                prod.indice = "row_" + elemento1.index ;
                prod.innerHTML = `
                                <div class="w-20">
                                    <img src="../images/menu/${elemento1.imagen}" alt="" width="140" height="140" > </img>
                                </div>

                                <div class="p-3 d-flex flex-column w-60 h-150">
                                    <h3>${elemento1.descripcion}</h3>
                                    <h4>${elemento1.tipo}</h4>
                                    <p>Cantidad disponible: ${elemento1.stock}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                    <p class="tLg">$${elemento1.precio}</p>
                                    
                                    <a href="javascript:addCarrito(${elemento1.index})"  class="btn btn-primary"> Agregar al pedido </a>
                                </div>
                                `;
                divProductos.appendChild(prod);
        }
        });
    })
   .catch((error) => alert("error al obtener los datos"))
}


//cuando este todo cargado recien ahi ejecuta 
document.addEventListener("DOMContentLoaded",()=>{
    ///// ACA INICIAMOS EL DOM DESDE JS - > PEDIDO.HTML
    if(localStorage.getItem("usuarioData")){
        let storedData = JSON.parse(localStorage.getItem("usuarioData"));
     
        let lsusuario1= storedData.nombre;
        let lsusuario2= storedData.contrasena;
        let lsusuario3= storedData.apeynom;
        apeynomfac=storedData.apeynom;
        let lsusuario4= storedData.descuento;
        let usuarioInfo = document.querySelector("#infousuario");

        usuarioInfo.innerHTML = "" ;  

        if(localStorage.getItem("numeroFactura")){
            let storeNF = JSON.parse(localStorage.getItem("numeroFactura"));
            if(storeNF < 1){
                numeroFactura.numero=1;
                localStorage.setItem("numeroFactura", JSON.stringify(numeroFactura));
            }else{
                numeroFactura=JSON.parse(localStorage.getItem("numeroFactura"));
            }
        }else{
            
        }
        const row2 = document.createElement("div");
        row2.classList.add("row");
        if(lsusuario4 == "Y"){
            descuento=true;
        }else{
            descuento=false;
        }
        //mostrar datos de usuario del Localstorage
        row2.innerHTML = `
                            <div>
                                <h3>DATOS DE USUARIO</h3> 
                                <h4>Factura N: ${numeroFactura.numero}<br>
                                    Contraseña: ${lsusuario2}<br>
                                    Nombre: ${lsusuario3}<br>
                                    Descuento: ${lsusuario4}<h4>                            
                            </div>
                            <div>
                            <img src="../images/usuarios/00.png" alt="" width="300" height="300" > </img>
                            </div>
                        `;
        usuarioInfo.append(row2);
    }else{


      
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'localstorage vacio ingrese usuario',
            showConfirmButton: true,
            timer: 7500
          });
         setTimeout(function(){ location.href = '../index.html'},3000);

    }

    const divProductos = document.querySelector("#productos");
    divProductos.innerHTML = "" ;

    fetch("../API/tablaProducto.json")

    .then(response => response.json())
    .then(data =>{
        data.forEach(elemento1 => {
            let prod = document.createElement("div");
            //Dandole css al DOM desde JS
            prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
          
            prod.indice = "row_" + elemento1.index ;
            prod.innerHTML = `
                            <div class="w-20">
                                <img src="../images/menu/${elemento1.imagen}" alt="" width="140" height="140" > </img>
                            </div>

                            <div class="p-3 d-flex flex-column w-60 h-150">
                                <h3>${elemento1.descripcion}</h3>
                                <h4>${elemento1.tipo}</h4>
                                <p>Cantidad disponible: ${elemento1.stock}</p>
                            </div>

                            <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                <p class="tLg">$${elemento1.precio}</p>
                                
                                <a href="javascript:addCarrito(${elemento1.index})"  class="btn btn-primary"> Agregar al pedido </a>
                            </div>
                            `;
             divProductos.appendChild(prod);

        });
    })
   .catch((error) => alert("error al obtener los datos"))

})
function addCarrito (indice){

    fetch("../API/tablaProducto.json")

    .then(response => response.json())
    .then(data =>{
        data.forEach(elemento1 => {
            if (elemento1.index == indice){
                addCarrito2(elemento1.descripcion,elemento1.precio);

                    //constructor(indice,nfactura,descripcion,precio,cantidad)
                let venta =  new Venta(elemento1.index,numeroFactura.numero,elemento1.descripcion,elemento1.precio,1);
                coleccion_venta.push(venta);
          
                localStorage.setItem("coleccion_venta", JSON.stringify(coleccion_venta));
            }
        })
    })
}


function addCarrito2 (rdescripcion,rprecio){
    mensajeventa = mensajeventa + "<br> ---> " + rdescripcion ;
    mensajeprecio= mensajeprecio + "<br> $"+rprecio;
   
    acu_total = acu_total + rprecio;
    
    if(descuento){
        totaldescuento=acu_total*20/100;
        mensajedescuento= "Descuento de $" + totaldescuento;
    }else{
        mensajedescuento="Sin descuento";
    }
  
    const detalleCarrito = document.querySelector("#pedidolista");
    detalleCarrito.inenrHTML ="";  

    detalleCarrito.innerHTML = `
                        <div class="d-flex">
                            <h3>---> PRODUCTO <---- ${mensajeventa} <br> <br>Total pedido -> <br> ${mensajedescuento}</h3>                                    
                        </div>
                    `
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