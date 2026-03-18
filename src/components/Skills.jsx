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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
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
            {skills.map((skill, index) => (
              <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} scale={1.05} transitionSpeed={2000} className="skill-tilt-wrapper">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage text-secondary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
