
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loading screen animation
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');
    const loadingText = document.getElementById('loading-text');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            loadingText.textContent = 'Welcome!';
            
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
    }, 200);
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-morphism');
        } else {
            navbar.classList.remove('glass-morphism');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu when a link is clicked
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submitButton = document.getElementById('submit-button');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable submit button
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="bi bi-hourglass"></i> Sending...';
            }
            
            // Simulate form submission delay
            setTimeout(() => {
                contactForm.style.display = 'none';
                if (formSuccess) formSuccess.classList.remove('hidden');
                
                // Log visit using the API
                fetch('/api/log-visit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .catch(error => console.error('Error logging visit:', error));
            }, 1500);
        });
    }
    
    // Update year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
    
    // Projects data
    const projects = [
        {
            id: 1,
            title: "Neural Network for Image Classification",
            description: "A deep learning model that classifies images with 98% accuracy using PyTorch and transfer learning.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Computer Vision",
            tags: ["PyTorch", "CNN", "Transfer Learning"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: 2,
            title: "Sentiment Analysis API",
            description: "A REST API that analyzes sentiment in text using BERT and provides emotion classification.",
            image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "NLP",
            tags: ["Flask", "BERT", "Transformers"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: 3,
            title: "Stock Prediction Model",
            description: "Time series forecasting model for stock prices using LSTM networks and financial indicators.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Data Science",
            tags: ["TensorFlow", "LSTM", "Time Series"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: 4,
            title: "Autonomous Drone Navigation",
            description: "AI system for drone navigation in complex environments using reinforcement learning.",
            image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Computer Vision",
            tags: ["Python", "OpenCV", "Reinforcement Learning"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: 5,
            title: "Chatbot with GPT Integration",
            description: "An intelligent chatbot that leverages GPT models to provide contextual responses.",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "NLP",
            tags: ["OpenAI", "Flask", "React"],
            github: "https://github.com",
            demo: "#"
        },
        {
            id: 6,
            title: "Predictive Maintenance System",
            description: "ML system that predicts equipment failures before they occur using sensor data.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Machine Learning",
            tags: ["Python", "scikit-learn", "Time Series"],
            github: "https://github.com",
            demo: "#"
        }
    ];
    
    // Populate projects grid
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        // Initialize with all projects
        populateProjects(projects);
        
        // Category filtering
        const categoryButtons = document.querySelectorAll('.category-btn');
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                categoryButtons.forEach(btn => {
                    btn.classList.remove('btn-primary');
                    btn.classList.add('btn-outline');
                });
                this.classList.remove('btn-outline');
                this.classList.add('btn-primary');
                
                // Filter projects
                const category = this.getAttribute('data-category');
                const filtered = category === 'All' ? projects : projects.filter(project => project.category === category);
                populateProjects(filtered);
            });
        });
    }
    
    // Function to populate projects
    function populateProjects(projectsArray) {
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = '';
        
        projectsArray.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'card glass-morphism project-card hover-card animate-fade-in';
            projectCard.style.animationDelay = `${index * 100}ms`;
            
            projectCard.innerHTML = `
                <div class="relative">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 right-2 bg-background/80 rounded-full px-3 py-1 text-xs backdrop-blur-sm">
                        ${project.category}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                    <p class="text-muted-foreground mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `
                            <span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    <div class="flex justify-between">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-primary transition-colors">
                            <i class="bi bi-github"></i> Code
                        </a>
                        <a href="${project.demo}" class="text-muted-foreground hover:text-primary transition-colors">
                            <i class="bi bi-arrow-right"></i> Demo
                        </a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Get visitor count
    fetch('/api/visitors')
        .then(response => response.json())
        .then(data => {
            console.log('Current visitors:', data.count);
        })
        .catch(error => console.error('Error fetching visitor count:', error));
});
