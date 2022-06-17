// elementos html
const printDev = document.getElementById('printDev');
const printArea = document.getElementById('printArea');
const printTec = document.getElementById('printTec');
const printMais = document.getElementById('printMais');
const print = document.querySelector('.print')
const Area = document.getElementsByName('area');
const boxArea = document.querySelector('.secDev');
const tec = document.querySelector('.tec');
const mais = document.querySelector('.mais');

const tecFront = document.getElementsByName('tecFront');
const tecBack = document.getElementsByName('tecBack');
const front = document.querySelector('.opacityFront');
const back = document.querySelector('.opacityBack');
const prof = document.getElementsByName('prof');
const future = document.querySelector('.future');
const addtec = document.getElementById('mais-tec');



function Dev() {
  tec.classList.remove('tec')
  if (Area[0].checked) {
    front.classList.remove('opacityFront')
    boxArea.classList.add('suma')
    printDev.innerHTML = `<p><strong>Area de desenvolvimento:</strong>desenvolvedor Frontend</p>`
  } else if (Area[1].checked) {
    back.classList.remove('opacityBack');
    boxArea.classList.add('suma');
    printDev.innerHTML = `<p><strong>Area de desenvolvimento:</strong>desenvolvedor Backend</p><b>`
  }

}

function tecnologia() {
  future.classList.remove('future');
  tec.classList.add('suma')
  if (tecFront[0].checked) {

    printArea.innerHTML = `<p><strong>tecnologia de estudo:</strong>React </p>`
  } else if (tecFront[1].checked) {

    printArea.innerHTML = `<p><strong>tecnologia de estudo:</strong>Vue </p>`
  }

  if (tecBack[0].checked) {

    printArea.innerHTML = `<p><strong>tecnologia de estudo:</strong>Java </p>`
  } else if (tecBack[1].checked) {

    printArea.innerHTML = `<p><strong>tecnologia de estudo:</strong>C# </p>`
  }

}

function futuro() {
  mais.classList.remove('mais')
  print.classList.remove('suma')
  future.classList.add('suma');
  if (prof[0].checked) {
    printTec.innerHTML = `<p><strong>Area desejada de atuação:</strong>Expecialista</p>`
  } else if (prof[1].checked) {
    printTec.innerHTML = `<p><strong>Area desejada de atuação:</strong>FullStack</p>`
  }

}

function incluir() {
  
  const div = document.createElement('div');
  const p = document.createElement('opition');
  const texto = document.createTextNode(addtec.value);


  printMais.appendChild(div.appendChild(p.appendChild(texto)))
}