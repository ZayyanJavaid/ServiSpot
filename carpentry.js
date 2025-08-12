// Search functionality for .top-navbar input field
// This script adds search capability to navigate to specific service cards

// Search data mapping for services
const searchData = {
  "plumbing": {
        keywords: ["Plumbing", "Plumber", "Pipe", "Leak", "Drain", "Faucet", "Toilet", "Water", "Sewer", "Plumbing card", "Plumbing service repair", "Leaky faucet repair", "Leaking pipe fix", "Clogged drain cleaning", "Toilet repair", "Water heater installation", "Sewer line repair", "Drain cleaning", "Garbage disposal repair", "Sump pump installation"],
        page: "plumbing.html",
        cardId: "plumbing-services"
    },
    "electrical": {
        keywords: ["Electrical", "Electrician", "Wiring", "Light", "Outlet", "Switch", "Circuit", "Electrical card", "Electrical service repair", "Wiring repair", "Light fixture installation", "Outlet replacement", "Circuit breaker repair", "Ceiling fan installation", "Electrical panel upgrade", "Lighting installation", "Generator installation", "Surge protector installation", "Repair generator", "Circuit breaker repair", "Home rewiring", "Power outage fix", "Short circuit repair", "Faulty wiring", "Sparking outlet"],
        page: "electrical.html",
        cardId: "electrical-services"
    },
    "house cleaning": {
        keywords: ["House cleaning", "Cleaning", "Maid", "Housekeeper", "Clean", "Tidy", "House cleaning card", "Cleaning service", "Housekeeping service", "Deep cleaning", "Carpet cleaning", "Window washing", "Post-construction cleaning", "Move-in/move-out cleaning", "Office cleaning", "Janitorial service", "Spring cleaning", "Disinfection service"],
        page: "house-cleaning.html",
        cardId: "cleaning-services"
    },
    "bike repair": {
        keywords: ["Bike repair", "Bicycle", "Cycle", "Bike", "Repair", "Tire", "Bike repair card", "Bicycle service", "Bike maintenance", "Flat tire repair", "Brake adjustment", "Gear tuning", "Chain replacement", "Wheel truing", "Bike assembly", "Bike fitting", "Bike cleaning", "Bike tune-up"],
        page: "bike-repair.html",
        cardId: "bike-repair-services"
    },
    "carpentry": {
        keywords: ["Carpentry", "Carpenter", "Wood", "Furniture", "Cabinet", "Carpentry card", "Woodwork service", "Furniture assembly", "Cabinet installation", "Shelving", "Deck building", "Fence installation", "Custom woodwork", "Door installation", "Window framing", "Wood repair", "Trim work", "Wooden furniture restoration"],
        page: "carpentry.html",
        cardId: "carpentry-services"
    },
    "car repair": {
        keywords: ["Car repair", "Automobile", "Mechanic", "Auto", "Vehicle", "Car repair card", "Automotive service", "Engine repair", "Brake service", "Oil change", "Tire rotation", "Transmission repair", "Battery replacement", "Exhaust system repair", "Suspension service", "Cooling system repair", "Car diagnostics", "Vehicle maintenance"],
        page: "car-repair.html",
        cardId: "car-repair-services"
    },
    "moving": {
        keywords: ["Moving", "Move", "Movers", "Relocation", "Packing", "Moving card", "Moving service", "Local moving", "Long-distance moving", "Packing service", "Unpacking service", "Furniture assembly", "Storage solutions", "Office relocation", "Residential moving", "Piano moving", "Appliance moving", "Heavy item moving", "Moving truck rental"],
        page: "moving.html",
        cardId: "moving-services"
    },
    "appliance": {
        keywords: ["Appliance", "Appliances", "Fridge", "Washing machine", "Dryer", "Appliance card", "Appliance repair", "Toilet installation", "Sink installation", "Bathtub repair", "Shower head replacement", "Water softener installation", "Garbage disposal installation", "Dishwasher repair", "Water heater repair", "Faucet installation", "Pipe insulation", "Appliance installation", "Appliance maintenance", "Appliance troubleshooting"],
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

 


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const authButtons = document.querySelector('.auth-buttons');
    const loginButton = document.querySelector('.login');
    const signupButton = document.querySelector('.signup');
    
    // Ensure both buttons are initially visible in the auth-buttons container
    loginButton.style.display = 'block';
    signupButton.style.display = 'block';
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        authButtons.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !authButtons.contains(e.target)) {
            hamburger.classList.remove('active');
            authButtons.classList.remove('show');
        }
    });
});




// Add search functionality for mobile search

// Update search functionality for mobile search
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const mobileSearch = document.querySelector('.mobile-search');
    let isSearchOpen = false;

    searchIcon.addEventListener('click', function(e) {
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
    document.addEventListener('click', function(e) {
        if (isSearchOpen && !mobileSearch.contains(e.target) && !searchIcon.contains(e.target)) {
            isSearchOpen = false;
            mobileSearch.classList.remove('active');
            setTimeout(() => {
                mobileSearch.style.display = 'none';
            }, 200);
        }
    });

    // Prevent search from closing when clicking inside
    mobileSearch.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});





// Mobile search show/hide with transition
document.addEventListener('DOMContentLoaded', function() {
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
    document.addEventListener('click', function(e) {
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


    async function fetchData() {
  let response = await fetch("carpentry.json");
  let data = await response.json();

  let cardsHTML = '';
  data.forEach((card, index) => {
    cardsHTML += `
      <div class="card ${index >= 4 ? 'hidden' : ''}">
        <img src="${card.img}" alt="${card.name}" / class="card-img">
        <div class="card-content">
          <h3>${card.name}</h3>
          <p>${card.content}</p>
        </div>
      </div>
    `;
  });

  document.getElementById("cardsContainer").innerHTML = cardsHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchData().then(() => {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const cardsContainer = document.getElementById('cardsContainer');
    let showingAll = false;

    viewMoreBtn.addEventListener('click', () => {
      const cards = cardsContainer.querySelectorAll('.card');
      if (!showingAll) {
        // Show all cards with transition
        cards.forEach(card => {
          card.classList.remove('hidden');
          card.classList.add('visible');
        });
        viewMoreBtn.textContent = 'View Hide';
        showingAll = true;
      } else {
        // Hide cards beyond first 4 with transition
        cards.forEach((card, index) => {
          if (index >= 4) {
            card.classList.add('hidden');
            card.classList.remove('visible');
          }
        });
        viewMoreBtn.textContent = 'View More';
        showingAll = false;
      }
    });
  });
});





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
