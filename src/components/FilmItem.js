import React from 'react';
import CharacterList from './CharacterList';
import PlanetList from './PlanetList';
import StarshipList from './StarshipList';
import VehicleList from './VehicleList';
import SpeciesList from './SpeciesList';
import '../App.css';


const FilmItem = ({film, characters, planets, starships, vehicles, species}) => {
    
    return (

    <div>

        <div>
        <p><h1>Episode: {film.episode_id} <br/> {film.title}</h1></p>
        <p>{film.opening_crawl}</p>
        </div><br/>
        <div className='containers'>
        <p className='list-cont'>Characters:<br/><CharacterList characters={characters}/></p>
        <p className='list-cont'>Planets:<br/><PlanetList planets={planets}/></p>
        <p className='list-cont'>Starships:<br/><StarshipList starships={starships}/></p>
        <p className='list-cont'>Vehicles:<br/><VehicleList vehicles={vehicles}/></p>
        <p className='list-cont'>Species:<br/> <SpeciesList species={species} /></p>
        </div>
    </div>

    )
};

export default FilmItem;