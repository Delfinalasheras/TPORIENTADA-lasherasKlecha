const Lampara = require('../src/Lampara');
const Tablero = require('../src/Tablero');


test("tablero Apagado",()=>{
    const tablero = new Tablero();
    expect(tablero.estado).toBe("Apagado");
})
test("tablero Encedido",()=>{
    const tablero = new Tablero();
    tablero.armarTablero();
    tablero.prenderCompleto();
    expect(tablero.estado).toBe("Tablero Encendido");
})
test("prender Lampara",()=>{
    const tablero = new Tablero();
    tablero.linea[0]=new Lampara();
    tablero.linea[0].prender();
    expect(tablero.linea[0].getEstado()).toBe("Encendida");
})
test("prender linea",()=>{
    const tablero = new Tablero();
    expect(tablero.prenderLinea()).toBe("Linea Encendida");

})
test("prender Posicion",()=>{
    const tablero = new Tablero();
    tablero.armarTablero();
    tablero.prenderPosicion([0,0],[2,2]);
    expect(tablero.estado).toBe("cuadrado prendido");
})

    


