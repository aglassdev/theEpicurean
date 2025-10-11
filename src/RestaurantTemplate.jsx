import React from 'react';

const RestaurantPage = ({
  headerImages,
  restaurantName,
  address,
  cuisine,
  priceRange,
  phoneNumber,
  hours,
  website,
  reservationProviders,
  tags,
  awards,
  bio,
  googleMapsEmbed,
  pageTitle
}) => {
  // Set document title if provided
  React.useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    } else {
      document.title = `${restaurantName} - Huate`;
    }
  }, [pageTitle, restaurantName]);

  const renderMichelinStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <img 
        key={index}
        src="/images/michelinstar.png"
        alt="Michelin Star"
        style={{ 
          width: '20px',
          height: '20px',
          marginRight: '2px'
        }}
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
      padding: 0,
      overflowX: 'hidden'
    }}>
      {/* Header Images */}
      {headerImages && headerImages.length > 0 && (
        <div style={{
          width: '100%',
          height: '400px',
          display: 'flex',
          overflow: 'hidden'
        }}>
          {headerImages.map((image, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        {/* Restaurant Name */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'normal',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          {restaurantName}
        </h1>

        {/* Basic Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px'
        }}>
          {address && (
            <div>
              <strong>Address:</strong>
              <div>{address}</div>
            </div>
          )}
          {cuisine && (
            <div>
              <strong>Cuisine:</strong>
              <div>{cuisine}</div>
            </div>
          )}
          {priceRange && (
            <div>
              <strong>Price Range:</strong>
              <div>{priceRange}</div>
            </div>
          )}
          {phoneNumber && (
            <div>
              <strong>Phone:</strong>
              <div><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></div>
            </div>
          )}
          {hours && (
            <div>
              <strong>Hours:</strong>
              <div>{hours}</div>
            </div>
          )}
          {website && (
            <div>
              <strong>Website:</strong>
              <div><a href={website} target="_blank" rel="noopener noreferrer">Visit Website</a></div>
            </div>
          )}
        </div>

        {/* Reservation Providers */}
        {reservationProviders && reservationProviders.length > 0 && (
          <div style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h3>Make a Reservation</h3>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {reservationProviders.map((provider, index) => (
                <a
                  key={index}
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#000',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px'
                  }}
                >
                  {provider.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    padding: '5px 15px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Awards */}
        {awards && awards.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Awards & Recognition</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {awards.map((award, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '15px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px'
                  }}
                >
                  {award.image && (
                    <img
                      src={award.image}
                      alt={award.organization}
                      style={{
                        width: '60px',
                        height: '60px',
                        marginRight: '20px',
                        objectFit: 'contain'
                      }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                      {award.name === 'Michelin Stars' && award.count && renderMichelinStars(parseInt(award.count))}
                      {award.name !== 'Michelin Stars' && award.name}
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      {award.organization} {award.year && `• ${award.year}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bio */}
        {bio && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>About</h2>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              textAlign: 'justify'
            }}>
              {bio}
            </p>
          </div>
        )}

        {/* Google Maps */}
        {googleMapsEmbed && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Location</h2>
            <iframe
              src={googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
