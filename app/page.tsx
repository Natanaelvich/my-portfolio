/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#experience", label: "Experiência" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const heroTechStack = [
  { icon: "fab fa-react", label: "React" },
  { icon: "fab fa-node-js", label: "Node.js" },
  { icon: "fas fa-mobile-alt", label: "React Native" },
  { icon: "fas fa-robot", label: "AI Agents" },
];

const aboutStats = [
  { value: "7+", label: "Anos de Experiência" },
  { value: "5+", label: "Empresas Atendidas" },
  { value: "3", label: "Posições de Liderança" },
  { value: "8+", label: "Projetos Desenvolvidos" },
];

const experienceEntries = [
  {
    title: "Desenvolvedor Fullstack & Tech Lead",
    company: "Grupo Abril",
    period: "Out 2023 - Presente",
    description:
      "Liderança técnica no desenvolvimento de aplicativos, sites e serviços que atendem milhões de usuários. Implementação de monitoramento ativo e deploy automatizado para App Store e Google Play.",
    techs: ["React Native", "Node.js", "Google Cloud", "AI Agents"],
  },
  {
    title: "Senior Software Engineer",
    company: "COAMO Agroindustrial",
    period: "Jul 2022 - Out 2023",
    description:
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor agroindustrial. Integração com Azure, criação de pipelines CI/CD e mentoria de desenvolvedores juniores.",
    techs: ["React Native", "Node.js", "Azure", "CI/CD"],
  },
  {
    title: "Frontend Developer React Native",
    company: "Control Tracker",
    period: "Nov 2020 - Jul 2023",
    description:
      "Desenvolvimento de aplicativos de rastreamento e gerenciamento de veículos com geolocalização em tempo real e mapas interativos.",
    techs: ["React Native", "Geolocalização", "Mapas", "Push Notifications"],
  },
  {
    title: "Tech Lead Frontend",
    company: "BNE - Banco Nacional de Empregos",
    period: "Abr 2021 - Mar 2023",
    description:
      "Atuação como Tech Lead, definindo arquitetura front-end e mentoria de desenvolvedores. Desenvolvimento de plataforma web e mobile para gestão de documentos.",
    techs: ["ReactJS", "React Native", "Azure", "CI/CD"],
  },
  {
    title: "Full Stack Developer",
    company: "Ideia Soluções em Sistemas",
    period: "Jun 2020 - Fev 2022",
    description:
      "Desenvolvimento de aplicativos mobile e sistemas web para o setor imobiliário. Criação de portais imobiliários, dashboards administrativos e aplicativos mobile integrados.",
    techs: ["ReactJS", "React Native", "PHP", "MySQL"],
  },
  {
    title: "Estagiário Frontend Developer",
    company: "CredVip",
    period: "Mar 2020 - Jul 2020",
    description:
      "Desenvolvimento de aplicação web de gerenciamento de tarefas com VueJS. Colaboração em UI/UX e implementação de componentes dinâmicos.",
    techs: ["VueJS", "PHP", "MySQL", "Git"],
  },
  {
    title: "Freelancer Full-stack Developer",
    company: "Mundo Tech",
    period: "Jul 2019 - Dez 2019",
    description:
      "Desenvolvimento de aplicativo mobile e sistema web de controle de estoque para negócio próprio. Sincronização entre app mobile e sistema web.",
    techs: ["ReactJS", "React Native", "Node.js", "ExpressJS"],
  },
];

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { icon: "fab fa-react", label: "React.js" },
      { icon: "fab fa-react", label: "React Native" },
      { icon: "fab fa-js", label: "JavaScript/TypeScript" },
      { icon: "fab fa-html5", label: "HTML5/CSS3" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "fab fa-node-js", label: "Node.js" },
      { icon: "fas fa-server", label: "NestJS" },
      { icon: "fas fa-database", label: "PostgreSQL" },
      { icon: "fas fa-code", label: "Express.js" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { icon: "fab fa-google", label: "Google Cloud" },
      { icon: "fab fa-microsoft", label: "Azure" },
      { icon: "fab fa-github", label: "GitHub Actions" },
      { icon: "fas fa-infinity", label: "CI/CD" },
    ],
  },
  {
    title: "AI & Automação",
    items: [
      { icon: "fas fa-robot", label: "AI Agents" },
      { icon: "fas fa-brain", label: "LangChain" },
      { icon: "fas fa-cogs", label: "N8N" },
      { icon: "fas fa-magic", label: "OpenAI API" },
      { icon: "fas fa-search", label: "RAG & Embeddings" },
      { icon: "fas fa-comments", label: "Claude AI" },
    ],
  },
];

