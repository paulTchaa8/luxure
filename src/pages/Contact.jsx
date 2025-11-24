import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Vous pouvez utiliser une image de fond pour la section principale si nécessaire, 
// mais ici nous allons nous concentrer sur le corps blanc/clair de la capture.

export default function Contact() {
  const themeColor = '#d1b35e'
  const mapAddress = "Total Logpom, Douala, Cameroun"
  // Remplacez VOTRE_CLE_API_GOOGLE par la clé que vous souhaitez utiliser
  const API_KEY = "AIzaSyAFDpkZKBrTzAc6KytQOIEqkCpS55-Nny4";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(mapAddress)}`

    return (
      <div>
          {/* NAVBAR */}
          <Navbar />

          {/* SECTION PRINCIPALE DU CONTACT (Formulaire + Carte) */}
          <section className="py-5" style={{ backgroundColor: 'white' }}>
            <div className="container py-5">
              <div className="row g-5">
                {/* COLONNE GAUCHE : FORMULAIRE */}
                <div className="col-lg-6">
                  <h2 
                    className="display-4 fw-bold mb-5" 
                    style={{ fontFamily: 'Playfair Display, serif', color: themeColor, letterSpacing: '2px' }}
                  >
                    CONTACTEZ-NOUS
                  </h2>

                  <form>
                    {/* Champ NOM */}
                    <div className="mb-4">
                      <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Entrer votre nom" 
                        style={{ backgroundColor: '#f0f0f0', border: 'none', height: '60px', color: '#333' }}
                      />
                    </div>
                    
                    {/* Champ EMAIL */}
                    <div className="mb-4">
                      <input 
                          type="email" 
                          className="form-control form-control-lg" 
                          placeholder="Entrer votre Email" 
                          style={{ backgroundColor: '#f0f0f0', border: 'none', height: '60px', color: '#333' }}
                      />
                    </div>
                    
                    {/* Champ TÉLÉPHONE (Ajouté pour la complétude, même si la capture montre Sujet de discussion à la place) */}
                    <div className="mb-4">
                      <input 
                          type="tel" 
                          className="form-control form-control-lg" 
                          placeholder="Entrer votre téléphone" 
                          style={{ backgroundColor: '#f0f0f0', border: 'none', height: '60px', color: '#333' }}
                      />
                    </div>

                    {/* Champ SUJET DE DISCUSSION (comme dans la capture) */}
                    <div className="mb-4">
                      <input 
                          type="text" 
                          className="form-control form-control-lg" 
                          placeholder="Votre sujet de discussion" 
                          style={{ backgroundColor: '#f0f0f0', border: 'none', height: '60px', color: '#333' }}
                      />
                    </div>
                    
                    {/* Bouton ENVOYER */}
                    <button 
                      type="submit" 
                      className="btn btn-warning btn-lg fw-bold w-100 mt-3"
                      style={{ 
                          backgroundColor: themeColor, 
                          borderColor: themeColor, 
                          color: 'white', 
                          height: '60px' 
                      }}
                    >
                      Envoyer
                    </button>
                  </form>
                </div>

                {/* COLONNE DROITE : CARTE GOOGLE EMBEDDÉE (Mise à jour) */}
                <div className="col-lg-6">
                  <iframe
                    title={`Localisation de l'entreprise - ${mapAddress}`}
                    width="100%" 
                    height="600" 
                    style={{ 
                        border: 0, 
                        borderRadius: '8px', 
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' 
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    // Utilisation de l'adresse "Total Logpom, Douala, Cameroun"
                    // ATTENTION : Remplacez 'YOUR_API_KEY' par votre clé Google Maps API.
                    src={mapSrc}
                  ></iframe>
                  <p className="text-muted small mt-2">
                    <span className='text-danger'>*NOTE : La carte est centrée sur Total Logpom. Elle nécessite une clé Google Maps API valide pour fonctionner en prod.</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <Footer />
      </div>
    );
}