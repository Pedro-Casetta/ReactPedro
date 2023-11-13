import Avatar from './Avatar.js';

function Card({ children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile1() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name:'Katsuko Saruhashi',
                    imageId: 'Yfe0qp2'
                }}
            />
        </Card>
    )
}