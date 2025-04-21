// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contactForm');
const bookingForm = document.getElementById('bookingForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Contact Form Data:', data);
        
        // Show success message
        alert('Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.');
        this.reset();
    });
}

if (bookingForm) {
    const successMessage = document.querySelector('.booking-success');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Booking Form Data:', data);
        
        // Show success message with animation
        successMessage.classList.add('show');
        
        // Reset form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    });
    
    // Add floating label effect
    const formGroups = bookingForm.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, select');
        const label = group.querySelector('label');
        
        input.addEventListener('focus', () => {
            label.style.top = '0';
            label.style.fontSize = '0.8rem';
            label.style.color = 'var(--primary-color)';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.style.top = '50%';
                label.style.fontSize = '1rem';
                label.style.color = '#666';
            }
        });
    });
}

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add styles for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        left: 30px;
        background-color: var(--primary-color);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 24px;
        z-index: 1000;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background-color 0.3s ease;
    }
    
    .scroll-to-top:hover {
        background-color: var(--dark-blue);
    }
`;
document.head.appendChild(style);

// Project data
const projects = {
    apartment: {
        title: "Apartemen Mewah",
        description: "Ruang hidup yang luas dengan finishing premium dan pemandangan menakjubkan. Apartemen ini dirancang untuk memberikan kenyamanan maksimal dengan desain modern dan elegan.",
        price: 1200000,
        originalPrice: 1500000,
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
            "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
        ],
        specs: [
            { icon: "fas fa-ruler-combined", text: "Luas: 75m² - 120m²" },
            { icon: "fas fa-bed", text: "2-3 Kamar Tidur" },
            { icon: "fas fa-bath", text: "2 Kamar Mandi" },
            { icon: "fas fa-couch", text: "Ruang Tamu + Ruang Makan" },
            { icon: "fas fa-utensils", text: "Dapur Modern" },
            { icon: "fas fa-door-open", text: "Balkon Pribadi" }
        ],
        facilities: [
            { icon: "fas fa-swimming-pool", text: "Kolam Renang Infinity" },
            { icon: "fas fa-dumbbell", text: "Gym 24 Jam" },
            { icon: "fas fa-tree", text: "Rooftop Garden" },
            { icon: "fas fa-parking", text: "Parkir Bawah Tanah" },
            { icon: "fas fa-shield-alt", text: "Security 24 Jam" },
            { icon: "fas fa-elevator", text: "Lift Premium" }
        ]
    },
    townhouse: {
        title: "Townhouse Modern",
        description: "Desain kontemporer dengan taman pribadi dan fasilitas modern. Townhouse ini menawarkan privasi dan kenyamanan dalam satu paket lengkap.",
        price: 2500000,
        originalPrice: 2800000,
        images: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
        ],
        specs: [
            { icon: "fas fa-ruler-combined", text: "Luas: 150m² - 200m²" },
            { icon: "fas fa-bed", text: "3-4 Kamar Tidur" },
            { icon: "fas fa-bath", text: "3 Kamar Mandi" },
            { icon: "fas fa-couch", text: "Ruang Keluarga" },
            { icon: "fas fa-utensils", text: "Dapur Modern" },
            { icon: "fas fa-tree", text: "Taman Pribadi" }
        ],
        facilities: [
            { icon: "fas fa-home", text: "Club House" },
            { icon: "fas fa-child", text: "Playground" },
            { icon: "fas fa-running", text: "Jogging Track" },
            { icon: "fas fa-parking", text: "Parkir Mobil + Motor" },
            { icon: "fas fa-shield-alt", text: "Security 24 Jam" },
            { icon: "fas fa-tree", text: "Taman Komunitas" }
        ]
    },
    suite: {
        title: "Suite Eksekutif",
        description: "Ruang hidup elegan yang sempurna untuk profesional dan keluarga kecil. Suite ini menawarkan kemewahan dan kenyamanan dalam satu paket.",
        price: 1800000,
        originalPrice: 2000000,
        images: [
            "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        ],
        specs: [
            { icon: "fas fa-ruler-combined", text: "Luas: 100m² - 150m²" },
            { icon: "fas fa-bed", text: "2-3 Kamar Tidur" },
            { icon: "fas fa-bath", text: "2 Kamar Mandi" },
            { icon: "fas fa-briefcase", text: "Ruang Kerja" },
            { icon: "fas fa-utensils", text: "Dapur Modern" },
            { icon: "fas fa-door-open", text: "Balkon Pribadi" }
        ],
        facilities: [
            { icon: "fas fa-concierge-bell", text: "Executive Lounge" },
            { icon: "fas fa-handshake", text: "Meeting Room" },
            { icon: "fas fa-building", text: "Business Center" },
            { icon: "fas fa-car", text: "Valet Parking" },
            { icon: "fas fa-concierge-bell", text: "Concierge Service" },
            { icon: "fas fa-dumbbell", text: "Fitness Center" }
        ]
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const detailButtons = document.querySelectorAll('.btn-detail');
    
    function updateModalContent(project) {
        const currentProject = projects[project];
        
        // Update images
        document.getElementById('modalMainImage').src = currentProject.images[0];
        document.getElementById('modalThumb1').src = currentProject.images[1];
        document.getElementById('modalThumb2').src = currentProject.images[2];
        document.getElementById('modalThumb3').src = currentProject.images[3];
        
        // Update text content
        document.getElementById('modalTitle').textContent = currentProject.title;
        document.getElementById('modalDescription').textContent = currentProject.description;
        
        // Update specs
        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = currentProject.specs.map(spec => `
            <li class="amenity-item">
                <i class="${spec.icon} amenity-icon"></i>
                <span>${spec.text}</span>
            </li>
        `).join('');
        
        // Update facilities
        const facilitiesList = document.getElementById('modalFacilities');
        facilitiesList.innerHTML = currentProject.facilities.map(facility => `
            <li class="amenity-item">
                <i class="${facility.icon} amenity-icon"></i>
                <span>${facility.text}</span>
            </li>
        `).join('');
    }

    // Add click events to thumbnail images
    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const mainImage = document.getElementById('modalMainImage');
            const clickedImage = this.querySelector('img');
            
            // Swap images
            const temp = mainImage.src;
            mainImage.src = clickedImage.src;
            clickedImage.src = temp;
        });
    });

    // Open modal
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectType = this.getAttribute('data-project');
            updateModalContent(projectType);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Promo Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const promoPopup = document.getElementById('promoPopup');
    const closePromo = document.querySelector('.close-promo');
    const promoForm = document.getElementById('promoForm');

    // Show popup when page loads
    setTimeout(() => {
        promoPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 2000); // Show after 2 seconds

    // Close popup
    closePromo.addEventListener('click', () => {
        promoPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === promoPopup) {
            promoPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle form submission
    if (promoForm) {
        promoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('promoName').value,
                email: document.getElementById('promoEmail').value,
                phone: document.getElementById('promoPhone').value
            };
            
            // Here you would typically send the data to your server
            console.log('Promo Form Data:', formData);
            
            // Show success message
            alert('Terima kasih! Tim kami akan segera menghubungi Anda.');
            
            // Close popup
            promoPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Reset form
            this.reset();
        });
    }
});

// News Detail Modal
const newsModal = document.getElementById('newsModal');
const modalNewsImage = document.getElementById('modalNewsImage');
const modalNewsTitle = document.getElementById('modalNewsTitle');
const modalNewsDate = document.getElementById('modalNewsDate');
const modalNewsDescription = document.getElementById('modalNewsDescription');
const modalNewsContent = document.getElementById('modalNewsContent');
const closeNewsModal = document.querySelector('#newsModal .close-modal');

// News data
const newsData = {
    'grand-opening': {
        title: 'Perayaan Grand Opening',
        date: '15 Maret 2024',
        description: 'Bergabunglah dengan kami dalam perayaan grand opening proyek perumahan mewah kami yang akan datang.',
        content: `
            <p>Kami dengan bangga mengundang Anda untuk menghadiri perayaan grand opening proyek perumahan mewah kami yang akan berlangsung pada tanggal 15 Maret 2024.</p>
            <p>Acara ini akan menampilkan:</p>
            <ul>
                <li>Tur properti eksklusif</li>
                <li>Presentasi fasilitas dan fitur</li>
                <li>Diskon khusus untuk pembelian hari itu</li>
                <li>Hiburan dan santapan mewah</li>
            </ul>
            <p>Jangan lewatkan kesempatan untuk menjadi salah satu penghuni pertama di kompleks perumahan mewah ini.</p>
        `
    },
    'promotion': {
        title: 'Promosi Khusus',
        date: '1 April 2024',
        description: 'Dapatkan penawaran khusus untuk pembelian unit di bulan April.',
        content: `
            <p>Dalam rangka menyambut bulan April, kami menawarkan promosi khusus untuk pembelian unit di proyek perumahan mewah kami.</p>
            <p>Penawaran meliputi:</p>
            <ul>
                <li>Diskon 10% untuk pembelian unit</li>
                <li>Gratis biaya administrasi</li>
                <li>Fasilitas tambahan senilai Rp 50 juta</li>
                <li>Program cicilan khusus</li>
            </ul>
            <p>Promosi ini berlaku hingga 30 April 2024. Segera hubungi kami untuk informasi lebih lanjut.</p>
        `
    },
    'community': {
        title: 'Acara Komunitas',
        date: '20 April 2024',
        description: 'Bergabunglah dengan acara komunitas kami yang akan datang.',
        content: `
            <p>Kami mengundang seluruh penghuni untuk bergabung dalam acara komunitas yang akan diadakan pada tanggal 20 April 2024.</p>
            <p>Acara ini akan menampilkan:</p>
            <ul>
                <li>Bazaar makanan dan minuman</li>
                <li>Pertunjukan seni dan budaya</li>
                <li>Kelas kebugaran dan yoga</li>
                <li>Workshop dan seminar</li>
            </ul>
            <p>Acara ini merupakan kesempatan bagus untuk berkenalan dengan tetangga dan menikmati fasilitas komunitas.</p>
        `
    }
};

// Add click event to news cards
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        const newsId = card.getAttribute('data-news-id');
        const news = newsData[newsId];
        
        if (news) {
            modalNewsImage.src = card.querySelector('img').src;
            modalNewsTitle.textContent = news.title;
            modalNewsDate.textContent = news.date;
            modalNewsDescription.textContent = news.description;
            modalNewsContent.innerHTML = news.content;
            
            newsModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close news modal when clicking close button
if (closeNewsModal) {
    closeNewsModal.addEventListener('click', () => {
        newsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close news modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === newsModal) {
        newsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Theme Switcher
const themeToggle = document.getElementById('checkbox');
const currentTheme = localStorage.getItem('theme');

// Check if theme was set previously
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('change', switchTheme); 