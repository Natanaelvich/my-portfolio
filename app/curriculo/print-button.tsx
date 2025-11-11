"use client";

export function PrintButton() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="resume-print-button">
      <button
        type="button"
        className="resume-print-button-trigger"
        onClick={handlePrint}
      >
        <i className="fas fa-print" aria-hidden="true" />
        Imprimir PDF
      </button>
    </div>
  );
}

