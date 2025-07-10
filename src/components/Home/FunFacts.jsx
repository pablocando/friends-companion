import "./FunFacts.css";
import useFetch from "../../hooks/useFetch.js";

function FunFacts() {
  const { data: funFacts, loading, error } = useFetch("/funFactsData.json");

  if (loading) return <p>Cargando datos curiosos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="fun-facts-section">
      <h2>Datos Curiosos</h2>
      <div className="fun-facts-grid">
        {funFacts.map((fact) => (
          <div key={fact.id} className="fun-fact-card">
            <span className="fun-fact-icon">{fact.icon}</span>
            <h3 className="fun-fact-title">{fact.title}</h3>
            <p className="fun-fact-description">{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FunFacts;
