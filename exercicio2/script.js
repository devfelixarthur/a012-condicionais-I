let nome = prompt('Qual o seu nome?')

let idade = +prompt('Quantos anos você tem ?')
if(idade >=18){
    console.log(`${nome} é maior de idade.`)
}else{
    console.log(`${nome} é menor de idade.`)
}

let ensinoMedio = prompt ('Você terminou o ensino médio?')
if(ensinoMedio === 'sim'){
    ensinoMedio = true
}else{
    ensinoMedio = false
}

let cursaFaculdade = prompt ('Você está cursando alguma graduação?')
if( cursaFaculdade === 'sim'){
    cursaFaculdade = true
}else{
    cursaFaculdade = false
}

console.log (`${nome} terminou o ensino médio? ${ensinoMedio}.`)
console.log (`${nome} está cursando alguma graduação? ${cursaFaculdade}.`)