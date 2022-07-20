//Adultos
// Carne - 400g por pessoa. +6horas = 650g
//Cerveja - 1200ml por pessoa. +6horas = 2000ml
//Refrigerante/água - 1000ml por pessoa. +6horas = 1500ml

//Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let inputbtn = document.getElementById("btn");
 
let resultado = document.getElementById("resultado");

inputbtn.addEventListener("click",calcular)

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    console.log(adultos)
    let criancas = inputCriancas.value;
    console.log(criancas)
    let duracao = inputDuracao.value;
    console.log(duracao)

    let qtdTotalCarne = carneporpessoa(duracao) * adultos + (carneporpessoa(duracao) /2 * criancas);
    let qtdTotalCerveja = cervejaporpessoa(duracao) * adultos;
    let qtdTotalBebidas = bebidasporpessoa(duracao) * adultos + (bebidasporpessoa(duracao) /2 * criancas);
    
    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja/1000}l de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas/1000}l de Bebidas</p>`
}


function carneporpessoa(duracao){
    if (duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaporpessoa(duracao){
    if (duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasporpessoa(duracao){
    if (duracao >= 6){
        return 1500;
    }else{
        return 400;
    }
}

