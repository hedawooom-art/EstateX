import React, { useState } from 'react';
import './index.css';

const propertiesData = [
  {
    id: 1,
    title: "Modern Family Villa",
    location: "Pune, Maharashtra",
    price: "₹1.25 Cr",
    beds: 3,
    baths: 3,
    area: "2,100 sq.ft.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Apartment",
    location: "Mumbai, Maharashtra",
    price: "₹1.80 Cr",
    beds: 3,
    baths: 2,
    area: "1,650 sq.ft.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Green Valley House",
    location: "Bangalore, Karnataka",
    price: "₹95 Lakh",
    beds: 3,
    baths: 3,
    area: "1,900 sq.ft.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 4,
    title: "City View Apartment",
    location: "Hyderabad, Telangana",
    price: "₹78 Lakh",
    beds: 2,
    baths: 2,
    area: "1,250 sq.ft.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Premium Villa",
    location: "Pune, Maharashtra",
    price: "₹2.10 Cr",
    beds: 4,
    baths: 4,
    area: "2,800 sq.ft.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 6,
    title: "Elegant Family Home",
    location: "Nashik, Maharashtra",
    price: "₹72 Lakh",
    beds: 3,
    baths: 2,
    area: "1,700 sq.ft.",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path>
  </svg>
);

const BathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" y1="5" x2="8" y2="7"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="7" y1="19" x2="7" y2="21"></line><line x1="17" y1="19" x2="17" y2="21"></line>
  </svg>
);

const SquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const PropertyCard = ({ property }) => (
  <div className="property-card">
    <div className="badge">For Sale</div>
    <div className="heart-icon"><HeartIcon /></div>
    <img src={property.image} alt={property.title} className="property-img" />
    <div className="property-content">
      <div className="property-price">{property.price}</div>
      <h3 className="property-title">{property.title}</h3>
      <div className="property-location">
        <LocationIcon /> {property.location}
      </div>
      <div className="property-features">
        <div className="feature"><BedIcon /> {property.beds} Beds</div>
        <div className="feature"><BathIcon /> {property.baths} Baths</div>
        <div className="feature"><SquareIcon /> {property.area}</div>
      </div>
      <button className="btn btn-outline" style={{borderColor: 'var(--primary)', color: 'var(--primary)'}}>View Details</button>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('home')}>HomeNest</div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a className={currentPage === 'home' ? 'active' : ''} onClick={() => navigate('home')}>Home</a></li>
          <li><a className={currentPage === 'properties' ? 'active' : ''} onClick={() => navigate('properties')}>Properties</a></li>
          <li><a onClick={() => {}}>About</a></li>
          <li><a onClick={() => {}}>Contact</a></li>
        </ul>
        
        <div className="nav-actions">
          <button className="btn btn-primary">Login</button>
          <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <MenuIcon />
          </button>
        </div>
      </nav>

      {currentPage === 'home' && (
        <main style={{ flex: 1 }}>
          <section className="hero">
            <h1>Find Your Dream Home</h1>
            <p>Discover beautiful properties at the right price and in the perfect location.</p>
            <div className="hero-btns">
              <button className="btn btn-primary" onClick={() => navigate('properties')}>View Properties</button>
              <button className="btn btn-outline">Contact Us</button>
            </div>
          </section>

          <div className="search-box-wrapper">
            <div className="search-box">
              <div className="search-field">
                <label>Location</label>
                <input type="text" placeholder="City, Area or Zip" />
              </div>
              <div className="search-field">
                <label>Property Type</label>
                <select>
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="search-field">
                <label>Price Range</label>
                <select>
                  <option>Any Price</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50 Lakh - ₹1 Cr</option>
                  <option>Over ₹1 Cr</option>
                </select>
              </div>
              <div className="search-btn-container">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>

          <section className="featured">
            <h2 className="section-title">Featured Properties</h2>
            <div className="properties-grid">
              {propertiesData.filter(p => p.featured).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        </main>
      )}

      {currentPage === 'properties' && (
        <main style={{ flex: 1 }}>
          <div className="page-header">
            <h1>Explore Properties</h1>
          </div>
          
          <div className="filters-section">
            <div className="filters-container search-box" style={{boxShadow: 'none', padding: '0'}}>
              <div className="search-field">
                <label>Location</label>
                <input type="text" placeholder="City, Area or Zip" />
              </div>
              <div className="search-field">
                <label>Property Type</label>
                <select>
                  <option>All Types</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="search-field">
                <label>Price Range</label>
                <select>
                  <option>Any Price</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50 Lakh - ₹1 Cr</option>
                  <option>Over ₹1 Cr</option>
                </select>
              </div>
              <div className="search-btn-container">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>

          <section className="all-properties">
            <div className="properties-grid">
              {propertiesData.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </section>
        </main>
      )}

      <footer>
        <p>&copy; 2026 HomeNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
