import React from 'react';

const RestaurantPage = ({
  headerImages,
  restaurantName,
  address,
  cuisine,
  priceRange,
  phoneNumber,
  website,
  reservationProviders,
  tags,
  awards,
  bio,
  googleMapsEmbed,
  pageTitle
}) => {
  React.useEffect(() => {
    document.title = pageTitle || `${restaurantName} - The Epicurean`;
  }, [pageTitle, restaurantName]);

  const renderMichelinStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <img 
        key={index}
        src="/images/michelinstar.png"
        alt="Michelin Star"
        style={{ width: '20px', height: '20px', marginRight: '2px' }}
      />
    ));
  };

  return (
    <div style={{
      fontFamily: 'Times New Roman, serif',
      backgroundColor: 'white',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img 
            src="/images/theepicurean.png" 
            alt="The Epicurean"
            style={{ width: '150px', height: '40px', objectFit: 'contain' }}
          />
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button onClick={() => window.location.href = '/destinations'} 
            style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#333' }}>
            Destinations
          </button>
          <button onClick={() => window.location.href = '/methodology'}
            style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#333' }}>
            Methodology
          </button>
        </div>
      </nav>

      {headerImages && headerImages.length > 0 && (
        <div style={{
          width: '100vw',
          height: '70vh',
          marginTop: '92px',
          display: 'flex'
        }}>
          {headerImages.map((image, index) => (
            <div key={index} style={{
              flex: 1,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          ))}
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '100px auto 0', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
          {restaurantName}
        </h1>
        
        {bio && (
          <p style={{ 
            fontSize: '1.2rem', 
            textAlign: 'center', 
            color: '#666', 
            marginBottom: '3rem',
            lineHeight: '1.8',
            maxWidth: '1000px',
            margin: '0 auto 3rem'
          }}>
            {bio}
          </p>
        )}

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px' }}>
            <p style={{ fontSize: '1.2rem', margin: '0 0 1rem 0', color: '#333' }}>{cuisine}</p>
            <p style={{ fontSize: '1.2rem', margin: '0 0 1.5rem 0', color: '#333' }}>{priceRange}</p>
            <p style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', lineHeight: '1.5', color: '#333' }}>{address}</p>
            {phoneNumber && (
              <p style={{ fontSize: '1.1rem', margin: '0 0 1.5rem 0', color: '#333' }}>{phoneNumber}</p>
            )}
            
            {tags && tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {tags.map((tag, i) => (
                  <div key={i} style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    color: '#333'
                  }}>
                    {tag.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px' }}>
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: '0.8rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#333',
                  textDecoration: 'none',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  textAlign: 'center',
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                Visit Website
              </a>
            )}
            
            {reservationProviders && reservationProviders.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {reservationProviders.map((provider, i) => (
                  <a key={i} href={provider.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '0.8rem 1.5rem',
                      backgroundColor: '#333',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      textAlign: 'center',
                      fontSize: '1rem'
                    }}>
                    Book on {provider.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {awards && awards.length > 0 && (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '3rem', 
              justifyContent: 'center' 
            }}>
              {awards.map((award, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: '0.5rem' 
                }}>
                  {award.name === "Michelin Stars" && (
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {renderMichelinStars(award.count)}
                    </div>
                  )}
                  <span style={{ fontSize: '1rem', color: '#333', fontWeight: '500' }}>
                    {award.name}
                  </span>
                  {award.organization && (
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>
                      {award.organization}
                    </span>
                  )}
                  {award.year && (
                    <span style={{ fontSize: '0.8rem', color: '#333' }}>
                      {award.year}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {googleMapsEmbed && (
          <div style={{ 
            marginTop: '2rem', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>

      <footer style={{
        backgroundColor: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef'
      }}>
        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

const CibusBED = () => (
  <RestaurantPage
    restaurantName="Cibus"
    address="Plaza Primero de Mayo 13, Úbeda, 23400, Spain"
    cuisine="Creative"
    priceRange="€€€"
    phoneNumber="+34641148246"
    website="https://www.restaurantecibus.com"
    tags={[]}
    awards={[
      
    ].filter(Boolean)}
    bio="An unexpected surprise in the centre of Úbeda! The small restaurant, with an open kitchen by the entrance and a dining room with stone walls downstairs that dates back to the 16C, has a philosophy that it classifies as a culinary renaissance”, which is showcased via dishes that are constantly evolving and change with every season. There’s no à la carte; instead, you’ll find two surprise tasting menus entitled Legado and Renacimiento (both with a wine-pairing option). Extra virgin olive oil from Jaén is a constant presence in the dishes served here...."
    googleMapsEmbed="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Plaza%20Primero%20de%20Mayo%2013%2C%20%C3%9Abeda%2C%2023400%2C%20Spain"
    pageTitle="Cibus"
  />
);

export default CibusBED;
