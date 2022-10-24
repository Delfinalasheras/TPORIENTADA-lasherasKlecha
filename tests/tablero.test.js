const Lampara = require('../src/Lampara');
const Tablero = require('../src/Tablero');

var tablero;
beforeEach(() => {
    tablero = new Tablero();
});

test("tablero Apagado",()=>{
    expect(tablero.estado).toBe("Apagado");
})
test("tablero Encedido",()=>{
    tablero.armarTablero();
    tablero.prenderCompleto();
    expect(tablero.estado).toBe("Tablero Encendido");
})
test("prender Lampara",()=>{
    tablero.linea[0]=new Lampara();
    tablero.linea[0].encender();
    expect(tablero.linea[0].intensidad).toBe(1);
})
test("prender linea",()=>{
    expect(tablero.prenderLinea()).toBe("Linea Encendida");
})
test("prender Posicion",()=>{
    tablero.armarTablero();
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.prenderPosicion([1,2],[3,4]);
    expect(tablero.estado).toBe("cuadrado prendido");
})
test("Apagar Posicion",()=>{
    tablero.armarTablero();
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.apagarPosicion([1,2],[3,2]);
    expect(tablero.estado).toBe("cuadrado apagado");
})
test("Cambiar Estado Posicion",()=>{
    tablero.armarTablero();
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.apagarPosicion([1,2],[1,2]);
    tablero.cambiarEstados([1,2],[3,2]);
    expect(tablero.estado).toBe("cuadrado cambiado");
})
test("Luces Prendidas",()=>{
    tablero.armarTablero();
    tablero.prenderPosicion([1,2],[3,2]);
    tablero.apagarPosicion([2,2],[2,2]);
    tablero.cambiarEstados([1,2],[3,2]);
    expect(tablero.contarPrendidas()).toBe(3);

})
test("Posición negativa",()=>{
    tablero.armarTablero();
    expect(()=>{tablero.verificarPosicion([-1,2],[3,2])}).toThrow(new Error("La posición debe ser positiva"));
})

    


    


