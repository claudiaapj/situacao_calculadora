let visor = ''
let valor1 = null
let valor2 = null
let resultado = 0
let labelVisor = document.querySelector('#visor')
let operacao = ''
let usePonto = false
let onOff = false
let ativoNoturno = true


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
    onOff = false
    if(onOff ===false){
    visor = '0';
    valor1 = null;
    valor2 = null;
    resultado = ''
    mudaVisor()
    }
}

const off = function(){
    onOff = true
    if(onOff === true){
        visor = ''
        mudaVisor()
    }else{
        visor= '0'
    }
}


const clickn7 = function(){
    if(onOff ===false){
        inicia()
        visor = visor + '7';
        mudaVisor()
    }
}

const clickn8 = function(){
    if(onOff ===false){
    inicia()
    visor = visor + '8'
    mudaVisor()
    }
}

const clickn9 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '9';
        mudaVisor()
    }    
}

const clickn4 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '4';
        mudaVisor()
    }    
}

const clickn5 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '5';
        mudaVisor()
    }     
}

const clickn6 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '6';
        mudaVisor()
    }   
}


const clickn1 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '1';
        mudaVisor()
    }    
}

const clickn2 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '2';
        mudaVisor()
    }    
}

const clickn3 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '3';
        mudaVisor()
    }
}

const clickn0 = function(){
    if(onOff === false){
        inicia()
        visor = visor + '0';
        mudaVisor()
    }
}

const ponto = function(){
    if(onOff === false){
        if(!usePonto){
            visor = visor + '.'
        }
            usePonto= true
    }

}

function condicao(){
    if(valor1===null && visor !== '') {
        let numero = parseFloat(visor)
        valor1 = numero 
        console.log('valor1 ' + valor1);
    } 
    visor = ''
}


const clickOpSom = function(){
    if(onOff === false){
    operacao = 'soma' 
    condicao()
    }console.log('valor1 ' + valor1)
    console.log(onOff)
    console.log(operacao)
}

const clickOpSub = function(){
    operacao = 'subtracao' 
    condicao()
}

const clickOpMult = function(){
    operacao = 'multiplicacao' 
    condicao()
}

const clickOpDiv = function(){
    operacao = 'divisao' 
    condicao()
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

function modoNoturno() {
    let darkMode = document.documentElement.style;
        darkMode.setProperty('--color-white', '#252525');
        darkMode.setProperty('--color-black', '#fff');
        darkMode.setProperty('--color-light-pink', '#cf0f96');  
    } 

function lightMode(){
    let lightMode = document.documentElement.style;
    lightMode.setProperty('--color-white', '#fff');
    lightMode.setProperty('--color-black','#252525' );
    lightMode.setProperty('--color-light-pink', '#e4acd1');
} 

function alternaTela(){
    let button = document.querySelector('#darkMode');
    if(ativoNoturno){
        modoNoturno();
        button.innerHTML='Light Mode'
       
    }else{
        lightMode();
        button.innerHTML='Dark Mode'
    }
    ativoNoturno= !ativoNoturno     
}

