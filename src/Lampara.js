function Lampara(){
    this.estado="Apagada";
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
        this.intensidad = aggIntensidad;
        return intensidad + aggIntensidad;
    }
}

module.exports=Lampara;