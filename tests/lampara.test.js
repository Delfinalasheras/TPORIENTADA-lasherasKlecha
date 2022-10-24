const Lampara= require('../src/Lampara');
test("lampara Apagada",()=>{
    const lampara= new Lampara();
    expect(lampara.intensidad).toBe(0);
})
test("lampara Encedida",()=>{
    const lampara= new Lampara();
    lampara.encender();
    expect(lampara.intensidad).toBe(1);
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