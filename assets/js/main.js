/*=============== SEARCH ===============*/
//Mendeklarasikan tiga variabel untuk tombol pencarian, dari ID HTML
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search__close');
const searchContent = document.getElementById('search-content');

/*===== SEARCH SHOW ===== */
/* Validate if constant exists */
//Saat tombol search diklik, maka akan menampilkan content search pada ID show-searh di HTML
if (searchButton) {
   searchButton.addEventListener('click', () => {
      searchContent.classList.add('show-search');
   });
}

/*===== SEARCH HIDDEN ===== */
/* Validate if constant exists */
//jika button close diklik, maka search konten yang ditampilkan akan di hapus
if (searchClose) {
   searchClose.addEventListener('click', () => {
      searchContent.classList.remove('show-search');
   });
}

/*=============== LOGIN ===============*/
//Mendeklarasikan tiga variabel untuk tombol login, dari ID HTML
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login__close');
const loginContent = document.getElementById('login-content');

/*===== LOGIN SHOW ===== */
/* Validate if constant exists */
if (loginButton) {
   loginButton.addEventListener('click', () => {
      loginContent.classList.add('show-login');
   });
}

/*===== LOGIN HIDDEN ===== */
/* Validate if constant exists */
if (loginClose) {
   loginClose.addEventListener('click', () => {
      loginContent.classList.remove('show-login');
   });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
   const header = document.getElementById('header');
   // Jika scroll
   this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
};
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
   loop: true,
   spaceBetween: -24,
   grabCursor: true,
   slidesPerView: 'auto',
   centeredSlides: true,

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },

   breakpoints: {
      1220: {
         spaceBetween: -32,
      },
   },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
   loop: true,
   spaceBetween: 16,
   grabCursor: true,
   slidesPerView: 'auto',
   centeredSlides: true,

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      1150: {
         slidesPerView: 4,
         centeredSlides: false,
      },
   },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
   loop: true,
   spaceBetween: 16,
   slidesPerView: 'auto',

   breakpoints: {
      1150: {
         slidesPerView: 3,
      },
   },
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
   loop: true,
   spaceBetween: 16,
   grabCursor: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',

   breakpoints: {
      1150: {
         slidesPerView: 3,
         centeredSlides: false,
      },
   },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
   const scrollup = document.getElementById('scroll-up');
   // Ketika scroll lebih tinggi dari 350 tinggi viewport, tambahkan kelas show-scroll ke tag a dengan kelas scroll up
   this.scrollY >= 350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
   const scrollDown = window.scrollY;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link');
      } else {
         sectionsClass.classList.remove('active-link');
      }
   });
};
window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Topik yang dipilih sebelumnya (jika dipilih pengguna)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Web dapatkan tema terkini yang dimiliki antarmuka dengan memvalidasi kelas dark-theme 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// Memvalidasi apakah pengguna sebelumnya memilih topik
if (selectedTheme) {
   // Jika validasi terpenuhi, akan ditanya apa masalahnya untuk mengetahui apakah akan mengaktifkan atau menonaktifkan tema gelap
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
   themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Aktifkan / nonaktifkan tema secara manual dengan tombol
themeButton.addEventListener('click', () => {
   // Tambahkan atau hapus tema gelap / icon theme
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);
   // Akan menyimpan tema dan ikon saat ini yang dipilih pengguna
   localStorage.setItem('selected-theme', getCurrentTheme());
   localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true, // Animasi Repeat
});

sr.reveal(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`);
sr.reveal(`.home__images`, { delay: 600 });
sr.reveal(`.services__card`, { interval: 100 });
sr.reveal(`.discount__data`, { origin: 'left' });
sr.reveal(`.discount__images`, { origin: 'right' });
