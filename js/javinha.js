function resumo(){
    var nome = document.getElementById("nome").value;
    var placa = document.getElementById("placa").value;
    var carro = document.getElementById("carro").value;
    var dias = parseFloat(document.getElementById("dias").value);
    var diaria = parseFloat( document.getElementById("diaria").value);
    var preco = parseFloat(dias*diaria);
    var desc = parseFloat( preco-(preco*0.10));

    var resu = document.getElementById("res")
    
    if (preco > 150) {
        resu.innerHTML = `${nome} Placa: ${placa} Carro: ${carro} Vai ficar ${dias} dias Valor sem desconto: ${preco} Valor com desconto de 10%: ${desc}`
    } else {
         resu.innerHTML = `${nome} Placa: ${placa} Carro: ${carro} Vai ficar ${dias} dias Valor sem desconto: ${final}`
    }
}

function sair(){
    alert("obg, volte sempre!")
}