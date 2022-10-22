const Lampara = require("./Lampara");

function Tablero(){
    this.estado="Apagado";
    this.linea=new Array(100);
    this.tablero=new Array(100);
    this.getEstado=function(){
        this.estado="Encendido";

    };
    this.prenderLinea=function(){
        for(i=0;i<100;i++){
            this.linea[i]=new Lampara();
            this.linea[i].prender();
        }
        return "Linea Encendida";
    }
    this.armarTablero=function(){
        for(i=0;i<100;i++){
            this.tablero[i]=new Array(100);
            this.tablero[i][3]=5;
            console.log('posicion [%d][%d]',i,this.tablero[i][3]);
        }
    }

    

}
module.exports=Tablero;