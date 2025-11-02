// projects.js — Jelly theme + alignment fixes + readable sections (no text removed)

// 1) ---- Jelly Theme + Layout Styles ----
(function injectPortfolioStyles(){
  if (document.getElementById('portfolio-style-jelly')) return;
  const style = document.createElement('style');
  style.id = 'portfolio-style-jelly';
  style.innerHTML = `
    :root{
      --accent:#ec4899;
      --accent-2:#a855f7;
      --panel-radius:18px; --panel-pad:20px;
      --chip-br:9999px;
      --fg:#1f2937; --fg-d:#e5e7eb;
      --muted:#6b7280; --muted-d:#c7cad1;
      --border:rgba(0,0,0,.08); --border-d:rgba(255,255,255,.12);
      --bg:rgba(255,255,255,.75); --bg-d:rgba(31,41,55,.6);
      --glow:0 10px 30px rgba(236,72,153,.15), 0 6px 12px rgba(168,85,247,.12);
      --glow-strong:0 18px 45px rgba(236,72,153,.22), 0 10px 22px rgba(168,85,247,.18);
      --ring:0 0 0 2px rgba(236,72,153,.6);
    }
    html.theme-jelly body, body.theme-jelly { background: radial-gradient(1200px 1200px at 10% -10%, rgba(236,72,153,.06), transparent 60%) no-repeat; }

    /* Core panel look (glassy jelly) */
    .panel{
      background:var(--bg);
      -webkit-backdrop-filter:saturate(120%) blur(6px); backdrop-filter:saturate(120%) blur(6px);
      border-radius:var(--panel-radius);
      border:1px solid var(--border);
      box-shadow: var(--glow);
      transition: transform .18s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
    }
    .panel:hover{ transform: translateY(-1px); box-shadow: var(--glow-strong); }
    @media (prefers-color-scheme: dark){
      .panel{ background:var(--bg-d); border-color:var(--border-d); }
    }

    /* Left tile ↔ right details alignment */
    .active-project-panel{margin:0}
    .active-project-panel .panel{padding:var(--panel-pad)}
    .panel-rail{max-width:1250px;margin-inline:auto}
    .project-details-content.panel{padding:calc(var(--panel-pad) + 4px)}

    /* Project hero */
    .project-breakout{
      position:relative;
      margin:0 calc(var(--panel-pad) * -1);
    }
    .project-breakout__inner{
      max-width:1250px;
      margin-inline:auto;
      padding:0 var(--panel-pad);
    }
    .project-breakout--edge .project-hero{
      border-radius:24px;
    }
    .project-hero{
      display:grid;
      gap:1.75rem;
      margin-bottom:2.25rem;
      align-items:stretch;
    }
    .project-hero--breakout{
      position:relative;
      padding:clamp(1rem, 1.2rem + 0.8vw, 1.9rem);
      border-radius:28px;
      background:linear-gradient(120deg, rgba(236,72,153,.14), rgba(168,85,247,.08));
      border:1px solid rgba(236,72,153,.18);
      box-shadow:0 22px 60px rgba(236,72,153,.14);
      overflow:hidden;
    }
    .project-hero--breakout::before{
      content:"";
      position:absolute;
      inset:-40% -10% 40% -10%;
      background:radial-gradient(60% 120% at 0% 0%, rgba(236,72,153,.32), transparent 70%);
      opacity:.65;
      pointer-events:none;
    }
    @media (min-width: 900px){
      .project-hero{grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:2.25rem;}
    }
    .project-hero__media{
      position:relative;
      border-radius:24px;
      overflow:hidden;
      min-height:220px;
      background:linear-gradient(135deg, rgba(236,72,153,.65), rgba(168,85,247,.55));
      box-shadow:var(--glow-strong);
      isolation:isolate;
    }
    .project-hero__media::after{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(180deg, rgba(17,24,39,.15), rgba(17,24,39,.45));
      mix-blend-mode:multiply;
      pointer-events:none;
      z-index:3;
    }
    .scanline-overlay{
      position:absolute;
      inset:0;
      background-image:repeating-linear-gradient(0deg, rgba(255,255,255,.15) 0, rgba(255,255,255,.15) 1px, transparent 1px, transparent 4px);
      mix-blend-mode:screen;
      opacity:.3;
      pointer-events:none;
      z-index:2;
    }
    .project-hero__media img,
    .project-hero__media video{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      object-fit:cover;
      z-index:1;
    }
    [data-media-carousel]{
      position:relative;
      display:flex;
      flex-direction:column;
      gap:clamp(.9rem, .8rem + 1vw, 1.4rem);
      scroll-snap-type:x mandatory;
    }
    [data-media-carousel-track]{
      display:flex;
      gap:clamp(.9rem, .8rem + 1vw, 1.3rem);
      overflow-x:auto;
      padding-inline:clamp(.25rem, .5vw + .5rem, 1rem);
      padding-block:.25rem .75rem;
      scroll-snap-type:x mandatory;
      scroll-padding:clamp(.75rem, .5rem + .5vw, 1.25rem);
      scrollbar-width:none;
      -ms-overflow-style:none;
    }
    [data-media-carousel-track]::-webkit-scrollbar{display:none;}
    [data-media-carousel-item]{
      flex:0 0 calc(90.9%);
      scroll-snap-align:center;
      scroll-snap-stop:always;
      position:relative;
    }
    [data-media-carousel-item] > *{
      width:100%;
      height:100%;
      border-radius:22px;
      overflow:hidden;
      display:block;
      background:linear-gradient(135deg, rgba(236,72,153,.16), rgba(168,85,247,.12));
      box-shadow:var(--glow);
      transition:transform .25s ease, opacity .25s ease;
      opacity:.94;
    }
    [data-media-carousel-item] > *:hover{
      transform:translateY(-6px);
      opacity:1;
      box-shadow:var(--glow-strong);
    }
    [data-media-carousel-item] > *:focus-visible{
      outline:none;
      box-shadow:0 0 0 3px rgba(236,72,153,.55), var(--glow);
    }
    [data-carousel-prev],
    [data-carousel-next]{
      appearance:none;
      border:none;
      border-radius:999px;
      padding:.55rem;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:.35rem;
      background:linear-gradient(180deg, rgba(255,255,255,.8), rgba(255,255,255,.58));
      color:var(--fg);
      cursor:pointer;
      box-shadow:0 10px 20px rgba(15,23,42,.12);
      position:relative;
      transition:transform .2s ease, opacity .2s ease;
    }
    [data-carousel-prev]:hover,
    [data-carousel-next]:hover{
      transform:translateY(-3px);
      opacity:.96;
      box-shadow:var(--glow);
    }
    [data-carousel-prev]::after,
    [data-carousel-next]::after{
      content:"";
      display:block;
      width:10px;
      height:10px;
      border-top:2px solid currentColor;
      border-right:2px solid currentColor;
      transform:rotate(45deg);
    }
    [data-carousel-prev]::after{ transform:rotate(225deg); }
    [data-carousel-prev]:focus-visible,
    [data-carousel-next]:focus-visible{
      outline:none;
      box-shadow:0 0 0 3px rgba(236,72,153,.55), var(--glow);
    }
    [data-carousel-index]{
      border-radius:999px;
      border:1px solid rgba(236,72,153,.3);
      padding:.3rem .7rem;
      background:linear-gradient(180deg, rgba(236,72,153,.08), rgba(168,85,247,.08));
      color:var(--accent);
      font-weight:600;
      cursor:pointer;
      transition:transform .2s ease, opacity .2s ease;
    }
    [data-carousel-index]:hover{transform:translateY(-2px);opacity:.96;}
    [data-carousel-index]:focus-visible{
      outline:none;
      box-shadow:0 0 0 3px rgba(236,72,153,.55), var(--glow);
    }
    .project-hero__summary{
      background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.72));
      border-radius:22px;
      padding:2rem clamp(1.5rem, 1.1rem + 1vw, 2.25rem);
      box-shadow:var(--glow-strong);
      border:1px solid var(--border);
      display:flex;
      flex-direction:column;
      gap:1.25rem;
    }
    .project-hero__eyebrow{
      font-size:.72rem;
      letter-spacing:.2em;
      text-transform:uppercase;
      font-weight:800;
      color:var(--accent);
    }
    .project-hero__headline{
      font-weight:900;
      font-size:clamp(1.8rem, 1.4rem + 1.8vw, 2.5rem);
      color:var(--fg);
      line-height:1.15;
    }
    .project-hero__subhead{
      font-size:clamp(1rem, .95rem + .4vw, 1.22rem);
      color:var(--muted);
      max-width:48ch;
    }
    .project-hero__bullets{
      list-style:none;
      margin:0;
      padding:0;
      display:grid;
      gap:1.1rem;
    }
    .project-hero__bullet{
      position:relative;
      padding-left:2.6rem;
      color:var(--fg);
    }
    .project-hero__bullet::before{
      content:"";
      position:absolute;
      left:0;
      top:.3rem;
      width:1.8rem;
      height:1.8rem;
      border-radius:50%;
      background:linear-gradient(135deg, rgba(236,72,153,.9), rgba(168,85,247,.9));
      opacity:.85;
      box-shadow:0 10px 25px rgba(236,72,153,.28);
    }
    .project-hero__bullet-title{
      font-size:clamp(1.02rem, .98rem + .35vw, 1.28rem);
      font-weight:800;
      display:block;
    }
    .project-hero__bullet-copy{
      display:block;
      margin-top:.25rem;
      font-size:clamp(.9rem, .86rem + .2vw, 1rem);
      color:var(--muted);
      max-width:52ch;
    }
    .project-section-stack{
      display:flex;
      flex-direction:column;
      gap:2.5rem;
    }
    @media (prefers-color-scheme: dark){
      .project-hero--breakout{background:linear-gradient(120deg, rgba(236,72,153,.18), rgba(168,85,247,.12));border-color:var(--border-d);box-shadow:0 22px 60px rgba(15,23,42,.45);}
      .scanline-overlay{opacity:.22;}
      .project-hero__media::after{background:linear-gradient(180deg, rgba(17,24,39,.35), rgba(17,24,39,.65));}
      .project-hero__summary{background:linear-gradient(180deg, rgba(31,41,55,.92), rgba(31,41,55,.72));border-color:var(--border-d);}
      .project-hero__headline{color:var(--fg-d);}
      .project-hero__bullet{color:var(--fg-d);}
      .project-hero__bullet-copy{color:var(--fg-d);}
      [data-carousel-prev],
      [data-carousel-next]{background:linear-gradient(180deg, rgba(31,41,55,.92), rgba(31,41,55,.72));color:var(--fg-d);box-shadow:0 12px 30px rgba(0,0,0,.45);}
      [data-carousel-index]{background:linear-gradient(180deg, rgba(236,72,153,.18), rgba(168,85,247,.18));color:var(--accent);border-color:rgba(236,72,153,.4);}
    }

    /* Tabs (pills) */
    .details-tabs{ gap:.5rem; }
    .details-tabs button{
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.7));
      border-radius:12px;
      padding:.45rem .8rem;
      box-shadow: inset 0 -1px 0 rgba(0,0,0,.05);
      transition: transform .12s ease, box-shadow .15s ease;
      font-weight:700;
      color:var(--fg);
    }
    .details-tabs button:hover{ transform: translateY(-1px); }
    .details-tabs button:focus-visible{
      outline:none;
      box-shadow:0 0 0 3px rgba(236,72,153,.55), inset 0 -1px 0 rgba(0,0,0,.05);
    }
    .details-tabs button.active{
      outline:2px solid transparent;
      box-shadow: var(--ring), inset 0 -1px 0 rgba(0,0,0,.05);
      background:linear-gradient(180deg, rgba(236,72,153,.16), rgba(168,85,247,.16));
    }
    @media (prefers-color-scheme: dark){
      .details-tabs button{
        border-color:var(--border-d);
        background:linear-gradient(180deg, rgba(31,41,55,.9), rgba(31,41,55,.7));
        color:var(--fg-d);
      }
      .details-tabs button.active{ box-shadow: var(--ring); }
    }

    /* Content readability */
    .tab-content{ display:none }
    .tab-content.active{ display:block }

    .project-details-content .tab-content{
      color:var(--fg);
      line-height:1.75;
      font-size: clamp(.92rem, .92rem + .15vw, 1rem);
    }
    @media (prefers-color-scheme: dark){ .project-details-content .tab-content{ color:var(--fg-d) } }

    /* Structured tab layout */
    .project-details-content h4{font-weight:800;font-size: clamp(1.05rem,1rem + .2vw,1.18rem);margin:.1rem 0 .4rem}
    .project-details-content h5{font-weight:700;margin:.15rem 0;font-size:1rem}
    .project-details-content p{margin:.25rem 0;color:var(--muted);word-break:break-word;hyphens:auto}
    .project-details-content .tab-section strong{color:var(--fg);}

    .tab-section{display:flex;flex-direction:column;gap:1.75rem;container-type:inline-size;container-name:tab-section}
    .tab-section__header{display:flex;flex-direction:column;gap:.6rem}
    .tab-section__header + .tab-section__header{margin-top:1.25rem}
    .tab-eyebrow{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--accent);}
    .tab-section__lede{color:var(--muted);font-size:clamp(.88rem,.86rem + .1vw,.96rem);max-width:60ch}

    .tab-grid{display:grid;gap:clamp(1rem, .6rem + 1vw, 1.5rem);grid-template-columns:repeat(12,minmax(0,1fr))}
    .tab-card{
      position:relative;
      display:flex;
      flex-direction:column;
      gap:.55rem;
      padding:1.2rem 1.35rem;
      border-radius:22px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.66));
      box-shadow:var(--glow);
      backdrop-filter:saturate(140%) blur(10px);
      grid-column:span 12;
      transition:transform .28s ease, opacity .28s ease;
      opacity:.96;
    }
    .tab-card:hover{
      transform:translateY(-6px);
      opacity:1;
      border-color:rgba(236,72,153,.45);
      box-shadow:var(--glow-strong);
    }
    .tab-card:focus-within{
      box-shadow:var(--glow),0 0 0 2px rgba(236,72,153,.55);
    }
    .tab-card::after{
      content:"";
      position:absolute;
      inset:auto 0 0 0;
      height:4px;
      border-radius:0 0 22px 22px;
      background:linear-gradient(90deg, rgba(236,72,153,.55), rgba(168,85,247,.45));
      opacity:.85;
    }
    .tab-card h5{color:var(--fg);font-weight:800;font-size:1rem}
    .tab-card__meta{font-size:.82rem;color:var(--muted);font-weight:600;text-transform:uppercase;letter-spacing:.08em}

    .tab-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.4rem}
    .tab-list li{display:flex;gap:.55rem;align-items:flex-start;color:var(--muted);font-size:.9rem}
    .tab-list li::before{content:"•";color:var(--accent);font-weight:700;line-height:1;margin-top:.1rem}

    .tab-chip-row{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.35rem}
    .tab-chip-row .tag-badge{margin:0;font-size:.72rem;padding:.24rem .6rem;border-radius:var(--chip-br);border:1px solid var(--border);background:rgba(255,255,255,.72)}

    .timeline{position:relative;display:flex;flex-direction:column;gap:1rem;counter-reset:timeline}
    .timeline::before{content:"";position:absolute;left:19px;top:0;bottom:0;width:2px;background:linear-gradient(180deg, rgba(236,72,153,.2), rgba(168,85,247,.25))}
    .timeline-step{
      position:relative;
      margin-left:0;
      padding:1rem 1.2rem 1rem 3.5rem;
      border-radius:18px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.7));
      box-shadow:var(--glow);
      display:flex;
      flex-direction:column;
      gap:.5rem;
    }
    .timeline-step::before{
      counter-increment:timeline;
      content:counter(timeline);
      position:absolute;
      left:0;
      top:1rem;
      width:38px;
      height:38px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      color:#fff;
      background:linear-gradient(135deg, rgba(236,72,153,.9), rgba(168,85,247,.9));
      box-shadow:0 6px 16px rgba(236,72,153,.3);
    }

    .insight-grid{display:grid;gap:clamp(1rem, .6rem + 1vw, 1.5rem);grid-template-columns:repeat(12,minmax(0,1fr))}
    .insight-card{
      position:relative;
      border-radius:22px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.72));
      padding:1.1rem 1.35rem;
      box-shadow:var(--glow);
      display:flex;
      flex-direction:column;
      gap:.75rem;
      backdrop-filter:saturate(140%) blur(10px);
      grid-column:span 12;
      transition:transform .28s ease, opacity .28s ease;
      opacity:.96;
    }
    .insight-card:hover{
      transform:translateY(-6px);
      opacity:1;
      border-color:rgba(236,72,153,.45);
      box-shadow:var(--glow-strong);
    }
    .insight-card:focus-within{
      box-shadow:var(--glow),0 0 0 2px rgba(236,72,153,.55);
    }
    .insight-card__chip{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:34px;
      height:34px;
      border-radius:50%;
      background:linear-gradient(135deg, rgba(236,72,153,.95), rgba(168,85,247,.85));
      color:#fff;
      font-size:.9rem;
      box-shadow:0 8px 16px rgba(236,72,153,.28);
    }
    .insight-card__metric{display:flex;align-items:baseline;justify-content:space-between;gap:.5rem}
    .insight-card__value{font-size:1.35rem;font-weight:800;color:var(--accent)}
    .insight-card__delta{
      font-size:.78rem;
      font-weight:700;
      padding:.2rem .55rem;
      border-radius:999px;
      background:rgba(236,72,153,.12);
      color:var(--accent);
      letter-spacing:.01em;
    }
    .insight-card__delta.positive{background:rgba(16,185,129,.12);color:#10b981;box-shadow:inset 0 0 0 1px rgba(16,185,129,.18)}
    .insight-card__delta.negative{background:rgba(248,113,113,.12);color:#ef4444;box-shadow:inset 0 0 0 1px rgba(248,113,113,.18)}
    .insight-card__label{font-size:.88rem;font-weight:700;color:var(--fg)}
    .insight-card__support{font-size:.8rem;color:var(--muted);line-height:1.4}
    .insight-progress{
      position:relative;
      height:6px;
      border-radius:999px;
      background:linear-gradient(90deg, rgba(255,255,255,.65), rgba(255,255,255,.45));
      overflow:hidden;
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.2);
    }
    .insight-progress__fill{
      position:absolute;
      inset:0;
      width:var(--progress,0%);
      background:linear-gradient(90deg, rgba(236,72,153,.92), rgba(168,85,247,.88));
      border-radius:inherit;
      box-shadow:0 0 12px rgba(236,72,153,.35);
    }

    .result-board{display:grid;gap:clamp(1rem, .6rem + 1vw, 1.5rem);grid-template-columns:repeat(12,minmax(0,1fr))}
    .result-card{
      border-radius:22px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.72));
      box-shadow:var(--glow);
      padding:1.1rem 1.35rem;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:.6rem;
      text-align:center;
      backdrop-filter:saturate(140%) blur(10px);
      grid-column:span 12;
      transition:transform .28s ease, opacity .28s ease;
      opacity:.96;
    }
    .result-card:hover{
      transform:translateY(-6px);
      opacity:1;
      border-color:rgba(236,72,153,.45);
      box-shadow:var(--glow-strong);
    }
    .result-card:focus-within{
      box-shadow:var(--glow),0 0 0 2px rgba(236,72,153,.55);
    }
    @container tab-section (min-width: 36rem){
      .tab-grid > .tab-card,
      .insight-grid > .insight-card,
      .result-board > .result-card{grid-column:span 6;}
    }
    @container tab-section (min-width: 64rem){
      .tab-grid > .tab-card,
      .insight-grid > .insight-card,
      .result-board > .result-card{grid-column:span 4;}
    }
    .result-card__icon{
      width:40px;
      height:40px;
      border-radius:50%;
      display:grid;
      place-items:center;
      background:linear-gradient(140deg, rgba(236,72,153,.22), rgba(168,85,247,.18));
      color:var(--accent);
      font-size:1.1rem;
      box-shadow:inset 0 0 0 1px rgba(236,72,153,.25);
    }
    .result-card__gauge{
      --gauge:0;
      --gauge-color:rgba(236,72,153,.85);
      position:relative;
      width:96px;
      aspect-ratio:1/1;
      border-radius:50%;
      background:
        radial-gradient(circle at 50% 50%, rgba(255,255,255,.38), rgba(255,255,255,.05) 60%, transparent 61%),
        conic-gradient(var(--gauge-color) calc(var(--gauge) * 1%), rgba(236,72,153,.16) calc(var(--gauge) * 1%));
      display:grid;
      place-items:center;
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.3);
    }
    .result-card__gauge::before{
      content:"";
      position:absolute;
      inset:14px;
      border-radius:50%;
      background:linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.82));
      box-shadow:0 8px 16px rgba(236,72,153,.12), inset 0 0 0 1px rgba(0,0,0,.05);
    }
    .result-card__delta{
      position:relative;
      font-size:.82rem;
      font-weight:800;
      color:var(--accent);
      letter-spacing:.02em;
    }
    .result-card__delta.negative{color:#ef4444}
    .result-card__value{font-size:1.28rem;font-weight:800;color:var(--accent)}
    .result-card__label{font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:700}
    .result-card__support,
    .result-card__hint{font-size:.82rem;color:var(--muted);line-height:1.4}

    .callout-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}
    .callout-card{border-radius:18px;border:1px solid var(--border);padding:1rem 1.2rem;background:linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.68));box-shadow:var(--glow);display:flex;flex-direction:column;gap:.6rem}
    .callout-card ul{margin:0;padding-left:1rem;display:flex;flex-direction:column;gap:.35rem;color:var(--muted)}

    @media (prefers-color-scheme: dark){
      .tab-card,
      .timeline-step,
      .insight-card,
      .result-card,
      .callout-card{background:linear-gradient(180deg, rgba(31,41,55,.88), rgba(31,41,55,.64));border-color:var(--border-d)}
      .tab-card::after{background:linear-gradient(90deg, rgba(236,72,153,.55), rgba(168,85,247,.55));opacity:.6}
      .tab-chip-row .tag-badge{background:rgba(255,255,255,.08);border-color:var(--border-d)}
      .timeline::before{background:linear-gradient(180deg, rgba(236,72,153,.28), rgba(168,85,247,.32))}
      .project-details-content p{color:var(--fg-d)}
      .tab-list li{color:var(--fg-d)}
      .callout-card ul{color:var(--fg-d)}
      .insight-card__label{color:var(--fg-d)}
      .insight-card__support{color:var(--fg-d)}
      .insight-progress{background:rgba(255,255,255,.12);box-shadow:inset 0 0 0 1px rgba(255,255,255,.05)}
      .insight-progress__fill{box-shadow:0 0 12px rgba(236,72,153,.45)}
      .result-card__icon{background:linear-gradient(140deg, rgba(236,72,153,.32), rgba(168,85,247,.28));box-shadow:inset 0 0 0 1px rgba(236,72,153,.35)}
      .result-card__gauge{box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
      .result-card__gauge::before{background:linear-gradient(180deg, rgba(31,41,55,.92), rgba(31,41,55,.72));box-shadow:0 8px 16px rgba(236,72,153,.2), inset 0 0 0 1px rgba(255,255,255,.04)}
      .result-card__support,
      .result-card__hint{color:var(--fg-d)}
      .result-card__label{color:var(--muted-d)}
    }

    /* Long-form content toggles */
    .collapsible-block{
      position:relative;
      max-height:360px;
      overflow:hidden;
      transition:max-height .3s ease;
    }
    .collapsible-block::after{
      content:"";
      position:absolute;
      inset:auto 0 0 0;
      height:96px;
      background:linear-gradient(180deg, rgba(250,248,245,0), rgba(250,248,245,.94));
      pointer-events:none;
      transition:opacity .25s ease;
    }
    @media (prefers-color-scheme: dark){
      .collapsible-block::after{
        background:linear-gradient(180deg, rgba(17,24,39,0), rgba(17,24,39,.9));
      }
    }
    .collapsible-block.expanded{max-height:none; overflow:visible;}
    .collapsible-block.expanded::after{opacity:0;}

    .collapsible-toggle{
      display:inline-flex;
      align-items:center;
      gap:.4rem;
      margin-top:.85rem;
      padding:.45rem .85rem;
      border-radius:999px;
      border:1px solid rgba(236,72,153,.35);
      background:linear-gradient(180deg, rgba(236,72,153,.08), rgba(168,85,247,.08));
      color:var(--accent);
      font-weight:700;
      font-size:.88rem;
      transition:transform .12s ease, box-shadow .15s ease, background .2s ease;
    }
    .collapsible-toggle:hover{ transform:translateY(-1px); box-shadow:var(--glow); }
    .collapsible-toggle:focus-visible{
      outline:none;
      box-shadow:0 0 0 3px rgba(236,72,153,.55), var(--glow);
    }
    .collapsible-toggle svg{width:16px;height:16px;transition:transform .2s ease;}
    .collapsible-toggle[aria-expanded="true"] svg{ transform:rotate(180deg); }

    /* Normalize colors from legacy Tailwind classes so copy looks consistent */
    .project-details-content .text-white{color:var(--fg);}
    .project-details-content .text-gray-300,
    .project-details-content .text-gray-400,
    .project-details-content .text-gray-200{color:var(--muted);}
    .project-details-content .text-lime-200{color:var(--accent);}
    .project-details-content .bg-black\/20{
      background:linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.62));
      border:1px solid var(--border);
      color:var(--fg);
    }
    .project-details-content .bg-gray-800\/50{background:linear-gradient(180deg, rgba(236,72,153,.12), rgba(168,85,247,.12));}
    .project-details-content .border-white\/10{border-color:var(--border);}
    @media (prefers-color-scheme: dark){
      .project-details-content .bg-black\/20{
        background:linear-gradient(180deg, rgba(31,41,55,.82), rgba(31,41,55,.62));
        border-color:var(--border-d);
        color:var(--fg-d);
      }
      .project-details-content .bg-gray-800\/50{background:linear-gradient(180deg, rgba(236,72,153,.22), rgba(168,85,247,.22));}
      .project-details-content .border-white\/10{border-color:var(--border-d);}
    }

    .project-details-content table{
      width:100%;
      border-collapse:separate;
      border-spacing:0;
      background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.72));
      border:1px solid var(--border);
      border-radius:14px;
      overflow:hidden;
      box-shadow:var(--glow);
      margin-top:1.25rem;
    }
    .project-details-content thead{background:linear-gradient(180deg, rgba(236,72,153,.16), rgba(168,85,247,.16));}
    .project-details-content th,
    .project-details-content td{padding:.75rem 1rem; border-bottom:1px solid var(--border); color:var(--fg);}
    .project-details-content th{font-weight:700; font-size:.75rem; text-transform:uppercase; letter-spacing:.06em; opacity:.9;}
    .project-details-content tbody tr:nth-child(even){background:rgba(255,255,255,.55);}
    .project-details-content tbody tr:last-child td{border-bottom:none;}
    @media (prefers-color-scheme: dark){
      .project-details-content table{background:linear-gradient(180deg, rgba(31,41,55,.92), rgba(31,41,55,.72)); border-color:var(--border-d);}
      .project-details-content thead{background:linear-gradient(180deg, rgba(236,72,153,.26), rgba(168,85,247,.26));}
      .project-details-content th,
      .project-details-content td{color:var(--fg-d); border-color:var(--border-d);}
      .project-details-content tbody tr:nth-child(even){background:rgba(31,41,55,.65);}
    }

    /* Long-form content toggles */
    .collapsible-block{
      position:relative;
      max-height:360px;
      overflow:hidden;
      transition:max-height .3s ease;
    }
    .collapsible-block::after{
      content:"";
      position:absolute;
      inset:auto 0 0 0;
      height:96px;
      background:linear-gradient(180deg, rgba(250,248,245,0), rgba(250,248,245,.94));
      pointer-events:none;
      transition:opacity .25s ease;
    }
    @media (prefers-color-scheme: dark){
      .collapsible-block::after{
        background:linear-gradient(180deg, rgba(17,24,39,0), rgba(17,24,39,.9));
      }
    }
    .collapsible-block.expanded{max-height:none; overflow:visible;}
    .collapsible-block.expanded::after{opacity:0;}

    .collapsible-toggle{
      display:inline-flex;
      align-items:center;
      gap:.4rem;
      margin-top:.85rem;
      padding:.45rem .85rem;
      border-radius:999px;
      border:1px solid rgba(236,72,153,.35);
      background:linear-gradient(180deg, rgba(236,72,153,.08), rgba(168,85,247,.08));
      color:var(--accent);
      font-weight:700;
      font-size:.88rem;
      transition:transform .12s ease, box-shadow .15s ease, background .2s ease;
    }
    .collapsible-toggle:hover{ transform:translateY(-1px); box-shadow:var(--glow); }
    .collapsible-toggle svg{width:16px;height:16px;transition:transform .2s ease;}
    .collapsible-toggle[aria-expanded="true"] svg{ transform:rotate(180deg); }

    /* Metrics row (fits text nicely) */
    .metric-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:14px}
    .metric-card{
      display:flex;flex-direction:column;gap:.25rem;align-items:center;justify-content:center;
      padding:.85rem;border-radius:14px;background:linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.65));
      border:1px solid var(--border);min-height:70px;box-shadow: var(--glow);
      text-align:center
    }
    @media (prefers-color-scheme: dark){
      .metric-card{background:linear-gradient(180deg, rgba(31,41,55,.85), rgba(31,41,55,.65)); border-color:var(--border-d)}
    }
    .metric-card-value{font-weight:900;font-size: clamp(1rem, .95rem + .2vw, 1.15rem)}
    .metric-card-label{font-size: clamp(.7rem, .68rem + .1vw, .78rem);opacity:.95}

    /* Methodology (jelly tiles with numbered beads) */
    .methodology-container{display:grid;gap:14px;grid-template-columns:1fr;counter-reset:step}
    @media (min-width:768px){.methodology-container{grid-template-columns:repeat(2,1fr)}}
    .methodology-item{
      position:relative;display:flex;flex-direction:column;gap:.5rem;
      border:1px solid var(--border);border-radius:16px;
      background:linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.65));
      padding:16px 16px 14px 56px;min-height:118px;box-shadow: var(--glow);
      transition: transform .12s ease, box-shadow .15s ease;
    }
    .methodology-item:hover{ transform: translateY(-1px); box-shadow: var(--glow-strong); }
    @media (prefers-color-scheme: dark){
      .methodology-item{ background:linear-gradient(180deg, rgba(31,41,55,.85), rgba(31,41,55,.65)); border-color:var(--border-d) }
    }
    .methodology-item .tag-badge{
      display:inline-block;font-size:.72rem;padding:.28rem .6rem;border-radius:var(--chip-br);
      border:1px solid var(--border);margin-right:.35rem;margin-top:.4rem; background:rgba(255,255,255,.6)
    }
    @media (prefers-color-scheme: dark){ .methodology-item .tag-badge{ border-color:var(--border-d); background:rgba(255,255,255,.08) } }
    .methodology-item::before{
      counter-increment:step;content:counter(step);position:absolute;left:16px;top:16px;
      width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:.9rem;color:#fff;
      background: radial-gradient(120% 120% at 30% 20%, var(--accent), var(--accent-2));
      box-shadow: 0 4px 10px rgba(236,72,153,.35), inset 0 -2px 6px rgba(0,0,0,.18);
      animation: jellyPop .6s ease both;
    }

    @media (prefers-reduced-motion: reduce){
      *, *::before, *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;}
      .panel,
      .project-hero--breakout,
      .project-hero__media,
      .details-tabs button,
      .collapsible-toggle,
      .collapsible-block,
      .tab-card,
      .insight-card,
      .result-card,
      .timeline-step,
      .methodology-item,
      [data-media-carousel-item] > *,
      [data-carousel-prev],
      [data-carousel-next],
      [data-carousel-index]{transition-duration:.01ms!important;transition-delay:0s!important;}
      .methodology-item::before{animation:none!important;}
      [data-media-carousel-track]{scroll-behavior:auto;}
    }

    /* Thumbnails */
    .project-thumbnail{border-radius:14px}
    .project-thumbnail img{border-radius:12px}

    /* Small “jelly” micro-anim */
    @keyframes jellyPop{
      0%{ transform: scale(.7)}
      60%{ transform: scale(1.08)}
      100%{ transform: scale(1)}
    }
  `;
  document.head.appendChild(style);
  // enable theme by default
  document.documentElement.classList.add('theme-jelly');
})();

