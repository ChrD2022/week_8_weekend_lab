import React from 'react';
import SpeciesItem from './SpeciesItem';

const SpeciesList = ({species}) => {

    const speciesItems = species.map((specie, index) => {
        return <SpeciesItem specie={specie} key={index}/>
    })

    return (
    <div>
        <ul className='list'>{speciesItems}</ul>
    </div>
    )
};

export default SpeciesList;