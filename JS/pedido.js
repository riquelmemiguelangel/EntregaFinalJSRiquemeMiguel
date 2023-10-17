
let carrito = [] ;
let productos = new Array() ;
let venta = new Array ();
let gestor ;
let mensajeventa="";
let mensajeprecio="";
//const key_carrito = "carrito";
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



// borrar local storage
const botonA = document.querySelector("#productoSeleccion2");
botonA.addEventListener("click", function (evento) {
cargaListaDeProductos("Comida");
});
const botonCompra = document.querySelector("#guardaPedido");
botonCompra.addEventListener("click", function (evento) {
    let storeNumeroFactura = JSON.parse(localStorage.getItem("numeroFactura"));
   
    storeNumeroFactura.numero = storeNumeroFactura.numero +1;
    let nfactura = storeNumeroFactura.numero;
    localStorage.setItem("numeroFactura", JSON.stringify(storeNumeroFactura));
    alert(storeNumeroFactura.numero);
});

function cargaListaDeProductos(filtro1){
    const divProductos = document.querySelector("#productos");
    divProductos.innerHTML = "" ;

    fetch("../API/tablaProducto.json")

    .then(response => response.json())
    .then(data =>{
        data.forEach(elemento1 => {
            if(elemento1.tipo == filtro1){

            

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
            //localStorage.setItem("numeroFactura", JSON.stringify(numeroFactura));
        }
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
        alert("localstorage vacio 22");
        // Swal.fire({
        //     position: 'top-end',
        //     icon: 'success',
        //     title: 'Your work has been saved',
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
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
        //gestor = new GestionarProductos();
        //gestor.iniciar();
        //gestor.iniciar.cargarProductos();

})
function addCarrito (indice){
    //alert(indice);
    fetch("../API/tablaProducto.json")

    .then(response => response.json())
    .then(data =>{
        data.forEach(elemento1 => {
            if (elemento1.index == indice){
                addCarrito2(elemento1.descripcion,elemento1.precio);

                    //constructor(indice,nfactura,descripcion,precio,cantidad)
                let venta =  new Venta(elemento1.index,numeroFactura.numero,elemento1.descripcion,elemento1.precio,1);
                coleccion_venta.push(venta);
                console.log(coleccion_venta);
            }

        })
    })
}


function addCarrito2 (rdescripcion,rprecio){
    //let resultado = coleccion_productos.find((w) =>  w.indice == indice);



    mensajeventa = mensajeventa + "<br> ---> " + rdescripcion ;
    mensajeprecio= mensajeprecio + "<br> $"+rprecio;
   
    acu_total = acu_total + rprecio;
    
    if(descuento){
        totaldescuento=acu_total*20/100;
        mensajedescuento= "Descuento de $" + totaldescuento;
    }else{
        mensajedescuento="Sin descuento";
    }
   //let venta = factura,rindex,rdescripcion,rprecio,cantidad;
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