document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');
  const menuLinks = document.querySelectorAll('.sidebar a');

  if (!hamburger || !sidebar || !overlay || !closeBtn) return;

  // Открыть меню
  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  // Закрыть меню (крестик)
  closeBtn.addEventListener('click', closeMenu);

  // Закрыть меню (клик по фону)
  overlay.addEventListener('click', closeMenu);

  // Активный пункт меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      closeMenu();
    });
  });

  function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

});
