import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/profile.jpeg';
import './Hero.css';

const Hero = () => {
  const [imgError, setImgError] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="hero section flex-center">
      <div className="container hero-container-flex">
        <motion.div
          className="hero-tilt-wrapper"
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-subtitle">
              <span className="crystal-badge">Full Stack Developer</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="title-large hero-title">
              Hi, I'm <br />
              <span className="text-gradient">Mohammad Iznain</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-description text-secondary">
              I craft immersive, high-performance web experiences. Currently pursuing my BE from
              Swami Narayan Siddhanta College with 1 year of MERN Stack expertise.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Let's Talk</a>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-socials">
              <a href="https://github.com/IznaIn" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohammad-iznain-546a182b8" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadiznain@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Gmail"><FaEnvelope /></a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-side"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="profile-frame">
            <div className="profile-image-inner">
              <img 
                src={profilePic} 
                alt="Mohammad Iznain" 
                className="profile-pic" 
                onError={(e) => {
                  if (!e.target.src.endsWith('.jpg')) {
                    e.target.src = "/src/assets/profile.jpg";
                  } else {
                    e.target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'profile-placeholder';
                    placeholder.innerHTML = '<span>Add Your Photo<br/>(profile.jpeg)</span>';
                    e.target.parentNode.appendChild(placeholder);
                  }
                }}
              />
            </div>
            <div className="profile-glow"></div>
            <div className="profile-lines"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements Background */}
      <motion.div
        className="floating-shape shape-1"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="floating-shape shape-2"
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;
