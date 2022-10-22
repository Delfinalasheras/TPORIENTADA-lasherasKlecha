const Lampara = require("./Lampara");

function Tablero(){
    this.estado="Apagado";
    this.linea=new Array(100);
    
    this.getEstado=function(){
        this.estado="Encendido";

    };
    this.linea[0]=new Lampara();
    this.prenderLinea=function(){
        for(i=0;i<100;i++){
            this.linea[i]=new Lampara();
            this.linea[i].Prender();
        }
        return "Linea Encendida";
    }

}
module.exports=Tablero;