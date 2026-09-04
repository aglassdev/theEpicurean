import React from 'react';
import { EpiPage, Rule, SmallCaps, tokens } from './EpiChrome';

const RestaurantPage = ({
  headerImages, restaurantName, address, cuisine, priceRange, phoneNumber,
  hours, website, reservationProviders, tags, awards, bio, googleMapsEmbed, pageTitle,
}) => {
  const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

  React.useEffect(() => {
    document.title = pageTitle || `${restaurantName} · The Epicurean`;
  }, [pageTitle, restaurantName]);

  // Reservation providers may arrive as a JS-array string in generated data.
  const reservations = React.useMemo(() => {
    if (!reservationProviders) return [];
    if (Array.isArray(reservationProviders)) return reservationProviders;
    if (typeof reservationProviders === 'string') {
      try { const r = eval(reservationProviders); return Array.isArray(r) ? r : []; } // eslint-disable-line no-eval
      catch { return []; }
    }
    return [];
  }, [reservationProviders]);

  const michelin = (count) => Array.from({ length: count || 0 }, (_, i) => (
    <img key={i} src="/images/michelinstar.png" alt="" aria-hidden width="18" height="18" style={{ marginRight: 2, objectFit: 'contain' }} />
  ));

  const isMichelin = (name) => /michelin star/i.test(name || '');
  const showMap = googleMapsEmbed && !googleMapsEmbed.includes('YOUR_GOOGLE_MAPS_API_KEY');
  const hasHeader = Array.isArray(headerImages) && headerImages.length > 0;

  const metaBits = [cuisine, priceRange].filter(Boolean);

  return (
    <EpiPage active="destinations">
      {/* Optional full-bleed hero */}
      {hasHeader && (
        <div style={{ width: '100%', height: 'clamp(300px, 54vh, 600px)', display: 'flex', background: paperDeep }}>
          {headerImages.slice(0, 3).map((img, i) => (
            <div key={i} aria-hidden style={{ flex: 1, backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          ))}
        </div>
      )}

      {/* Title block */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: `clamp(3rem, 6vw, ${hasHeader ? '4rem' : '5.5rem'}) 2.5rem 0` }}>
        <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)', lineHeight: .98, letterSpacing: '-.02em', margin: '0 0 1.1rem', color: ink }}>
          {restaurantName}
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '.6rem 1.3rem' }}>
          {metaBits.length > 0 && (
            <span style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '.26em', textTransform: 'uppercase', color: inkSoft }}>
              {cuisine}{cuisine && priceRange ? <span style={{ color: rule, margin: '0 .7em' }}>·</span> : ''}
              {priceRange && <span style={{ color: goldDeep }}>{priceRange}</span>}
            </span>
          )}
          {address && (
            <span style={{ fontFamily: body, fontStyle: 'italic', fontSize: '1.1rem', color: inkSoft }}>{address}</span>
          )}
        </div>
        <div style={{ height: '2.5rem' }} />
        <Rule />
      </section>

      {/* Body */}
      <section style={{ maxWidth: '1080px', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) 2.5rem clamp(3rem, 6vw, 5rem)' }}>
        <div className="epi-two-col" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'start' }}>
          {/* Left — bio + distinctions */}
          <div>
            {bio ? (
              <p style={{ fontFamily: body, fontSize: 'clamp(1.12rem, 1.5vw, 1.28rem)', lineHeight: 1.75, color: inkSoft, margin: 0 }}>
                <span style={{ fontFamily: serif, fontSize: '4.4rem', float: 'left', lineHeight: .72, paddingRight: '.5rem', paddingTop: '.4rem', color: ink, fontWeight: 500 }}>{bio.charAt(0)}</span>
                {bio.slice(1)}
              </p>
            ) : (
              <p style={{ fontFamily: body, fontStyle: 'italic', fontSize: '1.15rem', color: inkMute, margin: 0 }}>
                A tasting note for {restaurantName} is being written.
              </p>
            )}

            {awards && awards.length > 0 && (
              <div style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
                <SmallCaps>Distinctions</SmallCaps>
                <div style={{ marginTop: '1.1rem', borderTop: `1px solid ${rule}` }}>
                  {awards.map((a, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '.95rem 0', borderBottom: `1px solid ${rule}` }}>
                      <span style={{ display: 'flex', alignItems: 'center', minWidth: '30px' }}>
                        {isMichelin(a.name) ? michelin(a.count)
                          : a.image ? <img src={a.image} alt="" aria-hidden width="24" height="24" style={{ objectFit: 'contain' }} /> : null}
                      </span>
                      <span style={{ fontFamily: serif, fontWeight: 500, fontSize: '1.2rem', color: ink, flex: 1, letterSpacing: '-.005em' }}>{a.name}</span>
                      <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.24em', textTransform: 'uppercase', color: inkMute, whiteSpace: 'nowrap' }}>
                        {[a.organization, a.year].filter(Boolean).join(' · ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — actions, notes, hours */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
              {website && (
                <a href={website} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '.28em', textTransform: 'uppercase', color: paper, background: ink, textAlign: 'center', padding: '14px 18px', textDecoration: 'none', transition: 'background .3s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = gold}
                  onMouseLeave={(e) => e.currentTarget.style.background = ink}>
                  Visit website
                </a>
              )}
              {reservations.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '.28em', textTransform: 'uppercase', color: ink, border: `1px solid ${ink}`, textAlign: 'center', padding: '13px 18px', textDecoration: 'none', transition: 'background .3s ease, color .3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = ink; e.currentTarget.style.color = paper; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ink; }}>
                  Reserve{p.name ? ` · ${p.name}` : ''}
                </a>
              ))}
              {phoneNumber && (
                <a href={`tel:${phoneNumber}`} style={{ fontFamily: body, fontSize: '1.05rem', color: inkSoft, textDecoration: 'none', textAlign: 'center' }}>{phoneNumber}</a>
              )}
            </div>

            {tags && tags.length > 0 && (
              <div>
                <SmallCaps>Notes</SmallCaps>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.9rem' }}>
                  {tags.map((t, i) => (
                    <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', border: `1px solid ${rule}`, padding: '.35rem .7rem', fontFamily: sans, fontSize: '11px', letterSpacing: '.06em', color: inkSoft }}>
                      {t.iconUrl && <img src={t.iconUrl} alt="" aria-hidden width="14" height="14" style={{ objectFit: 'contain' }} />}
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {hours && Object.keys(hours).length > 0 && (
              <div>
                <SmallCaps>Hours</SmallCaps>
                <div style={{ marginTop: '.9rem', borderTop: `1px solid ${rule}` }}>
                  {Object.entries(hours).map(([day, times]) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '.55rem 0', borderBottom: `1px solid ${rule}` }}>
                      <span style={{ fontFamily: sans, fontSize: '10.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: ink }}>{day}</span>
                      <span style={{ fontFamily: body, fontSize: '.98rem', color: inkSoft, textAlign: 'right' }}>
                        {[times.lunch, times.dinner].filter(Boolean).join(' · ') || '—'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {showMap && (
          <div style={{ marginTop: 'clamp(3rem, 6vw, 4.5rem)', border: `1px solid ${rule}` }}>
            <iframe src={googleMapsEmbed} width="100%" height="420" style={{ border: 0, display: 'block' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${restaurantName} location`} />
          </div>
        )}
      </section>
    </EpiPage>
  );
};

export default RestaurantPage;
