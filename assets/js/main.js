// Render lucide icons
if (window.lucide) window.lucide.createIcons();

// Mobile menu toggle
document.querySelectorAll('[data-menu-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const menu = document.querySelector('[data-menu]');
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    btn.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });
});

// Before/After slider
document.querySelectorAll('[data-beforeafter]').forEach((root) => {
  const range = root.querySelector('[data-ba-range]');
  const beforeWrap = root.querySelector('[data-ba-before]');
  const divider = root.querySelector('[data-ba-divider]');
  const beforeImg = beforeWrap ? beforeWrap.querySelector('img') : null;
  if (!range) return;
  const update = (pos) => {
    beforeWrap.style.width = pos + '%';
    divider.style.left = pos + '%';
    if (beforeImg) beforeImg.style.width = (100 / (pos / 100)) + '%';
  };
  update(Number(range.value));
  range.addEventListener('input', (e) => update(Number(e.target.value)));
});
