// Mobile menu toggle
(function () {
  const openBtn = document.getElementById('nav-open');
  const closeBtn = document.getElementById('nav-close');
  const menu = document.getElementById('mobile-menu');

  if (openBtn && menu) {
    openBtn.addEventListener('click', () => {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (menu) {
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
})();

// Close other accordion items when one opens (single-open behaviour)
(function () {
  const groups = document.querySelectorAll('.faq');
  groups.forEach(group => {
    group.querySelectorAll('details').forEach(d => {
      d.addEventListener('toggle', () => {
        if (d.open) {
          group.querySelectorAll('details').forEach(other => {
            if (other !== d) other.open = false;
          });
        }
      });
    });
  });
})();
