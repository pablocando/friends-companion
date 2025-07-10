import { useState, useEffect } from 'react'
import axios from 'axios'
import './Seasons.css'

function Seasons() {
  const [seasons, setSeasons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const response = await axios.get('https://mock.apidog.com/m1/980918-966415-default/seasons')
        setSeasons(response.data)
        setLoading(false)
      } catch (error) {
        console.log('Error al cargar temporadas:', error)
        setSeasons([])
        setLoading(false)
      }
    }

    fetchSeasons()
  }, [])

  if (loading) {
    return <div className="loading">Cargando temporadas...</div>
  }

  if (seasons.length === 0) {
    return (
      <div className="seasons-page">
        <div className="container">
          <h1>Temporadas</h1>
          <div className="loading">No se pudieron cargar las temporadas</div>
        </div>
      </div>
    )
  }

  return (
    <div className="seasons-page">
      <div className="container">
        <h1>Temporadas</h1>
        <div className="seasons-grid">
          {seasons.map((season) => (
            <div key={season.id} className="season-card">
              <div className="season-header">
                <div className="season-number">
                  {season.season}
                </div>
                <div className="season-basic-info">
                  <h3 className="season-title">{season.title}</h3>
                  <div className="season-details">
                    <span className="season-year">Año: {season.year}</span>
                    <span className="season-episodes">{season.episodes} episodios</span>
                  </div>
                </div>
              </div>
              
              {season.image && (
                <div className="season-image-container">
                  <img 
                    src={season.image} 
                    alt={season.title}
                    className="season-image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Seasons