test("lampara Apagada",()=>{
    const lampara= new Lampara()
    expect(lampara.estado).toBe("Apagada");
})