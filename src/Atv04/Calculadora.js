import { useEffect, useState } from "react";
import './Calculadora.css';

export default function Calculadora() {

    const [Display, setDisplay] = useState('0');

    const addDisplay = (valor) => {setDisplay(Display + valor);};
    
    const limpaDisplay = () => {
        document.getElementById('display').value = '';
    }

    function MudaSinal() {
        var display = document.getElementById('display');
        if (display.value.startsWith('-')) {
            display.value = display.value.substring(1);
        } else {
            display.value = '-' + display.value;
        }
    }

    function Porcentagem() {
        var display = document.getElementById('display');
        var valor = parseFloat(display.value);

        if (!isNaN(valor)) {
            display.value = (valor / 100).toString();
        }
    }

    function Calcular() {
        try {
            var equacao = document.getElementById('display').value;
            var resultado = eval(equacao);
            document.getElementById('display').value = resultado;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
    
    return(
        <div id="principal" className="container-fluid">
            <div id="caixa" className="mt-2 bg-dark mx-auto p-4" style={{ width: 670 + "px"}}>
                <div id="linha1" className="row">
                    <div id="display" className="bg-dark text-white input_calculadora">{Display}</div>
                </div>
                <div id="linha2" className="row mx-auto mt-3 py-1">
                    <button id="AC" onClick="LimpaDisplay()" className="btn btn-light rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>AC</button>
                    <button id="+/-" onClick="MudaSinal()" className="btn btn-light rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>+/-</button>
                    <button id="%" onClick="Porcentagem()" className="btn btn-light rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>%</button>
                    <button id="/" onClick={ () => addDisplay('/')} className="btn btn-warning rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>/</button>
                </div>
                <div id="linha3" className="row mx-auto mt-3 py-1">
                    <button id="7" onClick="AddDisplay('7')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>7</button>
                    <button id="8" onClick="AddDisplay('8')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>8</button>
                    <button id="9" onClick="AddDisplay('9')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>9</button>
                    <button id="x" onClick="AddDisplay('*')" className="btn btn-warning rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>x</button>
                </div>
                <div id="linha4" className="row mx-auto mt-3 py-1">
                    <button id="4" onClick="AddDisplay('4')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>4</button>
                    <button id="5" onClick="AddDisplay('5')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>5</button>
                    <button id="6" onClick="AddDisplay('6')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>6</button>
                    <button id="-" onClick="AddDisplay('-')" className="btn btn-warning rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>-</button>
                </div>
                <div id="linha5" className="row mx-auto mt-3 py-1">
                    <button id="1" onClick="AddDisplay('1')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>1</button>
                    <button id="2" onClick="AddDisplay('2')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>2</button>
                    <button id="3" onClick="AddDisplay('3')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>3</button>
                    <button id="+" onClick="AddDisplay('+')" className="btn btn-warning rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>+</button>
                </div>
                <div id="linha6" className="row mx-auto mt-3 py-1">
                    <button id="0" onClick="AddDisplay('0')" className="btn btn-secondary rounded-pill py-4 ms-5 btn-lg" style={{ width: 250 + "px"}}>0</button>
                    <button id="." onClick="AddDisplay('.')" className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>.</button>
                    <button id="=" onClick="Calcular()" className="btn btn-warning rounded-circle py-4 ms-5 btn-lg" style={{ width: 100 + "px"}}>=</button>
                </div>
            </div>
        </div>
    );
}