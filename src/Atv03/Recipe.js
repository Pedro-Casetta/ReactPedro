function Receita({ drinkers }) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea an {0.5 * drinkers} spoons of spice</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste</li>
        </ol>
    );
}

export default function Recipe() {
    return (
        <section>
            <h1>Spice Chai Recipe</h1>
            <h2>For two</h2>
            <Receita drinkers={2} />
            <h2>For a gathering</h2>
            <Receita drinkers={4} />
        </section>
    );
}