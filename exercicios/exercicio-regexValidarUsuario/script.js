let validarNomeDeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeDeUsuario.test("ingrid123"));//true
console.log(validarNomeDeUsuario.test("ingrid"));//true
console.log(validarNomeDeUsuario.test("192.168.0.62"));//true

console.log(validarNomeDeUsuario.test("as"));//false
console.log(validarNomeDeUsuario.test("1111111111111111111"));//false
console.log(validarNomeDeUsuario.test("zzzzzzzzzzzzzzzzzzz"));//false