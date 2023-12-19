const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink',
        borderRadius: '8px',
        padding: '5px 10px',
        width: 'fit-content'
    }
}

export default function TodoList2() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt={person.name}
            />
            <ul>
                <li>Impove the videophone</li>
                <li>Prepage areonautics lectures</li>
                <li>Work on th alcohol - fuelled engine</li>
            </ul>
        </div>
    )
}