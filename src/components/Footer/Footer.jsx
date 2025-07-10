import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/" className="footer-logo">
          <img 
            src="https://storage.googleapis.com/image-friend/logo/friends-logo.png" 
            alt="Logo de Friends" 
            className="footer-logo-image"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </Link>

        <div className="footer-center">
          <div className="footer-credit">
            <strong>UNIR 2025</strong> • Creado por <strong>Pablo Cando</strong>
          </div>
        </div>

        <div className="footer-right">
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              ⓕ
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              ⓘ
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              ⓨ
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer