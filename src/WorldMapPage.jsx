import React, { useEffect } from 'react';
import { EpiNav, useEpiStyles, tokens } from './EpiChrome';
import WorldMap from './WorldMap';

const WorldMapPage = () => {
  useEpiStyles();
  useEffect(() => { document.title = 'The Atlas · The Epicurean'; }, []);

  return (
    <div style={{
      fontFamily: tokens.body, color: tokens.ink,
      background: tokens.paper, width: '100vw', minHeight: '100vh',
      margin: 0, overflowX: 'hidden', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column',
    }}>
      <EpiNav active="atlas" />
      {/* Full-bleed immersive map filling the remaining viewport */}
      <div style={{ flex: 1, position: 'relative', minHeight: 'calc(100vh - 92px)' }}>
        <WorldMap fullPage showSearch projection="globe" />
      </div>
    </div>
  );
};

export default WorldMapPage;
