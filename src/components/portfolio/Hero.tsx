import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolioData';
import profileImage from '@/assets/profile.jpg';

const NAVBAR_OFFSET_CLASS = 'mt-[80px] lg:mt-0';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden py-16 min-h-screen lg:h-screen lg:py-0"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div
          className={`flex flex-col gap-12 items-center text-center md:grid md:grid-cols-2 md:text-left md:gap-16 lg:gap-12 ${NAVBAR_OFFSET_CLASS}`}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2 mt-6 md:mt-8"  // 👈 lowered the image
          >
            <motion.div
              animate={{ y: [0, -20, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="
                relative 
                max-w-[275px] 
                sm:max-w-[430px] 
                md:max-w-[430px] 
                lg:max-w-[450px] 
                aspect-square
              "  // 👈 reduced image size across breakpoints
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50 blur-3xl"
              />
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary/30">
                <motion.img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                style={{ transform: 'scale(1.1)' }}
              />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-primary mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              {personalInfo.name}
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/80 min-h-[3rem] sm:min-h-[4rem]">
              <TypeAnimation
                sequence={[
                  'Java Full Stack Developer',
                  2000,
                  'Spring Boot Expert',
                  2000,
                  'Cloud Solutions Architect',
                  2000,
                  'Microservices Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text"
              />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              {personalInfo.summary.split('.')[0]}.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <ScrollLink to="projects" smooth={true} offset={-80} duration={500}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero flex items-center gap-2"
                >
                  View Projects <ArrowRight className="w-5 h-5" />
                </motion.button>
              </ScrollLink>

              <motion.a
                href="/assets/resume.pdf"
                download="Ravi_Teja_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
