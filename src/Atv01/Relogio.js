import './Relogio.css';
import React, { useState, useEffect } from 'react';


function Relogio() {
  const [TempoAtual, setTempoAtual] = useState(new Date());

  useEffect(() => {
    const IdIntervalo = setInterval(() => {
      setTempoAtual(new Date())
    }, 1000);

    return () => {
      clearInterval(IdIntervalo);
    };
    
  }, []);

  return <h1>{TempoAtual.toLocaleTimeString()}</h1>
}

export default Relogio;
