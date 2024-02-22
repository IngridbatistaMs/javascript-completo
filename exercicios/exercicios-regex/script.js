const validarMaiuscula = /[A-Z]/;

console.log(validarMaiuscula.test("testando"));

console.log(validarMaiuscula.test("Testando"));

console.log(validarMaiuscula.test("TESTANDO"));

console.log(validarMaiuscula.test("123"));