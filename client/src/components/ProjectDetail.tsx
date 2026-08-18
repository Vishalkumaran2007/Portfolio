/**
 * Editorial Circuit Journal style reminder: preserve the warm paper, restrained technical annotation, and Playfair/Source Sans contrast.
 */
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useRoute } from "wouter";
import { projects } from "@/data/portfolio";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  const project = projects.find((item) => item.slug === params?.slug);

  if (!project) {
    return (
      <main className="detail-shell">
        <a className="back-link" href="/">
          <ArrowLeft size={16} /> Back to notebook
        </a>
        <p className="annotation">PROJECT / NOT FOUND</p>
        <h1>This experiment is not in the notebook.</h1>
      </main>
    );
  }

  return (
    <main className="detail-shell">
      <nav className="detail-nav" aria-label="Project navigation">
        <a className="back-link" href="/">
          <ArrowLeft size={16} /> Back to notebook
        </a>
        <span className="annotation">PROJECT_{project.number} / {project.year}</span>
      </nav>

      <header className="detail-hero">
        <div className="detail-hero-copy">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.description}</p>
          <div className="project-tags" aria-label="Verified technologies">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
          <div className="detail-actions">
            <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">
              <Github size={16} /> Open source notebook
            </a>
            {project.liveUrl && (
              <a className="button button-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Enter live experiment <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
        <div className="detail-image-wrap">
          <img src={project.image} alt={`Abstract visual study for ${project.title}`} />
          <div className="detail-image-annotation"><span>{project.notebook.code}</span><span>PROJECT_{project.number}</span></div>
          <div className="detail-image-trace" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </header>

      <section className="detail-overview" aria-labelledby="overview-title">
        <div>
          <p className="annotation">01 / LAB RECORD</p>
          <h2 id="overview-title">{project.notebook.heading}</h2>
        </div>
        <div className="detail-overview-text">
          <p>{project.description}</p>
          <p>{project.notebook.note}</p>
        </div>
      </section>

      <section className="project-instruments" aria-label="Project field notes">
        <div className="instrument-stamp"><img src="/manus-storage/vv-circuit-monogram_182a5919.png" alt="" /><span>FIELD<br />ENTRY</span></div>
        <div className="instrument-copy"><p className="annotation">02 / OBSERVATION SET</p><h2>Signals recorded<br />for this <em>study.</em></h2></div>
        <div className="observation-list">
          {project.notebook.observations.map((observation, index) => <div key={observation}><span>0{index + 1}</span><b>{observation}</b><i /></div>)}
        </div>
      </section>

      <footer className="detail-footer"><span>{project.notebook.code} · documented in public</span><a className="text-link" href={project.repository} target="_blank" rel="noreferrer">Open the project notebook <ArrowUpRight size={16} /></a></footer>
    </main>
  );
}
