function Tablero(){
    this.estado="Apagado";
    this.getEstado=function(){
        this.estado="Encendido";

    };
}
module.exports=Tablero;