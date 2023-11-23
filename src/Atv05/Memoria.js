import './Memoria.css';
import { useState, useEffect } from "react";
import embaralharImagem from "./embaralharImagem";

export default function Memoria() {
    
    const [ArrayImagem, setArrayImagem] = useState([]);
    const [ArrayPecaSelecionada, setArrayPecaSelecionada] = useState([]);
    const [QtdSelecionado, setQtdSelecionado] = useState(0);

    const addArrayPecaSelecionada = (id, src) => {
        const Array = [...ArrayPecaSelecionada, id, src];
    
        setArrayPecaSelecionada(Array);
      };

    useEffect(() => {

        const arrayImagensEmbaralhadas = embaralharImagem();
        setArrayImagem(arrayImagensEmbaralhadas);
        
    }, []);
    
    useEffect(() => {

        if(QtdSelecionado === 2) {
            setTimeout(() => {

                if(ArrayPecaSelecionada[1] != ArrayPecaSelecionada[3]) {
                    document.getElementById(ArrayPecaSelecionada[0]).style.display = "none";
                    document.getElementById(ArrayPecaSelecionada[2]).style.display = "none";
                }

            }, 500);

            setQtdSelecionado(0);
            setArrayPecaSelecionada([]);
        }
        
    }, [QtdSelecionado]);

    const virarPeca = (id) => {
        document.getElementById(id).style.display = "inline";

        addArrayPecaSelecionada(id, document.getElementById(id).src);
        setQtdSelecionado(QtdSelecionado + 1);
    };
    
    return(
        <div id="principal" className="container-fluid">
            <div id="caixa" className="mt-2 bg-dark mx-auto p-4" style={{ width: 670 + "px"}}>
                <div id="linha1" className="row">
                    <h1 className="text-light">Jogo da memória</h1>
                </div>
                <div id="linha2" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(0)}} className="botao_memoria">
                        <img id="0" src={ArrayImagem[0]} style={{ display: "none"}} />
                    </button>
                    <button onClick={() => {virarPeca(1)}} className="botao_memoria">
                        <img id="1" src={ArrayImagem[1]} style={{ display: "none"}}/>
                    </button>
                </div>
                <div id="linha3" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(2)}} className="botao_memoria">
                        <img id="2" src={ArrayImagem[2]} style={{ display: "none"}}/>
                    </button>
                    <button onClick={() => {virarPeca(3)}} className="botao_memoria">
                        <img id="3" src={ArrayImagem[3]} style={{ display: "none"}}/>
                    </button>
                </div>
                <div id="linha4" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(4)}} className="botao_memoria">
                        <img id="4" src={ArrayImagem[4]} style={{ display: "none"}}/>
                    </button>
                    <button onClick={() => {virarPeca(5)}} className="botao_memoria">
                        <img id="5" src={ArrayImagem[5]} style={{ display: "none"}}/>
                    </button>
                </div>
            </div>
        </div>
    );
}
