import { PROPS, CATEGORIES, searchProps, filterByCategory } from './props.js';
import { t, getLang, setLang } from './i18n.js';

// ── State ─────────────────────────────────────────────────────────────────
let lang = 'en';
let theme = 'light';
let activeCategory = 'all';
let searchQuery = '';
let selectedValues = {}; // propName → currently selected value index

// ── DOM refs ──────────────────────────────────────────────────────────────
const searchInput = document.getElementById('search');
const categoryBar = document.getElementById('category-bar');
const grid = document.getElementById('prop-grid');
const countEl = document.getElementById('prop-count');
const themeBtn = document.getElementById('btn-theme');
const langBtn = document.getElementById('btn-lang');
const titleEl = document.getElementById('app-title');
const subtitleEl = document.getElementById('app-subtitle');
const noResultsEl = document.getElementById('no-results');

// ── Init ──────────────────────────────────────────────────────────────────
function init() {
  // Default selected value index per prop
  PROPS.forEach(p => {
    selectedValues[p.name] = 0;
  });

  buildCategoryBar();
  render();
  bindEvents();
}

// ── Category bar ──────────────────────────────────────────────────────────
function buildCategoryBar() {
  categoryBar.innerHTML = '';

  const allBtn = makeChip('all', t(lang, 'allCategories'), activeCategory === 'all');
  categoryBar.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const btn = makeChip(cat.id, cat.name[lang], activeCategory === cat.id);
    categoryBar.appendChild(btn);
  });
}

function makeChip(id, label, active) {
  const btn = document.createElement('button');
  btn.className = 'chip' + (active ? ' chip--active' : '');
  btn.dataset.category = id;
  btn.textContent = label;
  return btn;
}

// ── Render ────────────────────────────────────────────────────────────────
function render() {
  let visible = searchQuery
    ? searchProps(searchQuery, lang)
    : filterByCategory(activeCategory);

  // Also apply category filter when searching
  if (searchQuery && activeCategory !== 'all') {
    visible = visible.filter(p => p.category === activeCategory);
  }

  grid.innerHTML = '';

  if (visible.length === 0) {
    noResultsEl.textContent = t(lang, 'noResults');
    noResultsEl.hidden = false;
  } else {
    noResultsEl.hidden = true;
    visible.forEach(prop => grid.appendChild(buildCard(prop)));
  }

  countEl.textContent = `${visible.length} ${t(lang, 'propertyCount')}`;
  titleEl.textContent = t(lang, 'appTitle');
  subtitleEl.textContent = t(lang, 'appSubtitle');
  searchInput.placeholder = t(lang, 'searchPlaceholder');

  // Update chips
  categoryBar.querySelectorAll('.chip').forEach(btn => {
    btn.classList.toggle('chip--active', btn.dataset.category === activeCategory);
    const cat = CATEGORIES.find(c => c.id === btn.dataset.category);
    if (cat) btn.textContent = cat.name[lang];
    else btn.textContent = t(lang, 'allCategories');
  });
}

// ── Card builder ──────────────────────────────────────────────────────────
function buildCard(prop) {
  const valueIdx = selectedValues[prop.name] ?? 0;
  const currentVal = prop.values[valueIdx];

  const card = document.createElement('article');
  card.className = 'prop-card';
  card.dataset.prop = prop.name;

  // Header
  const header = document.createElement('div');
  header.className = 'prop-card__header';

  const name = document.createElement('h2');
  name.className = 'prop-card__name';
  name.textContent = prop.name;

  const catLabel = document.createElement('span');
  catLabel.className = 'prop-card__cat';
  const cat = CATEGORIES.find(c => c.id === prop.category);
  catLabel.textContent = cat ? cat.name[lang] : prop.category;

  header.append(name, catLabel);

  // Description
  const desc = document.createElement('p');
  desc.className = 'prop-card__desc';
  desc.textContent = prop.description[lang] ?? prop.description.en;

  // Value selector
  const valSection = document.createElement('div');
  valSection.className = 'prop-card__values';

  prop.values.forEach((val, idx) => {
    const btn = document.createElement('button');
    btn.className = 'val-btn' + (idx === valueIdx ? ' val-btn--active' : '');
    btn.textContent = val;
    btn.dataset.propName = prop.name;
    btn.dataset.valIdx = idx;
    valSection.appendChild(btn);
  });

  // Code example
  const codeWrap = document.createElement('div');
  codeWrap.className = 'prop-card__code';
  const code = document.createElement('code');
  code.textContent = `${prop.name}: ${currentVal};`;
  codeWrap.appendChild(code);

  // Preview
  const previewWrap = document.createElement('div');
  previewWrap.className = 'prop-card__preview';

  const previewLabel = document.createElement('span');
  previewLabel.className = 'prop-card__preview-label';
  previewLabel.textContent = t(lang, 'preview');

  const previewBox = document.createElement('div');
  previewBox.className = 'preview-container';
  previewBox.dataset.prop = prop.name;
  applyPreview(previewBox, prop, currentVal);

  previewWrap.append(previewLabel, previewBox);

  card.append(header, desc, valSection, codeWrap, previewWrap);
  return card;
}

