"use client";

import { useState, useEffect, useRef } from "react";
import { sendEmail, SendEmailResult } from "@/app/actions/send-email";
import { Icon } from "@/app/components/svg-icon";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Carregar script do reCAPTCHA v3
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) {
      console.warn("RECAPTCHA_SITE_KEY não configurada");
      return;
    }

    // Verificar se já foi carregado
    if (window.grecaptcha) {
      setIsRecaptchaLoaded(true);
      return;
    }

    // Carregar script do reCAPTCHA
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setIsRecaptchaLoaded(true);
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Limpar script ao desmontar (opcional)
      const existingScript = document.querySelector(
        `script[src*="recaptcha/api.js"]`
      );
      if (existingScript) {
        // Não remover para evitar recarregar em navegações
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpar status ao editar
    if (status.type) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Obter token do reCAPTCHA v3
      let recaptchaToken = "";

      if (RECAPTCHA_SITE_KEY && isRecaptchaLoaded && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(
            RECAPTCHA_SITE_KEY,
            { action: "submit_contact_form" }
          );
        } catch (error) {
          console.error("Erro ao executar reCAPTCHA:", error);
          setStatus({
            type: "error",
            message:
              "Erro ao validar segurança. Por favor, recarregue a página e tente novamente.",
          });
          setIsLoading(false);
          return;
        }
      } else if (RECAPTCHA_SITE_KEY && !isRecaptchaLoaded) {
        setStatus({
          type: "error",
          message:
            "Aguardando carregamento de segurança. Por favor, aguarde um momento e tente novamente.",
        });
        setIsLoading(false);
        return;
      }

      // Chamar server action
      const result: SendEmailResult = await sendEmail({
        ...formData,
        recaptchaToken,
      });

      if (result.success) {
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        formRef.current?.reset();
        // Mostrar modal de sucesso
        setShowSuccessModal(true);
      } else {
        setStatus({
          type: "error",
          message: result.error || result.message || "Erro ao enviar mensagem",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus({
        type: "error",
        message:
          "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Focus trap e foco inicial no modal
  useEffect(() => {
    if (!showSuccessModal) return;

    closeButtonRef.current?.focus();

    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    modal.addEventListener("keydown", handleTab);
    return () => modal.removeEventListener("keydown", handleTab);
  }, [showSuccessModal]);

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSuccessModal) {
        closeSuccessModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showSuccessModal]);

  // Prevenir scroll do body quando modal estiver aberta
  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSuccessModal]);

  return (
    <>
      <div className="contact-form-wrapper">
        <div className="contact-form-header">
          <h3>Envie uma Mensagem</h3>
          <p>
            Preencha o formulário abaixo e entrarei em contato o mais rápido
            possível.
          </p>
        </div>
        <div className="contact-form">
          <form ref={formRef} onSubmit={handleSubmit} id="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Seu nome"
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Seu email"
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Assunto da mensagem"
                disabled={isLoading}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Sua Mensagem"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Sua mensagem"
                disabled={isLoading}
              />
            </div>
            <div
              id="form-status"
              className={`form-status ${status.type}`}
              role="alert"
              aria-live="polite"
            >
              {status.message}
            </div>
            <button
              type="submit"
              className={`btn-submit ${isLoading ? "loading" : ""}`}
              id="submit-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="btn-loader" style={{ display: "flex" }}>
                  <Icon name="fas fa-spinner" spin />
                  <span>Enviando...</span>
                </span>
              ) : (
                <span className="btn-content">
                  <span className="btn-icon">
                    <Icon name="fas fa-paper-plane" />
                  </span>
                  <span className="btn-text">Enviar Mensagem</span>
                </span>
              )}
              <span className="btn-ripple" />
            </button>
          </form>
        </div>
      </div>

      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={closeSuccessModal}>
          <div
            className="success-modal"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="success-modal-title"
            aria-modal="true"
          >
            <button
              className="success-modal-close"
              ref={closeButtonRef}
              onClick={closeSuccessModal}
              aria-label="Fechar modal"
            >
              <Icon name="fas fa-times" />
            </button>
            <div className="success-modal-content">
              <div className="success-modal-icon">
                <div className="success-checkmark-circle">
                  <Icon name="fas fa-check" />
                </div>
              </div>
              <h2 id="success-modal-title" className="success-modal-title">
                Mensagem Enviada!
              </h2>
              <p className="success-modal-message">
                Obrigado pelo contato! Recebi sua mensagem e entrarei em contato
                o mais rápido possível.
              </p>
              <button
                className="success-modal-button"
                onClick={closeSuccessModal}
              >
                <Icon name="fas fa-check" />
                <span>Entendi</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

