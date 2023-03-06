import React from 'react';
import PlanetItem from './PlanetItem';

const PlanetList = ({planets}) => {

    const planetItems = planets.map((planet, index) => {
        return <PlanetItem planet={planet} key={index}/>
    })
    

    return (
    <div>
        <ul className='list'>{planetItems}</ul>
    </div>
    )
};

export default PlanetList;