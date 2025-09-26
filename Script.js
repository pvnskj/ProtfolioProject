// --- Data Objects ---
const projects = [
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
            analysis: `<h4>Target Audience & Segments</h4><div class="flex flex-col md:flex-row gap-4 mt-4 text-left"><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-bold text-gray-800">DISH TV Subscribers (65+)</h5><p class="text-sm text-gray-600">Tolerate outdated UI but struggle with hidden features; often have accessibility needs.</p></div><div class="flex-1 p-4 bg-black/5 rounded-lg border border-black/5"><h5 class="font-bold text-gray-800">Sling TV Subscribers (~35)</h5><p class="text-sm text-gray-600">Tech-savvy, expect fast, intuitive interfaces and quick content access.</p></div></div><h4 class="mt-8">Key Quantitative Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-gray-700 text-left"><div class="insight-card"><h5>1. High Engagement, Low Conversion</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li><b>Sling TV:</b> 79% engagement &rarr; 56% playback</li><li><b>DISH TV:</b> 86% engagement &rarr; 48% playback</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Strong adoption, but poor discoverability leads to drop-offs.</p></div><div class="insight-card"><h5>2. Underutilized Features</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>73% of sessions used the default "ALL" filter.</li><li>"Favorites" users had a 64% playback rate vs. 55% for others.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Personalization improves engagement but is underused.</p></div><div class="insight-card"><h5>3. High Drop-Offs in Short Sessions</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>44% of Sling guide sessions ended without playback.</li><li>Most of these non-playback sessions lasted &lt;20 seconds.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users abandon quickly, suggesting poor content surfacing.</p></div><div class="insight-card"><h5>4. Habitual Navigation (DISH)</h5><ul class="text-sm list-disc list-inside my-2 space-y-1"><li>46% of users navigated vertically by habit.</li><li>Only 8% used faster horizontal navigation by time.</li></ul><p class="text-sm" style="color: var(--accent-pink-dark);">🔍 Insight: Users may not be aware of more efficient navigation options.</p></div></div>`, 
            results: `<p class="text-center text-lg">The research insights directly led to iterative design improvements, validating each solution through rigorous testing to ensure it met user needs and business goals.</p><h4 class="mt-8 font-bold text-gray-800">Financial Impact</h4><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 text-gray-700"><div class="stat-card"><div class="stat-number">~$5.83M</div><div class="stat-description">from Increased Retention</div></div><div class="stat-card"><div class="stat-number">~$1.94M</div><div class="stat-description">from Feature Upsells</div></div><div class="stat-card"><div class="stat-number">~$193k</div><div class="stat-description">from Ad Revenue</div></div><div class="stat-card"><div class="stat-number">~$63k</div><div class="stat-description">from Ops Savings</div></div></div>`, 
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
            metrics: [ { value: "12,334+", label: "Active App Users" }, { value: "36%", label: "Refill Volume via App" }, { value: "$702k+", label: "Annual Labor Savings" } ], 
            overview: `<div class="text-left space-y-6"><div><h5 class="font-bold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">The pharmacy app was designed to simplify and modernize the prescription refill experience. It aimed to reduce the repetitive, manual burden on pharmacists and empower patients with self-service medication management.</p></div><div><h5 class="font-bold text-gray-800 text-lg">Research Goals</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li><b>Boost Adoption:</b> Achieve 10,000+ active app users within 6 months.</li><li><b>Drive Prescription Orders:</b> Convert 25% of monthly refills (11,250 orders) through the app.</li><li><b>Automate Communications:</b> Deliver 10,000+ refill reminders & status messages monthly.</li><li><b>Reduce Staff Burden:</b> Decrease pharmacist time spent on refill calls by 50%.</li><li><b>Cost Optimization:</b> Recover up to $1M/year in lost labor time.</li></ul></div></div>`, 
            methodology: `<div class="space-y-6"><p class="text-sm text-gray-700">Our research was a blend of qualitative and quantitative methods to understand both the user experience and the internal workflow challenges.</p><h4 class="font-bold text-gray-800 text-lg mb-2">Manual Workflow </h4><p class="text-sm text-gray-700">The manual process was time-consuming and inefficient. Pharmacists spent an average of 3.5 minutes per refill, totaling over 2,600 hours/month, which translated to significant lost labor time.</p><div class="methodology-container grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"><div class="methodology-item p-4 bg-black/5 rounded-lg"><h5 style="color:var(--accent-pink-dark);">1. Workflow & Stakeholder Analysis</h5><p>Interviews with pharmacists, RNs, and MAs to map the manual refill process.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Stakeholder Interviews</span><span class="tag-badge">Process Mapping</span></div></div><div class="methodology-item p-4 bg-black/5 rounded-lg"><h5 style="color:var(--accent-pink-dark);">2. Usability & Heuristic Evaluation</h5><p>Tested the existing app with both patients and staff to identify pain points and opportunities.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Heuristic Analysis</span><span class="tag-badge">Usability Testing</span></div></div><div class="methodology-item p-4 bg-black/5 rounded-lg"><h5 style="color:var(--accent-pink-dark);">3. Discovery & Synthesis</h5><p>Uncovered a key problem: most patients were unaware the app existed. This shifted our focus from product improvement to a marketing and awareness strategy.</p><div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">Patient Interviews</span><span class="tag-badge">Journey Mapping</span></div></div></div></div>`, 
            analysis: `<div class="space-y-8"><div><h4 class="font-bold text-gray-800 text-lg mb-4">Key Insights from Analysis</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Minimalist UI & High Usability</h5><p class="text-sm text-gray-700">The app's core functionality was clear, allowing users to refill prescriptions with ease. <b>Task success rate was 95%.</b></p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Unexpected Awareness Gap</h5><p class="text-sm text-gray-700">A major finding: many patients were simply <b>unaware the app existed.</b> This shifted our focus from product improvement to a marketing and awareness strategy.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Low Emotional Engagement</h5><p class="text-sm text-gray-700">A SUS Score of 78 indicated solid usability but highlighted a <b>lack of emotional engagement</b> due to the app's basic visual design.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Automated Communications</h5><p class="text-sm text-gray-700">The system lacked features to reduce the repetitive, manual burden on pharmacists and their outbound calls.</p></div></div></div></div>`, 
            results: `<p class="text-center text-lg text-gray-700">Our research led to a strategic awareness campaign that directly addressed the adoption problem and produced significant business impact.</p><h4 class="font-bold text-gray-800 text-lg mt-8">Key Outcomes</h4><div class="overflow-x-auto relative rounded-lg border border-black/10 mt-4"><table class="w-full text-sm text-left text-gray-600"><thead class="text-xs text-gray-800 uppercase bg-black/5"><tr><th scope="col" class="py-3 px-6 text-center">Metric</th><th scope="col" class="py-3 px-6 text-center">Outcome</th><th scope="col" class="py-3 px-6 text-center">Target</th></tr></thead><tbody><tr class="border-b border-black/10"><th scope="row" class="py-4 px-6 font-medium text-gray-800 whitespace-nowrap bg-black/5">Active App Users</th><td class="py-4 px-6 text-center font-bold" style="color: var(--accent-pink);">12,334</td><td class="py-4 px-6 text-center">10,000+</td></tr><tr class="border-b border-black/10"><th scope="row" class="py-4 px-6 font-medium text-gray-800 whitespace-nowrap bg-black/5">Monthly Refills via App</th><td class="py-4 px-6 text-center font-bold" style="color: var(--accent-pink);">16,476</td><td class="py-4 px-6 text-center">11,250</td></tr><tr><th scope="row" class="py-4 px-6 font-medium text-gray-800 whitespace-nowrap bg-black/5">Annual Labor Savings</th><td class="py-4 px-6 text-center font-bold" style="color: var(--accent-pink);">$702,000+</td><td class="py-4 px-6 text-center">$1M</td></tr></tbody></table></div><p class="text-center text-lg mt-8 text-gray-700">By shifting our focus from product development to an awareness campaign, the app's adoption skyrocketed, resulting in significant cost savings and improved patient satisfaction.</p>`, 
            media: `<h4 class="mt-4">Campaign Materials</h4><div class="grid grid-cols-2 gap-4 mt-4"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1557852643-41394a110599?q=80&w=1770&auto=format&fit=crop" alt="Person using a phone for healthcare"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1618225249899-604a5119b78a?q=80&w=1964&auto=format&fit=crop" alt="Mobile application screenshots"></div>` 
        } 
    },
    { 
        id: 'live-rooms', 
        title: "Validating 'Live Rooms'", 
        hook: "A concept for social TV viewing to make live content more engaging. But would people use it?", 
        outcome: "Guided 'Go/No-Go' Decision", 
        images: ["https://images.unsplash.com/photo-1549419143-41c6f39d2c20?q=80&w=2070&auto=format&fit=crop"], 
        content: { 
            metrics: [ { value: "87%", label: "Liked interactive features" }, { value: "76%", label: "Preferred second-screen" }, { value: "56%", label: "Liked emoji reactions" }, { value: "41%", label: "Liked quizzes" } ], 
            overview: `<div class="text-left space-y-6"><div><h5 class="font-bold text-gray-800 text-lg">Background</h5><p class="text-gray-700 mt-1">Live Rooms is a conceptual feature aimed at enhancing real-time TV viewing with interactive social experiences. The idea is to allow users to chat, react with emojis, and participate in live trivia while watching their favorite shows or sport.</p></div><div><h5 class="font-bold text-gray-800 text-lg">Research Goals</h5><ul class="list-disc list-inside pl-4 space-y-2 mt-2 text-gray-700"><li><b>Evaluate whether the Live Rooms concept resonates with users.</b></li><li><b>Understand if real-time interaction can increase emotional investment.</b></li><li><b>Ensure these interactions do not disrupt the core viewing experience.</b></li><li><b>Explore adoption across different platforms (TV vs. mobile).</b></li></ul></div></div>`, 
            methodology: `<h4>My Research Process & Tools</h4> <div class="methodology-container mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="methodology-item p-4 bg-black/5 rounded-lg"> <h5 style="color:var(--accent-pink-dark);">1. Concept Testing</h5> <p>Used prototypes to test the concept with a mix of 8 users with and without experience in interactive streaming.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">User Interviews</span><span class="tag-badge">UserZoom</span><span class="tag-badge">Invision</span></div> </div> <div class="methodology-item p-4 bg-black/5 rounded-lg"> <h5 style="color:var(--accent-pink-dark);">2. Live Product Testing</h5> <p>Ran two live tests (NBA game & Reality TV) with a total of 114 participants to gather real-world feedback.</p> <div class="mt-4 flex flex-wrap gap-2"><span class="tag-badge">LiveLike</span><span class="tag-badge">UserZoom</span></div> </div></div>`, 
            analysis: `<h4 class="mt-4 font-bold text-gray-800">Key Insights</h4><div class="grid md:grid-cols-2 gap-4 mt-4 text-left"><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Control is Key</h5><p class="text-sm text-gray-700"><b>87%</b> of users liked interactive features but wanted control, like turning chat on/off.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Second-Screen Experience</h5><p class="text-sm text-gray-700"><b>76%</b> preferred using their phone to interact while watching on a larger TV screen.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Positive Feedback on Interactivity</h5><p class="text-sm text-gray-700">Emoji reactions (<b>56%</b>) and quizzes (<b>41%</b>) boosted engagement and made the experience more fun.</p></div><div class="insight-card p-4"><h5 class="font-bold text-gray-800 mb-2">Content-Specific Behavior</h5><p class="text-sm text-gray-700">Sports fans preferred fast-paced chat, while reality TV fans engaged more with polls and quizzes related to the show.</p></div></div>`, 
            results: `<div class="space-y-8"><p class="text-center text-lg text-gray-700">The Live Rooms concept was a clear win with high user engagement. The experience proved that interactive features can meaningfully enhance live TV viewing.</p><h4 class="font-bold text-gray-800 text-lg mt-8">Business Impact</h4><div class="grid md:grid-cols-3 gap-4 mt-4 text-gray-700 text-sm"><div class="panel p-4"><h5 class="font-bold text-gray-800 text-base mb-2 text-center">Jersey Shore Family Vacation</h5><ul class="list-none space-y-1.5"><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Unique Viewers:</span><span class="text-gray-800 font-semibold">13,668</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">View Time (Hrs):</span><span class="text-gray-800 font-semibold">43,017</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Hrs per User:</span><span class="text-gray-800 font-semibold">3.1</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Impact:</span><span class="text-gray-800 font-semibold">1,822,664,704</span></li></ul></div><div class="panel p-4"><h5 class="font-bold text-gray-800 text-base mb-2 text-center">BET Awards</h5><ul class="list-none space-y-1.5"><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Unique Viewers:</span><span class="text-gray-800 font-semibold">14,889</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">View Time (Hrs):</span><span class="text-gray-800 font-semibold">33,054</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Hrs per User:</span><span class="text-gray-800 font-semibold">2.2</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Impact:</span><span class="text-gray-800 font-semibold">1,082,710,213</span></li></ul></div><div class="panel p-4"><h5 class="font-bold text-gray-800 text-base mb-2 text-center">The Chi</h5><ul class="list-none space-y-1.5"><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Unique Viewers:</span><span class="text-gray-800 font-semibold">12,097</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">View Time (Hrs):</span><span class="text-gray-800 font-semibold">38,207</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Hrs per User:</span><span class="text-gray-800 font-semibold">3.2</span></li><li class="flex justify-between items-center"><span class="font-medium text-gray-500">Impact:</span><span class="text-gray-800 font-semibold">1,479,008,253</span></li></ul></div></div><p class="text-center text-lg mt-8 text-gray-700">The test set a solid foundation for future innovation. The user enthusiasm and clear engagement signals remain strong indicators of potential, positioning Sling to lead in redefining the live viewing experience when the time is right.</p></div>`, 
            media: `<h4 class="mt-4">Concept Visuals</h4><div class="grid grid-cols-2 gap-4 mt-4"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" alt="Streaming application logos"><img class="rounded-lg w-full h-full object-cover" src="https://images.unsplash.com/photo-1516245834210-c4c1427873ab?q=80&w=1770&auto=format&fit=crop" alt="Sports match on a screen"></div>` 
        } 
    }
];
const testimonials = [ { quote: "I had the privilege of working with Sphoorthy... She helped us gain tremendous consumer insights and improved the velocity and prioritization of our product development roadmap.", author: "Gary S.", company: "Executive Vice President & Group President, Video Services", featured: true }, { quote: "I had the pleasure of working with Sphoorthy at Sling... Her research was always thorough, actionable, and aligned with both user needs and business goals.", author: "AL Shanmugam", company: "Head of Product | AI, Personalization & Platform Growth", featured: true }, { quote: "Sphoorthy was an invaluable asset... As a mentor in the realm of user research, she elevated the team's expertise, instilling greater confidence...", author: "Erik Jonathan Nava", company: "Lead Design System Designer @ AXS", featured: false }, { quote: "Sphoorthy has a GIFT for uncovering what really matters to users. Her research is sharp, actionable, and always grounded in empathy.", author: "Anish Raul", company: "Generative AI & Personalisation Leader", featured: true }, { quote: "Sphoorthy's ability to synthesize complex data into clear, compelling narratives is second to none. Her work was instrumental in shaping our product vision.", author: "Emily K.", company: "Director of Product Management", featured: true }, { quote: "Working with Sphoorthy was a masterclass in user-centricity. She consistently championed the user's voice, leading to features that truly resonated.", author: "Michael B.", company: "Senior Product Designer", featured: false }, { quote: "Sphoorthy is a rare talent who can bridge the gap between user research and business strategy. Her insights are actionable and have a direct impact on our bottom line.", author: "David L.", company: "Product Marketing Manager", featured: false }, { quote: "Sphoorthy's presentation skills are phenomenal. She makes complex research findings easy to understand and exciting for the entire organization.", author: "Jessica M.", company: "Head of Marketing", featured: true } ];

