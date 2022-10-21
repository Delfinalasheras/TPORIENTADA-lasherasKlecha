test("Tijera contra tijera", ()=>{
    const tijera1 = new Tijera();
    const tijera2 = new Tijera();
    expect(tijera1.contra(tijera2)).toBe("Empate");

})