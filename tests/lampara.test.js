const Lampara= require('../src/Lampara');
test("lampara Apagada",()=>{
    const lampara= new Lampara()
    expect(lampara.estado).toBe("Apagada");
})