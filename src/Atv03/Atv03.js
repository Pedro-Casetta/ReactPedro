import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { Profile } from "./Gallery"; 
import TodoList from "./TodoList";
import Profile1 from "./Profile1";
import PackingList from "./PackingList";
import List from "./List";
import Recipe from "./Recipe";
import TeaGathering from "./TeaGathering";

function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <Gallery />
            <Profile />
            <TodoList />
            <Profile1 />
            <PackingList />
            <List />
            <Recipe />
            <TeaGathering />
            <br /><Link to="/">Retornar para a página inicial</Link>
        </>
    );
}

export default Atv03;