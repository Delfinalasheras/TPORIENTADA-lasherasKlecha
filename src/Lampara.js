function Lampara(){
    this.estado="Apagada";
    this.prender=function(){
        this.estado="Encendida";
    }
}

module.exports=Lampara;