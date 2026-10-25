import './style.css'

type Project = {
  name: string
  category: string
  summary: string
  details: string[]
  technologies: string[]
  url: string
}

const projects: Project[] = [
  {
    name: 'JobSync',
    category: 'AI & Full Stack',
    summary: 'An AI-assisted workspace for organizing a job search and its application workflow.',
    details: [
      'Application tracking, resume review, and job-match support',
      'Repository describes job discovery and cover-letter assistance',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Docker'],
    url: 'https://github.com/rohithreddythodima/job-application-tracker-ai',
  },
  {
    name: 'GetHired',
    category: 'Full Stack',
    summary: 'A job application tracker with status management and analytics.',
    details: [
      'FastAPI and PostgreSQL backend with a React interface',
      'Application filtering, status updates, and dashboard visualizations',
    ],
    technologies: ['FastAPI', 'PostgreSQL', 'React', 'SQLAlchemy', 'Recharts'],
    url: 'https://github.com/rohithreddythodima/Get_Hired',
  },
  {
    name: 'SentinelAI',
    category: 'AI & Full Stack',
    summary: 'A local-first capstone MVP for reviewing synthetic AI-agent access.',
    details: [
      'Rule-based findings with policy context and human-reviewed workflows',
      'Includes audit records and CSV/JSON exports; uses synthetic records',
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'SQLite', 'pytest'],
    url: 'https://github.com/rohithreddythodima/sentinalai',
  },
  {
    name: 'Enterprise AI Knowledge Assistant',
    category: 'AI & Full Stack',
    summary: 'A retrieval-augmented knowledge assistant for document-based Q&A.',
    details: [
      'Designed to retrieve context and return answers with source references',
      'Repository includes local AI runtime and containerized setup',
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Docker'],
    url: 'https://github.com/rohithreddythodima/Enterprise-Ai-Knowledge-Agent',
  },
  {
    name: 'AI Agent Workflow Automation',
    category: 'AI & Python',
    summary: 'A backend application for tool-assisted conversations and task workflows.',
    details: [
      'Repository documents tools for calculations, search, and URL summaries',
      'Includes local AI integration and workflow automation connections',
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'Ollama', 'Redis'],
    url: 'https://github.com/rohithreddythodima/AI-Agent-Workflow-Automation-Platform',
  },
  {
    name: 'Spring Security Web App',
    category: 'Java',
    summary: 'A Java web app demonstrating authentication and protected routes.',
    details: [
      'Login and logout flows with public and protected pages',
      'Server-rendered application built with Spring MVC and Thymeleaf',
    ],
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'Gradle'],
    url: 'https://github.com/rohithreddythodima/spring-security-web-app',
  },
]

const projectCard = (project: Project) => `
  <article class="project-card">
    <div class="project-card-top">
      <span class="project-category">${project.category}</span>
      <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer"
        aria-label="View ${project.name} source code on GitHub">View on GitHub <span aria-hidden="true">↗</span></a>
    </div>
    <h3>${project.name}</h3>
    <p class="project-summary">${project.summary}</p>
    <ul>${project.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>
    <div class="project-tech">${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}</div>
  </article>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="Thodima Rohith Reddy, home">TRR<span>.</span></a>
    <nav class="nav" aria-label="Main navigation">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#about">About</a>
      <a href="#education">Education</a>
    </nav>
    <div class="header-actions">
      <a class="social-link" href="https://www.linkedin.com/in/thodima-rohith-reddy-83499540b/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      <a class="header-contact" href="#contact">Get in touch</a>
    </div>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> MSc Computational Science · Sudbury, Canada</p>
        <h1>Thodima Rohith Reddy</h1>
        <h2>Full-Stack Software Developer</h2>
        <p class="hero-description">
          I build practical applications, backend APIs, and AI-enabled tools with Java,
          Python, and modern web technologies.
        </p>
        <p class="hero-support">
          Currently pursuing my MSc at Laurentian University. Open to software engineering
          internships, co-op opportunities, and suitable entry-level roles in Canada.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
          <a class="button button-secondary" href="#contact">Contact me</a>
          <a class="github-text-link" href="https://github.com/rohithreddythodima" target="_blank" rel="noopener noreferrer">GitHub profile ↗</a>
        </div>
      </div>
      <aside class="hero-aside" aria-label="Professional focus">
        <p class="aside-label">CURRENT FOCUS</p>
        <div class="focus-item"><span class="focus-number">01</span><span>Backend & API development</span></div>
        <div class="focus-item"><span class="focus-number">02</span><span>Full-stack applications</span></div>
        <div class="focus-item"><span class="focus-number">03</span><span>Applied AI & data</span></div>
        <div class="aside-footer">
          <span>Java</span><span>Python</span><span>React</span>
        </div>
      </aside>
    </section>

    <section class="content-section projects-section" id="projects">
      <div class="section-heading">
        <div>
          <p class="eyebrow">SELECTED WORK</p>
          <h2>Projects</h2>
        </div>
        <a class="section-link" href="https://github.com/rohithreddythodima" target="_blank" rel="noopener noreferrer">All repositories <span aria-hidden="true">↗</span></a>
      </div>
      <div class="project-filters" role="group" aria-label="Filter projects">
        <button class="filter-button active" type="button" data-filter="All" aria-pressed="true">All</button>
        <button class="filter-button" type="button" data-filter="Java" aria-pressed="false">Java</button>
        <button class="filter-button" type="button" data-filter="AI" aria-pressed="false">AI</button>
        <button class="filter-button" type="button" data-filter="Full Stack" aria-pressed="false">Full stack</button>
      </div>
      <div class="project-grid" id="project-grid">
        ${projects.map(projectCard).join('')}
      </div>
    </section>

    <section class="content-section skills-section" id="skills">
      <div class="section-heading">
        <div>
          <p class="eyebrow">TECHNICAL TOOLKIT</p>
          <h2>Skills</h2>
        </div>
        <p class="section-intro">Technologies applied across coursework and personal projects.</p>
      </div>
      <div class="skills-grid">
        <article class="skill-block"><h3>Languages</h3><p>Java · Python · JavaScript · TypeScript · SQL</p></article>
        <article class="skill-block"><h3>Backend</h3><p>Spring Boot · Spring Security · FastAPI · Flask · Node.js · REST APIs</p></article>
        <article class="skill-block"><h3>Frontend</h3><p>React · Next.js · HTML · CSS · Responsive web development</p></article>
        <article class="skill-block"><h3>Data & infrastructure</h3><p>PostgreSQL · MySQL · MongoDB · SQLite · Docker · Git · GitHub</p></article>
        <article class="skill-block"><h3>AI & analytics</h3><p>LLM integration · RAG concepts · Power BI · Power Query · DAX · Excel</p></article>
        <article class="skill-block"><h3>Testing & tools</h3><p>JUnit · pytest · Postman · Maven · Gradle · API testing</p></article>
      </div>
    </section>

    <section class="content-section about-section" id="about">
      <div class="section-heading">
        <div>
          <p class="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Practical software, thoughtfully built.</h2>
        </div>
      </div>
      <div class="about-copy">
        <p>
          I’m a Computational Science graduate student at Laurentian University with a
          Computer Science and Engineering background. I’m interested in building useful
          software across backend services, web interfaces, databases, and AI-enabled
          applications.
        </p>
        <p>
          I value readable code, clear documentation, and learning through hands-on projects.
          My current work spans Java and Spring, Python APIs, React applications, and applied
          AI—alongside data analysis as an additional strength.
        </p>
      </div>
    </section>

    <section class="content-section education-section" id="education">
      <div class="section-heading">
        <div>
          <p class="eyebrow">EDUCATION</p>
          <h2>Academic background</h2>
        </div>
      </div>
      <article class="education-card">
        <div>
          <h3>Master of Science in Computational Sciences</h3>
          <p>Laurentian University <span>·</span> Sudbury, Ontario, Canada</p>
        </div>
        <span class="education-dates">May 2026 — Expected July 2027</span>
      </article>
    </section>

    <section class="contact-section" id="contact">
      <div class="contact-copy">
        <p class="eyebrow">CONTACT</p>
        <h2>Let's connect.</h2>
        <p>Interested in my work or have an opportunity in mind? I'd be happy to hear from you. I'm open to conversations about software engineering, full-stack development, and AI projects.</p>
      </div>
      <div class="contact-actions">
        <a class="contact-email" href="mailto:rohithreddythodima@gmail.com">rohithreddythodima@gmail.com</a>
        <div class="contact-buttons">
          <a class="contact-button contact-button-primary" href="mailto:rohithreddythodima@gmail.com?subject=Portfolio%20inquiry">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3.75 6.75h16.5v10.5H3.75z"/><path d="m4.5 7.5 7.5 6 7.5-6"/></svg>
            <span>Send me an email</span>
            <span class="button-arrow" aria-hidden="true">↗</span>
          </a>
          <a class="contact-button contact-button-secondary" href="https://www.linkedin.com/in/rohith-reddy-thodima-62a0b9392/" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.5 9v9M6.5 6.5v.1M10.5 18v-5c0-2.8 4.5-3 4.5 0v5M10.5 9v9"/></svg>
            <span>LinkedIn</span>
            <span class="button-arrow" aria-hidden="true">↗</span>
          </a>
          <a class="contact-button contact-button-secondary" href="https://github.com/rohithreddythodima" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.2-6-2.2M15 21v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0C6.7 3.1 5.7 3.4 5.7 3.4a4.3 4.3 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.3c0 4.6 2.8 5.6 5.5 5.9A2.7 2.7 0 0 0 9 18v3"/></svg>
            <span>GitHub</span>
            <span class="button-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <span>© ${new Date().getFullYear()} Thodima Rohith Reddy</span>
    <span>Full-Stack Software Developer</span>
  </footer>
`

document.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter
    if (!filter) return

    document.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((filterButton) => {
      const isActive = filterButton === button
      filterButton.classList.toggle('active', isActive)
      filterButton.setAttribute('aria-pressed', String(isActive))
    })

    const filteredProjects = filter === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(filter))
    document.querySelector<HTMLDivElement>('#project-grid')!.innerHTML = filteredProjects.map(projectCard).join('')
  })
})
