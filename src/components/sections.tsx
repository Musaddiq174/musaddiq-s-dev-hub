import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-backend.jpg";
import { Reveal } from "./reveal";
import { DownloadCvButton } from "./cv-button";
import { certifications, experience, profile, skillGroups } from "@/data/portfolio";

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Github className="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Linkedin className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-glow relative scroll-mt-24 overflow-hidden">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" /> {profile.location}
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-primary sm:text-2xl">{profile.title}</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground sm:text-sm">
            Django &amp; REST APIs · Backend Development
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <DownloadCvButton className="px-5 py-3" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </a>
            <SocialLinks />
          </div>
        </div>

        <div className="relative">
          <div className="card-surface overflow-hidden p-2">
            <img
              src={heroImage}
              width={1280}
              height={960}
              alt="Illustration of Python backend code, REST API endpoints and connected databases"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">About</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Backend engineering with clean, maintainable code
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card-surface p-7">
          <Code2 className="h-6 w-6 text-primary" aria-hidden="true" />
          <p className="mt-4 leading-relaxed text-muted-foreground">{profile.about}</p>
        </Reveal>
        <Reveal delay={80} className="card-surface p-7">
          <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
          <h3 className="mt-4 text-lg font-semibold">{profile.education.degree}</h3>
          <p className="mt-1 text-muted-foreground">{profile.education.school}</p>
          <p className="mt-3 font-mono text-sm text-muted-foreground">{profile.education.period}</p>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{profile.education.location}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Skills</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Technical toolkit</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} as="div" className="h-full">
              <div className="card-surface card-lift h-full p-6">
                <h3 className="text-base font-semibold">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Experience</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Where I&apos;ve worked</h2>
      </Reveal>

      <ol className="mt-10 space-y-8 border-l border-border pl-6 sm:pl-8">
        {experience.map((job) => (
          <Reveal key={job.role} as="li" className="relative">
            <span
              className="absolute -left-[33px] top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-primary sm:-left-[41px]"
              aria-hidden="true"
            >
              <Briefcase className="h-3 w-3" />
            </span>
            <div className="card-surface p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-muted-foreground">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
                  {job.period}
                </span>
              </div>

              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1.5 text-sm font-semibold text-primary">
                <TrendingUp className="h-4 w-4" aria-hidden="true" /> {job.highlight}
              </p>

              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Certifications</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Verified coursework</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 60} as="div" className="h-full">
              <div className="card-surface card-lift flex h-full flex-col gap-4 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{c.platform}</p>
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Verify Certificate ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal className="hero-glow card-surface relative overflow-hidden p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Build Something Great
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Have a project, API, backend application, or development idea? I&apos;d be happy to
          discuss it.
        </p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" /> Email
            </dt>
            <dd className="mt-2 break-all text-sm font-medium">
              <a href={`mailto:${profile.email}`} className="hover:text-primary">
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" /> Phone
            </dt>
            <dd className="mt-2 text-sm font-medium">
              <a href={profile.phoneHref} className="hover:text-primary">
                {profile.phone}
              </a>
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" /> Location
            </dt>
            <dd className="mt-2 text-sm font-medium">{profile.location}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> Send Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
          </a>
          <DownloadCvButton className="px-5 py-3" />
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Junior Python Developer | Django &amp; REST APIs
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
