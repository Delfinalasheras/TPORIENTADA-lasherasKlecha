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
    this.cambiarIntensidad=function(aggIntensidad){
        this.intensidad = this.intensidad + aggIntensidad;
        return this.intensidad;
    }
}

module.exports=Lampara;