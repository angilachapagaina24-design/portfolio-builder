import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/angila-hero.jpg";
import aboutImg from "@/assets/angila-about.jpg";
import {
  Search, Plus, GraduationCap, Lightbulb, Zap, Users, Code2,
  Cpu, Dumbbell, ShoppingCart, Sparkles, Watch, Phone, Mail, Github, ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angila Chapagain — Portfolio" },
      { name: "description", content: "Portfolio of Angila Chapagain — BSc (Hons) Computing student passionate about software development, UI/UX, and modern web technologies." },
    ],
  }),
  component: Portfolio,
});

function Decor() {
  return (
    <>
      <Plus className="absolute top-10 right-16 w-6 h-6 text-primary/30" />
      <Plus className="absolute bottom-20 left-10 w-5 h-5 text-primary/20" />
      <div className="absolute top-1/3 left-8 w-3 h-3 rounded-full border-2 border-primary/40" />
      <div className="absolute bottom-1/4 right-12 w-4 h-4 rounded-full border-2 border-primary/30" />
    </>
  );
}

function SectionFrame({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="relative px-6 py-20 md:py-28">
      <div className="relative max-w-6xl mx-auto rounded-3xl border-2 border-primary/70 bg-card/60 backdrop-blur-sm p-8 md:p-16 overflow-hidden bg-frame">
        <Decor />
        {children}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-3 w-2/3 bg-primary rounded-b-full" />
      </div>
    </section>
  );
}

function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold tracking-tight text-lg">
          Angila<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </div>
        <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-6 pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="relative max-w-6xl mx-auto rounded-3xl border-2 border-primary/70 bg-card p-8 md:p-16 overflow-hidden">
        <Decor />
        <div className="grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary mb-6">
              <span className="w-8 h-px bg-primary" /> Portfolio 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-6">
              My <span className="text-gradient-primary">Portfolio</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-2">Presented By</p>
            <p className="text-2xl font-bold mb-8">Angila Chapagain</p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/70 text-foreground font-medium hover:bg-primary/5 transition">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-full bg-primary/10 scale-105" />
            <img
              src={heroImg}
              alt="Angila Chapagain in traditional attire"
              className="relative rounded-full w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 h-3 w-2/3 bg-primary rounded-b-full" />
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionFrame id="about">
      <div className="grid md:grid-cols-2 gap-10 items-center relative">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 -rotate-3" />
          <img src={aboutImg} alt="Angila by the lake" className="relative rounded-3xl w-full object-cover aspect-[4/5] shadow-xl" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Search className="w-4 h-4" />
            <span className="font-semibold text-sm">Hello, I'm Angila</span>
          </div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a second-year IT student with a strong interest in UI/UX design and modern technology.
            A Computer Science student passionate about software development, web technologies, and
            problem-solving — experienced in <span className="text-foreground font-medium">Java, Python</span>, and database-driven applications.
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}

function Education() {
  const items = [
    {
      school: "Informatics College Pokhara",
      degree: "BSc (Hons) in Computing",
      detail: "Currently in second year",
      tag: "Present",
    },
    {
      school: "Kumudini Homes Secondary School",
      degree: "+2 Science",
      detail: "Graduated with 3.25 CGPA",
      tag: "Completed",
    },
  ];
  return (
    <SectionFrame id="education">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">My Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.school} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all hover:-translate-y-1">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">{it.tag}</span>
            </div>
            <h3 className="text-xl font-bold mb-1">{it.degree}</h3>
            <p className="text-foreground/80 mb-2">{it.school}</p>
            <p className="text-sm text-muted-foreground">{it.detail}</p>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

function Skills() {
  const skills = [
    { icon: Lightbulb, title: "Problem Solving", desc: "Identifying problems, analyzing situations, and finding effective solutions through logical thinking and creativity." },
    { icon: Zap, title: "Quick Learning", desc: "Fast learner with the ability to grasp new technologies, concepts, and tools while adapting to different environments." },
    { icon: Users, title: "Team Collaboration", desc: "Work efficiently with team members, share ideas, communicate clearly, and contribute to common goals." },
    { icon: Code2, title: "Programming & Database", desc: "Java, Python, and database systems like MySQL to build efficient and well-organized applications." },
  ];
  return (
    <SectionFrame id="skills">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">What I Bring</p>
        <h2 className="text-4xl md:text-5xl font-bold">Personal Skills</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div key={s.title} className="p-7 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}

function Projects() {
  const projects = [
    { icon: Cpu, title: "IoT Early Flood Alarm System", desc: "An IoT-based flood detection system that monitors water levels and provides early warnings to reduce flood-related risk and improve safety.", tags: ["IoT", "Sensors", "Embedded"] },
    { icon: Dumbbell, title: "Gym Membership Management", desc: "A Java Swing desktop application to manage gym memberships, attendance, payments, and member records with an interactive GUI.", tags: ["Java", "Swing", "Desktop"] },
    { icon: ShoppingCart, title: "Online Grocery Store", desc: "A web-based grocery shopping platform built with Java, JSP, Servlets and MySQL — browse products, manage carts, and place orders online.", tags: ["JSP", "Servlets", "MySQL"] },
    { icon: Sparkles, title: "WeCare Inventory & Billing", desc: "A Python-based inventory and billing system for a beauty and skincare store featuring stock management, invoice generation, and automated sales updates.", tags: ["Python", "Billing", "Inventory"] },
    { icon: Watch, title: "Watch E-Commerce Website", desc: "A modern e-commerce front for a watch store — product browsing, filtering, cart and checkout flows with a focus on clean UI.", tags: ["Web", "E-commerce", "UI"] },
  ];
  return (
    <SectionFrame id="projects">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Selected Work</p>
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group relative p-7 rounded-2xl bg-card border border-border hover:border-primary transition-all hover:-translate-y-1 ${
              i === 0 ? "lg:col-span-2 bg-primary text-primary-foreground border-primary" : ""
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
              i === 0 ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"
            }`}>
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className={`leading-relaxed mb-5 ${i === 0 ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    i === 0 ? "bg-primary-foreground/15 text-primary-foreground" : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Phone", value: "9766005242", href: "tel:9766005242" },
    { icon: Mail, label: "Email", value: "angeelachapagain2@gmail.com", href: "mailto:angeelachapagain2@gmail.com" },
    { icon: Github, label: "GitHub", value: "angeelachapagain2-blip", href: "https://github.com/angeelachapagain2-blip" },
  ];
  return (
    <SectionFrame id="contact">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Let's Connect</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-5">Thank You<span className="text-primary">.</span></h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Thanks for visiting my portfolio. Feel free to connect with me for collaboration,
          opportunities, or discussions about technology and development.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {items.map((it) => (
          <a key={it.label} href={it.href} target="_blank" rel="noreferrer" className="group p-6 rounded-2xl bg-card border border-border hover:border-primary hover:-translate-y-1 transition-all text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <it.icon className="w-6 h-6" />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{it.label}</p>
            <p className="font-semibold break-words">{it.value}</p>
          </a>
        ))}
      </div>
    </SectionFrame>
  );
}

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © 2026 Angila Chapagain — Portfolio
      </footer>
    </main>
  );
}
