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
test("Cambiar intensidad",()=>{
    const lampara= new Lampara();
    expect(lampara.agregarIntensidad(1)).toBe(1);
})

test("Agregar intensidad",()=>{
    const lampara= new Lampara();
    lampara.agregarIntensidad(1);
    expect(lampara.agregarIntensidad(1)).toBe(2);

})

test("Agregar intensidad máxima",()=>{
    const lampara= new Lampara();
    lampara.agregarIntensidad(15);
    expect(lampara.agregarIntensidad(1)).toBe(10);

})