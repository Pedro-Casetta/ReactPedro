import { Link } from "react-router-dom";
import Contador from "./Contador";

function Atv02() {
    return (
        <>
            <h1>Atividade 02</h1>
            <Contador />
            <Link to="/">Retornar para a página inicial</Link>
        </>
    );
}

export default Atv02;
