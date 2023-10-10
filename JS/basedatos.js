//datos de los clientes/usuarios
class Cliente {
    constructor(nro_cliente,nombre,apellido,direccion,socio,foto){
        this.nro_cliente = nro_cliente ;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.socio = socio;
        this.foto=foto;
    }  

    getDatos(){
        return this.nro_cliente + " - "+ this.nombre + " - " + this.apellido ;
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
    getDescuento(){
        return this.socio;
    }

    mostrarListado(){
        return "--"+this.nombre+" - "+this.apellido;
    }
    getfoto(){
        return this.foto;
    }
}
