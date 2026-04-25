import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Git & GitHub', level: 75 }
  ];

  const scrollVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scrollVariant}
          >
          <div className="section-header">
            <h2 className="title-medium">My <span className="text-gradient-2">Skills</span></h2>
            <div className="line-dec"></div>
          </div>

          <div className="skills-grid">
            {/* Frontend Skills */}
            <div className="glass-panel skills-category bento-large">
              <h3>Frontend Development</h3>
              <div className="skills-list">
                {skills.filter(s => ['React.js', 'HTML5 & CSS3', 'Tailwind CSS', 'JavaScript (ES6+)'].includes(s.name)).map((skill, index) => (
                  <div key={index} className="skill-item-mini">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage text-secondary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="glass-panel skills-category">
              <h3>Backend</h3>
              <div className="skills-list">
                {skills.filter(s => ['Node.js', 'Express.js', 'MongoDB'].includes(s.name)).map((skill, index) => (
                  <div key={index} className="skill-item-mini">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage text-secondary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="glass-panel skills-category">
              <h3>Tools</h3>
              <div className="skills-list">
                <div className="skill-item-mini">
                  <div className="skill-info"><span className="skill-name">Git & GitHub</span></div>
                  <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '75%' }}></div></div>
                </div>
                <div className="skill-item-mini">
                  <div className="skill-info"><span className="skill-name">VS Code</span></div>
                  <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: '90%' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
