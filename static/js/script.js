
document.addEventListener('DOMContentLoaded', () => {
    // Loading screen animation
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        loadingText.textContent = `Loading... ${Math.floor(progress)}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
    }, 200);

    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add/remove background when scrolling
        if (scrollTop > 50) {
            navbar.classList.add('glass-morphism');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('glass-morphism');
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2');
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && menuIcon && closeIcon) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add current year to footer
    const yearElem = document.getElementById('current-year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    // Projects data
    const projects = [
        {
            title: "Neural Language Model",
            category: "NLP",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad994",
            description: "Advanced language understanding model with state-of-the-art performance on multiple benchmarks.",
            technologies: ["PyTorch", "Transformers", "CUDA"],
            link: "#"
        },
        {
            title: "Computer Vision Pipeline",
            category: "Computer Vision",
            image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66",
            description: "Real-time object detection and classification system for industrial applications.",
            technologies: ["TensorFlow", "OpenCV", "Docker"],
            link: "#"
        },
        {
            title: "Predictive Analytics Dashboard",
            category: "Data Science",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            description: "Business intelligence platform with ML-driven forecasting capabilities.",
            technologies: ["Scikit-learn", "Pandas", "Plotly"],
            link: "#"
        },
        {
            title: "Reinforcement Learning Agent",
            category: "Machine Learning",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
            description: "Self-learning AI agent for optimizing complex systems through deep reinforcement learning.",
            technologies: ["TensorFlow", "Gym", "Ray"],
            link: "#"
        },
        {
            title: "Sentiment Analysis API",
            category: "NLP",
            image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387",
            description: "Real-time sentiment analysis of text data with high accuracy across multiple languages.",
            technologies: ["BERT", "FastAPI", "Redis"],
            link: "#"
        },
        {
            title: "Medical Image Diagnosis",
            category: "Computer Vision",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
            description: "Deep learning system for automated analysis of medical imaging to assist diagnosticians.",
            technologies: ["PyTorch", "U-Net", "DICOM"],
            link: "#"
        }
    ];

    // Populate projects grid
    const populateProjects = (filteredProjects) => {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        filteredProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card glass-morphism hover-card animate-fade-in overflow-hidden';
            projectCard.style.animationDelay = `${index * 100}ms`;
            
            projectCard.innerHTML = `
                <div class="relative aspect-video">
                    <img 
                        src="${project.image}" 
                        alt="${project.title}" 
                        class="w-full h-full object-cover"
                    >
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full">
                            ${project.category}
                        </span>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                    <p class="text-muted-foreground mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => 
                            `<span class="px-2 py-1 text-xs bg-secondary text-foreground rounded-full">${tech}</span>`
                        ).join('')}
                    </div>
                    <a 
                        href="${project.link}" 
                        class="text-primary hover:underline inline-flex items-center"
                    >
                        View Project <i class="bi bi-arrow-right ml-2"></i>
                    </a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    };

    // Initialize projects
    populateProjects(projects);

    // Handle category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button style
            categoryButtons.forEach(btn => {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline');
            });
            button.classList.remove('btn-outline');
            button.classList.add('btn-primary');
            
            // Filter projects
            const category = button.getAttribute('data-category');
            const filteredProjects = category === 'All' 
                ? projects 
                : projects.filter(project => project.category === category);
                
            populateProjects(filteredProjects);
        });
    });

    // View all projects button
    const viewAllBtn = document.getElementById('view-all-projects');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            // Reset category filter
            categoryButtons.forEach(btn => {
                if (btn.getAttribute('data-category') === 'All') {
                    btn.classList.remove('btn-outline');
                    btn.classList.add('btn-primary');
                } else {
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline');
                }
            });
            
            populateProjects(projects);
            
            // Scroll to projects section
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            const submitButton = document.getElementById('submit-button');
            if (submitButton) {
                submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Sending...';
                submitButton.disabled = true;
            }
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                if (formSuccess) formSuccess.classList.remove('hidden');
            }, 1500);
        });
    }

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Visitor counter
    fetch('/api/visitors')
        .then(response => response.json())
        .then(data => {
            // Log the visit
            fetch('/api/log-visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        })
        .catch(console.error);
});
