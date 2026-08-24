"use client";

import { Icon } from "@/app/components/svg-icon";

export function PrintButton() {
  return (
    <button
      type="button"
      className="print-button"
      onClick={() => window.print()}
      aria-label="Imprimir currículo em PDF"
    >
      <Icon name="fas fa-print" /> Imprimir PDF
    </button>
  );
}
