export function Profile() {
    return (
        <img
            src="https://imgs.search.brave.com/i_HL3xTvU-6j--ZkUO4JdEhTfDeD6PT6JEyiMyL2mrU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzdl/LzRiL2FiN2U0YmU3/ZGZmYmI3ZGYwMzA2/NjJiMjZlOWMwZjUx/LmpwZw"
            alt="Homer Simpson"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Simpson</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}