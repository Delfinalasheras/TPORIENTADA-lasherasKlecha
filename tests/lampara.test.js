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
    expect(lampara.encender()).toBe(1);
})
test("Agregar intensidad",()=>{
    const lampara= new Lampara();
    lampara.encender();
    expect(lampara.encender()).toBe(2);

})
test("Agregar intensidad máxima",()=>{
    const lampara= new Lampara();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    lampara.encender();
    expect(lampara.encender()).toBe(10);

})
test("Quitar intensidad",()=>{
    const lampara= new Lampara();
    lampara.encender();
    lampara.apagar();
    expect(lampara.apagar()).toBe(0);
})