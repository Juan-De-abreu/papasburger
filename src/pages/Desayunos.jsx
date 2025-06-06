import React, { useEffect, useState } from 'react'
import CardFood from '../components/CardFood';
const API="/datos.json";

const Desayunos = () => {

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
        setDatos(data.items.desayunos);
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
    <div className='mb-5'>

    <div className='subtitulo text-center alejadito'>Desayunos</div>
      <div className='row mx-0'>
          {datos.map((Productos) => (
            <CardFood key={Productos.id} items={Productos}/>
          ))}
      </div>
    </div>
  )
}

export default Desayunos