const professionalProjects = [
  {
    image: "/projeto-abril.png",
    alt: "APPS Grupo Abril - Aplicativos Mobile",
    title: "APPS Grupo Abril",
    description:
      "Aplicativos mobile e serviços que atendem milhões de usuários com monitoramento ativo e alta disponibilidade.",
    techs: ["React Native", "Node.js", "Google Cloud"],
  },
  {
    image: "/projeto-coamo.png",
    alt: "APP Coamo Frete - Sistema de Gerenciamento de Frotas",
    title: "APP Coamo Frete",
    description:
      "Sistema de gerenciamento de frotas para o setor agroindustrial com integração Azure e monitoramento em tempo real.",
    techs: ["React Native", "Azure Functions", "SQL Database"],
  },
  {
    image: "/projeto-ctracker.png",
    alt: "APPS CTracker - Rastreamento de Veículos",
    title: "APPS CTracker",
    description:
      "Aplicativo de rastreamento de veículos com geolocalização em tempo real e mapas interativos.",
    techs: ["React Native", "Geolocalização", "Push Notifications"],
  },
  {
    image: "/projeto-bne-site.png",
    alt: "App Floox - Plataforma de Gestão de Documentos",
    title: "App Floox",
    description:
      "Plataforma web e mobile para coleta e gestão de documentos, solucionando dor crítica interna do BNE.",
    techs: ["ReactJS", "React Native", "Azure Repos"],
  },
  {
    image: "/projeto-ideia-ti.png",
    alt: "APPS Ideia TI - Portais Imobiliários e Dashboards",
    title: "APPS Ideia TI",
    description:
      "Portais imobiliários, dashboards administrativos e aplicativos mobile para o setor imobiliário.",
    techs: ["ReactJS", "React Native", "PHP", "MySQL"],
  },
  {
    image: "/projeto-bne-site.png",
    alt: "Site BNE - Plataforma Web de Empregos",
    title: "Site BNE",
    description:
      "Plataforma web completa para o Banco Nacional de Empregos, incluindo sistema de gestão de documentos e portal de vagas.",
    techs: ["ReactJS", "React Native", "Azure", "CI/CD"],
  },
  {
    image: "/projeto-ideia-ti-site.png",
    alt: "Site Ideia TI - Portal Imobiliário",
    title: "Site Ideia TI",
    description:
      "Portal web imobiliário com sistema de busca avançada, cadastro de imóveis e área administrativa completa.",
    techs: ["ReactJS", "PHP", "MySQL", "Responsivo"],
  },
  {
    image: "/projeto-planup.png",
    alt: "Site PLANUP - Gerenciamento de Tarefas",
    title: "Site PLANUP",
    description:
      "Aplicação web de gerenciamento de tarefas com interface dinâmica e componentes interativos.",
    techs: ["VueJS", "PHP", "MySQL", "Git"],
  },
  {
    image: "/projeto-estoque.png",
    alt: "Sistema de Estoque - App Mobile e Web",
    title: "Sistema de Estoque",
    description:
      "Aplicativo mobile e sistema web de controle de estoque com sincronização entre plataformas.",
    techs: ["ReactJS", "React Native", "Node.js", "ExpressJS"],
  },
];

