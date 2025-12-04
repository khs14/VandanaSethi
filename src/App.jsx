import React, { useState, useEffect } from 'react';
import { Eye, X, Mail, Phone, MessageSquare, ChevronDown, Menu } from 'lucide-react';
import './styles.css';


const App = () => {
  const [selectedArt, setSelectedArt] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    
    const handleKeyDown = (e) => {
      const ctrlKey = e.ctrlKey || e.metaKey;
      
      // Block Developer Tools / Inspect Element / Save / Print / Screenshots
      if (
        // F12 - DevTools
        e.key === 'F12' ||
        // Ctrl+Shift+I / Cmd+Option+I - Inspect Element
        (ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) ||
        // Ctrl+Shift+J / Cmd+Option+J - Console
        (ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j')) ||
        // Ctrl+Shift+C / Cmd+Option+C - Element Picker
        (ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c')) ||
        // Ctrl+U / Cmd+U - View Source
        (ctrlKey && (e.key === 'U' || e.key === 'u')) ||
        // Ctrl+S / Cmd+S - Save Page
        (ctrlKey && (e.key === 'S' || e.key === 's')) ||
        // PrintScreen - Screenshot
        e.key === 'PrintScreen' ||
        // Ctrl+P / Cmd+P - Print
        (ctrlKey && (e.key === 'P' || e.key === 'p'))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
      }
    };

    document.addEventListener('contextmenu', preventDefault);
    document.addEventListener('dragstart', preventDefault);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('dragstart', preventDefault);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
    };
  }, []);

  const artworks = [
  {
    id: 1,
    title: "Ethereal Dawn",
    series: null,
    size: "36 x 48 inches",
    material: "Acrylic on Canvas",
    year: "2024",
    description: "A mesmerizing exploration of light breaking through darkness, capturing the first moments of dawn.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Urban Reflections I",
    series: "Urban Reflections",
    size: "24 x 36 inches",
    material: "Mixed Media on Canvas",
    year: "2024",
    description: "Exploring the interplay of architecture and natural light in a surreal representation.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Urban Reflections II",
    series: "Urban Reflections",
    size: "24 x 36 inches",
    material: "Mixed Media on Canvas",
    year: "2024",
    description: "Continuation of city landscapes through abstract forms and colors.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Urban Reflections III",
    series: "Urban Reflections",
    size: "24 x 36 inches",
    material: "Mixed Media on Canvas",
    year: "2024",
    description: "The final piece capturing the essence of metropolitan energy and movement.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Whispers of Time",
    series: null,
    size: "30 x 40 inches",
    material: "Oil on Canvas",
    year: "2023",
    description: "Reflecting on the passage of time through layered textures and muted tones.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Nature's Symphony I",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Celebrating harmony found in natural landscapes.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Nature's Symphony II",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Exploring organic forms and their emotional depth.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Nature's Symphony III",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "A vibrant celebration of seasonal changes and natural cycles.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Nature's Symphony IV",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Capturing the serenity of mountain vistas at golden hour.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Nature's Symphony V",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Delicate portrayal of forest depths and dappled sunlight.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Nature's Symphony VI",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Exploring the textures and patterns of coastal landscapes.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Nature's Symphony VII",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "A study of autumn colors and their emotional resonance.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&auto=format&fit=crop"
  },
  {
    id: 13,
    title: "Nature's Symphony VIII",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Winter's quiet beauty captured in soft, flowing forms.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1000&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Nature's Symphony IX",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "The awakening of spring through vibrant botanical elements.",
    image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1000&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Nature's Symphony X",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Twilight's magic reflected in natural water formations.",
    image: "https://images.unsplash.com/photo-1472791108553-c9405341e398?w=1000&auto=format&fit=crop"
  },
  {
    id: 16,
    title: "Nature's Symphony XI",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Desert landscapes and their stark, dramatic beauty.",
    image: "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?w=1000&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Nature's Symphony XII",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Misty morning scenes that evoke tranquility and wonder.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1000&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Nature's Symphony XIII",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "Capturing the raw power of stormy skies and dramatic clouds.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1000&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Nature's Symphony XIV",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "The gentle rhythm of rolling hills and pastoral scenes.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1000&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Nature's Symphony XV",
    series: "Nature's Symphony",
    size: "20 x 30 inches",
    material: "Watercolor and Ink",
    year: "2024",
    description: "A culminating piece celebrating the interconnectedness of all natural elements.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop"
  }
];


  const groupedArtworks = artworks.reduce((acc, art) => {
    const key = art.series || 'individual';
    if (!acc[key]) acc[key] = [];
    acc[key].push(art);
    return acc;
  }, {});

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="gallery-container">
      
      <nav className="nav-bar">
        <div className="nav-content">
          <button 
            className="nav-logo-button"
            onClick={() => scrollToSection('intro')}
            aria-label="Go to homepage"
          >
            <img 
              src= "/logo.png"
              alt="Vandana Sethi Logo" 
              className="nav-logo-image"
              draggable="false"
            />
          </button>

          <button 
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <button 
              onClick={() => scrollToSection('intro')}
              className={activeSection === 'intro' ? 'active' : ''}
            >
              Introduction
            </button>
            <button 
              onClick={() => scrollToSection('artwork')}
              className={activeSection === 'artwork' ? 'active' : ''}
            >
              Artwork
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </button>
          </div>
          {mobileMenuOpen && (
              <button 
                type="button"
                className="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            )}
          <div 
            className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      </nav>

      <section id="intro" className="intro-section">
        <div className="intro-content">
          <div className="shine-element shine-1"></div>
          <div className="shine-element shine-2"></div>
          
          <div className="intro-header">
            <h1 className="artist-name">VANDANA SETHI</h1>
            <div className="artist-subtitle">Contemporary Artist</div>
          </div>
          
          <div className="intro-layout">
            <div className="intro-photo-wrapper">
              <div className="intro-photo-frame">
                <div className="intro-photo-spotlight"></div>
                <img 
                  src="/image.jpg"
                  alt="Vandana Sethi"
                  className="intro-photo"
                  draggable="false"
                />
                <div className="intro-photo-border"></div>
              </div>
            </div>
            
            <div className="intro-text-content">
              <div className="intro-text">
                <p>
                  Vandana Sethi is a contemporary artist whose work explores the intersection of light, 
                  color, and emotion. Through her distinctive use of mixed media and bold compositional 
                  choices, she creates pieces that invite viewers into contemplative spaces where 
                  abstraction meets narrative.
                </p>
                <p>
                  Her art has been featured in numerous exhibitions and private collections, 
                  each piece reflecting a deep engagement with the natural world and urban landscapes. 
                  Working primarily with acrylics, oils, and mixed media, Vandana crafts layered 
                  compositions that reveal new dimensions with each viewing.
                </p>
              </div>
            </div>
          </div>
          
          <button 
            className="scroll-indicator"
            onClick={() => scrollToSection('artwork')}
          >
            <span>Explore Artwork</span>
            <ChevronDown className="bounce" size={24} />
          </button>
        </div>
      </section>

      <section id="artwork" className="artwork-section">
        <div className="section-content">
          {Object.entries(groupedArtworks).map(([key, items]) => (
            <div key={key} className="artwork-group">
              <h2 className="section-title">
                {key === 'individual' ? 'Individual Works' : key}
              </h2>
              <div className="artwork-grid">
                {items.map((art) => (
                  <div
                    key={art.id}
                    className="artwork-card"
                    onMouseEnter={() => setHoveredId(art.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setSelectedArt(art)}
                  >
                    <div className="card-inner">
                      <div className={`spotlight ${hoveredId === art.id ? 'active' : ''}`}></div>
                      <div className="image-container">
                        <img
                          src={art.image}
                          alt={art.title}
                          className="artwork-image"
                          draggable="false"
                        />
                        <div className="watermark">VANDANA SETHI © 2025</div>
                      </div>
                      <div className={`artwork-overlay ${hoveredId === art.id ? 'visible' : ''}`}>
                        <div className="overlay-content">
                          <h3 className="artwork-title">{art.title}</h3>
                          <p className="artwork-size">{art.size}</p>
                          <div className="view-details">
                            <Eye size={18} />
                            <span>View Details</span>
                          </div>
                        </div>
                      </div>
                      <div className={`card-border ${hoveredId === art.id ? 'glow' : ''}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-content">
          <div className="shine-element shine-3"></div>
          <h2 className="contact-title">Inquire About Artwork</h2>
          <p className="contact-description">
            Interested in acquiring a piece? Please reach out to discuss availability, 
            pricing, and commission opportunities.
          </p>
          <div className="contact-methods">
            <a href="mailto:parv.vandana@gmail.com" className="contact-button">
              <Mail size={20} />
              <span>Email Inquiry</span>
            </a>
            <a href="tel:+919810976530" className="contact-button">
              <Phone size={20} />
              <span>Call</span>
            </a>
            <a 
              href="https://wa.me/919810976530" 
              className="contact-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {selectedArt && (
        <div className="modal-overlay" onClick={() => setSelectedArt(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedArt(null)}
              className="modal-close"
            >
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image-wrapper">
                <div className="modal-image-container">
                  <img
                    src={selectedArt.image}
                    alt={selectedArt.title}
                    className="modal-image"
                    draggable="false"
                  />
                  <div className="watermark">VANDANA SETHI © 2025</div>
                </div>
              </div>
              
              <div className="modal-details">
                <div>
                  <h2 className="modal-title">{selectedArt.title}</h2>
                  {selectedArt.series && (
                    <p className="modal-series">FROM THE {selectedArt.series.toUpperCase()} SERIES</p>
                  )}
                </div>
                
                <div className="modal-specs">
                  <p><span className="spec-label">Size:</span> {selectedArt.size}</p>
                  <p><span className="spec-label">Material:</span> {selectedArt.material}</p>
                  <p><span className="spec-label">Year:</span> {selectedArt.year}</p>
                </div>
                
                <p className="modal-description">{selectedArt.description}</p>
                
                <div className="modal-actions">
                  <p className="availability-text">Available for Acquisition</p>
                  <div className="modal-buttons">
                    <a href="mailto:parv.vandana@gmail.com" className="modal-button">
                      <Mail size={16} />
                      <span>Email</span>
                    </a>
                    <a href="tel:+919810976530" className="modal-button">
                      <Phone size={16} />
                      <span>Call</span>
                    </a>
                    <a
                      href="https://wa.me/919810976530"
                      className="modal-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;