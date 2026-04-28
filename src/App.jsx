import { motion } from "framer-motion";
const base = import.meta.env.BASE_URL;

function ArrowUpRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function Award(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="m15.477 12.89 1.515 8.594L12 18.8l-4.992 2.684 1.515-8.594" />
    </svg>
  );
}

function BookOpen(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 7v14" />
      <path d="M3 18V5a2 2 0 0 1 2-2h7v18H5a2 2 0 0 1-2-3Z" />
      <path d="M21 18V5a2 2 0 0 0-2-2h-7v18h7a2 2 0 0 0 2-3Z" />
    </svg>
  );
}

function FileText(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

function HeartPulse(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M19.5 13.572 12 21l-7.5-7.428a5 5 0 1 1 7.07-7.072L12 7l.43-.5a5 5 0 1 1 7.07 7.072Z" />
      <path d="M3.5 12h4l2-3 3 6 2-3h6" />
    </svg>
  );
}

function Mail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 1 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Microscope(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="m9 14 3-3" />
      <path d="m12 11-3-3 2-2 3 3" />
      <path d="m15 8-4.5-4.5" />
    </svg>
  );
}

function Sparkles(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="m12 3-1.9 5.1L5 10l5.1 1.9L12 17l1.9-5.1L19 10l-5.1-1.9Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function Waves(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2 6c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 12c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 18c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
    </svg>
  );
}

const publications = [
  {
    status: "Published",
    venue: "Advanced Healthcare Materials",
    year: "2026",
    title:
      "Skin-Conformal Hydrogel Bioelectrodes for High-Fidelity Electrophysiology and Human–Machine Interfaces",
    summary:
      "Soft bioelectrode interfaces for high-fidelity electrophysiology and human–machine interfaces.",
    href: "https://scholar.google.com/citations?user=mfgGYcoAAAAJ&hl=en",
  },
  {
    status: "Accepted",
    venue: "IEEE EMBC",
    year: "2026",
    title:
      "Graphene Auricular Bioimpedance: Toward Continuous Blood Pressure Monitoring from the Temporal Artery",
    summary:
      "Auricular graphene tattoo bioimpedance for arterial waveform-based blood pressure monitoring.",
    href: "https://scholar.google.com/citations?user=mfgGYcoAAAAJ&hl=en",
  },
  {
    status: "Accepted",
    venue: "IEEE EMBC",
    year: "2026",
    title:
      "Cross-Site Graphene Tattoo Bioimpedance for Calibration-Free Continuous Tracking of Arterial Stiffness Biomarkers",
    summary:
      "Cross-site waveform analysis for arterial stiffness tracking and improved generalization.",
    href: "https://scholar.google.com/citations?user=mfgGYcoAAAAJ&hl=en",
  },
  {
    status: "Accepted",
    venue: "ACM IMWUT",
    year: "2026",
    title:
      "CardioTattoo: Unlocking Continuous ECG from Commercial Smartwatches with Ultrathin Graphene Tattoos",
    summary:
      "Extending commercial smartwatches using ultrathin graphene interfaces for continuous ECG access.",
    href: "https://scholar.google.com/citations?user=mfgGYcoAAAAJ&hl=en",
  },
];

const featured = [
  {
    icon: HeartPulse,
    title: "Continuous blood pressure from arterial waveforms",
    body:
      "Developing waveform-based continuous blood pressure estimation from graphene bioimpedance with emphasis on physiological meaning, not fragile calibration.",
  },
  {
    icon: Waves,
    title: "Cross-site vascular sensing and generalization",
    body:
      "Studying how arterial waveform morphology changes across sites and building models that remain stable across subjects, placements, and sensing conditions.",
  },
  {
    icon: Microscope,
    title: "Physiology-guided machine learning",
    body:
      "Combining signal processing, hemodynamic reasoning, and interpretable learning to move cardiovascular inference away from black-box device-specific prediction.",
  },
];

const highlights = [
  "AHA-supported PhD research at UMass Amherst",
  "Best Poster Award, Center for Personalized Health Monitoring",
  "Vice Chair, Dean’s Graduate Students’ Advisory Group",
  "Vice President, Biomedical Engineering Graduate Society",
  "Research spanning wearable sensing, modeling, and real-world deployment",
];