const personalProjects = [
  {
    image: "/project1.png",
    alt: "Solunorde - Empresa de Tecnologia",
    title: "Solunorde",
    description:
      "Empresa de tecnologia oferecendo soluções inovadoras em software para impulsionar negócios e transformar visões em resultados excepcionais.",
    techs: ["Desenvolvimento Web", "Apps Mobile", "Consultoria TI", "Cloud & DevOps"],
    link: { href: "https://www.solunorde.com.br/", label: "Visitar Site" },
  },
  {
    image: "/project2.png",
    alt: "Gole A Gole - App de Hidratação",
    title: "Gole A Gole",
    description:
      "App para lembrar de beber água e manter-se hidratado facilmente. Solução mobile inovadora para saúde e bem-estar.",
    techs: ["React Native", "Lembretes", "Hidratação", "Saúde"],
    link: {
      href: "https://solunorde.com.br/sip-by-sip/",
      label: "Visitar Site",
    },
  },
  {
    image: "/project3.png",
    alt: "HabitUp - Rastreador de Hábitos",
    title: "HabitUp",
    description:
      "Transforme sua vida com o HabitUp: rastreie, desenvolva e celebre seus hábitos diários para maior produtividade.",
    techs: ["React Native", "Rastreamento", "Hábitos", "Produtividade"],
    link: { href: "https://solunorde.com.br/habitup/", label: "Visitar Site" },
  },
  {
    image: "/servico-local-website.png",
    alt: "Serviço Local - Plataforma de Busca",
    title: "Serviço Local",
    description:
      "Encontre e conecte-se com profissionais locais facilmente! Plataforma de busca com avaliações e conexões.",
    techs: ["React Native", "Busca Local", "Avaliações", "Conexão"],
    link: {
      href: "https://www.servicolocalapp.com.br/",
      label: "Visitar Site",
    },
  },
  {
    image: "/contali-website.png",
    alt: "Contali - Contabilidade via WhatsApp",
    title: "Contali",
    description:
      "Contabilidade eficiente pelo WhatsApp. Facilite a gestão contábil da sua empresa com suporte exclusivo via WhatsApp.",
    techs: ["Website", "WhatsApp", "Contabilidade", "Gestão Fiscal"],
    link: {
      href: "https://www.contaliservicoscontabeis.com.br/",
      label: "Visitar Site",
    },
  },
];

const aiProjects = [
  {
    image: "/ai-resume-analyzer-home.png",
    alt: "AI Resume Analyzer - Analisador de Currículos com IA",
    title: "AI Resume Analyzer",
    description:
      "Analisador inteligente de currículos com IA: upload de PDF, feedback ATS instantâneo e dicas de melhoria personalizadas.",
    techs: ["React", "Claude AI", "TypeScript", "Tailwind"],
    link: {
      href: "https://github.com/Natanaelvich/ai-resume-analyzer",
      label: "Ver no GitHub",
    },
  },
  {
    image: "/ai-marketplace-home.png",
    alt: "AI Smart Marketplace - E-commerce Inteligente",
    title: "AI Smart Marketplace",
    description:
      "Marketplace inteligente com IA: busca semântica, recomendações personalizadas e assistente virtual para e-commerce.",
    techs: ["Node.js", "TypeScript", "OpenAI", "PostgreSQL"],
    link: {
      href: "https://github.com/Natanaelvich/ai-smart-marketplace",
      label: "Ver no GitHub",
    },
  },
  {
    image: "/ai-ask-recorder-home.png",
    alt: "AI Ask Recorder Live - Sistema de Q&A para Eventos",
    title: "AI Ask Recorder Live",
    description:
      "Sistema full-stack de referência e Q&A para eventos com agentes inteligentes e ranking em tempo real.",
    techs: ["React", "Redis", "TypeScript", "PostgreSQL"],
    link: {
      href: "https://github.com/Natanaelvich/ai-ask-recorder-live_rocketseat-25",
      label: "Ver no GitHub",
    },
  },
];

const contactMethods = [
  {
    href: "mailto:taelima1997@gmail.com",
    label: "Email",
    value: "taelima1997@gmail.com",
    icon: "fas fa-envelope",
    className: "email",
    ariaLabel: "Enviar email",
  },
  {
    href: "https://linkedin.com/in/natanaelvich",
    label: "LinkedIn",
    value: "linkedin.com/in/natanaelvich",
    icon: "fab fa-linkedin",
    className: "linkedin",
    ariaLabel: "Abrir LinkedIn",
  },
  {
    href: "https://github.com/natanaelvich",
    label: "GitHub",
    value: "github.com/natanaelvich",
    icon: "fab fa-github",
    className: "github",
    ariaLabel: "Abrir GitHub",
  },
];

