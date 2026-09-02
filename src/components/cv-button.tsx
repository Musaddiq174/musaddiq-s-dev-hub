import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import cvAsset from "@/assets/Musaddiq-HussainResume.pdf.asset.json";

export const CV_URL = cvAsset.url;

export function DownloadCvButton({
  className,
  label = "Download CV",
}: {
  className?: string;
  label?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";

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
