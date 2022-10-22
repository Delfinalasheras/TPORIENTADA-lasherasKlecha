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
                this.tablero[i][j].prender();
            }
        }
        this.estado="Tablero Encendido";
    }
    this.prenderPosicion=function(pos1,pos2){
        for(x=pos1[1];x<100 && x<=pos2[1];x++){
            for(y=pos1[0];y<100 && y<=pos2[0];y++){
                this.tablero[x][y].prender();
                console.log('prendio [%d][%d]',x,y,this.tablero[x][y].estado);
            }
        }
        this.tablero.estado="cuadrado prendido";
    }

    

}
module.exports=Tablero;