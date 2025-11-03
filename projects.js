(() => {
  const repoBase = (() => {
    const { pathname } = window.location;
    if (!pathname || pathname === "/") return "/";
    if (pathname.endsWith("/")) return pathname;
    const lastSlash = pathname.lastIndexOf("/");
    return lastSlash >= 0 ? pathname.slice(0, lastSlash + 1) : "/";
    const segments = window.location.pathname.split("/").filter(Boolean);
    if (!segments.length) return "/";
    return `/${segments[0]}/`;
  })();

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const projects = [
    {
      id: "guide",
      title: "Reinventing the TV Guide",
      industry: "Streaming · Media",
      summary:
        "Unified Sling TV and DISH TV discovery into one adaptive experience using multi-surface research.",
      outcome: "$7.46M annualized upside projected",
      heroImage: "public/images/guide/guide-03.png",
      heroAlt: "Unified TV guide concept across multiple devices",
      metrics: [
        { value: "~$7.46M", label: "Estimated annual value impact" },
        { value: "90%", label: "Target task success rate" },
        { value: "12%", label: "Reduction in CX complaints" },
        { value: "90%", label: "Task success" },
        { value: "-12%", label: "CX complaints" },
        { value: "$7.46M", label: "Value impact" },
      ],
      focus: [
        "Unified discovery for Sling & DISH households",
        "Personalization powered by behavioral telemetry",
        "Accessibility-ready motion & density system",
      ],
      story: [
        {
          icon: "🧭",
          title: "Opportunity framing",
          copy: "Mapped the end-to-end service blueprint to expose cross-platform friction and align executives.",
        },
        {
          icon: "🧪",
          title: "Evidence mix",
          copy: "Diary studies, 18 deep interviews, and 2M session analytics to triangulate everyday behaviors.",
        },
        {
          icon: "🚀",
          title: "Strategic outcome",
          copy: "Delivered a phased rollout playbook with KPI ladders and accessibility guardrails.",
        },
      ],
      gallery: [],
      galleryManifest: true,
      tagline:
        "Designing a unified discovery experience for Sling & DISH households.",
      content: {
        metrics: [
          {
            value: "~$7.46M",
            label: "Estimated Annual Value Impact",
          },
          { value: "90%", label: "Target Task Success Rate" },
          { value: "12%", label: "Reduction in CX Complaints" },
        ],
        overview: `<div class="text-left space-y-6"><div><h5 class="font-bold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">The guide sits at the heart of content discovery, but had evolved in parallel across Sling TV and Dish TV, creating fragmented experiences.</p></div><div><h5 class="font-bold text-gray-800 text-lg">The Challenge</h5><p class="text-gray-700 mt-1">How can we unify the guide experience to enhance usability and personalization without alienating loyal users on two very different platforms?</p></div><div><h5 class="font-bold text-gray-800 text-lg">Key Objectives</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li>Identify user frustrations and unmet needs across both platforms.</li><li>Uncover shared pain points to guide a unified design strategy.</li><li>Deliver actionable recommendations that balance user needs and business goals.</li></ul></div></div>`,
        methodology: `<h4>My Research Process & Tools</h4><div class="methodology-container mt-6"> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">1. Discovery & Planning</h5> <p>Stakeholder Interviews, Data Analysis, and Defining Project Scope.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserZoom</span><span class="tag-badge">Google Analytics</span><span class="tag-badge">JIRA</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">2. Generative Research</h5> <p>In-depth User Interviews to uncover behaviors and motivations.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">Lookback</span><span class="tag-badge">Google Meet</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">3. Synthesis & Ideation</h5> <p>Mapping insights and collaborating with design and product teams.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Miro</span><span class="tag-badge">Figma</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">4. Validation & Delivery</h5> <p>Usability Testing and Handoff to Engineering teams.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserTesting.com</span><span class="tag-badge">Figma Prototypes</span><span class="tag-badge">Confluence</span></div> </div> </div>`,
        analysis: `<h4>Target Audience & Segments</h4><div class="flex flex-col md:flex-row gap-4 mt-4 text-left"><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-bold text-gray-800">DISH TV Subscribers (65+)</h5><p class="text-sm text-gray-600">Tolerate outdated UI but struggle with hidden features; often have accessibility needs.</p></div><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-bold text-gray-800">Sling TV Subscribers (~35)</h5><p class="text-sm text-gray-600">Tech-savvy, expect fast, intuitive interfaces and quick content access.</p></div></div><h4 class="mt-8">Key Quantitative Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-gray-700 text-left"><div class="insight-card"><h5>1. High Engagement, Low Conversion</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li><b>Sling TV:</b> 79% engagement → 56% playback</li><li><b>DISH TV:</b> 86% engagement → 48% playback</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Strong adoption, but poor discoverability leads to drop-offs.</p></div><div class="insight-card"><h5>2. Underutilized Features</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>73% of sessions used the default "ALL" filter.</li><li>"Favorites" users had a 64% playback rate vs. 55% for others.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Personalization improves engagement but is underused.</p></div><div class="insight-card"><h5>3. High Drop-Offs in Short Sessions</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>44% of Sling guide sessions ended without playback.</li><li>Most of these non-playback sessions lasted &lt;20 seconds.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users abandon quickly, suggesting poor content surfacing.</p></div><div class="insight-card"><h5>4. Habitual Navigation (DISH)</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>46% of users navigated vertically by habit.</li><li>Only 8% used faster horizontal navigation by time.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users may not be aware of more efficient navigation options.</p></div></div>`,
        results: `<p class="text-center text-lg">The research insights directly led to iterative design improvements, validating each solution through rigorous testing to ensure it met user needs and business goals.</p><h4 class="mt-8">Financial Impact</h4><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-gray-700"><div class="stat-card"><div class="stat-number">~$5.83M</div><div class="stat-description">from Increased Retention</div></div><div class="stat-card"><div class="stat-number">~$1.94M</div><div class="stat-description">from Feature Upsells</div></div><div class="stat-card"><div class="stat-number">~$193k</div><div class="stat-description">from Ad Revenue</div></div><div class="stat-card"><div class="stat-number">~$63k</div><div class="stat-description">from Ops Savings</div></div></div>`,
        media: `<h4>Media Assets</h4><div id="guide-media-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"></div><p class="mt-4 text-sm text-center text-gray-500">Key visuals, user flows, and prototypes from the project.</p>`,
      },
    },
    {
      id: "gundersen",
      title: "Gundersen Health Virtual Care OS",
      industry: "Healthcare · SaaS",
      summary:
        "Reimagined intake and triage flows for clinicians and patients inside a unified virtual care operating system.",
      outcome: "32% faster intake & triage across clinics",
      heroImage:
        "https://images.unsplash.com/photo-1580281658629-26036f899014?auto=format&fit=crop&w=1600&q=80",
      heroAlt: "Clinician using a digital health dashboard",
      metrics: [
        { value: "32%", label: "Faster intake" },
        { value: "4.7★", label: "Clinician satisfaction" },
        { value: "3 mos", label: "Launch acceleration" },
      ],
      focus: [
        "Cross-clinic workflow mapping",
        "Multi-role dashboard prototyping",
        "HIPAA-compliant experimentation",
      ],
      story: [
        {
          icon: "🩺",
          title: "Field immersion",
          copy: "Shadowed 6 clinics and captured 40+ hours of intake footage to surface friction and opportunities.",
        },
        {
          icon: "🧬",
          title: "Quantified impact",
          copy: "Mapped EMR logs to pain points and prioritized backlog based on throughput and readmission risk.",
        },
        {
          icon: "🤝",
          title: "Operational adoption",
          copy: "Coached nurse champions and product leads on rolling out evidence-backed workflow changes.",
        },
      ],
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1587614382346-4ec892f9aca3?auto=format&fit=crop&w=1600&q=80",
          alt: "Telehealth dashboard interface",
          caption:
            "Concept dashboard enabling clinicians to triage multi-channel visits.",
        },
        {
          src: "https://images.unsplash.com/photo-1580894894513-d75ec1c5c5a1?auto=format&fit=crop&w=1600&q=80",
          alt: "Patient using a tablet at home",
          caption:
            "Home-based participant testing the simplified intake journey.",
        },
        {
          src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
          alt: "Research team co-creating a journey map",
          caption:
            "Co-creation lab aligning clinical and product stakeholders on future workflows.",
        },
      ],
      tagline:
        "Accelerating virtual care with evidence-backed workflow orchestration.",
    },
    {
      id: "live-rooms",
      title: "Live Rooms Interactive Watch Parties",
      industry: "Streaming · Social",
      summary:
        "Launched a co-watching and commerce layer that extends live broadcasts into interactive communities.",
      outcome: "18% lift in session length across pilot cohorts",
      heroImage:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
      heroAlt: "Friends enjoying a streaming session with neon lighting",
      metrics: [
        { value: "+18%", label: "Session length" },
        { value: "94%", label: "Feature adoption" },
        { value: "6 wks", label: "Insight to beta" },
      ],
      focus: [
        "Real-time engagement loops",
        "Commerce & conversion experiments",
        "Accessibility for shared experiences",
      ],
      story: [
        {
          icon: "🎙️",
          title: "Audience listening",
          copy: "Ran rolling diary studies with superfans to translate rituals into product behaviors.",
        },
        {
          icon: "📊",
          title: "Signal instrumentation",
          copy: "Designed telemetry to measure co-watching retention, sentiment, and conversion moments.",
        },
        {
          icon: "✨",
          title: "Launch craft",
          copy: "Partnered with design to define choreography, moderation tools, and revenue-ready pathways.",
        },
      ],
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
          alt: "People streaming together with devices",
          caption:
            "Prototype testing of synchronized playback and chat overlays.",
        },
        {
          src: "https://images.unsplash.com/photo-1525182008051-d4d6360c81e5?auto=format&fit=crop&w=1600&q=80",
          alt: "Interactive live room interface exploration",
          caption:
            "Hi-fi interface exploration for layered interactive controls.",
        },
        {
          src: "https://images.unsplash.com/photo-1512427691650-1e0c0a1db8f1?auto=format&fit=crop&w=1600&q=80",
          alt: "UX researcher facilitating a workshop",
          caption:
            "Cross-functional workshop mapping monetization and moderation scenarios.",
        },
      ],
      tagline:
        "Transforming passive viewing into vibrant, revenue-ready communities.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Sphoorthy translated fragmented data into a narrative the exec team rallied around. Her work sharpened our roadmap in under a quarter.",
      author: "Gary S.",
      role: "EVP & Group President, Video Services",
    },
    {
      quote:
        "Every engagement with Sphoorthy raised the bar for how we use research. Her insights were precise, fast, and always tied to business levers.",
      author: "AL Shanmugam",
      role: "Head of Product · AI, Personalization & Platform Growth",
    },
    {
      quote:
        "She created a research practice that designers and engineers trusted. Shipping high-impact work became significantly easier.",
      author: "Erik Jonathan Nava",
      role: "Lead Design System Designer · AXS",
    },
    {
      quote:
        "Sphoorthy has a gift for making insight storytelling magnetic. Our leadership team still references her frameworks months later.",
      author: "Emily K.",
      role: "Director of Product Management",
    },
    {
      quote:
        "Her strategic instinct is matched by rigor. We saw measurable retention and revenue gains because of her research programs.",
      author: "Anish Raul",
      role: "Generative AI & Personalisation Leader",
    },
    {
      quote:
        "Working with Sphoorthy is like adding a compass to your product team. She keeps momentum without sacrificing depth.",
      author: "Michael B.",
      role: "Senior Product Designer",
    },
  ];

  const state = {
    activeId: projects[0]?.id || null,
    carouselController: null,
    guideMediaSlides: null,
  };

  function asset(path) {
    if (!path) return "";
    if (/^https?:/i.test(path)) return path;
    if (path.startsWith(repoBase)) return path;
    if (path.startsWith("/")) return path;
    const clean = path.replace(/^\/+/, "");
    return `${repoBase}${clean}`;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function applyLocalImages() {
    document.querySelectorAll("[data-local-src]").forEach((img) => {
      const original = img.getAttribute("data-local-src");
      if (original) {
        img.src = asset(original);
      }
    });
  }

  function attachRevealObserver() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    elements.forEach((el) => observer.observe(el));
  }

  function renderProjects() {
    const showcase = document.getElementById("project-showcase");
    const catalog = document.getElementById("project-catalog");
    const depth = document.getElementById("project-depth");
    if (!showcase || !catalog || !depth || !projects.length) return;

    const active =
      projects.find((project) => project.id === state.activeId) || projects[0];
    state.activeId = active.id;

    showcase.innerHTML = createShowcaseMarkup(active);
    catalog.innerHTML = projects
      .map((project) => createCatalogMarkup(project, project.id === active.id))
      .join("");
    depth.innerHTML = createDepthMarkup(active);
    activateDetailTabs(depth);
    hydrateMediaTab(active);

    if (active.gallery && active.gallery.length) {
      mountCarousel(active.id);
    }
  }

  function createShowcaseMarkup(project) {
    const heroSrc = asset(
      project.heroImage ||
        project.gallery?.[0]?.src ||
        "public/images/guide/guide-01.png",
    );
    const metricsHtml = (project.metrics || [])
      .map(
        (metric) => `
        <div class="metric-tile">
          <div class="metric-value">${escapeHtml(metric.value)}</div>
          <div class="metric-label">${escapeHtml(metric.label)}</div>
        </div>
      `,
      )
      .join("");

    return `
      <div>
        <p class="section-eyebrow">Featured case study</p>
        <h3 class="project-showcase__title">${escapeHtml(project.title)}</h3>
        <p class="project-showcase__summary">${escapeHtml(project.summary)}</p>
        <p class="project-showcase__outcome">${escapeHtml(project.outcome)}</p>
      </div>
      <div class="project-showcase__visual">
        <img src="${heroSrc}" alt="${escapeHtml(project.heroAlt || project.title)}" loading="lazy" />
      </div>
      <div class="metrics-grid">${metricsHtml}</div>
      <a class="project-showcase__cta" href="#project-depth">
        See how it came to life
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </a>
    `;
  }

  function createCatalogMarkup(project, isActive) {
    return `
      <button type="button" class="catalog-card${isActive ? " active" : ""}" data-project="${project.id}" aria-pressed="${isActive}">
        <span class="catalog-card__eyebrow">${escapeHtml(project.industry || "Case Study")}</span>
        <h4>${escapeHtml(project.title)}</h4>
        <p>${escapeHtml(project.tagline || project.summary)}</p>
        <span class="catalog-card__cta">${isActive ? "Selected" : "View project"}</span>
      </button>
    `;
  }

  function createDepthMarkup(project) {
    const detailMarkup = createDetailPanel(project);

    const focusHtml = (project.focus || [])
      .map((item) => `<span>${escapeHtml(item)}</span>`)
      .join("");

    const focusSection = focusHtml
      ? `
      <div>
        <p class="section-eyebrow">Focus areas</p>
        <div class="focus-chips">${focusHtml}</div>
      </div>
    `
      : "";

    const carouselMarkup = project.content?.media
      ? ""
      : createCarouselMarkup(project);

    const insightsHtml = (project.story || [])
      .map(
        (item) => `
          <div class="insight-card">
            <strong><span class="insight-card__icon">${escapeHtml(
              item.icon || "✦",
            )}</span>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.copy)}</p>
          </div>
        `,
      )
      .join("");

    const insightsSection = insightsHtml
      ? `
      <div>
        <p class="section-eyebrow">Strategic takeaways</p>
        <div class="insight-grid">${insightsHtml}</div>
      </div>
    `
      : "";

    return [detailMarkup, focusSection, carouselMarkup, insightsSection]
      .filter(Boolean)
      .join("");
  }

  function createDetailPanel(project) {
    const content = project.content;
    if (!content) return "";

    const metrics = Array.isArray(content.metrics) ? content.metrics : [];
    const metricMarkup = metrics
      .map(
        (metric) => `
          <div class="detail-metric">
            <div class="detail-metric__value">${escapeHtml(metric.value)}</div>
            <div class="detail-metric__label">${escapeHtml(metric.label)}</div>
          </div>
        `,
      )
      .join("");

    const tabOrder = [
      "overview",
      "methodology",
      "analysis",
      "results",
      "media",
    ];
    const tabs = tabOrder.filter((key) => content[key]);
    if (!tabs.length && !metricMarkup) {
      return "";
    }

    const buttons = tabs
      .map((tab, index) => {
        const label = tab.charAt(0).toUpperCase() + tab.slice(1);
        const panelId = `${project.id}-${tab}-panel`;
        const tabId = `${project.id}-${tab}-tab`;
        return `
          <button
            type="button"
            class="detail-tab${index === 0 ? " is-active" : ""}"
            role="tab"
            id="${tabId}"
            aria-selected="${index === 0 ? "true" : "false"}"
            aria-controls="${panelId}"
            tabindex="${index === 0 ? "0" : "-1"}"
            data-tab="${tab}"
          >${label}</button>
        `;
      })
      .join("");

    const panels = tabs
      .map((tab, index) => {
        const panelId = `${project.id}-${tab}-panel`;
        const tabId = `${project.id}-${tab}-tab`;
        const hiddenAttr = index === 0 ? "" : " hidden";
        return `
          <div
            class="detail-pane${index === 0 ? " is-active" : ""}"
            role="tabpanel"
            id="${panelId}"
            aria-labelledby="${tabId}"
            data-tab-panel="${tab}"${hiddenAttr}
          >${content[tab]}</div>
        `;
      })
      .join("");

    return `
      <section class="detail-panel glass-panel" data-detail-tabs>
        ${metricMarkup ? `<div class="detail-metrics">${metricMarkup}</div>` : ""}
        ${
          buttons
            ? `<div class="detail-tabs" role="tablist" aria-label="${escapeHtml(
                project.title,
              )} details">${buttons}</div>`
            : ""
        }
        <div class="detail-content">${panels}</div>
      </section>
    `;
  }

  function activateDetailTabs(root) {
    const container = root.querySelector("[data-detail-tabs]");
    if (!container) return;

    const buttons = Array.from(container.querySelectorAll("[data-tab]"));
    const panels = Array.from(container.querySelectorAll("[data-tab-panel]"));
    if (!buttons.length || !panels.length) return;

    const setActive = (tab) => {
      buttons.forEach((button) => {
        const isActive = button.getAttribute("data-tab") === tab;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
        button.setAttribute("tabindex", isActive ? "0" : "-1");
      });

      panels.forEach((panel) => {
        const isActive = panel.getAttribute("data-tab-panel") === tab;
        panel.classList.toggle("is-active", isActive);
        if (isActive) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "true");
        }
      });
    };

    container.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tab]");
      if (!button) return;
      event.preventDefault();
      setActive(button.getAttribute("data-tab"));
    });

    container.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        return;
      }
      const current = document.activeElement.closest("[data-tab]");
      if (!current) return;
      event.preventDefault();
      const currentIndex = buttons.indexOf(current);
      if (currentIndex === -1) return;
      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") {
        nextIndex = (currentIndex + 1) % buttons.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = buttons.length - 1;
      }
      const nextButton = buttons[nextIndex];
      setActive(nextButton.getAttribute("data-tab"));
      nextButton.focus();
    });
  }

  function hydrateMediaTab(project) {
    if (!project?.content?.media) return;
    const grid = document.getElementById("guide-media-grid");
    if (!grid) return;

    const slides =
      (project.id === "guide" && state.guideMediaSlides?.length
        ? state.guideMediaSlides
        : project.gallery) || [];

    if (!slides.length) {
      grid.innerHTML =
        '<p class="text-sm text-center text-gray-500">Media coming soon.</p>';
      return;
    }

    const markup = slides
      .map((slide) => {
        const caption = slide.caption
          ? `<figcaption>${escapeHtml(slide.caption)}</figcaption>`
          : "";
        return `
          <figure class="media-grid__item">
            <img src="${asset(slide.src)}" alt="${escapeHtml(
              slide.alt || project.title,
            )}" loading="lazy" />
            ${caption}
          </figure>
        `;
      })
      .join("");

    grid.innerHTML = markup;
  }

  function setupMenuToggle() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const panel = document.querySelector("[data-menu-panel]");
    const backdrop = document.querySelector("[data-menu-backdrop]");
    const closeButtons = document.querySelectorAll("[data-menu-close]");
    if (!toggle || !panel) return;

    const openMenu = () => {
      document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
      panel.setAttribute("aria-hidden", "false");
      const firstLink = panel.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    };

    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
      toggle.focus();
    };

    const toggleMenu = () => {
      if (document.body.classList.contains("menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    toggle.addEventListener("click", toggleMenu);
    closeButtons.forEach((button) =>
      button.addEventListener("click", closeMenu),
    );
    backdrop?.addEventListener("click", closeMenu);
    panel.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        closeMenu();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        document.body.classList.contains("menu-open")
      ) {
        closeMenu();
      }
    });

    if (active.gallery && active.gallery.length) {
      mountCarousel(active.id);
    }
  }

  function createShowcaseMarkup(project) {
    const heroSrc = asset(
      project.heroImage ||
        project.gallery?.[0]?.src ||
        "public/images/guide/guide-01.png",
    );
    const metricsHtml = (project.metrics || [])
      .map(
        (metric) => `
        <div class="metric-tile">
          <div class="metric-value">${escapeHtml(metric.value)}</div>
          <div class="metric-label">${escapeHtml(metric.label)}</div>
        </div>
      `,
      )
      .join("");

    return `
      <div>
        <p class="section-eyebrow">Featured case study</p>
        <h3 class="project-showcase__title">${escapeHtml(project.title)}</h3>
        <p class="project-showcase__summary">${escapeHtml(project.summary)}</p>
        <p class="project-showcase__outcome">${escapeHtml(project.outcome)}</p>
      </div>
      <div class="project-showcase__visual">
        <img src="${heroSrc}" alt="${escapeHtml(project.heroAlt || project.title)}" loading="lazy" />
      </div>
      <div class="metrics-grid">${metricsHtml}</div>
      <a class="project-showcase__cta" href="#project-depth">
        See how it came to life
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </a>
    `;
  }

  function createCatalogMarkup(project, isActive) {
    return `
      <button type="button" class="catalog-card${isActive ? " active" : ""}" data-project="${project.id}" aria-pressed="${isActive}">
        <span class="catalog-card__eyebrow">${escapeHtml(project.industry || "Case Study")}</span>
        <h4>${escapeHtml(project.title)}</h4>
        <p>${escapeHtml(project.tagline || project.summary)}</p>
        <span class="catalog-card__cta">${isActive ? "Selected" : "View project"}</span>
      </button>
    `;
  }

  function createDepthMarkup(project) {
    const focusHtml = (project.focus || [])
      .map((item) => `<span>${escapeHtml(item)}</span>`)
      .join("");

    const insightsHtml = (project.story || [])
      .map(
        (item) => `
          <div class="insight-card">
            <strong><span class="insight-card__icon">${escapeHtml(item.icon || "✦")}</span>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.copy)}</p>
          </div>
        `,
      )
      .join("");

    return `
      <div>
        <p class="section-eyebrow">Focus areas</p>
        <div class="focus-chips">${focusHtml}</div>
      </div>
      ${createCarouselMarkup(project)}
      <div>
        <p class="section-eyebrow">Strategic takeaways</p>
        <div class="insight-grid">${insightsHtml}</div>
      </div>
    `;
  }

  function createCarouselMarkup(project) {
    const slides = project.gallery || [];
    if (!slides.length) {
      const placeholder = project.galleryManifest
        ? '<div class="media-caption">Loading visuals from the research vault…</div>'
        : '<div class="media-caption">Visual narrative coming soon.</div>';
      return `
        <div class="media-carousel" data-project="${project.id}" data-empty="true">
          <div class="media-carousel__slides">
            <div class="media-slide is-active" aria-hidden="false">${placeholder}</div>
          </div>
        </div>
      `;
    }

    const slidesHtml = slides
      .slice(0, 8)
      .map(
        (slide, index) => `
          <figure class="media-slide${index === 0 ? " is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">
            <img src="${asset(slide.src)}" alt="${escapeHtml(slide.alt || project.title)}" loading="lazy" />
            <figcaption class="media-caption">${escapeHtml(slide.caption || "")}</figcaption>
          </figure>
        `,
      )
      .join("");

    const dotsHtml =
      slides.length > 1
        ? `<div class="media-dots">${slides
            .map(
              (_, index) => `
              <button type="button" class="media-dot${index === 0 ? " is-active" : ""}" data-carousel-dot="${index}" aria-label="Go to visual ${index + 1}"></button>
            `,
            )
            .join("")}</div>`
        : "";

    const controlsHtml =
      slides.length > 1
        ? `<div class="media-controls">
          <button type="button" data-carousel-prev aria-label="Previous visual">‹</button>
          ${dotsHtml}
          <button type="button" data-carousel-next aria-label="Next visual">›</button>
        </div>`
        : "";

    return `
      <div class="media-carousel" data-project="${project.id}">
        <div class="media-carousel__slides">${slidesHtml}</div>
        ${controlsHtml}
      </div>
    `;
  }

  function mountCarousel(projectId) {
    const container = document.querySelector(
      `.media-carousel[data-project="${projectId}"]`,
    );
    if (!container) return;
    const slides = Array.from(container.querySelectorAll(".media-slide"));
    if (slides.length <= 1) return;

    if (
      state.carouselController &&
      typeof state.carouselController.stop === "function"
    ) {
      state.carouselController.stop();
    }

    const dots = Array.from(container.querySelectorAll("[data-carousel-dot]"));
    const prevBtn = container.querySelector("[data-carousel-prev]");
    const nextBtn = container.querySelector("[data-carousel-next]");
    let index = 0;
    let timerId = null;

    const setActive = (nextIndex) => {
      index = nextIndex;
      slides.forEach((slide, idx) => {
        const isActive = idx === index;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      dots.forEach((dot, idx) =>
        dot.classList.toggle("is-active", idx === index),
      );
    };

    const next = () => setActive((index + 1) % slides.length);
    const prev = () => setActive((index - 1 + slides.length) % slides.length);

    const stopAuto = () => {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const startAuto = () => {
      if (prefersReducedMotion || slides.length < 2) return;
      stopAuto();
      timerId = window.setInterval(next, 6000);
    };

    nextBtn?.addEventListener("click", () => {
      stopAuto();
      next();
      startAuto();
    });

    prevBtn?.addEventListener("click", () => {
      stopAuto();
      prev();
      startAuto();
    });

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        stopAuto();
        setActive(idx);
        startAuto();
      });
    });

    container.addEventListener("mouseenter", stopAuto);
    container.addEventListener("mouseleave", startAuto);

    setActive(0);
    startAuto();

    state.carouselController = {
      stop: stopAuto,
    };
  }

  function attachCatalogHandlers() {
    const catalog = document.getElementById("project-catalog");
    if (!catalog) return;
    catalog.addEventListener("click", (event) => {
      const button = event.target.closest("[data-project]");
      if (!button) return;
      const id = button.getAttribute("data-project");
      if (id && id !== state.activeId) {
        state.activeId = id;
        renderProjects();
      }
    });

    catalog.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const button = event.target.closest("[data-project]");
      if (!button) return;
      event.preventDefault();
      const id = button.getAttribute("data-project");
      if (id && id !== state.activeId) {
        state.activeId = id;
        renderProjects();
      }
    });
  }

  async function loadGuideGallery(project) {
    try {
      const response = await fetch(asset("guide-manifest.json"), {
        cache: "no-cache",
      });
      if (!response.ok)
        throw new Error(
          `Unable to load guide-manifest.json (${response.status})`,
        );
      const manifest = await response.json();
      if (!manifest?.entries) return;

      const slides = [];
      for (const entry of manifest.entries) {
        if (entry.type !== "image") continue;
        const resolved = await resolveGuideImage(entry.src);
        if (!resolved) continue;
        slides.push({ src: resolved, alt: entry.alt, caption: entry.caption });
      }

      if (slides.length) {
        project.gallery = slides;
        if (project.id === "guide") {
          state.guideMediaSlides = slides;
        }
        if (!project.heroImage) {
          project.heroImage = slides[0].src;
        }
        if (project.id === state.activeId) {
          renderProjects();
        }
      }
    } catch (error) {
      console.warn("Unable to hydrate guide media", error);
    }
  }

  function resolveGuideImage(rawSrc) {
    const decoded = decodeURIComponent(rawSrc || "").trim();
    const fileName = decoded.split(/[\/]/).pop() || "";
    const lower = fileName.toLowerCase();
    const base = lower.replace(/\.[^.]+$/, "");
    const extMatch = lower.match(/\.[^.]+$/);
    const defaultExt = extMatch ? extMatch[0] : ".png";
    const normalized = base.replace(/\s+/g, "-").replace(/_/g, "-");
    const dashed = normalized.replace(
      /^(guide|gr)(-?)(\d{1,2})$/,
      (_, prefix, __, digits) => `${prefix}-${digits.padStart(2, "0")}`,
    );

    const candidates = new Set();
    const variations = Array.from(
      new Set([dashed, normalized].filter((value) => Boolean(value))),
    );
    const variations = [normalized, dashed];
    const extensions = [
      ".png",
      ".PNG",
      ".jpg",
      ".JPG",
      ".jpeg",
      ".JPEG",
      defaultExt,
    ];

    variations.forEach((variant) => {
      extensions.forEach((ext) => {
        candidates.add(`${variant}${ext}`);
      });
    });
    candidates.add(fileName);

    const prefix = `${repoBase}public/images/guide/`;
    const list = Array.from(candidates).map(
      (name) => `${prefix}${name.replace(/^\/+/, "")}`,
    );

    return new Promise((resolve) => {
      if (!list.length) {
        resolve(null);
        return;
      }
      let index = 0;
      const tryNext = () => {
        if (index >= list.length) {
          resolve(null);
          return;
        }
        const testImage = new Image();
        testImage.onload = () => resolve(list[index]);
        testImage.onerror = () => {
          index += 1;
          tryNext();
        };
        testImage.src = list[index];
      };
      tryNext();
    });
  }

  function renderTestimonials() {
    const container = document.getElementById("testimonial-track");
    if (!container || !testimonials.length) return;
    const row = document.createElement("div");
    row.className = "testimonial-row";
    row.innerHTML = testimonials.map(createTestimonialCard).join("");
    const clone = row.cloneNode(true);
    container.innerHTML = "";
    container.append(row, clone);
  }

  function createTestimonialCard(testimonial) {
    return `
      <article class="testimonial-card">
        <p>“${escapeHtml(testimonial.quote)}”</p>
        <div>
          <div class="testimonial-author">${escapeHtml(testimonial.author)}</div>
          <div class="testimonial-role">${escapeHtml(testimonial.role)}</div>
        </div>
      </article>
    `;
  }

  function updateYear() {
    const year = document.getElementById("copyright-year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  function init() {
    applyLocalImages();
    attachRevealObserver();
    renderProjects();
    attachCatalogHandlers();
    renderTestimonials();
    updateYear();
    setupMenuToggle();

    const guideProject = projects.find((project) => project.galleryManifest);
    if (guideProject) {
      loadGuideGallery(guideProject);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
