export default function Button() {
    function handleClick() {
        alert('You clicked me!')
    }
    return (
        <>
            <button onClick={handleClick}>
                I don't do anything
            </button>
            {/* <button onClick={alert('Render clicked me!')}>
                Render fire event
            </button> */}
            <button onClick={() => alert('Inline clicked me!')}>
                Inline click button
            </button>
        </>
    )
}