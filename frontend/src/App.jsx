import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaExternalLinkAlt,
  FaAward, FaRocket, FaArrowUp, FaMoon, FaSun, FaPaperPlane
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { achievements, certifications, profile, projects, skills, stats } from './data.js';
import { sendContactMessage } from './api.js';

const roles = ['Full Stack Developer', 'AI Enthusiast', 'Electronics Engineer', 'Problem Solver'];
const navItems = ['about', 'skills', 'projects', 'certifications', 'achievements', 'contact'];

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const complete = text === word;
    const empty = text === '';
    const delay = complete ? 1300 : deleting ? 42 : 78;

    const timer = setTimeout(() => {
      if (!deleting && complete) setDeleting(true);
      else if (deleting && empty) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        const nextLength = text.length + (deleting ? -1 : 1);
        setText(word.slice(0, nextLength));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

function useCounter(target) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const started = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - started) / 1200, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return count;
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Lakshya Saraswat home">LS</a>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {navItems.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>{item}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-button" onClick={onThemeToggle} aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <motion.div className="loader" exit={{ opacity: 0 }}>
      <div className="loader-ring" />
      <p>Lakshya Saraswat</p>
    </motion.div>
  );
}

function Particles() {
  const dots = useMemo(() => Array.from({ length: 38 }, (_, index) => ({
    id: index,
    '--left': `${(index * 37) % 100}%`,
    '--top': `${(index * 53) % 100}%`,
    '--duration': `${5 + (index % 8)}s`,
    '--delay': `${(index % 9) * 0.35}s`,
  })), []);

  return <div className="particles" aria-hidden="true">{dots.map((dot) => <span key={dot.id} style={dot} />)}</div>;
}

function StatCard({ item }) {
  const value = useCounter(item.value);
  return <motion.div className="glass stat-card" whileHover={{ y: -8 }}><strong>{value}{item.suffix}</strong><span>{item.label}</span></motion.div>;
}

