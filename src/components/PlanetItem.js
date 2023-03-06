import React from 'react';

const PlanetItem = ({planet}) => {
    return (
    <div>
        <li>{planet.name}</li>
    </div>
    )
};

export default PlanetItem;