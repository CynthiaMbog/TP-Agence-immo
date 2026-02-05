// ================================
// Orée d'Afrique by Lori - JavaScript
// Premium African Artisanal Brand
// ================================

// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(61, 51, 40, 0.12)';
        navbar.style.padding = '1rem 0';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(61, 51, 40, 0.08)';
        navbar.style.padding = '1.5rem 0';
    }
    
    lastScroll = currentScroll;
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animation attribute
document.querySelectorAll('[data-animation]').forEach(el => {
    observer.observe(el);
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual backend call)
        setTimeout(() => {
            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.';
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
                formMessage.textContent = '';
            }, 5000);
            
            // Optional: Redirect to WhatsApp
            // window.open('https://wa.me/237XXX?text=' + encodeURIComponent('Bonjour, je vous contacte via le formulaire du site concernant: ' + formData.subject), '_blank');
        }, 1500);
    });
}

// ===== Product Card Hover Effect =====
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Gallery Item Click (Optional - could open lightbox) =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Add lightbox functionality here if needed
        console.log('Gallery item clicked');
    });
});

// ===== Scroll to Top on Page Load =====
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ===== WhatsApp Float Button Animation =====
const whatsappFloat = document.querySelector('.whatsapp-float');

if (whatsappFloat) {
    // Add pulse animation
    setInterval(() => {
        whatsappFloat.style.animation = 'none';
        setTimeout(() => {
            whatsappFloat.style.animation = 'pulse 1s ease-in-out';
        }, 10);
    }, 3000);
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);

// ===== Lazy Loading for Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Add active state to current page in navigation =====
const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});

// ===== Parallax Effect for Hero Section =====
const hero = document.querySelector('.hero');

if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ===== Smooth Reveal for Sections =====
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initial check
revealSections();

// Check on scroll
window.addEventListener('scroll', revealSections);

// ===== Animate Numbers (if you add statistics) =====
const animateNumber = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
};

// Usage: animateNumber(document.querySelector('.stat-number'), 1000);

// ===== Performance: Debounce scroll events =====
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy functions
const debouncedReveal = debounce(revealSections, 100);
window.addEventListener('scroll', debouncedReveal);

// ===== Console Message =====
console.log('%c🌿 Orée d\'Afrique by Lori 🌿', 'font-size: 20px; color: #8B6B47; font-weight: bold;');
console.log('%cL\'artisanat africain au service de votre beauté', 'font-size: 14px; color: #6B5D52;');
