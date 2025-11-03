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
      industry: "Streaming · Media",
      hook:
        "A strategic research initiative to unify discovery across Sling and DISH, turning friction into a growth lever.",
      summary:
        "Unified Sling TV and DISH TV discovery into one adaptive experience using multi-surface research.",
      outcome: "~$7.46M Estimated Annual Impact",
      tags: ["Strategic Research", "Data-Driven Insights", "Business Impact"],
      heroImage: "public/images/guide/guide-03.png",
      heroAlt: "Unified TV guide concept across multiple devices",
      content: {
        metrics: [
          { value: "~$7.46M", label: "Estimated Annual Value Impact" },
          { value: "90%", label: "Target Task Success Rate" },
          { value: "12%", label: "Reduction in CX Complaints" },
        ],
        overview: `<div class="text-left space-y-6"><div><h5 class="font-semibold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">The guide sits at the heart of content discovery, but had evolved in parallel across Sling TV and Dish TV, creating fragmented experiences.</p></div><div><h5 class="font-semibold text-gray-800 text-lg">The Challenge</h5><p class="text-gray-700 mt-1">How can we unify the guide experience to enhance usability and personalization without alienating loyal users on two very different platforms?</p></div><div><h5 class="font-semibold text-gray-800 text-lg">Key Objectives</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li>Identify user frustrations and unmet needs across both platforms.</li><li>Uncover shared pain points to guide a unified design strategy.</li><li>Deliver actionable recommendations that balance user needs and business goals.</li></ul></div></div>`,
        methodology: `<h4>Research Process &amp; Tools</h4><div class="methodology-container mt-6"> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">1. Discovery &amp; Planning</h5> <p class="text-sm text-gray-700">Stakeholder interviews, data analysis, and defining project scope.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserZoom</span><span class="tag-badge">Google Analytics</span><span class="tag-badge">JIRA</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">2. Generative Research</h5> <p class="text-sm text-gray-700">In-depth user interviews to uncover behaviors and motivations.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">Lookback</span><span class="tag-badge">Google Meet</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">3. Synthesis &amp; Ideation</h5> <p class="text-sm text-gray-700">Mapping insights and collaborating with design and product teams.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Miro</span><span class="tag-badge">Figma</span></div> </div> <div class="methodology-item"> <h5 style="color:var(--accent-pink-dark);">4. Validation &amp; Delivery</h5> <p class="text-sm text-gray-700">Usability testing and handoff to engineering teams.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">UserTesting.com</span><span class="tag-badge">Figma Prototypes</span><span class="tag-badge">Confluence</span></div> </div> </div>`,
        analysis: `<h4>Target Audience &amp; Segments</h4><div class="flex flex-col md:flex-row gap-4 mt-4 text-left"><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-semibold text-gray-800">DISH TV Subscribers (65+)</h5><p class="text-sm text-gray-600">Tolerate outdated UI but struggle with hidden features; often have accessibility needs.</p></div><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-semibold text-gray-800">Sling TV Subscribers (~35)</h5><p class="text-sm text-gray-600">Tech-savvy, expect fast, intuitive interfaces and quick content access.</p></div></div><h4 class="mt-8">Key Quantitative Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-gray-700 text-left"><div class="insight-card"><h5 class="font-semibold text-gray-800">1. High Engagement, Low Conversion</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li><b>Sling TV:</b> 79% engagement → 56% playback</li><li><b>DISH TV:</b> 86% engagement → 48% playback</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Strong adoption, but poor discoverability leads to drop-offs.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">2. Underutilized Features</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>73% of sessions used the default "ALL" filter.</li><li>"Favorites" users had a 64% playback rate vs. 55% for others.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Personalization improves engagement but is underused.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">3. High Drop-Offs in Short Sessions</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>44% of Sling guide sessions ended without playback.</li><li>Most of these non-playback sessions lasted &lt;20 seconds.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users abandon quickly, suggesting poor content surfacing.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">4. Habitual Navigation (DISH)</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>46% of users navigated vertically by habit.</li><li>Only 8% used faster horizontal navigation by time.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users may not be aware of more efficient navigation options.</p></div></div>`,
        results: `<p class="text-center text-lg text-gray-700">The research insights directly led to iterative design improvements, validating each solution through rigorous testing to ensure it met user needs and business goals.</p><h4 class="mt-8">Financial Impact</h4><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-gray-700"><div class="stat-card"><div class="stat-number">~$5.83M</div><div class="stat-description">from Increased Retention</div></div><div class="stat-card"><div class="stat-number">~$1.94M</div><div class="stat-description">from Feature Upsells</div></div><div class="stat-card"><div class="stat-number">~$193k</div><div class="stat-description">from Ad Revenue</div></div><div class="stat-card"><div class="stat-number">~$63k</div><div class="stat-description">from Ops Savings</div></div></div>`,
        media: `<h4>Media Assets</h4><div id="guide-media-grid" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"></div><p class="mt-4 text-sm text-center text-gray-500">Key visuals, user flows, and prototypes from the project.</p>`,
      },
      gallery: [],
      galleryManifest: true,
    },
    {
      id: "gundersen",
      title: "Gundersen Health Virtual Care OS",
      industry: "Healthcare · SaaS",
      hook:
        "Streamlining prescription refills by empowering patients and reducing manual work for pharmacy teams.",
      summary:
        "Reimagined intake and triage flows for clinicians and patients inside a unified virtual care operating system.",
      outcome: "12,334+ active users in the first six months",
      tags: ["Workflow Analysis", "Adoption Strategy", "Usability Testing"],
      heroImage:
        "https://images.unsplash.com/photo-1588720490792-26f5053ae81e?auto=format&fit=crop&w=1600&q=80",
      heroAlt: "Clinician fulfilling prescriptions in a modern pharmacy",
      content: {
        metrics: [
          { value: "12,334+", label: "Active App Users" },
          { value: "36%", label: "Refills via App" },
          { value: "$702k+", label: "Annual Labor Savings" },
        ],
        overview: `<div class="text-left space-y-6"><div><h5 class="font-semibold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">The pharmacy app was designed to simplify and modernize the prescription refill experience, reducing repetitive phone work and empowering patients with self-service options.</p></div><div><h5 class="font-semibold text-gray-800 text-lg">Research Goals</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li><b>Boost adoption:</b> Reach 10,000+ active app users within six months.</li><li><b>Drive prescription orders:</b> Convert 25% of monthly refills through the app.</li><li><b>Automate communications:</b> Deliver refill reminders and status messages without adding manual effort.</li><li><b>Reduce staff burden:</b> Cut pharmacist time on refill calls by half.</li></ul></div></div>`,
        methodology: `<div class="space-y-6 text-gray-700"><p class="text-sm">We blended qualitative and quantitative methods to understand patient expectations and staff workflow constraints.</p><h4 class="font-semibold text-gray-800 text-lg">Manual Workflow Snapshot</h4><p class="text-sm">Pharmacists spent an average of 3.5 minutes per refill, totaling more than 2,600 hours each month—an immense opportunity for automation.</p><div class="methodology-container mt-4"><div class="methodology-item"><h5 style="color:var(--accent-pink-dark);">1. Workflow &amp; Stakeholder Analysis</h5><p class="text-sm text-gray-700">Interviews with pharmacists, RNs, and MAs surfaced bottlenecks in the manual process.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Stakeholder Interviews</span><span class="tag-badge">Process Mapping</span></div></div><div class="methodology-item"><h5 style="color:var(--accent-pink-dark);">2. Usability &amp; Heuristic Review</h5><p class="text-sm text-gray-700">Tested the existing app with patients and staff to pinpoint friction and quick wins.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Heuristic Analysis</span><span class="tag-badge">Usability Testing</span></div></div><div class="methodology-item"><h5 style="color:var(--accent-pink-dark);">3. Discovery &amp; Synthesis</h5><p class="text-sm text-gray-700">Discovered low awareness of the app, shifting the strategy from UX tweaks to a coordinated rollout plan.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Patient Interviews</span><span class="tag-badge">Journey Mapping</span></div></div></div></div>`,
        analysis: `<div class="space-y-8"><div><h4 class="font-semibold text-gray-800 text-lg">Key Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card"><h5 class="font-semibold text-gray-800">Minimalist UI, High Usability</h5><p class="text-sm text-gray-700">Task success rates averaged 95%. The app solved core needs, but awareness remained the blocker.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Awareness Gap</h5><p class="text-sm text-gray-700">Many patients simply didn’t know the app existed, prompting a shift toward education and outreach.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Low Emotional Engagement</h5><p class="text-sm text-gray-700">A SUS score of 78 signaled solid usability, yet patients described the experience as purely functional.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Automation Opportunity</h5><p class="text-sm text-gray-700">Automated reminders and status messages were missing, keeping staff tethered to manual callbacks.</p></div></div></div></div>`,
        results: `<div class="space-y-8 text-gray-700"><p class="text-center text-lg">A coordinated awareness and training campaign drove rapid adoption while freeing staff time for higher-value care.</p><h4 class="font-semibold text-gray-800 text-lg">Outcomes</h4><div class="grid md:grid-cols-3 gap-4 mt-4"><div class="stat-card"><div class="stat-number">12,334+</div><div class="stat-description">Active users in six months</div></div><div class="stat-card"><div class="stat-number">16,476</div><div class="stat-description">Monthly refills via the app</div></div><div class="stat-card"><div class="stat-number">$702k+</div><div class="stat-description">Annual labor savings</div></div></div><p class="text-center text-sm text-gray-600">Adoption exceeded targets by reframing the launch as a patient education moment, not just a feature release.</p></div>`,
        media: `<h4>Media Assets</h4><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"><img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/fdf9f5/756f6a?text=Awareness+Campaign+Flyer" alt="Awareness campaign flyer mockup"><img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/fdf9f5/756f6a?text=App+Screenshots" alt="Prescription refill app screens"></div><p class="mt-4 text-sm text-center text-gray-500">Campaign creative and primary user flows that unlocked adoption.</p>`,
      },
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
    },
    {
      id: "live-rooms",
      title: "Live Rooms Interactive Watch Parties",
      industry: "Streaming · Social",
      hook:
        "Validating a social co-watching concept before heavy investment in real-time infrastructure.",
      summary:
        "Launched a co-watching and commerce layer that extends live broadcasts into interactive communities.",
      outcome: "18% lift in session length across pilot cohorts",
      tags: ["Concept Testing", "Behavioral Research", "Engagement Strategy"],
      heroImage:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
      heroAlt: "Friends enjoying a live streaming session together",
      content: {
        metrics: [
          { value: "87%", label: "Liked interactive features" },
          { value: "76%", label: "Preferred second screen" },
          { value: "56%", label: "Loved emoji reactions" },
          { value: "41%", label: "Enjoyed live quizzes" },
        ],
        overview: `<div class="text-left text-sm space-y-6"><div><h5 class="font-semibold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">Live Rooms explored how chat, reactions, and interactive moments could make live TV more communal.</p></div><div><h5 class="font-semibold text-gray-800 text-lg">Research Goals</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li>Gauge whether real-time interaction enhances emotional investment.</li><li>Understand tolerance for overlays and chat without disrupting viewing.</li><li>Map cross-platform behavior between large screens and companion devices.</li></ul></div></div>`,
        methodology: `<h4>Research Process</h4><div class="methodology-container mt-6"><div class="methodology-item"><h5 style="color:var(--accent-pink-dark);">1. Concept Testing</h5><p class="text-sm text-gray-700">Eight interviews spanning power streamers and casual viewers helped define the baseline appetite.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">UserZoom</span><span class="tag-badge">InVision</span></div></div><div class="methodology-item"><h5 style="color:var(--accent-pink-dark);">2. Live Pilot · Sports</h5><p class="text-sm text-gray-700">79 NBA fans tested synchronized chat, reactions, and trivia while we instrumented telemetry.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">LiveLike</span><span class="tag-badge">UserZoom</span></div></div><div class="methodology-item"><h5 style="color:var(--accent-pink-dark);">3. Live Pilot · Reality TV</h5><p class="text-sm text-gray-700">35 reality TV fans stress-tested moderation tools and asynchronous prompts.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">LiveLike</span><span class="tag-badge">UserZoom</span></div></div></div>`,
        analysis: `<div class="space-y-8"><div><h4 class="font-semibold text-gray-800 text-lg">Concept Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card"><h5 class="font-semibold text-gray-800">Interest in Social Layers</h5><p class="text-sm text-gray-700">Fans were intrigued by real-time reactions, but demanded controls to avoid chaos.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Second-Screen Rituals</h5><p class="text-sm text-gray-700">Viewers naturally grabbed phones for chat; large screens stayed focused on content.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Feature Priorities</h5><p class="text-sm text-gray-700">Reactions and polls scored higher than mini-games, guiding the MVP scope.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Moderation Needs</h5><p class="text-sm text-gray-700">Fans wanted granular control: mute chat, limit reactions, and spotlight top comments.</p></div></div></div><div><h4 class="font-semibold text-gray-800 text-lg">Live Testing Signals</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card"><h5 class="font-semibold text-gray-800">Control is Non-Negotiable</h5><p class="text-sm text-gray-700">87% liked interactive features but insisted on toggles and pacing.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Second Screen Wins</h5><p class="text-sm text-gray-700">76% preferred interacting on mobile while watching on TV, informing design priorities.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Playful Moments Matter</h5><p class="text-sm text-gray-700">Emoji reactions (56%) and quizzes (41%) boosted enjoyment and retention.</p></div><div class="insight-card"><h5 class="font-semibold text-gray-800">Tailor by Genre</h5><p class="text-sm text-gray-700">Sports fans embraced fast chat; reality TV fans leaned on polls and highlight reels.</p></div></div></div></div>`,
        results: `<div class="space-y-8 text-gray-700"><p class="text-center text-lg">Pilots proved the experience lifted engagement and clarified the go/no-go decision for engineering investment.</p><h4 class="font-semibold text-gray-800 text-lg">Business Signals</h4><div class="grid md:grid-cols-3 gap-4 mt-4 text-sm text-gray-700"><div class="panel p-4"><h5 class="font-semibold text-gray-800 text-base text-center">Jersey Shore Family Vacation</h5><ul class="list-none space-y-1.5"><li class="flex justify-between"><span class="text-gray-600">Unique Viewers</span><span class="font-semibold text-gray-800">13,668</span></li><li class="flex justify-between"><span class="text-gray-600">View Time (hrs)</span><span class="font-semibold text-gray-800">43,017</span></li><li class="flex justify-between"><span class="text-gray-600">Hrs per User</span><span class="font-semibold text-gray-800">3.1</span></li></ul></div><div class="panel p-4"><h5 class="font-semibold text-gray-800 text-base text-center">BET Awards</h5><ul class="list-none space-y-1.5"><li class="flex justify-between"><span class="text-gray-600">Unique Viewers</span><span class="font-semibold text-gray-800">14,889</span></li><li class="flex justify-between"><span class="text-gray-600">View Time (hrs)</span><span class="font-semibold text-gray-800">33,054</span></li><li class="flex justify-between"><span class="text-gray-600">Hrs per User</span><span class="font-semibold text-gray-800">2.2</span></li></ul></div><div class="panel p-4"><h5 class="font-semibold text-gray-800 text-base text-center">The Chi</h5><ul class="list-none space-y-1.5"><li class="flex justify-between"><span class="text-gray-600">Unique Viewers</span><span class="font-semibold text-gray-800">12,097</span></li><li class="flex justify-between"><span class="text-gray-600">View Time (hrs)</span><span class="font-semibold text-gray-800">38,207</span></li><li class="flex justify-between"><span class="text-gray-600">Hrs per User</span><span class="font-semibold text-gray-800">3.2</span></li></ul></div></div><p class="text-center text-sm text-gray-600">Interactive pilots delivered confident signals on monetization pathways and engagement ROI.</p></div>`,
        media: `<h4>Media Assets</h4><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"><img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/fdf9f5/756f6a?text=Pilot+Highlights" alt="Live pilot highlight reel"><img class="project-image rounded-lg w-full h-full object-cover" src="https://placehold.co/800x450/fdf9f5/756f6a?text=Interface+Explorations" alt="Interface explorations for Live Rooms"></div><p class="mt-4 text-sm text-center text-gray-500">Artifacts from concept testing through live pilots.</p>`,
      },
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
    activeIndex: 0,
    detailCollapsed: false,
    guideMediaSlides: null,
    elements: {},
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
  function buildProjectRail() {
    const list = document.getElementById("project-list");
    const container = document.getElementById("project-list-container");
    const detail = document.getElementById("project-detail");
    const prevBtn = document.getElementById("project-prev");
    const nextBtn = document.getElementById("project-next");

    if (!list || !container || !detail) return;

    state.elements = { list, container, detail, prevBtn, nextBtn };

    list.innerHTML = projects
      .map((project, index) => createProjectCard(project, index))
      .join("");

    list.addEventListener("click", handleProjectClick);
    prevBtn?.addEventListener("click", () => shiftProject(-1));
    nextBtn?.addEventListener("click", () => shiftProject(1));

    setActiveProject(state.activeIndex, { focus: false, animate: false });
    window.addEventListener("resize", () => updateRailTransform(false));
  }

  function createProjectCard(project, index) {
    const background = asset(
      project.heroImage || project.gallery?.[0]?.src || "public/images/guide/guide-01.png",
    );
    const tags = (project.tags || [])
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
    const isActive = index === state.activeIndex && !state.detailCollapsed;

    return `
      <button
        type="button"
        class="project-card${isActive ? " is-active" : ""}"
        data-project-index="${index}"
        style="background-image: url('${background}')"
        aria-pressed="${isActive}"
      >
        <span class="sr-only">View ${escapeHtml(project.title)} case study</span>
        <div class="project-card__body">
          <h4 class="project-card__title">${escapeHtml(project.title)}</h4>
          <p class="project-card__summary">${escapeHtml(project.hook || project.summary)}</p>
          <p class="project-card__outcome">${escapeHtml(project.outcome || "")}</p>
          ${tags ? `<div class="project-card__tags">${tags}</div>` : ""}
        </div>
      </button>
    `;
  }
  function handleProjectClick(event) {
    const button = event.target.closest("[data-project-index]");
    if (!button) return;
    const index = Number.parseInt(button.getAttribute("data-project-index"), 10);
    if (Number.isNaN(index)) return;

    if (state.activeIndex === index && !state.detailCollapsed) {
      collapseDetail();
    } else {
      setActiveProject(index);
    }
  }

  function shiftProject(delta) {
    const nextIndex = state.activeIndex + delta;
    if (nextIndex < 0 || nextIndex >= projects.length) return;
    setActiveProject(nextIndex);
  }

  function setActiveProject(index, options = {}) {
    const { focus = true, animate = true } = options;
    if (!projects.length) return;
    const boundedIndex = Math.max(0, Math.min(projects.length - 1, index));
    state.activeIndex = boundedIndex;
    state.detailCollapsed = false;

    const { list, prevBtn, nextBtn } = state.elements;
    if (!list) return;

    list.querySelectorAll(".project-card").forEach((card) => {
      card.classList.remove("is-active");
      card.setAttribute("aria-pressed", "false");
    });

    const activeCard = list.querySelector(
      `[data-project-index="${boundedIndex}"]`,
    );

    if (activeCard) {
      activeCard.classList.add("is-active");
      activeCard.setAttribute("aria-pressed", "true");
      if (focus) {
        activeCard.focus({ preventScroll: true });
      }
    }

    renderProjectDetail(projects[boundedIndex]);
    updateRailTransform(animate);

    if (prevBtn) prevBtn.disabled = boundedIndex === 0;
    if (nextBtn) nextBtn.disabled = boundedIndex === projects.length - 1;
  }
  function updateRailTransform(animate = true) {
    const { list, container } = state.elements;
    if (!list || !container) return;
    const active = list.querySelector(".project-card.is-active") || list.firstElementChild;
    if (!active) return;

    const applyTransform = () => {
      container.style.height = `${active.offsetHeight}px`;
      list.style.transform = `translateY(${-active.offsetTop}px)`;
    };

    if (!animate) {
      const previousTransition = list.style.transition;
      list.style.transition = "none";
      applyTransform();
      requestAnimationFrame(() => {
        list.style.transition = previousTransition || "";
      });
    } else {
      applyTransform();
    }
  }

  function collapseDetail() {
    const { detail } = state.elements;
    if (!detail) return;
    detail.innerHTML =
      '<p class="project-detail__placeholder">Select a project to explore the full story.</p>';
    detail.classList.remove("is-visible");
    state.detailCollapsed = true;
  }

  function renderProjectDetail(project) {
    const { detail } = state.elements;
    if (!detail) return;
    if (!project) {
      collapseDetail();
      return;
    }

    detail.innerHTML = createDetailMarkup(project);
    detail.classList.add("is-visible");
    activateDetailTabs(detail);
    hydrateMediaTab(project, detail);

    const closeBtn = detail.querySelector("[data-close-detail]");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => collapseDetail());
    }
  }
  function createDetailMarkup(project) {
    const tags = (project.tags || [])
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
    const panel = buildDetailPanel(project);

    return `
      <div class="project-detail__header">
        <span class="project-detail__eyebrow">${escapeHtml(project.industry || "Case Study")}</span>
        <h3 class="project-detail__title">${escapeHtml(project.title)}</h3>
        ${project.summary ? `<p class="project-detail__summary">${escapeHtml(project.summary)}</p>` : ""}
        ${project.outcome ? `<p class="project-detail__outcome">${escapeHtml(project.outcome)}</p>` : ""}
        ${tags ? `<div class="project-card__tags">${tags}</div>` : ""}
      </div>
      ${panel}
      <div class="project-detail__footer">
        <button type="button" class="project-detail__close" data-close-detail>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12l5-5 5 5" />
          </svg>
          Collapse details
        </button>
      </div>
    `;
  }

  function buildDetailPanel(project) {
    const content = project.content || {};
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

    const tabOrder = ["overview", "methodology", "analysis", "results", "media"];
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
      <div class="detail-panel" data-detail-tabs>
        ${metricMarkup ? `<div class="detail-metrics">${metricMarkup}</div>` : ""}
        ${
          buttons
            ? `<div class="detail-tabs" role="tablist" aria-label="${escapeHtml(
                project.title,
              )} details">${buttons}</div>`
            : ""
        }
        <div class="detail-content">${panels}</div>
      </div>
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

  function hydrateMediaTab(project, detailRoot) {
    if (!project?.content?.media) return;
    const grid = detailRoot.querySelector("#guide-media-grid");
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
      if (
        event.key === "Escape" &&
        document.body.classList.contains("menu-open")
      ) {
        closeMenu();
      }
    });
  }
  async function loadGuideGallery(project) {
    try {
      const response = await fetch(asset("guide-manifest.json"), {
        cache: "no-cache",
      });
      if (!response.ok)
        throw new Error(`Unable to load guide-manifest.json (${response.status})`);
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
        state.guideMediaSlides = slides;
        if (projects[state.activeIndex]?.id === project.id && !state.detailCollapsed) {
          renderProjectDetail(projects[state.activeIndex]);
        }
      }
    } catch (error) {
      console.warn("Unable to hydrate guide media", error);
    }
  }

  function resolveGuideImage(rawSrc) {
    const decoded = decodeURIComponent(rawSrc || "").trim();
    const fileName = decoded.split(/[\\/]/).pop() || "";
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
    [normalized, dashed]
      .filter((value) => Boolean(value))
      .forEach((variant) => {
        [".png", ".PNG", ".jpg", ".JPG", ".jpeg", ".JPEG", defaultExt].forEach((ext) => {
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
  function init() {
    applyLocalImages();
    attachRevealObserver();
    buildProjectRail();
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
