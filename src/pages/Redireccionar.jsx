import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Redireccionar = () => {
    const {num}=useParams();
  useEffect(() => {
const redirigir = async () => {
      if (num) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
        const nuevaVentana = window.open(`https://wa.me/${num}`);

        if (nuevaVentana) {
          setTimeout(() => {
            nuevaVentana.close(); // Cierra la pestaña después de 2.5 segundos
          }, 2500);
        }
      }
    };

    redirigir();
  }, [num]);






  return (
    <div className='fs-1 text-center alejadito'>Redireccionando al WhatsApp.....</div>

  )
}

export default Redireccionar