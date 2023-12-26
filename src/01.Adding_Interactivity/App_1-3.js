function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function PlayButton({ movieName }) {
    function hadlePlayClick() {
        alert(`Playing ${movieName}!`)
    }

    return (
        <Button onClick={hadlePlayClick}>
            Play "{movieName}"
        </Button>
    )
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    )
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service"/>
            <UploadButton />
        </div>
    )
}