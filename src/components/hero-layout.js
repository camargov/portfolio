import * as React from 'react'

const HeroLayout = ({ title, sentence }) => {
    return (
        <div>
            <p>{sentence}</p>
            <h1>{title}</h1>
        </div>
    )
}

export default HeroLayout