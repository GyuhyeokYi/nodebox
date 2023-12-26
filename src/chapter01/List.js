import { people } from "./data";
import { getIamgeUrl } from "./util";

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist')
    const listItems = chemists.map(person =>
        <li key={person.id}>
            <img
                className="avatar"
                src={getIamgeUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
            <p>
                {self.crypto.randomUUID()}
            </p>
        </li>
        )
    
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    )
}