const timeline = [
  {
    years: "2024 – Present",
    title: "PhD Student, Biomedical Engineering",
    place: "UMass Amherst",
    text:
      "Research on wearable cardiovascular sensing, continuous blood pressure estimation, arterial stiffness, and physiology-guided machine learning.",
  },
  {
    years: "2022 – 2024",
    title: "MS in Engineering Sciences",
    place: "Dartmouth College",
    text:
      "Graduate work in biomedical devices, analog front-end design, and wearable impedance plethysmography for physiological inference.",
  },
  {
    years: "2021 – 2022",
    title: "Senior R&D Engineer",
    place: "Grameen Intel Social Business",
    text:
      "Led deployment-oriented engineering work across maternal-health systems, battery optimization, analytics, and embedded strategies for field use under real constraints.",
  },
  {
    years: "2021",
    title: "R&D Engineer",
    place: "Grameen Intel Social Business",
    text:
      "Supported prototyping, manufacturing test workflows, field deployment, and system refinement for healthcare technology platforms.",
  },
  {
    years: "2015 – 2021",
    title: "Electrical Engineer",
    place: "Grameen Intel Social Business",
    text:
      "Worked on sensing-system hardware, manufacturing documentation, debugging, and measurement reliability across health and agricultural technologies.",
  },
  {
    years: "2018 – 2022",
    title: "Founder and CTO",
    place: "TechGeeks Limited",
    text:
      "Built practical technology systems across healthcare, environment, and education under real resource constraints.",
  },
];

const awards = [
  "Best Poster Award, CPHM Research Showcase (2026)",
  "Thayer School Fellowship, Dartmouth College",
  "Recognition by the U.S. Embassy Bangladesh for COVID emergency ventilator work",
  "NASA Space Apps Challenge Innovator Award",
  "GIST Tech-I Semi-Finalist, U.S. Department of State",
];

