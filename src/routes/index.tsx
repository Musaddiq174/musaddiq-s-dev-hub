import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { About, Certifications, Contact, Experience, Footer, Hero, Skills } from "@/components/sections";
import { ProjectsSection } from "@/components/projects";

const title = "Musaddiq Hussain | Junior Python Developer | Django & REST APIs";
const description =
  "Portfolio of Musaddiq Hussain, a Junior Python Developer specializing in Python, Django, RESTful APIs, backend development, databases, and modern web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Musaddiq Hussain" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Musaddiq Hussain",
          jobTitle: "Junior Python Developer",
          email: "mailto:musaddiqh02@gmail.com",
          telephone: "+923069744983",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          sameAs: [
            "https://github.com/Musaddiq174",
            "https://linkedin.com/in/musaddiq-hussain/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
