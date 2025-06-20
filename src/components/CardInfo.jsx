import React, { useEffect, useState } from "react";
const API = "/datos.json";
const CardInfo = ({items}) => {
    const direccion=`/src/assets/img/${items.id}.jpg`;

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

<div className="container ">
  <h1 className="subtitulo py-3 border-bottom subtituloinfo">{items.nombre}</h1>

  <div className="row">
    {/* Columna izquierda con ingredientes */}
    <div className="col-xl-8 d-flex flex-column justify-content-between ">
      <ul className="row p-0 m-0">
  {datos
    .filter((producto) => producto.id === 1)
    .flatMap((producto) =>
      producto.ingredientes.map((ingrediente, index) => (
        <li className="col-6 mb-3 ingrediente-item" key={index}>
          {ingrediente}
        </li>
      ))
    )}
</ul>

    </div>

    {/* Columna derecha con imagen */}
    <div className="col-xl-4 d-flex">
      <img
        src={direccion}
        alt={items.nombre}
        className="img-fluid imageninfo align-self-stretch"
      />
    </div>
  </div>
</div>

    </div>

)
}

export default CardInfo