(() => {
  // --- Data Definitions (Unchanged) ---

  const repoBase = (() => {
    const { pathname } = window.location;
    if (!pathname || pathname === "/") return "/";
    if (pathname.endsWith("/")) return pathname;
    const lastSlash = pathname.lastIndexOf("/");
    return lastSlash >= 0 ? pathname.slice(0, lastSlash + 1) : "/";
  })();

  const projects = [
    {
      id: "guide",
      title: "Reinventing the TV Guide",
      summary:
        "Unified Sling TV and DISH discovery into one adaptive experience using multi-surface research.",
      background:
        "A strategic research initiative to unify Sling TV and DISH TV guide experiences and turn friction into engagement.",
      outcome: "~$7.46M estimated annual impact",
      tileImage: "public/images/guide/guide-03.png",
      tileImageAlt: "Unified TV guide concept across multiple devices",
      content: {
        metrics: [
          { value: "~$7.46M", label: "Estimated annual value impact" },
          { value: "90%", label: "Target task success rate" },
          { value: "-12%", label: "CX complaints" },
        ],
        overview: `
          <div class="detail-copy">
            <div>
              <h4>Background</h4>
              <p>The guide sits at the heart of content discovery but had evolved in parallel across Sling TV and DISH TV, creating fragmented experiences.</p>
            </div>
            <div>
              <h4>The challenge</h4>
              <p>Unify the guide experience to enhance usability and personalization without alienating loyal users on two very different platforms.</p>
            </div>
            <div>
              <h4>Objectives</h4>
              <ul>
                <li>Identify user frustrations and unmet needs across platforms.</li>
                <li>Uncover shared pain points to guide a unified design strategy.</li>
                <li>Deliver actionable recommendations that balance user and business goals.</li>
              </ul>
            </div>
          </div>
        `,
        methodology: `
          <div class="detail-copy">
            <div>
              <h4>Discovery &amp; planning</h4>
              <p>Partnered with product and ops leads to frame the opportunity, synthesize data, and establish decision criteria.</p>
              <p><strong>Tools:</strong> UserZoom, Google Analytics, JIRA</p>
            </div>
            <div>
              <h4>Generative research</h4>
              <p>In-depth interviews revealed how households navigate content, why favorites lists stall, and what trust signals are missing.</p>
              <p><strong>Tools:</strong> Lookback, remote moderated sessions</p>
            </div>
            <div>
              <h4>Synthesis &amp; ideation</h4>
              <p>Mapped journeys and service blueprints to expose systemic friction, co-creating with design and engineering.</p>
              <p><strong>Tools:</strong> FigJam, Figma</p>
            </div>
            <div>
              <h4>Validation &amp; delivery</h4>
              <p>Iterative usability testing and launch playbooks ensured accessibility and operational readiness.</p>
              <p><strong>Tools:</strong> UserTesting, Confluence</p>
            </div>
          </div>
        `,
        analysis: `
          <div class="detail-copy">
            <div>
              <h4>Audience segments</h4>
              <p><strong>DISH subscribers:</strong> rely on legacy navigation, need clarity and accessibility. <strong>Sling subscribers:</strong> expect speed, personalization, and cross-device parity.</p>
            </div>
            <div>
              <h4>Quantitative signals</h4>
              <ul>
                <li>High engagement but lower playback (79% engagement → 56% playback on Sling).</li>
                <li>Personalization features were underutilized despite clear retention gains.</li>
                <li>44% of Sling guide sessions ended within 20 seconds without playback.</li>
                <li>Navigation habits masked faster, time-based browsing patterns.</li>
              </ul>
            </div>
          </div>
        `,
        results: `
          <div class="detail-copy">
            <p>Evidence-backed recommendations delivered measurable value across retention, upsell, and ad revenue channels.</p>
            <ul>
              <li><strong>$5.83M</strong> projected from retention uplift.</li>
              <li><strong>$1.94M</strong> from feature upsells tied to personalization.</li>
              <li><strong>$193K</strong> in incremental ad revenue.</li>
              <li><strong>$63K</strong> in operational savings through workflow clarity.</li>
            </ul>
          </div>
        `,
        media: {
          featured: {
            src: "public/images/guide/guide-05.png",
            alt: "Channel grid concept with tuned information density",
          },
          carousel: [
            {
              src: "public/images/guide/guide-07.png",
              alt: "Transition storyboard for the guide redesign",
            },
            {
              src: "public/images/guide/gr-01.png",
              alt: "Discovery synthesis mural highlighting pain points",
            },
            {
              src: "public/images/guide/gr-02.png",
              alt: "Persona snapshots aligning Sling and DISH audiences",
            },
            {
              src: "public/images/guide/gr-03.png",
              alt: "Service blueprint mapping current and future states",
            },
          ],
          caption: "Key visuals, flows, and prototypes that shaped the unified guide vision.",
        },
      },
    },
    {
      id: "gundersen",
      title: "Gundersen Health Virtual Care OS",
      summary:
        "Reimagined intake and triage flows for clinicians and patients inside a unified virtual care operating system.",
      background:
        "Streamlining prescription refills by empowering patients and reducing manual work for pharmacy staff.",
      outcome: "12,334+ active app users within 6 months",
      heroImage:
        "https://images.unsplash.com/photo-1580281658629-26036f899014?auto=format&fit=crop&w=1600&q=80",
      heroAlt: "Clinician reviewing a virtual care dashboard",
      content: {
        metrics: [
          { value: "12,334+", label: "Active app users" },
          { value: "36%", label: "Refill volume via app" },
          { value: "$702K+", label: "Annual labor savings" },
        ],
        overview: `
          <div class="detail-copy">
            <div>
              <h4>Background</h4>
              <p>The mobile refill app aimed to reduce repetitive pharmacy work and enable patients to manage medications independently.</p>
            </div>
            <div>
              <h4>Research goals</h4>
              <ul>
                <li>Drive awareness and adoption across clinics.</li>
                <li>Shift 25% of monthly refills into the app experience.</li>
                <li>Automate refill reminders and status updates at scale.</li>
                <li>Reduce inbound call volume and manual outreach.</li>
              </ul>
            </div>
          </div>
        `,
        methodology: `
          <div class="detail-copy">
            <div>
              <h4>Workflow &amp; stakeholder analysis</h4>
              <p>Shadowed pharmacists, RNs, and MAs to map the manual refill process and quantify hidden labor costs.</p>
            </div>
            <div>
              <h4>Usability &amp; heuristic evaluation</h4>
              <p>Evaluated the existing app with patients and staff to surface friction, accessibility gaps, and trust barriers.</p>
            </div>
            <div>
              <h4>Discovery synthesis</h4>
              <p>Reframed the problem around awareness and education, pairing messaging experiments with product refinements.</p>
            </div>
          </div>
        `,
        analysis: `
          <div class="detail-copy">
            <ul>
              <li><strong>Minimalist UI delivered 95% task success</strong> but lacked emotional engagement.</li>
              <li><strong>Awareness, not usability, blocked adoption</strong>—most patients didn’t know the app existed.</li>
              <li><strong>Clinicians sought automation</strong> to reduce outbound calls and status updates.</li>
            </ul>
          </div>
        `,
        results: `
          <div class="detail-copy">
            <p>Marketing pilots plus in-clinic coaching exceeded every launch metric within six months.</p>
            <ul>
              <li><strong>12,334</strong> active users vs. the 10,000 target.</li>
              <li><strong>16,476</strong> monthly refills vs. the 11,250 goal.</li>
              <li><strong>$702K+</strong> in recovered labor time by reducing manual calls.</li>
            </ul>
          </div>
        `,
        media: {
          featured: {
            src: "https://images.unsplash.com/photo-1587614382346-4ec892f9aca3?auto=format&fit=crop&w=1600&q=80",
            alt: "Telehealth dashboard interface concept",
          },
          carousel: [
            {
              src: "https://images.unsplash.com/photo-1580894894513-d75ec1c5c5a1?auto=format&fit=crop&w=1600&q=80",
              alt: "Patient testing the simplified refill journey",
            },
            {
              src: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
              alt: "Co-creation workshop with clinical stakeholders",
            },
          ],
          caption: "Pilot campaigns, usability labs, and co-creation sessions that drove adoption.",
        },
      },
    },
    {
      id: "live-rooms",
      title: "Validating Live Rooms",
      summary:
        "Launched a co-watching and commerce layer that extends live broadcasts into interactive communities.",
      background:
        "Validating a social TV concept by understanding how people want to engage during live content.",
      outcome: "Guided go/no-go decision",
      heroImage:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
      heroAlt: "Friends enjoying an illuminated streaming session",
      content: {
        metrics: [
          { value: "87%", label: "Liked interactive features" },
          { value: "76%", label: "Preferred second-screen" },
          { value: "56%", label: "Engaged with emoji reactions" },
          { value: "41%", label: "Enjoyed live quizzes" },
        ],
        overview: `
          <div class="detail-copy">
            <div>
              <h4>Background</h4>
              <p>Live Rooms explored how social chat, reactions, and interactive moments could elevate live TV viewing across genres.</p>
            </div>
            <div>
              <h4>Research goals</h4>
              <ul>
                <li>Gauge desirability of interactive layers across sports and entertainment.</li>
                <li>Understand how social features impact attention and enjoyment.</li>
                <li>Ensure experimentation doesn’t disrupt core viewing.</li>
              </ul>
            </div>
          </div>
        `,
        methodology: `
          <div class="detail-copy">
            <div>
              <h4>Concept tests</h4>
              <p>Eight in-depth sessions balanced experienced streamers and newcomers to probe baseline expectations.</p>
            </div>
            <div>
              <h4>Live pilots</h4>
              <p>Ran NBA and reality TV watch parties with 100+ participants, capturing telemetry and survey feedback.</p>
            </div>
            <div>
              <h4>Signal instrumentation</h4>
              <p>Tracked engagement loops, moderation needs, and conversion moments to inform roadmap bets.</p>
            </div>
          </div>
        `,
        analysis: `
          <div class="detail-copy">
            <ul>
              <li><strong>Control is essential:</strong> 87% wanted the ability to toggle chat and reactions.</li>
              <li><strong>Second-screen behavior:</strong> 76% preferred interacting on mobile while watching on TV.</li>
              <li><strong>Feature fit varies by genre:</strong> Sports fans embraced fast chat; reality TV fans favored polls and quizzes.</li>
            </ul>
          </div>
        `,
        results: `
          <div class="detail-copy">
            <p>Engagement lifts across pilots informed a confident recommendation to proceed with phased investment.</p>
            <ul>
              <li><strong>3.1 hrs</strong> average viewing time during Jersey Shore Family Vacation pilots.</li>
              <li><strong>94%</strong> feature adoption during BET Awards experiments.</li>
              <li><strong>18%</strong> lift in session length across all cohorts.</li>
            </ul>
          </div>
        `,
        media: {
          featured: {
            src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80",
            alt: "Prototype testing synchronized playback and chat",
          },
          carousel: [
            {
              src: "https://images.unsplash.com/photo-1525182008051-d4d6360c81e5?auto=format&fit=crop&w=1600&q=80",
              alt: "Interactive live room interface exploration",
            },
            {
              src: "https://images.unsplash.com/photo-1512427691650-1e0c0a1db8f1?auto-format&fit=crop&w=1600&q=80",
              alt: "Researcher facilitating a live viewing workshop",
            },
          ],
          caption: "Concept explorations, live pilots, and team workshops guiding the go/no-go decision.",
        },
      },
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

  // --- Global State ---
  const state = {
    activeId: projects[0]?.id ?? null,
    activeCarousel: null,
    activeLightbox: null,
  };

  // --- Utility Functions ---

  function asset(path) {
    if (!path) return "";
    if (/^https?:/i.test(path)) return path;
    if (path.startsWith(repoBase)) return path;
    if (path.startsWith("/")) return path;
    const clean = path.replace(/^\/+/, "");
    return `${repoBase}${clean}`;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /**
   * NEW: Parses an HTML string into a queryable DocumentFragment.
   * @param {string} htmlString - The HTML string to parse.
   * @returns {DocumentFragment}
   */
  function parseHtml(htmlString) {
    if (!htmlString) {
      console.warn("parseHtml received empty string.");
      htmlString = "<div></div>";
    }
    const template = document.createElement("template");
    template.innerHTML = htmlString.trim();
    return template.content;
  }

  // --- NEW: Visual Transformation Functions ---

  /**
   * NEW: Generates the Overview tab content.
   * @param {string} htmlString - The raw HTML from project.content.overview.
   * @returns {string} The new infographic HTML.
   */
  function renderOverview(htmlString) {
    const doc = parseHtml(htmlString);
    const sections = [
      {
        icon: "🎯",
        title: "Background",
        content: doc.querySelector("h4:nth-of-type(1) + p")?.textContent,
      },
      {
        icon: "🔍",
        title: "The challenge",
        content: doc.querySelector("h4:nth-of-type(2) + p")?.textContent,
      },
      {
        icon: "📈",
        title: "Objectives",
        content: doc.querySelector("h4:nth-of-type(3) + ul")?.outerHTML,
      },
    ];

    return `
      <div class="infographic-grid">
        ${sections
          .map(
            (s) => `
          <div class="info-card">
            <h4><span class="info-card-icon">${s.icon}</span>${escapeHtml(s.title)}</h4>
            ${s.title === "Objectives" ? s.content : `<p>${escapeHtml(s.content)}</p>`}
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  /**
   * NEW: Generates the Methodology tab content.
   * @param {string} htmlString - The raw HTML from project.content.methodology.
   * @returns {string} The new timeline HTML.
   */
  function renderMethodology(htmlString) {
    const doc = parseHtml(htmlString);
    const steps = Array.from(doc.querySelectorAll(".detail-copy > div"));

    return `
      <ol class="process-timeline">
        ${steps
          .map((step, index) => {
            const title = step.querySelector("h4")?.textContent || "";
            const paragraphs = Array.from(step.querySelectorAll("p"))
              .map((p) => {
                // Check for the "Tools:" strong tag and wrap it
                if (p.querySelector("strong")) {
                  return `<p class="tools">${p.innerHTML}</p>`;
                }
                return `<p>${escapeHtml(p.textContent)}</p>`;
              })
              .join("");

            return `
            <li>
              <span class="timeline-icon">${index + 1}</span>
              <div class="timeline-content">
                <h4>${escapeHtml(title)}</h4>
                ${paragraphs}
              </div>
            </li>
          `;
          })
          .join("")}
      </ol>
    `;
  }

  /**
   * NEW: Generates the Analysis tab content.
   * @param {string} htmlString - The raw HTML from project.content.analysis.
   * @returns {string} The new info card HTML.
   */
  function renderAnalysis(htmlString) {
    const doc = parseHtml(htmlString);
    // This data structure is less consistent. Some have h4s, others just a ul.
    const h4s = Array.from(doc.querySelectorAll("h4"));
    const uls = Array.from(doc.querySelectorAll("ul"));

    let content = "";
    if (h4s.length > 0) {
      content = h4s
        .map((h4, index) => {
          const ul = uls[index] || h4.nextElementSibling;
          return `
          <div class="info-card">
            <h4>${escapeHtml(h4.textContent)}</h4>
            ${ul?.outerHTML || ""}
            <div class="mini-viz-placeholder"></div>
          </div>
        `;
        })
        .join("");
    } else if (uls.length > 0) {
      // Fallback for analysis that is just a list
      content = uls
        .map(
          (ul) => `
        <div class="info-card">
          ${ul.outerHTML}
          <div class="mini-viz-placeholder"></div>
        </div>
      `
        )
        .join("");
    }

    return `<div class="infographic-grid">${content}</div>`;
  }

  /**
   * NEW: Generates the Results tab content with KPI cards.
   * @param {string} resultsString - The raw HTML from project.content.results.
   * @param {Array} metrics - The structured metrics array.
   * @returns {string} The new KPI-focused HTML.
   */
  function renderResults(resultsString, metrics) {
    const doc = parseHtml(resultsString);
    const summary = doc.querySelector(".detail-copy")?.innerHTML || "";

    const kpiCards = (metrics || [])
      .map((metric) => {
        // Extract number, prefix, and suffix from the value string
        const value = metric.value || "0";
        const numericMatch = value.match(/[\d.,]+/);
        const number = numericMatch ? numericMatch[0].replace(/,/g, "") : "0";
        const prefix = value.substring(0, numericMatch?.index).trim();
        const suffix = value
          .substring((numericMatch?.index || 0) + number.length)
          .trim();
        
        const icon = (label) => {
          if (label.includes("value") || label.includes("impact")) return "💰";
          if (label.includes("rate") || label.includes("%")) return "📈";
          if (label.includes("complaints")) return "📉";
          if (label.includes("users")) return "👥";
          return "✨";
        };

        return `
          <div class="kpi-card">
            <div class="kpi-icon">${icon(metric.label.toLowerCase())}</div>
            <div class="kpi-value-container"
                 data-target="${escapeHtml(number)}"
                 data-prefix="${escapeHtml(prefix)}"
                 data-suffix="${escapeHtml(suffix)}">
              <span class="kpi-prefix">${escapeHtml(prefix)}</span>
              <span class="kpi-value">0</span>
              <span class="kpi-suffix">${escapeHtml(suffix)}</span>
            </div>
            <div class="kpi-label">${escapeHtml(metric.label)}</div>
          </div>
        `;
      })
      .join("");

    return `
      ${kpiCards ? `<div class="kpi-grid">${kpiCards}</div>` : ""}
      ${summary ? `<div class="results-summary">${summary}</div>` : ""}
    `;
  }

  /**
   * NEW: Generates the Media tab with a JS-driven carousel.
   * @param {object} media - The project.content.media object.
   * @returns {string} The HTML for the media tab.
   */
  function renderMediaSection(media) {
    if (!media) {
      return `<div class="info-card"><p>Media assets coming soon.</p></div>`;
    }

    // Collate all images for the lightbox
    const allImages = [];
    if (media.featured) {
      allImages.push({ src: asset(media.featured.src), alt: media.featured.alt || "Featured image" });
    }
    if (media.carousel) {
      media.carousel.forEach(item => {
        allImages.push({ src: asset(item.src), alt: item.alt || "Project gallery" });
      });
    }

    const featured = media.featured
      ? `
        <div class="media-featured" data-lightbox-trigger="0">
          <img src="${asset(media.featured.src)}" alt="${escapeHtml(media.featured.alt || "Project media")}" loading="lazy" />
        </div>
      `
      : "";

    let carousel = "";
    if (Array.isArray(media.carousel) && media.carousel.length) {
      const items = media.carousel
        .map(
          (item, index) => `
            <div class="media-carousel__item" data-lightbox-trigger="${index + (media.featured ? 1 : 0)}">
              <img src="${asset(item.src)}" alt="${escapeHtml(item.alt || "Project gallery")}" loading="lazy" />
            </div>
          `
        )
        .join("");

      carousel = `
        <div class="media-carousel-wrapper" id="media-carousel-instance">
          <button class="media-arrow media-arrow--prev" aria-label="Previous slide" disabled>&larr;</button>
          <div class="media-carousel__viewport">
            <div class="media-carousel__track">${items}</div>
          </div>
          <button class="media-arrow media-arrow--next" aria-label="Next slide">&rarr;</button>
          <div class="media-carousel__dots"></div>
        </div>
      `;
    }

    const caption = media.caption
      ? `<div class="media-caption"><p>${escapeHtml(media.caption)}</p></div>`
      : "";

    // Store images in a data attribute for the lightbox
    const allImagesJson = escapeHtml(JSON.stringify(allImages));
    return `<div class="media-gallery-container" data-lightbox-images='${allImagesJson}'>${featured}${carousel}${caption}</div>`;
  }

  // --- Core Rendering Functions ---

  function renderProjectTiles() {
    const container = document.getElementById("project-tiles");
    if (!container || !projects.length) return;
    container.innerHTML = projects
      .map((project) => {
        const isActive = project.id === state.activeId;
        const imageSrc = asset(
          project.tileImage ||
            project.heroImage ||
            project.content?.media?.featured?.src ||
            ""
        );
        const imageAlt = project.tileImageAlt || project.heroAlt || project.title;
        return `
          <button type="button" class="project-tile${isActive ? " active" : ""}" data-project-id="${project.id}">
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.background)}</p>
            <p class="project-outcome"><strong>Results</strong> ${escapeHtml(project.outcome)}</p>
            ${imageSrc ? `<figure><img src="${imageSrc}" alt="${escapeHtml(imageAlt)}" loading="lazy" /></figure>` : ""}
          </button>
        `;
      })
      .join("");
  }

  function renderProjectDetail() {
    const container = document.getElementById("project-detail");
    if (!container) return;
    const project = projects.find((item) => item.id === state.activeId);
    if (!project) {
      container.innerHTML = "";
      return;
    }

    // Stop any active carousels from the previous project
    if (state.activeCarousel) {
      state.activeCarousel.destroy();
      state.activeCarousel = null;
    }
    // Destroy any active lightbox
    if (state.activeLightbox) {
      state.activeLightbox.destroy();
      state.activeLightbox = null;
    }

    const sections = [
      { key: "overview", label: "Overview" },
      { key: "methodology", label: "Methodology" },
      { key: "analysis", label: "Analysis" },
      { key: "results", label: "Results" },
      { key: "media", label: "Media" },
    ].filter((section) => project.content?.[section.key]);

    const tabButtons = sections
      .map(
        (section, index) => `
          <button type="button" role="tab" aria-selected="${index === 0}" aria-controls="tab-panel-${section.key}" id="tab-btn-${section.key}" class="tab-btn${index === 0 ? " active" : ""}" data-tab="${section.key}">
            ${section.label}
          </button>
        `
      )
      .join("");

    const tabPanels = sections
      .map((section, index) => {
        let html = "";
        // NEW: Use transformation functions
        switch (section.key) {
          case "overview":
            html = renderOverview(project.content.overview);
            break;
          case "methodology":
            html = renderMethodology(project.content.methodology);
            break;
          case "analysis":
            html = renderAnalysis(project.content.analysis);
            break;
          case "results":
            html = renderResults(project.content.results, project.content.metrics);
            break;
          case "media":
            html = renderMediaSection(project.content.media);
            break;
          default:
            html = project.content[section.key] ?? "";
        }
        return `
          <div class="tab-content${index === 0 ? " active" : ""}" role="tabpanel" aria-labelledby="tab-btn-${section.key}" id="tab-panel-${section.key}" data-tab-panel="${section.key}">
            ${html}
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <header>
        <span class="section-eyebrow">Case study</span>
        <h3>${escapeHtml(project.title)}</h3>
        ${project.summary ? `<p>${escapeHtml(project.summary)}</p>` : ""}
      </header>
      <div class="details-tabs" role="tablist">${tabButtons}</div>
      <div class="tab-panels">${tabPanels}</div>
    `;

    // Initialize tabs, animations, and carousels for the new content
    initTabInteractions(container);
    initKpiAnimations(container);
    initMedia(container);
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

  // --- NEW: Interactive Component Classes ---

  /**
   * NEW: Carousel Class
   * Handles media gallery logic, including auto-play, arrows, dots, and accessibility.
   */
  class Carousel {
    constructor(element) {
      this.element = element;
      this.track = element.querySelector(".media-carousel__track");
      this.items = Array.from(element.querySelectorAll(".media-carousel__item"));
      this.prevBtn = element.querySelector(".media-arrow--prev");
      this.nextBtn = element.querySelector(".media-arrow--next");
      this.dotsContainer = element.querySelector(".media-carousel__dots");
      
      if (!this.track || this.items.length === 0) return;

      this.currentIndex = 0;
      this.itemWidth = this.items[0].offsetWidth + parseFloat(getComputedStyle(this.track).gap);
      this.visibleItems = Math.floor(this.element.querySelector(".media-carousel__viewport").offsetWidth / this.itemWidth);
      this.maxIndex = this.items.length - this.visibleItems;
      this.dots = [];
      this.timer = null;

      this.init();
    }

    init() {
      this.createDots();
      this.bindEvents();
      this.updateControls();
      this.startAutoPlay();
    }

    createDots() {
      if (!this.dotsContainer) return;
      this.dotsContainer.innerHTML = "";
      for (let i = 0; i <= this.maxIndex; i++) {
        const button = document.createElement("button");
        button.className = "media-dot";
        button.setAttribute("aria-label", `Go to slide ${i + 1}`);
        button.addEventListener("click", () => this.goTo(i));
        this.dotsContainer.appendChild(button);
        this.dots.push(button);
      }
    }

    bindEvents() {
      this.prevBtn.addEventListener("click", this.prev.bind(this));
      this.nextBtn.addEventListener("click", this.next.bind(this));
      this.element.addEventListener("mouseenter", this.stopAutoPlay.bind(this));
      this.element.addEventListener("mouseleave", this.startAutoPlay.bind(this));
      this.element.addEventListener("focusin", this.stopAutoPlay.bind(this));
      this.element.addEventListener("focusout", this.startAutoPlay.bind(this));
    }

    goTo(index) {
      this.currentIndex = Math.max(0, Math.min(index, this.maxIndex));
      this.track.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
      this.updateControls();
      this.resetAutoPlay();
    }

    next() {
      this.goTo(this.currentIndex + 1);
    }

    prev() {
      this.goTo(this.currentIndex - 1);
    }

    updateControls() {
      this.prevBtn.disabled = this.currentIndex === 0;
      this.nextBtn.disabled = this.currentIndex >= this.maxIndex;
      
      this.dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === this.currentIndex);
      });
    }

    startAutoPlay() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      this.stopAutoPlay(); // Clear any existing timer
      this.timer = setInterval(() => {
        const nextIndex = (this.currentIndex >= this.maxIndex) ? 0 : this.currentIndex + 1;
        this.goTo(nextIndex);
      }, 5000); // 5-second auto-play
    }

    stopAutoPlay() {
      clearInterval(this.timer);
      this.timer = null;
    }
    
    resetAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    }

    destroy() {
      this.stopAutoPlay();
      // Remove event listeners (simplified for this scope)
      // In a larger app, we'd use AbortController or remove individually
    }
  }

  /**
   * NEW: Lightbox Class
   * Handles opening, closing, and navigating the full-screen image viewer.
   */
  class Lightbox {
    constructor(element, images) {
      this.lightboxElement = element;
      this.images = images; // [{src, alt}, ...]
      this.currentIndex = 0;
      
      this.img = this.lightboxElement.querySelector(".lightbox__img");
      this.caption = this.lightboxElement.querySelector("#lightbox-caption");
      this.prevBtn = this.lightboxElement.querySelector("[data-lightbox-prev]");
      this.nextBtn = this.lightboxElement.querySelector("[data-lightbox-next]");
      this.closeBtn = this.lightboxElement.querySelector("[data-lightbox-close]");

      this.bindEvents();
    }
    
    bindEvents() {
      this.closeBtn.addEventListener("click", this.close.bind(this));
      this.prevBtn.addEventListener("click", this.prev.bind(this));
      this.nextBtn.addEventListener("click", this.next.bind(this));
      this.lightboxElement.addEventListener("click", (e) => {
        if (e.target === this.lightboxElement) {
          this.close();
        }
      });
      document.addEventListener("keydown", this.handleKeydown.bind(this));
    }
    
    handleKeydown(e) {
      if (!this.isOpen()) return;
      if (e.key === "Escape") this.close();
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    }

    open(index) {
      this.lightboxElement.classList.add("open");
      this.lightboxElement.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      this.showImage(index);
    }
    
    close() {
      this.lightboxElement.classList.remove("open");
      this.lightboxElement.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    
    isOpen() {
      return this.lightboxElement.classList.contains("open");
    }

    showImage(index) {
      this.currentIndex = index;
      const { src, alt } = this.images[this.currentIndex];
      this.img.src = src;
      this.img.alt = alt;
      this.caption.textContent = alt;
      
      this.prevBtn.disabled = this.currentIndex === 0;
      this.nextBtn.disabled = this.currentIndex === this.images.length - 1;
    }
    
    prev() {
      if (this.currentIndex > 0) {
        this.showImage(this.currentIndex - 1);
      }
    }
    
    next() {
      if (this.currentIndex < this.images.length - 1) {
        this.showImage(this.currentIndex + 1);
      }
    }
    
    destroy() {
      // Clean up event listeners
      document.removeEventListener("keydown", this.handleKeydown.bind(this));
    }
  }


  // --- Initialization & Event Binding ---

  /**
   * NEW: Initializes the media carousel and lightbox for the current project.
   * @param {HTMLElement} container - The .project-detail element.
   */
  function initMedia(container) {
    const carouselElement = container.querySelector("#media-carousel-instance");
    if (carouselElement) {
      state.activeCarousel = new Carousel(carouselElement);
    }
    
    const mediaContainer = container.querySelector(".media-gallery-container");
    const lightboxElement = document.getElementById("lightbox");
    if (mediaContainer && lightboxElement) {
      try {
        const images = JSON.parse(mediaContainer.dataset.lightboxImages);
        state.activeLightbox = new Lightbox(lightboxElement, images);
        
        container.querySelectorAll("[data-lightbox-trigger]").forEach(trigger => {
          trigger.addEventListener("click", () => {
            const index = parseInt(trigger.dataset.lightboxTrigger, 10);
            state.activeLightbox.open(index);
          });
        });
      } catch (e) {
        console.error("Failed to parse lightbox images:", e);
      }
    }
  }

  /**
   * NEW: Initializes KPI count-up animations.
   * @param {HTMLElement} container - The .project-detail element.
   */
  function initKpiAnimations(container) {
    const kpiCards = container.querySelectorAll(".kpi-value-container[data-target]");
    if (kpiCards.length === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // If no motion, just set the final value
      kpiCards.forEach(card => {
        const valueEl = card.querySelector(".kpi-value");
        valueEl.textContent = card.dataset.target;
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const valueEl = card.querySelector(".kpi-value");
          const target = parseFloat(card.dataset.target);
          if (isNaN(target)) return;
          
          animateCountUp(valueEl, target);
          observer.unobserve(card); // Only animate once
        }
      });
    }, { threshold: 0.8 });

    kpiCards.forEach(card => observer.observe(card));
  }

  /**
   * NEW: Helper for count-up animation.
   * @param {HTMLElement} el - The .kpi-value element.
   * @param {number} target - The final number.
   */
  function animateCountUp(el, target) {
    const duration = 1500; // 1.5 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const increment = target / totalFrames;
    let current = 0;
    
    // Check if target has decimals
    const decimals = (target.toString().split('.')[1] || '').length;

    const update = () => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      } else {
        el.textContent = current.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  }

  /**
   * MODIFIED: Initializes tab interactions with ARIA.
   * @param {HTMLElement} container - The .project-detail element.
   */
  function initTabInteractions(container) {
    const tablist = container.querySelector(".details-tabs");
    if (!tablist) return;
    
    const tabs = Array.from(tablist.querySelectorAll(".tab-btn"));
    const panels = Array.from(container.querySelectorAll(".tab-content"));

    const setActive = (tab) => {
      tabs.forEach((button) => {
        const isActive = button.dataset.tab === tab.dataset.tab;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive);
      });
      panels.forEach((panel) => {
        const isActive = panel.dataset.tabPanel === tab.dataset.tab;
        panel.classList.toggle("active", isActive);
      });
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => setActive(e.currentTarget));
      tab.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(e.currentTarget);
        }
      });
    });
  }

  function mountProjectInteractions() {
    const container = document.getElementById("project-tiles");
    if (!container) return;
    container.addEventListener("click", (event) => {
      const tile = event.target.closest(".project-tile");
      if (!tile) return;
      const projectId = tile.getAttribute("data-project-id");
      if (!projectId || projectId === state.activeId) return;
      state.activeId = projectId;
      renderProjectTiles();
      renderProjectDetail();
    });
  }

  function updateYear() {
    const year = document.getElementById("copyright-year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
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
      panel.querySelector("a")?.focus();
    };

    const closeMenu = () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      panel.setAttribute("aria-hidden", "true");
      toggle.focus();
    };

    toggle.addEventListener("click", () => document.body.classList.contains("menu-open") ? closeMenu() : openMenu());
    closeButtons.forEach((button) => button.addEventListener("click", closeMenu));
    backdrop?.addEventListener("click", closeMenu);
    panel.addEventListener("click", (event) => event.target.matches("a") && closeMenu());
    document.addEventListener("keydown", (event) => event.key === "Escape" && document.body.classList.contains("menu-open") && closeMenu());
  }

  function setupPointerGlow() {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    const glow = document.getElementById('pointer-glow');
    if (!glow) return;

    document.addEventListener('mousemove', (e) => {
      window.requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }, { passive: true });
  }

  function attachRevealObserver() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible", "is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
  }
  
  // --- Main Initialization ---

  function init() {
    // Note: applyLocalImages() is not needed as we use asset()
    attachRevealObserver();
    renderProjectTiles();
    renderProjectDetail(); // This now kicks off all other project-specific JS
    mountProjectInteractions();
    renderTestimonials();
    updateYear();
    setupMenuToggle();
    setupPointerGlow();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
