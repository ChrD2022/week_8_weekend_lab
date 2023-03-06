import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterList = ({characters}) => {

    const characterItems = characters.map((character, index) => {
        return <CharacterItem character={character} key={index}/>
    })

    return (
    <div>
        <ul className='list'>{characterItems}</ul>
    </div>
    )
};

export default CharacterList;