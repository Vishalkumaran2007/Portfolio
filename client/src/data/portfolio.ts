/**
 * Verified portfolio content model. Content stays separate from presentation so projects can be updated without touching page layouts.
 */
export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  year: string;
  description: string;
  technologies: string[];
  repository: string;
  liveUrl?: string;
  image: string;
  status: string;
  featured?: boolean;
  notebook: {
    code: string;
    heading: string;
    note: string;
    observations: string[];
  };
};

export const profile = {
  name: "Vishalkumaran V",
  degree: "B.E. Electrical and Electronics Engineering",
  institution: "SNS Institutions",
  academicStatus: "2nd Year · 3rd Semester",
  github: "https://github.com/Vishalkumaran2007",
  linkedin: "https://www.linkedin.com/in/vishalkumaran/",
  email: "vishalkumaran2007@gmail.com",
};

const manusAssetNames: Record<string, string> = {
  "baby-taste-builder-sound-study.jpg": "baby-taste-builder-sound-study_3b45664d.jpg",
  "plague-learning-pathway-study.jpg": "plague-learning-pathway-study_80d8ee4b.jpg",
  "threatbridge-signal-study.jpg": "threatbridge-signal-study_bde1790d.jpg",
  "vishalkumaran-hero-organic-circuit.jpg": "vishalkumaran-hero-organic-circuit_5cb90335.jpg",
  "vishalkumaran-profile.jpg": "vishalkumaran-profile_208cc338.jpg",
  "vv-circuit-monogram.png": "vv-circuit-monogram_182a5919.png",
};

export const visualAsset = (fileName: string) =>
  import.meta.env.BASE_URL === "/"
    ? `/manus-storage/${manusAssetNames[fileName] ?? fileName}`
    : `${import.meta.env.BASE_URL}assets/${fileName}`;

export const projects: Project[] = [
  {
    slug: "circuitsight-ai",
    number: "01",
    title: "CircuitSight AI",
    eyebrow: "Creative technology · Electronics",
    year: "2026",
    description:
      "An intelligent visual electronics laboratory platform for analyzing physical circuits, identifying wiring and component errors, and offering AI-powered correction guidance.",
    technologies: ["Electronics", "AI", "Visual analysis"],
    repository: "https://github.com/Vishalkumaran2007/CircuitSightAI",
    image: visualAsset("vishalkumaran-hero-organic-circuit.jpg"),
    status: "Public repository",
    featured: true,
    notebook: {
      code: "VISION / 01",
      heading: "The bench is the interface.",
      note: "This laboratory-platform concept begins with photographs of physical circuits, then moves through detection toward correction guidance.",
      observations: ["Physical circuit photos", "Wiring & component errors", "Correction guidance"],
    },
  },
  {
    slug: "plague",
    number: "02",
    title: "PLAGUE",
    eyebrow: "AI · Education system",
    year: "2026",
    description:
      "An AI-driven personalized learning system designed to adapt content, pace, and teaching methods around a learner’s progress and engagement.",
    technologies: ["TypeScript", "AI", "Learning systems"],
    repository: "https://github.com/Vishalkumaran2007/Plague-V1.0",
    image: visualAsset("plague-learning-pathway-study.jpg"),
    status: "Public repository",
    notebook: {
      code: "PATH / 02",
      heading: "Learning paths can shift with the learner.",
      note: "The project describes a system that adapts content, pace, and teaching methods around progress and engagement data.",
      observations: ["Content", "Pace", "Teaching methods"],
    },
  },
  {
    slug: "threatbridge",
    number: "03",
    title: "ThreatBridge",
    eyebrow: "Security · AI platform",
    year: "2026",
    description:
      "A unified AI-driven security platform concept that connects cybersecurity telemetry with transactional behaviour to surface threats and fraud patterns.",
    technologies: ["TypeScript", "AI", "Security"],
    repository: "https://github.com/Vishalkumaran2007/ThreatBridge",
    image: visualAsset("threatbridge-signal-study.jpg"),
    status: "Public repository",
    notebook: {
      code: "SIGNAL / 03",
      heading: "Security signals are stronger in context.",
      note: "The project connects cybersecurity telemetry with transactional behaviour to surface cyber threats and fraud patterns.",
      observations: ["Cybersecurity telemetry", "Transactional behaviour", "Threat & fraud patterns"],
    },
  },
  {
    slug: "baby-taste-builder",
    number: "04",
    title: "Baby Taste Builder",
    eyebrow: "AI · Cultural discovery",
    year: "2025",
    description:
      "A Streamlit app that helps parents find kid-friendly cultural content across music, movies, and books using their own taste as a starting point.",
    technologies: ["Python", "Streamlit", "AI"],
    repository: "https://github.com/Vishalkumaran2007/baby-taste-builder",
    liveUrl: "https://baby-taste-builder-2-wtcn9d7iyrtbztrvovnrvj.streamlit.app/",
    image: visualAsset("baby-taste-builder-sound-study.jpg"),
    status: "Public repository",
    notebook: {
      code: "TASTE / 04",
      heading: "Discovery begins with a personal signal.",
      note: "This Streamlit app starts with a parent’s own taste to help find kid-friendly cultural content across music, movies, and books.",
      observations: ["Music", "Movies", "Books"],
    },
  },
  {
    slug: "newsnexus",
    number: "05",
    title: "NewsNexus",
    eyebrow: "Web · Information delivery",
    year: "2025",
    description:
      "A news aggregation and summarization website focused on clear and structured information delivery.",
    technologies: ["TypeScript", "Web", "Information"],
    repository: "https://github.com/Vishalkumaran2007/NewsNexus",
    image: visualAsset("vishalkumaran-hero-organic-circuit.jpg"),
    status: "Public repository",
    notebook: {
      code: "NEWS / 05",
      heading: "Clarity is an information system.",
      note: "The project focuses on aggregating and summarizing news for clear, structured information delivery.",
      observations: ["Aggregate", "Summarize", "Structure"],
    },
  },
];

export const certificationData = [
  { name: "Python Course for Beginners", issuer: "Scalar", year: "2026" },
  { name: "Artificial Intelligence Fundamentals", issuer: "SkillsBuild", year: "2025" },
  {
    name: "Professional Data Engineering, Machine Learning & Generative AI",
    issuer: "Databricks",
    year: "2025",
  },
  { name: "Gen AI Learning Path", issuer: "Analytics Vidhya", year: "2025" },
];

export const journey = [
  { year: "2025", title: "Started B.E. EEE", text: "Began the Electrical and Electronics Engineering journey at SNS Institutions." },
  { year: "2025", title: "Built & joined hackathon projects", text: "Explored Baby Taste Builder, ImpactX, and early project-based learning." },
  { year: "2025", title: "AI learning foundations", text: "Focused on AI, generative AI, and data engineering learning paths." },
  { year: "2026", title: "Public experiments continue", text: "Developing ideas across AI, electronics, software, and information systems." },
];
