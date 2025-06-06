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
            <div className="row m-0">
                <h1 className='subtitulo py-3 pb-5'>{items.nombre}</h1>
                <div className="col-xl-8">
                    <ul className="fs-3 row">
                    {datos
                    .filter((productos) => productos.id === 1)
                    .map((Productos) => (
                        Productos.ingredientes.map((ingrediente)=>(
                            <li className="col-md-4">{ingrediente}</li>
                            
                        ))
                    ))}
                    </ul>
                </div>
                <div className="col-xl-4">
                                    <img
            src={direccion}
            alt={items.nombre}
            className="img-fluid tamaborimg "/>
                </div>
            </div>

    </div>

)
}

export default CardInfo