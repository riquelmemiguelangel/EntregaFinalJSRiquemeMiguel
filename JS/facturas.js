//let coleccion_ventaA = new Array();


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
        //alert(item.descripcion);
        //alert(item.precio);

        let div = document.createElement("div")
        div.innerHTML = `
                        <div class="p-3 d-flex flex-column w-60 h-150">
                            <h3>${item.descripcion} Precio :$ ${item.precio}</h3>
                        </div>
                        `;
        divProductos.appendChild(div);
    })
})





