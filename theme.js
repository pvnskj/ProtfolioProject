// theme.js — inject Magnolia theme styles + WebGL background (Three.js must be loaded on the page)

(function () {
  // Inject global styles immediately so the page paints with the theme colors.
  const style = document.createElement('style');
  style.textContent = `
  :root {
    --bg-color:#FAF8F5; --text-dark:#4F4A45; --text-medium:#756f6a; --text-light:#9e9690;
    --accent-pink:#D8A0A8; --accent-pink-dark:#B88088; --accent-pink-light:#E8C0C8;
    --panel-border:rgba(0,0,0,0.08); --panel-bg:rgba(255,255,255,0.7);
  }
  body{font-family:'Inter',sans-serif;color:var(--text-dark);background-color:var(--bg-color)}
  #bg-canvas{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1;display:block}
  .content-container{position:relative;z-index:1}
  .panel{background:var(--panel-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-radius:20px;border:1px solid var(--panel-border);box-shadow:0 4px 24px rgba(0,0,0,0.05);transition:box-shadow .3s}
  .panel:hover{box-shadow:0 8px 32px rgba(0,0,0,0.07)}
  .reveal{opacity:0;transform:translateY(50px);transition:opacity .8s ease-out,transform .8s ease-out}
  .reveal.visible{opacity:1;transform:translateY(0)}
  .main-container{max-width:1200px}
  .tag-badge{background:rgba(0,0,0,0.05);color:var(--text-medium);font-weight:500;border:1px solid rgba(0,0,0,0.08);padding:.25rem .75rem;border-radius:9999px;font-size:.8rem}
  .metric-card{background:rgba(0,0,0,0.02);border-radius:12px;padding:1.5rem;text-align:center}
  .metric-card-value{font-size:2.5rem;line-height:1;font-weight:800;color:var(--accent-pink)}
  .metric-card-label{font-size:.9rem;color:var(--text-medium)}
  .details-tabs button{color:var(--text-light);border:1px solid transparent}
  .details-tabs button.active{background:rgba(0,0,0,0.05);color:var(--text-dark);box-shadow:0 0 15px -3px rgba(216,160,168,.4);border-color:rgba(216,160,168,.3)}
  .tab-content{display:none}
  .tab-content.active{display:block;animation:fadeIn .5s ease}
  @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
  .insight-card{background:rgba(0,0,0,0.03);padding:1rem 1.5rem;border-radius:8px;border:1px solid var(--panel-border)}
  .stat-card{background:rgba(0,0,0,0.03);border-left:4px solid var(--accent-pink);padding:1rem;border-radius:8px;text-align:center}
  .stat-card .stat-number{font-size:2rem;font-weight:800;color:var(--accent-pink);line-height:1}
  .testimonial-scroller{-webkit-mask:linear-gradient(90deg,transparent,black 20%,black 80%,transparent);mask:linear-gradient(90deg,transparent,black 20%,black 80%,transparent)}
  .scroller-inner{display:flex;gap:1.5rem;width:max-content;animation:scroll 90s linear infinite}
  .testimonial-scroller:hover .scroller-inner{animation-play-state:paused}
  .testimonial-card{width:380px;height:250px}
  @keyframes scroll{to{transform:translateX(calc(-50% - .75rem))}}
  `;
  document.head.appendChild(style);

  const runWhenReady = (fn) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  };

  function ensureCanvas() {
    if (document.getElementById('bg-canvas')) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'bg-canvas';
    document.body.prepend(canvas);
  }

  function setupRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }

  function initParticles() {
    if (!window.THREE) return;
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    let scene, camera, renderer, particles, time = 0;
    const mouse = new THREE.Vector2(0.5, 0.5);

    const vertexShader = `
      uniform float uTime; uniform float uHue; uniform vec2 uMouse; uniform float uScreenWidth;
      attribute float aRandom; attribute float aSize; attribute float aPhase; varying vec3 vColor;
      void main(){
        vec3 p = position;
        p.x += sin(uTime*0.5*aRandom)*0.5; p.y += cos(uTime*0.5*aRandom)*0.5;
        p.x += sin(uTime*0.1+aPhase)*0.05; p.y += cos(uTime*0.1+aPhase)*0.05;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0);
        vec2 sp = gl_Position.xy / gl_Position.w;
        float dist = distance(sp,uMouse);
        float bf = smoothstep(0.4,0.0,dist);
        float hue = uHue; float s = 0.7 + bf*0.3; float l = 0.65;
        vec3 rgb;
        if (s==0.0){ rgb = vec3(l);} else{
          float q = l < 0.5 ? l*(1.0+s) : l + s - l*s;
          float p = 2.0*l - q;
          vec3 t = vec3(hue+1.0/3.0, hue, hue-1.0/3.0);
          t = fract(t);
          rgb.x = t.x < 1.0/6.0 ? p + (q-p)*6.0*t.x : (t.x < 1.0/2.0 ? q : (t.x < 2.0/3.0 ? p + (q-p)*(2.0/3.0 - t.x)*6.0 : p));
          rgb.y = t.y < 1.0/6.0 ? p + (q-p)*6.0*t.y : (t.y < 1.0/2.0 ? q : (t.y < 2.0/3.0 ? p + (q-p)*(2.0/3.0 - t.y)*6.0 : p));
          rgb.z = t.z < 1.0/6.0 ? p + (q-p)*6.0*t.z : (t.z < 1.0/2.0 ? q : (t.z < 2.0/3.0 ? p + (q-p)*(2.0/3.0 - t.z)*6.0 : p));
        }
        vColor = rgb;
        gl_PointSize = (aSize*2.0)*(1.0 + bf*3.0)*(uScreenWidth/1920.0)*(1.0 / -gl_Position.z);
      }`;

    const fragmentShader = `varying vec3 vColor; void main(){ vec2 c=2.0*gl_PointCoord-1.0; float r=dot(c,c); float d=fwidth(r); float a=1.0 - smoothstep(1.0,1.0+d,r); gl_FragColor=vec4(vColor,a*0.9);} `;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const count = 10000;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      randoms[i] = Math.random();
      sizes[i] = Math.random() * 1.5 + 1;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uHue: { value: 0 },
        uMouse: { value: mouse },
        uScreenWidth: { value: window.innerWidth }
      },
      vertexShader,
      fragmentShader,
      transparent: true
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    function animate() {
      requestAnimationFrame(animate);
      time += 0.005;
      material.uniforms.uTime.value = time;
      material.uniforms.uHue.value = 0.94 + Math.sin(time * 0.2) * 0.04;
      renderer.render(scene, camera);
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uScreenWidth.value = window.innerWidth;
    }

    function onMouse(event) {
      material.uniforms.uMouse.value.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    }

    window.addEventListener('resize', onResize, false);
    window.addEventListener('mousemove', onMouse, false);

    animate();
  }

  runWhenReady(() => {
    ensureCanvas();
    setupRevealObserver();
    initParticles();
  });
})();
