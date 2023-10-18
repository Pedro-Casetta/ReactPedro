import './Letreiro.css';

const frase = "Conheça a Fatec";
let tamanho = 0;

function PreencherLetreiro() {
    let pedaco_frase = frase.substring(0,tamanho);
    tamanho = tamanho + 0.5;
    if (tamanho > frase.length)
        tamanho = 1;
    return <h1>{pedaco_frase}</h1>
    }

export default PreencherLetreiro;