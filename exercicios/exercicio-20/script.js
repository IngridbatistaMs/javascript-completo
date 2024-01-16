function podeEntrar(idade){
    if(idade >= 18){
        console.log("pode se matricular");
    }else{
        console.log("não pode se maticular");
    }
}

podeEntrar(16);
podeEntrar(25);
podeEntrar(30);
podeEntrar(17);