import React from 'react';

const Methodology = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Methodology";
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guideItems = [
    { title: "Vegetarian Friendly", body: "Restaurants that either have entirely vegetarian prix fixe menus, many vegetarian options on their à la carte menus, or the restaurant is willing to accommodate vegetarian requests.", icon: "/images/vegetarian.png" },
    { title: "Vegan Friendly", body: "Restaurants that either have entirely vegan prix fixe menus, many vegan optionson their à la carte menus, or the restaurant is willing to accommodate vegan requests.", icon: "/images/vegan.png" },
    { title: "Set Menu", body: "A short selection of dishes from the restaurant, usually 3-5, which come in larger portion sizes, giving you a complete meal.", icon: "" },
    { title: "Tasting Menu", body: "A longer selection of dishes, usually 9+, served in smaller portions, designed to show the enirety of the chef's ability.", icon: "" },    { title: "Extensive Wine List", body: "Curated wine collections with exceptional variety and quality.", icon: "/images/wineglass.png" },
    { title: "Sustainable", body: "Restaurants committed to environmentally friendly practices and sourcing.", icon: "/images/sustainable.png" },
    { title: "Prix Fixe", body: "Set menu (possibly with variations) that comes at a predetermined set price.", icon: "" },
    { title: "À La Carte", body: "A selection of dishes that can be ordered separately at your will.", icon: "" },
    { title: "Performance", body: "Meals that are more like experiences with visual or auditory aspects to go with their meal.", icon: "/images/performance.png" },
    { title: "Farm-to-Table", body: "Restaurants serving dishes with food straight from local farms with minimal preparation to show the quality of the items.", icon: "/images/farmtotable.png" },
    { title: "Family Style", body: "A selection of dishes are served in very large portion sizes onto the middle of the table, allowing everyone to share and try everything", icon: "" },
    { title: "Omakase", body: "Translated to \"I'll leave it up to you\", is a Japenese meal where the chef chooses the highest quality ingredients and catch and prepares the entire meal in front of you. ", icon: "" },
    { title: "$", body: "Meals in the $10-$30 range.", icon: "" },
    { title: "$$", body: "Meals in the $30-50 range.", icon: "" },
    { title: "$$$", body: "Meals in the $50-100 range.", icon: "" },
    { title: "$$$$", body: "Meals in the $100-200 range.", icon: "" },
    { title: "$$$$$", body: "Meals above $200.", icon: "" },
  ];

  const foodAwards = [
    {
      number: "1",
      title: "Three Michelin Stars",
      description: "La crème de la crème of culinary awards, recognizing the world's most exceptional restaurants. Awarded and reawarded every year by multiple anonymous inspectors, \"Three is only for the gods.\" Three Stars means that it is worth a trip just to visit this restaurant alone.",
      icon: "/images/threestars.png"
    },
    {
      number: "2",
      title: "World's 50 Best",
      description: "Awarded yearly to the top 50 restaurants globally by a panel of over 1,000 industry experts. Filled in the gaps on the world map left by Michelin. A top 10 ranking is conisidered equal to three Michelin stars if you don't already have them.",
      icon: "/images/worlds50best.png"
    },
    {
      number: "3",
      title: "Two Michelin Stars",
      description: "A step down from the coveted three stars, but it is still as close to perfection as you can get. Some Two Star restaurants are even regarded as better than their three-star counterparts. \"Two stars means excellent cooking that is worth a detour.\"",
        icon: "/images/twostars.png"
    },
    {
      number: "4",
      title: "La Liste Top 1000",
      description: "The most mathematical of all the awards, La Liste ranks the top restaurants in the world based on an algorithm that aggregates over 200 guides, awards, and reviews. Some entries on here are highly controversial however, as once a restaurant is on the list, it is almost impossible to get it off.",
      icon: "/images/laliste.png"
    },
    {
      number: "5",
      title: "One Michelin Star",
      description: "The defining moment for a chef and their restaurant, Michelin's One Star is awarded to restaurants that are worthwhile stops. It is the first step on the Michelin ladder, and can put many exquisite chefs on the culinary map.",
      icon: "/images/michelinstar.png"
    },
    {
      number: "6", 
      title: "Relais & Châteaux Member",
      description: "It is sort of cheating having this here as it is not an actual award, but it is a prestigious association of luxury hotels and restaurants that are committed to excellence in hospitality and gastronomy. Membership is by invitation only and only the finest establishments in the world can get one.",
      icon: "/images/relaischateaux.png"
    },,
    {
      number: "7", 
      title: "Asia's 50 Best",
      description: "The regional variation of the World's 50 Best, this award recognizes the top restaurants in Asia. While slightly less prestigious due to the smaller field of restaurants, it is still a highly coveted award in the region.",
      icon: "/images/asias50best.png"
    },
    {
      number: "8", 
      title: "Latin America's 50 Best",
      description: "Another regional variation of the World's 50 Best, this one is especially important for the Latin American culinary scene as the Michelin Guide has not yet expanded into most of the region.",
      icon: "/images/latams50best.png"
    },
    {
      number: "9", 
      title: "Middle East & North Africa's 50 Best",
      description: "Similar logic to the Latin America's 50 Best, this award highlights the top restaurants in one of the most diverse and culturally rich regions in the world. It is a relatively new award, but it has already gained significant recognition.",
      icon: "/images/menas50best.png"
    }
  ];

  const wineAwards = [
    {
      number: "1",
      title: "Grand Award of Excellence - Three Glasses",
      description: "The Michelin Star equivalent of wine. This award is currently given to only 97 restaurants worldwide, and is the highest honor that can be bestowed upon a restaurant and its sommelier. Restaurants usually have a list exceeding 1,000 bottles and make their selections to harmonize with the menu.",
      icon: "/images/threeglasses.png"
    },
    {
      number: "2",
      title: "Best of Award of Excellence - Two Glasses",
      description: "The second tier of awards from Wine Spectator, this is still the mark of a excellent wine program, restaurants awarded Two Glasses show an excellent breadth of wines from multiple regions and producers. These restaurants have a minimum of 350 bottles but tend to average around 500.",
      icon: "/images/twoglasses.png"
    },
    {
      number: "3",
      title: "Sommelier of the Year Award",
      description: "The Michelin recognition award for excellence in wine selection and service, this award honors the best sommelier each year. While you usually only win this award once, many say that is enough as it cements you as a top professional in the field.",
      icon: "/images/sommelier.png"
    },
    {
      number: "4",
      title: "Award of Excellence - One Glass",
      description: "Restaurants that qualify must offer at least 90 selections, feature a well-chosen assortment of quality producers, along with a thematic match to the menu in both price and style. These restaurants should still be satisfying to any wine officionado.",
      icon: "/images/oneglass.png"
    },
    {
      number: "5",
      title: "World's 50 Best Sommelier",
      description: "Restaurants that qualify must offer at least 90 selections, feature a well-chosen assortment of quality producers, along with a thematic match to the menu in both price and style. These restaurants should still be satisfying to any wine officionado.",
      icon: "/images/oneglass.png"
    },
    {
      number: "6",
      title: "Outstanding Wine and Other Beverages Program",
      description: "Awarded to establishments with exceptional beverage programs and cocktail innovation.",
      icon: "/images/jamesbeard.png"
    }
  ];

  const barAwards = [
    {
        number: "1",
        title: "World's 50 Best Bars",
        description: "",
        icon: "/images/worlds50bestbars.png",
    },
    {
        number: "2",
        title: "Spirited Awards",
        description: "",
        icon: "/images/cocktailfoundation.png",
    },
    {
        number: "3",
        title: "Top 500 Bars",
        description: "",
        icon: "/images/top500bars.png",
    },
    {
        number: "4",
        title: "Asia's 50 Best Bars",
        description: "",
        icon: "/images/asias50bestbars.png",
    },
    {
        number: "5",
        title: "North America's 50 Best Bars",
        description: "",
        icon: "/images/nas50bestbars.png",
    },
    {
        number: "6",
        title: "Outstanding Bar Program",
        description: "",
        icon: "/images/jamesbeard.png",
    },
    {
        number: "7",
        title: "The Class Bar Awards",
        description: "",
        icon: "/images/classbarawards.png",
    },
    {
        number: "8",
        title: "Australian Bartender Awards",
        description: "",
        icon: "/images/australianbarawards.png",
    },
    {
        number: "9",
        title: "Mixology Bar Awards",
        description: "",
        icon: "/images/mixologybarawards.png",
    },
  ]
  const sustainabilityAwards = [
    {
      number: "1",
      title: "Green Star",
      description: "Michelin's recognition for restaurants with outstanding commitment to sustainability.",
      icon: "/images/greenstar.png"
    },
    {
      number: "2",
      title: "World's Sustainable Restaurant Award",
      description: ".",
      icon: "/images/worlds50best.png"
    },
    {
      number: "3",
      title: "Untouchables Award",
      description: ".",
      icon: "/images/untouchables.png"
    },
    {
      number: "4",
      title: "Five Radishes Award",
      description: ".",
      icon: "/images/fiveradishes.png"
    },
    {
      number: "5",
      title: "Ethical & Sustainability Award",
      description: ".",
      icon: "/images/laliste.png"
    },
    {
      number: "6",
      title: "Four Radishes Award",
      description: ".",
      icon: "/images/fourradishes.png"
    },

    {
      number: "7",
      title: "Asia's Sustainable Restaurant Award",
      description: ".",
      icon: "/images/asias50best.png"
    },
    {
      number: "8",
      title: "Latin America's Sustainable Restaurant Award",
      description: ".",
      icon: "/images/latams50best.png"
    },
    {
      number: "9",
      title: "Middle East & North Africa's Sustainable Restaurant Award",
      description: ".",
      icon: "/images/menas50best.png"
    },

    {
      number: "10",
      title: "Food Made Good Award",
      description: ".",
      icon: "/images/foodmadegood.png"
    },
    {
      number: "11",
      title: "Sustainable Luxury Restaurant Award",
      description: ".",
      icon: "/images/sustainableluxuryrestaurantawards.png"
    },
    {
      number: "12",
      title: "Three Radishes Award",
      description: ".",
      icon: "/images/threeradishes.png"
    },
    {
      number: "13",
      title: "Two Radishes Award",
      description: ".",
      icon: "/images/tworadishes.png"
    },
    {
      number: "14",
      title: "Snail Of Approval",
      description: ".",
      icon: "/images/snailofapproval.png"
    },
    {
      number: "15",
      title: "One Radish Award",
      description: ".",
      icon: "/images/oneradish.png"
    },
    
    {
      number: "16",
      title: "World's Sustainable Bar Award",
      description: ".",
      icon: "/images/worlds50bestbars.png"
    },
    {
      number: "17",
      title: "Asia's Sustainable Bar Award",
      description: ".",
      icon: "/images/asias50bestbars.png"
    },
    {
      number: "18",
      title: "North America's Sustainable Bar Award",
      description: ".",
      icon: "/images/nas50bestbars.png"
    },
  ];

  const sources = [
    { name: "Michelin Guide", link: "Website", url: "https://guide.michelin.com", icon: "/images/michelin.png" },
    { name: "La Liste", link: "Website", url: "https://laliste.com", icon: "/images/laliste.png" },
    { name: "World's 50 Best", link: "Website", url: " ", icon: "/images/worlds50best.png" },
    { name: "James Beard Foundation", link: "Wesbite", url: "https://jamesbeard.org", icon: "/images/jamesbeard.png" },
    { name: "Asia's's 50 Best", link: "Website", url: " ", icon: "/images/asias50best.png" },
    { name: "Forbes Dining", link: "Website", url: " ", icon: "/images/forbes.png" },
    { name: "Latin America's 50 Best", link: "Website", url: " ", icon: "/images/latams50best.png" },
    { name: "The Washington Post Dining", link: "Website", url: " ", icon: "/images/washingtonpost.png" },
    { name: "North America's 50 Best", link: "Website", url: " ", icon: "/images/nas50best.png" },
    { name: "Relais & Châteaux", link: "Website", url: " ", icon: "/images/relaischateaux.png" },
    { name: "Middle East & North Africa's 50 Best", link: "Website", url: " ", icon: "/images/menas50best.png" },
    { name: "Slow Food", link: "Website", url: " ", icon: "/images/slowfood.png" },
    { name: "World's 50 Best Bars", link: "Website", url: " ", icon: "/images/worlds50bestbars.png" },
    { name: "The New York Times Food", link: "Website", url: " ", icon: "/images/nyt.png" },
    { name: "Asia's 50 Best Bars", link: "Website", url: " ", icon: "/images/asias50bestbars.png" },
    { name: "North America's 50 Best Bars", link: "Website", url: " ", icon: "/images/nas50bestbars.png" },
    { name: "Gault & Millau", link: "Website", url: "", icon: "/images/gaultmillau.png" },
    { name: "AAA Travel", link: "Website", url: "", icon: "/images/aaatravel.png" },
    { name: "World Culinary Awards", link: "Website", url: "", icon: "/images/worldculinaryawards.png" },
    { name: "AA Hospitality Awards", link: "Website", url: "", icon: "/images/aahospitalityawards.png" },
    { name: "Opinionated About Dining", link: "Website", url: "", icon: "/images/oad.png" },
    { name: "World Luxury Restaurant Awards", link: "Website", url: "", icon: "/images/wlra.png" },
    { name: "Falstaff", link: "Website", url: "", icon: "/images/falstaff.png" },
    { name: "We're Smart", link: "Website", url: "", icon: "/images/weresmart.png" },
    { name: "50 Top Italy", link: "Website", url: "", icon: "/images/50topItaly.png" },
    { name: "Star Wine List", link: "Website", url: "", icon: "/images/starwinelist.png" },
    { name: "The World of Fine Wine", link: "Website", url: "", icon: "/images/worldoffinewine.png" },
    { name: "Restaurant Association of Metropolitain Washington", link: "Website", url: "", icon: "/images/ramw.png" },
    { name: "Distinguished Restaurants of North America", link: "Website", url: "", icon: "/images/dirona.png" },
    { name: "Gambero Rosso", link: "Website", url: "", icon: "/images/gamberorosso.png" },
    { name: "Wine Spectator", link: "Website", url: "", icon: "/images/winespectator.png" },
    { name: "Food & Wine", link: "Website", url: "", icon: "/images/foodandwine.png" },
    { name: "Sustainable Restaurant Association", link: "Website", url: "", icon: "/images/sra.png" },
    { name: "Sustainable Luxury Restaurant Awards", link: "Website", url: "", icon: "/images/slra1.png" },
    { name: "Tales of the Cocktail Foundation", link: "Website", url: "", icon: "/images/cocktailfoundation.png" },
    { name: "Top 500 Bars", link: "Website", url: "", icon: "/images/top500bars.png" },
    { name: "Class Bar Awards", link: "Website", url: "", icon: "/images/classbarawards.png" },
    { name: "Mixology Bar Awards", link: "Website", url: "", icon: "/images/mixologybarawards.png" },
    { name: "Australain Bar Awards", link: "Website", url: "", icon: "/images/australianbarawards.png" },
    { name: "International Restaurant Awards", link: "Website", url: "", icon: "/images/internationalrestaurantawards.png"},
    { name: "The Food Fetishist", link: "Website", url: "https://www.tiktok.com/@foodfetish", icon: "/images/tiktok.png" },
    { name: "High Speed Dining", link: "Website", url: "https://www.tiktok.com/@highspeeddining", icon: "/images/tiktok.png" },
    { name: "Eating with Tod", link: "Website", url: "https://www.tiktok.com/@eatingwithtod", icon: "/images/tiktok.png" },
    { name: "Jack's Dining Room", link: "Website", url: "https://www.tiktok.com/@jacksdiningroom?lang=en", icon: "/images/tiktok.png" },
  ];

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

      {/* Main Content */}
      <div style={{
        marginTop: '92px',
        maxWidth: '1200px',
        margin: '92px auto 0 auto',
        padding: '4rem 2rem'
      }}>
        {/* Main Title */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 0 3rem 0',
          color: '#333',
          fontFamily: 'Times New Roman, serif'
        }}>
          Methodology
        </h1>

        {/* Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          padding: '1.5rem 0',
          borderTop: '1px solid #e9ecef',
          borderBottom: '1px solid #e9ecef',
          marginBottom: '3rem'
        }}>
          {['Introduction', 'Understanding the Guide', 'Hierarchy of Awards', 'Sources'].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.1rem',
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
              {item}
            </button>
          ))}
        </div>

        {/* Introduction Section */}
        <section id="introduction" style={{ marginBottom: '8rem' }}>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#666',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 3rem auto'
          }}>
            There is a common association between gastronomy and fine dining. And while they are very much connected, the prior doesn't imply the latter. 
            Gastronomy is simply the art of making good food, and good food can truly come from anywhere. 
            This guide tries to show that with the largest selection of gastronomic experiences in the world, 
            celebrating hundreds of thousands of talented chefs and delicious dishes across the globe.
          </p>

          {/* Two Side-by-Side Sub Sections */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            marginTop: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '1rem'
              }}>
                What defines a good restaurant?
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                It is a very hard question to answer as this selection covers vastly different establishments from street food stalls to Three Michelin Star restaurants.  The overall taste of the food and the quality of ingredients come foremost as that must be excelling across all selections. Service comes second as no establishment can excel without great service. Lastly comes setting and presentation, as although it makes the experience better, good food can come in any form from anywhere.
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '1rem'
              }}>
                Why The Epicurean?
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#666'
              }}>
                The Epicurean is the definitive source for dining enjoyers as it amalgamates more than fifty different sources including Awards, Guides, Associations, and Reviewers. Instead of visiting five different sources, here we offer the complete list of amazing dining and drinking establishments globally, guarenteeing that you will find a selection to your liking.
              </p>
            </div>
          </div>
        </section>

                {/* Understanding the Guide Section */}
        <section id="understanding-the-guide" style={{ marginBottom: '8rem' }}>
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 0 2rem 0',
            color: '#333'
          }}>
            Understanding the Guide
          </h2>

          {/* First row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {guideItems.slice(0, 4).map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                {item.icon && (
                  <img 
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: '20px',
                      height: '20px',
                      objectFit: 'contain',
                      marginTop: '2px'
                    }}
                  />
                )}
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    color: '#666',
                    margin: 0
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {guideItems.slice(4, 8).map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                {item.icon && (
                  <img 
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: '20px',
                      height: '20px',
                      objectFit: 'contain',
                      marginTop: '2px'
                    }}
                  />
                )}
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    color: '#666',
                    margin: 0
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {guideItems.slice(8, 12).map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                {item.icon && (
                  <img 
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: '20px',
                      height: '20px',
                      objectFit: 'contain',
                      marginTop: '2px'
                    }}
                  />
                )}
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    color: '#666',
                    margin: 0
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Price indicators row - thinner cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1.2rem'
          }}>
            {guideItems.slice(-5).map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}>
                {item.icon && (
                  <img 
                    src={item.icon}
                    alt={item.title}
                    style={{
                      width: '20px',
                      height: '20px',
                      objectFit: 'contain',
                      marginTop: '2px'
                    }}
                  />
                )}
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    color: '#666',
                    margin: 0
                  }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: '#666',
            textAlign: 'center',
            marginTop: '1rem',
            margin: '1rem 0 0 0'
          }}>
            Price ranges are based on average cost per person, but prices may be higher or lower depending on the individual diner.
          </p>
        </section>

        {/* Hierarchy of Awards Section */}
        <section id="hierarchy-of-awards" style={{ marginBottom: '8rem' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 0 4rem 0',
            color: '#333'
          }}>
            Hierarchy of Awards
          </h2>

          {/* Food Subsection */}
          <div style={{ marginBottom: '6rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0 0 2rem 0',
              color: '#333'
            }}>
              Food
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3rem'
            }}>
              {foodAwards.map((award, index) => (
                <div key={index} style={{
                  position: 'relative',
                  paddingLeft: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-15px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    #{award.number}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    {award.icon && (
                      <img 
                        src={award.icon}
                        alt={award.title}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#333',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {award.title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        color: '#666',
                        margin: 0
                      }}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks Subsection */}
          <div style={{ marginBottom: '6rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0 0 2rem 0',
              color: '#333'
            }}>
              Wine
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3rem'
            }}>
              {wineAwards.map((award, index) => (
                <div key={index} style={{
                  position: 'relative',
                  paddingLeft: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-15px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    #{award.number}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    {award.icon && (
                      <img 
                        src={award.icon}
                        alt={award.title}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#333',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {award.title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        color: '#666',
                        margin: 0
                      }}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drinks Subsection */}
          <div style={{ marginBottom: '6rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0 0 2rem 0',
              color: '#333'
            }}>
              Bar
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3rem'
            }}>
              {barAwards.map((award, index) => (
                <div key={index} style={{
                  position: 'relative',
                  paddingLeft: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-15px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    #{award.number}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    {award.icon && (
                      <img 
                        src={award.icon}
                        alt={award.title}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#333',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {award.title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        color: '#666',
                        margin: 0
                      }}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Subsection */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              textAlign: 'center',
              margin: '0 0 2rem 0',
              color: '#333'
            }}>
              Sustainability
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3rem'
            }}>
              {sustainabilityAwards.map((award, index) => (
                <div key={index} style={{
                  position: 'relative',
                  paddingLeft: '1rem'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-15px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    #{award.number}
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    {award.icon && (
                      <img 
                        src={award.icon}
                        alt={award.title}
                        style={{
                          width: '48px',
                          height: '48px',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                    <div>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: 'bold',
                        color: '#333',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {award.title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.5',
                        color: '#666',
                        margin: 0
                      }}>
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sources Section */}
        <section id="sources">
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: '0 0 2rem 0',
            color: '#333'
          }}>
            Sources
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem'
            }}>
              {sources.filter((_, index) => index % 2 === 0).map((source, index) => (
                <div key={`left-${index}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  height: '24px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {source.icon && (
                      <img 
                        src={source.icon}
                        alt={source.name}
                        style={{
                          width: '50px',
                          height: '24px',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#333'
                    }}>
                      {source.name}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      —
                    </span>
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        color: '#007bff',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                      {source.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem'
            }}>
              {sources.filter((_, index) => index % 2 === 1).map((source, index) => (
                <div key={`right-${index}`} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  height: '24px'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {source.icon && (
                      <img 
                        src={source.icon}
                        alt={source.name}
                        style={{
                          width: '50px',
                          height: '24px',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#333'
                    }}>
                      {source.name}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      color: '#666'
                    }}>
                      —
                    </span>
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '1rem',
                        color: '#007bff',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                      onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
                    >
                      {source.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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

export default Methodology;