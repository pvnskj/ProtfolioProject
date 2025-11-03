(() => {
  const repoBase = (() => {
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
