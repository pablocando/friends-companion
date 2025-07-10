import { useState, useEffect } from 'react'
import axios from 'axios'
import './Guests.css'

function Guests() {
  const [guests, setGuests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await axios.get('https://mock.apidog.com/m1/980918-966415-default/guests')
        setGuests(response.data)
        setLoading(false)
      } catch (error) {
        console.log('Error al cargar invitados:', error)
        setLoading(false)
      }
    }

    fetchGuests()
  }, [])

  if (loading) {
    return <div className="loading">Cargando invitados...</div>
  }

  return (
    <div className="guests-page">
      <div className="container">
        <h1>Invitados Especiales</h1>
        <p className="guests-description">
          Conoce a los invitados especiales que han aparecido en nuestra serie
        </p>
        <div className="guests-grid">
          {guests.map((guest) => (
            <div key={guest.id} className="guest-card">
              <div className="guest-image-container">
                <img 
                  src={guest.image} 
                  alt={guest.name}
                  className="guest-image"
                />
              </div>
              <div className="guest-info">
                <div className="guest-header">
                  <h3 className="guest-name">{guest.name}</h3>
                  <p className="guest-role">{guest.role}</p>
                </div>
                
                <div className="guest-details">
                  <p className="guest-episode">
                    <strong>Episodio:</strong> {guest.episode}
                  </p>
                </div>
                
                {guest.description && (
                  <p className="guest-description">{guest.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Guests