const mediaCarouselMotion = (() => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return { getBehavior: () => 'smooth' };
  }

  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  let behavior = query.matches ? 'auto' : 'smooth';

  const updateBehavior = () => {
    behavior = query.matches ? 'auto' : 'smooth';
  };

  if (typeof query.addEventListener === 'function') {
    query.addEventListener('change', updateBehavior);
  } else if (typeof query.addListener === 'function') {
    query.addListener(updateBehavior);
  }

  return {
    getBehavior: () => behavior
  };
})();

function setupMediaCarousels(root = document) {
  if (!root || typeof root.querySelectorAll !== 'function') return;

  const carousels = root.querySelectorAll('[data-media-carousel]');
  carousels.forEach((carousel) => {
    const track = carousel.querySelector('[data-media-carousel-track]') || carousel;
    const items = Array.from(track.querySelectorAll('[data-media-carousel-item]'));
    if (!items.length) return;

    if (carousel.dataset.carouselInitialized === 'true') return;
    carousel.dataset.carouselInitialized = 'true';

    let activeIndex = items.findIndex((item) =>
      item.classList.contains('is-active') || item.getAttribute('aria-current') === 'true'
    );
    if (activeIndex < 0) activeIndex = 0;

    const clampIndex = (index) => Math.max(0, Math.min(index, items.length - 1));
    const scrollToIndex = (index) => {
      const targetIndex = clampIndex(index);
      const target = items[targetIndex];
      if (!target || typeof target.scrollIntoView !== 'function') return;

      target.scrollIntoView({
        behavior: mediaCarouselMotion.getBehavior(),
        inline: 'center',
        block: 'nearest'
      });

      activeIndex = targetIndex;
    };

    carousel.scrollToIndex = scrollToIndex;

    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    prevBtn?.addEventListener('click', () => scrollToIndex(activeIndex - 1));
    nextBtn?.addEventListener('click', () => scrollToIndex(activeIndex + 1));

    carousel.querySelectorAll('[data-carousel-index]').forEach((btn) => {
      const indexValue = Number(btn.getAttribute('data-carousel-index'));
      if (Number.isNaN(indexValue)) return;
      btn.addEventListener('click', () => scrollToIndex(indexValue));
    });

    scrollToIndex(activeIndex);
  });
}

