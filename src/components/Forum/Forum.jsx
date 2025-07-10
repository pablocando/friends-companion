import { useState } from "react";
import axios from "axios";
import { useAuth } from "../authContext.jsx";
import "./Forum.css";
import "./Forum_dark_theme.css";

function Forum() {
  const { isLoggedIn, user, login, logout } = useAuth();
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [forumData, setForumData] = useState(null);
  const [loading, setLoading] = useState(false);

  const mockTopics = [
    {
      id: 1,
      title: "¿Cuál es tu episodio favorito de la temporada 1?",
      author: "RachelFan92",
      replies: 24,
      lastActivity: "Hace 2 horas",
      category: "Episodios",
    },
    {
      id: 2,
      title: "Teorías sobre el final de la serie",
      author: "ChandlerJokes",
      replies: 18,
      lastActivity: "Hace 5 horas",
      category: "Teorías",
    },
    {
      id: 3,
      title: "¿Ross y Rachel deberían haber terminado juntos?",
      author: "MonicaClean",
      replies: 42,
      lastActivity: "Hace 1 día",
      category: "Relaciones",
    },
    {
      id: 4,
      title: "Los mejores momentos de Phoebe",
      author: "SmellyCat",
      replies: 31,
      lastActivity: "Hace 2 días",
      category: "Personajes",
    },
    {
      id: 5,
      title: "¿Qué pasó con Joey después del final?",
      author: "SandwichLover",
      replies: 15,
      lastActivity: "Hace 3 días",
      category: "Personajes",
    },
    {
      id: 6,
      title: "Central Perk vs otros cafés de la serie",
      author: "CoffeeAddict",
      replies: 8,
      lastActivity: "Hace 1 semana",
      category: "Lugares",
    },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://mock.apidog.com/m1/980918-966415-default/login",
        {
          username: loginData.username,
          password: loginData.password,
        }
      );

      if (response.data) {
        login({
          username: loginData.username,
          email: loginData.username + "@friends.com",
          role: loginData.username === "admin" ? "admin" : "usuario",
        });
        setForumData({ topics: mockTopics });
      }
    } catch (error) {
      console.log("Error en login:", error);
      login({
        username: loginData.username,
        email: loginData.username + "@friends.com",
        role: loginData.username === "admin" ? "admin" : "usuario",
      });
      setForumData({ topics: mockTopics });
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="forum-page">
        <div className="login-container">
          <div className="login-card">
            <h1>Acceso al Foro</h1>
            <p>Inicia sesión para participar en las discusiones</p>
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Usuario (admin):</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña (123456):</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="login-button" disabled={loading}>
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`forum-page ${user?.role === "admin" ? "dark-theme" : ""}`}>
      <div className="container">
        <div className="forum-header">
          <div>
            <h1>Foro de Discusión</h1>
            <p>
              Bienvenido, {user?.username} ({user?.role})
            </p>
          </div>
          <button
            onClick={() => {
              logout();
              setForumData(null);
              setLoginData({ username: "", password: "" });
            }}
            className="logout-button"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="forum-topics">
          <h2>Temas de Discusión</h2>
          <div className="topics-list">
            {(forumData?.topics || mockTopics).map((topic) => (
              <div key={topic.id} className="topic-card">
                <div className="topic-header">
                  <h3 className="topic-title">{topic.title}</h3>
                  <span className="topic-category">{topic.category}</span>
                </div>
                <div className="topic-info">
                  <div className="topic-author-info">
                    <span className="topic-author">Por: {topic.author}</span>
                    <span className="topic-activity">{topic.lastActivity}</span>
                  </div>
                  <span className="topic-replies">
                    {topic.replies} respuestas
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
