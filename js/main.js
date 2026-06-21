/* =====================================================================
   main.js — điều khiển giao diện, song ngữ & đổ dữ liệu
   (Sửa NỘI DUNG trong /data/ và chữ tĩnh trong /js/i18n.js — không cần sửa file này)
   ===================================================================== */

/* ---------- 1. STARFIELD ---------- */
(function starfield() {
  const c = document.getElementById('starfield');
  if (!c) return;
  const ctx = c.getContext('2d');
  let stars = [];
  function resize() {
    c.width = window.innerWidth; c.height = window.innerHeight;
    const count = Math.min(160, Math.floor((c.width * c.height) / 10000));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.3 + 0.2, a: Math.random(),
      s: Math.random() * 0.015 + 0.003, tw: Math.random() < 0.25
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (const st of stars) {
      if (st.tw) { st.a += st.s; if (st.a > 1 || st.a < 0.1) st.s *= -1; }
      ctx.globalAlpha = st.a;
      ctx.fillStyle = Math.random() < 0.5 ? '#F0B45A' : '#cdd6ff';
      ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    resize(); draw(); window.addEventListener('resize', resize);
  } else {
    resize(); ctx.globalAlpha = .7;
    for (const st of stars) { ctx.fillStyle = '#cdd6ff'; ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, 7); ctx.fill(); }
  }
})();

/* ---------- 2. NAV ---------- */
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open')));

/* ---------- helpers ---------- */
const cfg = window.SITE_CONFIG || {};
const initial = (s) => (String(s || '?').trim().charAt(0) || '?').toUpperCase();
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const P = (v) => window.pick ? window.pick(v) : v;      // chọn theo ngôn ngữ
const T = (k) => window.tr ? window.tr(k) : k;          // chữ tĩnh

// AVATAR: chữ cái đầu làm nền; ảnh phủ lên, hỏng -> tự gỡ
function avatar(src, boxClass, alt) {
  const letter = esc(initial(alt));
  const img = src ? `<img src="${esc(src)}" alt="${esc(alt || '')}" onerror="this.remove()">` : '';
  return `<div class="${boxClass} avatar"><span>${letter}</span>${img}</div>`;
}
// COVER: biểu tượng placeholder làm nền; ảnh phủ lên, hỏng -> tự gỡ
function cover(src, boxClass, symbol, alt, overlay) {
  const img = src ? `<img src="${esc(src)}" alt="${esc(alt || '')}" onerror="this.remove()">` : '';
  return `<div class="${boxClass}"><span class="placeholder">${symbol}</span>${img}${overlay || ''}</div>`;
}
function setText(id, val) { const el = document.getElementById(id); if (el && val) el.textContent = val; }
function setHref(id, val) { const el = document.getElementById(id); if (el && val) el.href = val; }

/* ---------- 3. CONFIG (logo, liên hệ) ---------- */
(function applyConfig() {
  document.querySelectorAll('[data-logo-program]').forEach(el => {
    if (cfg.logoProgram) {
      const span = document.createElement('span');
      span.className = 'logo-slot avatar';
      span.style.cssText = el.getAttribute('data-style') || '';
      span.innerHTML = `<span class="bx-fallback">★</span><img src="${esc(cfg.logoProgram)}" alt="Logo" onerror="this.remove()">`;
      el.replaceWith(span);
    }
  });
  setText('cEmail', cfg.email);
  setHref('cEmailLink', cfg.email ? 'mailto:' + cfg.email : '#');
  setHref('cEmailLink2', cfg.email ? 'mailto:' + cfg.email : '#');
  setHref('cFanpage', cfg.fanpage || '#');
  setHref('heroProposal', cfg.proposalUrl || '#');
  setHref('footProposal', cfg.proposalUrl || '#');
  setHref('footFanpage', cfg.fanpage || '#');
  setHref('footEmail', cfg.email ? 'mailto:' + cfg.email : '#');
  if (!cfg.zalo) { const z = document.getElementById('rowZalo'); if (z) z.style.display = 'none'; }
})();

/* ---------- 4. RENDER NỘI DUNG ĐỘNG (gọi lại khi đổi ngôn ngữ) ---------- */
function renderEquipment() {
  const wrap = document.getElementById('equipGrid');
  if (!wrap || !window.DATA_EQUIPMENT) return;
  wrap.innerHTML = window.DATA_EQUIPMENT.map(e => `
    <article class="equip reveal in">
      ${cover(e.image, 'ph', '◎', P(e.name), `<span class="tag">${esc(e.tag)}</span>`)}
      <div class="body">
        <h4>${esc(P(e.name))}</h4>
        <p>${esc(P(e.desc))}</p>
        <ul>${(P(e.specs) || []).map(s => `<li>${esc(s)}</li>`).join('')}</ul>
      </div>
    </article>`).join('');
}

