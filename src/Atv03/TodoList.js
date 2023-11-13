const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'skyblue'
    }
}


export default function TodoList() {
    return (
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
            className="avatar"
            src="https://imgs.search.brave.com/wy-79gLLhsu5xXAOQaOrWIcgvPIGXgWZhmmJhPSgA-Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I3LzI1/LzZjL2I3MjU2Y2Jm/MmY1YzA1MWFhMTZj/MWQ5MWQ5M2NlY2Jm/LmpwZw"
            alt="Gregorio Y. Zara"
        />
        <ul>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fuelled engine</li>
        </ul>
        </div>
    );
}