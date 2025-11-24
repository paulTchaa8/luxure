import React from 'react';
// Importez les icônes de réseaux sociaux
import { Instagram, Facebook, Linkedin, GeoAltFill, EnvelopeFill, TelephoneFill, Twitter } from 'react-bootstrap-icons';

export default function Footer() {
  const themeColor = '#d1b35e'; // La couleur jaune/dorée du thème

  const footerLinks = [
    { 
      title: "Explorer", 
      links: [
        { name: "Accueil", href: "/" },
        { name: "Nos Services", href: "/services" },
        { name: "Contactez-nous", href: "/contact" },
      ]
    },
    { 
      title: "Nos Services", 
      links: [
        { name: "Conseil & Conception", href: "/services#conseil" },
        { name: "Achat & Rénovation", href: "/services#achat" },
        { name: "Aménagement & Stylisme", href: "/services#amenagement" },
        { name: "Gestion & Vente", href: "/services#gestion" },
      ]
    },
  ];

  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      <div className="container py-5">
        <div className="row g-5">

          {/* COLONNE 1 : Logo et Description */}
          <div className="col-md-12 col-lg-4">
            <h4 className="fw-bold mb-3" style={{ color: 'white' }}>Luxure</h4>
            <p className="text-white-75" style={{ fontSize: '0.9rem' }}>
              Votre partenaire pour l'investissement dans des appartements meublés d'exception. Nous créons des havres de paix où le design rencontre le confort.
            </p>
          </div>

          {/* COLONNE 2 & 3 : Liens Explorer et Services */}
          {footerLinks.map((section, index) => (
            <div className="col-md-6 col-lg-2" key={index}>
              <h5 className="fw-bold mb-3" style={{ color: themeColor }}>
                {section.title}
              </h5>
              <ul className="list-unstyled">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a 
                      href={link.href} 
                      className="text-decoration-none" 
                      style={{ fontSize: '0.9rem', color: 'white' }} 
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLONNE 4 : Restez Informé (Formulaire et Contact) */}
          <div className="col-md-6 col-lg-4">
            <h5 className="fw-bold mb-3" style={{ color: themeColor }}>
              Restez Informé
            </h5>
            <p className="text-white-75 mb-3" style={{ fontSize: '0.9rem' }}>
              Rejoignez-nous pour recevoir nos actualités et les nouveaux projets en exclusivité.
            </p>
            
            {/* Formulaire d'inscription */}
            <div className="input-group mb-4">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Votre adresse email..." 
                style={{ borderRadius: '0', border: 'none' }} 
              />
              <button 
                className="btn btn-warning fw-bold" 
                type="button"
                style={{ 
                  backgroundColor: themeColor, 
                  borderColor: themeColor, 
                  color: 'white', 
                  borderRadius: '0' 
                }}
              >
                S'inscrire
              </button>
            </div>

            {/* Informations de contact */}
            <ul className="list-unstyled text-white-75">
              <li className="d-flex align-items-center mb-2" style={{ fontSize: '0.9rem' }}>
                <TelephoneFill className="me-2" style={{ color: themeColor }} /> 
                +237 600 000 000 / 600 000 000
              </li>
              <li className="d-flex align-items-center mb-2" style={{ fontSize: '0.9rem' }}>
                <GeoAltFill className="me-2" style={{ color: themeColor }} /> 
                123 Avenue Ngaffag, 75000 Douala
              </li>
              <li className="d-flex align-items-center" style={{ fontSize: '0.9rem' }}>
                <EnvelopeFill className="me-2" style={{ color: themeColor }} /> 
                contact@luxuryhaven.fr
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* FOOTER BARRE INFERIEURE (Copyright et Réseaux Sociaux) */}
      <div 
        className="py-3" 
        style={{ 
          backgroundColor: '#333', 
          borderTop: `2px solid ${themeColor}` 
        }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row">
          
          <p className="mb-0 text-white-75" style={{ fontSize: '0.9rem' }}>
            Luxure, &copy; All rights reserved
          </p>
          
          {/* Icônes de Réseaux Sociaux */}
          <div className="d-flex gap-3 mt-3 mt-md-0">
            {/* AJUSTEMENT : Retrait de la classe text-white-75 et ajout de style inline pour forcer le blanc */}
            <a href="/" style={{ color: 'white' }}><Instagram size={20} /></a>
            <a href="/" style={{ color: 'white' }}><Facebook size={20} /></a>
            <a href="/" style={{ color: 'white' }}><Twitter size={20} /></a>
            <a href="/" style={{ color: 'white' }}><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}