const COLLAPSIBLE_LIMIT = 360;

function ensureCollapsibleForTab(tab){
  if (!tab) return;
  const block = tab.querySelector('.leading-relaxed');
  if (!block) return;

  const existingToggle = block.nextElementSibling;
  if (existingToggle && existingToggle.classList.contains('collapsible-toggle')) {
    existingToggle.remove();
  }
  block.classList.remove('collapsible-block', 'expanded');

  const schedule = window.requestAnimationFrame || function(cb){ return setTimeout(cb, 16); };
  schedule(()=>{
    if (block.scrollHeight <= COLLAPSIBLE_LIMIT + 32) return;

    block.classList.add('collapsible-block');
    const toggle = document.createElement('button');
    const collapsedText = 'Show full details';
    const expandedText = 'Show less';
    toggle.type = 'button';
    toggle.className = 'collapsible-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = `<span class="collapsible-toggle-label">${collapsedText}</span>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L10 11.09l4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z"/></svg>`;
    toggle.addEventListener('click', ()=>{
      const expanded = block.classList.toggle('expanded');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      const label = toggle.querySelector('.collapsible-toggle-label');
      if (label) {
        label.textContent = expanded ? expandedText : collapsedText;
      }
    });
    block.after(toggle);
  });
}

// 2) ---- Rendering (alignment-aware + readable) ----
function renderProjectDetails(project, container) {
  if (!project || !project.content) { container.innerHTML = ''; return; }

  const panel = document.createElement('div');
  panel.className = 'project-details-content panel';
  const metrics = Array.isArray(project.content.metrics) ? project.content.metrics : [];
  const metricsHtml = metrics.length ? `
      <div class="metric-row">
        ${metrics.map(m =>
          `<div class="metric-card">
             <div class="metric-card-value">${m.value}</div>
             <div class="metric-card-label">${m.label}</div>
           </div>`).join('')}
      </div>
  ` : '';

  const heroBullets = (project.hero?.bullets || []).map(b => {
    if (typeof b === 'string') {
      return `<li class="project-hero__bullet"><span class="project-hero__bullet-title">${b}</span></li>`;
    }
    const title = b?.title || b?.headline || b?.text || '';
    const copy = b?.description || b?.copy || '';
    return `<li class="project-hero__bullet">
              <span class="project-hero__bullet-title">${title}</span>
              ${copy ? `<span class="project-hero__bullet-copy">${copy}</span>` : ''}
            </li>`;
  }).join('');
  const heroBulletsHtml = heroBullets ? `<ul class="project-hero__bullets">${heroBullets}</ul>` : '';
  const heroMedia = project.hero?.media;
  let heroMediaHtml = '';
  if (heroMedia?.type === 'video' && heroMedia.src) {
    const poster = heroMedia.poster ? ` poster="${heroMedia.poster}"` : '';
    const autoplay = heroMedia.autoplay ? ' autoplay muted loop playsinline' : '';
    const mime = heroMedia.mime || 'video/mp4';
    heroMediaHtml = `<video${poster}${autoplay} preload="metadata"><source src="${heroMedia.src}" type="${mime}"></video>`;
  } else if (heroMedia?.src) {
    heroMediaHtml = `<img src="${heroMedia.src}" alt="${heroMedia.alt || project.title}">`;
  }
  const heroSubhead = project.hero?.subhead || project.hero?.subtitle || project.outcome || project.hook || '';
  const heroHtml = project.hero ? `
      <div class="project-breakout project-breakout--edge">
        <div class="project-breakout__inner">
          <section class="project-hero" data-slot="project-hero">
            ${heroMediaHtml ? `<figure class="project-hero__media">${heroMediaHtml}</figure>` : ''}
            <div class="project-hero__summary">
              ${project.hero.eyebrow ? `<p class="project-hero__eyebrow">${project.hero.eyebrow}</p>` : ''}
              <h2 class="project-hero__headline">${project.hero.headline || project.title}</h2>
              ${heroSubhead ? `<p class="project-hero__subhead">${heroSubhead}</p>` : ''}
              ${heroBulletsHtml}
            </div>
          </section>
        </div>
      </div>
  ` : '';

  const tabOrder = ['overview','methodology','analysis','results','media'];
  const tabs = tabOrder.filter(key => project.content[key]);
  const tabButtonsHtml = tabs.map((t,i)=>
    `<button data-tab="${t}" class="${i===0?'active':''}">${t[0].toUpperCase()+t.slice(1)}</button>`
  ).join('');
  const tabContentHtml = tabs.map((key,i)=>{
    const inner = key === 'media'
      ? project.content[key]
      : `<div class="leading-relaxed">${project.content[key]}</div>`;
    return `
      <div class="tab-content ${i===0?'active':''}" data-tab-content="${key}">
        ${inner}
      </div>
    `;
  }).join('');

  panel.innerHTML = `
    <div class="panel-rail">
      ${heroHtml}
      ${metricsHtml}
      <div class="details-tabs flex flex-wrap items-center border-b mb-6 pb-3">
        ${tabButtonsHtml}
      </div>
      ${tabContentHtml}
    </div>
  `;

  container.innerHTML = '';
  container.appendChild(panel);
  setupMediaCarousels(panel);
  ensureCollapsibleForTab(panel.querySelector('.tab-content.active'));

  // Tabs
  const tabsWrap = panel.querySelector('.details-tabs');
  if (!tabsWrap) return;
  tabsWrap.addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-tab]');
    if (!btn) return;
    tabsWrap.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    panel.querySelectorAll('.tab-content').forEach(tc=>tc.classList.remove('active'));
    const targetTab = panel.querySelector(`.tab-content[data-tab-content="${tab}"]`);
    if (!targetTab) return;
    targetTab.classList.add('active');
    ensureCollapsibleForTab(targetTab);
  });
}

