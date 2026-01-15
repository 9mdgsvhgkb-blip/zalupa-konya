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

function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days*24*60*60*1000);
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )'+name+'=([^;]+)'));
  return match ? match[2] : null;
}

function initProfile(user) {
  const profileAvatar = document.getElementById('profileAvatar');
  const profileName = document.getElementById('profileName');

  if (!profileAvatar || !profileName) return;

  if (user.type === 'telegram') {
    profileAvatar.src = user.avatar || 'default-avatar.png';
    profileName.textContent = user.name || 'Telegram User';
  } else if (user.type === 'email') {
    profileAvatar.src = 'default-avatar.png';

    let nickname = getCookie('email_nick');
    if (!nickname) {
      nickname = 'id_' + Math.floor(Math.random() * 1000000000);
      setCookie('email_nick', nickname);
    }

    profileName.textContent = nickname;
  }
}

const user = {
  type: 'email', 
  email: 'user@example.com',
  avatar: '', 
  name: ''    
};

initProfile(user);
