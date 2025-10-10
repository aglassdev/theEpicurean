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

const CookiesCream = () => (
  <RestaurantPage
    restaurantName="Cookies Cream"
    address="Behrenstraße 55, Berlin, 10117, Germany"
    cuisine="Vegetarian"
    priceRange="€€€€"
    phoneNumber="+493027492940"
    website="https://www.cookiescream.com/"
    tags={[]}
    awards={[
      { name: "Michelin Stars", count: 1, year: "2025", organization: "Guide Michelin" }
    ].filter(Boolean)}
    bio="It doesn't get much more quintessentially Berlin than this trendy restaurant! Finding your way here through the backyard (head for the delivery entrance) to ring the bell at the unassuming door is an adventure in itself! After being welcomed at the bar (perfect for an aperitif or after-dinner drink), climb the old stairs up to the first floor to get to the lively restaurant, which was once a fashionable nightclub. In an industrial-chic setting, savour an all-vegetarian set menu dubbed The Magnificent 7, with the option of enjoying five to seven courses. Meticulously crafted dishes, such as braised peppers, jalapeño and capers, or charcoal-grilled turnip, saffron and olive, balance piquancy and acidity while exploring a variety of textures. You can supplement the menu with a handful of clas..."
    googleMapsEmbed="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Behrenstra%C3%9Fe%2055%2C%20Berlin%2C%2010117%2C%20Germany"
    pageTitle="Cookies Cream"
  />
);

export default CookiesCream;
