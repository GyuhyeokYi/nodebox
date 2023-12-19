function Profile() {
    return (
        <img 
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="캐서린 존슨"
        />
    )
}


export default function Gallery() {
    return (
        <section>
            <h1>위대한 과학자들</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}