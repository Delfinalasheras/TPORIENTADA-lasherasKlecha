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
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.prenderPosicion([1,2],[3,4]);
    expect(tablero.estado).toBe("cuadrado prendido");
})
test("Apagar Posicion",()=>{
    const tablero = new Tablero();
    tablero.armarTablero();
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.apagarPosicion([1,2],[3,2]);
    expect(tablero.estado).toBe("cuadrado apagado");
})
test("Cambiar Estado Posicion",()=>{
    tablero.armarTablero();
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.apagarPosicion([1,2],[1,2]);
    expect(tablero.estado).toBe("cuadrado cambiado");
})
// test("mostrar Tablero Encendido",()=>{
//     const tablero = new Tablero();
//     tablero.armarTablero();
//     tablero.prenderPosicion([0,0],[99,99]);
//     expect(tablero.imprimir()).toBe("tablero impreso");
// })

    


    


