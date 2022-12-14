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
            this.linea[i].encender();
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
                this.tablero[i][j].encender();
            }
        }
        this.estado="Tablero Encendido";
    }
    this.prenderPosicion=function(pos1,pos2){
        this.verificarPosicion(pos1,pos2);
        for(x=pos1[0];x<100 && x<=pos2[0];x++){
            for(y=pos1[1];y<100 && y<=pos2[1];y++){
                this.tablero[x][y].encender();
                console.log('prendio [%d][%d] = %d',x,y,this.tablero[x][y].intensidad);
            }
        }
        this.estado="cuadrado prendido";
    }
    this.apagarPosicion=function(pos1,pos2){
        this.verificarPosicion(pos1,pos2);
        for(x=pos1[0];x<100 && x<=pos2[0];x++){
            for(y=pos1[1];y<100 && y<=pos2[1];y++){
                this.tablero[x][y].apagar();
                console.log('Apago [%d][%d] = %d',x,y,this.tablero[x][y].intensidad);
            }
        }
        this.estado="cuadrado apagado";
    }
    this.cambiarEstados=function(pos1,pos2){
        this.verificarPosicion(pos1,pos2);
        for(x=pos1[0];x<100 && x<=pos2[0];x++){
            for(y=pos1[1];y<100 && y<=pos2[1];y++){
                this.tablero[x][y].cambiar();
                console.log('Intensidad cambiada [%d][%d] = %d',x,y,this.tablero[x][y].intensidad);
            }
        }
        this.estado="cuadrado cambiado";
    
    }
    this.contarPrendidas=function(){
        var totPrendidas=0;
        for(i=0;i<100;i++){
            for(j=0;j<100;j++){
                if(this.tablero[i][j].intensidad > 0){
                    totPrendidas++;
                }       
            }
        }
        return totPrendidas;

    }
    this.verificarPosicion = function(pos1,pos2){
        if(pos1[0]<0 || pos1[1]<0 || pos2[0]<0 || pos2[1]<0){
            throw new Error("La posici??n debe ser positiva");
        }
    }
}
module.exports=Tablero;