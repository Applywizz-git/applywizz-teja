import { motion } from 'framer-motion';
import { education } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-glow)' }}
            >
              <Card className="p-6 glass h-full">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 gradient-text">{edu.degree}</h3>
                <p className="font-semibold mb-2">{edu.institution}</p>
                <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{edu.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
