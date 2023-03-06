import './App.css';
import FilmContainer from './containers/FilmContainer';

function App() {

  const movies = [
    {title:'Select one...', url:null},
    {title:'A New Hope', url:'https://swapi.dev/api/films/1/'},
    {title:'The Empire Strikes Back', url:'https://swapi.dev/api/films/2/'},
    {title:'Return of the Jedi', url:'https://swapi.dev/api/films/3/'},
    {title:'The Phantom Menace', url:'https://swapi.dev/api/films/4/'},
    {title:'Attack of the Clones', url:'https://swapi.dev/api/films/5/'},
    {title:'Revenge of the Sith', url:'https://swapi.dev/api/films/6/'},
  ]

  return (
    <div className="App">
      <header className='header'>
        <p>A not so long time ago in an API far far away</p>
      </header>
      <FilmContainer />
      <footer className='footer'>
        <p>Our Cruisers can't repel firepower of that magnitude!©</p> 
      </footer>
    </div>
    
  );
}

export default App;
