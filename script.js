// Add smooth scroll for service navbar
const serviceNavbar = document.querySelector('.service-navbar');
let isDown = false;
let startX;
let scrollLeft;

serviceNavbar.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - serviceNavbar.offsetLeft;
    scrollLeft = serviceNavbar.scrollLeft;
});

serviceNavbar.addEventListener('mouseleave', () => {
    isDown = false;
});

serviceNavbar.addEventListener('mouseup', () => {
    isDown = false;
});

serviceNavbar.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - serviceNavbar.offsetLeft;
    const walk = (x - startX);
    serviceNavbar.scrollLeft = scrollLeft - walk;
});

// Add touch scroll support
serviceNavbar.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - serviceNavbar.offsetLeft;
    scrollLeft = serviceNavbar.scrollLeft;
});

serviceNavbar.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - serviceNavbar.offsetLeft;
    const walk = (x - startX);
    serviceNavbar.scrollLeft = scrollLeft - walk;
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const authButtons = document.querySelector('.auth-buttons');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        authButtons.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !authButtons.contains(e.target)) {
            hamburger.classList.remove('active');
            authButtons.classList.remove('show');
        }
    });
});




// Add search functionality for mobile search

// Update search functionality for mobile search
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const mobileSearch = document.querySelector('.mobile-search');
    let isSearchOpen = false;

    searchIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        isSearchOpen = !isSearchOpen;

        // Toggle visibility with smooth transition
        if (isSearchOpen) {
            mobileSearch.style.display = 'block';
            // Use setTimeout to ensure display:block is applied before adding active class
            setTimeout(() => {
                mobileSearch.classList.add('active');
                document.querySelector('.scnd-search-box').focus();
            }, 10);
        } else {
            mobileSearch.classList.remove('active');
            // Wait for transition to complete before hiding
            setTimeout(() => {
                mobileSearch.style.display = 'none';
            }, 300); // Match this with CSS transition duration
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', function (e) {
        if (isSearchOpen && !mobileSearch.contains(e.target) && !searchIcon.contains(e.target)) {
            isSearchOpen = false;
            mobileSearch.classList.remove('active');
            setTimeout(() => {
                mobileSearch.style.display = 'none';
            }, 200);
        }
    });

    // Prevent search from closing when clicking inside
    mobileSearch.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});






// Mobile search show/hide with transition
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchWrapper = document.querySelector('.mobile-search .search-wrapper');
    // For color toggle
    function toggleMobileSearch() {
        searchIcon.classList.toggle('active');
        searchWrapper.classList.toggle('active');
    }
    if (searchIcon && searchWrapper) {
        searchIcon.addEventListener('click', toggleMobileSearch);
        // Optional: Hide search on outside click
        document.addEventListener('click', function (e) {
            if (
                searchWrapper.classList.contains('active') &&
                !searchWrapper.contains(e.target) &&
                !searchIcon.contains(e.target)
            ) {
                searchWrapper.classList.remove('active');
                searchIcon.classList.remove('active');
            }
        });
    }
});



// Image Slider Functionality
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

showSlide(currentIndex);





// ANIMATION TEXT AND IMG SLIDE 

const cardContents = document.querySelectorAll('.animation');
const reveal = () => {
    cardContents.forEach(content => {
        const rect = content.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40) {
            content.classList.add('visible');
        }
    });
};
reveal();
window.addEventListener('scroll', reveal);


















// DARK MODE - Persistent across pages using localStorage
function initDarkMode() {
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const icon = document.getElementById('theme-icon');
    
    if (!toggleBtn || !icon) return;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    const isDarkMode = savedTheme === 'enabled';
    
    // Apply saved theme
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        document.body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Toggle theme and save preference
    toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        
        if (isDark) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', initDarkMode);







// function toggleTheme(iconElement) {
//   document.body.classList.toggle('dark-mode');

//   if (document.body.classList.contains('dark-mode')) {
//     iconElement.classList.remove('fa-sun');
//     iconElement.classList.add('fa-moon');
//   } else {
//     iconElement.classList.remove('fa-moon');
//     iconElement.classList.add('fa-sun');
//   }
// }


// // Attach events to both icons
// document.getElementById('theme-toggle-desktop').addEventListener('click', () => {
//   toggleTheme(document.getElementById('theme-icon-desktop'));
// });

// document.getElementById('theme-toggle-mobile').addEventListener('click', () => {
//   toggleTheme(document.getElementById('theme-icon-mobile'));
// });





//  function toggleTheme(iconElement) {
//   document.body.classList.toggle('dark-mode');

//   if (document.body.classList.contains('dark-mode')) {
//     iconElement.classList.remove('fa-sun');
//     iconElement.classList.add('fa-moon');
//   } else {
//     iconElement.classList.remove('fa-moon');
//     iconElement.classList.add('fa-sun');
//   }
// }


// // Attach events to both icons
// document.addEventListener('DOMContentLoaded', function() {
//   const desktopToggleBtn = document.getElementById('dark-mode-toggle-desktop');
//   const desktopIcon = document.getElementById('theme-icon-desktop');
//   const mobileToggleBtn = document.getElementById('dark-mode-toggle-mobile');
//   const mobileIcon = document.getElementById('theme-icon-mobile');

//   if (desktopToggleBtn && desktopIcon) {
//     desktopToggleBtn.addEventListener('click', () => {
//       toggleTheme(desktopIcon);
//     });
//   }

//   if (mobileToggleBtn && mobileIcon) {
//     mobileToggleBtn.addEventListener('click', () => {
//       toggleTheme(mobileIcon);
//     });
//   }
// });





















//  const lastScrollTop = 0;
//  navbar = document.getElementById("scroll");
//  window.addEventListener("scroll", function() {
//   let ScrollTop = this.window.pageYOffset || document
//   .documentElement.scrollTop;
//   if (ScrollTop > lastScrollTop) {
//     navbar.classList.add("scroll-up");
//   } else {
//     navbar.classList.remove("scroll-up");
//   }
//   lastScrollTop = ScrollTop;
// });