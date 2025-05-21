
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

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
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

    // Project category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectsGrid = document.getElementById('projects-grid');
    
    if (categoryButtons.length > 0 && projectsGrid) {
        // Sample projects data
        const projects = [
            {
                title: "Neural Network Framework",
                description: "A lightweight neural network library built from scratch",
                category: "Machine Learning",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80",
                tags: ["Python", "TensorFlow", "Deep Learning"]
            },
            {
                title: "Sentiment Analysis API",
                description: "RESTful API for real-time sentiment analysis",
                category: "NLP",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                tags: ["Flask", "NLP", "API Design"]
            },
            {
                title: "Object Detection System",
                description: "Real-time object detection for surveillance systems",
                category: "Computer Vision",
                image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                tags: ["Python", "OpenCV", "YOLO"]
            },
            {
                title: "Stock Prediction Model",
                description: "LSTM-based model for stock market prediction",
                category: "Data Science",
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                tags: ["Python", "Keras", "Time Series"]
            },
            {
                title: "Chatbot Framework",
                description: "Customizable framework for building intelligent chatbots",
                category: "NLP",
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
                tags: ["Python", "BERT", "Flask"]
            },
            {
                title: "Healthcare Data Analytics",
                description: "Machine learning for patient outcome prediction",
                category: "Data Science",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                tags: ["Python", "scikit-learn", "Pandas"]
            }
        ];
        
        // Initialize with all projects
        renderProjects(projects);
        
        // Add event listeners to filter buttons
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                
                // Update active button
                categoryButtons.forEach(btn => {
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline');
                });
                button.classList.remove('btn-outline');
                button.classList.add('btn-primary');
                
                // Filter projects
                const filteredProjects = category === 'All' 
                    ? projects 
                    : projects.filter(project => project.category === category);
                
                renderProjects(filteredProjects);
            });
        });
        
        // Function to render projects
        function renderProjects(projectsToRender) {
            projectsGrid.innerHTML = '';
            
            projectsToRender.forEach((project, index) => {
                const projectCard = document.createElement('div');
                projectCard.className = 'card glass-morphism overflow-hidden hover-card animate-fade-in';
                projectCard.style.animationDelay = `${index * 100}ms`;
                
                const tags = project.tags.map(tag => 
                    `<span class="px-2 py-1 bg-primary/10 rounded-full text-xs">${tag}</span>`
                ).join('');
                
                projectCard.innerHTML = `
                    <div class="relative">
                        <img 
                            src="${project.image}" 
                            alt="${project.title}" 
                            class="w-full h-48 object-cover"
                        >
                        <span class="absolute top-2 right-2 bg-primary/90 text-white px-3 py-1 rounded-full text-xs">
                            ${project.category}
                        </span>
                    </div>
                    <div class="p-5">
                        <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
                        <p class="text-muted-foreground text-sm mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${tags}
                        </div>
                    </div>
                `;
                
                projectsGrid.appendChild(projectCard);
            });
        }
    }

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submitButton = document.getElementById('submit-button');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="bi bi-hourglass"></i> Sending...';
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                formSuccess.classList.remove('hidden');
            }, 1500);
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear().toString();
    }

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
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
        .catch(error => console.error('Error with visitor counter:', error));
});
