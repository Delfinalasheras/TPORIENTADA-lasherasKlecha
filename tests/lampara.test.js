const Lampara= require('../src/Lampara');
test("lampara Apagada",()=>{
    const lampara= new Lampara();
    expect(lampara.estado).toBe("Apagada");
})
test("lampara Encedida",()=>{
    const lampara= new Lampara();
    lampara.prender();
    expect(lampara.getEstado()).toBe("Encendida");
})
    
