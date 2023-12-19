import { useState } from 'react';

export default function MyApp() {
    const [count, setConut] = useState(0)

    function handleClick() {
        setConut(count + 1)
        if (count == 3) {
            alert(count)
        }
    }
    
    return (
        <>
            <h1>Counters that update together</h1>
            <div>
                <MyButton count={count} onClick={handleClick} />
            </div>
            <div>
                <MyButton count={count} onClick={handleClick} />
            </div>
            <div>
                <MyButton count={count} onClick={handleClick} />
            </div>
        </>
    )

    function MyButton({ count, onClick }) {
        return (
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        )
    }
}