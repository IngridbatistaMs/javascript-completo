const validarMarca = /Marca: (adidas|nike|asics|olympikus)/;

console.log(validarMarca.test("Marca: adidas"));//true
console.log(validarMarca.test("Marca: test"));//false
console.log(validarMarca.test("Marca: "));//false
console.log(validarMarca.test("nike"));//false
console.log(validarMarca.test("589"));//false