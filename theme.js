// theme.js — Magnolia light theme + visible pastel particle motion (Three.js required)
(function () {
  // ---------- Global styles (Magnolia palette) ----------
  const style = document.createElement('style');
  style.textContent = `
  :root {
    --bg-color:#FAF8F5; --text-dark:#4F4A45; --text-medium:#756f6a; --text-light:#9e9690;
    --accent-pink:#D8A0A8; --accent-pink-dark:#B88088; --accent-pink-light:#E8C0C8;
    --panel-border:rgba(0,0,0,0.08); --panel-bg:rgba(255,255,255,0.7);
  }
  body{font-family:'Inter',sans-serif;color:var(--text-dark);background-color:var(--bg-color)}
  #bg-canvas{position:fixed;inset:0;z-index:-1;display:block}
  .content-container{position:relative;z-index:1}
  .panel{background:var(--panel-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
    border-radius:20px;border:1px solid var(--panel-border);box-shadow:0 4px 24px rgba(0,0,0,.05);transition:box-shadow .3s}
  .panel:hover{box-shadow:0 8px 32px rgba(0,0,0,.07)}
  .reveal{opacity:0;transform:translateY(50px);transition:opacity .8s ease-out,transform .8s ease-out}
  .reveal.visible{opacity:1;transform:translateY(0)}
  .metric-card{background:rgba(0,0,0,.02);border-radius:12px;padding:1.25rem;text-align:center}
  .metric-card-value{font-size:2.25rem;line-height:1;font-weight:800;color:var(--accent-pink)}
  .metric-card-label{font-size:.9rem;color:var(--text-medium)}
  .details-tabs button{color:var(--text-light);border:1px solid transparent}
  .details-tabs button.active{background:rgba(0,0,0,.05);color:var(--text-dark);box-shadow:0 0 15px -3px rgba(216,160,168,.35);
    border-color:rgba(216,160,168,.28)}
  .tab-content{display:none}
  .tab-content.active{display:block;animation:fadeIn .45s ease}
  @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  `;
  document.head.appendChild(style);

  // Ensure canvas exists
  if (!document.getElementById('bg-canvas')) {
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
  }

  // Reveal-on-scroll
  const onReady = () => {
    const obs = new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:0.1});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady); else onReady();

  // ---------- WebGL Particles (light/pastel, visible on hover) ----------
  function initParticles(){
    if (!window.THREE) return;
    const canvas = document.getElementById('bg-canvas');

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 1000);
    camera.position.z = 55;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
    renderer.setPixelRatio(dpr);
    renderer.setSize(innerWidth, innerHeight);

    // Geometry
    const N = 9000; // plenty but performant
    const positions = new Float32Array(N*3);
    const rnd = new Float32Array(N);
    const size = new Float32Array(N);
    const phase = new Float32Array(N);

    for (let i=0;i<N;i++){
      positions[i*3+0] = (Math.random()-0.5)*110;
      positions[i*3+1] = (Math.random()-0.5)*70;
      positions[i*3+2] = (Math.random()-0.5)*110;
      rnd[i] = Math.random();
      size[i] = Math.random()*1.6 + 1.1; // slightly bigger base
      phase[i] = Math.random()*Math.PI*2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
    geo.setAttribute('aRandom', new THREE.BufferAttribute(rnd,1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size,1));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phase,1));

    // Shaders: brighter, more responsive near mouse
    const vShader = `
      uniform float uTime; uniform vec2 uMouse; uniform float uScreenW;
      attribute float aRandom; attribute float aSize; attribute float aPhase;
      varying float vFade; varying vec3 vTint;
      // HSL → RGB helper
      vec3 hsl2rgb(vec3 hsl){
        vec3 rgb = clamp(abs(mod(hsl.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0);
        return hsl.z + hsl.y*(rgb-0.5)*(1.0-abs(2.0*hsl.z-1.0));
      }
      void main(){
        vec3 p = position;

        // gentle swirl & depth drift
        float sw = uTime*0.25 + aPhase;
        p.x += sin(sw*0.9 + p.z*0.02) * (0.6 + aRandom*0.6);
        p.y += cos(sw*0.8 + p.x*0.02) * (0.4 + aRandom*0.5);
        p.z += sin(sw*0.5) * 0.08;

        // project to clip to compute NDC
        vec4 clip = projectionMatrix * modelViewMatrix * vec4(p,1.0);
        vec2 ndc = clip.xy / clip.w;

        // mouse influence in NDC (uMouse already NDC)
        float dist = distance(ndc, uMouse);
        float near = smoothstep(0.55, 0.0, dist);   // stronger area
        float repel = smoothstep(0.22, 0.0, dist);  // tiny push away

        // slight repel so movement is noticeable
        p.xy += normalize(ndc - uMouse) * repel * 0.65;

        // final transform
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);

        // pastel tint (magnolia/pink w/ subtle hue shift)
        float hue = 0.93 + sin(uTime*0.1 + aPhase*0.7)*0.01; // ~pink
        float sat = mix(0.32, 0.58, near); // punch near cursor
        float lig = mix(0.78, 0.88, near);
        vTint = hsl2rgb(vec3(hue, sat, lig));

        // visible size swell near mouse
        float base = aSize * 2.0;
        float swell = 1.0 + near * 4.0; // up to 4x bigger
        gl_PointSize = base * swell * (uScreenW / 1920.0) * (1.0 / -gl_Position.z);

        // fade edges gracefully
        vFade = mix(0.55, 1.0, near);
      }`;

    const fShader = `
      varying float vFade; varying vec3 vTint;
      void main(){
        vec2 uv = gl_PointCoord*2.0 - 1.0;
        float d = dot(uv,uv);
        float a = smoothstep(1.0, 0.0, d);     // soft round
        a = pow(a, 1.6) * vFade;               // crisper core near mouse
        gl_FragColor = vec4(vTint, a*0.9);
      }`;

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.0, 0.0) }, // NDC coords
        uScreenW: { value: innerWidth }
      },
      vertexShader: vShader,
      fragmentShader: fShader,
      transparent: true,
      depthWrite: false
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Mouse → NDC target; camera parallax follow
    const mouseNDC = new THREE.Vector2(0,0);
    const mouseTarget = new THREE.Vector2(0,0);
    let lastMove = performance.now();
    let idlePhase = 0;

    function onMouse(e){
      lastMove = performance.now();
      // convert to NDC (-1..1)
      mouseTarget.set((e.clientX/innerWidth)*2-1, -(e.clientY/innerHeight)*2+1);
    }
    window.addEventListener('mousemove', onMouse, { passive:true });

    // Parallax camera follow (subtle but visible)
    function updateCamera(){
      // ease the NDC for shader + move camera a bit
      mouseNDC.lerp(mouseTarget, 0.15);
      mat.uniforms.uMouse.value.copy(mouseNDC);

      const parallax = 1.6; // increase if you want more
      camera.position.x = mouseNDC.x * parallax;
      camera.position.y = mouseNDC.y * parallax * 0.8;
      camera.lookAt(0,0,0);
    }

    // Idle auto-motion so background stays alive without input
    function updateIdle(){
      const idleFor = performance.now() - lastMove;
      if (idleFor > 1800){
        idlePhase += 0.01;
        const r = 0.4;
        mouseTarget.set(Math.cos(idlePhase)*r, Math.sin(idlePhase*0.8)*r*0.7);
      }
    }

    // Resize
    function onResize(){
      camera.aspect = innerWidth/innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
      mat.uniforms.uScreenW.value = innerWidth;
    }
    window.addEventListener('resize', onResize);

    // Animate
    function tick(){
      requestAnimationFrame(tick);
      mat.uniforms.uTime.value += 0.016;
      updateIdle();
      updateCamera();
      renderer.render(scene, camera);
    }
    tick();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
  } else { initParticles(); }
})();
