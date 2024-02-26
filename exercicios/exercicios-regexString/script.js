const validarId = /\d+ID\b/;

console.log(validarId.test("3514589ID"));//true
console.log(validarId.test("3514589"));//false
console.log(validarId.test("test"));//false
console.log(validarId.test("testID"));//false
console.log(validarId.test("ID"));//false
console.log(validarId.test("589ID"));//true