function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>Lakshya Saraswat</motion.h1>
        <motion.p className="role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
          <span>{typed}</span><b aria-hidden="true">|</b>
        </motion.p>
        <motion.p className="hero-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          Full Stack Developer, Electronics & Communication Engineer, and AI enthusiast crafting performant web products, intelligent systems, and hardware-software integrations from Kanpur, India.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
          <a className="btn primary" href="/Lakshya-Saraswat-Resume.pdf" download><FaDownload />Download Resume</a>
          <a className="btn ghost" href="#projects"><FaRocket />View Projects</a>
          <a className="btn subtle" href="#contact"><FaEnvelope />Contact Me</a>
        </motion.div>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
        <div className="photo-shell"><img src={profile.photo} alt="Lakshya Saraswat professional portrait" /></div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer With A Product Builder Mindset">
      <div className="about-grid">
        <motion.div className="glass about-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p>
            Lakshya Saraswat is pursuing B.Tech in Electronics & Communication Engineering with a strong interest in full stack development, AI and machine learning, embedded systems, and hardware-software integration. His work blends practical engineering fundamentals with modern product thinking: clean interfaces, reliable APIs, intelligent automation, and systems that connect software decisions to real-world devices.
          </p>
          <p>
            He enjoys building polished web applications, AI-assisted tools, and ECE projects where circuits, RF communication, controllers, and code meet in one cohesive solution.
          </p>
        </motion.div>
        <div className="stats-grid">{stats.map((item) => <StatCard key={item.label} item={item} />)}</div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technology Stack">
      <div className="skills-grid">
        {skills.map((group, index) => (
          <motion.article className="glass skill-card" key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
            <h3>{group.category}</h3>
            {group.items.map(([name, level]) => (
              <div className="skill" key={name}>
                <div><span>{name}</span><b>{level}%</b></div>
                <i><motion.em initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></i>
              </div>
            ))}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Engineering Work">
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.article className="glass project-card" key={project.title} whileHover={{ y: -10 }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div
              className={`project-media ${project.mediaClass || ''}`.trim()}
              role="img"
              aria-label={`${project.title} background`}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {project.type && <span className="project-type">{project.type}</span>}
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              {project.live && (
                <div className="card-actions">
                  <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt />Live Demo</a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.article className="glass cert-card" key={cert.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} whileHover={{ y: -8 }}>
            <a className="cert-media" href={cert.pdf} target="_blank" rel="noreferrer" aria-label={`View ${cert.title} certificate`}>
              <img src={cert.image} alt={`${cert.title} certificate preview`} />
            </a>
            <div className="cert-content">
              <div className="cert-title-row">
                <h3>{cert.title}</h3>
                <FaAward aria-hidden="true" />
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              <a className="cert-link" href={cert.pdf} target="_blank" rel="noreferrer">View Certificate <FaExternalLinkAlt /></a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievement Timeline">
      <div className="timeline">
        {achievements.map((item, index) => (
          <motion.article className="timeline-item" key={item.title} initial={{ opacity: 0, x: index % 2 ? 32 : -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div className="glass"><h3>{item.title}</h3><p>{item.detail}</p></div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function GitHubSection() {
  const streakDate = new Date().toISOString().slice(0, 10);
  const streakUrl = `https://streak-stats.demolab.com?user=LakshyaSaraswat07&theme=transparent&hide_border=true&ring=00F5FF&fire=FF4D8D&currStreakLabel=00F5FF&sideLabels=7B61FF&dates=AAB3C5&date=${streakDate}`;

  return (
    <Section id="github" eyebrow="Open Source" title="GitHub & Coding Presence">
      <div className="github-grid">
        <div className="glass github-card">
          <h3>Contribution Graph</h3>
          <img src="https://ghchart.rshah.org/00F5FF/LakshyaSaraswat07" alt="Lakshya Saraswat GitHub contribution graph" />
          <img className="github-consistency" src={streakUrl} alt="Live GitHub current and longest streak statistics for Lakshya Saraswat" />
        </div>
        <div className="glass stat-panel">
          <FaGithub />
          <strong>GitHub Statistics</strong>
          <p>Profile focused on web apps, AI tools, and engineering prototypes.</p>
          <a href={profile.github} target="_blank" rel="noreferrer">View GitHub <FaExternalLinkAlt /></a>
        </div>
        <div className="glass stat-panel">
          <SiLeetcode />
          <strong>LeetCode Statistics</strong>
          <p>Problem-solving practice across data structures, algorithms, and coding challenges.</p>
          <a href="https://leetcode.com" target="_blank" rel="noreferrer">View LeetCode <FaExternalLinkAlt /></a>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });
    try {
      await sendContactMessage(form);
      setStatus({ type: 'success', text: 'Message sent successfully. Lakshya will get your note by email.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', text: error.response?.data?.message || 'Unable to send right now. Please try email directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Build Something Ambitious">
      <div className="contact-grid">
        <div className="glass contact-info">
          <h3>Let’s connect</h3>
          <p>For opportunities, collaborations, project demos, or technical conversations, send a message through the form or reach out directly.</p>
          <a href={`mailto:${profile.email}`}><FaEnvelope />{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub />GitHub</a>
        </div>
        <form className="glass contact-form" onSubmit={submit}>
          <input name="name" placeholder="Name" value={form.name} onChange={update} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={update} required />
          <input name="subject" placeholder="Subject" value={form.subject} onChange={update} required />
          <textarea name="message" placeholder="Message" value={form.message} onChange={update} rows="6" required />
          <button className="btn primary" disabled={loading}>{loading ? 'Sending...' : <><FaPaperPlane />Send Message</>}</button>
          {status.text && <p className={`alert ${status.type}`}>{status.text}</p>}
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>Lakshya Saraswat</strong>
      <span>© {new Date().getFullYear()} Built with React, NodeJS, Express, MongoDB, and a lot of curiosity.</span>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <>
      <Loader />
      <motion.div className="progress" style={{ scaleX }} />
      <Particles />
      <Navbar theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <a className="scroll-top" href="#home" aria-label="Scroll to top"><FaArrowUp /></a>
      <Footer />
    </>
  );
}
