import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpiPage, EpiPageHeader, Rule, tokens } from './EpiChrome';
import { loadDesk, frontPage, sectionName } from './articles';

const { ink, inkSoft, inkMute, paperDeep, rule, goldDeep, serif, body, sans } = tokens;

const stem = (src) => String(src).replace(/^.*\//, '').replace(/\.[^.]+$/, '');

const longDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });

/** Article artwork, served from the WebP derivatives with a fallback to the source. */
const Art = ({ src, alt = '', sizes, priority = false }) => (
  <img
    src={`/images/opt/${stem(src)}-1600.webp`}
    srcSet={`/images/opt/${stem(src)}-1600.webp 1600w, /images/opt/${stem(src)}-3200.webp 3200w`}
    sizes={sizes} alt={alt} aria-hidden={!alt} decoding="async"
    loading={priority ? 'eager' : 'lazy'} fetchpriority={priority ? 'high' : 'auto'}
    onError={(e) => {
      if (e.currentTarget.dataset.fallback) return;
      e.currentTarget.dataset.fallback = '1';
      e.currentTarget.srcset = '';
      e.currentTarget.src = src;
    }}
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
  />
);

const News = () => {
  const navigate = useNavigate();
  const [desk, setDesk] = useState(null);

  useEffect(() => { document.title = 'News · The Epicurean'; }, []);

  useEffect(() => {
    let live = true;
    loadDesk().then((d) => { if (live) setDesk(d); });
    return () => { live = false; };
  }, []);

  const { lead, columns, rest } = useMemo(
    () => (desk ? frontPage(desk) : { lead: null, columns: [], rest: [] }),
    [desk]
  );

  const goTo = (p) => (e) => { e.preventDefault(); navigate(p); };
  const href = (a) => `/news/${a.slug}`;

  const kicker = (a) => (
    <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: goldDeep }}>
      {sectionName(desk?.sections || [], a.section)}
      <span style={{ color: rule, margin: '0 .6em' }}>·</span>
      <span style={{ color: inkMute }}>{longDate(a.date)}</span>
    </span>
  );

  return (
    <EpiPage active="news">
      <EpiPageHeader
        title="News"
        italicWord="& notes"
        lede="Dispatches from the dining world: the openings, awards, and rankings that move the guide, gathered from the journals of record."
      />

      {/* Lead, with one article from each section alongside it */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2.5rem 4.5rem' }}>
        <div className="epi-news-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'start' }}>
          {lead && (
            <article>
              <a href={href(lead)} onClick={goTo(href(lead))} className="epi-feature"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="epi-news-lead" style={{ aspectRatio: '3 / 2', overflow: 'hidden', background: paperDeep, marginBottom: '1.5rem' }}>
                  <Art src={lead.image} sizes="(max-width: 860px) 100vw, 60vw" priority />
                </div>
                {kicker(lead)}
                <h2 className="epi-feature-title" style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.9rem, 3vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-.01em', margin: '.6rem 0 .7rem', color: ink }}>
                  {lead.title}
                </h2>
                {lead.dek && (
                  <p style={{ fontFamily: body, fontSize: '1.1rem', color: inkSoft, lineHeight: 1.55, margin: 0, maxWidth: '560px' }}>{lead.dek}</p>
                )}
              </a>
            </article>
          )}

          {/* One per section: Opinion, Awards, Restaurants */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {columns.map(({ key, name, article }, idx) => (
              <React.Fragment key={key}>
                {idx > 0 && <Rule />}
                <article style={{ padding: '1.6rem 0' }}>
                  <div style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.3em', textTransform: 'uppercase', color: goldDeep, marginBottom: '1rem' }}>
                    {name}
                  </div>
                  <a href={href(article)} onClick={goTo(href(article))} className="epi-feature"
                    style={{
                      display: 'grid', gridTemplateColumns: '112px 1fr', gap: '1.3rem',
                      alignItems: 'center', textDecoration: 'none', color: 'inherit',
                    }}>
                    {article.image && (
                      <div style={{ aspectRatio: '1', overflow: 'hidden', background: paperDeep }}>
                        <Art src={article.image} sizes="112px" />
                      </div>
                    )}
                    <div>
                      <h3 className="epi-feature-title" style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.15rem, 1.6vw, 1.42rem)', lineHeight: 1.18, letterSpacing: '-.005em', margin: '0 0 .4rem', color: ink }}>
                        {article.title}
                      </h3>
                      <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.22em', textTransform: 'uppercase', color: inkMute }}>
                        {longDate(article.date)}
                      </span>
                    </div>
                  </a>
                </article>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Everything else */}
      {rest.length > 0 && (
        <section style={{ background: paperDeep, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: 'clamp(4rem, 6vw, 6rem) 2.5rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', margin: '0 0 2.25rem', letterSpacing: '-.015em', color: ink }}>
              More headlines
            </h2>
            <div style={{ borderTop: `1px solid ${rule}` }}>
              {rest.map((a) => {
                const row = (
                  <>
                    <span style={{ fontFamily: serif, fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)', fontWeight: 500, letterSpacing: '-.005em', lineHeight: 1.2 }}>
                      {a.title}
                    </span>
                    <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.26em', textTransform: 'uppercase', color: inkMute, whiteSpace: 'nowrap' }}>
                      {sectionName(desk?.sections || [], a.section)}
                      <span style={{ color: rule, margin: '0 .6em' }}>·</span>
                      {longDate(a.date)}
                    </span>
                  </>
                );
                const style = {
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem',
                  alignItems: 'baseline', padding: '1.3rem .25rem',
                  borderBottom: `1px solid ${rule}`, color: ink,
                };
                // Only the pieces that have been written link anywhere.
                return a.html ? (
                  <a key={a.slug} href={href(a)} onClick={goTo(href(a))}
                    style={{ ...style, textDecoration: 'none', transition: 'color .25s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = tokens.gold; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ink; }}>
                    {row}
                  </a>
                ) : (
                  <div key={a.slug} style={style}>{row}</div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </EpiPage>
  );
};

export default News;
