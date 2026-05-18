document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE RESPONSIVE HAMBURGER ACTION TABS
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
        
        // Auto close dropdown menu when users click on navigation links
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
            });
        });
    }

    // 2. PHOTO GALLERY PORFTOLIO FILTER SYSTEM ENGINE
    const filterTabs = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active style state from all other items
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetFilterValue = tab.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (targetFilterValue === 'all') {
                    item.style.display = 'block';
                } else if (item.classList.contains(targetFilterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 3. MOCK UP FORM SUBMISSION HANDLER
    const contactForm = document.getElementById('contact-msg-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Message sent! Prestige Customs will reach out shortly to secure your booking details.");
            contactForm.reset();
        });
    }
});