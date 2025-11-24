import Navbar from "../components/Navbar"; // Maintenant, la Navbar est importée ici
import bannerImage from '../assets/img/image_script_python.jpg'; // Votre image de fond
import Footer from "../components/Footer"
import { 
  HandIndexThumbFill, ShieldFillCheck, QuestionCircleFill, PlusSquareFill,
  KeyFill, HouseDoorFill, ShieldLockFill,
  ArrowRight
} from 'react-bootstrap-icons'
import valuesBg from '../assets/img/image_script_python.jpg'
// Importez l'image du bloc gauche, ex:
import valueImage from '../assets/img/image_script_python.jpg'
import defaultAptImage from '../assets/img/image_script_python.jpg'

import thumb1 from '../assets/img/image_script_python.jpg'; // Exemple de petite image 1
import thumb2 from '../assets/img/image_script_python.jpg'; // Exemple de petite image 2
import thumb3 from '../assets/img/image_script_python.jpg'; // Exemple de petite image 3
import thumb4 from '../assets/img/image_script_python.jpg'; // Exemple de petite image 4
import servicesBgImage from '../assets/img/image_script_python.jpg';

export default function Home() {
  const themeColor = '#d1b35e'

  const thumbnailImages = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
  ]
  const serviceCards = [
    { title: "CONSEIL & CONCEPTION", text: "Nous étudions votre projet et vos goûts pour concevoir un intérieur qui vous ressemble. Plans 3D, sélection de matériaux...", bg: '#f5f5f5' }, // Gris clair
    { title: "CONSEIL & CONCEPTION", text: "Nous étudions votre projet et vos goûts pour concevoir un intérieur qui vous ressemble. Plans 3D, sélection de matériaux...", bg: 'white' }, // Blanc
    { title: "CONSEIL & CONCEPTION", text: "Nous étudions votre projet et vos goûts pour concevoir un intérieur qui vous ressemble. Plans 3D, sélection de matériaux...", bg: '#f5f5f5' }, // Gris clair
    { title: "CONSEIL & CONCEPTION", text: "Nous étudions votre projet et vos goûts pour concevoir un intérieur qui vous ressemble. Plans 3D, sélection de matériaux...", bg: '#333', darkText: true }, // Fond image / noir
  ]
  const valueTabs = [
    { name: "Clé en Main", icon: KeyFill, active: true },
    { name: "Design", icon: HouseDoorFill, active: false },
    { name: "Sécurité", icon: ShieldLockFill, active: false },
  ]
  const apartments = [
    { type: "APPARTEMENT MEUBLE", title: "Logpom, Douala, Cameroun", details: "75m², vue imprenable, meubles designers.", price: "À partir de 250 000€.", image: defaultAptImage },
    { type: "STUDIO MEUBLE", title: "Logpom, Douala, Cameroun", details: "75m², vue imprenable, meubles designers.", price: "À partir de 250 000€.", image: defaultAptImage },
    { type: "APPARTEMENT MEUBLE", title: "Logpom, Douala, Cameroun", details: "75m², vue imprenable, meubles designers.", price: "À partir de 250 000€.", image: defaultAptImage },
    { type: "APPARTEMENT MEUBLE", title: "Logpom, Douala, Cameroun", details: "75m², vue imprenable, meubles designers.", price: "À partir de 250 000€.", image: defaultAptImage },
    { type: "APPARTEMENT MEUBLE", title: "Logpom, Douala, Cameroun", details: "75m², vue imprenable, meubles designers.", price: "À partir de 250 000€.", image: defaultAptImage },
    { type: "APPARTEMENT MEUBLE", title: "Logpom, Douala, Cameroun", details: "75m², vue imprenable, meubles designers.", price: "À partir de 250 000€.", image: defaultAptImage },
  ]
  const features = [
    { 
      icon: HandIndexThumbFill, 
      title: "Expérience et expertise", 
      text: "Nous avons plus de 10 ans d'expérience dans la vente d'appartements meublés."
    },
    { 
      icon: ShieldFillCheck, 
      title: "Qualité et sélection rigoureuse", 
      text: "Nous avons plus de 10 ans d'expérience dans la vente d'appartements meublés."
    },
    { 
      icon: QuestionCircleFill, 
      title: "Accompagnement personnalisé", 
      text: "Nous avons plus de 10 ans d'expérience dans la vente d'appartements meublés."
    },
    { 
      icon: PlusSquareFill, 
      title: "Services additionnels", 
      text: "Nous avons plus de 10 ans d'expérience dans la vente d'appartements meublés."
    },
  ]

  return (
    <div>
      {/* SECTION HERO / BANNER AVEC IMAGE DE FOND */}
      <section 
        className="hero-section d-flex flex-column" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Prend toute la hauteur de la vue
          color: 'white',
          position: 'relative', // Nécessaire pour positionner les enfants
          overflow: 'hidden' // Empêche le débordement
        }}
      >
        {/* NAVBAR - Placé à l'intérieur de la section Hero */}
        <Navbar />

        {/* CONTENU PRINCIPAL DU HERO (Titre, texte, boutons) */}
        <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center py-5">
          <h1 
            className="display-2 fw-bold mb-4" 
            style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '1px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            VOTRE HAVRE DE PAIX,<br /> MEUBLÉ AVEC ÉLÉGANCE
          </h1>

          <p className="lead mb-5 px-lg-5" style={{ maxWidth: '800px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Découvrez des appartements entièrement équipés, où le confort
            rencontre le design. Investissez dans un art de vivre.
          </p>

          <div className="d-flex flex-column flex-md-row gap-3">
            <a 
              href="/appartements" 
              className="btn btn-warning btn-lg px-5 py-3 fw-bold rounded-pill"
              style={{ backgroundColor: '#d1b35e', borderColor: '#d1b35e', borderRadius: '30%', color: 'white' }}
            >
              Nos appartements
            </a>
            <a 
              href="/services" 
              className="btn btn-outline-light btn-lg px-5 py-3 fw-bold rounded-pill"
              style={{ borderColor: '#d1b35e', color: '#d1b35e' }} // Bordure jaune pour le second bouton
            >
              Nos services
            </a>
          </div>
        </div>

        {/* SECTION DES MINIATURES EN BAS */}
        <div className="container position-relative mb-4" style={{ zIndex: 10 }}>
            <div className="row justify-content-center g-3">
                {thumbnailImages.map((imgSrc, index) => (
                    <div className="col-6 col-md-3 col-lg-2" key={index}>
                        <img 
                            src={imgSrc} 
                            alt={`Thumbnail ${index + 1}`} 
                            className="img-fluid rounded-3 shadow-lg" 
                            style={{ 
                                height: '120px', 
                                objectFit: 'cover', 
                                width: '100%',
                                border: '3px solid #d1b35e' // Bordure jaune pour les miniatures
                            }} 
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION : POURQUOI NOUS CHOISIR - Mise à jour du style pour correspondre à la capture */}
      <section className="py-5" style={{ backgroundColor: '#fff' }}> {/* Fond Blanc */}
        <div className="container text-center">
          
          {/* TITRE - Police plus élégante et couleur sombre */}
          <h2 
            className="fw-normal mb-5 display-5" 
            style={{ 
                fontFamily: 'Playfair Display, serif', 
                color: '#2c3e50', // Bleu nuit/sombre
                letterSpacing: '1px'
            }}
          >
            POURQUOI NOUS CHOISIR ?
          </h2> 

          <div className="row g-4 justify-content-center">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                {/* BLOC DE LA CARTE - Pas de bordure, coins légèrement arrondis, fond gris clair */}
                <div 
                    className="p-4 h-100 d-flex flex-column align-items-center" 
                    style={{ 
                        backgroundColor: '#f5f5f5', 
                        borderRadius: '0.5rem', // Arrondi standard de Bootstrap (rounded-3)
                        padding: '2rem 1rem' // Plus de padding vertical
                    }}
                >
                  
                  {/* ICÔNE - Grande taille, couleur sombre */}
                  <feature.icon size={48} className="mb-3" style={{ color: '#333' }} /> 
                  
                  {/* TITRE (Couleur Jaunâtre) */}
                  <h5 className="fw-bold mb-3" style={{ color: themeColor }}>
                    {feature.title}
                  </h5>
                  
                  {/* TEXTE */}
                  <p className="text-muted" style={{ lineHeight: '1.4' }}>
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : NOS VALEURS */}
      <section 
        className="py-5"
        style={{
          // Image de fond de la section principale (avec opacité)
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${valuesBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '8rem 0', // Grand padding pour donner de l'air
        }}
      >
        <div className="container">
          <div className="row">
            
            {/* BLOC GAUCHE - Image avec coins arrondis */}
            <div className="col-lg-6 position-relative">
              <div 
                className="shadow-lg" 
                style={{ 
                  borderRadius: '15px', 
                  overflow: 'hidden', 
                  // Fixer la hauteur pour bien aligner avec le contenu de droite
                  minHeight: '600px', 
                }}
              >
                {/* Image du bloc gauche */}
                <img 
                  src={valueImage} 
                  alt="Intérieur stylisé" 
                  className="img-fluid w-100 h-100" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            {/* BLOC DROIT - Contenu des Valeurs */}
            <div className="col-lg-6 ps-lg-5 mt-5 mt-lg-0">
              
              {/* TITRE "NOS VALEURS" - Jaunâtre */}
              <h2 
                className="display-4 fw-bold mb-4" 
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  color: themeColor,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.5)' 
                }}
              >
                NOS VALEURS
              </h2>
              
              {/* BLOC DE TEXTE INTRODUCTIF */}
              <p className="lead mb-4 text-white-50" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...
              </p>
              
              {/* BLOC DES ONGLES DE VALEURS (Clé en Main, Design, Sécurité) */}
              <div className="d-flex gap-3 mb-5">
                {valueTabs.map((tab, index) => (
                  <button 
                    key={index}
                    // Le bloc actif (Clé en Main) est jaune, les autres sont gris/blanc
                    className={`btn btn-lg fw-bold d-flex align-items-center rounded-pill ${tab.active ? 'text-white' : 'btn-light'}`}
                    style={{ 
                        backgroundColor: tab.active ? themeColor : 'white',
                        color: tab.active ? 'white' : 'gray',
                        borderColor: tab.active ? themeColor : 'transparent',
                        padding: '10px 20px',
                        boxShadow: tab.active ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                  >
                    <tab.icon size={18} className="me-2" style={{ color: tab.active ? 'white' : '#333' }} /> 
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* BLOC GRISÂTRE DE CONTENU ACTIF */}
              <div className="d-flex align-items-start gap-4">
                
                {/* Bloc gris vide ( Placeholder pour l'image/contenu ) */}
                <div 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    backgroundColor: '#e9ecef', // Gris clair
                    borderRadius: '5px',
                    flexShrink: 0
                  }} 
                >
                  {/* Optionnellement, vous pouvez y mettre une icône ou une petite image ici */}
                </div>

                {/* Texte et Listes */}
                <div>
                  <h4 className="fw-bold mb-3" style={{ color: 'white' }}>
                    Emménagez en un seul jour.
                  </h4>
                  <p className="text-white-75 mb-3" style={{ fontSize: '1.05rem' }}>
                    Tout est prêt pour que vous vous sentiez chez vous.
                  </p>
                  
                  {/* LISTE D'ITEMS AVEC BOULES JAUNÂTRES */}
                  <ul className="list-unstyled">
                    {['Loreipeum Loreipeum', 'Loreipeum Loreipeum', 'Loreipeum Loreipeum'].map((item, index) => (
                      <li key={index} className="d-flex align-items-center mb-1">
                        {/* Boule Jaunâtre (simulée par une icône ou un span stylisé) */}
                        <span 
                          className="me-2" 
                          style={{ 
                            height: '8px', 
                            width: '8px', 
                            backgroundColor: themeColor, 
                            borderRadius: '50%',
                            display: 'inline-block'
                          }}
                        ></span>
                        <span className="text-white-75">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : NOS APPARTEMENTS PHARES */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}> {/* Fond gris très clair */}
        <div className="container">
          
          {/* TITRE DE SECTION */}
          <h2 
            className="fw-normal mb-5 display-5 text-center" 
            style={{ 
                fontFamily: 'Playfair Display, serif', 
                color: '#2c3e50', // Couleur sombre du thème
                letterSpacing: '1px'
            }}
          >
            NOS APPARTEMENTS PHARES
          </h2> 

          {/* GRILLE DES APPARTEMENTS (3 colonnes) */}
          <div className="row g-4 justify-content-center">
            {apartments.map((apt, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                  
                  {/* IMAGE DE LA CARTE */}
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={apt.image} 
                      className="card-img-top w-100 h-100" 
                      alt={apt.type} 
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Placeholder pour les petites icônes en coin si besoin */}
                  </div>

                  {/* CORPS DE LA CARTE */}
                  <div className="card-body d-flex flex-column justify-content-between">
                    
                    <div>
                      {/* TITRE JAUNÂTRE */}
                      <h6 className="card-subtitle mb-1 fw-bold text-uppercase" style={{ color: themeColor, fontSize: '0.8rem' }}>
                        {apt.type}
                      </h6>
                      
                      {/* SOUS-TITRE / EMPLACEMENT */}
                      <h5 className="card-title mb-2 fw-normal" style={{ color: '#333' }}>
                        {apt.title}
                      </h5>
                      
                      {/* TEXTE DES DÉTAILS */}
                      <p className="card-text text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                        {apt.details}
                      </p>
                      
                      {/* PRIX */}
                      <p className="card-text fw-bold" style={{ color: '#555', fontSize: '0.9rem' }}>
                        {apt.price}
                      </p>
                    </div>

                    {/* BOUTON VOIR LE PROJET - Arrondi et Jaunâtre, aligné à droite */}
                    <div className="text-end mt-3">
                      <a 
                        href="/" 
                        className="btn btn-sm px-4 py-2 fw-bold rounded-pill"
                        style={{ 
                          backgroundColor: themeColor, 
                          borderColor: themeColor, 
                          color: 'white',
                          fontSize: '0.9rem'
                        }}
                      >
                        Voir le projet <ArrowRight className="ms-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION : NOS SERVICES */}
      <section className="py-5" style={{ backgroundColor: '#f9f9f9', padding: '100px 0' }}> 
        <div className="container">
          
          {/* CONTENEUR DE CHEVAUCHEMENT DES 2 BLOCS PRINCIPAUX */}
          {/* minHeight augmenté à 750px pour donner plus d'espace aux grands blocs */}
          <div className="position-relative" style={{ minHeight: '750px', marginBottom: '40px' }}>
            
            {/* BLOC DROIT (IMAGE) - En arrière-plan */}
            <div 
              className="position-absolute end-0 top-0 col-lg-7 shadow-lg" 
              style={{
                backgroundImage: `url(${servicesBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px', // HAUTEUR AUGMENTÉE
                borderRadius: '5px',
                zIndex: 1 
              }}
            >
              {/* L'image sert de fond */}
            </div>

            {/* BLOC GAUCHE (NOIR - Titre, Texte) - Superposé et décalé en bas */}
            <div 
              className="position-absolute start-0 top-0 col-lg-8 shadow-lg" 
              style={{ 
                backgroundColor: 'black', 
                color: 'white',
                height: '550px', // HAUTEUR AUGMENTÉE
                marginTop: '150px', // DÉCALAGE VERS LE BAS (Monté à 150px pour plus de chevauchement)
                padding: '4rem',
                borderRadius: '5px',
                zIndex: 5 
              }}
            >
              {/* Contenu du bloc noir... (inchangé) */}
              <h2 
                className="display-4 fw-bold mb-4" 
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  color: themeColor,
                  letterSpacing: '1px'
                }}
              >
                NOS SERVICES
              </h2>
              <p className="lead mb-0 text-white-75" style={{ maxWidth: '90%', fontSize: '1.05rem', lineHeight: '1.8' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              </p>
            </div>
          </div>
          
          {/* LIGNE DES 4 BLOCS SUPERPOSÉS (dans le flux normal du container) */}
          {/* marginTop: -200px (Ajusté) fait remonter la ligne sur les blocs supérieurs. */}
          <div className="row g-0" style={{ marginTop: '-200px', position: 'relative', zIndex: 10 }}> 
              {serviceCards.map((card, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div 
                    className={`p-4 h-100 d-flex flex-column justify-content-between shadow-sm`}
                    style={{ 
                        backgroundColor: card.bg, 
                        color: card.darkText ? 'white' : '#333', 
                        minHeight: '280px',
                        borderRight: index < 3 ? '1px solid #e0e0e0' : 'none' 
                    }}
                  >
                    <div>
                      {/* Titre Jaunâtre */}
                      <h6 className="fw-bold mb-3 text-uppercase" style={{ color: themeColor }}>
                        {card.title}
                      </h6>
                      
                      {/* Texte */}
                      <p style={{ color: card.darkText ? 'white' : '#555', fontSize: '0.9rem' }}>
                        {card.text}
                      </p>
                    </div>

                    {/* Bouton Voir Plus */}
                    <div className="mt-3">
                      <a 
                        href="/" 
                        className="btn btn-outline-dark btn-sm px-4 py-2 fw-bold"
                        style={{ 
                          backgroundColor: card.darkText ? 'black' : 'white', 
                          borderColor: card.darkText ? 'white' : 'black',
                          color: card.darkText ? 'white' : 'black',
                          borderRadius: '0',
                        }}
                      >
                        VOIR PLUS
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : CALL TO ACTION (CTA) */}
      <section className="py-5" style={{ backgroundColor: '#fff' }}> {/* Fond blanc */}
        <div className="container text-center py-5">
          
          {/* Titre Jaunâtre (avec Playfair Display pour l'élégance) */}
          <h2 
            className="fw-normal mb-4 display-4" 
            style={{ 
                fontFamily: 'Playfair Display, serif', 
                color: themeColor,
                letterSpacing: '1px',
                lineHeight: '1.2'
            }}
          >
            PRÊT À TROUVER L'APPARTEMENT DE VOS RÊVES ?
          </h2> 
          
          {/* Texte Descriptif */}
          <p className="lead mb-5" style={{ color: '#333', fontSize: '1.5rem' }}>
            Notre équipe vous accompagne d'A à Z
          </p>

          {/* BOUTON CTA Jaunâtre et arrondi */}
          <a 
            href="/contact" 
            className="btn btn-warning btn-lg px-5 py-3 fw-bold shadow-lg"
            style={{ 
              backgroundColor: themeColor, 
              borderColor: themeColor, 
              borderRadius: '5px', // L'arrondi du bouton est légèrement carré/arrondi
              color: 'white',
              fontSize: '1.2rem',
              // Assurer que le bouton est large
              minWidth: '300px'
            }}
          >
            CONTACTEZ-NOUS DÈS AUJOURD'HUI
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}