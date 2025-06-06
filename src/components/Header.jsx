import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg fs-2 BorderTextRed fixed-top">
  <div className="container-fluid justify-between">
    <Link to={"/Inicio"} className="navbar-brand fs-1 papasburger" href="/src/pages/Inicio.jsx">Papas Burgeres</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to={"/Inicio"} className="nav-link mx-1" aria-current="page" href="#">Inicio
          <svg className='mx-2 desaparecerA' xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="M8 14h9v1H8zM13 8.55V8h-1v.55C9.75 8.8 8 10.69 8 13h9c0-2.31-1.75-4.2-4-4.45"></path><path d="M19 2H5c-.55 0-1 .45-1 1v4H2v2h2v2H2v2h2v2H2v2h2v4c0 .55.45 1 1 1h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V4h13z"></path>
</svg>
          </Link>
        </li>
        <li className="nav-item">

        <Link to={"/ComidaRapida"} className="nav-link mx-1" href="#">Comida rapida
        <svg  className='mx-2 desaparecerA' xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="m16,2h-8c-3.31,0-6,2.69-6,6,0,.55.45,1,1,1h18c.55,0,1-.45,1-1,0-3.31-2.69-6-6-6ZM4.13,7c.45-1.72,2.01-3,3.87-3h8c1.86,0,3.43,1.28,3.87,3H4.13Z"></path><path d="m21,15H3c-.55,0-1,.45-1,1,0,3.31,2.69,6,6,6h8c3.31,0,6-2.69,6-6,0-.55-.45-1-1-1Zm-5,5h-8c-1.86,0-3.43-1.28-3.87-3h15.75c-.45,1.72-2.01,3-3.87,3Z"></path><path d="m17,10c-1.6,0-2.45.68-3.12,1.22-.59.47-.98.78-1.88.78s-1.29-.31-1.88-.78c-.68-.54-1.52-1.22-3.13-1.22s-2.45.68-3.13,1.22c-.59.47-.98.78-1.88.78v2c1.6,0,2.45-.68,3.13-1.22.59-.47.98-.78,1.88-.78s1.29.31,1.88.78c.68.54,1.52,1.22,3.13,1.22s2.45-.68,3.12-1.22c.59-.47.98-.78,1.87-.78s1.29.31,1.87.78c.68.54,1.52,1.22,3.12,1.22v-2c-.9,0-1.29-.31-1.87-.78-.68-.54-1.52-1.22-3.12-1.22Z"></path>
</svg>
        </Link>

        </li>
        <li className="nav-item">
          <Link to={"/Desayunos"} className="nav-link mx-1" href="#">Desayunos
          <svg className='mx-2 desaparecerA' xmlns="http://www.w3.org/2000/svg" width={24} height={22} 
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="m19,22H5c-1.1,0-2-.9-2-2v-10.68c-.6-.75-.95-1.66-1-2.62-.05-1.14.36-2.22,1.15-3.05,1.02-1.07,2.59-1.66,4.42-1.66h9.73c1.29,0,2.55.54,3.45,1.48.85.89,1.29,2.04,1.24,3.23h0c-.04.96-.39,1.87-1,2.62v10.68c0,1.1-.9,2-2,2ZM7.58,4c-1.28,0-2.34.37-2.98,1.04-.42.44-.63.98-.6,1.58.03.61.28,1.19.71,1.63.18.19.28.44.28.7v11.06h14v-11.06c0-.26.1-.51.28-.7.43-.44.69-1.02.71-1.63h0c.03-.64-.21-1.26-.68-1.75-.52-.55-1.25-.86-2-.86H7.58Z"></path><path d="M12 7A1 1 0 1 0 12 9 1 1 0 1 0 12 7z"></path><path d="M15.5 10A.5.5 0 1 0 15.5 11 .5.5 0 1 0 15.5 10z"></path><path d="M16 6A1 1 0 1 0 16 8 1 1 0 1 0 16 6z"></path>
</svg>
          
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/Almuerzos"} className="nav-link mx-1" href="#">Almuerzos
          <svg className='mx-2 desaparecerA' xmlns="http://www.w3.org/2000/svg" width={24} height={22}
fill={"currentColor"} viewBox="0 0 24 24">
{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
<path d="m14,2h-2v7h-2V2h-2v7h-2V2h-2v8c0,1.65,1.35,3,3,3h1v9h2v-9h1c1.65,0,3-1.35,3-3V2Z"></path><path d="m17,13h1v9h2V3c0-.55-.45-1-1-1-1.65,0-3,1.35-3,3v7c0,.55.45,1,1,1Z"></path>
</svg>
          </Link>
        </li>

      </ul>

        <a className="navbar-brand  fs-3 btn btn-danger btn-sm py-0 px-2" href="https://www.instagram.com/papasburger_2009?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Contactanos</a>
    </div>
  </div>
</nav>

  )
}

export default Header