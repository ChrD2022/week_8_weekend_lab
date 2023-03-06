import React from 'react'

const StarshipItem = ({starship}) => {
    return (
    <div>
        <li>{starship.model}</li>
    </div>
    )
}

export default StarshipItem