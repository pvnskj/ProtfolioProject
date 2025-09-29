
// theme.js — Futuristic Magnolia theme with cohesive glassmorphism + ambient particles
(function(){
  const MAG_EASE = 'cubic-bezier(0.55, 0.03, 0.29, 0.99)';

  const style = document.createElement('style');
  style.textContent = `
    :root {
      --bg-color:#FFFFFF;
      --text-dark:#3F3634;
      --text-medium:#6B615E;
      --text-light:#9D9290;
      --accent-pink:#E5B7C5;
      --accent-pink-dark:#C78DA0;
      --accent-pink-light:#F6DDE6;
      --accent-lilac:#D7CCF5;
      --accent-cream:#F3E4D8;
      --accent-peach:#FAD2C7;
      --accent-sage:#DDEBE3;
      --panel-border:rgba(255,255,255,0.45);
      --panel-bg:rgba(255,255,255,0.72);
      --panel-glow:0 25px 60px rgba(229,183,197,0.25);
      --panel-glow-strong:0 35px 85px rgba(229,183,197,0.33);
      --halo-glow:0 0 35px rgba(229,183,197,0.45);
      --mag-ease:${MAG_EASE};
    }

    body {
      font-family:'Inter',sans-serif;
      color:var(--text-dark);
      background:radial-gradient(circle at 20% 20%, rgba(229,183,197,0.08), transparent 55%),
                 radial-gradient(circle at 80% 0%, rgba(215,204,245,0.1), transparent 60%),
                 #FFFFFF;
      transition: background 1.2s var(--mag-ease), color 0.8s var(--mag-ease);
    }

    #bg-canvas {
      position:fixed;
      inset:0;
      width:100vw;
      height:100vh;
      z-index:-2;
      display:block;
    }

    .content-container { position:relative; z-index:1; }

    .panel {
      background:var(--panel-bg);
      backdrop-filter:saturate(140%) blur(18px);
      -webkit-backdrop-filter:saturate(140%) blur(18px);
      border-radius:24px;
      border:1px solid var(--panel-border);
      box-shadow:var(--panel-glow);
      transition: transform 0.6s var(--mag-ease), box-shadow 0.6s var(--mag-ease),
                  border-color 0.6s var(--mag-ease), background 0.6s var(--mag-ease);
      position:relative;
      overflow:hidden;
    }
    .panel::after {
      content:"";
      position:absolute;
      inset:0;
      border-radius:inherit;
      pointer-events:none;
      background:linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0));
      opacity:0.75;
      mix-blend-mode:screen;
      transition:opacity 0.6s var(--mag-ease);
    }
    .panel:hover {
      transform:translateY(-8px);
      box-shadow:var(--panel-glow-strong);
    }
    .panel:hover::after { opacity:1; }

    .reveal { opacity:0; transform:translateY(60px); transition: opacity 0.9s var(--mag-ease), transform 0.9s var(--mag-ease); }
    .reveal.visible { opacity:1; transform:translateY(0); }

    .mag-heading {
      display:inline-block;
      background:linear-gradient(120deg, #FAD2C7, #F6DDE6, #D7CCF5);
      background-size:200% 200%;
      -webkit-background-clip:text;
      background-clip:text;
      color:transparent;
      filter:drop-shadow(0 0 18px rgba(236,184,197,0.18));
      transition: background-position 1.2s var(--mag-ease), filter 0.8s var(--mag-ease);
    }
    .mag-heading.is-visible { background-position:100% 0; }
    .mag-heading:hover { filter:drop-shadow(0 0 24px rgba(236,184,197,0.45)); }

    [data-body-copy] {
      position:relative;
      transition: opacity 0.8s var(--mag-ease), transform 0.8s var(--mag-ease);
    }
    [data-body-copy].is-past { opacity:0.68; transform:translateY(6px); }

    .accent-underline {
      position:relative;
      display:inline-block;
      color:var(--text-dark);
    }
    .accent-underline::after {
      content:"";
      position:absolute;
      left:0; bottom:-0.25em;
      width:100%; height:0.35em;
      background:linear-gradient(90deg, rgba(250,210,199,0.8), rgba(215,204,245,0.8));
      border-radius:999px;
      transform-origin:left;
      transform:scaleX(0);
      transition:transform 0.8s var(--mag-ease);
    }
    .accent-underline.is-visible::after { transform:scaleX(1); }

    .tag-badge {
      background:rgba(255,255,255,0.45);
      border:1px solid rgba(255,255,255,0.6);
      color:var(--text-medium);
      font-weight:600;
      padding:0.3rem 0.85rem;
      border-radius:999px;
      box-shadow:0 10px 20px rgba(229,183,197,0.18);
      animation: badgePulse 4.8s var(--mag-ease) infinite alternate;
    }

    @keyframes badgePulse {
      0% { box-shadow:0 8px 18px rgba(229,183,197,0.15); }
      100% { box-shadow:0 16px 36px rgba(215,204,245,0.28); }
    }

    .project-thumbnail {
      position:relative;
      transition: transform 0.6s var(--mag-ease), box-shadow 0.6s var(--mag-ease);
      overflow:hidden;
    }
    .project-thumbnail::before {
      content:"";
      position:absolute;
      inset:0;
      border-radius:inherit;
      background:radial-gradient(circle at 50% 20%, rgba(255,255,255,0.35), transparent 70%);
      opacity:0;
      transition:opacity 0.6s var(--mag-ease);
    }
    .project-thumbnail:hover {
      transform:translateY(-8px);
      box-shadow:0 35px 65px rgba(215,204,245,0.28);
    }
    .project-thumbnail:hover::before { opacity:1; }

    .metric-card {
      position:relative;
      background:rgba(255,255,255,0.55);
      border-radius:20px;
      padding:1.75rem 1.5rem;
      border:1px solid rgba(255,255,255,0.6);
      box-shadow:0 20px 45px rgba(229,183,197,0.25);
      overflow:hidden;
    }
    .metric-card::before {
      content:"";
      position:absolute;
      inset:-30%;
      background:radial-gradient(circle, rgba(229,183,197,0.2), transparent 65%);
      transform:scale(0.6);
      opacity:0;
      transition:transform 1.6s var(--mag-ease), opacity 1.6s var(--mag-ease);
    }
    .metric-card.is-animating::before {
      opacity:1;
      transform:scale(1);
    }
    .metric-card-value {
      font-size:2.6rem;
      line-height:1;
      font-weight:800;
      color:var(--accent-pink-dark);
      letter-spacing:-0.02em;
    }
    .metric-card-label { font-size:0.85rem; color:var(--text-medium); text-transform:uppercase; letter-spacing:0.14em; }

    .cursor-aura {
      position:fixed;
      width:160px; height:160px;
      border-radius:50%;
      pointer-events:none;
      z-index:5;
      background:radial-gradient(circle, rgba(229,183,197,0.25), rgba(229,183,197,0));
      mix-blend-mode:screen;
      opacity:0;
      transform:translate(-50%, -50%) scale(0.75);
      transition: opacity 0.6s var(--mag-ease), transform 0.6s var(--mag-ease);
    }

    [data-ripple-container] { position:relative; overflow:hidden; }
    .ripple {
      position:absolute;
      border-radius:50%;
      background:radial-gradient(circle, rgba(215,204,245,0.35), rgba(215,204,245,0));
      transform:scale(0);
      opacity:0.9;
      pointer-events:none;
      animation:rippleExpand 1.6s var(--mag-ease);
    }
    @keyframes rippleExpand {
      to { transform:scale(3.6); opacity:0; }
    }

    .quote-bubble {
      position:relative;
      padding:2rem;
      border-radius:28px;
      background:rgba(255,255,255,0.65);
      border:1px solid rgba(255,255,255,0.6);
      box-shadow:0 25px 65px rgba(215,204,245,0.28);
    }
    .quote-bubble::after {
      content:"";
      position:absolute;
      width:140px; height:140px;
      border-radius:50%;
      background:radial-gradient(circle, rgba(215,204,245,0.45), rgba(215,204,245,0));
      opacity:0.7;
      inset:auto -40px -60px auto;
      animation: bubbleOrbit 6s var(--mag-ease) infinite alternate;
    }
    @keyframes bubbleOrbit {
      0% { transform:translate(0,0) scale(0.9); }
      100% { transform:translate(-20px, 20px) scale(1.05); }
    }

    .timeline::before {
      background:linear-gradient(180deg, rgba(229,183,197,0.4), rgba(215,204,245,0.2));
    }
    .timeline-step {
      position:relative;
      padding-left:3.5rem;
    }
    .timeline-step::before {
      content:"";
      position:absolute;
      left:0.8rem;
      top:0.75rem;
      width:1.2rem;
      height:1.2rem;
      border-radius:50%;
      background:radial-gradient(circle, rgba(229,183,197,0.85), rgba(229,183,197,0));
      box-shadow:0 0 0 0 rgba(229,183,197,0.45);
      animation: timelinePulse 2.4s var(--mag-ease) infinite;
    }
    @keyframes timelinePulse {
      0% { box-shadow:0 0 0 0 rgba(229,183,197,0.45); }
      100% { box-shadow:0 0 0 16px rgba(229,183,197,0); }
    }

    .details-tabs button {
      position:relative;
      overflow:hidden;
      transition: background 0.6s var(--mag-ease), color 0.6s var(--mag-ease), transform 0.6s var(--mag-ease);
    }
    .details-tabs button::after {
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(120deg, rgba(229,183,197,0.28), rgba(215,204,245,0.28));
      opacity:0;
      transition:opacity 0.6s var(--mag-ease);
    }
    .details-tabs button:hover { transform:translateY(-4px); }
    .details-tabs button.active::after { opacity:1; }

    .tab-content { display:none; }
    .tab-content.active { display:block; animation: fadeIn 0.6s var(--mag-ease); }
    @keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }

    .testimonial-scroller .scroller-inner { animation-timing-function: linear; }
  `;
  document.head.appendChild(style);

  function ensureCanvas(){
    if (document.getElementById('bg-canvas')) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
  }
  ensureCanvas();

  function initReveal(){
    const makeVisible = (entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('mag-heading')) {
            entry.target.classList.add('is-visible');
          }
          if (entry.target.classList.contains('accent-underline')) {
            entry.target.classList.add('is-visible');
          }
        }
      });
    };
    const observer = new IntersectionObserver(makeVisible, { threshold:0.25 });
    document.querySelectorAll('.reveal, .mag-heading, .accent-underline').forEach(el=>observer.observe(el));
  }

  function initBodyCopyFade(){
    const paragraphs = Array.from(document.querySelectorAll('[data-body-copy]'));
    if (!paragraphs.length) return;
    const update = () => {
      const viewport = window.innerHeight;
      paragraphs.forEach(p => {
        const rect = p.getBoundingClientRect();
        const offset = rect.top + rect.height * 0.5;
        if (offset < viewport * 0.18) {
          p.classList.add('is-past');
        } else {
          p.classList.remove('is-past');
        }
      });
    };
    update();
    window.addEventListener('scroll', update, { passive:true });
    window.addEventListener('resize', update);
  }

  function initCursorAura(){
    let aura = document.querySelector('.cursor-aura');
    if (!aura) {
      aura = document.createElement('div');
      aura.className = 'cursor-aura';
      document.body.appendChild(aura);
    }
    let raf;
    const target = { x: innerWidth / 2, y: innerHeight / 2 };
    const current = { x: target.x, y: target.y };
    const update = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      aura.style.transform = `translate(${current.x}px, ${current.y}px) scale(1)`;
      raf = requestAnimationFrame(update);
    };
    update();
    const onMove = (e) => {
      aura.style.opacity = '1';
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const fade = () => { aura.style.opacity = '0'; };
    window.addEventListener('mousemove', onMove, { passive:true });
    window.addEventListener('mouseleave', fade);
    window.addEventListener('blur', fade);
  }

  function initRipples(){
    document.querySelectorAll('[data-ripple]').forEach(el=>{
      const container = el.closest('[data-ripple-container]') || el;
      if (container.dataset.rippleBound === 'true') return;
      container.dataset.rippleBound = 'true';
      container.classList.add('relative');
      container.addEventListener('click', (event)=>{
        const rect = container.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size/2}px`;
        ripple.style.top = `${event.clientY - rect.top - size/2}px`;
        container.appendChild(ripple);
        ripple.addEventListener('animationend', ()=>ripple.remove());
      });
    });
  }

  function lerp(a,b,t){ return a + (b - a) * t; }

  function initParticles(){
    if (!window.THREE) {
      window.MagnoliaParticles = {
        setTone: ()=>{},
        flash: ()=>{},
        flowerBurst: ()=>{},
        hoverBloom: ()=>{},
        scatter: ()=>{}
      };
      return;
    }

    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1200);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    renderer.setPixelRatio(dpr);
    renderer.setSize(innerWidth, innerHeight);

    const COUNT = 9000;
    const positions = new Float32Array(COUNT * 3);
    const randoms = new Float32Array(COUNT);
    const sizes = new Float32Array(COUNT);
    const phases = new Float32Array(COUNT);

    for (let i=0;i<COUNT;i++){
      positions[i*3] = (Math.random()-0.5) * 140;
      positions[i*3+1] = (Math.random()-0.5) * 90;
      positions[i*3+2] = (Math.random()-0.5) * 140;
      randoms[i] = Math.random();
      sizes[i] = Math.random()*1.5 + 1.1;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    const CLUSTERS = 3;
    const clusterData = Array.from({ length: CLUSTERS }, () => new THREE.Vector4(0,0,0,0));
    const clusterRadius = new Float32Array(CLUSTERS).fill(16);

    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uScreenW;
      uniform vec3 uTone;
      uniform vec3 uToneAlt;
      uniform float uFlash;
      uniform vec3 uClickBurst;
      uniform vec4 uClusterData[${CLUSTERS}];
      uniform float uClusterRadius[${CLUSTERS}];
      attribute float aRandom;
      attribute float aSize;
      attribute float aPhase;
      varying vec3 vTint;
      varying float vFade;
      varying float vPetalMix;
      varying float vGlowBoost;

      vec2 safeNormalize(vec2 v){
        float len = length(v);
        if (len < 0.0001) return vec2(0.0);
        return v / len;
      }

      void main(){
        vec3 p = position;
        float t = uTime * 0.28 + aPhase;
        p.x += sin(t * 0.9 + p.z * 0.015) * (0.8 + aRandom * 0.8);
        p.y += cos(t * 0.7 + p.x * 0.02) * (0.65 + aRandom * 0.5);
        p.z += sin(t * 0.4) * 0.2;

        float clusterMix = 0.0;
        float petalMix = 0.0;
        for (int i=0; i<${CLUSTERS}; i++) {
          vec3 c = uClusterData[i].xyz;
          float intensity = uClusterData[i].w;
          if (intensity > 0.001) {
            float dist = distance(p, c);
            float influence = smoothstep(uClusterRadius[i], 0.0, dist);
            clusterMix = max(clusterMix, influence * intensity);
            petalMix = max(petalMix, influence * intensity * 1.1);
            vec2 dir = safeNormalize(p.xy - c.xy);
            p.xy += dir * influence * intensity * 1.8;
            p.z += sin(t + float(i)) * influence * intensity * 0.65;
          }
        }

        vec4 clip = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        vec2 ndc = clip.xy / clip.w;
        float distMouse = distance(ndc, uMouse);
        float near = smoothstep(0.6, 0.05, distMouse);
        float repel = smoothstep(0.28, 0.02, distMouse);
        vec2 push = safeNormalize(ndc - uMouse);
        p.xy += push * repel * 0.95;

        float burst = 0.0;
        if (uClickBurst.z > 0.001) {
          float distBurst = distance(ndc, uClickBurst.xy);
          burst = smoothstep(0.85, 0.02, distBurst) * uClickBurst.z;
          vec2 burstDir = safeNormalize(ndc - uClickBurst.xy);
          p.xy += burstDir * burst * 4.0;
          p.z += burst * 2.5;
        }

        vec4 finalClip = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        gl_Position = finalClip;

        float sizeBase = aSize * 2.0;
        float swell = 1.0 + near * 3.5 + clusterMix * 2.6 + burst * 3.0;
        gl_PointSize = sizeBase * swell * (uScreenW / 1920.0) * (1.0 / -finalClip.z);

        vec3 baseTint = mix(uTone, uToneAlt, aRandom);
        float flashBoost = clamp(uFlash + clusterMix * 0.4 + near * 0.35 + burst * 0.25, 0.0, 1.4);
        vTint = clamp(baseTint * (1.0 + flashBoost), 0.0, 1.2);
        vFade = mix(0.45, 1.1, near + clusterMix * 0.7 + burst * 0.3);
        vPetalMix = clamp(petalMix, 0.0, 1.0);
        vGlowBoost = flashBoost;
      }
    `;

    const fragmentShader = `
      varying vec3 vTint;
      varying float vFade;
      varying float vPetalMix;
      varying float vGlowBoost;

      void main(){
        vec2 uv = gl_PointCoord * 2.0 - 1.0;
        float radius = length(uv);
        float base = smoothstep(1.0, 0.0, radius);
        if (vPetalMix > 0.01) {
          float angle = atan(uv.y, uv.x);
          float petals = pow(sin(angle * 3.5) * 0.5 + 0.5, 2.0);
          float petalMask = smoothstep(1.0, 0.0, radius / (0.68 + petals * 0.38));
          base = mix(base, petalMask, clamp(vPetalMix, 0.0, 1.0));
        }
        float alpha = pow(base, 1.6) * vFade;
        vec3 color = mix(vTint, vec3(1.0), clamp(vGlowBoost * 0.18, 0.0, 0.45));
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0,0) },
        uScreenW: { value: innerWidth },
        uTone: { value: new THREE.Color('#F5D9E4') },
        uToneAlt: { value: new THREE.Color('#DAD3F6') },
        uFlash: { value: 0 },
        uClickBurst: { value: new THREE.Vector3(0,0,0) },
        uClusterData: { value: clusterData },
        uClusterRadius: { value: clusterRadius }
      },
      vertexShader,
      fragmentShader,
      transparent:true,
      depthWrite:false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const tonePalette = {
      magnolia: ['#F5D9E4', '#E7D2F5'],
      blush: ['#F3C6D2', '#F9E1EA'],
      lilac: ['#D5C7F5', '#E9E1FB'],
      cream: ['#F4E5D8', '#F8EFE6'],
      peach: ['#FAD2C7', '#FCE3DB'],
      sage: ['#DDEBE3', '#EFF7F2']
    };

    const mouseNDC = new THREE.Vector2(0,0);
    const mouseTarget = new THREE.Vector2(0,0);
    let lastMove = performance.now();
    let idlePhase = 0;
    let flashValue = 0;
    let clickBurstStrength = 0;
    let lastIdleCluster = performance.now();

    const clusters = Array.from({ length: CLUSTERS }, () => ({ active:false, start:0, duration:0, center:new THREE.Vector3(), radius:18 }));

    function updateClusters(){
      const now = performance.now();
      clusters.forEach((cluster, index)=>{
        if (!cluster.active) {
          clusterData[index].set(0,0,0,0);
          return;
        }
        const progress = Math.min(1, (now - cluster.start) / cluster.duration);
        if (progress >= 1) {
          cluster.active = false;
          clusterData[index].set(0,0,0,0);
          return;
        }
        const ease = progress < 0.5
          ? 2.0 * progress * progress
          : -1.0 + (4.0 - 2.0 * progress) * progress;
        const bloom = Math.sin(progress * 3.14159);
        clusterData[index].set(cluster.center.x, cluster.center.y, cluster.center.z, bloom * ease);
        clusterRadius[index] = cluster.radius;
      });
      material.uniforms.uClusterRadius.needsUpdate = true;
    }

    function screenToWorld(x, y, depth = 0){
      const ndcX = (x / innerWidth) * 2 - 1;
      const ndcY = -(y / innerHeight) * 2 + 1;
      return new THREE.Vector3(ndcX * 70, ndcY * 50, depth);
    }

    function spawnCluster(opts = {}){
      const slot = clusters.find(c => !c.active);
      if (!slot) return;
      slot.active = true;
      slot.start = performance.now();
      slot.duration = opts.duration || 3200;
      slot.center = opts.center ? opts.center.clone() : screenToWorld(Math.random()*innerWidth, Math.random()*innerHeight, (Math.random()-0.5)*40);
      slot.radius = opts.radius || 18;
    }

    function setTone(name){
      const tone = tonePalette[name] || tonePalette.magnolia;
      material.uniforms.uTone.value.set(tone[0]);
      material.uniforms.uToneAlt.value.set(tone[1]);
    }

    function flash(){
      flashValue = 1.1;
    }

    function flowerBurst(target){
      const center = target ? screenToWorld(target.x, target.y, 0) : screenToWorld(innerWidth/2, innerHeight/2, 0);
      spawnCluster({ center: center.clone().add(new THREE.Vector3((Math.random()-0.5)*6, (Math.random()-0.5)*6, (Math.random()-0.5)*6)), radius:14, duration:3600 });
      spawnCluster({ center: center.clone().add(new THREE.Vector3((Math.random()-0.5)*10, (Math.random()-0.5)*8, (Math.random()-0.5)*6)), radius:20, duration:4200 });
    }

    function hoverBloom(rect){
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      spawnCluster({ center: screenToWorld(centerX, centerY, (Math.random()-0.5)*20), radius:12, duration:2200 });
    }

    function scatter(x, y){
      const ndcX = (x / innerWidth) * 2 - 1;
      const ndcY = -(y / innerHeight) * 2 + 1;
      material.uniforms.uClickBurst.value.set(ndcX, ndcY, 1.0);
      clickBurstStrength = 1.0;
    }

    window.addEventListener('mousemove', (e)=>{
      lastMove = performance.now();
      mouseTarget.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    }, { passive:true });

    window.addEventListener('click', (e)=>{
      scatter(e.clientX, e.clientY);
    });

    function updateIdle(){
      const now = performance.now();
      const idleFor = now - lastMove;
      if (idleFor > 2000){
        idlePhase += 0.012;
        const radius = 0.35;
        mouseTarget.set(Math.cos(idlePhase) * radius, Math.sin(idlePhase * 0.8) * radius * 0.8);
        if (now - lastIdleCluster > 4200) {
          spawnCluster();
          lastIdleCluster = now;
        }
      }
    }

    function resize(){
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      material.uniforms.uScreenW.value = innerWidth;
    }
    window.addEventListener('resize', resize);

    function animate(){
      requestAnimationFrame(animate);
      material.uniforms.uTime.value += 0.016;
      mouseNDC.lerp(mouseTarget, 0.12);
      material.uniforms.uMouse.value.copy(mouseNDC);
      camera.position.x = mouseNDC.x * 2.4;
      camera.position.y = mouseNDC.y * 1.8;
      camera.lookAt(0,0,0);
      updateIdle();
      updateClusters();
      if (flashValue > 0.001) {
        flashValue = Math.max(0, flashValue - 0.02);
      } else {
        flashValue = 0;
      }
      material.uniforms.uFlash.value = flashValue;
      if (clickBurstStrength > 0.001) {
        clickBurstStrength *= 0.86;
      } else {
        clickBurstStrength = 0;
      }
      material.uniforms.uClickBurst.value.z = clickBurstStrength;
      renderer.render(scene, camera);
    }

    resize();
    animate();

    window.MagnoliaParticles = {
      setTone,
      flash,
      flowerBurst,
      hoverBloom,
      scatter,
      bindRipples: initRipples
    };
  }

  function onReady(){
    initReveal();
    initBodyCopyFade();
    initCursorAura();
    initRipples();
    initParticles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
