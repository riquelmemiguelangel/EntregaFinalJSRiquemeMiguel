//let coleccion_ventaA = new Array();


//cuando este todo cargado recien ahi ejecuta 
//document.addEventListener("DOMContentLoaded",()=>{


    
const divProductos = document.getElementById("listado");
let coleccion_ventaX = JSON.parse(localStorage.getItem("coleccion_venta"));

coleccion_ventaX.forEach((item)=> {
    alert(item.descripcion);
    alert(item.precio);

    let div = document.createElement("div")
    div.innerHTML = `
      

                    <div class="p-3 d-flex flex-column w-60 h-150">
                        <h3>${item.descripcion}</h3>
                        <p>Cantidad disponible: ${item.descripcion}</p>
                    </div>

                    <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                        <p class="tLg">$${item.precio}</p>
                        
                       
                    </div>
                    `;
    divProductos.appendChild(div);


})
//})

//cuando este todo cargado recien ahi ejecuta 
//document.addEventListener("DOMContentLoaded",()=>{


    //alert("facturas");
    //let venta =  new Venta(elemento1.index,numeroFactura.numero,elemento1.descripcion,elemento1.precio,1);
    //coleccion_venta.push(venta);
    //console.log(coleccion_venta);
    //localStorage.setItem("coleccion_venta", JSON.stringify(coleccion_venta));

    //let coleccion_ventaX = new Array();
   // if(localStorage.getItem("coleccion_venta")){
        
        //alert(coleccion_ventaX[1].descripcion); 

        //console.log(coleccion_ventaX[1].descripcion);  
    // for(let i=0; i<= coleccion_ventax.length-1;i++){
      //   alert(coleccion_ventaX[i].descripcion);
     //}

        
    // for(let i=0; i<= coleccion_ventax.length-1;i++){
    //     alert(coleccion_ventaX[i].descripcion);
    // }

    // if(localStorage.getItem("numeroFactura")){
    //     let storeNF = JSON.parse(localStorage.getItem("numeroFactura"));
    //     if(storeNF < 1){
    //         numeroFactura.numero=1;
    //         localStorage.setItem("numeroFactura", JSON.stringify(numeroFactura));
    //     }else{
    //         numeroFactura=JSON.parse(localStorage.getItem("numeroFactura"));
    //     }
    // }else{
    //     //localStorage.setItem("numeroFactura", JSON.stringify(numeroFactura));
    // }
    // const row2 = document.createElement("div");
    // row2.classList.add("row");
    // if(lsusuario4 == "Y"){
    //     descuento=true;
    // }else{
    //     descuento=false;
    // }
    // //mostrar datos de usuario del Localstorage
    // row2.innerHTML = `
    //                     <div>
    //                         <h3>DATOS DE USUARIO</h3> 
    //                         <h4>Factura N: ${numeroFactura.numero}<br>
    //                             Contraseña: ${lsusuario2}<br>
    //                             Nombre: ${lsusuario3}<br>
    //                             Descuento: ${lsusuario4}<h4>                            
    //                     </div>
    //                     <div>
    //                     <img src="../images/usuarios/00.png" alt="" width="300" height="300" > </img>
    //                     </div>
    //                 `;
    // usuarioInfo.append(row2);




