import React, { useEffect, useState } from 'react'
import CardInfo from '../components/CardInfo';
const API="/datos.json";
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
<>

  <section className='alejadito herofotoi'> 
    <div className='container-fluid BorderTextRed p-3'>
      <h1 className='pt-5'>En papa's Burgers traemos lo mejor en:</h1>
      <h1 className='titulo mt-3'> Comida Rapida</h1>
      <div className='desaparecer alejadito'>
        <p className='fs-1'>Ven y disfruta de una experiencia culinaria irresistible donde cada bocado cuenta..</p>
      </div>
      <a href='https://maps.app.goo.gl/6FgTq4xEsA9zLoV39' className='btn btn-lg px-5 btn-danger fs-1 mt-4' >Ubicanos</a>
    </div>
  </section>
  <section className='bg-oscuro vh-60 BorderTextRed p-5 border-bottom'>
    <h1 className='subtitulo text-center subtituloinfo'>Comida favorita</h1>
                {datos.filter((productos) => productos.id === 1)
              .map((Productos) => (
              <CardInfo key={Productos.id} items={Productos}/>
            ))}
  </section>

</>
  )
}

export default Inicio