function renderProjectList(listEl, detailsEl, activeId) {
  const active = window.projects.find(p=>p.id===activeId) || window.projects[0];
  const others = window.projects.filter(p=>p.id!==active.id);

  const highlights = (active.content.metrics||[]).map(m=>`
    <div class="rounded-xl border border-black/10 bg-white/70 p-3 text-center panel">
      <div class="font-extrabold text-base md:text-lg" style="color:var(--accent)">${m.value}</div>
      <div class="text-[11px] md:text-xs" style="color:var(--muted)">${m.label}</div>
    </div>`).join('');

  const activeHtml = `
    <div class="active-project-panel">
      <div class="panel">
        <div class="panel-rail">
          <div class="grid md:grid-cols-3 gap-4 items-center">
            <div class="md:col-span-2">
              <h3 class="text-xl md:text-2xl font-bold">${active.title}</h3>
              <p class="mt-1 text-sm md:text-base" style="color:var(--muted)">${active.hook}</p>
              <p class="font-semibold mt-2 text-sm md:text-base" style="color:var(--accent)">${active.outcome}</p>
            </div>
            <img class="rounded-xl w-full h-32 md:h-36 object-cover" src="${active.images?.[0]||''}" alt="${active.title}">
          </div>
          <div class="grid grid-cols-3 gap-2 md:gap-3 mt-4">${highlights}</div>
        </div>
      </div>
    </div>`;

  const thumbs = others.map(p=>`
    <button class="project-thumbnail panel p-3 md:p-4 w-full text-left flex items-center gap-3 hover:scale-[1.01] transition"
            data-project-id="${p.id}">
      <img class="rounded-lg w-16 md:w-20 h-14 md:h-16 object-cover" src="${p.images?.[0]||''}" alt="${p.title}">
      <span class="font-semibold text-sm md:text-base">${p.title}</span>
    </button>`).join('');

  listEl.innerHTML = `${activeHtml}<div class="mt-3 md:mt-4 flex flex-col gap-2">${thumbs}</div>`;

  listEl.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-project-id]');
    if (!btn) return;
    const id = btn.getAttribute('data-project-id');
    renderProjectList(listEl, detailsEl, id);
    const proj = window.projects.find(p=>p.id===id);
    renderProjectDetails(proj, detailsEl);
  }, { once:true });

  renderProjectDetails(active, detailsEl);
}

