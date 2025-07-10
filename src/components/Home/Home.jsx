import FunFacts from "./FunFacts";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>F·R·I·E·N·D·S companion</h1>
        <p>
          Descubre todos los personajes, temporadas y más contenido de tu serie
          favorita
        </p>
      </div>

      <div className="series-summary">
        <h2>Resumen de la Serie</h2>

        <div className="group-photo-section">
          <img
            src="https://storage.googleapis.com/image-friend/hero/friends-cast.jpg"
            alt="Todos los personajes principales juntos"
            className="group-photo"
            onError={(e) => {
              e.target.src =
                "https://storage.googleapis.com/image-friend/hero/friends-cast.jpg";
            }}
          />
        </div>

        <div className="summary-content">
          <p>
            Nuestra serie es una emocionante aventura que sigue las vidas de
            personajes únicos en un mundo lleno de misterios y desafíos. A
            través de múltiples temporadas, los espectadores han sido testigos
            de historias increíbles que combinan drama, acción y momentos
            emotivos.
          </p>
          <p>
            Cada personaje aporta su propia perspectiva y trasfondo a la
            narrativa general, creando una rica tapicería de relaciones e
            historias interconectadas. Desde los protagonistas principales hasta
            los invitados especiales, cada aparición en pantalla contribuye al
            desarrollo de esta fascinante historia.
          </p>
          <p>
            Con temporadas que han cautivado a audiencias de todo el mundo,
            nuestra serie continúa evolucionando y sorprendiendo a los fanáticos
            con giros inesperados, desarrollo de personajes profundo y una
            producción de alta calidad que mantiene a todos al borde de sus
            asientos.
          </p>
        </div>
      </div>

      <FunFacts />
    </div>
  );
}

export default Home;