const footerSocialLinks = [
  {
    href: "https://linkedin.com/in/natanaelvich",
    icon: "fab fa-linkedin",
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://github.com/natanaelvich",
    icon: "fab fa-github",
    ariaLabel: "GitHub",
  },
  {
    href: "#",
    icon: "fab fa-twitter",
    ariaLabel: "Twitter",
  },
];

const footerLinks = [
  { href: "/sitemap", label: "Mapa do Site" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/#contact", label: "Contato" },
];

export default function HomePage() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const navToggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
    const navMenu = document.querySelector<HTMLUListElement>(".nav-menu");
    const header = document.querySelector<HTMLElement>(".header");

    const handleNavToggle = () => {
      if (!navMenu || !navToggle) return;
      const isActive = navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    };

    navToggle?.addEventListener("click", handleNavToggle);

    const navMenuLinks = Array.from(
      navMenu?.querySelectorAll<HTMLAnchorElement>("a") ?? []
    );

    const handleNavLinkClick = () => {
      if (!navMenu || !navToggle) return;
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navMenuLinks.forEach((link) =>
      link.addEventListener("click", handleNavLinkClick)
    );

    let lastScrollTop = 0;

    if (header) {
      header.classList.add("at-top");
    }

    const handleScroll = () => {
      if (!header) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        header.classList.add("scrolled");
        header.classList.remove("at-top");
      } else if (scrollTop === 0) {
        header.classList.add("at-top");
        header.classList.remove("scrolled");
      } else {
        header.classList.remove("scrolled");
        header.classList.remove("at-top");
      }

      if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const internalLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );

    const handleSmoothScroll = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href");
      if (!targetId) return;

      const targetSection = document.querySelector<HTMLElement>(targetId);
      if (!targetSection) return;

      const headerHeight = header?.offsetHeight ?? 0;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    };

    internalLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const animateElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".timeline-item, .skill-category, .project-card, .stat-item"
      )
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const animatedElement = entry.target;
          animatedElement.style.opacity = "1";
          animatedElement.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    animateElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(element);
    });

    const statNumbers = Array.from(
      document.querySelectorAll<HTMLElement>(".stat-item h3")
    );

    const animateCounter = (
      element: HTMLElement,
      target: number,
      duration = 2000
    ) => {
      let start = 0;
      const increment = target / (duration / 16);

      const updateCounter = () => {
        start += increment;
        if (start < target) {
          element.textContent = `${Math.floor(start)}+`;
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = `${target}+`;
        }
      };

      updateCounter();
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberElement = entry.target as HTMLElement;
            const targetValue = parseInt(numberElement.dataset.target ?? "0", 10);
            if (targetValue) {
              animateCounter(numberElement, targetValue);
            }
            statsObserver.unobserve(numberElement);
          }
        });
      },
      { threshold: 0.5 }
    );

    statNumbers.forEach((stat) => {
      const parsedValue = parseInt(stat.textContent ?? "0", 10);
      stat.dataset.target = Number.isNaN(parsedValue) ? "0" : `${parsedValue}`;
      statsObserver.observe(stat);
    });

    const projectCards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-card")
    );

    const handleCardEnter = function (this: HTMLElement) {
      this.style.transform = "translateY(-10px) scale(1.02)";
    };

    const handleCardLeave = function (this: HTMLElement) {
      this.style.transform = "translateY(0) scale(1)";
    };

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", handleCardEnter);
      card.addEventListener("mouseleave", handleCardLeave);
    });

    const skillCategoryElements = Array.from(
      document.querySelectorAll<HTMLElement>(".skill-category")
    );

    const handleCategoryClick = function (this: HTMLElement) {
      skillCategoryElements.forEach((category) =>
        category.classList.remove("selected")
      );
      this.classList.add("selected");
    };

    skillCategoryElements.forEach((category) =>
      category.addEventListener("click", handleCategoryClick)
    );

    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = "scroll-top-btn";
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

    const handleScrollTopVisibility = () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.visibility = "visible";
      } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.visibility = "hidden";
      }
    };

    const handleScrollTopClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScrollTopVisibility, {
      passive: true,
    });
    scrollTopBtn.addEventListener("click", handleScrollTopClick);

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".btn")
    );

    const handleButtonRipple = function (this: HTMLElement, event: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.className = "btn-ripple-effect";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.classList.add("btn-has-ripple");
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    buttons.forEach((button) =>
      button.addEventListener("click", handleButtonRipple)
    );

    const sectionsWithId = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    const handleUpdateActiveNav = () => {
      const scrollPosition = window.pageYOffset;
      const headerHeight = header?.offsetHeight ?? 0;

      let current = "";

      sectionsWithId.forEach((section) => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navMenuLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.remove("active");
        if (href === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleUpdateActiveNav, { passive: true });

    const contactForm =
      document.getElementById("contact-form") as HTMLFormElement | null;
    const formStatus =
      document.getElementById("form-status") as HTMLElement | null;
    const submitBtn =
      document.getElementById("submit-btn") as HTMLButtonElement | null;
    const btnLoader = submitBtn?.querySelector(
      ".btn-loader"
    ) as HTMLElement | null;

    const setFormLoading = (loading: boolean) => {
      if (!submitBtn || !btnLoader) return;
      if (loading) {
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        btnLoader.style.display = "flex";
        submitBtn.style.cursor = "not-allowed";
      } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove("loading");
        btnLoader.style.display = "none";
        submitBtn.style.cursor = "pointer";
      }
    };

    const showFormStatus = (message: string, type: "success" | "error" | "") => {
      if (!formStatus) return;

      formStatus.textContent = message;
      formStatus.className = "form-status";

      if (type === "success") {
        formStatus.classList.add("success");
      }
      if (type === "error") {
        formStatus.classList.add("error");
      }

      if (message && type !== "error") {
        setTimeout(() => {
          if (!formStatus) return;
          formStatus.textContent = "";
          formStatus.className = "form-status";
        }, 5000);
      }
    };

    const handleContactSubmit = async (event: Event) => {
      event.preventDefault();

      const nameInput = document.getElementById(
        "name"
      ) as HTMLInputElement | null;
      const emailInput = document.getElementById(
        "email"
      ) as HTMLInputElement | null;
      const subjectInput = document.getElementById(
        "subject"
      ) as HTMLInputElement | null;
      const messageInput = document.getElementById(
        "message"
      ) as HTMLTextAreaElement | null;

      if (!nameInput || !emailInput || !subjectInput || !messageInput) {
        return;
      }

      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
      };

      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        showFormStatus("Por favor, preencha todos os campos.", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showFormStatus("Por favor, insira um email válido.", "error");
        return;
      }

      setFormLoading(true);
      showFormStatus("", "");

      try {
        const emailBody = `Olá Natanael,

Meu nome é ${formData.name} e meu email é ${formData.email}.

${formData.message}

Atenciosamente,
${formData.name}`;

        const mailtoLink = `mailto:taelima1997@gmail.com?cc=${encodeURIComponent(
          formData.email
        )}&subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(emailBody)}`;

        const mailtoElement = document.createElement("a");
        mailtoElement.href = mailtoLink;
        mailtoElement.style.display = "none";
        document.body.appendChild(mailtoElement);
        mailtoElement.click();
        setTimeout(() => {
          document.body.removeChild(mailtoElement);
        }, 100);

        setTimeout(() => {
          showFormStatus(
            "Cliente de email aberto! Complete o envio no seu aplicativo de email.",
            "success"
          );
          contactForm?.reset();
          setFormLoading(false);
        }, 300);
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
        showFormStatus(
          "Erro ao enviar mensagem. Por favor, tente novamente ou envie diretamente para taelima1997@gmail.com",
          "error"
        );
      } finally {
        setFormLoading(false);
      }
    };

    contactForm?.addEventListener("submit", handleContactSubmit);

    const heroSection = document.querySelector<HTMLElement>(".hero");

    const handleHeroParallax = () => {
      if (!heroSection) return;
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroSection.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener("scroll", handleHeroParallax, { passive: true });

    return () => {
      navToggle?.removeEventListener("click", handleNavToggle);
      navMenuLinks.forEach((link) =>
        link.removeEventListener("click", handleNavLinkClick)
      );
      window.removeEventListener("scroll", handleScroll);
      internalLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
      observer.disconnect();
      statsObserver.disconnect();
      projectCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleCardEnter);
        card.removeEventListener("mouseleave", handleCardLeave);
      });
      skillCategoryElements.forEach((category) =>
        category.removeEventListener("click", handleCategoryClick)
      );
      window.removeEventListener("scroll", handleScrollTopVisibility);
      scrollTopBtn.removeEventListener("click", handleScrollTopClick);
      if (document.body.contains(scrollTopBtn)) {
        document.body.removeChild(scrollTopBtn);
      }
      buttons.forEach((button) =>
        button.removeEventListener("click", handleButtonRipple)
      );
      window.removeEventListener("scroll", handleUpdateActiveNav);
      contactForm?.removeEventListener("submit", handleContactSubmit);
      window.removeEventListener("scroll", handleHeroParallax);
    };
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Pular para conteúdo
      </a>
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h1>
              <i className="fas fa-code" aria-hidden="true" /> Natanael Lima
            </h1>
          </div>
          <ul className="nav-menu">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
            <li>
              <a
                href="/natan-cv.pdf"
                download="Natanael-Silva-Lima-CV.pdf"
                className="btn-cv"
              >
                <i className="fas fa-download" aria-hidden="true" /> Download CV
              </a>
            </li>
          </ul>
          <button
            className="nav-toggle"
            aria-label="Menu de navegação"
            aria-expanded="false"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main id="main">
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">Desenvolvedor Fullstack & Tech Lead</h1>
                <p className="hero-subtitle">
                  Especialista em React, React Native, Node.js e AI Agents
                </p>
                <p className="hero-description">
                  Transformo ideias em soluções digitais escaláveis, liderando equipes
                  técnicas e desenvolvendo aplicações que impactam milhões de usuários.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-secondary">
                    Ver Projetos
                  </a>
                  <a
                    href="/natan-cv.pdf"
                    download="Natanael-Silva-Lima-CV.pdf"
                    className="btn btn-cv"
                  >
                    <i className="fas fa-download" aria-hidden="true" /> Download CV
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="tech-stack">
                  {heroTechStack.map(({ icon, label }) => (
                    <div className="tech-item" key={label}>
                      <i className={icon} aria-hidden="true" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2 className="section-title">Sobre Mim</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  Sou um Tech Lead e Desenvolvedor Fullstack com mais de 7 anos de
                  experiência em desenvolvimento de software. Atualmente trabalho no
                  Grupo Abril, liderando o desenvolvimento de aplicativos e serviços
                  que atendem milhões de usuários.
                </p>
                <p>
                  Minha especialidade está em criar soluções mobile-first com React Native,
                  desenvolvendo aplicações offline-first, integrando mapas e câmeras, e
                  implementando sistemas de geolocalização em tempo real.
                </p>
                <p>
                  Como líder técnico, foco em mentoria de desenvolvedores, definição de
                  arquiteturas escaláveis e implementação de boas práticas de
                  desenvolvimento.
                </p>
              </div>
              <div className="about-stats">
                {aboutStats.map(({ value, label }) => (
                  <div className="stat-item" key={label}>
                    <h3>{value}</h3>
                    <p>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="container">
            <h2 className="section-title">Experiência Profissional</h2>
            <div className="timeline">
              {experienceEntries.map(
                ({ title, company, period, description, techs }) => (
                  <div className="timeline-item" key={`${title}-${company}`}>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{title}</h3>
                        <span className="company">{company}</span>
                        <span className="period">{period}</span>
                      </div>
                      <p className="timeline-description">{description}</p>
                      <div className="tech-tags">
                        {techs.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="container">
            <h2 className="section-title">Habilidades Técnicas</h2>
            <div className="skills-grid">
              {skillCategories.map(({ title, items }) => (
                <div className="skill-category" key={title}>
                  <h3>{title}</h3>
                  <div className="skill-items">
                    {items.map(({ icon, label }) => (
                      <div className="skill-item" key={label}>
                        <i className={icon} aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Projetos Profissionais</h2>
            <div className="projects-grid">
              {professionalProjects.map(
                ({ image, alt, title, description, techs }) => (
                  <div className="project-card" key={title}>
                    <div className="project-image">
                      <img src={image} alt={alt} loading="lazy" />
                    </div>
                    <div className="project-content">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className="project-tech">
                        {techs.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="personal-projects" className="personal-projects">
          <div className="container">
            <h2 className="section-title">Projetos Pessoais</h2>
            <div className="projects-grid">
              {personalProjects.map(
                ({ image, alt, title, description, techs, link }) => (
                  <div className="project-card" key={title}>
                    <div className="project-image">
                      <img src={image} alt={alt} loading="lazy" />
                    </div>
                    <div className="project-content">
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div className="project-tech">
                        {techs.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          {link.label}
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section id="ai-projects" className="ai-projects">
          <div className="container">
            <h2 className="section-title">Projetos de IA & Automação</h2>
            <div className="projects-grid">
              {aiProjects.map(({ image, alt, title, description, techs, link }) => (
                <div className="project-card" key={title}>
                  <div className="project-image">
                    <img src={image} alt={alt} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="project-tech">
                      {techs.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        {link.label}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-header">
              <h2 className="section-title">Entre em Contato</h2>
              <p className="contact-subtitle">
                Estou sempre aberto a novas oportunidades e parcerias interessantes. Vamos
                criar algo incrível juntos!
              </p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="fas fa-handshake" aria-hidden="true" />
                  </div>
                  <h3>Vamos Conversar!</h3>
                  <p>
                    Se você tem um projeto em mente ou gostaria de discutir possibilidades,
                    não hesite em entrar em contato. Estou pronto para transformar suas
                    ideias em realidade.
                  </p>
                </div>
                <div className="contact-methods">
                  {contactMethods.map(
                    ({ href, label, value, icon, className, ariaLabel }) => (
                      <a
                        key={label}
                        href={href}
                        className="contact-method"
                        aria-label={ariaLabel}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http") ? "noopener noreferrer" : undefined
                        }
                      >
                        <div className={`contact-method-icon ${className}`}>
                          <i className={icon} aria-hidden="true" />
                        </div>
                        <div className="contact-method-content">
                          <span className="contact-method-label">{label}</span>
                          <span className="contact-method-value">{value}</span>
                        </div>
                        <i className="fas fa-chevron-right contact-method-arrow" />
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="contact-form-wrapper">
                <div className="contact-form-header">
                  <h3>Envie uma Mensagem</h3>
                  <p>Preencha o formulário abaixo e entrarei em contato o mais rápido possível.</p>
                </div>
                <div className="contact-form">
                  <form id="contact-form">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Seu Nome"
                        required
                        aria-label="Seu nome"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Seu Email"
                        required
                        aria-label="Seu email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Assunto"
                        required
                        aria-label="Assunto da mensagem"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Sua Mensagem"
                        rows={5}
                        required
                        aria-label="Sua mensagem"
                      />
                    </div>
                    <div id="form-status" className="form-status" role="alert" aria-live="polite" />
                    <button type="submit" className="btn-submit" id="submit-btn">
                      <span className="btn-content">
                        <span className="btn-icon">
                          <i className="fas fa-paper-plane" aria-hidden="true" />
                        </span>
                        <span className="btn-text">Enviar Mensagem</span>
                      </span>
                      <span className="btn-loader" style={{ display: "none" }}>
                        <i className="fas fa-spinner fa-spin" aria-hidden="true" />
                        <span>Enviando...</span>
                      </span>
                      <span className="btn-ripple" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <p>&copy; 2025 Natanael Silva Lima. Todos os direitos reservados.</p>
              <div className="footer-social">
                {footerSocialLinks.map(({ href, icon, ariaLabel }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ariaLabel}
                  >
                    <i className={icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-links">
              {footerLinks.map(({ href, label }) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

