import { useEffect, useState } from "react";
import './Calculadora.css';

export default function Calculadora() {

    const [Display, setDisplay] = useState('0');

    const addDisplay = (valor) => {
        if (Display == '0'){
            setDisplay(valor);
        } else {
            setDisplay(Display + valor);
        }
    };
    
    const limpaDisplay = () => {setDisplay('0')};

    const mudaSinal = () => {
        let stringDisplay = Display;
        if (stringDisplay.startsWith('-')) {
            setDisplay(stringDisplay.substring(1));
        } else {
            setDisplay('-' + Display);
        }
    }

    const porcentagem = () => {
        let valor = parseFloat(Display);
        if (!isNaN(valor)) {
            setDisplay((valor / 100).toString());
        }
    }

    const calcular = () => {
        try {
            var resultado = eval(Display);
            setDisplay(resultado);
        } catch (error) {
            setDisplay('Error');
        }
    }
    
    return(
        <div id="principal" className="container-fluid">
            <div id="caixa" className="mt-2 bg-dark mx-auto p-4" style={{ width: 670 + "px"}}>
                <div id="linha1" className="row">
                    <input type="text" id="display" className="bg-dark text-white input_calculadora" value={Display}/>
                </div>
                <div id="linha2" className="row mx-auto mt-3 py-1">
                    <button id="AC" onClick={() => limpaDisplay()} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">AC</button>
                    <button id="+/-" onClick={() => mudaSinal()} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">+/-</button>
                    <button id="%" onClick={() => porcentagem()} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">%</button>
                    <button id="/" onClick={() => addDisplay('/')} className="btn btn-warning rounded-circle py-4 ms-5 btn-lg botao_calculadora">/</button>
                </div>
                <div id="linha3" className="row mx-auto mt-3 py-1">
                    <button id="7" onClick={() => addDisplay('7')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">7</button>
                    <button id="8" onClick={() => addDisplay('8')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">8</button>
                    <button id="9" onClick={() => addDisplay('9')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">9</button>
                    <button id="x" onClick={() => addDisplay('*')} className="btn btn-warning rounded-circle py-4 ms-5 btn-lg botao_calculadora">x</button>
                </div>
                <div id="linha4" className="row mx-auto mt-3 py-1">
                    <button id="4" onClick={() => addDisplay('4')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">4</button>
                    <button id="5" onClick={() => addDisplay('5')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">5</button>
                    <button id="6" onClick={() => addDisplay('6')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">6</button>
                    <button id="-" onClick={() => addDisplay('-')} className="btn btn-warning rounded-circle py-4 ms-5 btn-lg botao_calculadora">-</button>
                </div>
                <div id="linha5" className="row mx-auto mt-3 py-1">
                    <button id="1" onClick={() => addDisplay('1')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">1</button>
                    <button id="2" onClick={() => addDisplay('2')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">2</button>
                    <button id="3" onClick={() => addDisplay('3')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">3</button>
                    <button id="+" onClick={() => addDisplay('+')} className="btn btn-warning rounded-circle py-4 ms-5 btn-lg botao_calculadora">+</button>
                </div>
                <div id="linha6" className="row mx-auto mt-3 py-1">
                    <button id="0" onClick={() => addDisplay('0')} className="btn btn-secondary rounded-pill py-4 ms-5 btn-lg" style={{ width: 250 + "px"}}>0</button>
                    <button id="." onClick={() => addDisplay('.')} className="btn btn-secondary rounded-circle py-4 ms-5 btn-lg botao_calculadora">.</button>
                    <button id="=" onClick={() => calcular()} className="btn btn-warning rounded-circle py-4 ms-5 btn-lg botao_calculadora">=</button>
                </div>
            </div>
        </div>
    );
}