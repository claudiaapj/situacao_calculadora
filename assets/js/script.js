let visor = ''
let valor1 = null
let valor2 = null
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''


const reset = function(){
    visor = ''
    labelVisor.innerHTML= visor 
}

const clickn7 = function(){
    visor = visor + '7';
    labelVisor.innerHTML= visor
}

const clickn8 = function(){
    visor = visor + '8'
    labelVisor.innerHTML= visor 
    
}

const clickn9 = function(){
    visor = visor + '9'
    labelVisor.innerHTML= visor     
}

const clickOpDiv = function(){
    operacao = 'divisao'   
    let numero = parseFloat(visor)
    valor1 = numero
}

const igual = function () {
    
    switch(operacao){
        case 'divisao':
            
        break
    }
}

