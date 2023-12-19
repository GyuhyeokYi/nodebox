import Profile from "./Profile"
import ShoppingList from "./ShoppingList"
import { useState } from 'react'

function MyButton() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>
        Clicked {count} times
        </button>
    )
}

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

function AboutPage() {
    return (
        <>
        <h1>About</h1>
        <p>Hello thre.<br />How do you do?</p>
        </>
    )
}

function Avata() {
    return (
        <img 
            className="avatar"
            src={user.imageUrl}
        />
    )
}

export default function MyApp() {
    return (
        <>
            <h1>Welcome to my app</h1>
            <MyButton />
            <MyButton />
            <AboutPage />
            <Avata />
            <Profile />
            <ShoppingList />
        </>
    )
}