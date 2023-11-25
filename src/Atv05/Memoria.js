import { Link } from "react-router-dom";
import './Memoria.css';
import { useState, useEffect } from "react";
import embaralharImagem from "./embaralharImagem";

export default function Memoria() {
    
    const [ArrayImagem, setArrayImagem] = useState([]);
    const [ArrayPecaSelecionada, setArrayPecaSelecionada] = useState([]);
    const [QtdSelecionado, setQtdSelecionado] = useState(0);
    const [PecasDescobertas, setPecasDescobertas] = useState(0);
    const [ArrayPecasDescobertas, setArrayPecasDescobertas] = useState([]);

    useEffect(() => {

        const arrayImagensEmbaralhadas = embaralharImagem();
        setArrayImagem(arrayImagensEmbaralhadas);
        
    }, []);

    const addArrayPecaSelecionada = (id, src) => {
        const Array = [...ArrayPecaSelecionada, id, src];
    
        setArrayPecaSelecionada(Array);
    };

    useEffect(() => {
        if(PecasDescobertas === 9) {
            document.getElementById('parabens').style.display = "inline";
        }
    }, [PecasDescobertas]);

    const fechar = () => {
        document.getElementById('parabens').style.display = "none";
    };

    const recarregar = () => {
        window.location.reload();
    };
    
    useEffect(() => {

        if(QtdSelecionado === 2) {
            setTimeout(() => {

                if(ArrayPecaSelecionada[1] != ArrayPecaSelecionada[3] && !ArrayPecasDescobertas.includes(ArrayPecaSelecionada[0]) && !ArrayPecasDescobertas.includes(ArrayPecaSelecionada[2])) {

                    document.getElementById(ArrayPecaSelecionada[0]).style.display = "none";
                    document.getElementById(ArrayPecaSelecionada[2]).style.display = "none";

                } else {

                    setPecasDescobertas(PecasDescobertas + 1);
                    const Array = [...ArrayPecasDescobertas, ArrayPecaSelecionada[0], ArrayPecaSelecionada[2]];
                    setArrayPecasDescobertas(Array);
                    
                }
            }, 500);

            setQtdSelecionado(0);
            setArrayPecaSelecionada([]);
        }
        
    }, [QtdSelecionado]);

    const virarPeca = (id) => {

        const elemento = document.getElementById(id);
    const estiloComputado = window.getComputedStyle(elemento);
    
        if(estiloComputado.display === "none") {
            elemento.style.display = "inline";

            addArrayPecaSelecionada(id, elemento.src);

            setQtdSelecionado(QtdSelecionado + 1);
        }
    };
    
    return(
        <div id="principal" className="container-fluid">
            <div id="caixa" className="mt-2 bg-dark p-2">
                <div id="linha1" className="row">
                    <h1 className="text-light text-center">Jogo da memória</h1>
                </div>
                <div id="linha2" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(0)}} className="botao_memoria">
                        <img id="0" src={ArrayImagem[0]} className="imagem_memoria" />
                    </button>
                    <button onClick={() => {virarPeca(1)}} className="botao_memoria">
                        <img id="1" src={ArrayImagem[1]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(2)}} className="botao_memoria">
                        <img id="2" src={ArrayImagem[2]} className="imagem_memoria" />
                    </button>
                    <button onClick={() => {virarPeca(3)}} className="botao_memoria">
                        <img id="3" src={ArrayImagem[3]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(4)}} className="botao_memoria">
                        <img id="4" src={ArrayImagem[4]} className="imagem_memoria" />
                    </button>
                    <button onClick={() => {virarPeca(5)}} className="botao_memoria">
                        <img id="5" src={ArrayImagem[5]} className="imagem_memoria"/>
                    </button>
                </div>
                <div id="parabens" className="card parabens">
                <img src="/imagens/parabens.webp" className="card-img-top imagem_parabens" />
                <div className="card-body">
                    <h1 className="card-title text-center">Parabéns!</h1>
                    <p className="card-text text-center">Você concluiu o jogo da memória com sucesso! 🌟 Sua agilidade mental e habilidade de concentração são impressionantes. Continue jogando, aprendendo e se divertindo! 🎉👏</p>
                    <a href="#" onClick={fechar} className="btn btn-danger px-3 pb-2 fs-1 me-5">&times;</a>
                    <a href="#" onClick={recarregar} className="btn btn-success p-3 fs-4 ms-5">Jogar de novo</a>
                </div>
                </div>
                <div id="linha3" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(6)}} className="botao_memoria">
                        <img id="6" src={ArrayImagem[6]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(7)}} className="botao_memoria">
                        <img id="7" src={ArrayImagem[7]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(8)}} className="botao_memoria">
                        <img id="8" src={ArrayImagem[8]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(9)}} className="botao_memoria">
                        <img id="9" src={ArrayImagem[9]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(10)}} className="botao_memoria">
                        <img id="10" src={ArrayImagem[10]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(11)}} className="botao_memoria">
                        <img id="11" src={ArrayImagem[11]} className="imagem_memoria"/>
                    </button>
                </div>
                <div id="linha4" className="row mx-auto mt-3 py-1">
                    <button onClick={() => {virarPeca(12)}} className="botao_memoria">
                        <img id="12" src={ArrayImagem[12]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(13)}} className="botao_memoria">
                        <img id="13" src={ArrayImagem[13]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(14)}} className="botao_memoria">
                        <img id="14" src={ArrayImagem[14]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(15)}} className="botao_memoria">
                        <img id="15" src={ArrayImagem[15]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(16)}} className="botao_memoria">
                        <img id="16" src={ArrayImagem[16]} className="imagem_memoria"/>
                    </button>
                    <button onClick={() => {virarPeca(17)}} className="botao_memoria">
                        <img id="17" src={ArrayImagem[17]} className="imagem_memoria"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
