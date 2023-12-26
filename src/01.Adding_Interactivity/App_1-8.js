export default function Signup() {
    return (
        <>
            <div>
                <form onSubmit={() => alert('Submitting!')}>
                    <h3>Default behavior</h3>
                    <input />
                    <button>Send</button>
                </form>
            </div>
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    alert('Submitting!')
                }}>
                    <h3>Preventing default behavior</h3>
                    <input />
                    <button>Send</button>
                </form>
            </div>
        </>
    )
}