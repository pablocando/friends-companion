import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Store.css'

function Store() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mock.apidog.com/m1/980918-966415-default/store')
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.log('Error al cargar productos:', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleBuyClick = () => {
    navigate('/foro')
  }

  if (loading) {
    return <div className="loading">Cargando tienda...</div>
  }

  return (
    <div className="store-page">
      <div className="container">
        <h1>Tienda Oficial</h1>
        <p className="store-description">
          Encuentra productos oficiales de tu serie favorita
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
                {product.description && (
                  <p className="product-description">{product.description}</p>
                )}
                <button className="buy-button" onClick={handleBuyClick}>
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Store