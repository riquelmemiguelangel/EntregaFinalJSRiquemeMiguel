//cuando este todo cargado recien ahi ejecuta 
document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("coleccion_venta")){
    }else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Almacenamiento vacio ingrese pedido',
            showConfirmButton: true,
            timer: 7500
          });
         setTimeout(function(){ location.href = '../index.html'},3000);

    }

    const divProductos = document.getElementById("listado");
    let coleccion_ventaX = JSON.parse(localStorage.getItem("coleccion_venta"));
    coleccion_ventaX.forEach((item)=> {

        let div = document.createElement("div")
        div.innerHTML = `
                        <div class="p-3 d-flex flex-column w-60 h-150">
                            <h3>Producto: ${item.descripcion} Precio :$ ${item.precio}</h3>
                        </div>
                        `;
        divProductos.appendChild(div);
    });
    let divProductos1 = document.getElementById("listado2");
    coleccion_ventaX = JSON.parse(localStorage.getItem("coleccion_factura"));
    coleccion_ventaX.forEach((item)=> {
        let div1 = document.createElement("div1")
        div1.innerHTML = `
                        <div class="p-3 d-flex flex-column w-60 h-150">
                            <h3>FACTURA n: ${item.nfactura} cliente $ ${item.apeynom} parcial $${item.parcial} descuento $${item.descuento} total: ${item.total}</h3>
                        </div>
                        `;
        divProductos1.appendChild(div1);
    });


})





