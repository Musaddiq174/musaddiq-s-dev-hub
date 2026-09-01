import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Set CV_URL to your CV file once it is added (e.g. "/musaddiq-hussain-cv.pdf"
 * placed in the public/ folder). Left empty on purpose — no invented path.
 */
export const CV_URL = "";

export function DownloadCvButton({
  className,
  label = "Download CV",
}: {
  className?: string;
  label?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

  if (!CV_URL) {
    return (
      <button
        type="button"
        title="Add your CV PDF to the public folder and set CV_URL in src/components/cv-button.tsx"
        onClick={() =>
          alert(
            "CV file is not connected yet. Add your CV PDF to the project and set CV_URL in src/components/cv-button.tsx.",
          )
        }
        className={cn(base, "border border-border bg-card hover:bg-accent hover:text-accent-foreground", className)}
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
    );
  }

  return (
    <a
      href={CV_URL}
      download
      className={cn(base, "bg-primary text-primary-foreground hover:opacity-90", className)}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
