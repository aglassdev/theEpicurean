import React, { useEffect, useState } from 'react';
import { EpiPage, EpiPageHeader, SmallCaps, Rule, tokens } from './EpiChrome';

const Methodology = () => {
  const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, serif, body, sans } = tokens;
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => { document.title = "Methodology · The Epicurean"; }, []);

  // Active section tracking for the side TOC
  useEffect(() => {
    const ids = ['introduction', 'understanding-the-guide', 'hierarchy-of-awards', 'sources'];
    const onScroll = () => {
      const y = window.scrollY + 200;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // ── Data (preserved from original) ──────────────────────────────
  const guideItems = [
    { title: "Vegetarian Friendly", body: "Restaurants that either have entirely vegetarian prix fixe menus, many vegetarian options on their à la carte menus, or are willing to accommodate vegetarian requests.", icon: "/images/vegetarian.png" },
    { title: "Vegan Friendly", body: "Restaurants that either have entirely vegan prix fixe menus, many vegan options on their à la carte menus, or are willing to accommodate vegan requests.", icon: "/images/vegan.png" },
    { title: "Set Menu", body: "A short selection of dishes from the restaurant, usually 3–5, which come in larger portion sizes, giving you a complete meal.", icon: "" },
    { title: "Tasting Menu", body: "A longer selection of dishes, usually 9+, served in smaller portions, designed to show the entirety of the chef's ability.", icon: "" },
    { title: "Extensive Wine List", body: "Curated wine collections with exceptional variety and quality.", icon: "/images/wineglass.png" },
    { title: "Sustainable", body: "Restaurants committed to environmentally friendly practices and sourcing.", icon: "/images/sustainable.png" },
    { title: "Prix Fixe", body: "Set menu (possibly with variations) that comes at a predetermined set price.", icon: "" },
    { title: "À La Carte", body: "A selection of dishes that can be ordered separately at your will.", icon: "" },
    { title: "Cash Only", body: "Restaurants that only take cash payment.", icon: "/images/cashonly.png" },
    { title: "Farm-to-Table", body: "Restaurants serving dishes with food straight from local farms with minimal preparation to show the quality of the items.", icon: "/images/farmtotable.png" },
    { title: "Family Style", body: "A selection of dishes served in very large portion sizes onto the middle of the table, allowing everyone to share and try everything.", icon: "" },
    { title: "Omakase", body: "Translated to \"I'll leave it up to you\" — a Japanese meal where the chef chooses the highest-quality ingredients and prepares the entire meal in front of you.", icon: "" },
    { title: "$", body: "Meals in the $10–$30 range.", icon: "" },
    { title: "$$", body: "Meals in the $30–$50 range.", icon: "" },
    { title: "$$$", body: "Meals in the $50–$100 range.", icon: "" },
    { title: "$$$$", body: "Meals in the $100–$200 range.", icon: "" },
    { title: "$$$$$", body: "Meals above $200.", icon: "" },
  ];

  const foodAwards = [
    { number: "1", title: "Three Michelin Stars", description: "La crème de la crème of culinary awards, recognizing the world's most exceptional restaurants. Awarded and re-awarded every year by multiple anonymous inspectors. \"Three is only for the gods.\" Three Stars means it is worth a trip just to visit this restaurant alone.", icon: "/images/threestars.png" },
    { number: "2", title: "World's 50 Best", description: "Awarded yearly to the top 50 restaurants globally by a panel of over 1,000 industry experts. Fills the gaps left on the world map by Michelin. A top-10 ranking is considered equal to three Michelin stars if you don't already have them.", icon: "/images/worlds50best.png" },
    { number: "3", title: "Two Michelin Stars", description: "A step down from the coveted three stars, but still as close to perfection as you can get. Some Two-Star restaurants are even regarded as better than their three-star counterparts. \"Two stars means excellent cooking that is worth a detour.\"", icon: "/images/twostars.png" },
    { number: "4", title: "La Liste Top 1000", description: "The most mathematical of all the awards — La Liste ranks the top restaurants in the world based on an algorithm that aggregates over 200 guides, awards, and reviews. Some entries are controversial; once a restaurant is on the list, it is almost impossible to get it off.", icon: "/images/laliste.png" },
    { number: "5", title: "One Michelin Star", description: "The defining moment for a chef and their restaurant. Michelin's One Star is awarded to restaurants that are worthwhile stops — the first rung on the Michelin ladder, putting many exquisite chefs on the culinary map.", icon: "/images/michelinstar.png" },
    { number: "6", title: "Relais & Châteaux Member", description: "Not technically an award, but a prestigious association of luxury hotels and restaurants committed to excellence in hospitality and gastronomy. Membership is by invitation only — only the finest establishments in the world earn one.", icon: "/images/relaischateaux.png" },
    { number: "7", title: "Asia's 50 Best", description: "The regional variation of the World's 50 Best, recognizing the top restaurants in Asia. Slightly less prestigious due to the smaller field, but still a highly coveted award in the region.", icon: "/images/asias50best.png" },
    { number: "8", title: "Latin America's 50 Best", description: "Another regional variation of the World's 50 Best — especially important for the Latin American culinary scene, as the Michelin Guide has not yet expanded into most of the region.", icon: "/images/latams50best.png" },
    { number: "9", title: "Middle East & North Africa's 50 Best", description: "Similar logic to the Latin America's 50 Best. This award highlights the top restaurants in one of the most diverse and culturally rich regions in the world. Relatively new, but it has already gained significant recognition.", icon: "/images/menas50best.png" },
  ];

  const wineAwards = [
    { number: "1", title: "Grand Award of Excellence — Three Glasses", description: "The Michelin Star equivalent of wine. Currently given to only 97 restaurants worldwide, this is the highest honor that can be bestowed upon a restaurant and its sommelier. Restaurants usually have a list exceeding 1,000 bottles, harmonizing with the menu.", icon: "/images/threeglasses.png" },
    { number: "2", title: "Best of Award of Excellence — Two Glasses", description: "The second tier from Wine Spectator. Still the mark of an excellent wine program — restaurants awarded Two Glasses show an excellent breadth of wines from multiple regions and producers, with a minimum of 350 bottles (averaging around 500).", icon: "/images/twoglasses.png" },
    { number: "3", title: "Sommelier of the Year", description: "The James Beard Foundation recognition for excellence in wine selection and service, honoring the best sommelier each year. You usually only win this once — but many say once is enough, as it cements you as a top professional in the field.", icon: "/images/sommelier.png" },
    { number: "4", title: "Award of Excellence — One Glass", description: "Restaurants must offer at least 90 selections, feature a well-chosen assortment of quality producers, and provide a thematic match to the menu in both price and style. Satisfying to any wine aficionado.", icon: "/images/oneglass.png" },
    { number: "5", title: "World's 50 Best Sommelier", description: "Recognition of the world's most accomplished sommelier of the year, awarded by the World's 50 Best academy.", icon: "/images/oneglass.png" },
    { number: "6", title: "Outstanding Wine & Beverages Program", description: "Awarded to establishments with exceptional beverage programs and cocktail innovation.", icon: "/images/jamesbeard.png" },
  ];

  const barAwards = [
    { number: "1", title: "World's 50 Best Bars", description: "The global benchmark for excellence in the bar world.", icon: "/images/worlds50bestbars.png" },
    { number: "2", title: "Spirited Awards", description: "Awarded by the Tales of the Cocktail Foundation, honoring excellence across the spirits industry.", icon: "/images/cocktailfoundation.png" },
    { number: "3", title: "Top 500 Bars", description: "An expansive ranking of the world's best bars, refreshed annually.", icon: "/images/top500bars.png" },
    { number: "4", title: "Asia's 50 Best Bars", description: "The Asian regional ranking complementing the World's 50 Best Bars.", icon: "/images/asias50bestbars.png" },
    { number: "5", title: "North America's 50 Best Bars", description: "The North American regional ranking of the world's best bars.", icon: "/images/nas50bestbars.png" },
    { number: "6", title: "Outstanding Bar Program", description: "The James Beard Foundation recognition for excellence in the bar program.", icon: "/images/jamesbeard.png" },
    { number: "7", title: "The Class Bar Awards", description: "UK-based awards recognizing innovation and craft in the bar industry.", icon: "/images/classbarawards.png" },
    { number: "8", title: "Australian Bartender Awards", description: "Australia's premier awards for the bar industry, celebrating excellence in craft.", icon: "/images/australianbarawards.png" },
    { number: "9", title: "Mixology Bar Awards", description: "Honoring the most innovative mixologists and bar programs worldwide.", icon: "/images/mixologybarawards.png" },
  ];

  const sustainabilityAwards = [
    { number: "1", title: "Green Star", description: "Michelin's recognition for restaurants with outstanding commitment to sustainability.", icon: "/images/greenstar.png" },
    { number: "2", title: "World's Sustainable Restaurant Award", description: "The 50 Best academy's award for the world's most sustainable restaurant.", icon: "/images/worlds50best.png" },
    { number: "3", title: "Untouchables Award", description: "Awarded by Slow Food to restaurants that honor untouchable culinary tradition.", icon: "/images/untouchables.png" },
    { number: "4", title: "Five Radishes Award", description: "We're Smart's highest distinction for plant-forward, sustainable cooking.", icon: "/images/fiveradishes.png" },
    { number: "5", title: "Ethical & Sustainability Award", description: "La Liste's award honoring restaurants that lead in ethical sourcing and sustainability.", icon: "/images/laliste.png" },
    { number: "6", title: "Four Radishes Award", description: "We're Smart's second-highest plant-forward distinction.", icon: "/images/fourradishes.png" },
    { number: "7", title: "Asia's Sustainable Restaurant Award", description: "Asia's 50 Best academy's sustainability honor.", icon: "/images/asias50best.png" },
    { number: "8", title: "Latin America's Sustainable Restaurant Award", description: "Latin America's 50 Best academy's sustainability honor.", icon: "/images/latams50best.png" },
    { number: "9", title: "MENA's Sustainable Restaurant Award", description: "MENA's 50 Best academy's sustainability honor.", icon: "/images/menas50best.png" },
    { number: "10", title: "Food Made Good Award", description: "Sustainable Restaurant Association's recognition for sustainable practice.", icon: "/images/foodmadegood.png" },
    { number: "11", title: "Sustainable Luxury Restaurant Award", description: "Luxury restaurants leading in sustainable practice.", icon: "/images/sustainableluxuryrestaurantawards.png" },
    { number: "12", title: "Three Radishes Award", description: "We're Smart's third-tier plant-forward distinction.", icon: "/images/threeradishes.png" },
    { number: "13", title: "Two Radishes Award", description: "We're Smart's second-tier plant-forward distinction.", icon: "/images/tworadishes.png" },
    { number: "14", title: "Snail of Approval", description: "Slow Food's distinction for restaurants advancing good, clean, fair food.", icon: "/images/snailofapproval.png" },
    { number: "15", title: "One Radish Award", description: "We're Smart's entry distinction for plant-forward cooking.", icon: "/images/oneradish.png" },
    { number: "16", title: "World's Sustainable Bar Award", description: "The 50 Best academy's sustainability honor for bars.", icon: "/images/worlds50bestbars.png" },
    { number: "17", title: "Asia's Sustainable Bar Award", description: "Asia's 50 Best academy's sustainability bar honor.", icon: "/images/asias50bestbars.png" },
    { number: "18", title: "North America's Sustainable Bar Award", description: "North America's 50 Best academy's sustainability bar honor.", icon: "/images/nas50bestbars.png" },
  ];

  const sources = [
    { name: "Michelin Guide", url: "https://guide.michelin.com", icon: "/images/michelin.png" },
    { name: "La Liste", url: "https://laliste.com", icon: "/images/laliste.png" },
    { name: "World's 50 Best", url: "#", icon: "/images/worlds50best.png" },
    { name: "James Beard Foundation", url: "https://jamesbeard.org", icon: "/images/jamesbeard.png" },
    { name: "Asia's 50 Best", url: "#", icon: "/images/asias50best.png" },
    { name: "Forbes Dining", url: "#", icon: "/images/forbes.png" },
    { name: "Latin America's 50 Best", url: "#", icon: "/images/latams50best.png" },
    { name: "The Washington Post Dining", url: "#", icon: "/images/washingtonpost.png" },
    { name: "North America's 50 Best", url: "#", icon: "/images/nas50best.png" },
    { name: "Relais & Châteaux", url: "#", icon: "/images/relaischateaux.png" },
    { name: "MENA's 50 Best", url: "#", icon: "/images/menas50best.png" },
    { name: "Slow Food", url: "#", icon: "/images/slowfood.png" },
    { name: "World's 50 Best Bars", url: "#", icon: "/images/worlds50bestbars.png" },
    { name: "The New York Times Food", url: "#", icon: "/images/nyt.png" },
    { name: "Asia's 50 Best Bars", url: "#", icon: "/images/asias50bestbars.png" },
    { name: "North America's 50 Best Bars", url: "#", icon: "/images/nas50bestbars.png" },
    { name: "Gault & Millau", url: "#", icon: "/images/gaultmillau.png" },
    { name: "AAA Travel", url: "#", icon: "/images/aaatravel.png" },
    { name: "World Culinary Awards", url: "#", icon: "/images/worldculinaryawards.png" },
    { name: "AA Hospitality Awards", url: "#", icon: "/images/aahospitalityawards.png" },
    { name: "Opinionated About Dining", url: "#", icon: "/images/oad.png" },
    { name: "World Luxury Restaurant Awards", url: "#", icon: "/images/wlra.png" },
    { name: "Falstaff", url: "#", icon: "/images/falstaff.png" },
    { name: "We're Smart", url: "#", icon: "/images/weresmart.png" },
    { name: "50 Top Italy", url: "#", icon: "/images/50topItaly.png" },
    { name: "Star Wine List", url: "#", icon: "/images/starwinelist.png" },
    { name: "The World of Fine Wine", url: "#", icon: "/images/worldoffinewine.png" },
    { name: "Restaurant Assoc. of Metropolitan Washington", url: "#", icon: "/images/ramw.png" },
    { name: "Distinguished Restaurants of North America", url: "#", icon: "/images/dirona.png" },
    { name: "Gambero Rosso", url: "#", icon: "/images/gamberorosso.png" },
    { name: "Wine Spectator", url: "#", icon: "/images/winespectator.png" },
    { name: "Food & Wine", url: "#", icon: "/images/foodandwine.png" },
    { name: "Sustainable Restaurant Association", url: "#", icon: "/images/sra.png" },
    { name: "Sustainable Luxury Restaurant Awards", url: "#", icon: "/images/slra1.png" },
    { name: "Tales of the Cocktail Foundation", url: "#", icon: "/images/cocktailfoundation.png" },
    { name: "Top 500 Bars", url: "#", icon: "/images/top500bars.png" },
    { name: "Class Bar Awards", url: "#", icon: "/images/classbarawards.png" },
    { name: "Mixology Bar Awards", url: "#", icon: "/images/mixologybarawards.png" },
    { name: "Australian Bar Awards", url: "#", icon: "/images/australianbarawards.png" },
    { name: "International Restaurant Awards", url: "#", icon: "/images/internationalrestaurantawards.png" },
    { name: "The Food Fetishist", url: "https://www.tiktok.com/@foodfetish", icon: "/images/tiktok.png" },
    { name: "High Speed Dining", url: "https://www.tiktok.com/@highspeeddining", icon: "/images/tiktok.png" },
    { name: "Eating with Tod", url: "https://www.tiktok.com/@eatingwithtod", icon: "/images/tiktok.png" },
    { name: "Jack's Dining Room", url: "https://www.tiktok.com/@jacksdiningroom?lang=en", icon: "/images/tiktok.png" },
  ];

  // ── Sub-components ──────────────────────────────────────────────
  const SectionHeading = ({ kicker, title, italicWord }) => (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <SmallCaps style={{ color: gold }}>{kicker}</SmallCaps>
      <h2 style={{
        fontFamily: serif, fontWeight: 400,
        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
        letterSpacing: '-.01em', lineHeight: 1.08,
        margin: '.6rem 0 1.2rem', color: ink,
      }}>
        {title}
        {italicWord && <> <em style={{ fontStyle: 'italic', color: gold }}>{italicWord}</em></>}
      </h2>
      <div style={{ width: '48px', height: '1px', background: gold, margin: '0 auto' }} />
    </div>
  );

  const SubHeading = ({ children }) => (
    <div style={{ textAlign: 'center', margin: '0 0 2.5rem' }}>
      <SmallCaps style={{ color: inkMute }}>Subsection</SmallCaps>
      <h3 style={{
        fontFamily: serif, fontWeight: 400, fontStyle: 'italic',
        fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
        margin: '.4rem 0', color: ink, letterSpacing: '.01em',
      }}>{children}</h3>
    </div>
  );

  const AwardCard = ({ award }) => (
    <article style={{
      position: 'relative', padding: '1.6rem 1.4rem',
      borderTop: `1px solid ${rule}`,
      display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem',
      alignItems: 'flex-start',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '.7rem', minWidth: '64px', paddingTop: '.2rem',
      }}>
        <span className="epi-award-num" style={{
          fontSize: '2.4rem', letterSpacing: '-.02em',
        }}>
          {String(award.number).padStart(2,'0')}
        </span>
        {award.icon && (
          <img src={award.icon} alt={award.title}
            style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
        )}
      </div>
      <div>
        <h4 style={{
          fontFamily: serif, fontWeight: 500,
          fontSize: '1.25rem', letterSpacing: '-.005em',
          margin: '0 0 .5rem', color: ink, lineHeight: 1.2,
        }}>{award.title}</h4>
        <p style={{
          fontFamily: body, fontSize: '1rem', lineHeight: 1.55,
          color: inkSoft, margin: 0,
        }}>{award.description}</p>
      </div>
    </article>
  );

  const GuideEntry = ({ item }) => (
    <div style={{
      padding: '1.3rem 0',
      borderTop: `1px solid ${rule}`,
      display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem',
      alignItems: 'flex-start',
    }}>
      <div style={{
        width: '28px', height: '28px', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        marginTop: '2px',
      }}>
        {item.icon ? (
          <img src={item.icon} alt={item.title}
            style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
        ) : (
          <span style={{
            display: 'block', width: '6px', height: '6px',
            background: gold, borderRadius: '50%',
          }} />
        )}
      </div>
      <div>
        <h4 style={{
          fontFamily: serif, fontWeight: 500, fontSize: '1.15rem',
          letterSpacing: '-.005em', color: ink,
          margin: '0 0 .35rem',
        }}>{item.title}</h4>
        <p style={{
          fontFamily: body, fontSize: '.95rem', lineHeight: 1.5,
          color: inkSoft, margin: 0,
        }}>{item.body}</p>
      </div>
    </div>
  );

  const sections = [
    ['introduction', 'Introduction'],
    ['understanding-the-guide', 'Understanding the Guide'],
    ['hierarchy-of-awards', 'Hierarchy of Awards'],
    ['sources', 'Sources'],
  ];

  return (
    <EpiPage active="methodology">
      <EpiPageHeader
        sectionLabel="Section IV · Colophon"
        title="On the"
        italicWord="method."
        lede="How The Epicurean is built — from the philosophy of selection to the hundred-plus journals, guides, and awards that inform every entry."
      />

      {/* Sticky table of contents (static on mobile — see .epi-toc-bar) */}
      <section className="epi-toc-bar" style={{
        position: 'sticky', top: '74px', zIndex: 90,
        background: paper,
        borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
        padding: '1rem 2.5rem',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem, 4vw, 4rem)',
          flexWrap: 'wrap',
        }}>
          {sections.map(([id, label], i) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="epi-toc-link"
                style={{
                  background: 'none', border: 'none',
                  fontFamily: sans, fontSize: '10.5px',
                  letterSpacing: '.32em', textTransform: 'uppercase',
                  color: isActive ? gold : ink,
                  borderBottom: isActive ? `1px solid ${gold}` : `1px solid transparent`,
                  cursor: 'pointer', padding: '4px 2px',
                }}>
                <span style={{ color: isActive ? gold : inkMute, marginRight: '.7em' }}>
                  {String(i + 1).padStart(2,'0')}
                </span>
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(3rem, 5vw, 5rem) 2.5rem 0' }}>

        {/* ── Introduction ────────────────────────────────────────────── */}
        <section id="introduction" style={{ marginBottom: 'clamp(5rem, 8vw, 8rem)' }}>
          <SectionHeading kicker="Section I" title="On" italicWord="gastronomy." />

          <p style={{
            fontFamily: body, fontSize: '1.25rem', lineHeight: 1.7,
            color: inkSoft, textAlign: 'left',
            maxWidth: '760px', margin: '0 auto 3rem',
          }}>
            <span style={{
              fontFamily: serif, fontSize: '4.6rem', float: 'left',
              lineHeight: .8, paddingRight: '.5rem', paddingTop: '.45rem',
              color: ink, fontWeight: 500,
            }}>T</span>
            here is a common association between gastronomy and fine dining — and while they are closely connected, the prior does not imply the latter. Gastronomy is simply the art of making good food, and good food can come from anywhere. This guide tries to show that with the largest selection of gastronomic experiences in the world, celebrating hundreds of thousands of talented chefs and delicious dishes across the globe.
          </p>

          <div className="epi-two-col" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', marginTop: '3rem',
            paddingTop: '3rem', borderTop: `1px solid ${rule}`,
          }}>
            {[
              {
                kicker: 'Question I',
                title: 'What defines a good restaurant?',
                body: "It is a hard question to answer, as this selection covers vastly different establishments — from street-food stalls to three Michelin-Starred temples. The overall taste of the food and the quality of ingredients come foremost; they must excel across all selections. Service comes second, as no establishment can excel without great service. Lastly, setting and presentation — although they enrich the experience, good food can come in any form, from anywhere.",
              },
              {
                kicker: 'Question II',
                title: 'Why The Epicurean?',
                body: 'The Epicurean is the definitive source for dining enjoyers — amalgamating more than fifty different sources including awards, guides, associations, and reviewers. Instead of visiting five different sources, here we offer the complete list of remarkable dining and drinking establishments globally, guaranteeing that you will find a selection to your liking.',
              },
            ].map((q) => (
              <div key={q.title}>
                <SmallCaps style={{ color: gold }}>{q.kicker}</SmallCaps>
                <h3 style={{
                  fontFamily: serif, fontWeight: 500,
                  fontSize: '1.65rem', letterSpacing: '-.005em',
                  margin: '.6rem 0 1rem', color: ink, lineHeight: 1.2,
                }}>{q.title}</h3>
                <p style={{ fontFamily: body, fontSize: '1.05rem', lineHeight: 1.65, color: inkSoft, margin: 0 }}>
                  {q.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Understanding the Guide ─────────────────────────────────── */}
        <section id="understanding-the-guide" style={{ marginBottom: 'clamp(5rem, 8vw, 8rem)' }}>
          <SectionHeading kicker="Section II" title="Understanding" italicWord="the Guide." />

          <p style={{
            fontFamily: body, fontSize: '1.1rem', fontStyle: 'italic',
            color: inkSoft, textAlign: 'center',
            maxWidth: '640px', margin: '0 auto 3rem', lineHeight: 1.6,
          }}>
            A glossary of the marks and notes that accompany each entry — what to expect when you arrive at the table.
          </p>

          {/* Glossary grid */}
          <div className="epi-grid-3" style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0 2.5rem', marginBottom: '4rem',
          }}>
            {guideItems.slice(0, 12).map((item) => (
              <GuideEntry key={item.title} item={item} />
            ))}
          </div>

          {/* Price scale */}
          <div style={{ borderTop: `1px solid ${rule}`, paddingTop: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
              <SmallCaps style={{ color: gold }}>Price Scale</SmallCaps>
            </div>
            <div className="epi-grid-5" style={{
              display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0,
            }}>
              {guideItems.slice(-5).map((item, i) => (
                <div key={item.title} style={{
                  padding: '1.4rem 1rem',
                  borderLeft: i === 0 ? 'none' : `1px solid ${rule}`,
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: serif, fontWeight: 500,
                    fontSize: '1.75rem', color: gold, letterSpacing: '.04em',
                    marginBottom: '.4rem',
                  }}>{item.title}</div>
                  <p style={{
                    fontFamily: body, fontSize: '.9rem', lineHeight: 1.4,
                    color: inkSoft, margin: 0,
                  }}>{item.body}</p>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: body, fontSize: '.9rem', fontStyle: 'italic',
              color: inkMute, textAlign: 'center', marginTop: '1.8rem',
            }}>
              Price ranges are based on average cost per person; the actual price may vary by diner and selection.
            </p>
          </div>
        </section>

        {/* ── Hierarchy of Awards ─────────────────────────────────────── */}
        <section id="hierarchy-of-awards" style={{ marginBottom: 'clamp(5rem, 8vw, 8rem)' }}>
          <SectionHeading kicker="Section III" title="The Hierarchy of" italicWord="Awards." />

          <p style={{
            fontFamily: body, fontSize: '1.1rem', fontStyle: 'italic',
            color: inkSoft, textAlign: 'center',
            maxWidth: '640px', margin: '0 auto 4rem', lineHeight: 1.6,
          }}>
            Four disciplines — Food, Wine, Bar, and Sustainability — and the honors that define the world's finest within each.
          </p>

          {[
            { title: 'Food', awards: foodAwards },
            { title: 'Wine', awards: wineAwards },
            { title: 'Bar', awards: barAwards },
            { title: 'Sustainability', awards: sustainabilityAwards },
          ].map((group, gi) => (
            <div key={group.title} style={{ marginBottom: gi < 3 ? 'clamp(4rem, 6vw, 6rem)' : 0 }}>
              <SubHeading>{group.title}</SubHeading>
              <div className="epi-grid-3" style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 2.5rem',
                borderBottom: `1px solid ${rule}`,
              }}>
                {group.awards.map((award) => (
                  <AwardCard key={`${group.title}-${award.number}`} award={award} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Sources ─────────────────────────────────────────────────── */}
        <section id="sources" style={{ marginBottom: 'clamp(5rem, 8vw, 8rem)' }}>
          <SectionHeading kicker="Section IV" title="The" italicWord="Sources." />

          <p style={{
            fontFamily: body, fontSize: '1.1rem', fontStyle: 'italic',
            color: inkSoft, textAlign: 'center',
            maxWidth: '640px', margin: '0 auto 3rem', lineHeight: 1.6,
          }}>
            Every entry in The Epicurean is informed by one or more of the following journals of record.
          </p>

          <div style={{ borderTop: `1px solid ${rule}` }}>
            {sources.map((source, i) => (
              <a
                key={`${source.name}-${i}`}
                href={source.url}
                target={source.url !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr auto auto',
                  alignItems: 'center', gap: '1.5rem',
                  padding: '1rem .5rem',
                  borderBottom: `1px solid ${rule}`,
                  textDecoration: 'none', color: 'inherit',
                  transition: 'background .25s ease, padding-left .25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = paperDeep; e.currentTarget.style.paddingLeft = '1.5rem'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '.5rem'; }}
              >
                <span style={{
                  fontFamily: sans, fontSize: '10px', letterSpacing: '.3em',
                  textTransform: 'uppercase', color: inkMute,
                  fontVariantNumeric: 'lining-nums tabular-nums',
                }}>
                  {String(i + 1).padStart(3,'0')}
                </span>
                <span style={{
                  fontFamily: serif, fontSize: '1.15rem', color: ink,
                  fontWeight: 500, letterSpacing: '-.005em',
                }}>{source.name}</span>
                {source.icon && (
                  <img src={source.icon} alt={source.name}
                    style={{
                      height: '24px', maxWidth: '70px', objectFit: 'contain',
                      opacity: .7,
                    }} />
                )}
                <span style={{
                  fontFamily: sans, fontSize: '10px', letterSpacing: '.32em',
                  textTransform: 'uppercase', color: gold,
                }}>
                  Visit →
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </EpiPage>
  );
};

export default Methodology;
