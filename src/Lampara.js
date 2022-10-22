function Lampara(){
    this.estado="Apagada";
    this.prender=function(){
        this.estado="Encendida";
    }
    this.getEstado=function(){
        return this.estado;
    }
}

module.exports=Lampara;