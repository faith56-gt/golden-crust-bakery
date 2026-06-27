
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
      localStorage.setItem('darkMode', 'enabled');
      toggleBtn.textContent = 'Light';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleBtn.textContent = 'Dark';
    }
  });
}


// 2. SET ACTIVE NAV LINK

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


// 3. BACK TO TOP BUTTON

function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


// 4. CONTACT FORM VALIDATION

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
      nameError.classList.add('show');
      nameError.textContent = 'Please enter your full name.';
      isValid = false;
    } else {
      nameError.classList.remove('show');
    }

    // Validate Email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.classList.add('show');
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.classList.remove('show');
    }

    // Validate Message
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (messageInput.value.trim().length < 10) {
      messageError.classList.add('show');
      messageError.textContent = 'Message must be at least 10 characters.';
      isValid = false;
    } else {
      messageError.classList.remove('show');
    }

    // If all valid show success message
    if (isValid) {
      const successAlert = document.getElementById('formSuccess');
      if (successAlert) {
        successAlert.style.display = 'block';
        form.reset();

        setTimeout(function () {
          successAlert.style.display = 'none';
        }, 4000);
      }
    }
  });
}


// 5. PRODUCT FILTER

function setupProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length === 0) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Remove active from all buttons
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });

      // Add active to clicked button
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-filter');
      const allCards = document.querySelectorAll('.product-card');

      allCards.forEach(function (card) {
        const cardCategory = card.getAttribute('data-category');

        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}


// RUN EVERYTHING WHEN PAGE LOADS

document.addEventListener('DOMContentLoaded', function () {
  setupDarkMode();
  setActiveNavLink();
  setupBackToTop();
  setupContactForm();
  setupProductFilter();
});