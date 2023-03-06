import React from 'react'
import StarshipItem from './StarshipItem'

const StarshipList = ({starships}) => {
    
    const starshipItems = starships.map((starship, index) => {
        return <StarshipItem starship={starship} key={index}/>
    })

    return (
    <div>
        <ul className='list'>{starshipItems}</ul>
    </div>
    )
}

export default StarshipList