const Lampara = require('../src/Lampara');
const Tablero = require('../src/Tablero');
var Tablero;
beforeEach(() => {
    var tablero = new Tablero();
  });

test("tablero Apagado",()=>{
    
    expect(tablero.estado).toBe("Apagado");
})
test("tablero Encedido",()=>{
    
    const estado= tablero.getEstado();
    expect(tablero.estado).toBe("Encendido");
})
test("prender Lampara",()=>{
    
    tablero.linea[0]=new Lampara();
    tablero.linea[0].prender();
    expect(tablero.linea[0].getEstado()).toBe("Encendida");
})
test("prender linea",()=>{
   
    expect(tablero.prenderLinea()).toBe("Linea Encendida");

})
    


