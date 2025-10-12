import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            href={personalInfo.github}
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-foreground hover:text-primary neon-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          <motion.a
            href={personalInfo.linkedin}
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-foreground hover:text-primary neon-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>

          {/* ✅ Mailto hardcoded */}
          <motion.a
href="https://mail.google.com/mail/?view=cm&to=ravitejamanne22@gmail.com"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-foreground hover:text-primary neon-glow"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-primary-foreground neon-glow z-50"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
