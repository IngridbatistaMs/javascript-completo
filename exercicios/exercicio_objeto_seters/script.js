class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereco = new Endereco('rua da paz', 'varzea da matriz', 'aracati', 'ce');
console.log(endereco);

endereco.novaRua = 'rua rosendo chagas';
console.log(endereco);

endereco.novoBairro = 'sao francisco';
console.log(endereco);

endereco.novaCidade = 'morada nova';
console.log(endereco);

endereco.novoEstado = 'ce';
console.log(endereco);