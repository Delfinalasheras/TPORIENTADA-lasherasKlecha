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
        }
        for(i=0;i<100;i++){
            for(j=0;j<100;j++){
                this.tablero[i][j]=new Lampara();
            }
        }
    }
    this.prenderCompleto=function(){
        for(i=0;i<100;i++){
            for(j=0;j<100;j++){
                this.tablero[i][j].prender;
            }
        }
        return "Tablero Encendido";
    }
    

    

}
module.exports=Tablero;