import React from 'react'

const GrifGridItem = ( { id, title, url}) => {

    return (
        <div className="card animate__animated animate__rubberBand animate__delay-.5s" >
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GrifGridItem

