import { Link } from "react-router-dom";
import Relogio from './Relogio';
import Letreiro from "./Letreiro";


function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <Letreiro />
            <Link to="/">Retornar para a página inicial</Link>
        </>
    );
}

export default Atv01;