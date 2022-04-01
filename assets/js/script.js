let visor = ''
let valor1 = null
let valor2 = null
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''

// falta fazer o ponto e fazer funções para códigos repetidos
function mudaVisor(){
    labelVisor.innerHTML = visor
}

const reset = function(){
        visor = '0'
        valor1 = null
        valor2 = null
        resultado = ''
        mudaVisor()
}

function inicia(){
    if(visor == 0){
        visor = ''
        mudaVisor()
    }
}

const on = function(){
    if(visor !== null | valor1 !== null)
    visor = '0'
    valor1 = null;
    valor2 = null;
    resultado = ''
    mudaVisor()
}

const off = function(){
    visor = ''
    mudaVisor()
    valor1 = null;
    valor2 = null;
    resultado = ''
    //completar código não deixar ativar teclas
}

const clickn7 = function(){
    inicia()
    visor = visor + '7';
    mudaVisor()
}

const clickn8 = function(){
    inicia()
    visor = visor + '8'
    mudaVisor()
    
}

const clickn9 = function(){
    inicia()
    visor = visor + '9'
    mudaVisor()     
}

const clickn4 = function(){
    inicia()
    visor = visor + '4'
    mudaVisor()     
}

const clickn5 = function(){
    inicia()
    visor = visor + '5'
    mudaVisor()     
}

const clickn6 = function(){
    inicia()
    visor = visor + '6'
    mudaVisor()    
}


const clickn1 = function(){
    inicia()
    visor = visor + '1'
    mudaVisor()    
}

const clickn2 = function(){
    inicia()
    visor = visor + '2'
    mudaVisor()    
}

const clickn3 = function(){
    inicia()
    visor = visor + '3'
    mudaVisor()
}

const clickn0 = function(){
    inicia()
    visor = visor + '0'
    mudaVisor()
}

const clickOpSom = function(){
    operacao = 'soma' 
    if(valor1===null && visor !== '') {
        let numero = parseFloat(visor)
        valor1 = numero 
        console.log('valor1 ' + valor1);
    } 
    visor = ''
}

const clickOpSub = function(){
    operacao = 'subtracao' 
    if(valor1===null && visor !== '') {
        let numero = parseFloat(visor)
        valor1 = numero 
        console.log('valor1 ' + valor1);
    } 
    visor = ''
}

const clickOpMult = function(){
    operacao = 'multiplicacao' 
    if(valor1===null && visor !== '') {
        let numero = parseFloat(visor)
        valor1 = numero 
        console.log('valor1 ' + valor1);
    } 
    visor = ''
}

const clickOpDiv = function(){
    operacao = 'divisao' 
    if(valor1===null && visor !== '') {
        let numero = parseFloat(visor)
        valor1 = numero 
        console.log('valor1 ' + valor1);
    } 
    visor = ''
}

const conta = function (num1, num2) {
    
    switch(operacao){
        case 'soma':
            resultado = num1 + num2
            console.log('resultado ' + resultado);
        break

        case 'subtracao':
            resultado = num1 - num2
            console.log('resultado ' + resultado);
        break

        case 'multiplicacao':
            resultado = num1 * num2
            console.log('resultado ' + resultado);
        break

        case 'divisao':
            resultado = num1 / num2
            console.log('resultado ' + resultado);
        break
    }
}

const igual = function(){
    if(visor !== ''){
        let numero = parseFloat(visor)
        valor2 = numero
        console.log('valor2 ' + valor2);
        conta(valor1, valor2)
        labelVisor.innerHTML = resultado
        valor1 = resultado
        visor = ''
    } else if(valor2!== null && visor== ''){
        conta(valor1, valor2)
        labelVisor.innerHTML = resultado
        valor1 = resultado
        console.log('valor1 ' + valor1);
      
    }
}