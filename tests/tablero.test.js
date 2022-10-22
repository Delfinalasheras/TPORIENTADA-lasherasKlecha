const Lampara = require('../src/Lampara');
const Tablero = require('../src/Tablero');


test("tablero Apagado",()=>{
    const tablero= new Tablero();
    expect(tablero.estado).toBe("Apagado");
})
test("tablero Encedido",()=>{
    const tablero=new Tablero();
    const estado= tablero.getEstado();
    expect(tablero.estado).toBe("Encendido");
})
test("prender Lampara",()=>{
    const lampara=new Lampara();
    const tablero=new Tablero;
    tablero.linea[0].prender();
    expect(tablero.linea[0].getEstado()).toBe("Encendida");
})
test("prender linea",()=>{
    const tablero=new Tablero;
    expect(tablero.prenderLinea()).toBe("Linea Encendida");

})
    


