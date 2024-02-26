const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\\d{1,3}/;

console.log(validarIP.test("127.0.0.1"));//true
console.log(validarIP.test("8.8.8.8"));//true
console.log(validarIP.test("192.168.0.62"));//true

console.log(validarIP.test("192.168.0"));//false
console.log(validarIP.test("192"));//false
console.log(validarIP.test("hbfyhu"));//false