import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 my-0 border-top">
  <div className="col-md-4 d-flex align-items-center">
    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
    </a>
    <span className="mb-3 mb-md-0 text-body-secondary BorderTextRed fs-2">
      Papas Burgers
    </span>
  </div>
  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
    <li className="mx my-auto">
      <a className="text-body-secondary m-2" href="https://www.instagram.com/papasburger_2009/?__pwa=1" aria-label="Instagram">
          <img className="iconosContactanos infored mx-3" src="/src/assets/instagram.svg" style={{width:24, height:24}} alt="instagram" />
          <span className="desaparecer ">Instagram</span>
      </a>
    </li>

 
        <li className="mx my-auto">
            <Link  to={"/Redireccionar/584125370555"} href="/redireccionar" className="text-body-secondary mx-2"><svg className="iconosContactanos infored" xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
            fill={"currentColor"} viewBox="0 0 24 24">
            {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
            <path d="M7 22h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2M7 4h10v16H7z"></path><path d="M12 17a1 1 0 1 0 0 2 1 1 0 1 0 0-2"></path>
            </svg><span className="desaparecer">0412-5370555</span></Link>
        </li>
        <li className="mx my-auto">
            
            <Link  to={'/Redireccionar/584123448131'} href="/redireccionar" className="text-body-secondary mx-2"><svg className="iconosContactanos infored" xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
            fill={"currentColor"} viewBox="0 0 24 24">
            {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
            <path d="M7 22h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2M7 4h10v16H7z"></path><path d="M12 17a1 1 0 1 0 0 2 1 1 0 1 0 0-2"></path>
            </svg><span className="desaparecer">0412-3448131</span></Link>
        </li>

  </ul>
</footer>

  );
};

export default Footer;
