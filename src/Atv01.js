import { Link } from "react-router-dom";
import ContaHora from './Relogio';
import PreencherLetreiro from "./Letreiro";


function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <ContaHora />
            <PreencherLetreiro />
            <Link to="/">Retornar para a página inicial</Link>
        </>
    );
}

export default Atv01;