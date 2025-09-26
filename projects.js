// projects.js — defines projects data and renders Portfolio (list + details)

(function () {
  // ---- Project Data ----
  window.projects = [
    {
      id: 'guide',
      title: "Reinventing The TV Guide",
      hook: "A strategic research initiative to unify user experiences across two major platforms.",
      outcome: "~$7.46M Estimated Annual Impact",
      images: ["https://images.unsplash.com/photo-1616428784112-2544265780d6?q=80&w=2070&auto=format&fit=crop"],
      content: {
        metrics: [
          { value: "~$7.46M", label: "Estimated Annual Value Impact" },
          { value: "90%", label: "Target Task Success Rate" },
          { value: "12%", label: "Reduction in CX Complaints" }
        ],
        overview: `<div class="text-left space-y-6"><div><h5 class="font-bold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">The guide sits at the heart of content discovery, but had evolved in parallel across Sling TV and Dish TV, creating fragmented experiences.</p></div><div><h5 class="font-bold text-gray-800 text-lg">The Challenge</h5><p class="text-gray-700 mt-1">How can we unify the guide experience to enhance usability and personalization without alienating loyal users on two very different platforms?</p></div><div><h5 class="font-bold text-gray-800 text-lg">Key Objectives</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li>Identify user frustrations and unmet needs across both platforms.</li><li>Uncover shared pain points to guide a unified design strategy.</li><li>Deliver actionable recommendations that balance user needs and business goals.</li></ul></div></div>`,
        methodology: `<h4>My Research Process & Tools</h4><div class="methodology-container mt-6"> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">1. Discovery & Planning</h5> <p>Stakeholder Interviews, Data Analysis, and Defining Project Scope.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserZoom</span><span class="tag-badge">Google Analytics</span><span class="tag-badge">JIRA</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">2. Generative Research</h5> <p>In-depth User Interviews to uncover behaviors and motivations.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">Lookback</span><span class="tag-badge">Google Meet</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">3. Synthesis & Ideation</h5> <p>Mapping insights and collaborating with design and product teams.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Miro</span><span class="tag-badge">Figma</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">4. Validation & Delivery</h5> <p>Usability Testing and Handoff to Engineering teams.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserTesting.com</span><span class="tag-badge">Figma Prototypes</span><span class="tag-badge">Confluence</span></div> </div> </div>`,
        analysis: `<h4>Target Audience & Segments</h4><div class="flex flex-col md:flex-row gap-4 mt-4 text-left"><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-bold text-gray-800">DISH TV Subscribers (65+)</h5><p class="text-sm text-gray-600">Tolerate outdated UI but struggle with hidden features; often have accessibility needs.</p></div><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-bold text-gray-800">Sling TV Subscribers (~35)</h5><p class="text-sm text-gray-600">Tech-savvy, expect fast, intuitive interfaces and quick content access.</p></div></div><h4 class="mt-8">Key Quantitative Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-gray-700 text-left"><div class="insight-card"><h5>1. High Engagement, Low Conversion</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li><b>Sling TV:</b> 79% engagement → 56% playback</li><li><b>DISH TV:</b> 86% engagement → 48% playback</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Strong adoption, but poor discoverability leads to drop-offs.</p></div><div class="insight-card"><h5>2. Underutilized Features</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>73% of sessions used the default "ALL" filter.</li><li>"Favorites" users had a 64% playback rate vs. 55% for others.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Personalization improves engagement but is underused.</p></div><div class="insight-card"><h5>3. High Drop-Offs in Short Sessions</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>44% of Sling guide sessions ended without playback.</li><li>Most of these non-playback sessions lasted &lt;20 seconds.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users abandon quickly, suggesting poor content surfacing.</p></div><div class="insight-card"><h5>4. Habitual Navigation (DISH)</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>46% of users navigated vertically by habit.</li><li>Only 8% used faster horizontal navigation by time.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users may not be aware of more efficient navigation options.</p></div></div>`,
        results: `<p class="text-center text-lg">The research insights directly led to iterative design improvements, validating each solution through rigorous testing to ensure it met user needs and business goals.</p><h4 class="mt-8">Financial Impact</h4><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-gray-700"><div class="stat-card"><div class="stat-number">~$5.83M</div><div class="stat-description">from Increased Retention</div></div><div class="stat-card"><div class="stat-number">~$1.94M</div><div class="stat-description">from Feature Upsells</div></div><div class="stat-card"><div class="stat-number">~$193k</div><div class="stat-description">from Ad Revenue</div></div><div class="stat-card"><div class="stat-number">~$63k</div><div class="stat-description">from Ops Savings</div></div></div>`,
        media: `<h4>Media Assets</h4><div class="grid grid-cols-2 gap-4 mt-4"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1771&auto=format&fit=crop" alt="User Flow Diagram"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1600132806378-439004585258?q=80&w=1770&auto=format&fit=crop" alt="Early Prototypes"></div><p class="mt-4 text-sm text-center text-gray-500">Key visuals, user flows, and prototypes from the project.</p>`
      }
    },
    {
      id: 'gundersen',
      title: "Gundersen Pharmacy",
      hook: "Streamlining prescription refills by empowering patients and reducing manual work for pharmacy staff.",
      outcome: "Achieved 12,334+ Active App Users",
      images: ["https://images.unsplash.com/photo-1588720490792-26f5053ae81e?q=80&w=2070&auto=format&fit=crop"],
      content: {
        metrics: [
          { value: "12,334+", label: "Active App Users" },
          { value: "36%", label: "Refill Volume via App" },
          { value: "$702k+", label: "Annual Labor Savings" }
        ],
        overview: `<div class="text-left space-y-6"><div><h5 class="font-bold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">The pharmacy app was designed to simplify and modernize the prescription refill experience...</p></div><div><h5 class="font-bold text-gray-800 text-lg">Research Goals</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li><b>Boost Adoption:</b> Achieve 10,000+ active app users within 6 months.</li><li><b>Drive Prescription Orders:</b> Convert 25% of monthly refills (11,250 orders) through the app.</li><li><b>Automate Communications:</b> Deliver 10,000+ refill reminders & status messages monthly.</li><li><b>Reduce Staff Burden:</b> Decrease pharmacist time spent on refill calls by 50%.</li><li><b>Cost Optimization:</b> Recover up to $1M/year in lost labor time.</li></ul></div></div>`,
        methodology: `<div class="space-y-6"><p class="text-sm text-gray-700">Our research was a blend of qualitative and quantitative methods...</p><h4 class="font-bold text-gray-800 text-lg mb-2">Manual Workflow </h4><p class="text-sm text-gray-700">Pharmacists spent an average of 3.5 minutes per refill, totaling over 2,600 hours/month...</p>`,
        analysis: `<div class="space-y-8"><div><h4 class="font-bold text-gray-800 text-lg mb-4">Key Insights from Analysis</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Minimalist UI & High Usability</h5><p class="text-sm text-gray-700">Task success rate was <b>95%</b>.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Unexpected Awareness Gap</h5><p class="text-sm text-gray-700">Many patients were <b>unaware the app existed</b>.</p></div></div></div></div>`,
        results: `<p class="text-center text-lg text-gray-700">Our research led to a strategic awareness campaign...</p><h4 class="font-bold text-gray-800 text-lg mt-8">Key Outcomes</h4>
          <div class="overflow-x-auto relative rounded-lg border border-black/10 mt-4">
            <table class="w-full text-sm text-left text-gray-600">
              <thead class="text-xs text-gray-800 uppercase bg-black/5">
                <tr><th class="py-3 px-6 text-center">Metric</th><th class="py-3 px-6 text-center">Outcome</th><th class="py-3 px-6 text-center">Target</th></tr>
              </thead>
              <tbody>
                <tr class="border-b border-black/10"><th class="py-4 px-6 font-medium text-gray-800 whitespace-nowrap bg-black/5">Active App Users</th><td class="py-4 px-6 text-center font-bold" style="color: var(--accent-pink);">12,334</td><td class="py-4 px-6 text-center">10,000+</td></tr>
                <tr class="border-b border-black/10"><th class="py-4 px-6 font-medium text-gray-800 whitespace-nowrap bg-black/5">Monthly Refills via App</th><td class="py-4 px-6 text-center font-bold" style="color: var(--accent-pink);">16,476</td><td class="py-4 px-6 text-center">11,250</td></tr>
                <tr><th class="py-4 px-6 font-medium text-gray-800 whitespace-nowrap bg-black/5">Annual Labor Savings</th><td class="py-4 px-6 text-center font-bold" style="color: var(--accent-pink);">$702,000+</td><td class="py-4 px-6 text-center">$1M</td></tr>
              </tbody>
            </table>
          </div>`,
        media: `<h4 class="mt-4">Campaign Materials</h4><div class="grid grid-cols-2 gap-4 mt-4"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1557852643-41394a110599?q=80&w=1770&auto=format&fit=crop" alt="Phone for healthcare"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1618225249899-604a5119b78a?q=80&w=1964&auto=format&fit=crop" alt="Mobile screenshots"></div>`
      }
    },
    {
      id: 'live-rooms',
      title: "Validating 'Live Rooms'",
      hook: "A concept for social TV viewing to make live content more engaging. But would people use it?",
      outcome: "Guided 'Go/No-Go' Decision",
      images: ["https://images.unsplash.com/photo-1549419143-41c6f39d2c20?q=80&w=2070&auto=format&fit=crop"],
      content: {
        metrics: [
          { value: "87%", label: "Liked interactive features" },
          { value: "76%", label: "Preferred second-screen" },
          { value: "56%", label: "Liked emoji reactions" },
          { value: "41%", label: "Liked quizzes" }
        ],
        overview: `<div class="text-left text-sm space-y-6"><div><h5 class="font-bold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">Live Rooms is a conceptual feature aimed at enhancing real-time TV viewing...</p></div></div>`,
        methodology:`<h4>My Research Process & Tools</h4><div class="methodology-container mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"><div class="methodology-item p-4 bg-black/5 rounded-lg"><h5 style="color:var(--accent-pink-dark);">1. Concept Testing</h5><p>Used prototypes with 8 users.</p></div><div class="methodology-item p-4 bg-black/5 rounded-lg"><h5 style="color:var(--accent-pink-dark);">2. Live Product Testing</h5><p>Two live tests (NBA & Reality TV), 114 participants.</p></div></div>`,
        analysis:`<h4 class="mt-4">Key Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Control is Key</h5><p class="text-sm text-gray-700"><b>87%</b> liked interactive features but wanted control.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Second-Screen</h5><p class="text-sm text-gray-700"><b>76%</b> preferred phone interaction while watching TV.</p></div></div>`,
        results:`<div class="space-y-8"><p class="text-center text-lg text-gray-700">Clear engagement signal.</p></div>`,
        media:`<h4 class="mt-4">Concept Visuals</h4><div class="grid grid-cols-2 gap-4 mt-4"><img class="rounded-lg" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" alt="Streaming logos"><img class="rounded-lg" src="https://images.unsplash.com/photo-1516245834210-c4c1427873ab?q=80&w=1770&auto=format&fit=crop" alt="Sports screen"></div>`
      }
    }
  ];

  // ---- Portfolio Rendering ----
  function renderProjectDetails(project, container) {
    if (!project || !project.content) { container.innerHTML = ''; return; }
    const panel = document.createElement('div');
    panel.className = 'project-details-content panel p-8 text-left';

    const metrics = (project.content.metrics || []).map(m =>
      `<div class="metric-card"><div class="metric-card-value">${m.value}</div><div class="metric-card-label">${m.label}</div></div>`).join('');

    const tabs = ['overview','methodology','analysis','results','media'];
    const tabsHtml = tabs.map((t,i)=>`<button data-tab="${t}" class="${i===0?'active':''} py-2 px-4 text-sm font-semibold rounded-md">${t[0].toUpperCase()+t.slice(1)}</button>`).join('');

    const bodies = Object.entries(project.content).map(([k,v])=>{
      if (k==='metrics') return '';
      const active = k==='overview' ? 'active':'';
      return `<div class="tab-content text-gray-700 ${active}" data-tab-content="${k}">${v}</div>`;
    }).join('');

    panel.innerHTML = `
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">${metrics}</div>
      <div class="details-tabs flex flex-wrap items-center gap-2 border-b mb-6 pb-4">${tabsHtml}</div>
      ${bodies}
    `;
    container.innerHTML = '';
    container.appendChild(panel);
  }

  function renderProjectList(listEl, detailsEl, activeId) {
    let active = window.projects.find(p=>p.id===activeId) || window.projects[0];
    const others = window.projects.filter(p=>p.id!==active.id);

    const highlights = (active.content.metrics||[]).map(m=>`
      <div class="rounded-xl border border-black/10 bg-white/50 p-3 text-center">
        <div class="font-extrabold text-xl" style="color:var(--accent-pink)">${m.value}</div>
        <div class="text-xs text-gray-600">${m.label}</div>
      </div>`).join('');

    const activeHtml = `
      <div class="panel p-6 border-2" style="border-color:var(--accent-pink)">
        <div class="grid md:grid-cols-3 gap-4 items-center">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold">${active.title}</h3>
            <p class="text-gray-700 mt-1">${active.hook}</p>
            <p class="font-semibold mt-2" style="color:var(--accent-pink-dark)">${active.outcome}</p>
          </div>
          <img class="rounded-xl w-full h-36 object-cover" src="${active.images[0]}" alt="${active.title}">
        </div>
        <div class="grid grid-cols-3 gap-3 mt-4">${highlights}</div>
      </div>`;

    const thumbs = others.map(p=>`
      <button class="project-thumbnail panel p-4 w-full text-left flex items-center gap-3 hover:scale-[1.01] transition"
              data-project-id="${p.id}">
        <img class="rounded-lg w-20 h-16 object-cover" src="${p.images[0]}" alt="${p.title}">
        <span class="font-semibold text-gray-800">${p.title}</span>
      </button>`).join('');

    listEl.innerHTML = `${activeHtml}<div class="mt-4 flex flex-col gap-2">${thumbs}</div>`;

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

  // Public init for pages
  window.initPortfolio = function(opts) {
    const list = document.querySelector(opts.listSelector);
    const details = document.querySelector(opts.detailsSelector);
    if (!list || !details) return;
    renderProjectList(list, details, (window.projects[0]||{}).id);
    details.classList.add('visible');
  };
})();
