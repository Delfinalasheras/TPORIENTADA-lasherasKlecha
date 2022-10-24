function Lampara(){
    this.estado="Apagada";
    this.intensidad = 0;
    this.prender=function(){
        this.estado="Encendida";
    }
    this.apagar=function(){
        this.estado="Apagada";
    }
    this.getEstado=function(){
        return this.estado;
    }
    this.encender=function(){
        this.intensidad = this.intensidad + 1;
        if(this.intensidad > 10){
            this.intensidad = 10;
        }
        return this.intensidad;
    }
    this.apagar=function(){
        this.intensidad = this.intensidad - 1;
        if(this.intensidad < 0){
            this.intensidad = 0;
        }
        return this.intensidad;
    }
    
}

module.exports=Lampara;