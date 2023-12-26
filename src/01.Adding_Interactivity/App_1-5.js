export default function App() {
    return (
        <Toolbar
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    )
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button 
                onClick={onPlayMovie}
                style={{
                    color: 'blue'
                }}
            >
                Play Movie
                <div><strong>Hi</strong></div>
            </Button>
            <Button 
                onClick={onUploadImage}
                style={{
                    color: 'red'
                }}
            >
                Upload Image
            </Button>
        </div>
    )
}

function Button({ onClick, style, children }) {
    return (
        <button onClick={onClick} style={style}>
            {children}
        </button>
    )
}