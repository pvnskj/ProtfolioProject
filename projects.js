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
    .project-hero{
      display:grid;
      gap:1.75rem;
      margin-bottom:2.25rem;
      align-items:stretch;
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
    }
    .project-hero__media::after{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(180deg, rgba(17,24,39,.15), rgba(17,24,39,.45));
      mix-blend-mode:multiply;
      pointer-events:none;
    }
    .project-hero__media img,
    .project-hero__media video{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      object-fit:cover;
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
    @media (prefers-color-scheme: dark){
      .project-hero__media::after{background:linear-gradient(180deg, rgba(17,24,39,.35), rgba(17,24,39,.65));}
      .project-hero__summary{background:linear-gradient(180deg, rgba(31,41,55,.92), rgba(31,41,55,.72));border-color:var(--border-d);}
      .project-hero__headline{color:var(--fg-d);}
      .project-hero__bullet{color:var(--fg-d);}
      .project-hero__bullet-copy{color:var(--fg-d);}
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

    .tab-section{display:flex;flex-direction:column;gap:1.75rem}
    .tab-section__header{display:flex;flex-direction:column;gap:.6rem}
    .tab-section__header + .tab-section__header{margin-top:1.25rem}
    .tab-eyebrow{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--accent);}
    .tab-section__lede{color:var(--muted);font-size:clamp(.88rem,.86rem + .1vw,.96rem);max-width:60ch}

    .tab-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}
    .tab-card{
      position:relative;
      display:flex;
      flex-direction:column;
      gap:.55rem;
      padding:1rem 1.15rem;
      border-radius:16px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.88), rgba(255,255,255,.66));
      box-shadow:var(--glow);
    }
    .tab-card::after{
      content:"";
      position:absolute;
      inset:auto 0 0 0;
      height:4px;
      border-radius:0 0 16px 16px;
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

    .insight-grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
    .insight-card{
      border-radius:16px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.7));
      padding:1rem 1.15rem;
      box-shadow:var(--glow);
    }
    .insight-card h5{font-weight:700;font-size:.98rem;color:var(--fg);margin-bottom:.3rem}
    .insight-card p{font-size:.9rem;color:var(--muted)}

    .result-board{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
    .result-card{
      border-radius:18px;
      border:1px solid var(--border);
      background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.72));
      box-shadow:var(--glow);
      padding:1.1rem 1.25rem;
      display:flex;
      flex-direction:column;
      gap:.45rem;
      text-align:center;
    }
    .result-card__label{font-size:.78rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:700}
    .result-card__value{font-size:1.3rem;font-weight:800;color:var(--accent)}
    .result-card__hint{font-size:.85rem;color:var(--muted)}

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
      .insight-card p,
      .callout-card ul{color:var(--fg-d)}
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
      <section class="project-hero">
        ${heroMediaHtml ? `<figure class="project-hero__media">${heroMediaHtml}</figure>` : ''}
        <div class="project-hero__summary">
          ${project.hero.eyebrow ? `<p class="project-hero__eyebrow">${project.hero.eyebrow}</p>` : ''}
          <h2 class="project-hero__headline">${project.hero.headline || project.title}</h2>
          ${heroSubhead ? `<p class="project-hero__subhead">${heroSubhead}</p>` : ''}
          ${heroBulletsHtml}
        </div>
      </section>
  ` : '';

  const tabOrder = ['overview','methodology','analysis','results','media'];
  const tabs = tabOrder.filter(key => project.content[key]);
  const tabButtonsHtml = tabs.map((t,i)=>
    `<button data-tab="${t}" class="${i===0?'active':''}">${t[0].toUpperCase()+t.slice(1)}</button>`
  ).join('');
  const tabContentHtml = tabs.map((key,i)=>`
      <div class="tab-content ${i===0?'active':''}" data-tab-content="${key}">
        <div class="leading-relaxed">${project.content[key]}</div>
      </div>
  `).join('');

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

// 3) ---- Project Data (complete, unchanged copy) ----
window.projects = [
  {
    id: 'guide',
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
      analysis: `<section class="tab-section">
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
          <article class="insight-card">
            <h5>High engagement, lower conversion</h5>
            <p>Sling: 79% guide engagement but only 56% playback. DISH: 86% to 48%. Users explored but struggled to start watching.</p>
          </article>
          <article class="insight-card">
            <h5>Personalization underused</h5>
            <p>73% of sessions stayed on the default “ALL” filter, yet favorite users enjoyed a 9pt higher playback rate.</p>
          </article>
          <article class="insight-card">
            <h5>Short sessions stalled</h5>
            <p>44% of Sling sessions ended within 20 seconds without playback, pointing to overwhelming density.</p>
          </article>
          <article class="insight-card">
            <h5>Navigation learned behavior</h5>
            <p>46% of DISH viewers scrolled vertically by habit, while only 8% leveraged the faster horizontal jump controls.</p>
          </article>
        </div>
      </section>`,
      results: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Outcome</p>
          <h4>Evidence that unlocked a confident go-to-market</h4>
          <p class="tab-section__lede">Research distilled into a shared roadmap that balanced familiarity with modernization.</p>
        </header>
        <div class="result-board">
          <article class="result-card">
            <span class="result-card__label">Annual value impact</span>
            <span class="result-card__value">~$5.83M</span>
            <span class="result-card__hint">Retention gains tied to a cleaner guide.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Feature upsell</span>
            <span class="result-card__value">~$1.94M</span>
            <span class="result-card__hint">Personalized surfaces improved cross-sell moments.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Ad revenue</span>
            <span class="result-card__value">~$193K</span>
            <span class="result-card__hint">Contextual placements benefitted from better targeting.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Operational savings</span>
            <span class="result-card__value">~$63K</span>
            <span class="result-card__hint">Reduced support contacts thanks to clarified flows.</span>
          </article>
        </div>
      </section>`,
      media: `<h4>Media Assets</h4>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/111827/a3a3a3?text=User+Flow+Diagram" alt="User Flow Diagram">
          <img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/111827/a3a3a3?text=Early+Prototypes" alt="Early Prototypes">
        </div>
        <p class="mt-4 text-sm text-center text-gray-400">Key visuals, user flows, and prototypes from the project.</p>`
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
      analysis: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Key findings</p>
          <h4>What unlocked adoption and loyalty</h4>
          <p class="tab-section__lede">Insights revealed that usability was strong; awareness and emotional reassurance were missing.</p>
        </header>
        <div class="insight-grid">
          <article class="insight-card">
            <h5>Usability already solid</h5>
            <p>Task success reached 95% with minimal coaching. The app solved the core job once patients discovered it.</p>
          </article>
          <article class="insight-card">
            <h5>Awareness gap</h5>
            <p>Most patients simply did not know the app existed, redirecting the roadmap to marketing and onboarding.</p>
          </article>
          <article class="insight-card">
            <h5>Emotion drives trust</h5>
            <p>A SUS score of 78 showed strong usability but a need for warmer confirmation moments.</p>
          </article>
          <article class="insight-card">
            <h5>Automation opportunity</h5>
            <p>Automated status updates were the fastest lever to cut call volume and free clinical staff.</p>
          </article>
        </div>
      </section>`,
      results: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Outcome</p>
          <h4>Campaign &amp; product adjustments that delivered</h4>
          <p class="tab-section__lede">Reframing the challenge as awareness plus reassurance led to rapid adoption and measurable savings.</p>
        </header>
        <div class="result-board">
          <article class="result-card">
            <span class="result-card__label">Active app users</span>
            <span class="result-card__value">12,334+</span>
            <span class="result-card__hint">Exceeded the 10K target within six months.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Monthly refills via app</span>
            <span class="result-card__value">16,476</span>
            <span class="result-card__hint">Outperformed the 25% goal once awareness campaigns launched.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Annual labor savings</span>
            <span class="result-card__value">$702K+</span>
            <span class="result-card__hint">Automation reduced call volume and manual reconciliation.</span>
          </article>
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
      analysis: `<section class="tab-section">
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
          <article class="insight-card">
            <h5>Interest in connection</h5>
            <p>Viewers loved the promise of co-viewing, especially during tentpole moments.</p>
          </article>
          <article class="insight-card">
            <h5>Second screen advantage</h5>
            <p>Participants frequently referenced using phones for chat to protect the TV screen.</p>
          </article>
          <article class="insight-card">
            <h5>Role of mini-interactions</h5>
            <p>Emoji reactions and trivia quizzes were easy wins, but timing and prompts mattered.</p>
          </article>
          <article class="insight-card">
            <h5>Audience nuance</h5>
            <p>Sports fans and reality fans envisioned different cadences for polls, prompts, and chat.</p>
          </article>
        </div>
        <div class="tab-section__header">
          <p class="tab-eyebrow">Live pilots</p>
          <h4>What changed once the feature shipped</h4>
        </div>
        <div class="insight-grid">
          <article class="insight-card">
            <h5>Control is non-negotiable</h5>
            <p>87% enjoyed interactivity when they could toggle chat, reactions, and notifications.</p>
          </article>
          <article class="insight-card">
            <h5>Mobile companion wins</h5>
            <p>76% preferred managing interactions on their phone while the TV stayed focused on video.</p>
          </article>
          <article class="insight-card">
            <h5>Reactions boost fun</h5>
            <p>Emoji reactions (56%) and quizzes (41%) ranked highest for sustaining participation.</p>
          </article>
          <article class="insight-card">
            <h5>Tempo matters</h5>
            <p>40% felt chat was overwhelming during fast play. Sports fans liked rapid highlights; reality fans wanted curated polls.</p>
          </article>
        </div>
      </section>`,
      results: `<section class="tab-section">
        <header class="tab-section__header">
          <p class="tab-eyebrow">Outcome</p>
          <h4>Clear guidance for an interactive MVP</h4>
          <p class="tab-section__lede">Research shaped feature priorities and guardrails for social viewing without derailing core playback.</p>
        </header>
        <div class="result-board">
          <article class="result-card">
            <span class="result-card__label">Feature appeal</span>
            <span class="result-card__value">87% liked interactivity</span>
            <span class="result-card__hint">Validated demand with opt-in controls.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Second screen</span>
            <span class="result-card__value">76% mobile-first</span>
            <span class="result-card__hint">Informed dual-screen design requirements.</span>
          </article>
          <article class="result-card">
            <span class="result-card__label">Engagement boosts</span>
            <span class="result-card__value">56% reactions</span>
            <span class="result-card__hint">Emoji & quizzes drove repeat taps.</span>
          </article>
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
