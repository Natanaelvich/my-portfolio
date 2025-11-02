// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Navegação mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
        
        // Fecha o menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // Header com scroll
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    // Adiciona classe at-top por padrão
    header.classList.add('at-top');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona/remove classe scrolled baseada no scroll
        if (scrollTop > 100) {
            header.classList.add('scrolled');
            header.classList.remove('at-top');
        } else if (scrollTop === 0) {
            header.classList.add('at-top');
            header.classList.remove('scrolled');
        } else {
            header.classList.remove('scrolled', 'at-top');
        }
        
        // Esconde/mostra header baseado na direção do scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Navegação suave para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fecha menu mobile se estiver aberto
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplica animação aos elementos
    const animateElements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Formulário de contato com EmailJS
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoader = submitBtn?.querySelector('.btn-loader');
    
    // Inicializar EmailJS (você precisa criar uma conta em https://www.emailjs.com/)
    // Substitua 'YOUR_PUBLIC_KEY' pelo seu Public Key do EmailJS
    // Exemplo: emailjs.init('abc123xyz');
    // Para usar, você precisa configurar:
    // 1. Criar conta no EmailJS (gratuito)
    // 2. Configurar um serviço de email (Gmail, Outlook, etc.)
    // 3. Criar um template de email
    // 4. Substituir 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' e inicializar com seu Public Key
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Pega os valores do formulário
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validação
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                showFormStatus('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormStatus('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Mostra loading
            setFormLoading(true);
            showFormStatus('', '');
            
            try {
                // Opção 1: Usar EmailJS (requer configuração)
                // Descomente e configure quando tiver EmailJS configurado:
                /*
                await emailjs.send(
                    'YOUR_SERVICE_ID',  // Substitua pelo seu Service ID
                    'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        to_email: 'taelima1997@gmail.com'
                    }
                );
                */
                
                // Opção 2: Fallback para mailto (temporário até configurar EmailJS)
                const emailBody = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`;
                const mailtoLink = `mailto:taelima1997@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
                
                // Abre o cliente de email padrão
                window.location.href = mailtoLink;
                
                // Simula sucesso (remover quando EmailJS estiver configurado)
                setTimeout(() => {
                    showFormStatus('Mensagem enviada com sucesso! Responderei em breve.', 'success');
                    contactForm.reset();
                    setFormLoading(false);
                }, 500);
                
                // Quando EmailJS estiver configurado, use isto:
                /*
                showFormStatus('Mensagem enviada com sucesso! Responderei em breve.', 'success');
                contactForm.reset();
                */
                
            } catch (error) {
                console.error('Erro ao enviar formulário:', error);
                showFormStatus('Erro ao enviar mensagem. Por favor, tente novamente ou envie diretamente para taelima1997@gmail.com', 'error');
            } finally {
                setFormLoading(false);
            }
        });
    }
    
    function showFormStatus(message, type) {
        if (!formStatus) return;
        
        formStatus.textContent = message;
        formStatus.className = 'form-status';
        
        if (type === 'success') {
            formStatus.classList.add('success');
        } else if (type === 'error') {
            formStatus.classList.add('error');
        }
        
        // Remove mensagem após 5 segundos
        if (message && type !== 'error') {
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }
    }
    
    function setFormLoading(loading) {
        if (!submitBtn || !btnText || !btnLoader) return;
        
        if (loading) {
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoader.style.display = 'inline-flex';
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
        } else {
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
        }
    }
    
    // Efeito de parallax no hero
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Contador animado para estatísticas
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        
        updateCounter();
    }
    
    // Observa as estatísticas para animar quando visíveis
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const number = entry.target;
                const target = parseInt(number.textContent);
                animateCounter(number, target);
                statsObserver.unobserve(number);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Efeito de hover nos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animação do título é feita apenas com CSS (sem layout shift)
    
    // Filtro de habilidades (opcional)
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove seleção anterior
            skillCategories.forEach(cat => cat.classList.remove('selected'));
            
            // Adiciona seleção atual
            this.classList.add('selected');
            
            // Aqui você pode adicionar lógica de filtro
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Mostra/esconde botão scroll to top
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidade do botão scroll to top
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efeito de hover nos links de navegação
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Adiciona classe ativa ao link da seção atual
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Adiciona estilos CSS para o link ativo
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: var(--primary-color) !important;
        }
        
        .nav-menu a.active::after {
            width: 100% !important;
        }
        
        .skill-category.selected {
            border: 2px solid var(--primary-color);
            transform: translateY(-5px);
        }
        
        .scroll-top-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
    
    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
    
    // Adiciona efeito de ripple nos botões
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Adiciona animação de ripple
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    console.log('Portfólio carregado com sucesso! 🚀');
});
