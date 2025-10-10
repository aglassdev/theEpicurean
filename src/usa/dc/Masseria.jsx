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
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Navigation Bar */}
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
        zIndex: 1000,
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <a 
          href="/" 
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}>
                        <img 
              src="/images/theepicurean.png" 
              alt="The Epicurean"
              style={{
                width: '150px',
                height: '40px',
                objectFit: 'contain',
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </a>

        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          <button 
            style={{ 
              background: 'none',
              border: 'none',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => {
              window.location.href = '/destinations';
            }}
          >
            Destinations
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Articles
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          onClick={() => {
              window.location.href = '/methodology';
            }}
          >
            Methodology
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Header Images */}
      <div style={{
        width: '100vw',
        height: '70vh',
        marginTop: '92px',
        display: 'flex',
        position: 'relative'
      }}>
        {headerImages?.map((image, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.1)'
            }} />
          </div>
        ))}
      </div>

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        {/* Restaurant Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            margin: '0 0 1.5rem 0',
            color: '#333',
            fontFamily: 'Times New Roman, serif'
          }}>
            {restaurantName}
          </h1>
          
          {/* Bio */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#666',
              margin: 0
            }}>
              {bio}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '1.5rem'
        }}>
          {/* Left Column - Restaurant Details */}
          <div>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              height: 'fit-content'
            }}>
              <p style={{
                fontSize: '1.2rem',
                color: '#333',
                margin: '0 0 1rem 0',
                fontWeight: '400'
              }}>
                {cuisine}
              </p>

              <p style={{
                fontSize: '1.2rem',
                color: '#333',
                margin: '0 0 1.5rem 0',
                fontWeight: '400'
              }}>
                {priceRange}
              </p>

              <p style={{
                fontSize: '1.1rem',
                color: '#333',
                margin: '0 0 1rem 0',
                lineHeight: '1.5'
              }}>
                {address}
              </p>

              <p style={{
                fontSize: '1.1rem',
                color: '#333',
                margin: '0 0 1.5rem 0'
              }}>
                {phoneNumber}
              </p>

              {/* Tags Section */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                {tags?.map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'transparent',
                      border: '1px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '400',
                      color: '#333',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <div style={{
                      width: '16px',
                      height: '16px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {tag.iconUrl ? (
                        <img 
                          src={tag.iconUrl}
                          alt={`${tag.name} icon`}
                          style={{
                            width: '16px',
                            height: '16px',
                            objectFit: 'contain'
                          }}
                        />
                      ) : (
                        <div style={{
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '2px'
                        }} />
                      )}
                    </div>
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Reservation Links */}
          <div>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              height: 'fit-content'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.8rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: '#333',
                    textDecoration: 'none',
                    border: '1px solid #333',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#333';
                  }}
                >
                  Visit Website
                </a>
                
                <div style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}>
                  {reservationProviders?.map((provider, index) => (
                    <a
                      key={index}
                      href={provider.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.6rem',
                        backgroundColor: 'transparent',
                        color: '#333',
                        textDecoration: 'none',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        flex: '1',
                        height: '50px',
                        gap: '0.5rem',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = '#333';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = '#ddd';
                      }}
                    >
                      <div style={{
                        width: '120px',
                        height: '50px',
                        backgroundColor: provider.logo ? 'transparent' : '#f0f0f0',
                        borderRadius: '3px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: '#999',
                        fontWeight: 'bold',
                        marginLeft: '0.5rem'
                      }}>
                        {provider.logo ? (
                          <img 
                            src={provider.logo}
                            alt={`${provider.name} logo`}
                            style={{
                              width: '120px',
                              height: '50px',
                              objectFit: 'contain'
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = provider.name.slice(0, 4).toUpperCase();
                            }}
                          />
                        ) : (
                          provider.name.slice(0, 4).toUpperCase()
                        )}
                      </div>
                      
                      <div style={{
                        backgroundColor: '#333',
                        color: 'white',
                        padding: '0.4rem 1rem',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        marginRight: '0.5rem'
                      }}>
                        Book
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
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
            {awards?.map((award, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                textAlign: 'center'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.2rem'
                }}>
                  {award.name === "Three Michelin Stars" || award.name === "Two Michelin Stars" || award.name === "Michelin Stars" ? 
  renderMichelinStars(award.count) :
  award.image && (
    <img 
      src={award.image}
      alt={award.name}
      style={{
        width: '24px',
        height: '24px',
        objectFit: 'contain'
      }}
    />
  )
}
                  <span style={{
                    fontSize: '1rem',
                    color: '#333',
                    fontWeight: '500'
                  }}>
                    {award.name}
                  </span>
                </div>
                <span style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  lineHeight: '1.2'
                }}>
                  {award.organization}
                </span>
                <span style={{
                  fontSize: '0.8rem',
                  color: '#333'
                }}>
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hours Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'space-between'
          }}>
            {hours && Object.entries(hours).map(([day, times]) => (
              <div key={day} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '120px'
              }}>
                <span style={{
                  fontSize: '1rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem'
                }}>
                  {day}
                </span>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  {times.lunch && (
                    <span style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      textAlign: 'center',
                      lineHeight: '1.2'
                    }}>
                      {times.lunch}
                    </span>
                  )}
                  <span style={{
                    fontSize: '0.85rem',
                    color: '#666',
                    textAlign: 'center',
                    lineHeight: '1.2'
                  }}>
                    {times.dinner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Maps Section */}
        {googleMapsEmbed && (
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              height: '400px'
            }}>
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${restaurantName} Location`}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'white',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: 0,
          fontFamily: 'Times New Roman, serif'
        }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

const Masseria = () => (
  <RestaurantPage
    headerImages={[
      "/images/masseria1.png",
      "/images/masseria2.png"
    ]}
    restaurantName="Masseria by Nicholas Stefanelli"
    address="1340 4th St. NE, Washington, 20002, USA"
    cuisine="Modern Italian"
    priceRange="$$$$ · Prix Fixe · À La Carte" 
    phoneNumber="+1 202 608 1330"
    hours={{
      Monday: { lunch: "", dinner: "Closed" },
      Tuesday: { lunch: "", dinner: "18:00 - 21:30" }, 
      Wednesday: { lunch: "", dinner: "18:00 - 21:30" },
      Thursday: { lunch: "", dinner: "18:00 - 21:30" },
      Friday: { lunch: "", dinner: "18:00 - 21:30" },
      Saturday: { lunch: "", dinner: "17:00 - 21:30" },
      Sunday: { lunch: "", dinner: "Closed" }
    }}
    website="https://www.masseria-dc.com/"
    reservationProviders={[
      { 
        type: "tock", 
        name: "Tock", 
        url: "https://www.exploretock.com/masseria", 
        logo: "/images/tock.png" 
      }
    ]}
    tags={[
      { 
        name: "Vegetarian Friendly", 
        iconUrl: "/images/vegetarian.png" 
      },
             { name: "Extensive Wine List", iconUrl: "/images/wineglass.png" }

    ]}
    awards={[
      {
        name: "One Michelin Star",
        count: 1,
        year: "2025",
        image: "/images/michelinstar.png",
        organization: "Guide Michelin"
      },
      {
        name: "Two Forks Award",
        count: "2",
        year: "2025",
        image: "/images/twoforks.png",
        organization: "Gambero Rosso"
      },
      {
        name: "#24 Best Italian Restaurant in the World",
        count: "Sustainability",
        year: "2025",
        image: "/images/50topItaly.png",
        organization: "50 Top Italy"
      },
      {
        name: "Best of Award of Excellence - Two Glasses",
        count: "Sustainability",
        year: "2025",
        image: "/images/twoglasses.png",
        organization: "Wine Spectator"
      }
    ]}
    bio="Masseria, a Michelin-starred restaurant in Washington, D.C., is the flagship of Chef Nicholas Stefanelli and a celebration of his Italian heritage expressed through modern fine dining. Opened in 2015, the restaurant draws inspiration from the rustic farmhouses of Puglia, known as “masserie,” where family and tradition shape every meal. Stefanelli, a James Beard Award winner and one of the city’s most respected chefs, offers a tasting menu that highlights the richness of Italian cuisine while incorporating seasonal Mid-Atlantic ingredients. Handmade pastas, pristine seafood, and wood-fired meats often take center stage, elevated with contemporary technique and artistic presentation. The dining experience begins the moment guests enter through an unmarked door into a stylish courtyard, leading into a sleek, elegant space that contrasts industrial edges with warm, welcoming touches. With its focus on storytelling, seasonality, and tradition reimagined, Masseria offers a dining journey that feels both luxurious and deeply personal, securing its place as one of Washington’s most essential culinary destinations."
    googleMapsEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6049977947782!2d-77.00179888861894!3d38.909701071603415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b81a7c1c50a7%3A0xd1c661c09e61bdf0!2sMasseria!5e1!3m2!1sen!2sus!4v1755636145792!5m2!1sen!2sus"
    pageTitle="Masseria by Nicholas Stefanelli"
  />
);

export default Masseria;