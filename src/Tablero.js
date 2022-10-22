const Lampara = require("./Lampara");

function Tablero(){
    this.estado="Apagado";
    this.linea=new Array(100);
    
    this.getEstado=function(){
        this.estado="Encendido";

    };
    this.linea[0]=new Lampara();
    this.linea[0].prender();

}
module.exports=Tablero;