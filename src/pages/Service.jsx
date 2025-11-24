import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import bannerImage from '../assets/img/image_script_python.jpg'; 
import sectionImage1 from '../assets/img/image_script_python.jpg'; 
import sectionImage2 from '../assets/img/image_script_python.jpg'; 
import sectionImage3 from '../assets/img/image_script_python.jpg'; 
import sectionImage4 from '../assets/img/image_script_python.jpg'; 
import { PaletteFill, Tools, StarFill, Star } from 'react-bootstrap-icons';

export default function Service() {
  const themeColor = '#d1b35e';
  const testimonials = [
    // Bloc 1: 3 étoiles remplies
    { rating: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    // Bloc 2: 2 étoiles remplies
    { rating: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    // Bloc 3: 5 étoiles remplies
    { rating: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  ]
  const serviceSections = [
    {
      id: "conseil",
      title: "CONSEIL & CONCEPTION",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sectionImage1,
      reverse: false, // Image à gauche, Texte à droite (comme le bloc du haut dans)
      icon: PaletteFill,
    },
    {
      id: "achat",
      title: "CONSEIL & CONCEPTION", // Note: La capture utilise le même titre pour les deux blocs
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sectionImage2,
      reverse: true, // Texte à gauche, Image à droite (comme le bloc du bas dans)
      icon: Tools,
    },
    {
      id: "vente",
      title: "CONSEIL & CONCEPTION", // Note: La capture utilise le même titre pour les deux blocs
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sectionImage3,
      reverse: false, // Texte à gauche, Image à droite (comme le bloc du bas dans)
      icon: Tools,
    },
    {
      id: "livraison",
      title: "CONSEIL & CONCEPTION", // Note: La capture utilise le même titre pour les deux blocs
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: sectionImage4,
      reverse: true, // Texte à gauche, Image à droite (comme le bloc du bas dans)
      icon: Tools,
    },
  ]

// Fonction utilitaire pour générer les étoiles
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        // Étoile remplie
        stars.push(<StarFill key={i} style={{ color: themeColor }} className="me-1" />);
      } else {
        // Étoile vide (gris clair)
        stars.push(<Star key={i} style={{ color: '#ccc' }} className="me-1" />);
      }
    }
    return stars;
  }

  return (
    <div>
      {/* SECTION HERO / BANNER */}
      <section 
        className="hero-section d-flex flex-column" 
        style={{
          // Ajout du dégradé sombre sur l'image de fond
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Une hauteur moins haute que la page d'accueil
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENU PRINCIPAL DU HERO (Titre, texte) */}
        <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center py-5">
          <h1 
            className="display-3 fw-bold mb-4" 
            style={{ 
                fontFamily: 'Playfair Display, serif', 
                letterSpacing: '1px', 
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
            }}
          >
            UN SERVICE SUR-MESURE <br /> POUR VOTRE PROJET
          </h1>

          <p className="lead mb-5 px-lg-5" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            De la conception à la remise des clés, nous nous occupons de tout.
          </p>
        </div>
      </section>
      
      {/* SECTION : DÉTAIL DES SERVICES */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container py-5">
          
          {/* Titre et Texte d'Introduction (en haut de la section) */}
          <div className="text-center mb-5">
            <h2 
              className="display-4 fw-bold mb-3" 
              style={{ fontFamily: 'Playfair Display, serif', color: themeColor }}
            >
              NOS SERVICES
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '850px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
          
          {/* Boucle des BLOCS DE SERVICE (2 blocs) */}
          {serviceSections.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id} 
              className={`row align-items-center g-5 mb-5 ${service.reverse ? 'flex-row-reverse' : ''}`}
            >
              
              {/* Colonne Image */}
              <div className="col-lg-6">
                <div 
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    borderRadius: '5px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                >
                </div>
              </div>
              
              {/* Colonne Texte */}
              <div className="col-lg-6">
                <h4 className="fw-bold mb-3" style={{ color: themeColor }}>
                  {service.title}
                </h4>
                
                <p className="mb-4" style={{ lineHeight: '1.7', color: '#555' }}>
                  {service.text}
                </p>

                <a 
                  href="/contact" 
                  className="btn btn-warning fw-bold px-4 py-2 shadow-sm"
                  style={{ 
                    backgroundColor: themeColor, 
                    borderColor: themeColor, 
                    color: 'white', 
                    borderRadius: '5px' 
                  }}
                >
                  Utilisez le service
                </a>
              </div>
            </div>
          ))} 
        </div>
      </section>

      {/* NOUVELLE SECTION : TÉMOIGNAGES */}
      <section className="py-5" style={{ backgroundColor: '#e9e9e9' }}>
        <div className="container py-5">
          
          {/* Titre et Texte d'Introduction */}
          <div className="text-center mb-5">
            <h2 
              className="display-4 fw-bold mb-3" 
              style={{ fontFamily: 'Playfair Display, serif', color: themeColor, letterSpacing: '2px' }}
            >
              TÉMOIGNAGES
            </h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          
          {/* Cartes des Témoignages */}
          <div className="row g-4 justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div 
                  className="p-4 shadow-sm h-100" 
                  style={{ backgroundColor: 'white', borderRadius: '8px' }}
                >
                  {/* Note en étoiles */}
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Texte du témoignage */}
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#555' }}>
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}