// ── Preview logic ─────────────────────────────────────────────────────────
function applyPreview(container, prop, value) {
  const p = prop.preview;
  if (!p) return;

  container.innerHTML = p.html;

  // Apply container style if specified
  if (p.containerStyle) {
    p.containerStyle.split(';').forEach(decl => {
      const [k, v] = decl.split(':').map(s => s.trim());
      if (k && v) container.style[camelize(k)] = v;
    });
  }

  // Apply value to target
  const target = p.target;
  if (!target) return;

  // Handle pseudo-elements by applying to parent and injecting <style>
  if (target.includes('::')) {
    const [sel, pseudo] = target.split('::');
    const realTarget = sel === '.preview-container'
      ? container
      : container.querySelector(sel.replace('.preview-container ', '').trim());

    if (realTarget) {
      // Use a scoped class for the pseudo style
      const uid = `pv-${prop.name.replace(/[^a-z0-9]/g, '-')}-${Date.now() % 1000}`;
      realTarget.classList.add(uid);
      let styleTag = container.querySelector('style.pseudo-style');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.className = 'pseudo-style';
        container.prepend(styleTag);
      }
      styleTag.textContent = `.${uid}::${pseudo} { content: ${value}; color: #e74c3c; font-weight: bold; margin-right: 4px; }`;
    }
    return;
  }

  // Normal element targeting
  let el;
  if (target === '.preview-container') {
    el = container;
  } else {
    const selector = target.replace('.preview-container ', '').replace('.preview-container>', '').trim();
    el = container.querySelector(selector);
  }

  if (el) {
    el.style[camelize(prop.name)] = value;
  }
}

function camelize(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

// ── Events ────────────────────────────────────────────────────────────────
function bindEvents() {
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value.trim();
    render();
  });

  categoryBar.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    activeCategory = chip.dataset.category;
    render();
  });

  grid.addEventListener('click', e => {
    const btn = e.target.closest('.val-btn');
    if (!btn) return;
    const propName = btn.dataset.propName;
    const idx = parseInt(btn.dataset.valIdx, 10);
    selectedValues[propName] = idx;

    const prop = PROPS.find(p => p.name === propName);
    if (!prop) return;
    const val = prop.values[idx];

    // Update active button
    const card = btn.closest('.prop-card');
    card.querySelectorAll('.val-btn').forEach((b, i) => {
      b.classList.toggle('val-btn--active', i === idx);
    });

    // Update code
    const code = card.querySelector('.prop-card__code code');
    if (code) code.textContent = `${propName}: ${val};`;

    // Update preview
    const previewBox = card.querySelector('.preview-container');
    if (previewBox) {
      // Reset inline styles before re-applying
      previewBox.removeAttribute('style');
      applyPreview(previewBox, prop, val);
    }
  });

  themeBtn.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
  });

  langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'ja' : 'en';
    setLang(lang);
    langBtn.textContent = lang === 'en' ? 'JA' : 'EN';
    render();
  });
}

// ── Boot ──────────────────────────────────────────────────────────────────
init();
