const { exportAllDeclaration } = require("@babel/types");
const { default: test } = require("node:test");

test("probar",()=>{
    expect("hola").toBe("hola");
}
)