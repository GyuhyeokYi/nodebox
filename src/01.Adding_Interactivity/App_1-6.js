export default function Toolbar() {
    return (
        <div className="Toolbar" onClick={() => { alert('You clicked on the toolbar!')}}>
            <button onClick={() => alert('Playing!')}>Play Moive</button>
            <button onClick={() => alert('Uploading!')}>Upload Image</button>
        </div>
    )
}