import Scene3D from "@/components/Scene3D";
const skills = [
  { name: "Frontend Development", detail: "HTML · CSS · JavaScript · React · Tailwind" },
  { name: "Backend Development", detail: "Node.js · Python · FastAPI · Flask" },
  { name: "Programming", detail: "C · C++ · Java · Python" },
  { name: "Database & Cloud", detail: "MongoDB · Supabase" },
  { name: "Creative Technology", detail: "Figma · Blender · UI/UX" },
  { name: "Emerging Technology", detail: "AI/ML · Android Development" },
];

const projects = [
  {
    number: "01",
    name: "RailOpt AI",
    description: "AI-powered automatic block planning concept to maximize asset availability for Indian Railways.",
    tags: ["AI", "Railways", "Optimization"],
  },
  {
    number: "02",
    name: "Raktsanchar",
    description: "A blood delivery platform connecting urgent requests, inventory, hospitals and delivery partners.",
    tags: ["Mobile App", "Healthcare", "UI/UX"],
  },
  {
    number: "03",
    name: "EduFocus Solutions",
    description: "A full-stack web platform concept focused on reducing student dropout rates.",
    tags: ["Full Stack", "Education"],
  },
  {
    number: "04",
    name: "ShopZone",
    description: "A sales analytics system for organizing product, customer and order information.",
    tags: ["Analytics", "Database"],
  },
  {
    number: "05",
    name: "Dual-Screen Motion Controller",
    description: "A phone-as-gamepad concept using WebSockets for real-time interaction between two screens.",
    tags: ["WebSockets", "JavaScript"],
  },
  {
    number: "06",
    name: "SmartLibra PMS",
    description: "A library management system concept for organizing books and library operations.",
    tags: ["Management", "Database"],
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="container">
        <header className="topbar">
          <a href="#home" className="brand">
            KKS<span>.</span>DEV
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact" className="nav-cta">Let's Talk ↗</a>
          </nav>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              SYSTEM ONLINE / PORTFOLIO 2026
            </div>

            <h1>
              KRISHNA
              <span>KANT SINGH.</span>
            </h1>

            <p className="hero-description">
              I build digital experiences at the intersection of code,
              creativity and technology. Computer Science student,
              developer and curious mind exploring the future of the web.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">Explore Projects ↗</a>
              <a href="#about" className="secondary-btn">Discover More</a>
            </div>

            <div className="hero-meta">
              <div className="meta-item">
                <strong>06+</strong>
                <span>Project Concepts</span>
              </div>
              <div className="meta-item">
                <strong>CS</strong>
                <span>Engineering</span>
              </div>
              <div className="meta-item">
                <strong>∞</strong>
                <span>Ideas Loading</span>
              </div>
            </div>
          </div>

        <div className="hero-visual">
          <Scene3D />

          <span className="visual-label one">
            CREATIVE ENGINE
          </span>

          <span className="visual-label two">
            BUILD / CREATE / REPEAT
          </span>
        </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <div>
              <div className="section-kicker">01 / THE HUMAN BEHIND THE CODE</div>
              <h2 className="section-title">Beyond the <span>screen.</span></h2>
            </div>
            <p className="section-note">
              A little about my background, interests and the things that drive me to create.
            </p>
          </div>

          <div className="about-grid">
            <p className="about-copy">
              I'm <strong>Krishna Kant Singh</strong>, a Computer Science
              and Engineering student at SRM Institute of Science and
              Technology, Ramapuram. I enjoy turning ideas into practical
              digital experiences through development, design and
              experimentation.
              <br /><br />
              From full-stack applications to AI-driven concepts and
              interactive interfaces, I like exploring how technology
              can solve real-world problems. I'm continuously learning,
              building and refining my craft.
            </p>

            <div>
              <div className="info-line">
                <span>EDUCATION</span>
                <span>B.Tech / Computer Science</span>
              </div>
              <div className="info-line">
                <span>INSTITUTE</span>
                <span>SRMIST, Ramapuram</span>
              </div>
              <div className="info-line">
                <span>FOCUS</span>
                <span>Development / UI/UX / AI</span>
              </div>
              <div className="info-line">
                <span>DESIGN TOOLS</span>
                <span>Figma / Blender</span>
              </div>
              <div className="info-line">
                <span>CURRENT MODE</span>
                <span>Always Learning ↗</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / MY TECH STACK</div>
              <h2 className="section-title">Tools of the <span>trade.</span></h2>
            </div>
            <p className="section-note">
              Technologies and creative tools I use to bring ideas to life.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-item" key={skill.name}>
                <span className="skill-index">/ 0{index + 1}</span>
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-kicker">03 / SELECTED WORK</div>
              <h2 className="section-title">Ideas into <span>reality.</span></h2>
            </div>
            <p className="section-note">
              A selection of projects and concepts across development, analytics, AI and design.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-item" key={project.number}>
                <span className="project-index">PROJECT / {project.number}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div>
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel">
            <div className="section-kicker">04 / OPEN CHANNEL</div>
            <h2>Have an idea?<br /><span>Let's build it.</span></h2>
            <p>
              Interested in collaboration, creative technology or building
              something interesting? Let's connect.
            </p>
            <a href="mailto:your-email@example.com" className="primary-btn">
              Start a Conversation ↗
            </a>
          </div>
        </section>

        <footer className="footer">
          <div>© 2026 KRISHNA KANT SINGH</div>
          <div>DESIGNED & BUILT WITH <span>♥</span> AND CODE</div>
          <a href="#home">BACK TO TOP ↑</a>
        </footer>
      </div>
    </main>
  );
}