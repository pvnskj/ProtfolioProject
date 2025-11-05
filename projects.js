(() => {
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
              src: "https://images.unsplash.com/photo-1512427691650-1e0c0a1db8f1?auto=format&fit=crop&w=1600&q=80",
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

  const state = {
    activeId: projects[0]?.id ?? null,
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
    return String(value ?? "")
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
            entry.target.classList.add("visible", "is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    elements.forEach((el) => observer.observe(el));
  }

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
            "",
        );
        const imageAlt = project.tileImageAlt || project.heroAlt || project.title;
        return `
          <button type="button" class="project-tile${
            isActive ? " active" : ""
          }" data-project-id="${project.id}">
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.background)}</p>
            <p class="project-outcome"><strong>Results</strong> ${escapeHtml(
              project.outcome,
            )}</p>
            ${
              imageSrc
                ? `<figure><img src="${imageSrc}" alt="${escapeHtml(
                    imageAlt,
                  )}" loading="lazy" /></figure>`
                : ""
            }
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

    const metricsMarkup = (project.content?.metrics || [])
      .map(
        (metric) => `
          <div class="metric-card">
            <div class="metric-card-value">${escapeHtml(metric.value)}</div>
            <div class="metric-card-label">${escapeHtml(metric.label)}</div>
          </div>
        `,
      )
      .join("");

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
          <button type="button" data-tab="${section.key}"${
          index === 0 ? " class=\"active\"" : ""
        }>${section.label}</button>
        `,
      )
      .join("");

    const tabPanels = sections
      .map((section, index) => {
        const html =
          section.key === "media"
            ? renderMediaSection(project.content?.media)
            : project.content?.[section.key];
        return `
          <div class="tab-content${index === 0 ? " active" : ""}" data-tab-panel="${
            section.key
          }">${html ?? ""}</div>
        `;
      })
      .join("");

    container.innerHTML = `
      <header>
        <span class="section-eyebrow">Case study</span>
        <h3>${escapeHtml(project.title)}</h3>
        ${project.summary ? `<p>${escapeHtml(project.summary)}</p>` : ""}
      </header>
      ${metricsMarkup ? `<div class="detail-metrics">${metricsMarkup}</div>` : ""}
      ${
        sections.length
          ? `<div class="details-tabs">${tabButtons}</div><div class="tab-panels">${tabPanels}</div>`
          : ""
      }
    `;

    initTabInteractions(container);
  }

  function renderMediaSection(media) {
    if (!media) {
      return `<div class="detail-copy"><p>Media assets coming soon.</p></div>`;
    }

    const featured = media.featured
      ? `
        <div class="media-featured" style="margin-bottom: 1rem; border-radius: 18px; overflow: hidden; border: 1px solid var(--glass-border); background: #fff;">
          <img src="${asset(media.featured.src)}" alt="${escapeHtml(
          media.featured.alt || "Project media",
        )}" loading="lazy" style="width: 100%; display: block; object-fit: cover;" />
        </div>
      `
      : "";

    let carousel = "";
    if (Array.isArray(media.carousel) && media.carousel.length) {
      const items = media.carousel
        .map(
          (item) => `
            <div class="media-carousel__item">
              <img src="${asset(item.src)}" alt="${escapeHtml(
            item.alt || "Project gallery",
          )}" loading="lazy" />
            </div>
          `,
        )
        .join("");
      // Duplicating items for the CSS marquee animation
      carousel = `
        <div class="media-carousel">
          <div class="media-carousel__track">${items}${items}</div>
        </div>
      `;
    }

    const caption = media.caption
      ? `<p>${escapeHtml(media.caption)}</p>`
      : "";

    return `<div class="detail-copy">${featured}${carousel}${caption}</div>`;
  }

  function initTabInteractions(container) {
    const buttons = Array.from(container.querySelectorAll(".details-tabs button"));
    const panels = Array.from(container.querySelectorAll(".tab-content"));
    if (!buttons.length || !panels.length) return;

    const setActive = (tab) => {
      buttons.forEach((button) => {
        const isActive = button.dataset.tab === tab;
        button.classList.toggle("active", isActive);
      });
      panels.forEach((panel) => {
        const isActive = panel.dataset.tabPanel === tab;
        panel.classList.toggle("active", isActive);
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        setActive(button.dataset.tab);
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
      renderProjectTiles(); // Re-render to update active state
      renderProjectDetail(); // Re-render detail panel
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
    closeButtons.forEach((button) => button.addEventListener("click", closeMenu));
    backdrop?.addEventListener("click", closeMenu);
    panel.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        closeMenu();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
        closeMenu();
      }
    });
  }
  
  /**
   * NEW FUNCTION
   * Sets up the subtle pointer glow effect.
   * Respects prefers-reduced-motion media query.
   */
  function setupPointerGlow() {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      return; // Do not add glow if motion is reduced
    }
    
    const glow = document.getElementById('pointer-glow');
    if (!glow) return;

    document.addEventListener('mousemove', (e) => {
      // Use requestAnimationFrame for performance
      window.requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }, { passive: true });
  }

  function init() {
    applyLocalImages();
    attachRevealObserver();
    renderProjectTiles();
    renderProjectDetail();
    mountProjectInteractions();
    renderTestimonials();
    updateYear();
    setupMenuToggle();
    setupPointerGlow(); // ADDED: Initialize the new effect
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
