class Conta{
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros
    }

    deposito(valor){
        this.saldoCC += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    tansferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    tansferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }
}

let conta = new Conta(1000, 5000, 1);
console.log(conta);

conta.saque(500);
console.log(conta);

conta.deposito(5000);
console.log(conta);

conta.tansferenciaCP(3000);
console.log(conta);