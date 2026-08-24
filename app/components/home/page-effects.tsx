"use client";

import { useEffect, type ReactNode } from "react";

export function PageEffects({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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

    const updateHeaderTheme = () => {
      if (!header) return;
      header.classList.add("header--on-dark");
      header.classList.remove("header--on-light");
    };

    let lastScrollTop = 0;

    if (header) {
      header.classList.add("at-top");
      updateHeaderTheme();
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
        behavior: prefersReducedMotion ? "auto" : "smooth",
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
        ".timeline-item, .skill-category, .project-card, .stat-item, .impact-card, .demo-card"
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
      if (!prefersReducedMotion) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(element);
      }
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
      if (!prefersReducedMotion) {
        statsObserver.observe(stat);
      }
    });

    const projectCards = Array.from(
      document.querySelectorAll<HTMLElement>(".project-card")
    );

    const handleCardEnter = function (this: HTMLElement) {
      if (prefersReducedMotion) return;
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
    scrollTopBtn.textContent = "↑";
    scrollTopBtn.className = "scroll-top-btn";
    scrollTopBtn.setAttribute("aria-label", "Voltar ao topo");
    scrollTopBtn.type = "button";
    scrollTopBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      left: auto;
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
      z-index: 100;
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
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    };

    window.addEventListener("scroll", handleScrollTopVisibility, {
      passive: true,
    });
    scrollTopBtn.addEventListener("click", handleScrollTopClick);

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".btn")
    );

    const handleButtonRipple = function (this: HTMLElement, event: MouseEvent) {
      if (prefersReducedMotion) return;
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

      let current = "home";

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

      updateHeaderTheme();

      navMenuLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.remove("active");
        if (href === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    handleUpdateActiveNav();

    window.addEventListener("scroll", handleUpdateActiveNav, { passive: true });

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
    };
  }, []);

  return <>{children}</>;
}
