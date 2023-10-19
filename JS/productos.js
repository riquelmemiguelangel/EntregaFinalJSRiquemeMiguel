

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
        ]
        this.cargarProductos(productos);
    }
  


    cargarProductos(productos){
        //const divProductos = document.getElementById("productos")

        const divProductos = document.querySelector("#productos")
        divProductos.innerHTML = "" ;

        if (coleccion_productos.length == 0 ){
            console.log("No se han encontrado productos");
        }else{

            coleccion_productos.forEach(producto => {

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
                                    <h4>${tipo}</h4>
                                    <p>Cantidad disponible: ${stock}</p>
                                </div>

                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                    <p class="tLg">$${precio}</p>
                                    
                                    <a href="javascript:addCarrito(${indice})"  class="btn btn-primary"> Agregar al pedido </a>
                                </div>
                                `;
                 divProductos.appendChild(prod);
            });
        }
    }
}