// Public init
window.initPortfolio = function(opts) {
  const list = document.querySelector(opts.listSelector);
  const details = document.querySelector(opts.detailsSelector);
  if (!list || !details) return;
  renderProjectList(list, details, (window.projects[0]||{}).id);
  details.classList.add('visible');
  // Ensure jelly theme on
  document.documentElement.classList.add('theme-jelly');
  document.body.classList.add('theme-jelly');
};

window.setupMediaCarousels = setupMediaCarousels;

// 3) ---- Project Data (complete, unchanged copy) ----
window.projects = [
  {
    id: 'guide',
    slug: 'guide',
    assetsPath: '/content/assets-guide.json',
    sections: ['research','results'],
    layout: { usesCarousel: true, edgeToEdge: true },
    title: "Reinventing The TV Guide",
    hook: "A strategic research initiative to unify user experiences across two major platforms, turning a point of friction into a driver for engagement and revenue.",
    outcome: "~$7.46M Estimated Annual Impact",
    images: ["https://images.unsplash.com/photo-1616428784112-2544265780d6?q=80&w=2070&auto=format&fit=crop"],
    hero: {
      eyebrow: 'Strategic Initiative',
      headline: 'Unified TV guide, reimagined',
      subhead: 'Blending Sling speed with DISH familiarity through layered research.',
      media: {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=2070&auto=format&fit=crop',
        alt: 'Viewer browsing a modern television guide interface'
      },
      bullets: [
        { title: 'North-star blueprint', description: 'Shared navigation language spanning two live TV ecosystems.' },
        { title: 'Evidence-led roadmap', description: 'Mixed-method insights de-risked personalization and rollout decisions.' },
        { title: 'Meaningful impact', description: 'Projected ~$7.46M annual value through retention, upsell, and efficiency.' }
      ]
    },
    content: {
      metrics: [
        { value: "~$7.46M", label: "Estimated Annual Value Impact" },
        { value: "90%", label: "Target Task Success Rate" },
        { value: "12%", label: "Reduction in CX Complaints" }
      ],
      overview: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Project Snapshot</p>
          <h4>Unified guide for Sling &amp; DISH</h4>
          <p class="tab-section__lede">Customers bounced between two incompatible guide layouts. We reset the experience around a single blueprint that feels native on both platforms.</p>
        </header>
        <div class="tab-grid">
          <article class="tab-card">
            <h5>Background</h5>
            <ul class="tab-list">
              <li>The live TV guide is the default home for both services.</li>
              <li>Separate roadmaps created inconsistent navigation behaviors.</li>
            </ul>
          </article>
          <article class="tab-card">
            <h5>Core challenge</h5>
            <ul class="tab-list">
              <li>Blend DISH’s trusted workflows with Sling’s speed and personalization.</li>
              <li>Roll out change without eroding confidence in the familiar grid.</li>
            </ul>
          </article>
          <article class="tab-card">
            <h5>Focus for research</h5>
            <ul class="tab-list">
              <li>Map shared frustrations and accessibility gaps across audiences.</li>
              <li>Quantify the usability wins that would unlock measurable value.</li>
              <li>Translate findings into a playbook for design, product, and engineering.</li>
            </ul>
          </article>
        </div>
      </section>`,
      methodology: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Approach</p>
          <h4>Layered research to de-risk a unified release</h4>
          <p class="tab-section__lede">Each round framed where to converge, when to localize, and which bets delivered the biggest lift.</p>
        </header>
        <div class="timeline">
          <article class="timeline-step">
            <h5>Discovery &amp; alignment</h5>
            <p>Partnered with product, marketing, and data science to define success metrics and understand platform constraints.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">Stakeholder Interviews</span>
              <span class="tag-badge">Data Audit</span>
              <span class="tag-badge">JIRA</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Generative interviews</h5>
            <p>Met with Sling and DISH households to surface behaviors, device context, and the root causes of guide abandonment.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">Remote Interviews</span>
              <span class="tag-badge">Lookback</span>
              <span class="tag-badge">Google Meet</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Synthesis &amp; co-design</h5>
            <p>Mapped patterns into opportunity areas and co-led prioritization workshops with design and product.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">Miro</span>
              <span class="tag-badge">Figma</span>
              <span class="tag-badge">Ideation Workshops</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Validation &amp; rollout</h5>
            <p>Ran iterative concept tests and delivered evidence-backed requirements for engineering handoff.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">UserTesting</span>
              <span class="tag-badge">Figma Prototypes</span>
              <span class="tag-badge">Confluence</span>
            </div>
          </article>
        </div>
      </section>`,
      analysis: (() => {
        const insightData = [
          { icon: '📺', label: 'Guide engagement → playback', value: 79, delta: -23, support: 'Playback start rate held at 56% despite strong browsing.' },
          { icon: '🎯', label: 'Default filter reliance', value: 73, delta: 9, support: 'Favorite profiles lifted playback conversion by 9 pts.' },
          { icon: '⏱️', label: 'Sessions under 20 seconds', value: 44, delta: -20, support: 'Nearly half of Sling visits ended before playback began.' },
          { icon: '🧭', label: 'Vertical scroll preference', value: 46, delta: -38, support: 'Jump controls adoption lagged at 8% among DISH viewers.' }
        ];
        const deltaClass = (delta) => delta >= 0 ? 'positive' : 'negative';
        const formatDelta = (delta) => `${delta > 0 ? '+' : ''}${delta} pts`;
        return `<section class="tab-section">
          <header class="tab-section__header">
            <p class="tab-eyebrow">Who we designed for</p>
            <h4>Two audiences aligned by shared frustrations</h4>
            <p class="tab-section__lede">Research revealed that both groups valued speed, clarity, and control, even though their habits differed.</p>
          </header>
          <div class="tab-grid">
            <article class="tab-card">
              <span class="tab-card__meta">DISH loyalists · 65+</span>
              <h5>Accessibility-first navigation</h5>
              <ul class="tab-list">
                <li>Prefer predictable vertical scrolling rooted in muscle memory.</li>
                <li>Requested higher contrast presets and better surfacing of hidden actions.</li>
              </ul>
            </article>
            <article class="tab-card">
              <span class="tab-card__meta">Sling streamers · mid-30s</span>
              <h5>Fast personalization</h5>
              <ul class="tab-list">
                <li>Expected quick filters and contextual recommendations.</li>
                <li>Abandoned sessions when the grid felt noisy or repetitive.</li>
              </ul>
            </article>
          </div>
          <div class="tab-section__header">
            <p class="tab-eyebrow">Quantitative signals</p>
            <h4>Behavioral metrics guided the roadmap</h4>
          </div>
          <div class="insight-grid">
            ${insightData.map(ins => `
              <article class="insight-card">
                <span class="insight-card__chip" aria-hidden="true">${ins.icon}</span>
                <div class="insight-card__metric">
                  <span class="insight-card__value">${ins.value}%</span>
                  <span class="insight-card__delta ${deltaClass(ins.delta)}">${formatDelta(ins.delta)}</span>
                </div>
                <div class="insight-card__label">${ins.label}</div>
                <div class="insight-progress" role="presentation">
                  <div class="insight-progress__fill" style="--progress:${ins.value}%"></div>
                </div>
                ${ins.support ? `<p class="insight-card__support">${ins.support}</p>` : ''}
              </article>
            `).join('')}
          </div>
        </section>`;
      })(),
      results: (() => {
        const resultData = [
          { icon: '💎', label: 'Annual value impact', value: '~$5.83M', delta: 86, support: 'Retention gains tied to a cleaner guide.' },
          { icon: '🚀', label: 'Feature upsell', value: '~$1.94M', delta: 72, support: 'Personalized surfaces improved cross-sell moments.' },
          { icon: '📈', label: 'Ad revenue', value: '~$193K', delta: 64, support: 'Contextual placements benefitted from better targeting.' },
          { icon: '🛠️', label: 'Operational savings', value: '~$63K', delta: 48, support: 'Reduced support contacts thanks to clarified flows.' }
        ];
        const gaugeColor = (delta) => delta >= 0 ? 'rgba(236,72,153,.85)' : 'rgba(248,113,113,.85)';
        const formatDelta = (delta) => `${delta >= 0 ? '+' : ''}${delta}%`;
        return `<section class="tab-section">
          <header class="tab-section__header">
            <p class="tab-eyebrow">Outcome</p>
            <h4>Evidence that unlocked a confident go-to-market</h4>
            <p class="tab-section__lede">Research distilled into a shared roadmap that balanced familiarity with modernization.</p>
          </header>
          <div class="result-board">
            ${resultData.map(res => `
              <article class="result-card">
                <span class="result-card__icon" aria-hidden="true">${res.icon}</span>
                <div class="result-card__gauge" style="--gauge:${Math.min(Math.abs(res.delta), 100)}; --gauge-color:${gaugeColor(res.delta)};">
                  <span class="result-card__delta ${res.delta < 0 ? 'negative' : ''}">${formatDelta(res.delta)}</span>
                </div>
                <span class="result-card__value">${res.value}</span>
                <span class="result-card__label">${res.label}</span>
                ${res.support ? `<p class="result-card__support">${res.support}</p>` : ''}
              </article>
            `).join('')}
          </div>
        </section>`;
      })(),
      media: `
        <div class="project-breakout project-breakout--edge">
          <div class="project-breakout__inner">
            <section class="project-hero" data-slot="project-hero">…</section>
          </div>
        </div>
        <div class="project-section-stack">
          <section id="research" data-slot="project-research"></section>
          <section id="results" data-slot="project-results"></section>
        </div>
      `
    }
  },
  {
    id: 'gundersen',
    title: "Gundersen Pharmacy",
    hook: "Streamlining prescription refills by empowering patients and reducing manual work for pharmacy staff, resulting in significant cost savings and improved patient satisfaction.",
    outcome: "Achieved 12,334+ Active App Users within 6 months.",
    images: ["https://images.unsplash.com/photo-1588720490792-26f5053ae81e?q=80&w=2070&auto=format&fit=crop"],
    hero: {
      eyebrow: 'Healthcare Service Design',
      headline: 'Refills that run themselves',
      subhead: 'Automation and outreach freed pharmacists while reassuring patients.',
      media: {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1580281658629-6b0ef3d13de1?q=80&w=2069&auto=format&fit=crop',
        alt: 'Pharmacist providing a prescription to a patient at the counter'
      },
      bullets: [
        { title: 'Operational clarity', description: 'Shadowing exposed 2,600+ monthly manual hours tied to refills.' },
        { title: 'Adoption catalysts', description: 'Reframed messaging and automation created 12,334+ active users.' },
        { title: 'Sustainable savings', description: 'Digital flows now power 36% of refills and save $702K+ each year.' }
      ]
    },
    content: {
      metrics: [
        { value: "12,334+", label: "Active App Users" },
        { value: "36%", label: "Refill Volume through App" },
        { value: "$702k+", label: "Annual Labor Cost Savings" }
      ],
      overview: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Project Snapshot</p>
          <h4>Modernizing refill experiences</h4>
          <p class="tab-section__lede">Patients wanted quick, self-serve refills while pharmacists needed relief from repetitive calls. Research reframed adoption as the critical lever.</p>
        </header>
        <div class="tab-grid">
          <article class="tab-card">
            <h5>Context</h5>
            <ul class="tab-list">
              <li>Legacy refill workflows consumed 3.5 minutes per order and more than 2,600 staff hours each month.</li>
              <li>Manual phone updates frustrated both patients and pharmacy teams.</li>
            </ul>
          </article>
          <article class="tab-card">
            <h5>Business goals</h5>
            <ul class="tab-list">
              <li>Reach 10K+ active app users inside six months.</li>
              <li>Shift at least 25% of monthly refills into the digital flow.</li>
            </ul>
          </article>
          <article class="tab-card">
            <h5>Experience goals</h5>
            <ul class="tab-list">
              <li>Automate refill reminders and status updates.</li>
              <li>Cut pharmacist phone time in half and improve satisfaction scores.</li>
            </ul>
          </article>
        </div>
      </section>`,
      methodology: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Approach</p>
          <h4>Mixed-method research anchored in operations</h4>
          <p class="tab-section__lede">We paired workflow analysis with usability evaluation to understand both staff pain and patient perception.</p>
        </header>
        <div class="timeline">
          <article class="timeline-step">
            <h5>Workflow immersion</h5>
            <p>Shadowed pharmacists, RNs, and medical assistants to document the manual process and quantify lost time.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">Ride-alongs</span>
              <span class="tag-badge">Process Mapping</span>
              <span class="tag-badge">Service Blueprint</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Usability diagnostics</h5>
            <p>Evaluated the existing app with patients and staff to surface friction in navigation, messaging, and trust.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">Heuristic Review</span>
              <span class="tag-badge">Moderated Tests</span>
              <span class="tag-badge">SUS Survey</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Awareness discovery</h5>
            <p>Identified that the largest barrier was awareness, prompting collaboration with marketing to reposition the launch.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">Patient Interviews</span>
              <span class="tag-badge">Journey Mapping</span>
              <span class="tag-badge">Channel Strategy</span>
            </div>
          </article>
        </div>
        <div class="callout-grid">
          <article class="callout-card">
            <h5>Manual workflow snapshot</h5>
            <ul>
              <li>Average of 3.5 minutes per refill multiplied to 2,600+ hours each month.</li>
              <li>Patients called repeatedly for updates because messaging was not automated.</li>
            </ul>
          </article>
        </div>
      </section>`,
      analysis: (() => {
        const insightData = [
          { icon: '✅', label: 'Task success (moderated)', value: 95, delta: 12, support: 'Completion rate climbed with only light prompts.' },
          { icon: '📣', label: 'Unaided awareness', value: 22, delta: -45, support: 'Most patients had not heard of the app prior to outreach.' },
          { icon: '💬', label: 'Confidence (SUS)', value: 78, delta: 8, support: 'Scores signaled trust but requested warmer confirmations.' },
          { icon: '⚙️', label: 'Automation leverage', value: 68, delta: 31, support: 'Projected reduction in refill calls once updates triggered automatically.' }
        ];
        const deltaClass = (delta) => delta >= 0 ? 'positive' : 'negative';
        const formatDelta = (delta) => `${delta > 0 ? '+' : ''}${delta} pts`;
        return `<section class="tab-section">
          <header class="tab-section__header">
            <p class="tab-eyebrow">Key findings</p>
            <h4>What unlocked adoption and loyalty</h4>
            <p class="tab-section__lede">Insights revealed that usability was strong; awareness and emotional reassurance were missing.</p>
          </header>
          <div class="insight-grid">
            ${insightData.map(ins => `
              <article class="insight-card">
                <span class="insight-card__chip" aria-hidden="true">${ins.icon}</span>
                <div class="insight-card__metric">
                  <span class="insight-card__value">${ins.value}%</span>
                  <span class="insight-card__delta ${deltaClass(ins.delta)}">${formatDelta(ins.delta)}</span>
                </div>
                <div class="insight-card__label">${ins.label}</div>
                <div class="insight-progress" role="presentation">
                  <div class="insight-progress__fill" style="--progress:${ins.value}%"></div>
                </div>
                ${ins.support ? `<p class="insight-card__support">${ins.support}</p>` : ''}
              </article>
            `).join('')}
          </div>
        </section>`;
      })(),
      results: (() => {
        const resultData = [
          { icon: '📱', label: 'Active app users', value: '12,334+', delta: 23, support: 'Exceeded the 10K target within six months.' },
          { icon: '🔁', label: 'Monthly refills via app', value: '16,476', delta: 36, support: 'Shifted 36% of monthly refills into the digital flow.' },
          { icon: '💼', label: 'Annual labor savings', value: '$702K+', delta: 42, support: 'Automation reduced call volume and manual reconciliation.' }
        ];
        const gaugeColor = (delta) => delta >= 0 ? 'rgba(236,72,153,.85)' : 'rgba(248,113,113,.85)';
        const formatDelta = (delta) => `${delta >= 0 ? '+' : ''}${delta}%`;
        return `<section class="tab-section">
          <header class="tab-section__header">
            <p class="tab-eyebrow">Outcome</p>
            <h4>Campaign &amp; product adjustments that delivered</h4>
            <p class="tab-section__lede">Reframing the challenge as awareness plus reassurance led to rapid adoption and measurable savings.</p>
          </header>
          <div class="result-board">
            ${resultData.map(res => `
              <article class="result-card">
                <span class="result-card__icon" aria-hidden="true">${res.icon}</span>
                <div class="result-card__gauge" style="--gauge:${Math.min(Math.abs(res.delta), 100)}; --gauge-color:${gaugeColor(res.delta)};">
                  <span class="result-card__delta ${res.delta < 0 ? 'negative' : ''}">${formatDelta(res.delta)}</span>
                </div>
                <span class="result-card__value">${res.value}</span>
                <span class="result-card__label">${res.label}</span>
                ${res.support ? `<p class="result-card__support">${res.support}</p>` : ''}
              </article>
            `).join('')}
          </div>
          <div class="callout-grid">
          <article class="callout-card">
            <h5>What changed</h5>
            <ul>
              <li>Launched proactive SMS/email updates for every refill milestone.</li>
              <li>Refreshed onboarding with in-clinic signage and clinician scripts.</li>
              <li>Measured satisfaction lift through follow-up surveys and support tickets.</li>
            </ul>
          </article>
        </div>
      </section>`,
      overview: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Project Snapshot</p>
          <h4>Designing interactive Live Rooms</h4>
          <p class="tab-section__lede">We explored how live chats, reactions, and trivia could enhance viewing without overwhelming audiences.</p>
        </header>
        <div class="tab-grid">
          <article class="tab-card">
            <h5>Context</h5>
            <ul class="tab-list">
              <li>Concept introduced to extend live TV engagement with social touchpoints.</li>
              <li>Needed to balance lean-back viewing with optional participation.</li>
            </ul>
          </article>
          <article class="tab-card">
            <h5>Research goals</h5>
            <ul class="tab-list">
              <li>Validate desirability of co-viewing features across sports and reality programming.</li>
              <li>Ensure interactivity never blocks the core video experience.</li>
              <li>Understand device preferences between TV and mobile.</li>
            </ul>
          </article>
          <article class="tab-card">
            <h5>Success signals</h5>
            <ul class="tab-list">
              <li>High survey favorability for interactive elements.</li>
              <li>Clear preferences for control, pacing, and notification tone.</li>
            </ul>
          </article>
        </div>
      </section>`,
      methodology: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Approach</p>
          <h4>Progressive validation from concept to live pilots</h4>
          <p class="tab-section__lede">We combined evaluative research and live event pilots to measure desirability, usability, and social dynamics.</p>
        </header>
        <div class="timeline">
          <article class="timeline-step">
            <h5>Concept lab</h5>
            <p>Interviewed experienced and new interactive streaming users to gauge expectations and vocabulary.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">User Interviews</span>
              <span class="tag-badge">UserZoom</span>
              <span class="tag-badge">InVision</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Live pilot · NBA</h5>
            <p>Ran a real-time watch party with 79 participants to stress-test pace, chat volume, and reactions.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">LiveLike</span>
              <span class="tag-badge">Surveys</span>
            </div>
          </article>
          <article class="timeline-step">
            <h5>Live pilot · Reality TV</h5>
            <p>Followed with 35 participants and a 98% survey completion rate to compare slower-tempo programming.</p>
            <div class="tab-chip-row">
              <span class="tag-badge">LiveLike</span>
              <span class="tag-badge">UserZoom</span>
            </div>
          </article>
        </div>
      </section>`,
      analysis: (() => {
        const conceptSignals = [
          { icon: '🤝', label: 'Interest in connection', value: 82, delta: 18, support: 'Viewers rallied around co-viewing during tentpole moments.' },
          { icon: '📱', label: 'Second screen advantage', value: 71, delta: 26, support: 'Participants leaned on phones to protect the TV screen.' },
          { icon: '✨', label: 'Mini-interaction excitement', value: 63, delta: 15, support: 'Emoji reactions and trivia felt low-effort and fun.' },
          { icon: '🎯', label: 'Audience nuance', value: 54, delta: -12, support: 'Sports vs. reality fans asked for different pacing.' }
        ];
        const pilotSignals = [
          { icon: '🛡️', label: 'Control is non-negotiable', value: 87, delta: 21, support: 'Opt-in toggles made interactivity feel safe.' },
          { icon: '📳', label: 'Mobile companion wins', value: 76, delta: 18, support: 'Most managed chat on their phone while video stayed clean.' },
          { icon: '🎉', label: 'Reactions boost fun', value: 56, delta: 12, support: 'Emoji reactions and quizzes topped participation charts.' },
          { icon: '⏱️', label: 'Tempo matters', value: 40, delta: -14, support: 'Fast sports play needed bursts; reality fans wanted curated polls.' }
        ];
        const deltaClass = (delta) => delta >= 0 ? 'positive' : 'negative';
        const formatDelta = (delta) => `${delta > 0 ? '+' : ''}${delta} pts`;
        const renderCard = (ins) => `
              <article class="insight-card">
                <span class="insight-card__chip" aria-hidden="true">${ins.icon}</span>
                <div class="insight-card__metric">
                  <span class="insight-card__value">${ins.value}%</span>
                  <span class="insight-card__delta ${deltaClass(ins.delta)}">${formatDelta(ins.delta)}</span>
                </div>
                <div class="insight-card__label">${ins.label}</div>
                <div class="insight-progress" role="presentation">
                  <div class="insight-progress__fill" style="--progress:${ins.value}%"></div>
                </div>
                ${ins.support ? `<p class="insight-card__support">${ins.support}</p>` : ''}
              </article>`;
        return `<section class="tab-section">
          <header class="tab-section__header">
            <p class="tab-eyebrow">Insight themes</p>
            <h4>Clarity and control keep social TV delightful</h4>
            <p class="tab-section__lede">Participants wanted energy and connection, but only when they could decide how much interaction to invite.</p>
          </header>
          <div class="tab-section__header">
            <p class="tab-eyebrow">Concept exploration</p>
            <h4>Early reactions to the idea</h4>
          </div>
          <div class="insight-grid">
            ${conceptSignals.map(renderCard).join('')}
          </div>
          <div class="tab-section__header">
            <p class="tab-eyebrow">Live pilots</p>
            <h4>What changed once the feature shipped</h4>
          </div>
          <div class="insight-grid">
            ${pilotSignals.map(renderCard).join('')}
          </div>
        </section>`;
      })(),
      results: (() => {
        const resultData = [
          { icon: '🎮', label: 'Feature appeal', value: '87%', delta: 87, support: 'Opt-in controls kept interactivity desirable.' },
          { icon: '📲', label: 'Second screen adoption', value: '76%', delta: 76, support: 'Dual-screen patterns informed experience design.' },
          { icon: '🎯', label: 'Engagement boosts', value: '56%', delta: 56, support: 'Emoji & quizzes drove repeat taps during pilots.' }
        ];
        const gaugeColor = (delta) => delta >= 0 ? 'rgba(236,72,153,.85)' : 'rgba(248,113,113,.85)';
        const formatDelta = (delta) => `${delta >= 0 ? '+' : ''}${delta}%`;
        return `<section class="tab-section">
          <header class="tab-section__header">
            <p class="tab-eyebrow">Outcome</p>
            <h4>Clear guidance for an interactive MVP</h4>
            <p class="tab-section__lede">Research shaped feature priorities and guardrails for social viewing without derailing core playback.</p>
          </header>
          <div class="result-board">
            ${resultData.map(res => `
              <article class="result-card">
                <span class="result-card__icon" aria-hidden="true">${res.icon}</span>
                <div class="result-card__gauge" style="--gauge:${Math.min(Math.abs(res.delta), 100)}; --gauge-color:${gaugeColor(res.delta)};">
                  <span class="result-card__delta ${res.delta < 0 ? 'negative' : ''}">${formatDelta(res.delta)}</span>
                </div>
                <span class="result-card__value">${res.value}</span>
                <span class="result-card__label">${res.label}</span>
                ${res.support ? `<p class="result-card__support">${res.support}</p>` : ''}
              </article>
            `).join('')}
          </div>
          <div class="callout-grid">
          <article class="callout-card">
            <h5>Design principles</h5>
            <ul>
              <li>Give viewers persistent controls to hide or switch devices.</li>
              <li>Tailor prompts to content tempo (sports vs. reality).</li>
              <li>Keep on-screen messaging lightweight to protect the video.</li>
            </ul>
          </article>
          <article class="callout-card">
            <h5>Program takeaways</h5>
            <ul>
              <li>Reality TV leaned into polls and reactions as playful pacing.</li>
              <li>NBA tests favored highlight-triggered prompts over constant chat.</li>
            </ul>
          </article>
        </div>
      </section>`,
      media: `<h4>Media Assets</h4>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <img class="project-image rounded-lg" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" alt="Streaming logos">
          <img class="project-image rounded-lg" src="https://images.unsplash.com/photo-1516245834210-c4c1427873ab?q=80&w=1770&auto=format&fit=crop" alt="Sports screen">
        </div>
        <p class="mt-4 text-sm text-center text-gray-400">Concept visuals from tests and prototypes.</p>`
    }
  }
];
