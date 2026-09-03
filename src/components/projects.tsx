import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Boxes,
  Brain,
  Check,
  Database,
  ExternalLink,
  Github,
  Server,
  Sparkles,
  X,
} from "lucide-react";
import { Reveal } from "./reveal";
import { projects, projectFilters, type Project } from "@/data/portfolio";

const accentClasses: Record<Project["accent"], string> = {
  emerald: "text-emerald-accent",
  cyan: "text-cyan-accent",
  violet: "text-violet-accent",
  amber: "text-amber-accent",
};

const accentBg: Record<Project["accent"], string> = {
  emerald: "bg-emerald-accent/10",
  cyan: "bg-cyan-accent/10",
  violet: "bg-violet-accent/10",
  amber: "bg-amber-accent/10",
};

function ProjectIcon({ project, className = "h-6 w-6" }: { project: Project; className?: string }) {
  if (project.filters.includes("AI")) return <Brain className={className} aria-hidden="true" />;
  if (project.filters.includes("Backend")) return <Server className={className} aria-hidden="true" />;
  if (project.filters.includes("Business Applications"))
    return <Boxes className={className} aria-hidden="true" />;
  return <Database className={className} aria-hidden="true" />;
}

function Preview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div
        className="relative h-40 overflow-hidden rounded-lg border border-border bg-card"
        role="img"
        aria-label={`${project.name} preview`}
      >
        <img
          src={project.image}
          alt={`${project.name} preview`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex h-40 items-center justify-center overflow-hidden rounded-lg border border-border ${accentBg[project.accent]}`}
      role="img"
      aria-label={`${project.name} preview`}
    >
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card ${accentClasses[project.accent]}`}
        >
          <ProjectIcon project={project} />
        </span>
        <span className="font-mono text-xs text-muted-foreground">{project.category}</span>
      </div>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground">
      {children}
    </span>
  );
}

function ProjectCard({
  project,
  onOpen,
  featured = false,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  featured?: boolean;
}) {
  return (
    <article
      className={`card-surface card-lift flex h-full flex-col gap-4 p-5 ${
        featured || project.core ? "ring-1 ring-primary/25" : ""
      }`}
    >
      <Preview project={project} />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          <p className={`mt-1 font-mono text-xs ${accentClasses[project.accent]}`}>
            {project.category}
          </p>
        </div>
        {project.core && (
          <span className="shrink-0 rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">
            Django / API
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 5).map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {project.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${accentClasses[project.accent]}`} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          View Project
        </button>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live Demo
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
        </a>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-border bg-card p-6 shadow-lg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className={`mt-1 font-mono text-xs ${accentClasses[project.accent]}`}>
              {project.category}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4">
          <Preview project={project} />
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        {project.metrics && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <li
                key={m}
                className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary"
              >
                {m}
              </li>
            ))}
          </ul>
        )}

        <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Key features
        </h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accentClasses[project.accent]}`} aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Technologies
        </h4>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        {project.note && (
          <p className="mt-5 rounded-lg border border-border bg-secondary p-3 text-xs text-muted-foreground">
            {project.note}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live Demo
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.filters.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Featured Projects</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          AI-focused interfaces I&apos;ve built
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Three modern AI-focused application interfaces, presented honestly as frontend
          prototypes.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70} as="div" className="h-full">
            <ProjectCard project={p} onOpen={setActive} featured />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">All Projects</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Backend, web and business applications
        </h2>
        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60} as="div" className="h-full">
            <ProjectCard project={p} onOpen={setActive} />
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-muted-foreground">No projects in this category.</p>
      )}

      <div className="card-surface mt-16 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="code" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" /> Code &amp; Development
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Explore my development work, backend projects, APIs, and applications on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/Musaddiq174"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Github className="h-4 w-4" aria-hidden="true" /> View GitHub Profile
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
