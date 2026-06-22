function setupDarkMode() {
  const toggleBtn = document.getElementById('darkModeToggle');
  if (!toggleBtn) return; 

 
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = 'Light';
  }
  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled'); // Remember the choice
      toggleBtn.textContent = 'Light';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleBtn.textContent = 'Dark';
    }
  });
}