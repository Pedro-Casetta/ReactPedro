import { useState, useEffect } from "react";
import embaralharImagem from "./embaralharImagem";

export default function Memoria() {
    
    const array_imagem = embaralharImagem();
    const array_peca_selecionada = [];
    const [QtdSelecionado, setQtdSelecionado] = useState(0);

    useEffect(() => {

        if(QtdSelecionado == 2) {
            setTimeout(() => {

                if(array_peca_selecionada[1] != array_peca_selecionada[3]) {
                    document.getElementById(array_peca_selecionada[0].style.display = "none");
                    document.getElementById(array_peca_selecionada[2].style.display = "none");
                }

            }, 100);

            setQtdSelecionado(0);
        }
        
    }, [QtdSelecionado]);

    const virarPeca = (id) => {
        document.getElementById(id).style.display = "inline";

        array_peca_selecionada.push(id);
        array_peca_selecionada.push(document.getElementById(id).src);
        setQtdSelecionado(QtdSelecionado + 1);
    };
    
    return(
        <div id="principal" className="container-fluid">
            <div id="caixa" className="mt-2 bg-dark mx-auto p-4" style={{ width: 670 + "px"}}>
                <div id="linha1" className="row">
                    <h1>Jogo da memória</h1>
                </div>
                <div id="linha2" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(0)}} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">
                        <img id="0" src={array_imagem[0]} style={{display: "none"}} />
                    </button>
                    <button onClick={() => {virarPeca(1)}} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">
                        <img id="1" src={array_imagem[1]} style={{display: "none"}}/>
                    </button>
                </div>
                <div id="linha3" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(2)}} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">
                        <img id="2" src={array_imagem[2]} style={{display: "none"}}/>
                    </button>
                    <button onClick={() => {virarPeca(3)}} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">
                        <img id="3" src={array_imagem[3]} style={{display: "none"}}/>
                    </button>
                </div>
                <div id="linha4" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(4)}} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">
                        <img id="4" src={array_imagem[4]} style={{display: "none"}}/>
                    </button>
                    <button onClick={() => {virarPeca(5)}} className="btn btn-light rounded-circle py-4 ms-5 btn-lg botao_calculadora">
                        <img id="5" src={array_imagem[5]} style={{display: "none"}}/>
                    </button>
                </div>
            </div>
        </div>
    );
}