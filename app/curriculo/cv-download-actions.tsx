import { PrintButton } from "./print-button";

export function CvDownloadActions() {
  return (
    <div className="cv-actions">
      <PrintButton />
      <a
        href="/natan-cv.pdf"
        download="Natanael-Silva-Lima-CV.pdf"
        className="cv-action-button"
      >
        PDF
      </a>
      <a
        href="/natan-cv-ats.txt"
        download="Natanael-Silva-Lima-CV-ATS.txt"
        className="cv-action-button cv-action-button--ats"
      >
        ATS (.txt)
      </a>
    </div>
  );
}