document.addEventListener('DOMContentLoaded', function() {
    // --- WebGL Particle Field ---
    const canvas = document.getElementById('bg-canvas');
    let scene, camera, renderer, particles;
    let mousePosition = new THREE.Vector2(0.5, 0.5);
    let time = 0;
    const vertexShader = ` uniform float uTime; uniform float uHue; uniform vec2 uMouse; uniform float uScreenWidth; attribute float aRandom; attribute float aSize; attribute float aPhase; varying vec3 vColor;
        void main() {
            vec3 p = position; p.x += sin(uTime*0.5*aRandom)*0.5; p.y += cos(uTime*0.5*aRandom)*0.5; p.x += sin(uTime*0.1+aPhase)*0.05; p.y += cos(uTime*0.1+aPhase)*0.05;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            vec2 screenPos = gl_Position.xy / gl_Position.w;
            float dist = distance(screenPos, uMouse);
            float brightnessFactor = smoothstep(0.4, 0.0, dist);
            float hue = uHue; float saturation = 0.7 + brightnessFactor * 0.3; float lightness = 0.65;
            vec3 rgb;
            if (saturation == 0.0) { rgb = vec3(lightness); } else {
                float q = lightness < 0.5 ? lightness * (1.0 + saturation) : lightness + saturation - lightness * saturation;
                float p = 2.0 * lightness - q;
                vec3 t = vec3(hue + 1.0/3.0, hue, hue - 1.0/3.0);
                t.x = fract(t.x); t.y = fract(t.y); t.z = fract(t.z);
                rgb.x = t.x < 1.0/6.0 ? p + (q - p) * 6.0 * t.x : (t.x < 1.0/2.0 ? q : (t.x < 2.0/3.0 ? p + (q - p) * (2.0/3.0 - t.x) * 6.0 : p));
                rgb.y = t.y < 1.0/6.0 ? p + (q - p) * 6.0 * t.y : (t.y < 1.0/2.0 ? q : (t.y < 2.0/3.0 ? p + (q - p) * (2.0/3.0 - t.y) * 6.0 : p));
                rgb.z = t.z < 1.0/6.0 ? p + (q - p) * 6.0 * t.z : (t.z < 1.0/2.0 ? q : (t.z < 2.0/3.0 ? p + (q - p) * (2.0/3.0 - t.z) * 6.0 : p));
            }
            vColor = rgb;
            gl_PointSize = (aSize * 2.0) * (1.0 + brightnessFactor * 3.0) * (uScreenWidth / 1920.0) * (1.0 / -gl_Position.z);
        }`;
    const fragmentShader = ` varying vec3 vColor; void main() { vec2 cxy = 2.0 * gl_PointCoord - 1.0; float r = dot(cxy, cxy); float delta = fwidth(r); float alpha = 1.0 - smoothstep(1.0, 1.0 + delta, r); gl_FragColor = vec4(vColor, alpha * 0.9); }`;
    function initParticles() { scene = new THREE.Scene(); camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); camera.position.z = 50; renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true }); renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(window.devicePixelRatio); const numParticles = 10000; const positions = new Float32Array(numParticles*3), randoms=new Float32Array(numParticles), sizes=new Float32Array(numParticles), phases=new Float32Array(numParticles); for(let i=0;i<numParticles;i++){ positions[i*3]=(Math.random()-.5)*100; positions[i*3+1]=(Math.random()-.5)*100; positions[i*3+2]=(Math.random()-.5)*100; randoms[i]=Math.random(); sizes[i]=Math.random()*1.5+1; phases[i]=Math.random()*Math.PI*2; } const geometry=new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.BufferAttribute(positions,3)); geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms,1)); geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes,1)); geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases,1)); const material=new THREE.ShaderMaterial({uniforms:{uTime:{value:0}, uHue:{value:0}, uMouse:{value:mousePosition}, uScreenWidth:{value:window.innerWidth}}, vertexShader, fragmentShader, transparent:true}); particles = new THREE.Points(geometry, material); scene.add(particles); animateParticles(); }
    function animateParticles() { requestAnimationFrame(animateParticles); time += 0.005; particles.material.uniforms.uTime.value = time; particles.material.uniforms.uHue.value = 0.94 + (Math.sin(time*0.2)*0.04); renderer.render(scene, camera); }
    function onWindowResize() { camera.aspect = window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); particles.material.uniforms.uScreenWidth.value = window.innerWidth; }
    function onMouseMove(event) { mousePosition.x = (event.clientX/window.innerWidth)*2-1; mousePosition.y = -(event.clientY/window.innerHeight)*2+1; }
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
    initParticles();

    // --- General Page Logic ---
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }); }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // --- Reworked Portfolio Logic ---
    const projectListContainer = document.getElementById('project-list-container');
    const projectDetailsContainer = document.getElementById('project-details-expanded');
    let activeProjectId = projects[0].id;

    function renderProjectDetails(project) {
         if (!project || !project.content) { projectDetailsContainer.innerHTML = ''; return; }
         const detailsPanel = document.createElement('div');
         detailsPanel.className = 'project-details-content panel p-8 text-left';
         detailsPanel.innerHTML = `<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">${project.content.metrics.map(metric => `<div class="metric-card"><div class="metric-card-value">${metric.value}</div><div class="metric-card-label">${metric.label}</div></div>`).join('')}</div><div class="details-tabs flex flex-wrap items-center gap-2 border-b mb-6 pb-4">${['overview', 'methodology', 'analysis', 'results', 'media'].map((tab, i) => `<button data-tab="${tab}" class="${i === 0 ? 'active' : ''} py-2 px-4 text-sm font-semibold rounded-md">${tab.charAt(0).toUpperCase() + tab.slice(1)}</button>`).join('')}</div>${Object.entries(project.content).map(([key, value]) => `<div class="tab-content text-gray-700 ${key === 'metrics' ? 'hidden' : (key === 'overview' ? 'active' : '')}" data-tab-content="${key}">${value}</div>`).join('')}`;
         projectDetailsContainer.innerHTML = '';
         projectDetailsContainer.appendChild(detailsPanel);
    }

    function renderProjectList() {
        const activeProject = projects.find(p => p.id === activeProjectId);
        const thumbnailProjects = projects.filter(p => p.id !== activeProjectId);

        let highlightsHtml = activeProject.content.metrics.map(metric => `
            <div class="highlight-card">
                <div class="highlight-card-value">${metric.value}</div>
                <div class="highlight-card-label">${metric.label}</div>
            </div>
        `).join('');

        let activeHtml = `
            <div class="project-active" style="background-image: url(${activeProject.images[0]})">
                <div class="project-active-content">
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">${activeProject.title}</h3>
                    <p class="text-gray-700 text-sm mb-3">${activeProject.hook}</p>
                    <p class="font-bold text-base" style="color:var(--accent-pink-dark);">${activeProject.outcome}</p>
                </div>
                <div class="project-active-highlights">
                    ${highlightsHtml}
                </div>
            </div>`;
        
        let thumbnailsHtml = thumbnailProjects.map(p => `
            <div class="project-thumbnail" data-project-id="${p.id}" tabindex="0">
                <div style="background-image: url(${p.images[0]})" class="absolute inset-0 bg-cover bg-center"></div>
                <h4 class="project-thumbnail-title">${p.title}</h4>
            </div>`).join('');

        projectListContainer.innerHTML = `${activeHtml}<div class="project-thumbnail-list">${thumbnailsHtml}</div>`;
    }
    
    function handleProjectClick(e) {
        const thumbnail = e.target.closest('.project-thumbnail');
        if (!thumbnail) return;
        
        const newId = thumbnail.dataset.projectId;
        if (newId !== activeProjectId) {
            activeProjectId = newId;
            renderProjectList();
            const newActiveProject = projects.find(p => p.id === activeProjectId);
            renderProjectDetails(newActiveProject);
            projectDetailsContainer.classList.add('visible');
        }
    }
    
    projectListContainer.addEventListener('click', handleProjectClick);
    projectListContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleProjectClick(e);
        }
    });

    projectDetailsContainer.addEventListener('click', (e) => {
        if (e.target.matches('.details-tabs button')) {
            const tabId = e.target.dataset.tab;
            const container = e.target.closest('.project-details-content');
            container.querySelectorAll('.details-tabs button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            container.querySelectorAll('.tab-content').forEach(content => {
                content.classList.toggle('active', content.dataset.tabContent === tabId);
            });
        }
    });

    function createTestimonialScroller() {
        const scroller = document.getElementById('testimonial-scroller');
        if (!scroller) return;
        scroller.innerHTML = '';
        const scrollerInner = document.createElement('div');
        scrollerInner.className = 'scroller-inner';
        const testimonialContent = testimonials.map(t => {
            let featuredBadge = t.featured ? `<span class="absolute top-4 right-4 bg-[#D8A0A8] text-white text-xs font-bold px-3 py-1 rounded-full">Leadership</span>` : '';
            return `<div class="testimonial-card panel p-6 flex flex-col justify-center relative text-center h-full">${featuredBadge}<p class="text-base italic text-gray-700">"${t.quote}"</p><p class="font-semibold not-italic text-gray-800 mt-4">- ${t.author}</p><p class="text-sm text-gray-500">${t.company}</p></div>`;
        }).join('');
        scrollerInner.innerHTML = testimonialContent + testimonialContent;
        scroller.appendChild(scrollerInner);
    }

    function initPage() {
        renderProjectList();
        const initialProject = projects.find(p => p.id === activeProjectId);
        renderProjectDetails(initialProject);
        projectDetailsContainer.classList.add('visible');
        createTestimonialScroller();
        document.getElementById('copyright-year').textContent = new Date().getFullYear();
    }

    initPage();
});
</script>
</body>
</html>
