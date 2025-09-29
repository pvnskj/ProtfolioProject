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

    /* Make long sections scannable by “carding” their subsections */
    .tab-content .text-left.space-y-6 > div,
    .tab-content .text-left.text-sm.space-y-6 > div,
    .tab-content .space-y-8 > div{
      background:linear-gradient(180deg, rgba(255,255,255,.65), rgba(255,255,255,.5));
      border:1px solid var(--border);
      border-radius:14px;
      padding:14px 16px;
      box-shadow: var(--glow);
    }
    @media (prefers-color-scheme: dark){
      .tab-content .text-left.space-y-6 > div,
      .tab-content .text-left.text-sm.space-y-6 > div,
      .tab-content .space-y-8 > div{
        background:linear-gradient(180deg, rgba(31,41,55,.75), rgba(31,41,55,.55));
        border-color:var(--border-d);
      }
    }
    .project-details-content h4{font-weight:800;font-size: clamp(1.05rem,1rem + .2vw,1.2rem);margin:.25rem 0 .35rem}
    .project-details-content h5{font-weight:800;margin:.25rem 0 .125rem;font-size:1rem}
    .project-details-content p,.project-details-content li{margin:.3rem 0; word-break:break-word; hyphens:auto}
    .project-details-content ul{padding-left:1.15rem}
    .project-details-content .insight-card,
    .project-details-content .stat-card{ border-radius:14px }

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
  panel.innerHTML = `
    <div class="panel-rail">
      <div class="metric-row">
        ${(project.content.metrics || []).map(m =>
          `<div class="metric-card">
             <div class="metric-card-value">${m.value}</div>
             <div class="metric-card-label">${m.label}</div>
           </div>`).join('')}
      </div>

      <div class="details-tabs flex flex-wrap items-center border-b mb-6 pb-3">
        ${['overview','methodology','analysis','results','media'].map((t,i)=>
          `<button data-tab="${t}" class="${i===0?'active':''}">${t[0].toUpperCase()+t.slice(1)}</button>`
        ).join('')}
      </div>

      ${Object.entries(project.content).map(([k,v])=>{
        if (k==='metrics') return '';
        const active = k==='overview' ? 'active':'';
        return `<div class="tab-content ${active}" data-tab-content="${k}">
                  <div class="leading-relaxed">${v}</div>
                </div>`;
      }).join('')}
    </div>
  `;

  container.innerHTML = '';
  container.appendChild(panel);
  ensureCollapsibleForTab(panel.querySelector('.tab-content.active'));

  // Tabs
  const tabsWrap = panel.querySelector('.details-tabs');
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
    content: {
      metrics: [
        { value: "~$7.46M", label: "Estimated Annual Value Impact" },
        { value: "90%", label: "Target Task Success Rate" },
        { value: "12%", label: "Reduction in CX Complaints" }
      ],
      overview: `<div class="text-left space-y-6">
        <div>
          <h5 class="font-bold text-white text-lg">Background</h5>
          <p class="text-gray-300 mt-1">The guide sits at the heart of content discovery, but had evolved in parallel across Sling TV and Dish TV, creating fragmented experiences.</p>
        </div>
        <div>
          <h5 class="font-bold text-white text-lg">The Challenge</h5>
          <p class="text-gray-300 mt-1">How can we unify the guide experience to enhance usability and personalization without alienating loyal users on two very different platforms?</p>
        </div>
        <div>
          <h5 class="font-bold text-white text-lg">Key Objectives</h5>
          <ul class="list-disc list-inside pl-4 space-y-2 mt-2">
            <li>Identify user frustrations and unmet needs across both platforms.</li>
            <li>Uncover shared pain points to guide a unified design strategy.</li>
            <li>Deliver actionable recommendations that balance user needs and business goals.</li>
          </ul>
        </div>
      </div>`,
      methodology: `<h4>My Research Process & Tools</h4>
        <div class="methodology-container mt-6">
          <div class="methodology-item">
            <h5>1. Discovery & Planning</h5>
            <p>Stakeholder Interviews, Data Analysis, and Defining Project Scope.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserZoom</span><span class="tag-badge">Google Analytics</span><span class="tag-badge">JIRA</span></div>
          </div>
          <div class="methodology-item">
            <h5>2. Generative Research</h5>
            <p>In-depth User Interviews to uncover behaviors and motivations.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">Lookback</span><span class="tag-badge">Google Meet</span></div>
          </div>
          <div class="methodology-item">
            <h5>3. Synthesis & Ideation</h5>
            <p>Mapping insights and collaborating with design and product teams.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Miro</span><span class="tag-badge">Figma</span></div>
          </div>
          <div class="methodology-item">
            <h5>4. Validation & Delivery</h5>
            <p>Usability Testing and Handoff to Engineering teams.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserTesting.com</span><span class="tag-badge">Figma Prototypes</span><span class="tag-badge">Confluence</span></div>
          </div>
        </div>`,
      analysis: `<h4>Target Audience & Segments</h4>
        <div class="flex flex-col md:flex-row gap-4 mt-4 text-left">
          <div class="flex-1 p-4 bg-black/20 rounded-lg border border-white/10">
            <h5 class="font-bold text-white">DISH TV Subscribers (65+)</h5>
            <p class="text-sm text-gray-300">Tolerate outdated UI but struggle with hidden features; often have accessibility needs.</p>
          </div>
          <div class="flex-1 p-4 bg-black/20 rounded-lg border border-white/10">
            <h5 class="font-bold text-white">Sling TV Subscribers (~35)</h5>
            <p class="text-sm text-gray-300">Tech-savvy, expect fast, intuitive interfaces and quick content access.</p>
          </div>
        </div>
        <h4 class="mt-8">Key Quantitative Insights</h4>
        <div class="grid md:grid-cols-2 gap-4 mt-4 text-gray-300 text-left">
          <div class="insight-card">
            <h5>1. High Engagement, Low Conversion</h5>
            <ul class="text-sm list-disc list-inside my-2 space-y-1">
              <li><b>Sling TV:</b> 79% engagement &rarr; 56% playback</li>
              <li><b>DISH TV:</b> 86% engagement &rarr; 48% playback</li>
            </ul>
            <p class="text-sm text-lime-200">🔍 Insight: Strong adoption, but poor discoverability leads to drop-offs.</p>
          </div>
          <div class="insight-card">
            <h5>2. Underutilized Features</h5>
            <ul class="text-sm list-disc list-inside my-2 space-y-1">
              <li>73% of sessions used the default "ALL" filter.</li>
              <li>"Favorites" users had a 64% playback rate vs. 55% for others.</li>
            </ul>
            <p class="text-sm text-lime-200">🔍 Insight: Personalization improves engagement but is underused.</p>
          </div>
          <div class="insight-card">
            <h5>3. High Drop-Offs in Short Sessions</h5>
            <ul class="text-sm list-disc list-inside my-2 space-y-1">
              <li>44% of Sling guide sessions ended without playback.</li>
              <li>Most of these non-playback sessions lasted &lt;20 seconds.</li>
            </ul>
            <p class="text-sm text-lime-200">🔍 Insight: Users abandon quickly, suggesting poor content surfacing.</p>
          </div>
          <div class="insight-card">
            <h5>4. Habitual Navigation (DISH)</h5>
            <ul class="text-sm list-disc list-inside my-2 space-y-1">
              <li>46% of users navigated vertically by habit.</li>
              <li>Only 8% used faster horizontal navigation by time.</li>
            </ul>
            <p class="text-sm text-lime-200">🔍 Insight: Users may not be aware of more efficient navigation options.</p>
          </div>
        </div>`,
      results: `<p class="text-center text-lg">The research insights directly led to iterative design improvements, validating each solution through rigorous testing to ensure it met user needs and business goals.</p>
        <h4 class="mt-8">Financial Impact</h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-gray-300">
          <div class="stat-card"><div class="stat-number">~$5.83M</div><div class="stat-description">from Increased Retention</div></div>
          <div class="stat-card"><div class="stat-number">~$1.94M</div><div class="stat-description">from Feature Upsells</div></div>
          <div class="stat-card"><div class="stat-number">~$193k</div><div class="stat-description">from Ad Revenue</div></div>
          <div class="stat-card"><div class="stat-number">~$63k</div><div class="stat-description">from Ops Savings</div></div>
        </div>`,
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
    content: {
      metrics: [
        { value: "12,334+", label: "Active App Users" },
        { value: "36%", label: "Refill Volume through App" },
        { value: "$702k+", label: "Annual Labor Cost Savings" }
      ],
      overview: `<div class="text-left space-y-6">
        <div>
          <h5 class="font-bold text-white text-lg">Background</h5>
          <p class="text-gray-300 mt-1">The pharmacy app was designed to simplify and modernize the prescription refill experience. It aimed to reduce the repetitive, manual burden on pharmacists and empower patients with self-service medication management.</p>
        </div>
        <div>
          <h5 class="font-bold text-white text-lg">Research Goals</h5>
          <ul class="list-disc list-inside pl-4 space-y-2 mt-2">
            <li><b>Boost Adoption:</b> Achieve 10,000+ active app users within 6 months.</li>
            <li><b>Drive Prescription Orders:</b> Convert 25% of monthly refills (11,250 orders) through the app.</li>
            <li><b>Automate Communications:</b> Deliver 10,000+ refill reminders & status messages monthly.</li>
            <li><b>Reduce Staff Burden:</b> Decrease pharmacist time spent on refill calls by 50%, and reduce medical staff back-and-forth.</li>
            <li><b>Cost Optimization:</b> Recover up to $1M/year in lost labor time.</li>
          </ul>
        </div>
      </div>`,
      methodology: `<div class="space-y-6">
        <p class="text-sm text-gray-300">Our research was a blend of qualitative and quantitative methods to understand both the user experience and the internal workflow challenges.</p>
        <h4 class="font-bold text-white text-lg mb-2">Manual Workflow </h4>
        <p class="text-sm text-gray-300">The manual process was time-consuming and inefficient. Pharmacists spent an average of 3.5 minutes per refill, totaling over 2,600 hours/month, which translated to significant lost labor time.</p>
        <div class="methodology-container mt-4">
          <div class="methodology-item">
            <h5>1. Workflow & Stakeholder Analysis</h5>
            <p>Interviews with pharmacists, RNs, and MAs to map the manual refill process.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Stakeholder Interviews</span><span class="tag-badge">Process Mapping</span></div>
          </div>
          <div class="methodology-item">
            <h5>2. Usability & Heuristic Evaluation</h5>
            <p>Tested the existing app with both patients and staff to identify pain points and opportunities.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Heuristic Analysis</span><span class="tag-badge">Usability Testing</span></div>
          </div>
          <div class="methodology-item">
            <h5>3. Discovery & Synthesis</h5>
            <p>Uuncovered a key problem: most patients were unaware the app existed. This shifted our focus from product improvement to a marketing and awareness strategy.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Patient Interviews</span><span class="tag-badge">Journey Mapping</span></div>
          </div>
        </div>
      </div>`,
      analysis: `<div class="space-y-8">
        <div>
          <h4 class="font-bold text-white text-lg mb-4">Key Insights from Analysis</h4>
          <div class="grid md:grid-cols-2 gap-4 mt-4 text-left">
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Minimalist UI & High Usability</h5>
              <p class="text-sm text-gray-300">The app's core functionality was clear, allowing users to refill prescriptions with ease. <b>Task success rate was 95%.</b></p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Unexpected Awareness Gap</h5>
              <p class="text-sm text-gray-300">A major finding: many patients were simply <b>unaware the app existed.</b> This shifted our focus from product improvement to a marketing and awareness strategy.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Low Emotional Engagement</h5>
              <p class="text-sm text-gray-300">A SUS Score of 78 indicated solid usability but highlighted a <b>lack of emotional engagement</b> due to the app's basic visual design.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Automated Communications</h5>
              <p class="text-sm text-gray-300">The system lacked features to reduce the repetitive, manual burden on pharmacists and their outbound calls.</p>
            </div>
          </div>
        </div>
      </div>`,
      results: `<div class="space-y-8">
        <p class="text-center text-lg text-gray-300">Our research led to a strategic awareness campaign that directly addressed the adoption problem and produced significant business impact.</p>
        <h4 class="font-bold text-white text-lg">Key Outcomes</h4>
        <div class="overflow-x-auto relative rounded-lg border border-white/10 mt-4">
          <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs text-gray-200 uppercase bg-gray-800/50">
              <tr>
                <th scope="col" class="py-3 px-6 text-center">Metric</th>
                <th scope="col" class="py-3 px-6 text-center">Outcome</th>
                <th scope="col" class="py-3 px-6 text-center">Target</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-gray-900/40 border-b border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">Active App Users</th>
                <td class="py-4 px-6 text-center font-bold text-lime-400">12,334</td>
                <td class="py-4 px-6 text-center font-bold text-lime-400">10,000+</td>
              </tr>
              <tr class="bg-gray-900/40 border-b border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">Monthly Refills via App</th>
                <td class="py-4 px-6 text-center font-bold text-lime-400">16,476</td>
                <td class="py-4 px-6 text-center font-bold text-lime-400">11,250</td>
              </tr>
              <tr class="bg-gray-900/40">
                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">Annual Labor Savings</th>
                <td class="py-4 px-6 text-center font-bold text-lime-400">$702,000+</td>
                <td class="py-4 px-6 text-center font-bold text-lime-400">$1M</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-center text-lg mt-8 text-gray-300">By shifting our focus from product development to an awareness campaign, the app's adoption skyrocketed, resulting in significant cost savings and improved patient satisfaction.</p>
      </div>`,
      media: `<h4>Media Assets</h4>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/111827/a3a3a3?text=Awareness+Campaign+Flyer" alt="Awareness Campaign Flyer">
          <img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/111827/a3a3a3?text=App+Screenshots" alt="App Screenshots">
        </div>
        <p class="mt-4 text-sm text-center text-gray-400">Key visuals and campaign materials from the project.</p>`
    }
  },
  {
    id: 'live-rooms',
    title: "Validating 'Live Rooms'",
    hook: "An exciting concept for social TV viewing promised to make live content more engaging with chat, reactions, and interactive features. But before investing in building it, we needed to validate whether this idea aligned with how people actually watch live TV today.",
    outcome: "Guided 'Go/No-Go' Decision",
    images: ["https://images.unsplash.com/photo-1549419143-41c6f39d2c20?q=80&w=2070&auto=format&fit=crop"],
    content: {
      metrics: [
        { value: "87%", label: "Liked interactive features" },
        { value: "76%", label: "Preferred second-screen" },
        { value: "56%", label: "Liked emoji reactions" },
        { value: "41%", label: "Liked quizzes" }
      ],
      overview: `<div class="text-left text-sm space-y-6">
        <div>
          <h5 class="font-bold text-white text-lg">Background</h5>
          <p class="text-gray-300 mt-1">Live Rooms is a conceptual feature aimed at enhancing real-time TV viewing with interactive social experiences. The idea is to allow users to chat, react with emojis, and participate in live trivia while watching their favorite shows or sport.</p>
        </div>
        <div>
          <h5 class="font-bold text-white text-lg">Research Goals</h5>
          <ul class="list-disc list-inside pl-4 space-y-2 mt-2">
            <li><b>Evaluate whether the Live Rooms concept resonates with users.</b></li>
            <li><b>Understand if real-time interaction can increase emotional investment, social connection, and engagement.</b></li>
            <li><b>Ensure these interactions do not disrupt the core viewing experience.</b></li>
            <li><b>Explore how users organically adopt these features across different content types (e.g., sports vs. reality shows).</b></li>
            <li><b>Explore adoption across different platforms (TV vs. mobile).</b></li>
          </ul>
        </div>
      </div>`,
      methodology: `<h4>My Research Process & Tools</h4>
        <div class="methodology-container mt-6">
          <div class="methodology-item">
            <h5>1. Concept Testing</h5>
            <p>4 Participants with experience in interactive streaming like Twitch, Youtube Live, etc. 4 Participants with no experience in interactive streaming.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">UserZoom</span><span class="tag-badge">Invision</span></div>
          </div>
          <div class="methodology-item">
            <h5>2. Live Product Test - Round 1 (NBA Game)</h5>
            <p>79 participants with varying age range. 95% participants responded to the feedback survey.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">LiveLike</span><span class="tag-badge">UserZoom</span></div>
          </div>
          <div class="methodology-item">
            <h5>3. Live Product Test - Round 2 (Reality TV)</h5>
            <p>35 participants with 98% survey response rate.</p>
            <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">LiveLike</span><span class="tag-badge">UserZoom</span></div>
          </div>
        </div>`,
      analysis: `<div class="space-y-8">
        <div>
          <h4 class="font-bold text-white text-lg mb-4">Initial Concept Insights</h4>
          <div class="grid md:grid-cols-2 gap-4 mt-4 text-left">
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Interest in Social Features</h5>
              <p class="text-sm text-gray-300">Users showed interest, but the ideal level and format of interaction remained unclear.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Second-Screen Behavior</h5>
              <p class="text-sm text-gray-300">There is potential value in second-screen experiences, but we need to explore when and how users naturally engage.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Role of Interactive Elements</h5>
              <p class="text-sm text-gray-300">Reactions and quizzes were received positively, but their role in sustained engagement is unknown.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">User Behavior & Content Type</h5>
              <p class="text-sm text-gray-300">The concept raised questions about how different user types would navigate this experience.</p>
            </div>
          </div>
        </div>
        <div>
          <h4 class="font-bold text-white text-lg mb-4">Live Testing Insights</h4>
          <div class="grid md:grid-cols-2 gap-4 mt-4 text-left">
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Control is Key</h5>
              <p class="text-sm text-gray-300"><b>87%</b> of users liked interactive features but wanted control, like turning chat on/off.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Second-Screen Experience</h5>
              <p class="text-sm text-gray-300"><b>76%</b> preferred using their phone to interact while watching on TV.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Positive Feedback on Interactive Elements</h5>
              <p class="text-sm text-gray-300">Emoji reactions (<b>56%</b>) and quizzes (<b>41%</b>) boosted engagement and made the experience more fun.</p>
            </div>
            <div class="insight-card p-4">
              <h5 class="font-bold text-white mb-2">Usability & Content Adaptation</h5>
              <p class="text-sm text-gray-300"><b>40%</b> felt chat was overwhelming. Sports fans liked fast chat, while reality TV fans preferred polls and quizzes.</p>
            </div>
          </div>
        </div>
      </div>`,
      results: `<div class="space-y-8">
        <p class="text-center text-lg text-gray-300">The Live Rooms concept was a clear win with high user engagement. The experience proved that interactive features can meaningfully enhance live TV viewing.</p>
        <h4 class="font-bold text-white text-lg">Business Impact</h4>
        <div class="grid md:grid-cols-3 gap-4 mt-4 text-gray-300 text-sm">
          <div class="panel p-4">
            <h5 class="font-bold text-white text-base mb-2 text-center">Jersey Shore Family Vacation</h5>
            <ul class="list-disc pl-5 space-y-1.5">
              <li>Validated polls + reactions as playful drivers for reality TV.</li>
              <li>Opt-in chat preferred; background chatter muted by default.</li>
            </ul>
          </div>
          <div class="panel p-4">
            <h5 class="font-bold text-white text-base mb-2 text-center">NBA Live Test</h5>
            <ul class="list-disc pl-5 space-y-1.5">
              <li>Fast chat acceptable; highlights-based prompts worked better.</li>
              <li>Second-screen usage reduced on-TV clutter and distraction.</li>
            </ul>
          </div>
          <div class="panel p-4">
            <h5 class="font-bold text-white text-base mb-2 text-center">Design Principles</h5>
            <ul class="list-disc pl-5 space-y-1.5">
              <li>Give users control (mute/hide/switch device).</li>
              <li>Tailor interactivity to content tempo and audience.</li>
            </ul>
          </div>
        </div>
      </div>`,
      media: `<h4>Media Assets</h4>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <img class="project-image rounded-lg" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" alt="Streaming logos">
          <img class="project-image rounded-lg" src="https://images.unsplash.com/photo-1516245834210-c4c1427873ab?q=80&w=1770&auto=format&fit=crop" alt="Sports screen">
        </div>
        <p class="mt-4 text-sm text-center text-gray-400">Concept visuals from tests and prototypes.</p>`
    }
  }
];
