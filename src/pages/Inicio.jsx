import React, { useEffect, useState } from "react";
import CardInfo from "../components/CardInfo";
const API = "/datos.json";

const Inicio = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getDatos = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDatos(data.items.comida_rapida);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando Productos...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-5 text-danger">
        <h4>Error al cargar los Productos</h4>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <section className="herofotoi text-white">
        <section className="alejadito container-fluid">
          <h2 className="fs-1 BorderTextRed">
            En Papa's burgers traemos lo mejor en:
          </h2>
          <h1 className="titulo BorderTextRed">Comida Rapida</h1>
          <p className="desaparecer BorderTextRed fs-1">
            Papa's Burguers Tu parada de sabor. Comida rápida, desayunos y
            almuerzos con calidad y rapidez.
          </p>
          <p className="BorderTextRed fs-1">📍 ¡Visítanos y disfruta </p>
          <a
            href="https://maps.app.goo.gl/g1PrZh8meJ2FWjV78"
            className="btn btn-danger btn-lg py-2 px-5 mt-1 fs-4"
          >
            {" "}
            Ubicación
          </a>
        </section>
      </section>


      <section className="py-4 bg-oscuro BorderTextRed">
        <h1 className="subtitulo text-center border-bottom">Plato estrella</h1>
            {datos
              .filter((productos) => productos.id === 1)
              .map((Productos) => (
                <CardInfo key={Productos.id} items={Productos} />
            ))}
      </section>
    </div>
  );
};

export default Inicio;
