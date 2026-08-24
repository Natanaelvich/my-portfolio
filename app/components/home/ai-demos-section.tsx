"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/app/components/svg-icon";
import type { AiDemo } from "@/content/extras";

interface AiDemosSectionProps {
  demos: AiDemo[];
}

export function AiDemosSection({ demos }: AiDemosSectionProps) {
  const [activeDemoId, setActiveDemoId] = useState(demos[0]?.id ?? "");
  const [slideIndex, setSlideIndex] = useState(0);

  const activeDemo = demos.find((demo) => demo.id === activeDemoId) ?? demos[0];
  if (!activeDemo) return null;

  const slides = activeDemo.slides;
  const currentSlide = slides[slideIndex] ?? slides[0];

  const selectDemo = (id: string) => {
    setActiveDemoId(id);
    setSlideIndex(0);
  };

  const nextSlide = () => {
    setSlideIndex((index) => (index + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((index) => (index - 1 + slides.length) % slides.length);
  };

  return (
    <section id="ai-demos" className="ai-demos">
      <div className="container">
        <h2 className="section-title">Demos dos Projetos de IA</h2>
        <p className="section-subtitle">
          Walkthrough visual dos projetos. Vídeos Loom podem ser configurados via variáveis
          de ambiente.
        </p>

        <div className="demo-tabs">
          {demos.map((demo) => (
            <button
              key={demo.id}
              type="button"
              className={`demo-tab${demo.id === activeDemo.id ? " active" : ""}`}
              onClick={() => selectDemo(demo.id)}
            >
              {demo.title}
            </button>
          ))}
        </div>

        <div className="demo-card">
          <div className="demo-media">
            {activeDemo.loomEmbedUrl ? (
              <iframe
                src={activeDemo.loomEmbedUrl}
                title={`Demo em vídeo: ${activeDemo.title}`}
                allowFullScreen
                className="demo-loom-embed"
              />
            ) : (
              <div className="demo-slideshow">
                {currentSlide && (
                  <Image
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    width={960}
                    height={540}
                    className="demo-slide-image"
                    sizes="(max-width: 768px) 100vw, 960px"
                  />
                )}
                {slides.length > 1 && (
                  <div className="demo-slideshow-controls">
                    <button type="button" onClick={prevSlide} aria-label="Slide anterior">
                      <Icon name="fas fa-chevron-left" />
                    </button>
                    <span>
                      {slideIndex + 1} / {slides.length}
                    </span>
                    <button type="button" onClick={nextSlide} aria-label="Próximo slide">
                      <Icon name="fas fa-chevron-right" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="demo-details">
            <h3>{activeDemo.title}</h3>
            <p>{activeDemo.description}</p>
            <a
              href={activeDemo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span className="btn-leading" aria-hidden="true">
                <Icon name="fab fa-github" />
              </span>
              <span className="btn-label">Ver código no GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
