import imagenRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {

  const [characters, setCharacters] = useState(null);
  //Aqui async es una forma de observable para hacer la peticion a la url (API)
  const reqApi = async () => {
    // En este punto lo que se puede observar es con await y fetch nos subscribimos para poder hacer la peticion 
    const api = await fetch('https://rickandmortyapi.com/api/character')
    // Aqui mapeamos o desfragmentamos lo que nos devolvio en la linea de arriba
    const characterApi = await api.json();
    // console.log(characterApi);
    //Aqui colocamos la informacion de la peticion para corroborar de que tenga algo de informacion
    setCharacters(characterApi.results);
  }

  // console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}></Characters>) 
          : (
          <>
          <img src={imagenRickMorty} alt='Rick & Morty' className='img-home'></img>
        <button className="btn-search" onClick={reqApi}>Buscar Personajes</button>
          </>
          )
          }
      </header>
    </div>
  );
}

export default App;
