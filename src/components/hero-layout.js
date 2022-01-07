import * as React from 'react'

const HeroLayout = ({ title, sentence }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{sentence}</p>
        </div>
    )
}

export default HeroLayout