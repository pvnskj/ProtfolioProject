// projects.js — defines projects data and renders Portfolio (list + details)
// Readability upgrades: tighter typography, responsive spacing, non-blocky text, full Results content for all projects.

(function () {
  // ---- Minimal styles to improve readability & fit ----
  const style = document.createElement('style');
  style.innerHTML = `
    .panel{background:rgba(255,255,255,.6);backdrop-filter:saturate(120%) blur(2px);border-radius:1rem;border:1px solid rgba(0,0,0,.08)}
    @media (prefers-color-scheme: dark){.panel{background:rgba(17,24,39,.6);border-color:rgba(255,255,255,.1)}}
    .project-details-content{max-width:1100px;margin-inline:auto}
    .project-details-content .tab-content{font-size:0.95rem;line-height:1.7;color:#374151}
    @media (prefers-color-scheme: dark){.project-details-content .tab-content{color:#e5e7eb}}
    .project-details-content h4{font-weight:800;font-size:1.125rem;margin-top:.5rem}
    .project-details-content h5{font-weight:700;margin-top:.75rem;margin-bottom:.25rem}
    .project-details-content p,.project-details-content li{margin-top:.35rem;margin-bottom:.35rem;word-break:break-word;hyphens:auto}
    .project-details-content ul{padding-left:1.1rem}
    .metric-card{display:flex;flex-direction:column;gap:.125rem;align-items:center;justify-content:center;padding:.75rem;border-radius:.75rem;background:rgba(255,255,255,.7);border:1px solid rgba(0,0,0,.06)}
    @media (prefers-color-scheme: dark){.metric-card{background:rgba(31,41,55,.6);border-color:rgba(255,255,255,.08)}}
    .metric-card-value{font-weight:800;font-size:1.05rem}
    .metric-card-label{font-size:.7rem;opacity:.9;text-align:center}
    .details-tabs button{border:1px solid rgba(0,0,0,.08);background:rgba(255,255,255,.7);border-radius:.5rem}
    @media (prefers-color-scheme: dark){.details-tabs button{border-color:rgba(255,255,255,.1);background:rgba(31,41,55,.6);color:#e5e7eb}}
    .details-tabs button.active{outline:2px solid var(--accent-pink, #ec4899);font-weight:800}
    .tab-content{display:none}
    .tab-content.active{display:block}
    .insight-card{border:1px solid rgba(0,0,0,.08);border-radius:.75rem;padding:1rem;background:rgba(255,255,255,.7)}
    @media (prefers-color-scheme: dark){.insight-card{background:rgba(31,41,55,.6);border-color:rgba(255,255,255,.1)}}
    .stat-card{border:1px solid rgba(0,0,0,.08);border-radius:.75rem;padding:1rem;background:rgba(255,255,255,.7);text-align:center}
    @media (prefers-color-scheme: dark){.stat-card{background:rgba(31,41,55,.6);border-color:rgba(255,255,255,.1)}}
    .stat-number{font-weight:900;font-size:1.1rem}
    .stat-description{font-size:.8rem;opacity:.9}
    .project-image{aspect-ratio:16/9;object-fit:cover}
    .methodology-container{display:grid;grid-template-columns:1fr;gap:1rem}
    @media (min-width:768px){.methodology-container{grid-template-columns:repeat(2,1fr)}}
    .methodology-item{border:1px solid rgba(0,0,0,.08);border-radius:.75rem;padding:1rem;background:rgba(255,255,255,.7)}
    @media (prefers-color-scheme: dark){.methodology-item{background:rgba(31,41,55,.6);border-color:rgba(255,255,255,.1)}}
    .tag-badge{display:inline-block;font-size:.7rem;padding:.25rem .5rem;border-radius:9999px;border:1px solid rgba(0,0,0,.08)}
    @media (prefers-color-scheme: dark){.tag-badge{border-color:rgba(255,255,255,.2)}}
  `;
  document.head.appendChild(style);

  // ---- Project Data (complete, no omissions) ----
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

  // ---- Portfolio Rendering ----
  function renderProjectDetails(project, container) {
    if (!project || !project.content) { container.innerHTML = ''; return; }
    const panel = document.createElement('div');
    panel.className = 'project-details-content panel p-6 md:p-8 text-left';

    const metrics = (project.content.metrics || []).map(m =>
      `<div class="metric-card">
         <div class="metric-card-value">${m.value}</div>
         <div class="metric-card-label">${m.label}</div>
       </div>`).join('');

    const tabs = ['overview','methodology','analysis','results','media'];
    const tabsHtml = tabs.map((t,i)=>`<button data-tab="${t}" class="${i===0?'active':''} py-2 px-4 text-sm font-semibold rounded-md capitalize">${t}</button>`).join('');

    const bodies = Object.entries(project.content).map(([k,v])=>{
      if (k==='metrics') return '';
      const active = k==='overview' ? 'active':'';
      return `<div class="tab-content ${active}" data-tab-content="${k}">
        <div class="max-w-none md:max-w-3xl lg:max-w-4xl leading-relaxed">${v}</div>
      </div>`;
    }).join('');

    panel.innerHTML = `
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">${metrics}</div>
      <div class="details-tabs flex flex-wrap items-center gap-2 border-b mb-6 pb-3">${tabsHtml}</div>
      ${bodies}
    `;
    container.innerHTML = '';
    container.appendChild(panel);

    // tab switching
    panel.querySelector('.details-tabs').addEventListener('click', (e)=>{
      const btn = e.target.closest('button[data-tab]');
      if (!btn) return;
      const tab = btn.getAttribute('data-tab');
      panel.querySelectorAll('.details-tabs button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      panel.querySelectorAll('.tab-content').forEach(tc=>tc.classList.remove('active'));
      const activeBody = panel.querySelector(`.tab-content[data-tab-content="${tab}"]`);
      if (activeBody) activeBody.classList.add('active');
    });
  }

  function renderProjectList(listEl, detailsEl, activeId) {
    let active = window.projects.find(p=>p.id===activeId) || window.projects[0];
    const others = window.projects.filter(p=>p.id!==active.id);

    const highlights = (active.content.metrics||[]).map(m=>`
      <div class="rounded-xl border border-black/10 bg-white/70 p-3 text-center">
        <div class="font-extrabold text-base md:text-lg" style="color:var(--accent-pink, #ec4899)">${m.value}</div>
        <div class="text-[11px] md:text-xs text-gray-600">${m.label}</div>
      </div>`).join('');

    const activeHtml = `
      <div class="panel p-5 md:p-6 border-2" style="border-color:var(--accent-pink, #ec4899)">
        <div class="grid md:grid-cols-3 gap-4 items-center">
          <div class="md:col-span-2">
            <h3 class="text-xl md:text-2xl font-bold">${active.title}</h3>
            <p class="text-gray-700 mt-1 text-sm md:text-base">${active.hook}</p>
            <p class="font-semibold mt-2 text-sm md:text-base" style="color:var(--accent-pink, #ec4899)">${active.outcome}</p>
          </div>
          <img class="rounded-xl w-full h-32 md:h-36 object-cover" src="${active.images[0]}" alt="${active.title}">
        </div>
        <div class="grid grid-cols-3 gap-2 md:gap-3 mt-4">${highlights}</div>
      </div>`;

    const thumbs = others.map(p=>`
      <button class="project-thumbnail panel p-3 md:p-4 w-full text-left flex items-center gap-3 hover:scale-[1.01] transition"
              data-project-id="${p.id}">
        <img class="rounded-lg w-16 md:w-20 h-14 md:h-16 object-cover" src="${p.images[0]}" alt="${p.title}">
        <span class="font-semibold text-gray-800 text-sm md:text-base">${p.title}</span>
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

  // Public init for pages
  window.initPortfolio = function(opts) {
    const list = document.querySelector(opts.listSelector);
    const details = document.querySelector(opts.detailsSelector);
    if (!list || !details) return;
    renderProjectList(list, details, (window.projects[0]||{}).id);
    details.classList.add('visible');
  };
})();
