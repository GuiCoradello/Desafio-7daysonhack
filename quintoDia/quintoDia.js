//cadastro cards Frutas
const f0001 = document.getElementById('f0001');
const f0002 = document.getElementById('f0002');
const f0003 = document.getElementById('f0003');
const f0004 = document.getElementById('f0004');
const f0005 = document.getElementById('f0005');

const frutas = [f0001, f0002, f0003, f0004, f0005]
//cadastro cards laticinios
const l0001 = document.getElementById('l0001');
const l0002 = document.getElementById('l0002');
const l0003 = document.getElementById('l0003');
const l0004 = document.getElementById('l0004');
const l0005 = document.getElementById('l0005');

const laticinios = [l0001, l0002, l0003, l0004, l0005];
//cadastro cards doces 
const d0001 = document.getElementById('d0001');
const d0002 = document.getElementById('d0002');
const d0003 = document.getElementById('d0003');
const d0004 = document.getElementById('d0004');
const d0005 = document.getElementById('d0005');

const doces = [d0001, d0002, d0003, d0004, d0005]
//cadastro cards Não pereciveis 
const nP0001 = document.getElementById('nP0001');
const nP0002 = document.getElementById('nP0002');
const nP0003 = document.getElementById('nP0003');
const nP0004 = document.getElementById('nP0004');
const nP0005 = document.getElementById('nP0005');

const naoPereciveis = [nP0001, nP0002, nP0003, nP0004, nP0005]
//todos os produtos do mercado
const produtos = [f0001, f0002, f0003, f0004, f0005,
  l0001, l0002, l0003, l0004, l0005,
  d0001, d0002, d0003, d0004, d0005,
  nP0001, nP0002, nP0003, nP0004, nP0005]
// funcoes de aplicacão

function Mostrafrutas() {

  for (let i = 0; i < produtos.length; i++) {
    frutas[i].classList.remove('suma')
    laticinios[i].classList.add('suma');
    doces[i].classList.add('suma');
    naoPereciveis[i].classList.add('suma');
  }

}

function MostraLaticinios() {
  for (let i = 0; i < produtos.length; i++) {
    laticinios[i].classList.remove('suma')
    frutas[i].classList.add('suma');
    doces[i].classList.add('suma');
    naoPereciveis[i].classList.add('suma');
  }
}

function MostraDoces() {
  for (let i = 0; i < produtos.length; i++) {
    doces[i].classList.remove('suma');
    laticinios[i].classList.add('suma');
    frutas[i].classList.add('suma');
    naoPereciveis[i].classList.add('suma');
  }
}

function MostraNaoPereciveis() {
  for (let i = 0; i < produtos.length; i++) {
    naoPereciveis[i].classList.remove('suma');
    laticinios[i].classList.add('suma');
    frutas[i].classList.add('suma');
    doces[i].classList.add('suma');
  }
}

function MostaTodosProdutos() {
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].classList.remove('suma')

  }

}





