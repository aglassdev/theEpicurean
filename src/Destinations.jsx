import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveMap from './InteractiveMap';
import { EpiPage, EpiPageHeader, SmallCaps, Rule, tokens } from './EpiChrome';

const Destinations = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, serif, body, sans } = tokens;

  useEffect(() => { document.title = "Destinations · The Epicurean"; }, []);

  // Destinations data preserved (truncated only structurally — same content)
  const destinationsByCountry = {
    'United States': {
      'Alabama': {}, 'Alaska': {}, 'Arizona': {}, 'Arkansas': {},
      'California': {
        'Napa Valley': { path: '/usa/california/napa-valley/restaurants' },
        'Alameda': { path: '/usa/california/alameda/restaurants' },
        'Alhambra': { path: '/usa/california/alhambra/restaurants' },
        'Anaheim': { path: '/usa/california/anaheim/restaurants' },
        'Aptos': { path: '/usa/california/aptos/restaurants' },
        'Arcadia': { path: '/usa/california/arcadia/restaurants' },
        'Atherton': { path: '/usa/california/atherton/restaurants' },
        'Bell Gardens': { path: '/usa/california/bell-gardens/restaurants' },
        'Belmont': { path: '/usa/california/belmont/restaurants' },
        'Berkeley': { path: '/usa/california/berkeley/restaurants' },
        'Beverly Hills': { path: '/usa/california/beverly-hills/restaurants' },
        'Big Sur': { path: '/usa/california/big-sur/restaurants' },
        'Bodega Bay': { path: '/usa/california/bodega-bay/restaurants' },
        'Boonville': { path: '/usa/california/boonville/restaurants' },
        'Buena Park': { path: '/usa/california/buena-park/restaurants' },
        'Burlingame': { path: '/usa/california/burlingame/restaurants' },
        'Calistoga': { path: '/usa/california/calistoga/restaurants' },
        'Campbell': { path: '/usa/california/campbell/restaurants' },
        'Carlsbad': { path: '/usa/california/carlsbad/restaurants' },
        'Carmel-by-the-Sea': { path: '/usa/california/carmel-by-the-sea/restaurants' },
        'Carmel Valley': { path: '/usa/california/carmel-valley/restaurants' },
        'Cerritos': { path: '/usa/california/cerritos/restaurants' },
        'City of Industry': { path: '/usa/california/city-of-industry/restaurants' },
        'Coronado': { path: '/usa/california/coronado/restaurants' },
        'Corte Madera': { path: '/usa/california/corte-madera/restaurants' },
        'Costa Mesa': { path: '/usa/california/costa-mesa/restaurants' },
        'Culver City': { path: '/usa/california/culver-city/restaurants' },
        'Cupertino': { path: '/usa/california/cupertino/restaurants' },
        'Daly City': { path: '/usa/california/daly-city/restaurants' },
        'Del Mar': { path: '/usa/california/del-mar/restaurants' },
        'El Cerrito': { path: '/usa/california/el-cerrito/restaurants' },
        'El Granada': { path: '/usa/california/el-granada/restaurants' },
        'Elk': { path: '/usa/california/elk/restaurants' },
        'Encinitas': { path: '/usa/california/encinitas/restaurants' },
        'Encino': { path: '/usa/california/encino/restaurants' },
        'Fairfax': { path: '/usa/california/fairfax/restaurants' },
        'Forestville': { path: '/usa/california/forestville/restaurants' },
        'Fullerton': { path: '/usa/california/fullerton/restaurants' },
        'Garden Grove': { path: '/usa/california/garden-grove/restaurants' },
        'Gardena': { path: '/usa/california/gardena/restaurants' },
        'Geyserville': { path: '/usa/california/geyserville/restaurants' },
        'Glen-Ellen': { path: '/usa/california/glen-ellen/restaurants' },
        'Glendale': { path: '/usa/california/glendale/restaurants' },
        'Half Moon Bay': { path: '/usa/california/half-moon-bay/restaurants' },
        'Hayward': { path: '/usa/california/hayward/restaurants' },
        'Healdsburg': { path: '/usa/california/healdsburg/restaurants' },
        'Hermosa Beach': { path: '/usa/california/hermosa-beach/restaurants' },
        'Hollywood': { path: '/usa/california/hollywood/restaurants' },
        'Huntington Beach': { path: '/usa/california/huntington-beach/restaurants' },
        'Inglewood': { path: '/usa/california/inglewood/restaurants' },
        'Inverness': { path: '/usa/california/inverness/restaurants' },
        'Kentfield': { path: '/usa/california/kentfield/restaurants' },
        'La Jolla': { path: '/usa/california/la-jolla/restaurants' },
        'La Puente': { path: '/usa/california/la-puente/restaurants' },
        'Lafayette': { path: '/usa/california/lafayette/restaurants' },
        'Laguna Beach': { path: '/usa/california/laguna-beach/restaurants' },
        'Larkspur': { path: '/usa/california/larkspur/restaurants' },
        'Livermore': { path: '/usa/california/livermore/restaurants' },
        'Long Beach': { path: '/usa/california/long-beach/restaurants' },
        'Los Alamos': { path: '/usa/california/los-alamos/restaurants' },
        'Los Altos': { path: '/usa/california/los-altos/restaurants' },
        'Los Angeles': { path: '/usa/california/los-angeles/restaurants' },
        'Los Gatos': { path: '/usa/california/los-gatos/restaurants' },
        'Los Olivos': { path: '/usa/california/los-olivos/restaurants' },
        'Manhattan Beach': { path: '/usa/california/manhattan-beach/restaurants' },
        'Marina Del Rey': { path: '/usa/california/marina-del-rey/restaurants' },
        'Marshall': { path: '/usa/california/marshall/restaurants' },
        'Menlo Park': { path: '/usa/california/menlo-park/restaurants' },
        'Mill Valley': { path: '/usa/california/mill-valley/restaurants' },
        'Millbrae': { path: '/usa/california/millbrae/restaurants' },
        'Monrovia': { path: '/usa/california/monrovia/restaurants' },
        'Montecito': { path: '/usa/california/montecito/restaurants' },
        'Monterey': { path: '/usa/california/monterey/restaurants' },
        'Mountain View': { path: '/usa/california/mountain-view/restaurants' },
        'Napa': { path: '/usa/california/napa/restaurants' },
        'Newbury Park': { path: '/usa/california/newbury-park/restaurants' },
        'Newport Beach': { path: '/usa/california/newport-beach/restaurants' },
        'Novato': { path: '/usa/california/novato/restaurants' },
        'Oakland': { path: '/usa/california/oakland/restaurants' },
        'Oceanside': { path: '/usa/california/oceanside/restaurants' },
        'Ojai': { path: '/usa/california/ojai/restaurants' },
        'Orange': { path: '/usa/california/orange/restaurants' },
        'Palm Springs': { path: '/usa/california/palm-springs/restaurants' },
        'Palo Alto': { path: '/usa/california/palo-alto/restaurants' },
        'Pasadena': { path: '/usa/california/pasadena/restaurants' },
        'Paso Robles': { path: '/usa/california/paso-robles/restaurants' },
        'Pebble Beach': { path: '/usa/california/pebble-beach/restaurants' },
        'Petaluma': { path: '/usa/california/petaluma/restaurants' },
        'Pleasanton': { path: '/usa/california/pleasanton/restaurants' },
        'Point Reyes Station': { path: '/usa/california/point-reyes-station/restaurants' },
        'Pomona': { path: '/usa/california/pomona/restaurants' },
        'Rancho Palos Verdes': { path: '/usa/california/rancho-palos-verdes/restaurants' },
        'Redwood City': { path: '/usa/california/redwood-city/restaurants' },
        'Rosemead': { path: '/usa/california/rosemead/restaurants' },
        'Roseville': { path: '/usa/california/roseville/restaurants' },
        'Rowland Heights': { path: '/usa/california/rowland-heights/restaurants' },
        'Rutherford': { path: '/usa/california/rutherford/restaurants' },
        'Sacramento': { path: '/usa/california/sacramento/restaurants' },
        'St. Helena': { path: '/usa/california/saint-helena/restaurants' },
        'San Anselmo': { path: '/usa/california/san-anselmo/restaurants' },
        'San Bruno': { path: '/usa/california/san-bruno/restaurants' },
        'San Carlos': { path: '/usa/california/san-carlos/restaurants' },
        'San Diego': { path: '/usa/california/san-diego/restaurants' },
        'San Francisco': { path: '/usa/california/san-francisco/restaurants' },
        'San Gabriel': { path: '/usa/california/san-gabriel/restaurants' },
        'San Jose': { path: '/usa/california/san-jose/restaurants' },
        'San Juan Capistrano': { path: '/usa/california/san-juan-capistrano/restaurants' },
        'San Leandro': { path: '/usa/california/san-leandro/restaurants' },
        'San Luis Obispo': { path: '/usa/california/san-luis-obispo/restaurants' },
        'San Mateo': { path: '/usa/california/san-mateo/restaurants' },
        'San Rafael': { path: '/usa/california/san-rafael/restaurants' },
        'Santa Ana': { path: '/usa/california/santa-ana/restaurants' },
        'Santa Barbara': { path: '/usa/california/santa-barbara/restaurants' },
        'Santa Monica': { path: '/usa/california/santa-monica/restaurants' },
        'Saratoga': { path: '/usa/california/saratoga/restaurants' },
        'Sausalito': { path: '/usa/california/sausalito/restaurants' },
        'Seal Beach': { path: '/usa/california/seal-beach/restaurants' },
        'Seaside': { path: '/usa/california/seaside/restaurants' },
        'Sebastopol': { path: '/usa/california/sebastopol/restaurants' },
        'Sherman Oaks': { path: '/usa/california/sherman-oaks/restaurants' },
        'Solvang': { path: '/usa/california/solvang/restaurants' },
        'Sonoma': { path: '/usa/california/sonoma/restaurants' },
        'Studio City': { path: '/usa/california/studio-city/restaurants' },
        'Temple City': { path: '/usa/california/temple-city/restaurants' },
        'Torrance': { path: '/usa/california/torrance/restaurants' },
        'Tustin': { path: '/usa/california/tustin/restaurants' },
        'Vallejo': { path: '/usa/california/vallejo/restaurants' },
        'Venice Beach': { path: '/usa/california/venice/restaurants' },
        'West Hollywood': { path: '/usa/california/west-hollywood/restaurants' },
        'Westminster': { path: '/usa/california/westminster/restaurants' },
        'Woodland Hills': { path: '/usa/california/woodland-hills/restaurants' },
        'Woodside': { path: '/usa/california/woodside/restaurants' },
        'Yountville': { path: '/usa/california/yountville/restaurants' },
      },
      'Colorado': {
        'Aspen': { path: '/usa/colorado/aspen/restaurants' },
        'Avon': { path: '/usa/colorado/avon/restaurants' },
        'Beaver Creek': { path: '/usa/colorado/beaver-creek/restaurants' },
        'Boulder': { path: '/usa/colorado/boulder/restaurants' },
        'Denver': { path: '/usa/colorado/denver/restaurants' },
        'Vail': { path: '/usa/colorado/vail/restaurants' },
      },
      'Connecticut': {}, 'Delaware': {},
      'Florida': {
        'Boynton Beach': { path: '/usa/florida/boynton-beach/restaurants' },
        'Coral Gables': { path: '/usa/florida/coral-gables/restaurants' },
        'Fort Lauderdale': { path: '/usa/florida/fort-lauderdale/restaurants' },
        'Lake Buena Vista': { path: '/usa/florida/lake-buena-vista/restaurants' },
        'Miami': { path: '/usa/florida/miami/restaurants' },
        'Miami Beach': { path: '/usa/florida/miami-beach/restaurants' },
        'Orlando': { path: '/usa/florida/orlando/restaurants' },
        'Palm Beach': { path: '/usa/florida/palm-beach/restaurants' },
        'Palm Beach Gardens': { path: '/usa/florida/palm-beach-gardens/restaurants' },
        'Safety Harbor': { path: '/usa/florida/safety-harbor/restaurants' },
        'St. Petersburg': { path: '/usa/florida/st-petersburg/restaurants' },
        'Surfside': { path: '/usa/florida/surfside/restaurants' },
        'Tampa': { path: '/usa/florida/tampa/restaurants' },
        'West Palm Beach': { path: '/usa/florida/west-palm-beach/restaurants' },
        'Winter Garden': { path: '/usa/florida/winter-garden/restaurants' },
        'Winter Park': { path: '/usa/florida/winter-park/restaurants' },
      },
      'Georgia': {
        'Atlanta': { path: '/usa/georgia/atlanta/restaurants' },
        'Avondale Estates': { path: '/usa/georgia/avondale-estates/restaurants' },
        'Chamblee': { path: '/usa/georgia/chamblee/restaurants' },
        'Decatur': { path: '/usa/georgia/decatur/restaurants' },
        'Johns Creek': { path: '/usa/georgia/johns-creek/restaurants' },
        'Marietta': { path: '/usa/georgia/marietta/restaurants' },
        'Roswell': { path: '/usa/georgia/roswell/restaurants' },
      },
      'Hawaii': {}, 'Idaho': {},
      'Illinois': { 'Chicago': { path: '/usa/illinois/chicago/restaurants' } },
      'Indiana': {}, 'Iowa': {}, 'Kansas': {}, 'Kentucky': {},
      'Louisiana': {}, 'Maine': {}, 'Maryland': {}, 'Massachusetts': {}, 'Michigan': {},
      'Minnesota': { 'Duluth': { path: '/usa/minnesota/duluth/restaurants' } },
      'Mississippi': {}, 'Missouri': {}, 'Montana': {}, 'Nebraska': {}, 'Nevada': {},
      'New Hampshire': {}, 'New Jersey': {}, 'New Mexico': {},
      'New York': {
        'New York City (Midtown/Manhattan)': { path: '/usa/newyork/newyorkcity/restaurants' },
        'Albany': { path: '/usa/newyork/albany/restaurants' },
        'Ardsley': { path: '/usa/newyork/ardsley/restaurants' },
        'The Bronx': { path: '/usa/newyork/bronx/restaurants' },
        'Bronxville': { path: '/usa/newyork/bronxville/restaurants' },
        'Brooklyn': { path: '/usa/newyork/brooklyn/restaurants' },
        'Dobbs Ferry': { path: '/usa/newyork/dobbs-ferry/restaurants' },
        'Eastchester': { path: '/usa/newyork/eastchester/restaurants' },
        'Elmsford': { path: '/usa/newyork/elmsford/restaurants' },
        'Hartsdale': { path: '/usa/newyork/hartsdale/restaurants' },
        'Hastings-on-Hudson': { path: '/usa/newyork/hastings-on-hudson/restaurants' },
        'Irvington': { path: '/usa/newyork/irvington/restaurants' },
        'Mamaroneck': { path: '/usa/newyork/mamaroneck/restaurants' },
        'Mount Kisco': { path: '/usa/newyork/mount-kisco/restaurants' },
        'New Rochelle': { path: '/usa/newyork/new-rochelle/restaurants' },
        'New York City': { path: '/usa/newyork/new-york/restaurants' },
        'North Salem': { path: '/usa/newyork/north-salem/restaurants' },
        'Peekskill': { path: '/usa/newyork/peekskill/restaurants' },
        'Pleasantville': { path: '/usa/newyork/pleasantville/restaurants' },
        'Pound Ridge': { path: '/usa/newyork/pound-ridge/restaurants' },
        'Queens': { path: '/usa/newyork/queens/restaurants' },
        'Rye': { path: '/usa/newyork/rye/restaurants' },
        'Scarsdale': { path: '/usa/newyork/scarsdale/restaurants' },
        'Staten Island': { path: '/usa/newyork/staten-island/restaurants' },
        'Tarrytown': { path: '/usa/newyork/tarrytown/restaurants' },
        'West Harrison': { path: '/usa/newyork/west-harrison/restaurants' },
        'White Plains': { path: '/usa/newyork/white-plains/restaurants' },
      },
      'North Carolina': {}, 'North Dakota': {}, 'Ohio': {}, 'Oklahoma': {}, 'Oregon': {},
      'Pennsylvania': {}, 'Rhode Island': {}, 'South Carolina': {}, 'South Dakota': {}, 'Tennessee': {},
      'Texas': {
        'Arlington': { path: '/usa/texas/arlington/restaurants' },
        'Austin': { path: '/usa/texas/austin/restaurants' },
        'Bellaire': { path: '/usa/texas/bellaire/restaurants' },
        'Dallas': { path: '/usa/texas/dallas/restaurants' },
        'Fort Worth': { path: '/usa/texas/fort-worth/restaurants' },
        'Houston': { path: '/usa/texas/houston/restaurants' },
        'Lockhart': { path: '/usa/texas/lockhart/restaurants' },
        'McKinney': { path: '/usa/texas/mckinney/restaurants' },
        'Pearland': { path: '/usa/texas/pearland/restaurants' },
        'San Antonio': { path: '/usa/texas/san-antonio/restaurants' },
        'Seguin': { path: '/usa/texas/seguin/restaurants' },
        'Spring': { path: '/usa/texas/spring/restaurants' },
        'Tomball': { path: '/usa/texas/tomball/restaurants' },
      },
      'Utah': {}, 'Vermont': {},
      'Virginia': {
        'Northern Virginia': { path: '/usa/virginia/nova/restaurants' },
        'Washington (Little Washington)': { path: '/usa/virginia/washington/restaurants' },
      },
      'Washington': {},
      'Washington, D.C.': {
        'Washington, D.C.': { path: '/usa/dc/restaurants' },
        'Washington, D.C. (Metro)': { path: '/usa/dc/washington/restaurants' },
      },
      'West Virginia': {}, 'Wisconsin': {}, 'Wyoming': {},
    },
    'France': {
      'Auvergne-Rhône-Alpes': {}, 'Bourgogne-Franche-Comté': {}, 'Bretagne': {},
      'Centre-Val de Loire': {}, 'Corse': {}, 'Grand Est': {}, 'Hauts-de-France': {},
      'Île-de-France': {}, 'Normandie': {}, 'Nouvelle-Aquitaine': {}, 'Occitanie': {},
      'Pays de la Loire': {},
      'Provence-Alpes-Côte d\'Azur': {
        'Menton': { path: '/france/provence-alpes-cote-dazur/menton/Restaurants' },
      },
    },
    'Italy': {
      'Abruzzo': {}, 'Basilicata': {}, 'Calabria': {}, 'Campania': {},
      'Emilia-Romagna': { 'Modena': { path: '/italy/emilia-romagna/modena/Restaurants' } },
      'Friuli-Venezia Giulia': {}, 'Lazio': {}, 'Liguria': {}, 'Lombardia': {},
      'Marche': {}, 'Molise': {}, 'Piemonte': {}, 'Puglia': {}, 'Sardegna': {},
      'Sicilia': {}, 'Toscana': {}, 'Trentino-Alto Adige': {}, 'Umbria': {},
      'Valle d\'Aosta': {}, 'Veneto': {},
    },
    'Spain': {
      'Andalusia': {}, 'Aragon': {}, 'Asturias': {}, 'Balearic Islands': {},
      'Basque Country': {}, 'Canary Islands': {}, 'Cantabria': {},
      'Castile and León': {}, 'Castile-La Mancha': {},
      'Catalonia': {
        'Barcelona': { path: '/spain/catalonia/barcelona/Restaurants' },
        'Girona': { path: '/spain/catalonia/girona/Restaurants' },
      },
      'Extremadura': {}, 'Galicia': {}, 'La Rioja': {}, 'Madrid': {},
      'Murcia': {}, 'Navarre': {}, 'Valencia': {},
    },
    'England': {
      'East Midlands': {}, 'East of England': {},
      'London': { 'London': { path: '/uk/england/london/Restaurants' } },
      'North East': {}, 'North West': {},
      'South East': { 'Bray': { path: '/uk/england/south-east/bray/Restaurants' } },
      'South West': {}, 'West Midlands': {}, 'Yorkshire and the Humber': {},
    },
    'Scotland': {}, 'Wales': {}, 'Northern Ireland': {},
    'Denmark': {
      'Copenhagen': { 'Copenhagen': { path: '/denmark/copenhagen/Restaurants' } },
      'Central Denmark': {}, 'North Denmark': {}, 'Zealand': {}, 'Southern Denmark': {},
    },
  };

  // Filter helper: returns subset of destinations matching query
  const filtered = useMemo(() => {
    if (!query.trim()) return destinationsByCountry;
    const q = query.toLowerCase();
    const out = {};
    Object.entries(destinationsByCountry).forEach(([country, regions]) => {
      const countryHit = country.toLowerCase().includes(q);
      const matchedRegions = {};
      Object.entries(regions).forEach(([region, cities]) => {
        const regionHit = region.toLowerCase().includes(q);
        const matchedCities = {};
        Object.entries(cities || {}).forEach(([city, data]) => {
          if (city.toLowerCase().includes(q)) matchedCities[city] = data;
        });
        if (regionHit || Object.keys(matchedCities).length) {
          matchedRegions[region] = regionHit ? cities : matchedCities;
        }
      });
      if (countryHit || Object.keys(matchedRegions).length) {
        out[country] = countryHit ? regions : matchedRegions;
      }
    });
    return out;
  }, [query]);

  // Stats from the data
  const stats = useMemo(() => {
    let countries = 0, regions = 0, cities = 0;
    Object.entries(destinationsByCountry).forEach(([, r]) => {
      countries++;
      Object.entries(r).forEach(([, c]) => {
        regions++;
        cities += Object.keys(c || {}).length;
      });
    });
    return { countries, regions, cities };
  }, []);

  // Featured destinations strip
  const featured = [
    { name: 'Copenhagen', country: 'Denmark', path: '/denmark/copenhagen/Restaurants' },
    { name: 'Modena', country: 'Italy', path: '/italy/emilia-romagna/modena/Restaurants' },
    { name: 'Napa Valley', country: 'California', path: '/usa/california/napa-valley/restaurants' },
    { name: 'Menton', country: 'France', path: '/france/provence-alpes-cote-dazur/menton/Restaurants' },
    { name: 'London', country: 'England', path: '/uk/england/london/Restaurants' },
    { name: 'Barcelona', country: 'Spain', path: '/spain/catalonia/barcelona/Restaurants' },
  ];

  return (
    <EpiPage active="destinations">
      <EpiPageHeader
        sectionLabel="Section II · The Atlas"
        title="The world, by"
        italicWord="plate."
        lede="A cartography of every restaurant in The Epicurean — from three-star temples in Tokyo to whispered bistros in Buenos Aires. Click any region to descend into its cities."
      />

      {/* Stats strip */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem 2rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
        }}>
          {[
            { label: 'Countries Charted', value: stats.countries },
            { label: 'Regions & States', value: stats.regions },
            { label: 'Cities Indexed', value: stats.cities.toLocaleString() },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '1.6rem 1rem',
              borderLeft: i === 0 ? 'none' : `1px solid ${rule}`,
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: serif, fontWeight: 400,
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                lineHeight: 1, color: ink, letterSpacing: '-.02em',
                fontVariantNumeric: 'lining-nums tabular-nums',
                marginBottom: '.6rem',
              }}>{s.value}<span style={{ color: gold }}>+</span></div>
              <SmallCaps>{s.label}</SmallCaps>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2.5rem 3rem' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          padding: '0 .25rem 1rem',
        }}>
          <SmallCaps>Plate I · The Map</SmallCaps>
          <SmallCaps style={{ color: inkMute }}>Interactive Cartography</SmallCaps>
        </div>
        <div style={{
          background: paperDeep,
          border: `1px solid ${rule}`,
          padding: 'clamp(.5rem, 1.5vw, 1.25rem)',
        }}>
          <InteractiveMap />
        </div>
      </section>

      {/* Featured cities strip */}
      <section style={{
        background: ink, color: paper,
        padding: 'clamp(3rem, 5vw, 5rem) 2.5rem',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <SmallCaps style={{ color: gold }}>Section III · Editors' Suggestion</SmallCaps>
          <h2 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            lineHeight: 1.08, letterSpacing: '-.005em',
            margin: '.6rem 0 2.5rem', color: paper, maxWidth: '700px',
          }}>
            Cities most worth the <em style={{ fontStyle: 'italic', color: gold }}>journey</em>.
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0',
            borderTop: `1px solid rgba(168,130,74,.35)`,
          }} className="epi-grid-3">
            {featured.map((c, i) => (
              <a key={c.name} href={c.path}
                onClick={(e) => { e.preventDefault(); navigate(c.path); }}
                style={{
                  textDecoration: 'none', color: 'inherit',
                  padding: '1.8rem 1.25rem',
                  borderRight: (i + 1) % 3 === 0 ? 'none' : `1px solid rgba(168,130,74,.18)`,
                  borderBottom: `1px solid rgba(168,130,74,.18)`,
                  display: 'flex', flexDirection: 'column', gap: '.4rem',
                  cursor: 'pointer', transition: 'background .35s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(168,130,74,.08)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span style={{
                  fontFamily: sans, fontSize: '10px', letterSpacing: '.34em',
                  textTransform: 'uppercase', color: gold,
                }}>{String(i + 1).padStart(2,'0')} · {c.country}</span>
                <span style={{
                  fontFamily: serif, fontWeight: 500,
                  fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
                  letterSpacing: '-.005em', color: paper,
                }}>{c.name}</span>
                <span style={{
                  fontFamily: body, fontStyle: 'italic', fontSize: '.95rem',
                  color: '#C9C3B5',
                }}>Explore the table →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Full Index */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(4rem, 6vw, 6rem) 2.5rem' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '2rem', flexWrap: 'wrap', gap: '1.5rem',
        }}>
          <div>
            <SmallCaps>Section IV</SmallCaps>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              margin: '.4rem 0 0', letterSpacing: '-.01em', color: ink,
            }}>
              The Complete <em style={{ fontStyle: 'italic', color: gold }}>Index</em>
            </h2>
          </div>
          {/* Search */}
          <div style={{
            position: 'relative', minWidth: '280px', flex: '0 1 360px',
            borderBottom: `1px solid ${ink}`,
          }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a city, region, or country…"
              style={{
                width: '100%', background: 'transparent', border: 'none',
                outline: 'none', padding: '10px 28px 10px 0',
                fontFamily: body, fontSize: '1.05rem', fontStyle: query ? 'normal' : 'italic',
                color: ink,
              }}
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke={ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
              style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </div>
        </div>

        <Rule />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '0',
        }}>
          {Object.entries(filtered).map(([country, regions], idx) => {
            const totalCities = Object.values(regions).reduce(
              (n, r) => n + Object.keys(r || {}).length, 0
            );
            return (
              <div key={country} className="epi-card" style={{
                padding: '1.75rem 1.5rem',
                borderRight: `1px solid ${rule}`,
                borderBottom: `1px solid ${rule}`,
                background: 'transparent',
              }}>
                {/* Country header */}
                <div style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                  marginBottom: '1rem', gap: '.5rem',
                }}>
                  <h3 style={{
                    fontFamily: serif, fontWeight: 500,
                    fontSize: '1.5rem', letterSpacing: '-.005em',
                    margin: 0, color: ink,
                  }}>{country}</h3>
                  <span style={{
                    fontFamily: sans, fontSize: '10px', letterSpacing: '.3em',
                    textTransform: 'uppercase', color: gold,
                  }}>
                    {String(idx + 1).padStart(2,'0')}
                  </span>
                </div>

                {Object.entries(regions).map(([region, cities]) => {
                  const cityEntries = Object.entries(cities || {});
                  const hasCities = cityEntries.length > 0;
                  return (
                    <div key={region} style={{ marginBottom: '.9rem' }}>
                      <div style={{
                        fontFamily: sans, fontSize: '9.5px', letterSpacing: '.32em',
                        textTransform: 'uppercase', color: inkMute,
                        marginBottom: hasCities ? '.4rem' : 0,
                      }}>{region}</div>
                      {hasCities && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          {cityEntries.map(([city, data]) => {
                            const linked = data && data.path;
                            return (
                              <a
                                key={city}
                                href={linked ? data.path : '#'}
                                onClick={(e) => { e.preventDefault(); if (linked) navigate(data.path); }}
                                className="epi-city-link"
                                style={{
                                  fontFamily: body, fontSize: '1rem',
                                  color: linked ? ink : inkMute,
                                  textDecoration: 'none',
                                  padding: '.18rem 0',
                                  cursor: linked ? 'pointer' : 'default',
                                  fontStyle: linked ? 'normal' : 'italic',
                                }}
                              >
                                {city}
                                {linked && (
                                  <span style={{ color: gold, marginLeft: '.4em', opacity: .6 }}>·</span>
                                )}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div style={{
                  marginTop: '1rem', paddingTop: '.9rem',
                  borderTop: `1px solid ${rule}`,
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                }}>
                  <SmallCaps style={{ fontSize: '9.5px' }}>Cities</SmallCaps>
                  <span style={{
                    fontFamily: serif, fontSize: '1.1rem',
                    color: ink, fontVariantNumeric: 'lining-nums tabular-nums',
                  }}>{totalCities}</span>
                </div>
              </div>
            );
          })}
        </div>

        {!Object.keys(filtered).length && (
          <div style={{
            padding: '4rem 2rem', textAlign: 'center',
            fontFamily: body, fontStyle: 'italic', color: inkSoft, fontSize: '1.1rem',
          }}>
            No destinations matched <em>"{query}"</em>. Try a city or country name.
          </div>
        )}
      </section>
    </EpiPage>
  );
};

export default Destinations;
