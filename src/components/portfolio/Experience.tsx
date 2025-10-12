import { motion } from 'framer-motion';
import { experience } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 rounded-full" />

          {experience.map((job, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-16 md:mb-12"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-primary opacity-20"
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: 'var(--shadow-glow)' }}
                  className={`md:w-[calc(50%-3rem)] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                <Card className="p-6 glass border-l-4 border-l-primary hover:border-l-secondary transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-2xl font-bold mb-2 gradient-text"
                      >
                        {job.title}
                      </motion.h3>
                      <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <ul className="space-y-2 mb-4">
                    {job.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                        className="text-sm flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary" className="neon-glow">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
