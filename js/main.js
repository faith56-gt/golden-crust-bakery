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
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}
function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  // Show button when user scrolls more than 300px
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  // When button is clicked, scroll to top smoothly
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
 btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

 if (isValid) {
      const successAlert = document.getElementById('formSuccess');
      if (successAlert) {
        successAlert.style.display = 'block';
        form.reset(); // Clear all form fields

        // Hide the success message after 4 seconds
        setTimeout(function () {
          successAlert.style.display = 'none';
        }, 4000);
      }
    }
  ;
