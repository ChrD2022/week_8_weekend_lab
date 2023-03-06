import React from 'react';
import '../App.css'

const FilmSelector = ({films, handleSelectChange}) => {

const handleChange = (event) => {
    const index = event.target.value;
    handleSelectChange(films[index]);
};

    const filmOptions = films.map((film, index) => {
        return <li className='film-item' key={index} value={index}>{film.title}</li>
    })

    const sortedOptions = filmOptions.sort((a, b) => a.episode_id - b.episode_id);

    return (
        <div>
            <ul className='film-item-cont' onClick={handleChange}>
                {sortedOptions}
            </ul>
        </div>
    )
};


export default FilmSelector;