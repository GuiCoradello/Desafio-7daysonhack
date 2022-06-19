const botao = document.getElementById('chute')
const resultado = document.getElementById('resut')
const tenta = document.getElementById('tenta')


const numeroPensado = Math.round(Math.random() * 10 )


let tentativas = 2

function checar() {
 if(botao.value < 0 || botao.value > 10 ){
  tenta.innerHTML  = 'apenas numeros entre 1 ao 10'
 }else {
 if(botao.value == numeroPensado){
 resultado.innerHTML = numeroPensado
 tenta.innerHTML = 'Voçê Acertou'
 } else if(tentativas < 1){
resultado.innerHTML = numeroPensado
tenta.innerHTML = 'Voçê Perdeu'
} else {
tenta.innerHTML = `Voçê Errou, Restão ${tentativas} Tentativas`
tentativas--
}
 }
}



 
