const Tablero = require('../src/Tablero');


test("tablero Apagado",()=>{
    const tablero= new Tablero();
    expect(tablero.estado).toBe("Apagado");
})
test("tablero Encedido",()=>{
    const Tablero=new Tablero();
    expect(tablero.estado).toBe("Apagado");
})

