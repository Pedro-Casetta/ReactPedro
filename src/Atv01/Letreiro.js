import './Letreiro.css';
import React, { useState, useEffect } from 'react';

function Letreiro() {
    const frase = "Conheça a Fatec";
    let tamanho = 0;
    const [PedacoFrase, setPedacoFrase] = useState(frase.substring(0,tamanho));
    
    useEffect(() => {
        const IdIntervalo = setInterval(() => {
            tamanho = tamanho + 1;
            setPedacoFrase(frase.substring(0,tamanho));

            if (tamanho === frase.length) {
                tamanho = 0;
            }

        }, 450);


        return () => {
            clearInterval(IdIntervalo);
        };

    }, []);

    return <h1>{PedacoFrase}</h1>
    }

export default Letreiro;
