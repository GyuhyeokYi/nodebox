import { sculptureList } from './data'
import { useState, useEffect } from 'react'

export default function Gallery({name}) {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    let hasPrev = index > 0
    let hasNext = index < sculptureList.length - 1

    useEffect(() => {
        console.log(`${name} index`, index)
    }, [index])

    function handleNextClick() {
        // setIndex(index < sculptureList.length - 1 ? index + 1 : index)
        setIndex(index + 1)
    }

    function handlePreviousClick() {
        // setIndex(index > 0 ? index - 1 : index)
        setIndex(index - 1)
    }

    function handleMoreClick() {
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index]

    return (
        <section className='Gallery'>
            <button onClick={handlePreviousClick} disabled={!hasPrev}>Previous</button>
            <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist}
            </h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore ? <p>{sculpture.description}</p> : <p></p>}
            <img src={sculpture.url} alt={sculpture.alt}/>
        </section>
    )
}