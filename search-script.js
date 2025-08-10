// Search functionality for .top-navbar input field
// This script adds search capability to navigate to specific service cards

// Search data mapping for services
const searchData = {
    "plumbing": {
        keywords: ["plumbing", "plumber", "pipe", "leak", "drain", "faucet", "toilet", "water", "sewer", "plumbing card", "plumbing service repair"],
        page: "plumbing.html",
        cardId: "plumbing-services"
    },
    "electrical": {
        keywords: ["electrical", "electrician", "wiring", "light", "outlet", "switch", "circuit", "electrical card", "electrical service repair"],
        page: "electrical.html",
        cardId: "electrical-services"
    },
    "house cleaning": {
        keywords: ["house cleaning", "cleaning", "maid", "housekeeper", "clean", "tidy", "house cleaning card", "cleaning service"],
        page: "house-cleaning.html",
        cardId: "cleaning-services"
    },
    "bike repair": {
        keywords: ["bike repair", "bicycle", "cycle", "bike", "repair", "tire", "bike repair card", "bicycle service"],
        page: "bike-repair.html",
        cardId: "bike-repair-services"
    },
    "carpentry": {
        keywords: ["carpentry", "carpenter", "wood", "furniture", "cabinet", "carpentry card", "woodwork service"],
        page: "carpentry.html",
        cardId: "carpentry-services"
    },
    "car repair": {
        keywords: ["car repair", "automobile", "mechanic", "auto", "vehicle", "car repair card", "automotive service"],
        page: "car-repair.html",
        cardId: "car-repair-services"
    },
    "moving": {
        keywords: ["moving", "move", "movers", "relocation", "packing", "moving card", "moving service"],
        page: "moving.html",
        cardId: "moving-services"
    },
    "appliance": {
        keywords: ["appliance", "appliances", "fridge", "washing machine", "dryer", "appliance card", "appliance repair"],
        page: "appliance.html",
        cardId: "appliance-services"
    }
};

// Function to find matching service
function findMatchingService(query) {
    const lowerQuery = query.toLowerCase().trim();
    
    for (const [serviceKey, service] of Object.entries(searchData)) {
        for (const keyword of service.keywords) {
            if (lowerQuery.includes(keyword.toLowerCase())) {
                return service;
            }
        }
    }
    
    return null;
}

// Function to perform search
function performSearch(query) {
    const service = findMatchingService(query);
    
    if (service) {
        // Navigate to the service page with the card ID as anchor
        const targetUrl = `${service.page}#${service.cardId}`;
        window.location.href = targetUrl;
    } else {
        // Show no results message
        alert("No matching service found. Please try different keywords like 'plumbing', 'electrical', 'cleaning', etc.");
    }
}

// Initialize search functionality
function initializeSearch() {
    // Desktop search
    const desktopSearchInput = document.querySelector('.search-box input[type="text"]');
    const desktopSearchBtn = document.querySelector('.search-icon');
    
    // Mobile search
    const mobileSearchInput = document.querySelector('.mobile-search input[type="text"]');
    const mobileSearchBtn = document.querySelector('.search-btn');
    
    // Function to handle search
    function handleSearch(input) {
        const query = input.value.trim();
        if (query) {
            performSearch(query);
        }
    }
    
    // Event listeners for desktop
    if (desktopSearchInput) {
        desktopSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(desktopSearchInput);
            }
        });
    }
    
    if (desktopSearchBtn) {
        desktopSearchBtn.addEventListener('click', () => {
            if (desktopSearchInput) {
                handleSearch(desktopSearchInput);
            }
        });
    }
    
    // Event listeners for mobile
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(mobileSearchInput);
            }
        });
    }
    
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            if (mobileSearchInput) {
                handleSearch(mobileSearchInput);
            }
        });
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSearch();
    
    // Add IDs to service sections on service pages
    addServiceSectionIDs();
});

// Function to add IDs to service sections on service pages
function addServiceSectionIDs() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Map pages to their service section IDs
    const pageServiceMap = {
        'plumbing.html': 'plumbing-services',
        'electrical.html': 'electrical-services',
        'house-cleaning.html': 'cleaning-services',
        'bike-repair.html': 'bike-repair-services',
        'carpentry.html': 'carpentry-services',
        'car-repair.html': 'car-repair-services',
        'moving.html': 'moving-services',
        'appliance.html': 'appliance-services'
    };
    
    // Add ID to the main service section on each page
    if (pageServiceMap[currentPage]) {
        const serviceSection = document.querySelector('.service-section') || 
                              document.querySelector('.services-section') || 
                              document.querySelector('.main-content');
        if (serviceSection && !serviceSection.id) {
            serviceSection.id = pageServiceMap[currentPage];
        }
    }
}

// Scroll to specific service card when page loads with hash
window.addEventListener('load', () => {
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});

// Include the search data and functions in the main script
// This will be loaded after the main script.js
















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
    const loginButton = document.querySelector('.login');
    const signupButton = document.querySelector('.signup');

    // Ensure both buttons are initially visible in the auth-buttons container
    loginButton.style.display = 'block';
    signupButton.style.display = 'block';

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


















// DARK MODE





let toggleBtn = document.getElementById('dark-mode-toggle');
let icon = document.getElementById('theme-icon');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});






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