function renderClubs() {
  const wrap = document.getElementById('clubsGrid');
  if (!wrap || !window.DATA_CLUBS) return;
  if (!window.DATA_CLUBS.length) { wrap.innerHTML = `<p class="modal-empty">${T('clubs.empty')}</p>`; return; }
  wrap.innerHTML = window.DATA_CLUBS.map(c => {
    const pill = c.status === 'alumni'
      ? `<span class="pill alumni">${T('clubs.alumni')}</span>`
      : `<span class="pill active">${T('clubs.active')}</span>`;
    return `
    <article class="card club reveal in">
      <div class="top">
        ${avatar(c.logo, 'logo', P(c.name))}
        <div><div class="name">${esc(P(c.name))}</div><div class="school">${esc(P(c.school))}</div></div>
      </div>
      <div class="meta">
        ${pill}
        <div class="kv"><span>${T('clubs.k.area')}</span><span>${esc(P(c.location))}</span></div>
        <div class="kv"><span>${T('clubs.k.cycle')}</span><span>${esc(P(c.cycle))}</span></div>
        <div class="kv"><span>${T('clubs.k.equip')}</span><span>${esc(P(c.equipment))}</span></div>
        <div class="kv"><span>${T('clubs.k.members')}</span><span>${esc(P(c.members))}</span></div>
        ${c.note ? `<p class="note">${esc(P(c.note))}</p>` : ''}
      </div>
    </article>`;
  }).join('');
}

function renderActivities() {
  const wrap = document.getElementById('actGrid');
  if (!wrap || !window.DATA_ACTIVITIES) return;
  if (!window.DATA_ACTIVITIES.length) { wrap.innerHTML = `<p class="modal-empty">${T('act.empty')}</p>`; return; }
  wrap.innerHTML = window.DATA_ACTIVITIES.map((a, i) => `
    <article class="card act reveal in" data-act="${i}">
      ${cover(a.cover, 'cover', '✶', P(a.title), `<span class="date">${esc(a.date)}</span>`)}
      <div class="body">
        <div class="by">${esc(P(a.club))}</div>
        <h4>${esc(P(a.title))}</h4>
        <p>${esc(P(a.summary))}</p>
        <span class="more">${T('act.more')}</span>
      </div>
    </article>`).join('');
  wrap.querySelectorAll('[data-act]').forEach(card =>
    card.addEventListener('click', () => openActModal(window.DATA_ACTIVITIES[+card.dataset.act])));
}

function openActModal(a) {
  const modal = document.getElementById('actModal');
  document.getElementById('mTitle').textContent = P(a.title);
  document.getElementById('mBy').textContent = P(a.club) + ' · ' + a.date;
  document.getElementById('mSummary').textContent = P(a.summary);
  const g = document.getElementById('mGallery');
  const imgs = (a.gallery && a.gallery.length) ? a.gallery : (a.cover ? [a.cover] : []);
  g.innerHTML = imgs.length
    ? imgs.map(src => `<img src="${esc(src)}" alt="" onerror="this.style.display='none'">`).join('')
    : `<p class="modal-empty">${T('act.gallery.empty')}</p>`;
  modal.classList.add('open');
}
(function modalInit() {
  const modal = document.getElementById('actModal');
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
  document.getElementById('mClose').addEventListener('click', () => modal.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open'); });
})();

function renderCouncil() {
  const wrap = document.getElementById('councilWrap');
  if (!wrap || !window.DATA_COUNCIL) return;
  const groups = [
    { id: 'noi-dung', label: T('council.g1') },
    { id: 'ky-thuat', label: T('council.g2') }
  ];
  wrap.innerHTML = groups.map(grp => {
    const people = window.DATA_COUNCIL.filter(p => p.group === grp.id);
    if (!people.length) return '';
    return `
    <div class="council-group">
      <div class="gh"><span class="tag">${esc(grp.label)}</span><span class="ln"></span></div>
      <div class="grid-2">
        ${people.map(p => `
          <article class="card person reveal in">
            ${avatar(p.photo, 'ph', p.name)}
            <div class="role">${esc(P(p.role))}</div>
            <h4>${esc(p.name)}</h4>
            <div class="title">${esc(P(p.title))}</div>
            <p class="duty">${esc(P(p.duty))}</p>
          </article>`).join('')}
      </div>
    </div>`;
  }).join('');
}

function renderPartners() {
  const wrap = document.getElementById('partnersGrid');
  if (!wrap || !window.DATA_PARTNERS) return;
  wrap.innerHTML = window.DATA_PARTNERS.map(p => `
    <article class="card partner reveal in">
      ${avatar(p.logo, 'logo', P(p.name))}
      <div>
        <div class="kind">${esc(P(p.kind))}</div>
        <h4>${esc(P(p.name))}</h4>
        <p>${esc(P(p.desc))}</p>
        ${p.url ? `<a class="link" href="${esc(p.url)}" target="_blank" rel="noopener">${T('act.more')}</a>` : ''}
      </div>
    </article>`).join('');
}

// gọi tất cả render — i18n.js dùng tên này khi đổi ngôn ngữ
window.renderDynamic = function () {
  renderEquipment(); renderClubs(); renderActivities(); renderCouncil(); renderPartners();
};

/* ---------- 5. BỘ CHỌN NGÔN NGỮ ---------- */
window.hideChooser = function () {
  const ch = document.getElementById('chooser');
  if (ch) ch.classList.remove('show');
};
(function chooserInit() {
  const ch = document.getElementById('chooser');
  if (!ch) return;
  if (!window.getLang()) ch.classList.add('show'); // chưa chọn -> hiện
})();

/* ---------- 6. REVEAL ON SCROLL ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ---------- 7. KHỞI ĐỘNG ---------- */
window.applyI18n();        // chữ tĩnh
window.renderDynamic();    // nội dung động
initReveal();
setText('year', new Date().getFullYear());
