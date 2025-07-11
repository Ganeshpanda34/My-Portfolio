   
        // Initialize AOS animations with reset on scroll
        AOS.init({
            duration: 1300,
            easing: 'ease-in-out-cubic',
            once: false,      // Allow animation to happen every time section enters viewport
            mirror: true,     // Animate out when scrolling past section
            offset: 60
        });

        // Initialize Particles.js
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4361ee"
                    },
                    "shape": {
                        "type": "polygon",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                       
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#4361ee",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }

        // Add this after your hero section particles.js initialization
        if (typeof particlesJS !== 'undefined') {
            particlesJS('footer-particles', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#4361ee"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#4361ee",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }

        // Typing Effect
        const typingElement = document.querySelector('.typing-text');
        const typingTexts = ["Passionate Frontend Developer", "Fresher UI Developer ", "Code Newbie (But Determined!)", "Responsive Web Designer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 1000;

        function typeText() {
            const currentText = typingTexts[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typingDelay = newTextDelay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                typingDelay = 500;
            }

            setTimeout(typeText, typingDelay);
        }

        // Start typing effect when page loads
        window.addEventListener('load', () => {
            if (typingElement) typeText();
        });

        // Initialize Skill Progress Bars
        function initSkillBars() {
            const progressBars = document.querySelectorAll('.progress-bar');

            progressBars.forEach(bar => {
                const percent = bar.style.width;
                setTimeout(() => {
                    bar.style.width = percent;
                }, 500);
            });
        }

        // Initialize progress bars when skills section is in view
        const skillsSection = document.getElementById('skills');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initSkillBars();
                    skillsObserver.disconnect(); // Only trigger once
                }
            });
        }, observerOptions);

        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }

        // DOM Elements
        const body = document.querySelector('body');
        const header = document.querySelector('header');
        const mobileMenuBtn = document.getElementById('hamburger-menu');
        const navLinks = document.querySelector('.nav-links');
        const lightBtn = document.querySelector('.light-btn');
        const darkBtn = document.querySelector('.dark-btn');
        const systemBtn = document.querySelector('.system-btn');
        const scrollTopBtn = document.querySelector('.scroll-top');
        const contactForm = document.getElementById('contactForm');
        const themeToggleContainer = document.querySelector('.theme-toggle-container');
        const themeDropdown = document.querySelector('.theme-toggle-dropdown');

        // Mobile Menu Toggle
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
            mobileMenuBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });

        // Close menu on nav link click (mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Theme Switching
        function setActiveTheme(theme) {
            if (theme === 'light') {
                body.classList.remove('dark-theme');
            } else if (theme === 'dark') {

                body.classList.add('dark-theme');
            }
            localStorage.setItem('theme', theme);
        }

        document.querySelector('.light-mode-btn').addEventListener('click', () => {
            setActiveTheme('light');
        });

        document.querySelector('.dark-mode-btn').addEventListener('click', () => {
            setActiveTheme('dark');
        });

        // Check saved theme
        window.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setActiveTheme(savedTheme);
            }
        });

        // Scroll to Top Button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Header Shadow on Scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                header.style.boxShadow = 'var(--shadow)';
            } else {
                header.style.boxShadow = 'none';
            }
        });

        // Improved Contact Form Validation & UX
        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                let valid = true;

                // Clear previous errors
                contactForm.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('error', 'success');
                    group.querySelector('.error-message').textContent = '';
                });

                // Validate fields
                const name = contactForm.name.value.trim();
                const email = contactForm.email.value.trim();
                const subject = contactForm.subject.value.trim();
                const message = contactForm.message.value.trim();

                // Name
                if (name.length < 2) {
                    showError('name', 'Please enter your full name.');
                    valid = false;
                } else {
                    showSuccess('name');
                }

                // Email
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    showError('email', 'Please enter a valid email address.');
                    valid = false;
                } else {
                    showSuccess('email');
                }

                // Subject
                if (subject.length < 3) {
                    showError('subject', 'Please enter a subject.');
                    valid = false;
                } else {
                    showSuccess('subject');
                }

                // Message
                if (message.length < 8) {
                    showError('message', 'Message should be at least 10 characters.');
                    valid = false;
                } else {
                    showSuccess('message');
                }

                if (!valid) {
                    e.preventDefault(); // Only prevent if invalid
                    return;
                }

                // Show loading spinner (optional, for UX)
                const btn = contactForm.querySelector('.submit-btn');
                btn.classList.add('loading');
                btn.disabled = true;
                btn.querySelector('.btn-spinner').style.display = 'inline-block';

                // Do NOT call e.preventDefault() here if valid!
                // The form will submit to FormSubmit as intended
            });

            function showError(field, message) {
                const group = contactForm.querySelector(`#${field}`).closest('.form-group');
                group.classList.add('error');
                group.querySelector('.error-message').textContent = message;
            }
            function showSuccess(field) {
                const group = contactForm.querySelector(`#${field}`).closest('.form-group');
                group.classList.add('success');
            }
        }

        // Smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Typing effect for logo
        document.addEventListener('DOMContentLoaded', function () {
            const logo = document.getElementById('logo-typing');
            const logoText = "Ganesh";
            let i = 0;

            function typeLogo() {
                if (i <= logoText.length) {
                    logo.textContent = logoText.substring(0, i);
                    i++;
                    setTimeout(typeLogo, 550);
                } else {
                    logo.classList.add('typing-finished');
                }
            }
            typeLogo();
        });

        // Typing animation for contact-intro
        document.addEventListener('DOMContentLoaded', function () {
            const contactTyping = document.getElementById('contact-typing');
            const contactText = "I don't build websites – I craft magnetic digital experiences that pull users in and don't let go. Let's create something unforgettable⚡";
            let i = 0;

            function typeContact() {
                if (i <= contactText.length) {
                    contactTyping.textContent = contactText.substring(0, i);
                    i++;
                    setTimeout(typeContact, 110);
                } else {
                    contactTyping.classList.add('typing-finished');
                }
            }
            if (contactTyping) typeContact();
        });

        // Update footer year dynamically
        document.addEventListener('DOMContentLoaded', function () {
            const footerYear = document.getElementById('footer-year');
            if (footerYear) {
                footerYear.textContent = new Date().getFullYear();
            }
        });

        // Update the icon color/animation on theme change
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const themeToggleIcon = document.getElementById('theme-toggle-icon');
        const bodyEl = document.body;

        themeToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            // Toggle theme
            bodyEl.classList.toggle('dark-theme');
            localStorage.setItem('theme', bodyEl.classList.contains('dark-theme') ? 'dark' : 'light');
            themeToggleIcon.classList.toggle('dark', bodyEl.classList.contains('dark-theme'));
            // Hide the dropdown if open
            themeToggleContainer.classList.remove('active');
            themeDropdown.style.display = 'none';
        });

        // Optional: If you want to keep dropdown functionality elsewhere, 
        // you may want to handle its display separately.
        window.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.nav-links li').forEach((li, idx) => {
                li.style.opacity = '0';
                li.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    li.style.opacity = '1';
                    li.style.transform = 'translateY(0)';
                    // Make the wave slower and more natural
                    li.style.animation = `navWave 2s cubic-bezier(0.23,1,0.32,1) forwards`;
                    li.style.animationDelay = `${0.3 + idx * 0.35}s`;
                }, 100);
            });
        });
