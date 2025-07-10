import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Characters from "./components/Characters/Characters";
import Seasons from "./components/Seasons/Seasons";
import Guests from "./components/Guests/Guests";
import Store from "./components/Store/Store";
import Forum from "./components/Forum/Forum";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personajes" element={<Characters />} />
            <Route path="/temporadas" element={<Seasons />} />
            <Route path="/invitados" element={<Guests />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/foro" element={<Forum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
