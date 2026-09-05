import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EpiPage, Rule, SmallCaps, tokens } from './EpiChrome';
import { findArticle, byDate, ARTICLES, sectionName } from './articles';

const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

const stem = (src) => String(src).replace(/^.*\//, '').replace(/\.[^.]+$/, '');

const longDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = findArticle(slug);

  useEffect(() => {
    document.title = article ? `${article.title} · The Epicurean` : 'News · The Epicurean';
  }, [article]);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // More from the same desk, newest first.
  const related = useMemo(() => {
    if (!article) return [];
    return byDate(ARTICLES)
      .filter((a) => a.section === article.section && a.slug !== article.slug && a.body)
      .slice(0, 3);
  }, [article]);

  const goTo = (p) => (e) => { e.preventDefault(); navigate(p); };

  if (!article || !article.body) {
    const link = { fontFamily: sans, fontSize: '11px', letterSpacing: '.28em', textTransform: 'uppercase', textDecoration: 'none', padding: '13px 22px' };
    return (
      <EpiPage active="news">
        <section style={{ minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 'clamp(4rem, 10vw, 8rem) 2.5rem' }}>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-.015em', color: ink, margin: '0 0 .75rem' }}>
            {article ? 'This piece hasn’t been filed yet.' : 'We couldn’t find that dispatch.'}
          </h1>
          <p style={{ fontFamily: body, fontSize: '1.1rem', color: inkSoft, maxWidth: '520px', lineHeight: 1.6, margin: '0 0 2.25rem' }}>
            {article ? article.title : 'It may have moved, or never existed.'}
          </p>
          <a href="/news" onClick={goTo('/news')} style={{ ...link, color: paper, background: ink }}>All news</a>
        </section>
      </EpiPage>
    );
  }

  return (
    <EpiPage active="news">
      {/* Masthead */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 2.5rem 0' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.6rem' }}>
          <a href="/news" onClick={goTo('/news')} className="epi-city-link"
            style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: goldDeep, textDecoration: 'none' }}>
            News
          </a>
          <span aria-hidden style={{ color: rule, margin: '0 .6em', fontSize: '10px' }}>/</span>
          <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: inkMute }}>
            {sectionName(article.section)}
          </span>
        </nav>

        <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(2.2rem, 4.6vw, 3.6rem)', lineHeight: 1.06, letterSpacing: '-.02em', margin: '0 0 1.1rem', color: ink }}>
          {article.title}
        </h1>

        {article.dek && (
          <p style={{ fontFamily: body, fontSize: 'clamp(1.15rem, 1.7vw, 1.4rem)', lineHeight: 1.5, color: inkSoft, margin: '0 0 1.6rem', maxWidth: '640px' }}>
            {article.dek}
          </p>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.4rem', alignItems: 'baseline', paddingBottom: '1.6rem' }}>
          {article.byline && <SmallCaps>{article.byline}</SmallCaps>}
          <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.26em', textTransform: 'uppercase', color: inkMute }}>
            {longDate(article.date)}
          </span>
        </div>
        <Rule />
      </section>

      {/* Artwork */}
      {article.image && (
        <section style={{ maxWidth: '1080px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) 2.5rem 0' }}>
          <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', background: paperDeep }}>
            <img
              src={`/images/opt/${stem(article.image)}-1600.webp`}
              srcSet={`/images/opt/${stem(article.image)}-1600.webp 1600w, /images/opt/${stem(article.image)}-3200.webp 3200w`}
              sizes="(max-width: 1080px) 100vw, 1080px"
              alt="" aria-hidden decoding="async" fetchpriority="high"
              onError={(e) => {
                if (e.currentTarget.dataset.fallback) return;
                e.currentTarget.dataset.fallback = '1';
                e.currentTarget.srcset = '';
                e.currentTarget.src = article.image;
              }}
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </section>
      )}

      {/* Body */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) 2.5rem clamp(3rem, 6vw, 5rem)' }}>
        {article.body.map((para, i) => (
          <p key={i} style={{
            fontFamily: body, fontSize: 'clamp(1.12rem, 1.5vw, 1.24rem)',
            lineHeight: 1.78, color: inkSoft, margin: i === 0 ? 0 : '1.5rem 0 0',
          }}>
            {i === 0 ? (
              <>
                <span style={{ fontFamily: serif, fontSize: '4.2rem', float: 'left', lineHeight: .72, paddingRight: '.5rem', paddingTop: '.4rem', color: ink, fontWeight: 500 }}>
                  {para.charAt(0)}
                </span>
                {para.slice(1)}
              </>
            ) : para}
          </p>
        ))}
      </section>

      {/* More from the same desk */}
      {related.length > 0 && (
        <section style={{ background: paperDeep, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: 'clamp(3.5rem, 6vw, 5rem) 2.5rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', margin: '0 0 1.75rem', letterSpacing: '-.015em', color: ink }}>
              More from {sectionName(article.section)}
            </h2>
            <div style={{ borderTop: `1px solid ${rule}` }}>
              {related.map((a) => (
                <a key={a.slug} href={`/news/${a.slug}`} onClick={goTo(`/news/${a.slug}`)}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem',
                    alignItems: 'baseline', padding: '1.3rem .25rem',
                    borderBottom: `1px solid ${rule}`, textDecoration: 'none', color: ink,
                    transition: 'color .25s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = gold; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = ink; }}>
                  <span style={{ fontFamily: serif, fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', fontWeight: 500, lineHeight: 1.2 }}>{a.title}</span>
                  <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.26em', textTransform: 'uppercase', color: inkMute, whiteSpace: 'nowrap' }}>
                    {longDate(a.date)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </EpiPage>
  );
};

export default Article;
