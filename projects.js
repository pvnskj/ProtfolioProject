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
    .project-hero__media--interactive::after{display:none;}
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
    .project-hero__media > img,
    .project-hero__media > video{
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
    .hero-carousel{
      position:relative;
      display:flex;
      flex-direction:column;
      gap:1rem;
      height:100%;
    }
    .hero-carousel__track{
      --snap-gap:1rem;
      display:flex;
      gap:var(--snap-gap);
      overflow-x:auto;
      padding:1.25rem 1.75rem 1.75rem;
      margin:-1.25rem -1.75rem -1.75rem;
      scroll-snap-type:x mandatory;
      scroll-behavior:smooth;
      scrollbar-width:thin;
    }
    .hero-carousel__track:focus-visible{outline:var(--ring);outline-offset:6px;}
    .hero-carousel__slide{
      position:relative;
      flex:0 0 100%;
      scroll-snap-align:center;
      border-radius:20px;
      overflow:hidden;
      background:rgba(15,23,42,.3);
      min-height:220px;
    }
    .hero-carousel__slide[aria-hidden="true"]{opacity:.5;}
    .hero-carousel__slide img{
      width:100%;
      height:100%;
      object-fit:cover;
      display:block;
    }
    .hero-carousel__slide figcaption{
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      padding:1rem 1.25rem;
      background:linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(15,23,42,.68) 100%);
      color:#f9fafb;
      font-size:.85rem;
      line-height:1.4;
    }
    .hero-carousel__nav{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      width:42px;
      height:42px;
      border-radius:50%;
      border:none;
      background:rgba(15,23,42,.72);
      color:#fff;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 10px 30px rgba(15,23,42,.35);
      cursor:pointer;
      transition:background .2s ease, transform .2s ease;
      z-index:2;
    }
    .hero-carousel__nav:hover{background:rgba(15,23,42,.85);transform:translateY(calc(-50% - 1px));}
    .hero-carousel__nav:focus-visible{outline:var(--ring);outline-offset:3px;}
    .hero-carousel__nav[disabled]{opacity:.4;cursor:not-allowed;}
    .hero-carousel__nav--prev{left:1rem;}
    .hero-carousel__nav--next{right:1rem;}
    .hero-carousel__nav svg{width:20px;height:20px;}
    .hero-carousel--reduced .hero-carousel__track{
      scroll-behavior:auto;
      scroll-snap-type:none;
    }
    .hero-carousel--reduced .hero-carousel__slide[aria-hidden="true"]{opacity:1;}
    .project-gallery{
      margin:2.5rem 0 0;
      display:flex;
      flex-direction:column;
      gap:1.25rem;
    }
    .project-gallery__title{
      font-weight:800;
      font-size:clamp(1.15rem,1.05rem + .35vw,1.35rem);
      color:var(--fg);
    }
    .project-gallery__grid{
      display:grid;
      gap:1rem;
      grid-template-columns:repeat(auto-fit, minmax(220px,1fr));
    }
    .project-gallery__figure{
      position:relative;
      border-radius:18px;
      overflow:hidden;
      background:linear-gradient(180deg, rgba(15,23,42,.7), rgba(15,23,42,.85));
      color:#f3f4f6;
      box-shadow:var(--glow);
    }
    .project-gallery__figure img{
      display:block;
      width:100%;
      height:auto;
    }
    .project-gallery__figure figcaption{
      padding:1rem 1.25rem;
      font-size:.9rem;
      line-height:1.5;
      background:linear-gradient(180deg, rgba(15,23,42,.35), rgba(15,23,42,.82));
    }
    .project-gallery.is-empty{display:none;}
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
    .callout-card{border-radius:18px;border:1px solid var(--border);padding:1rem 1.2rem;background:linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.68));box-shadow:var(--glow);display:[...]
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
    .collapsible-toggle svg{width:16px;height:16px;transition:transform .2s ease;}
    .collapsible-toggle[aria-expanded="true"] svg{ transform:rotate(180deg); }

    /* Normalize colors from legacy Tailwind classes so copy looks consistent */
    .project-details-content .text-white{color:var(--fg);\n  `;
  document.head.appendChild(style);
})();
