function Tablero(){
    this.estado="Apagado";
    this.linea=new Array(100);
    
    this.getEstado=function(){
        this.estado="Encendido";

    };

}
module.exports=Tablero;