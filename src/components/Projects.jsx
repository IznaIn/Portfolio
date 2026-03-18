import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A comprehensive management system for hospitals to handle patient records, doctor appointments, and administrative tasks.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
      github: '#',
      live: 'https://hmsedumix.vercel.app/'
    },
    {
      title: 'School Management System',
      description: 'A multi-role web application with dedicated portals for Admins, Teachers, and Students, built using Redux and Material UI for a seamless experience.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'MUI'],
      github: '#',
      live: '#'
    }
  ];

  const handleLinkClick = (e, link) => {
    if (link === '#') {
      e.preventDefault();
      Swal.fire({
        title: "Project In Progress",
        text: "The live demo for this project is currently unavailable as it's still being worked on. Please check back later!",
        icon: "info",
        confirmButtonColor: "var(--accent-1)",
        background: "var(--bg-lighter)",
        color: "var(--text-primary)"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="section relative">
      <div className="container">
        <div className="section-header">
          <h2 className="title-medium">Featured <span className="text-gradient">Projects</span></h2>
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
              <motion.div 
                className="project-tilt-card"
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-panel project-card">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc text-secondary">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} onClick={(e) => handleLinkClick(e, project.github)} className="project-link" title="GitHub Code"><FaGithub /></a>
                      <a href={project.live} onClick={(e) => handleLinkClick(e, project.live)} className="project-link" title="Live Demo"><FaExternalLinkAlt /></a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
