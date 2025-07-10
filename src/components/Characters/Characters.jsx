import { useState, useEffect } from "react";
import axios from "axios";
import SecondaryCharacters from "./SecondaryCharacters";
import "./Characters.css";

function Characters() {
  const [mainCharacters, setMainCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const actorMapping = {
    "Rachel Green": "Jennifer Aniston",
    "Monica Geller": "Courteney Cox",
    "Phoebe Buffay": "Lisa Kudrow",
    "Joey Tribbiani": "Matt LeBlanc",
    "Chandler Bing": "Matthew Perry",
    "Ross Geller": "David Schwimmer",
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://mock.apidog.com/m1/980918-966415-default/characters"
        );

        const secondaryNames = [
          "gunther",
          "janice",
          "carol",
          "susan",
          "mike",
          "estelle",
        ];
        const filteredMain = response.data.filter(
          (character) =>
            !secondaryNames.some((name) =>
              character.name.toLowerCase().includes(name)
            )
        );

        const charactersWithActors = filteredMain.map((character) => ({
          ...character,
          actor: actorMapping[character.name] || "Actor desconocido",
        }));

        setMainCharacters(charactersWithActors);
        setLoading(false);
      } catch (error) {
        console.log("Error al cargar personajes:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div className="loading">Cargando personajes...</div>;
  }

  return (
    <div className="characters-page">
      <div className="container">
        <h1>Personajes Principales</h1>
        <div className="characters-grid">
          {mainCharacters.map((character) => (
            <div key={character.id} className="character-card">
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
              <div className="character-info">
                <h3 className="character-name">{character.name}</h3>
                <p className="character-actor">{character.actor}</p>
              </div>
            </div>
          ))}
        </div>

        <SecondaryCharacters />
      </div>
    </div>
  );
}

export default Characters;
