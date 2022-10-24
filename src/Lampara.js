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
    this.agregarIntensidad=function(aggIntensidad){
        this.intensidad = this.intensidad + aggIntensidad;
        if(this.intensidad > 10){
            this.intensidad = 10;
        }
        return this.intensidad;
    }
    this.quitarIntensidad=function(quitIntensidad){
        this.intensidad = this.intensidad - quitIntensidad;
        if(this.intensidad < 0){
            this.intensidad = 0;
        }
        return this.intensidad;
    }
    
}

module.exports=Lampara;