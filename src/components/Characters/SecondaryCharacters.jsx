import { useState, useEffect } from 'react'
import axios from 'axios'
import './SecondaryCharacters.css'

function SecondaryCharacters() {
  const [secondaryCharacters, setSecondaryCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://mock.apidog.com/m1/980918-966415-default/characters')
        
        const secondaryNames = ['gunther', 'janice', 'carol', 'susan', 'mike', 'estelle']
        const filteredSecondary = response.data.filter(character => 
          secondaryNames.some(name => 
            character.name.toLowerCase().includes(name)
          )
        )
        
        setSecondaryCharacters(filteredSecondary)
        setLoading(false)
      } catch (error) {
        console.log('Error al cargar personajes secundarios:', error)
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [])

  if (loading) {
    return <div className="loading">Cargando personajes secundarios...</div>
  }

  return (
    <div className="secondary-characters-section">
      <h2>Personajes Secundarios</h2>
      <div className="secondary-characters-grid">
        {secondaryCharacters.map((character) => (
          <div key={character.id} className="secondary-character-card">
            <img 
              src={character.image} 
              alt={character.name}
              className="secondary-character-image"
            />
            <h3 className="secondary-character-name">{character.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondaryCharacters