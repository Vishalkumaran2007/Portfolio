/**
 * Editorial Circuit Journal style reminder: compose asymmetric paper-like spreads with circuit-vine linework, never a generic card grid.
 */
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Code2,
  Cpu,
  Github,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { certificationData, journey, profile, projects } from "@/data/portfolio";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
] as const;

function CircuitLine({ className = "" }: { className?: string }) {
  return (
    <svg className={`circuit-line ${className}`} viewBox="0 0 720 180" fill="none" aria-hidden="true">
      <path d="M4 132C90 132 96 46 180 46s92 88 180 88 106-78 175-78c50 0 64 34 180 34" />
      <path d="M56 132h124M360 134h112M535 56h92" />
      <circle cx="56" cy="132" r="6" /><circle cx="180" cy="46" r="6" /><circle cx="360" cy="134" r="6" /><circle cx="535" cy="56" r="6" /><circle cx="627" cy="90" r="6" />
    </svg>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
      <span className="theme-orbit">{theme === "light" ? <Moon size={15} /> : <Sun size={16} />}</span>
    </button>
  );
}

function Wordmark() {
  return (
    <a className="wordmark" href="#home" aria-label="Vishalkumaran V home">
      <img src="/manus-storage/vv-circuit-monogram_182a5919.png" alt="" />
      <span>Vishalkumaran <i>V</i></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="home">
      <div className="paper-noise" aria-hidden="true" />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-shell">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <a className="nav-social" href={profile.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub"><Github size={17} /></a>
            <a className="nav-social" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn"><Linkedin size={17} /></a>
            <a className="nav-social" href={`mailto:${profile.email}`} aria-label="Send an email"><Mail size={17} /></a>
            <ThemeToggle />
            <button className="menu-trigger" type="button" onClick={() => setMenuOpen(true)} aria-label="Open site menu"><Menu size={22} /></button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-head"><Wordmark /><button type="button" onClick={closeMenu} aria-label="Close site menu"><X size={26} /></button></div>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => <a style={{ transitionDelay: `${70 + index * 45}ms` }} onClick={closeMenu} href={href} key={href}><span>0{index + 1}</span>{label}<ArrowUpRight size={19} /></a>)}
        </nav>
        <div className="mobile-menu-foot">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={14} /></a>
          <ThemeToggle />
        </div>
      </div>

      <main>
        <section className="hero section" aria-labelledby="hero-title">
          <CircuitLine className="hero-line" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="pulse-dot" /> EEE / 03 · FIELD NOTES</p>
            <h1 id="hero-title">Engineering<br />ideas into<br /><em>experiments.</em></h1>
            <p className="hero-summary">Electrical &amp; Electronics Engineering student exploring engineering, AI, software, and creative problem solving through projects and experiments.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="button button-secondary" href="#contact">Let&apos;s connect</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-status status-top">INPUT → PROCESS → OUTPUT</div>
            <div className="arch-image"><img src="/manus-storage/vishalkumaran-hero-organic-circuit_5cb90335.jpg" alt="Abstract engineering notebook composition with circuit traces and waveform details" /></div>
            <div className="signal-stamp"><span>BUILD</span><span>TEST</span><span>LEARN</span></div>
            <figure className="profile-specimen">
              <div className="profile-frame"><img src="/manus-storage/vishalkumaran-profile_208cc338.jpg" alt="Portrait of Vishalkumaran V" /></div>
              <figcaption>PERSON / VISHAL</figcaption>
            </figure>
            <div className="hero-status status-bottom">SYSTEM_01 · SIGNAL / RESPONSE</div>
          </div>

          <div className="hero-academics reveal">
            <span>2nd year · 3rd semester</span>
            <div><strong>Sem 01</strong><b>7.76 CGPA</b></div>
            <div><strong>Sem 02</strong><b>7.81 CGPA</b></div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to read</span><ArrowDown size={16} /></a>
        </section>

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="section-head split-head reveal">
            <p className="eyebrow">01 / ABOUT</p>
            <h2 id="about-title">A little about<br /><em>how I think.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="lead">I&apos;m interested in understanding how things work — from electrical and electronic systems to the software and ideas that shape how people use them.</p>
              <p>My learning happens through circuits, sound systems, project experiments, teamwork, and the habit of asking how a system might work better. I&apos;m especially curious about where engineering fundamentals can meet AI, code, and thoughtful design.</p>
              <a className="text-link" href="#skills">See the tools I&apos;m exploring <ArrowUpRight size={16} /></a>
            </div>
            <aside className="academic-card reveal" aria-label="Academic snapshot">
              <div className="academic-card-top"><GraduationCap size={22} /><span>Academic snapshot</span></div>
              <h3>B.E. Electrical &amp;<br />Electronics Engineering</h3>
              <p>SNS Institutions · 2025—2029</p>
              <div className="academic-current"><span>Currently</span><b>2nd Year<br />3rd Semester</b></div>
              <div className="cgpa-grid"><div><span>Semester 01</span><b>7.76</b><small>CGPA</small></div><div><span>Semester 02</span><b>7.81</b><small>CGPA</small></div></div>
            </aside>
          </div>
        </section>

        <section className="manifesto" aria-label="Personal statement">
          <CircuitLine className="manifesto-line" />
          <div className="manifesto-inner reveal">
            <p className="annotation">NOTE / 2026</p>
            <p>I like understanding <em>systems</em> — then finding new ways to <em>build</em> them.</p>
          </div>
        </section>

        <section className="identity section" aria-labelledby="identity-title">
          <div className="identity-copy reveal">
            <p className="eyebrow">02 / THE THROUGHLINE</p>
            <h2 id="identity-title">Curious about how <em>systems</em> work.</h2>
            <p>Exploring how engineering fundamentals can connect with modern digital tools to turn ideas into working experiments.</p>
          </div>
          <div className="identity-map reveal" aria-label="Connections between engineering, software, AI and design">
            <svg viewBox="0 0 670 390" fill="none" aria-hidden="true"><path d="M83 86C219 29 293 147 327 189c53 64 108 68 255 21" /><path d="M83 86c49 140 169 118 244 103 73-14 122 91 255 21" /><circle cx="83" cy="86" r="9" /><circle cx="327" cy="189" r="12" /><circle cx="582" cy="210" r="9" /></svg>
            <span className="node node-a">Engineering</span><span className="node node-b">Software</span><span className="node node-c">AI</span><span className="node node-d">Design</span><span className="node-core">build<br />test<br />iterate</span>
          </div>
        </section>

        <section className="work section" id="work" aria-labelledby="work-title">
          <div className="section-head work-head reveal"><div><p className="eyebrow">03 / SELECTED WORK</p><h2 id="work-title">Projects, experiments,<br />and <em>ideas</em> built while learning.</h2></div><p>Selected public work across creative technology, AI, web systems, and information delivery.</p></div>
          <div className="work-list">
            {projects.map((project, index) => <article className={`project-card project-${index + 1} reveal`} key={project.slug}>
              <a className="project-image" href={`/project/${project.slug}`} aria-label={`Read about ${project.title}`}><img src={project.image} alt={`Abstract visual study for ${project.title}`} /></a>
              <div className="project-meta"><span>{project.number} / {project.eyebrow}</span><span>{project.year}</span></div>
              <div className="project-content"><div><h3>{project.title}</h3><p>{project.description}</p></div><a className="project-arrow" href={`/project/${project.slug}`} aria-label={`View ${project.title} project`}><ArrowUpRight size={22} /></a></div>
              <div className="project-foot"><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><span className="project-status">{project.status}</span></div>
            </article>)}
          </div>
        </section>

        <section className="skills section" id="skills" aria-labelledby="skills-title">
          <div className="section-head split-head reveal"><p className="eyebrow">04 / SKILLS &amp; PRACTICE</p><h2 id="skills-title">Tools are a way<br />to make <em>thinking</em> tangible.</h2></div>
          <div className="skill-system reveal">
            <div className="skill-cluster engineering"><Cpu size={22} /><p>Engineering</p><span>Electrical / Electronics</span><span>Circuits</span><span>Hardware experimentation</span></div>
            <div className="skill-cluster software"><Code2 size={22} /><p>Software</p><span>Python</span><span>TypeScript</span><span>Web technologies</span></div>
            <div className="skill-cluster ai"><Lightbulb size={22} /><p>AI / Data</p><span>AI experimentation</span><span>Generative AI</span><span>Data concepts</span></div>
            <div className="skill-cluster thinking"><BookOpen size={22} /><p>How I work</p><span>Problem solving</span><span>Design thinking</span><span>Communication</span></div>
            <svg className="skill-wires" viewBox="0 0 1120 350" fill="none" aria-hidden="true">
              <path d="M182 79C250 79 250 216 309 216h182c89 0 129-137 215-137h181c43 0 33 137 51 137" />
              <circle cx="182" cy="79" r="6"/><circle cx="309" cy="216" r="6"/><circle cx="491" cy="216" r="6"/><circle cx="706" cy="79" r="6"/><circle cx="887" cy="79" r="6"/><circle cx="938" cy="216" r="6"/>
            </svg>
          </div>
        </section>

        <section className="journey section" id="journey" aria-labelledby="journey-title">
          <div className="section-head journey-head reveal"><div><p className="eyebrow">05 / THE JOURNEY SO FAR</p><h2 id="journey-title">Still learning.<br />Still <em>building.</em></h2></div><p>A growing collection of studies, prototypes, collaborations, and public experiments.</p></div>
          <div className="timeline reveal">
            {journey.map((item, index) => <article className="timeline-item" key={`${item.year}-${item.title}`}><div className="timeline-year">{item.year}</div><div className="timeline-dot">{String(index + 1).padStart(2, "0")}</div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
          </div>
          <div className="certifications reveal"><p className="annotation">SELECTED LEARNING / CERTIFICATIONS</p><div className="cert-grid">{certificationData.map((certificate) => <div key={certificate.name}><span>{certificate.issuer} · {certificate.year}</span><b>{certificate.name}</b></div>)}</div></div>
        </section>

        <section className="github-cta section" aria-labelledby="github-title">
          <div className="github-visual reveal"><img src="/manus-storage/vv-circuit-monogram_182a5919.png" alt="Vishalkumaran V circuit monogram" /><span>PUBLIC / 2026</span></div>
          <div className="github-copy reveal"><p className="eyebrow">06 / BUILT IN PUBLIC</p><h2 id="github-title">More field notes<br />live on <em>GitHub.</em></h2><p>Repositories, experiments, and ideas are documented in public as they evolve.</p><a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> Explore GitHub <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <CircuitLine className="contact-line" />
          <div className="contact-inner reveal"><p className="eyebrow">07 / OPEN TO CONNECTION</p><h2 id="contact-title">Let&apos;s build<br /><em>something.</em></h2><p>Have an internship opportunity, project idea, hackathon concept, or simply want to connect?</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={16} /> Email me</a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={14} /></a></div>
        </section>
      </main>

      <footer className="site-footer"><Wordmark /><div><span>{profile.degree}</span><span>{profile.academicStatus}</span></div><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email}</a><p>Built with curiosity. <b>© 2026 Vishalkumaran V</b></p></footer>
    </div>
  );
}
