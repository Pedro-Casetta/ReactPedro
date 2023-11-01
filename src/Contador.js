import { useState, useEffect } from "react";


export default function Contador() {
    const [TotalHomem, setTotalHomem] = useState(0);
    const [TotalMulher, setTotalMulher] = useState(0);
    const [Total, setTotal] = useState(TotalHomem + TotalMulher);

    useEffect(() => {
        setTotal(TotalHomem + TotalMulher);
      }, [TotalHomem, TotalMulher]);

    const maisHomem = () => {setTotalHomem(TotalHomem + 1)};
    const menosHomem = () => {setTotalHomem(TotalHomem - 1)};

    const maisMulher = () => {setTotalMulher(TotalMulher + 1)};
    const menosMulher = () => {setTotalMulher(TotalMulher - 1)};

    const zerar = () => {
        setTotal(0);
        setTotalHomem(0);
        setTotalMulher(0);
    };

    return(
        <>
        <div id="principal" class="container">
            <div id="caixa" class="w-50 h-50 border border-black border-3 mx-auto mt-5 p-3">
                <div id="linha1" class="row ps-1">
                    <div id="div_total" class="col-10 text-center">
                        <h2 class="ms-5 ps-5">Total</h2>
                    </div>
                    <div id="div_reset" class="col-2">
                        <a id="link_reset" href="#" onClick={zerar}>
                            <img src="/imagens/arrow-clockwise.svg" class="img-fluid" width="50" />
                        </a>
                    </div>
                </div>
                <div id="linha2" class="row">
                    <div id="total" class="border border-black border-2 rounded w-25 mx-auto text-center h4">{Total}</div>
                </div>
                <div id="linha3" class="row pt-5 text-center">
                    <div id="div_icone_masculino" class="col-6">
                        <img src="/imagens/icone_masculino.webp" class="mx-auto img-fluid w-75" />
                    </div>
                    <div id="div_icone_feminino" class="col-6">
                        <img src="/imagens/icone_feminino.webp" class="mx-auto img-fluid w-75" />
                    </div>
                </div>
                <div id="linha4" class="row mt-3">
                    <div id="div_botoes_masculino" class="col-6 text-center">
                        <a id="link_mais_homem" href="#" onClick={maisHomem}>
                            <img id="botao_mais_homem" src="/imagens/plus-circle.svg" width="60" />
                        </a>
                        <a id="link_menos_homem" href="#" onClick={menosHomem} class="ms-4">
                            <img id="botao_menos_homem" src="/imagens/dash-circle.svg" width="40" />
                        </a>
                    </div>
                    <div id="div_botoes_feminino" class="col-6 text-center">
                        <a id="link_mais_mulher" href="#" onClick={maisMulher}>
                            <img id="botao_mais_mulher" src="/imagens/plus-circle.svg" width="60" />
                        </a>
                        <a id="link_menos_mulher" href="#" onClick={menosMulher} class="ms-4">
                            <img id="botao_menos_mulher" src="/imagens/dash-circle.svg" width="40" />
                        </a>
                    </div>
                </div>
                <div id="linha5" class="row mt-3">
                    <div id="div_total_homens" class="col-6">
                        <h4 class="text-center">Homens</h4>
                        <div id="qtd_homens" class="border border-black rounded border-2 w-50 mx-auto text-center h4">{TotalHomem}</div>
                    </div>
                    <div id="div_total_mulheres" class="col-6">
                        <h4 class="text-center">Mulheres</h4>
                        <div id="qtd_mulheres" class="border border-black rounded border-2 w-50 mx-auto text-center h4">{TotalMulher}</div>
                    </div>
                </div>
            </div>
        </div>
        <a href="index.html">Voltar</a>
        </>
    );
}