import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    // Replace this with your actual Web3Forms access key
    formData.append("access_key", "19df1dd8-6367-4f80-bfa2-ceb5feaad46c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out. I will get back to you soon.",
          icon: "success",
          confirmButtonColor: "var(--accent-1)",
          background: "var(--bg-color)",
          color: "var(--text-primary)"
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "var(--accent-1)",
          background: "var(--bg-color)",
          color: "var(--text-primary)"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error. Please try again later.",
        icon: "error",
        confirmButtonColor: "var(--accent-1)",
        background: "var(--bg-color)",
        color: "var(--text-primary)"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="section">
      {/* Background Decor */}
      <div className="bgo bgo-4"></div>

      <div className="container">
        <div className="section-header">
          <h2 className="title-medium">Get In <span className="text-gradient">Touch</span></h2>
          <div className="line-dec"></div>
        </div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={itemVariants} className="glass-panel contact-card">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p className="text-secondary">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadiznain@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                    mohammadiznain@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel contact-card">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <h3>Phone</h3>
                <p className="text-secondary">+91 8767918164</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel contact-card">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Location</h3>
                <p className="text-secondary">India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="glass-panel contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Send a Message</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
