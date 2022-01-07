import * as React from 'react'

const ArticleLayout = ({ header, description }) => {
    return (
        <div>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ArticleLayout