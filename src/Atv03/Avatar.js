import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    );
}
