function Tablero(){
    this.estado="Apagado";
    this.linea=new Array(100);
    
    this.getEstado=function(){
        this.estado="Encendido";

    };
    this.linea[0].estado="Encendido";

}
module.exports=Tablero;