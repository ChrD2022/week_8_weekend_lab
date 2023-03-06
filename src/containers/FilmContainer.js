import React, {useState, useEffect} from 'react';
import FilmItem from '../components/FilmItem';
import FilmSelector from '../components/FilmSelector';
import '../App.css'


const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [planets , setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/films/')
        .then(res => res.json())
        .then(data => setFilms(data.results))
    }, []);

    const handleSelectChange = ( film ) => {
        const characterPromises = film.characters.map((character) => {
            return fetch(character)
            .then(res => res.json())
        })
        Promise.all(characterPromises)
        .then((data) => {
            setCharacters(data)
            setSelectedFilm(film)
        })
        const planetPromises = film.planets.map((planet) => {
            return fetch(planet)
            .then(res => res.json())
        })
        Promise.all(planetPromises)
        .then((data) => {
            setPlanets(data)
        })
        const starshipPromises = film.starships.map((starship) => {
            return fetch(starship)
            .then(res => res.json())
        })
        Promise.all(starshipPromises)
        .then((data) => {
            setStarships(data)
        })
        const vehiclePromises = film.vehicles.map((vehicle) => {
            return fetch(vehicle)
            .then(res => res.json())
        })
        Promise.all(vehiclePromises)
        .then((data) => {
            setVehicles(data)
        })
        const speciesPromises = film.species.map((species) => {
            return fetch(species)
            .then(res => res.json())
        })
        Promise.all(speciesPromises)
        .then((data) => {
            setSpecies(data)
        })
    }

    return (
    <div className='content'>
        <FilmSelector films={films} handleSelectChange={handleSelectChange} />
        {selectedFilm ? <FilmItem 
        film={selectedFilm} 
        characters={characters} 
        planets={planets}
        starships={starships}
        vehicles={vehicles}
        species={species}
        />: null}
    </div>
    )
};

export default FilmContainer;