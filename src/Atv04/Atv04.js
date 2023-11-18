import { Link } from "react-router-dom";
import Calculadora from "./Calculadora";

function Atv04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <Calculadora />
            <Link to="/">Retornar para a página inicial</Link>
        </>
    );
}

export default Atv04;