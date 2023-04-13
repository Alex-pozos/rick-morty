
function Characters(props) {

    const { characters, setCharacters } = props;

    const resetCharacters = () => {

        setCharacters(null);

    };

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}>Volver a home</span>
            <div className="container-characters">
                {characters.map((character, index) => (

                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}></img>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ?
                                    (
                                        <>
                                            <span className="alive"></span>
                                            Alive
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <span className="dead"></span>
                                            Dead
                                        </>
                                    )
                                }
                            </h6>
                            <p className="text.gray">
                                <span>Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p className="text.gray">
                                <span>Especie: </span>
                                <span>{character.species}</span>
                            </p>
                            <p className="text.gray">
                                <span>Ubicación: </span>
                                <span>{character.location.name}</span>
                            </p>
                        </div>
                    </div>

                ))}

            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
        </div>

    );

}

export default Characters;