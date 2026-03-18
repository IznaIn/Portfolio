import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaLaptopCode, FaDatabase, FaServer, FaReact } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="section relative">
      {/* Background Element */}
      <div className="bgo bgo-3"></div>

      <div className="container">
        <div className="section-header">
          <h2 className="title-medium">My <span className="text-gradient">Experience</span></h2>
          <div className="line-dec"></div>
        </div>

        <div className="experience-timeline">
          <motion.div 
            className="timeline-item"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="timeline-dot"></div>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} className="exp-tilt-card">
              <motion.div variants={itemVariants} className="glass-panel exp-card">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3>MERN Stack Developer</h3>
                    <span className="exp-company text-gradient">
                      <a href="https://edumixtechnologies.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        Edumix Technologies
                      </a>
                    </span>
                  </div>
                  <div className="exp-duration text-secondary">1 Year Experience</div>
                </div>
                
                <p className="exp-desc">
                  Over the past year, I have been deeply engaged in building dynamic, full-stack web applications 
                  using the MERN stack (MongoDB, Express.js, React, Node.js). My focus has been on architecting 
                  scalable backends and creating responsive, interactive frontends.
                </p>
                
                <div className="exp-tech">
                  <span className="tech-badge"><FaReact className="tech-icon" /> React.js</span>
                  <span className="tech-badge"><FaServer className="tech-icon" /> Node.js</span>
                  <span className="tech-badge"><FaLaptopCode className="tech-icon" /> Express.js</span>
                  <span className="tech-badge"><FaDatabase className="tech-icon" /> MongoDB</span>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
