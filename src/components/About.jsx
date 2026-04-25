import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGraduationCap, FaCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [showResume, setShowResume] = useState(false);
  const scrollVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariant}
        >
          <div className="section-header">
            <h2 className="title-medium">About <span className="text-gradient-2">Me</span></h2>
            <div className="line-dec"></div>
          </div>
          
          <div className="about-grid">
            <div className="about-text-content">
              <p className="about-desc text-secondary">
                I am a passionate software developer dedicated to building scalable and efficient web applications. 
                My journey began with a strong interest in how things work on the internet, which quickly evolved 
                into a deep dive into the MERN stack. I love solving complex problems, writing clean code, and 
                creating intuitive user experiences.
              </p>
              <button 
                className="btn btn-outline" 
                onClick={() => setShowResume(!showResume)}
                style={{ marginBottom: '20px' }}
              >
                {showResume ? 'Hide Resume Preview' : 'Preview My Resume'}
              </button>

              {showResume && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="resume-preview-container"
                >
                  <iframe 
                    src="/M-Resume.pdf" 
                    width="100%" 
                    height="600px" 
                    title="Resume Preview"
                    style={{ borderRadius: '12px', border: '1px solid var(--glass-border)' }}
                  />
                </motion.div>
              )}
            </div>
            
            <div className="education-cards">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={2000} className="edu-tilt-card">
                <motion.div 
                  className="glass-panel edu-card"
                  whileHover={{ boxShadow: "0 10px 30px rgba(14, 165, 233, 0.1)" }}
                >
                  <div className="edu-icon"><FaGraduationCap /></div>
                  <div className="edu-info">
                    <h3>Bachelor of Engineering (CE)</h3>
                    <p className="text-secondary">
                      <a href="https://ssitngp.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        Swami Narayan Siddhanta College
                      </a>
                    </p>
                    <span className="edu-year text-gradient">Currently Pursuing</span>
                  </div>
                </motion.div>
              </Tilt>
              
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={2000} className="edu-tilt-card">
                <motion.div 
                  className="glass-panel edu-card"
                  whileHover={{ boxShadow: "0 10px 30px rgba(139, 92, 246, 0.1)" }}
                >
                  <div className="edu-icon"><FaCode /></div>
                  <div className="edu-info">
                    <h3>Diploma in Engineering</h3>
                    <p className="text-secondary">
                      <a href="https://www.anjumanpolytechnic.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        Anjuman Polytechnique
                      </a>
                    </p>
                    <span className="edu-year text-gradient-2">Completed</span>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
