import { quickStats, portfolioProjects, focusAreas, testimonials } from './projects.js';

const metricsGrid = document.getElementById('metrics-grid');
const projectGrid = document.getElementById('project-grid');
const focusGrid = document.getElementById('focus-grid');
const testimonialTrack = document.getElementById('testimonial-track');
const testimonialDots = document.getElementById('testimonial-dots');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function renderMetrics() {
  if (!metricsGrid) return;
  metricsGrid.innerHTML = quickStats.map(stat => `
    <article class="metric-card">
      <strong>${stat.value}</strong>
      <span>${stat.label}</span>
      <p>${stat.description}</p>
    </article>
  `).join('');
}

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.innerHTML = portfolioProjects.map(project => {
    const media = project.image
      ? `<img src="${project.image}" alt="${project.title} preview" loading="lazy">`
      : `<div class="media-placeholder" data-slot="${project.id}-image"><span>Project Cover</span><span>1600 × 1000</span></div>`;

    const highlights = project.highlights.map(item => `<li>${item}</li>`).join('');
    const tags = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

    const link = project.link
      ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">View case study
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>`
      : `<span class="project-link" aria-disabled="true">Drop a link when you're ready</span>`;

    return `
      <article class="project-card">
        <figure class="project-media">${media}</figure>
        <div class="project-meta">
          <span>${project.timeline}</span>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
        <div class="project-tags">${tags}</div>
        <ul class="project-highlights">${highlights}</ul>
        ${link}
      </article>
    `;
  }).join('');
}

function renderFocusAreas() {
  if (!focusGrid) return;
  focusGrid.innerHTML = focusAreas.map(area => `
    <article class="focus-card">
      <h3>${area.title}</h3>
      <p>${area.summary}</p>
      <ul>
        ${area.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

let carouselIndex = 0;
let carouselTimer;

function renderTestimonials() {
  if (!testimonialTrack) return;
  testimonialTrack.innerHTML = testimonials.map(testimonial => `
    <article class="testimonial-card">
      <p class="testimonial-quote">“${testimonial.quote}”</p>
      <div class="testimonial-meta">
        <strong>${testimonial.author}</strong>
        <span>${testimonial.role}</span>
      </div>
    </article>
  `).join('');

  if (!testimonialDots) return;
  testimonialDots.innerHTML = testimonials.map((_, index) => `
    <button class="carousel-dot" type="button" aria-label="Jump to testimonial ${index + 1}" ${index === 0 ? 'aria-current="true"' : ''}></button>
  `).join('');
}

function updateCarousel(newIndex) {
  if (!testimonialTrack) return;
  const slideCount = testimonials.length;
  carouselIndex = (newIndex + slideCount) % slideCount;
  testimonialTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;

  const dots = testimonialDots?.querySelectorAll('.carousel-dot') ?? [];
  dots.forEach((dot, index) => {
    if (index === carouselIndex) {
      dot.setAttribute('aria-current', 'true');
    } else {
      dot.removeAttribute('aria-current');
    }
  });
}

function startAutoplay() {
  if (prefersReducedMotion) return;
  stopAutoplay();
  carouselTimer = window.setInterval(() => updateCarousel(carouselIndex + 1), 7000);
}

function stopAutoplay() {
  if (carouselTimer) {
    window.clearInterval(carouselTimer);
  }
}

function setupCarousel() {
  const prev = document.querySelector('.carousel-nav--prev');
  const next = document.querySelector('.carousel-nav--next');
  if (!prev || !next || !testimonialTrack) return;

  prev.addEventListener('click', () => {
    updateCarousel(carouselIndex - 1);
    startAutoplay();
  });

  next.addEventListener('click', () => {
    updateCarousel(carouselIndex + 1);
    startAutoplay();
  });

  testimonialDots?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const dotIndex = Array.from(testimonialDots.children).indexOf(target);
    if (dotIndex >= 0) {
      updateCarousel(dotIndex);
      startAutoplay();
    }
  });

  testimonialTrack.addEventListener('pointerenter', stopAutoplay);
  testimonialTrack.addEventListener('pointerleave', startAutoplay);

  updateCarousel(0);
  startAutoplay();
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
}

function initOrbs() {
  const canvas = document.getElementById('orb-canvas');
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const orbs = Array.from({ length: prefersReducedMotion ? 18 : 32 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 120 + 40,
    hue: 320 + Math.random() * 20,
    alpha: 0.18 + Math.random() * 0.12,
    driftX: (Math.random() - 0.5) * 0.2,
    driftY: (Math.random() - 0.5) * 0.2,
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);
    orbs.forEach(orb => {
      orb.x += orb.driftX;
      orb.y += orb.driftY;

      if (orb.x < -200) orb.x = width + 200;
      if (orb.x > width + 200) orb.x = -200;
      if (orb.y < -200) orb.y = height + 200;
      if (orb.y > height + 200) orb.y = -200;

      const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
      gradient.addColorStop(0, `hsla(${orb.hue}, 70%, 75%, ${orb.alpha})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(draw);
    }
  }

  function handleResize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', handleResize);
  draw();
}

function initFooterYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

renderMetrics();
renderProjects();
renderFocusAreas();
renderTestimonials();
setupCarousel();
setupReveal();
initOrbs();
initFooterYear();
