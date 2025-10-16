import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { personalInfo, stats } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {personalInfo.summary}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Core <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid grid-cols- md:grid-cols-3 gap-6">
            {[
              {
                title: 'Backend Development',
                desc: 'Java, Spring Boot, Microservices, REST APIs'
              },
              {
                title: 'Frontend Development',
                desc: 'React, Angular, TypeScript, Redux'
              },
              {
                title: 'Cloud & DevOps',
                desc: 'AWS, Azure, Kubernetes, Docker, CI/CD' 
              }
            ].map((item, index) => (
              <motion.div
  key={index}
  whileHover={{
    scale: 1.05,
    boxShadow: 'var(--shadow-glow)',
    border: '2px solid var(--primary)',  // Ensure it applies a purple border on hover
  }}
  transition={{ duration: 0.3 }}
>
  <Card className="p-6 glass border-2 border-transparent hover:border-primary hover:border-2 transition-all block w-full h-full">
    <h4 className="text-xl font-bold mb-3 gradient-text">{item.title}</h4>
    <p className="text-muted-foreground">{item.desc}</p>
  </Card>
</motion.div>




              // <motion.div
              //   key={index}
              //   whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }}
              //   transition={{ duration: 0.3 }}
              // >
              //   <Card className="p-6 glass hover:border-primary transition-all">
              //     <h4 className="text-xl font-bold mb-3 gradient-text">{item.title}</h4>
              //     <p className="text-muted-foreground">{item.desc}</p>
              //   </Card>
              // </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <Card className="p-6 glass text-center neon-glow">
        <motion.div
          className="text-4xl md:text-5xl font-extrabold gradient-text mb-2"
        >
          {count}{stat.suffix}
        </motion.div>
        <p className="text-sm md:text-base text-muted-foreground font-medium">
          {stat.label}
        </p>
      </Card>
    </motion.div>
  );
};

export default About;
