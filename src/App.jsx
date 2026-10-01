import "./App.css";

const projects = [
  {
    number: "01",
    title: "Digital Forensics & Incident Response",
    description:
      "Performed forensic analysis on test subjects, identified digital artifacts, analyzed logs, and reconstructed security incidents.",
    tech: ["Autopsy", "Wireshark", "FTK", "Volatility", "NIST SP 800-86"],
    type: "CYBERSECURITY",
  },
  {
    number: "02",
    title: "Network Architecture Design",
    description:
      "Designed a secure network architecture with segmentation, firewalls, access controls, VPN connectivity, redundancy, and intrusion prevention.",
    tech: ["Cisco", "Networking", "VPN", "Firewalls", "Security"],
    type: "NETWORK SECURITY",
  },
  {
    number: "03",
    title: "Freelancing Platform",
    description:
      "Built a full-stack freelancing platform featuring user authentication, project posting, and interactive functionality.",
    tech: ["React", "Node.js", "JavaScript", "HTML/CSS"],
    type: "FULL STACK",
    link: "https://github.com/kalsanglama200/Web_Coursework",
  },
];

const skills = [
  {
    title: "Defensive Security",
    items: ["Digital Forensics", "Autopsy", "FTK", "Volatility", "Wireshark", "Log Analysis"],
  },
  {
    title: "Offensive Security",
    items: ["Web Exploitation", "Reverse Engineering", "Ghidra", "Network Analysis"],
  },
  {
    title: "Infrastructure",
    items: ["Linux Administration", "Docker", "Cisco Packet Tracer", "Networking"],
  },
  {
    title: "Programming",
    items: ["Python", "Shell", "C", "JavaScript", "PHP", "HTML/CSS", "SQL", "React"],
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">
          K<span>L</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="githubButton"
          href="https://github.com/kalsanglama200"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="heroContent">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Kalsang
              <br />
              <span>Lama.</span>
            </h1>

            <h2>Cybersecurity Student & Developer</h2>

            <p className="heroDescription">
              BSc (Hons) Ethical Hacking and Cyber Security student passionate
              about digital forensics, penetration testing, network security
              and building secure applications.
            </p>

            <div className="heroButtons">
              <a href="#projects" className="primaryButton">
                View my work ↓
              </a>

              <a href="#contact" className="secondaryButton">
                Contact me
              </a>
            </div>
          </div>

          <div className="terminalCard">
            <div className="terminalTop">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminalBody">
              <p>
                <span className="green">kalsang@security</span>
                <span className="muted">:~$</span> whoami
              </p>
              <p className="terminalOutput">Kalsang Lama</p>

              <p>
                <span className="green">kalsang@security</span>
                <span className="muted">:~$</span> cat interests.txt
              </p>

              <p className="terminalOutput">
                Digital Forensics
                <br />
                Penetration Testing
                <br />
                Network Security
                <br />
                Secure Development
              </p>

              <p>
                <span className="green">kalsang@security</span>
                <span className="muted">:~$</span>{" "}
                <span className="cursor">█</span>
              </p>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="sectionHeading">
            <p>01 / ABOUT</p>
            <h2>Security mindset.<br />Developer curiosity.</h2>
          </div>

          <div className="aboutText">
            <p>
              I'm currently pursuing a BSc (Hons) in Ethical Hacking and Cyber
              Security at Softwarica College of IT and E-Commerce in Kathmandu.
            </p>

            <p>
              My interests span both offensive and defensive security. I enjoy
              investigating systems, understanding how attacks work, designing
              secure networks and developing practical software solutions.
            </p>

            <div className="stats">
              <div>
                <strong>2nd / 3rd</strong>
                <span>CTF Rankings</span>
              </div>
              <div>
                <strong>2027</strong>
                <span>Graduation</span>
              </div>
              <div>
                <strong>2+</strong>
                <span>Certifications</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="sectionHeading">
            <p>02 / SKILLS</p>
            <h2>Tools of the trade.</h2>
          </div>

          <div className="skillsGrid">
            {skills.map((skill, index) => (
              <div className="skillCard" key={skill.title}>
                <span className="skillNumber">0{index + 1}</span>
                <h3>{skill.title}</h3>

                <div className="tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="sectionHeading">
            <p>03 / PROJECTS</p>
            <h2>Selected work.</h2>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="projectNumber">{project.number}</div>

                <div className="projectContent">
                  <span className="projectType">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      className="projectLink"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section educationSection" id="education">
          <div className="sectionHeading">
            <p>04 / JOURNEY</p>
            <h2>Education & experience.</h2>
          </div>

          <div className="timeline">
            <div className="timelineItem">
              <span>2024 — 2027</span>
              <div>
                <h3>BSc (Hons) Ethical Hacking & Cyber Security</h3>
                <h4>Softwarica College of IT and E-Commerce</h4>
                <p>
                  Practical Pen-Testing, Platforms & Operating Systems,
                  Computer Systems & Networks and Digital Forensics.
                </p>
              </div>
            </div>

            <div className="timelineItem">
              <span>2023 — 2024</span>
              <div>
                <h3>Computer Science Teacher</h3>
                <h4>Progressive School — Mahankal</h4>
                <p>
                  Taught computer science and programming to Grade 9–10
                  students.
                </p>
              </div>
            </div>

            <div className="timelineItem">
              <span>2021 — 2023</span>
              <div>
                <h3>+2 Management with Computer Science</h3>
                <h4>Arunima College</h4>
                <p>GPA: 3.44 / 4.00</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section certifications">
          <div className="sectionHeading">
            <p>05 / CERTIFICATIONS</p>
            <h2>Continuous learning.</h2>
          </div>

          <div className="certGrid">
            <a
              href="https://courses.redteamleaders.com/exam-completion/8f0ac3ae913a9cea"
              target="_blank"
              rel="noreferrer"
              className="certCard"
            >
              <span>2025</span>
              <h3>Certified Cybersecurity Educator Professional</h3>
              <p>Red Team Leaders</p>
              <strong>View Certificate ↗</strong>
            </a>

            <a
              href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-U265DYSNPO.pdf"
              target="_blank"
              rel="noreferrer"
              className="certCard"
            >
              <span>2025</span>
              <h3>Pre Security</h3>
              <p>TryHackMe</p>
              <strong>View Certificate ↗</strong>
            </a>
          </div>
        </section>

        <section className="contact" id="contact">
          <p>06 / CONTACT</p>

          <h2>
            Let's build something
            <br />
            <span>secure.</span>
          </h2>

          <p className="contactDescription">
            Interested in cybersecurity, development, CTFs or collaborating on
            a project? Feel free to get in touch.
          </p>

          <a className="emailButton" href="mailto:kalsanglama200@gmail.com">
            kalsanglama200@gmail.com ↗
          </a>

          <div className="socialLinks">
            <a
              href="https://github.com/kalsanglama200"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kalsang-lama-894715310"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Kalsang Lama</p>
        <p>Built with React • Secured with curiosity</p>
      </footer>
    </div>
  );
}

export default App;
