import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Search } from 'react-bootstrap-icons'; 
// Assurez-vous d'avoir 'react-bootstrap-icons' installé (npm install react-bootstrap-icons)
// Sinon, utilisez l'alternative SVG fournie précédemment.

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contactez Nous", path: "/contact" },
  ];

  const activeColor = '#d1b35e'; 
  const menuBgColor = 'rgba(118, 118, 118, 0.7)';
  const searchBgColor = 'rgba(80, 80, 80, 0.9)';

  return (
    <nav className="navbar navbar-expand-lg p-3">
      {/* Utilisation de 'container-fluid' pour plus de flexibilité dans le conteneur principal */}
      <div className="container-fluid d-flex align-items-center"> 
        
        {/* LOGO - À gauche */}
        <Link className="navbar-brand fs-4" style={{ fontFamily: 'Georgia, serif', color: '#928f8f' }} to="/">
          Luxure
        </Link>

        {/* BURGER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU et RECHERCHE */}
        {/* 'navbar-collapse' pour le mobile. J'ai retiré 'justify-content-end' ici. */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          
          {/* Conteneur Flex pour centrer le menu et garder la recherche à droite (sur grand écran) */}
          <div className="w-100 d-flex justify-content-center align-items-center">

            {/* BLOC DES MENUS - Centré */}
            {/* 'mx-auto' pour le centrage et 'me-3' pour l'espace entre le menu et la recherche */}
            <ul className="navbar-nav d-flex flex-row p-1 rounded-pill" 
                style={{ backgroundColor: menuBgColor, gap: '10px' }}> {/* Augmentation du gap ici */}
              
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link 
                    className={`nav-link px-4 py-2 text-white fw-medium`} 
                    to={link.path}
                    style={{
                      borderRadius: '50px',
                      backgroundColor: isActive(link.path) ? activeColor : 'transparent',
                      fontWeight: isActive(link.path) ? 'bold' : '500',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* RECHERCHE - Poussée à droite grâce à un conteneur flex/div vide qui pousse le menu au centre */}
            <form className="d-flex ms-auto" role="search">
              <div className="input-group">
                <span 
                  className="input-group-text border-0 text-white" 
                  style={{ backgroundColor: searchBgColor, borderRight: 'none', borderRadius: '50px 0 0 50px' }}
                >
                  <Search />
                </span>
                <input
                  className="form-control border-0"
                  type="search"
                  placeholder="Rechercher..."
                  style={{ 
                    backgroundColor: searchBgColor, 
                    color: 'white', 
                    borderRadius: '0 50px 50px 0',
                    width: '180px' 
                  }}
                />
              </div>
            </form>
          </div>

        </div>
      </div>
      
      {/* STYLE POUR LE PLACEHOLDER (Pour s'assurer que le texte de la recherche reste lisible en blanc) */}
      <style>{`
        input::placeholder {
          color: rgba(255, 255, 255, 0.8) !important;
          opacity: 1; 
        }
        .navbar-nav {
          /* Permet d'utiliser le gap pour l'espace entre les liens */
          margin-right: auto !important; 
          margin-left: auto !important; 
        }
        /* Ajustement pour le mobile (si le menu est aligné à gauche) */
        @media (max-width: 991.98px) {
            .navbar-nav {
                display: block !important;
                background-color: transparent !important;
            }
            .navbar-nav .nav-item {
                margin-bottom: 5px;
            }
            .navbar-nav .nav-item a {
                border-radius: 0 !important;
                background-color: transparent !important;
                color: #333 !important;
                padding-left: 0 !important;
            }
        }
      `}</style>

    </nav>
  );
}