let guest = 0

function Cup() {
    guest = guest + 1
    return (
        <h2>Tea cup for guest #{guest}</h2>
    )
}

function Cup2({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaSet() {
    return (
        <>
            <div>
                <Cup />
                {/* <Cup /> */}
                {/* <Cup /> */}
            </div>
            <div>
                <Cup2 guest={1} />
                <Cup2 guest={2} />
                <Cup2 guest={3} />
            </div>
        </>
    )
}