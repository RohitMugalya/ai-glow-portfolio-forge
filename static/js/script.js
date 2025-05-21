
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Loading screen logic
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('progress-bar');
  const loadingText = document.getElementById('loading-text');
  
  if (loadingScreen && progressBar && loadingText) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(interval);
        loadingText.textContent = 'Welcome!';
        
        setTimeout(() => {
          loadingScreen.style.opacity = '0';
          loadingScreen.style.pointerEvents = 'none';
        }, 500);
      }
    }, 100);
  }
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('glass-morphism');
        navbar.classList.remove('py-4');
        navbar.classList.add('py-2');
      } else {
        navbar.classList.remove('glass-morphism');
        navbar.classList.add('py-4');
        navbar.classList.remove('py-2');
      }
    });
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuBtn && mobileMenu && menuIcon && closeIcon) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
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
  
  // Fade-in animation on scroll
  const animateElements = document.querySelectorAll('.animate-fade-in');
  
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animateElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(element);
    });
  }
  
  // Projects section
  const projects = [
    {
      id: 1,
      title: "NeuralSpeech",
      description: "AI-powered speech recognition and synthesis platform with support for 20+ languages.",
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["NLP", "TensorFlow", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      category: "NLP",
      stars: 124
    },
    {
      id: 2,
      title: "Vision Analyzer",
      description: "Real-time object detection and scene understanding system for autonomous vehicles.",
      image: "https://images.unsplash.com/photo-1547962041-2d307a23108d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Computer Vision", "PyTorch", "C++"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
      stars: 89
    },
    {
      id: 3,
      title: "PredictX",
      description: "Time-series forecasting model for financial markets with 87% accuracy.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Machine Learning", "Data Science", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Science",
      stars: 67
    },
    {
      id: 4,
      title: "Sentiment Analyzer",
      description: "Advanced sentiment analysis tool for social media monitoring and brand insights.",
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["NLP", "Deep Learning", "Flask"],
      liveUrl: "#",
      githubUrl: "#",
      category: "NLP",
      stars: 103
    },
    {
      id: 5,
      title: "MedicalVision",
      description: "AI-assisted diagnosis system for medical imaging with 95% diagnostic accuracy.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Computer Vision", "Healthcare", "PyTorch"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Computer Vision",
      stars: 156
    },
    {
      id: 6,
      title: "DeepRecommender",
      description: "Personalized recommendation engine using deep learning for e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1505236732171-72a3d494cbe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      tags: ["Machine Learning", "TensorFlow", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Machine Learning",
      stars: 78
    }
  ];

  // Render projects
  const projectsGrid = document.getElementById('projects-grid');
  let activeCategory = "All";

  function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    const filteredProjects = activeCategory === "All" 
      ? projects 
      : projects.filter(project => project.category === activeCategory);
    
    filteredProjects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'card glass-morphism border-primary/10 hover-card animate-fade-in project-card';
      
      projectCard.innerHTML = `
        <div class="aspect-video w-full overflow-hidden">
          <img 
            src="${project.image}" 
            alt="${project.title}" 
            class="w-full h-full object-cover"
          >
        </div>
        
        <div class="p-4">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-medium">${project.title}</h3>
            <div class="flex items-center text-yellow-400">
              <i class="bi bi-star-fill"></i>
              <span class="text-sm ml-1">${project.stars}</span>
            </div>
          </div>
          <p class="text-muted-foreground text-sm mt-2">${project.description}</p>
          
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="badge">${tag}</span>`).join('')}
          </div>
          
          <div class="project-footer">
            <a href="${project.githubUrl}" class="btn btn-outline" style="padding: 0.25rem 0.75rem;">
              <i class="bi bi-github mr-2"></i> Code
            </a>
            <a href="${project.liveUrl}" class="btn btn-primary" style="padding: 0.25rem 0.75rem;">
              <i class="bi bi-box-arrow-up-right mr-2"></i> Demo
            </a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
    });
  }

  // Initial render
  renderProjects();

  // Category buttons
  const categoryButtons = document.querySelectorAll('.category-btn');
  if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        activeCategory = button.dataset.category;
        
        // Update buttons
        categoryButtons.forEach(btn => {
          if (btn.dataset.category === activeCategory) {
            btn.classList.remove('btn-outline');
            btn.classList.add('btn-primary');
          } else {
            btn.classList.add('btn-outline');
            btn.classList.remove('btn-primary');
          }
        });
        
        renderProjects();
      });
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const submitButton = document.getElementById('submit-button');
  
  if (contactForm && formSuccess && submitButton) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        
        // Reset form after 3 seconds
        setTimeout(() => {
          contactForm.reset();
          submitButton.innerHTML = '<i class="bi bi-send"></i> Send Message';
          submitButton.disabled = false;
          formSuccess.classList.add('hidden');
          contactForm.classList.remove('hidden');
        }, 3000);
      }, 1500);
    });
  }

  // View all projects button
  const viewAllProjectsBtn = document.getElementById('view-all-projects');
  if (viewAllProjectsBtn) {
    viewAllProjectsBtn.addEventListener('click', () => {
      activeCategory = "All";
      
      // Update buttons
      categoryButtons.forEach(btn => {
        if (btn.dataset.category === activeCategory) {
          btn.classList.remove('btn-outline');
          btn.classList.add('btn-primary');
        } else {
          btn.classList.add('btn-outline');
          btn.classList.remove('btn-primary');
        }
      });
      
      renderProjects();
    });
  }
  
  // API calls to Flask backend
  const logVisit = async () => {
    try {
      const response = await fetch('/api/log-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('Visit logged successfully');
        await getVisitorCount();
      } else {
        console.error('Error logging visit: Server returned', response.status);
      }
    } catch (error) {
      console.error('Error logging visit:', error);
    }
  };
  
  const getVisitorCount = async () => {
    try {
      const response = await fetch('/api/visitors');
      if (response.ok) {
        const data = await response.json();
        console.log(`Total visitors: ${data.count}`);
      } else {
        console.error('Error getting visitor count: Server returned', response.status);
      }
    } catch (error) {
      console.error('Error getting visitor count:', error);
    }
  };
  
  // Log visit when page loads
  logVisit();
});
