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
        for(x=pos1[0];x<100 && x<=pos2[0];x++){
            for(y=pos1[1];y<100 && y<=pos2[1];y++){
                this.tablero[x][y].prender();
                console.log('prendio [%d][%d]',x,y,this.tablero[x][y].estado);
            }
        }
        this.estado="cuadrado prendido";
    }
    this.apagarPosicion=function(pos1,pos2){
        for(x=pos1[0];x<100 && x<=pos2[0];x++){
            for(y=pos1[1];y<100 && y<=pos2[1];y++){
                this.tablero[x][y].apagar();
                console.log('Apago [%d][%d]',x,y,this.tablero[x][y].estado);
            }
        }
        this.estado="cuadrado apagado";
    }
    this.cambiarEstados=function(pos1,pos2){
        for(x=pos1[0];x<100 && x<=pos2[0];x++){
            for(y=pos1[1];y<100 && y<=pos2[1];y++){
                if(this.tablero[x][y].estado=="Apagada"){
                    this.tablero[x][y].prender();
                    console.log('[%d][%d] Prendido ',x,y);
                }
                else{
                    this.tablero[x][y].apagar();
                    console.log('[%d][%d] Apagada ',x,y);
                }
            }
        }
        this.estado="cuadrado cambiado";
    
    }
    this.contarPrendidas=function(pos1,pos2){
        var totPrendidas=0;
        for(i=0;i<100;i++){
            for(j=0;j<100;j++){
                if(this.tablero[i][j].estado=="Encendida"){
                    totPrendidas++;
                }       
            }
        }
        return totPrendidas;

    }
    // this.imprimir=function(){
        // for(i=0;i<100;i++){
        //     for(j=0;j<100;j++){
        //         if(this.tablero[i][j].estado=="Apagada"){
        //             console.log('[%d][%d] * ',i,j);
        //         }
        //         else{
        //             console.log('[%d][%d] 1 ',i,j);
        //         }
                    
        //     }
        // }
    // }

    

}
module.exports=Tablero;