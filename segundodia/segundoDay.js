//modal infos

let modal = document.querySelector('.modal-app')
let nome = document.getElementById('nome');
let idade = document.querySelector('#idade');
let salva = document.getElementById('save');
let genero = document.getElementsByName('sexo');
let tec = document.getElementsByName('tec');
let text = document.getElementsByName('marcar');
let alerta = document.getElementById('alerta')
//docs app
let foto = document.getElementById('user-foto');
let userInfo = document.getElementById('user-info');
let userBox = document.getElementById('user-box')
let user = document.querySelector('.user-container');

let infos = document.querySelector('.user-info');
let printNome = document.getElementById('printNome');
let printIdade = document.getElementById('printIdade');
let printGenero = document.getElementById('printGenero');
let printTec = document.getElementById('printTec');
let printText = document.getElementById('printText');


function inicio(){
  setTimeout(abremodal, 500);
}


function abremodal() {
  //funcionalidade roupagem modal/app
  modal.classList.remove('modal-app-aberto')
  user.classList.add('user-container-fechado')
  
  foto.classList.add('foto-fecha')

}



function save() {

  if (nome.value.length == 0 || 
    idade.value.length == 0 ) { 

    alerta.style.display = 'block'
    } else {
    modal.classList.add('modal-app-aberto')
    user.classList.remove('user-container-fechado')
    
    foto.classList.remove('foto-fecha')

    printNome.innerHTML = `<strong>Nome: </strong>${nome.value}`
    printIdade.innerHTML = `<strong>Idade: </strong>${idade.value}`

    if (genero[0].checked) {
      printGenero.innerHTML = `<strong>Genero: </strong>Masculino`
      foto.classList.add('foto-masc')
      userBox.classList.add('blue')

    } else if (genero[1].checked) {
      printGenero.innerHTML = `<strong>Genero: </strong>feminino`
      foto.classList.add('foto-fem')
      userBox.classList.add('rosa')
    }
    if (tec[0].checked) {
      printTec.innerHTML = `<strong>Linguagem:</strong> JavaScript`
    } else if (tec[1].checked) {
      printTec.innerHTML = `<strong>Linguagem:</strong> PHP`
    } else if (tec[2].checked) {
      printTec.innerHTML = `<strong>Linguagem:</strong> Java`
    }

    if (text[0].checked) {
      printText.innerHTML = 'Isso ai continue estudando e se tornara um expecialista'
    } else if (text[1].checked) {
      printText.innerHTML = 'Não desista, todo esforço e valido e construtivo'

    }
  }

}



