const Tablero = require('../src/Tablero');


test("tablero Apagado",()=>{
    const tablero= new Tablero();
    expect(tablero.estado).toBe("Apagado");
})
test("tablero Encedido",()=>{
    const tablero=new Tablero();
    expect(tablero.getEstado.estado).toBe("Encendido");
})

