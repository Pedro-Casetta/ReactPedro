import './Relogio.css';


function ContaHora(){
    let objeto_data_tempo_real = new Date();
    let hora_atual = objeto_data_tempo_real.getHours();
    let minuto_atual = objeto_data_tempo_real.getMinutes();
    let segundo_atual = objeto_data_tempo_real.getSeconds();
    let tempo_atual = hora_atual + ":" + minuto_atual + ":" + segundo_atual;
    return <h1>{tempo_atual}</h1>
}

export default ContaHora;
