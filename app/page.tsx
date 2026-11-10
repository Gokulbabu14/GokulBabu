'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Alumni Connect',
    description:
      'A digital platform for students, alumni, and staff to build meaningful connections through networking, mentorship, events, and fundraising.',
    tags: ['Platform', 'Community', 'Product'],
  },
  {
    number: '02',
    title: 'SecurityScan',
    description:
      'A smart security tool that checks websites for vulnerabilities with SQL injection tests, XSS detection, server misconfiguration checks, and TLS analysis.',
    tags: ['Cybersecurity', 'Python', 'Web'],
  },
  {
    number: '03',
    title: 'Server Call Optimiser',
    description:
      'A monitoring tool that tracks raw server calls from Google Analytics, Facebook Pixel, Drupal, and more to make digital experiences faster and more efficient.',
    tags: ['Analytics', 'Optimization', 'Monitoring'],
  },
  {
    number: '04',
    title: 'D & D Analytics',
    description:
      'A data-driven platform that helps teams collect, analyze, and visualize performance and engagement data through interactive dashboards.',
    tags: ['Data', 'Dashboards', 'Insights'],
  },
  {
    number: '05',
    title: 'WiFi Analyzer',
    description:
      'A web application designed to diagnose WiFi interference and poor signal quality, helping people understand and improve their network performance.',
    tags: ['Networks', 'Diagnostics', 'Web App'],
  },
]

const achievements = [
  {
    title: "1st place · TechXplore'25",
    text: 'Vision Walker — an assistive navigation system helping visually impaired people move through their surroundings safely and independently.',
  },
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyewgkjd'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(false)
    setSubmissionError('')

    const form = event.currentTarget
    setSubmitting(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        setSubmissionError('Your message could not be sent. Please try again or email me directly.')
        return
      }

      form.reset()
      setSent(true)
    } catch {
      setSubmissionError('Could not connect to send your message. Check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#top" className="wordmark" aria-label="Gokul Babu home">
          G<span>.</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Entrepreneur · AI &amp; Data Science</p>
          <h1>Gokul<br /><em>Babu</em></h1>
          <p className="hero-intro">I build thoughtful digital products where artificial intelligence meets real human needs.</p>
          <a className="circle-link" href="#work" aria-label="Explore projects"><MoveUpRight size={26} /></a>
        </div>
        <div className="hero-portrait-wrap">
          <img src="/gokul-babu-cutout.png" alt="Portrait of Gokul Babu" className="hero-portrait" />
        </div>
      </section>

      <div className="quote-band">
        <Sparkles size={18} aria-hidden="true" />
        <p>&quot;AI can calculate the world. Only the human brain can imagine a new one.&quot;</p>
      </div>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Ideas made <em>useful.</em></h2>
          <p className="section-lead">A collection of products, platforms, and experiments built to solve meaningful problems.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-main project-main-full"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="project-meta"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ArrowUpRight size={22} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section about-grid">
          <div><p className="eyebrow">About</p><h2>Not looking for a seat.<br /><em>Building the table.</em></h2></div>
          <div className="about-copy"><p>I&apos;m Gokul Babu, a graduate in Artificial Intelligence and Data Science. I&apos;m interested in the space between technology and possibility — turning complex ideas into products people can actually use.</p><p>I&apos;m currently building my startup while taking on client projects when there&apos;s a meaningful problem to solve. My path is entrepreneurial: build, experiment, and create opportunities rather than wait for them.</p><div className="about-facts"><span>Anna University</span><span>CGPA 8.32</span><span>Chennai, India</span></div></div>
        </div>
      </section>

      <section className="section achievements-section" id="achievements">
        <div className="section-heading split-heading"><div><p className="eyebrow">Recognition</p><h2>Moments that<br /><em>moved me forward.</em></h2></div><Trophy className="trophy-icon" size={42} strokeWidth={1.2} /></div>
        <div className="achievement-grid">{achievements.map((achievement) => <article className="achievement-card" key={achievement.title}><span className="achievement-line" /><h3>{achievement.title}</h3><p>{achievement.text}</p></article>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section contact-grid">
          <div><p className="eyebrow">Start a conversation</p><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><p className="contact-copy">Whether you&apos;re exploring a collaboration, a product idea, or just want to say hello — I&apos;d love to hear from you.</p><div className="contact-details"><a href="mailto:gokulnot1@gmail.com"><Mail size={17} />gokulnot1@gmail.com</a><span><MapPin size={17} />Tindivanam, India</span></div></div>
          <form className="contact-form" onSubmit={handleSubmit} aria-busy={submitting}>
            <label>Your name<input required name="name" placeholder="Jane Smith" /></label>
            <label>Phone number<input required name="phone" type="tel" placeholder="+91 98765 43210" /></label>
            <label>Your message<textarea required name="message" rows={4} placeholder="Tell me a little about your idea..." /></label>
            <button className="submit-button" type="submit" disabled={submitting}>{submitting ? 'Sending...' : sent ? <>Message sent <Check size={17} /></> : <>Send message <ArrowUpRight size={17} /></>}</button>
            {sent && <p className="form-success" role="status">Thanks — I&apos;ll get back to you soon.</p>}
            {submissionError && <p className="form-error" role="alert">{submissionError}</p>}
          </form>
        </div>
      </section>

      <footer className="footer"><span>© 2026 Gokul Babu</span><div className="socials"><a href="https://github.com/Gokulbabu14" target="_blank" rel="noreferrer" aria-label="GitHub"><img className="brand-logo" src="https://thesvg.org/icons/github/light.svg" alt="GitHub" /></a><a href="https://linkedin.com/in/gokulbabu1407" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img className="brand-logo" src="https://thesvg.org/icons/linkedin/default.svg" alt="LinkedIn" /></a></div></footer>
    </main>
  )
}
