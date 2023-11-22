import { arrayImagem } from "./arrayImagem";

export default function embaralharImagem() {

    for (var i = arrayImagem.length - 1; i > 0; i--) { 
    
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = arrayImagem[i];
        arrayImagem[i] = arrayImagem[j];
        arrayImagem[j] = temp;
    }

    return arrayImagem;
}