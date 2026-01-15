// ----------------------
// Проверка авторизации и рендер профиля
// ----------------------
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/api/check_auth', {
      credentials: 'include'
    });
    if (!res.ok) throw new Error('Не авторизован');
    const data = await res.json();
    if (!data.authenticated) throw new Error('Не авторизован');

    // ПОЛЬЗОВАТЕЛЬ АВТОРИЗОВАН
    renderProfile(data.user);

    // Инициализация sidebar, гамбургера и overlay
    initSidebar();
  } catch (e) {
    window.location.href = '/log/';
  }
});

// ----------------------
// Функция рендера профиля
// ----------------------
function renderProfile(user) {
  const profileAvatar = document.getElementById('profileAvatar');
  const profileName = document.getElementById('profileName');

  if (!profileAvatar || !profileName) return;

  if (user.type === 'telegram') {
    profileAvatar.src = user.avatar || 'default-avatar.png';
    profileName.textContent = user.name || 'Telegram User';
  } else if (user.type === 'email') {
    profileAvatar.src = 'default-avatar.png';
    profileName.textContent = `id_${user.email_id}`;
  }
}

// ----------------------
// Инициализация гамбургера и sidebar
// ----------------------
function initSidebar() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  const menuLinks = document.querySelectorAll('.sidebar a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}
