import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFlask, FaCheckCircle, FaLaptopCode, FaChartBar, FaUserGraduate, FaHospitalAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Hospital Management',
      description: 'Streamlining clinical and administrative healthcare workflows.',
      features: ['Patient Records', 'Appointment Portal', 'Pharma Billing', 'Ward Mgmt'],
      tags: ['React', 'NodeJS'],
      github: '#',
      live: 'https://hmsedumix.vercel.app/',
      status: 'Live',
      icon: <FaHospitalAlt />
    },
    {
      title: 'School Management',
      description: 'Integrated platform for education administration and learning.',
      features: ['Secure Portals', 'Automated Results', 'Attendance', 'Fee Mgmt'],
      tags: ['React', 'Redux'],
      github: '#',
      live: '#',
      status: 'Testing Mode',
      icon: <FaUserGraduate />
    },
    {
      title: 'Poultry Management',
      description: 'Data-driven precision livestock farming for modern poultry.',
      features: ['Batch Monitoring', 'Health Alerts', 'Sales Dashboard', 'Feed Tracker'],
      tags: ['MERN', 'ChartJS'],
      github: '#',
      live: '#',
      status: 'Testing Mode',
      icon: <FaChartBar />
    }
  ];

  const handleLinkClick = (e, project) => {
    if (project.live === '#') {
      e.preventDefault();
      Swal.fire({
        title: "Project Under Testing",
        text: `The ${project.title} is currently in ${project.status}. Live demo coming soon!`,
        icon: "info",
        confirmButtonColor: "var(--accent-1)",
        background: "var(--bg-color)",
        color: "var(--text-primary)"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <div className="section-header">
          <h2 className="title-medium">Recent <span className="text-gradient">Creations</span></h2>
          <div className="line-dec"></div>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div variants={itemVariants} key={index} className="project-tilt-wrapper">
              <div className="glass-panel project-card">
                <div className="project-content">
                  <div className="project-status-box">
                    {project.status === 'Live' ? <FaCheckCircle className="status-live" /> : <FaFlask className="status-test" />}
                    <span>{project.status}</span>
                  </div>
                  
                  <div className="project-header-row">
                    <div className="project-icon-box">{project.icon}</div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  
                  <p className="project-desc text-secondary">{project.description}</p>
                  
                  <div className="project-features-list">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="feature-pill">
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="project-links-row">
                    <div className="tags-mini">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag-mini">{tag}</span>
                      ))}
                    </div>
                    <div className="link-group">
                      <a href={project.github} onClick={(e) => handleLinkClick(e, project)} className="link-small" title="GitHub"><FaGithub /></a>
                      <a href={project.live} onClick={(e) => handleLinkClick(e, project)} className="link-small" title="Live Preview"><FaExternalLinkAlt /></a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Large Wide Box - Technical Insight */}
          <motion.div variants={itemVariants} className="project-tilt-wrapper bento-wide">
            <div className="glass-panel project-card flex-row-bento">
              <div className="bento-text-area">
                <div className="bento-badge">Tech Expertise</div>
                <h3>Architecting Scalability</h3>
                <p className="text-secondary">Using the MERN stack to deliver high-performance management solutions across clinical, educational, and agricultural sectors.</p>
              </div>
              <div className="bento-icon-grid">
                <FaLaptopCode className="bento-large-icon" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="project-tilt-wrapper">
            <div className="glass-panel project-card flex-center">
              <div className="stats-box">
                <span className="stats-number text-gradient">100%</span>
                <span className="stats-label">Code Integrity</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