const previousWorks = [
  {
    title: "COEL maternal healthcare deployment",
    text:
      "Deployment-focused engineering for a maternal health IoT platform in rural settings, including battery optimization, manufacturing coordination, and field-readiness under real constraints.",
    image: `${base}work-coel.jpg`,
    href: "#",
  },
   {
    title: "Soil Master Digital Soil Testing Kit (DSTK)",
    text:
      "An easy-to-use device designed for rural farmers in South Asia to test soil nutrients. It reduces testing time to roughly 20 minutes compared to hours for traditional methods.",
    image: `${base}dstk-6.jpg`,
    href: "#",
  },
    {
    title: "Kooli.ai",
    text:
      "An AI-powered audio generation and editing studio designed to simplify the end-to-end process of podcast creation.",
    image: `${base}Koolio_image.jpg`,
    href: "#",
  },
  {
    title: "SmartBin for school environments",
    text:
      "An IoT-enabled system designed to encourage positive behavior and waste monitoring in school settings through practical deployment-focused technology.",
    image: `${base}work-smartbin.jpg`,
    href: "#",
  },
  {
    title: "Airmate and public-interest environmental work",
    text:
      "Wearable environmental technology and broader public-interest work around air-quality awareness, embedded design, and low-resource usability.",
    image: `${base}/work-airmate.jpg`,
    href: "#",
  },
 
];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="max-w-xl">
      <div className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-700">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export default function GoogleFellowshipSite() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-stone-50/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.04em] text-slate-950 sm:text-base">
            Pritom Chowdhury
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#featured" className="transition hover:text-slate-950">
              Research
            </a>
            <a href="#publications" className="transition hover:text-slate-950">
              Publications
            </a>
            <a href="#impact" className="transition hover:text-slate-950">
              Impact
            </a>
            <a href="#projects" className="transition hover:text-slate-950">
              Projects
            </a>
            <a href="#about" className="transition hover:text-slate-950">
              About
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800"
              >
                <Sparkles className="h-3.5 w-3.5" />
                PhD Student · Biomedical Engineering · UMass Amherst
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.06 }}
                className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-tight text-slate-950 md:text-[4.5rem]"
              >
                Building reliable cardiovascular inference from
                <span className="block text-emerald-800">arterial waveforms, graphene bioimpedance,</span>
                <span className="block">and physiology-guided machine learning.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.14 }}
                className="mt-6 max-w-3xl text-lg leading-8 text-slate-700"
              >
                My research focuses on continuous blood pressure and arterial stiffness estimation from arterial waveforms.
                I develop wearable bioelectronic interfaces, physiological signal-processing pipelines, and modeling
                frameworks that aim to remain useful across subjects, sensor placements, and real-world sensing variability.
              </motion.p>

              <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Core question</div>
                  <p className="mt-2 text-sm leading-7 text-slate-800">
                    How can continuous blood pressure models follow shared hemodynamics instead of breaking under subject,
                    device, or placement shift?
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Research stack</div>
                  <p className="mt-2 text-sm leading-7 text-slate-800">
                    Wearable bioimpedance, signal processing, hemodynamic reasoning, and interpretable machine learning.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`${base}Pritom_Chowdhury_CV.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  CV <FileText className="h-4 w-4" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=mfgGYcoAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
                >
                  Google Scholar <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:pchowdhury@umass.edu"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
                >
                  Email <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.82, delay: 0.08 }}
              className="grid gap-4"
            >
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <div className="aspect-[4/4.6] overflow-hidden bg-slate-100">
                  <img
                    src={`${base}Pritom_Chowdhury_2D-Bioelectronics_Lab.jpg`}
                    alt="Pritom Chowdhury in the 2D Bioelectronics Lab"
                    className="h-full w-full object-contain"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Current focus</div>
                  <p className="mt-2 text-sm leading-7 text-slate-800">
                    Continuous blood pressure, arterial stiffness, and waveform-based cardiovascular sensing.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Methodology</div>
                  <p className="mt-2 text-sm leading-7 text-slate-800">
                    Experimental sensing, arterial waveform analysis, interpretable ML, and physiology-guided modeling.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_1fr]">
            <SectionHeader
              eyebrow="Research"
              title="A focused research agenda"
              text="The work is organized around arterial waveforms, robust inference, and physiological consistency across sensing conditions."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {featured.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.045)]"
                  >
                    <Icon className="h-5 w-5 text-emerald-700" />
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="publications" className="border-y border-slate-200/80 bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.36fr_1fr]">
              <SectionHeader
                eyebrow="Publications"
                title="Selected papers"
                text="Published and accepted work that best reflects my current research direction."
              />
              <div className="space-y-4">
                {publications.map((paper, idx) => (
                  <motion.a
                    key={paper.title}
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="block rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em]">
                      <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-800">
                        {paper.status}
                      </span>
                      <span className="text-slate-500">{paper.venue}</span>
                      <span className="text-slate-400">{paper.year}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-8 text-slate-950">{paper.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{paper.summary}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_1fr]">
            <SectionHeader
              eyebrow="Impact"
              title="Why this work matters"
              text="The goal is not just better prediction. It is more reliable cardiovascular monitoring across users, settings, and devices."
            />
            <div className="space-y-4">
              <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-950">Research impact</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  I am interested in building cardiovascular monitoring systems that remain useful when the sensor, user,
                  or environment changes. The long-term goal is to move continuous blood pressure inference away from
                  fragile device-specific correlations and toward models that follow shared arterial physiology across
                  wearables, bedside systems, and lower-burden tools for community-facing care.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">Research signal</h3>
                  <div className="mt-4 space-y-3">
                    {highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Award className="mt-0.5 h-4.5 w-4.5 text-emerald-700" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">Selected recognition</h3>
                  <div className="mt-4 space-y-3">
                    {awards.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Award className="mt-0.5 h-4.5 w-4.5 text-emerald-700" />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-slate-200/80 bg-white/60">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.36fr_1fr]">
              <SectionHeader
                eyebrow="Selected Projects"
                title="Earlier work and deployment-facing systems"
                text="A place to link visual records of previous engineering, deployment, and startup work without mixing them into the core publication sections."
              />
              <div className="grid gap-4 md:grid-cols-3">
                {previousWorks.map((item, idx) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group block overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-[0_12px_28px_rgba(15,23,42,0.05)]"
                  >
                    <div className="aspect-[1.2/1] overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                        onError={(event) => {
                          const target = event.currentTarget;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold leading-7 text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{item.text}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.36fr_1fr]">
            <SectionHeader
              eyebrow="About"
              title="Path"
              text="A background spanning academia, product development, deployment-focused engineering, and wearable sensing research."
            />
            <div className="relative">
              <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-200 md:block" />
              <div className="space-y-4">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.title + item.place}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="relative rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm md:ml-10"
                  >
                    <div className="absolute -left-[2.15rem] top-8 hidden h-3.5 w-3.5 rounded-full border-4 border-stone-50 bg-emerald-700 md:block" />
                    <div className="text-sm font-medium text-emerald-800">{item.years}</div>
                    <h3 className="mt-1 text-lg font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.place}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-12 pt-4 sm:pb-16">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                For collaborations, research discussions, and invited talks.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                I am especially interested in work related to physiological sensing, arterial waveform modeling,
                interpretable machine learning, and wearable cardiovascular systems.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href="mailto:pchowdhury@umass.edu"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm transition hover:bg-white"
              >
                <span className="inline-flex items-center gap-3">
                  <Mail className="h-4 w-4" /> pchowdhury@umass.edu
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=mfgGYcoAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm transition hover:bg-white"
              >
                <span className="inline-flex items-center gap-3">
                  <BookOpen className="h-4 w-4" /> Google Scholar
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
              <a
                href="CV-Pritom_Chowdhury"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm transition hover:bg-white"
              >
                <span className="inline-flex items-center gap-3">
                  <FileText className="h-4 w-4" /> CV
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </a>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm">
                <span className="inline-flex items-center gap-3">
                  <MapPin className="h-4 w-4" /> Amherst, Massachusetts
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-6 pb-10 pt-2">
          <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Pritom Chowdhury</p>
            <p>cardiovascular sensing · signal processing · machine learning · physiology-guided modeling</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
