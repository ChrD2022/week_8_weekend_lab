import React from 'react';

const CharacterItem = ({character}) => {
    return (
    <div>
        <li>{character.name}</li>
    </div>
    )
};

export default CharacterItem;