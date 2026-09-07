import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EpiPage, Rule, SmallCaps, tokens } from './EpiChrome';
import { loadDesk, sectionName } from './articles';

const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

const stem = (src) => String(src).replace(/^.*\//, '').replace(/\.[^.]+$/, '');

const longDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });

/**
 * Styling for the Markdown a writer produces. Kept here so content/news/*.md can
 * use ordinary headings, quotes, lists and links without knowing anything about
 * the design system.
 */
const injectProseStyles = () => {
  if (document.getElementById('epi-prose-styles')) return;
  const s = document.createElement('style');
  s.id = 'epi-prose-styles';
  s.innerHTML = `
    .epi-prose { font-family: ${body}; font-size: clamp(1.12rem, 1.5vw, 1.24rem); line-height: 1.78; color: ${inkSoft}; }
    .epi-prose > p:first-of-type::first-letter {
      font-family: ${serif}; font-size: 4.2rem; float: left; line-height: .72;
      padding-right: .5rem; padding-top: .4rem; color: ${ink}; font-weight: 500;
    }
    .epi-prose p { margin: 0 0 1.5rem; }
    .epi-prose h2 { font-family: ${serif}; font-weight: 500; font-size: clamp(1.5rem, 2.4vw, 2rem);
      line-height: 1.14; letter-spacing: -.01em; color: ${ink}; margin: 2.6rem 0 1rem; }
    .epi-prose h3 { font-family: ${serif}; font-weight: 500; font-size: clamp(1.25rem, 1.8vw, 1.5rem);
      color: ${ink}; margin: 2.1rem 0 .8rem; }
    .epi-prose a { color: ${goldDeep}; text-decoration: none; border-bottom: 1px solid ${rule}; }
    .epi-prose a:hover { border-bottom-color: ${gold}; }
    .epi-prose strong { font-weight: 600; color: ${ink}; }
    .epi-prose blockquote { margin: 2rem 0; padding: 0 0 0 1.6rem; border-left: 2px solid ${gold};
      font-family: ${serif}; font-size: clamp(1.3rem, 2vw, 1.65rem); line-height: 1.35; color: ${ink}; }
    .epi-prose blockquote p { margin: 0; }
    .epi-prose ul, .epi-prose ol { margin: 0 0 1.5rem; padding-left: 1.3rem; }
    .epi-prose li { margin: .4rem 0; }
    .epi-prose img { width: 100%; height: auto; display: block; margin: 2rem 0; }
    .epi-prose hr { border: none; border-top: 1px solid ${rule}; margin: 2.6rem 0; }
  `;
  document.head.appendChild(s);
};

const Article = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [desk, setDesk] = useState(null);

  useEffect(() => { injectProseStyles(); }, []);
  useEffect(() => {
    let live = true;
    loadDesk().then((d) => { if (live) setDesk(d); });
    return () => { live = false; };
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const article = useMemo(
    () => desk?.written.find((a) => a.slug === slug) || null,
    [desk, slug]
  );

  useEffect(() => {
    if (desk) document.title = article ? `${article.title} · The Epicurean` : 'News · The Epicurean';
  }, [desk, article]);

  const related = useMemo(() => {
    if (!desk || !article) return [];
    return desk.written
      .filter((a) => a.section === article.section && a.slug !== article.slug)
      .slice(0, 3);
  }, [desk, article]);

  const goTo = (p) => (e) => { e.preventDefault(); navigate(p); };

  if (!desk) {
    return (
      <EpiPage active="news">
        <div style={{ minHeight: '52vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: serif, fontSize: '1.3rem', color: gold }}>Setting the table…</div>
      </EpiPage>
    );
  }

  if (!article) {
    const link = { fontFamily: sans, fontSize: '11px', letterSpacing: '.28em', textTransform: 'uppercase', textDecoration: 'none', padding: '13px 22px' };
    return (
      <EpiPage active="news">
        <section style={{ minHeight: '52vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 'clamp(4rem, 10vw, 8rem) 2.5rem' }}>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-.015em', color: ink, margin: '0 0 .75rem' }}>
            We couldn’t find that dispatch.
          </h1>
          <p style={{ fontFamily: body, fontSize: '1.1rem', color: inkSoft, maxWidth: '520px', lineHeight: 1.6, margin: '0 0 2.25rem' }}>
            It may not have been written yet.
          </p>
          <a href="/news" onClick={goTo('/news')} style={{ ...link, color: paper, background: ink }}>All news</a>
        </section>
      </EpiPage>
    );
  }

  return (
    <EpiPage active="news">
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 2.5rem 0' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.6rem' }}>
          <a href="/news" onClick={goTo('/news')} className="epi-city-link"
            style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: goldDeep, textDecoration: 'none' }}>
            News
          </a>
          <span aria-hidden style={{ color: rule, margin: '0 .6em', fontSize: '10px' }}>/</span>
          <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: inkMute }}>
            {sectionName(desk.sections, article.section)}
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
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </section>
      )}

      {/* Body, compiled from content/news/{slug}.md at build time. */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) 2.5rem clamp(3rem, 6vw, 5rem)' }}>
        <div className="epi-prose" dangerouslySetInnerHTML={{ __html: article.html }} />
      </section>

      {related.length > 0 && (
        <section style={{ background: paperDeep, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: 'clamp(3.5rem, 6vw, 5rem) 2.5rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', margin: '0 0 1.75rem', letterSpacing: '-.015em', color: ink }}>
              More from {sectionName(desk.sections, article.section)}
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
