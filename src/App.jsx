import React from 'react';

const skillGroups = [{ title: 'Programming Languages', items: ['SQL', 'Java'] }, { title: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] }, { title: 'Backend', items: ['Node.js', 'Express.js'] }, { title: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL'] }, { title: 'Tools', items: ['VS Code', 'Git', 'GitHub'] }, { title: 'Operating Systems', items: ['Windows', 'Linux (Basic)'] }];

const projects = [
  { number: '01', title: 'Task Management App', type: 'Full-stack Project', description: 'A full-stack task management application with CRUD operations to add, edit, delete, search and update task statuses, helping users organise workloads and track progress.', stack: ['React', 'Node.js', 'PostgreSQL'], note: 'Full-stack project' },
  { number: '02', title: 'Quiz App', type: 'Full-stack Project', description: 'An interactive quiz application with user authentication and multiple-choice questions. Automatically evaluates answers, calculates scores and displays results.', stack: ['React', 'MongoDB'], note: 'Full-stack project' },
  { number: '03', title: 'Calculator App', type: 'Frontend Project', description: 'A web-based calculator supporting arithmetic operations, BODMAS and parentheses.', stack: ['HTML', 'CSS', 'JavaScript'], note: 'Frontend project' },
  { number: '04', title: 'Music Player Web App', type: 'Frontend Project', description: 'A responsive music player with play, pause, restart, speed control and song selection features.', stack: ['HTML', 'CSS', 'JavaScript'], note: 'Frontend project' }
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Neha home">N<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/resume.pdf" download>Download CV <Arrow /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>

            <h1> <em> Hello I'm, <br /></em><em> Neha Rani Daimary</em></h1>
            <p className='heading'><em>Aspiring software Developer | MCA Graduate</em></p>
            <p className="hero-description">I'm an MCA graduate passonate about technologies, web development, frontend develeopment and creating meaningful digital experiences. I enjoy building user-friendly digital experiences, web applications, learning new technologies and developing practical solutions. i'm eager to contribute my knowledge, grow professionally, embrace new challenges and create meaningful digital solutions.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <Arrow /></a>
              <a className="text-link" href="/portfolio-website/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume <Arrow /></a>
            </div>
            <div className="hero-meta">
              <span>BASED IN BENGALURU, INDIA</span>
              <span>PORTFOLIO</span>
            </div>
          </div>
          <div className="hero-art profile-art">
               <div className="profile-frame">
                    <img src="me.jpeg" alt="Neha Rani Daimary" />
  </div>
</div>
        
</section>
<section className="ticker" aria-label="Areas of interest">
                <div>WEB DEVELOPMENT <b>✳</b> CREATIVE THINKING <b>✳</b> CONTINUOUS LEARNING <b>✳</b></div>
             </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-label"> ABOUT ME</div>
          <div className="about-grid">
            <h2><em>Driven to Learn | Building for tomorrow.</em></h2>
            <div className="about-text">
              <p className="lead">I’m, an ambitious MCA graduate specializing in full stack development focused on building clean, efficient and responsive web applications. My intensive technical training has equipped me with a strong foundation in building practical web technologies, I love exploring modern software frameworks and solving technical problems.</p>
              <p>I thrive on turning logic into functional features and tackling complex application challenges. I am seeking an entry-level role where my dedicated learning mindset , fast-learning attitude, adaptibility, and passion for clean architecture can contribute to a team and grow as a software developer through real-world experiences.</p>
        
            
            </div>
          </div>
           
        </section>


        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-label">MY TOOLKIT</div>
            <div className="skills-heading">
              <h2>Tools I’m learning<br /><em>and working with.</em></h2>
              <p>Technical skills across programming, web development, databases and development tools. I continue to improve through training and projects.</p>
            </div>
            <div className="skill-list">
              {skillGroups.map((group, i) => <div className="skill-item" key={group.title}><span className="skill-number">0{i + 1}</span><span><strong>{group.title}</strong><br />{group.items.join(' · ')}</span><span className="skill-plus">↗</span></div>)}
            </div>
            <p className="about-text" style={{marginTop: '28px'}}>Professional skills: Communication · Teamwork · Problem-solving · Adaptability</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="education">
          <div className="section-label">EDUCATION</div>
          <div className="education-list">
            <article className="education-item">
              <div className="edu-year">2023–25</div>
              <div><h3>Master of Computer Applications (MCA)</h3><p>University of Science and Technology, Meghalaya · 6.98 CGPA</p></div>
              <span className="edu-tag">POSTGRADUATE</span>
            </article>
          
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-wrap">
            <div className="section-label">SELECTED WORK</div>
            <div className="projects-heading"><h2>Things I’ve<br /><em>been working on.</em></h2><p>A selection of academic and practice projects. More work will be added as I build.</p></div>
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.number}>
                  <div className="project-top"><span>{project.number} / {project.type}</span><span className="project-arrow">↗</span></div>
                  <div className="project-graphic"><span className="graphic-mark">{project.number === '01' ? '⌂' : project.number === '02' ? '＋' : '✓'}</span><span className="graphic-caption">NEHA / PROJECT {project.number}</span></div>
                  <div className="project-info"><div className="project-note">{project.note}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="contact-section section-wrap" id="contact">
        
          <div className="contact-content">
            <p className='eye'> CONTACT ME</p>
      
            <h2>Let’s Connect<br /><em>Your next idea could be the beginning of something great. I'd love to hear from your</em></h2>

            <div className="contact-card">
            
            {/* Top Grid: Info Fields */}
            <div className="card-info-grid">
              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div className="info-text">
                  <label>Email</label>
                  <a href="mailto:neharanidaimary2020@gmail.com">neharanidaimary2020@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div className="info-text">
                  <label>Phone</label>
                  <a href="tel:+916002654878">+91 60026 54878</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div className="info-text">
                  <label>Location</label>
                  <p>Bengaluru, India</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🔗</span>
                <div className="info-text">
                  <label>Socials</label>
                  <div className="inner-social-links">
                    <a href="https://github.com" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      </main>

      {/*  Footer Area */}
      <footer className="footer-section-wrap">
        <div className="footer-container">
          <span className="copyright">© 2026 Neha Rani Daimary. All Rights Reserved.</span>

           <div className="footer-socials">
  {/* GitHub SVG Icon */}
  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  </a>

  {/* LinkedIn SVG Icon */}
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>

  {/* Email (Envelope) SVG Icon */}
  <a href="mailto:neharanidaimary2020@gmail.com" aria-label="Email Me">
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  </a>
</div>
          <a href="#home" className="back-to-top">Back to top ▲</a>
        </div> 
       
        </footer>

       
         </div>
        
  );
}

export default App;
     

            