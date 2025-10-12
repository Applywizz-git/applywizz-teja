import { motion } from 'framer-motion';
import { useState } from 'react';
import { skillCategories } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? skillCategories.filter(cat => cat.category === selectedCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            My technology stack and expertise areas
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                !selectedCategory
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground border border-border'
              }`}
            >
              All
            </motion.button>
            {skillCategories.map((category) => (
              <motion.button
                key={category.category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground border border-border'
                }`}
              >
                {category.category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-12">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: 'var(--shadow-glow)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="p-6 glass hover:border-primary transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          whileHover={{ 
                            rotate: [0, -10, 10, -10, 0],
                            scale: 1.2
                          }}
                          transition={{ duration: 0.5 }}
                          className="flex-shrink-0"
                        >
                          <skill.icon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2">{skill.name}</h4>
                          
                          {/* Linear Progress Bar */}
                          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="absolute inset-y-0 left-0 rounded-full"
                              style={{
                                background: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)'
                              }}
                              initial={{ width: '0%' }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.05, ease: 'easeOut' }}
                            />
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: '-100%' }}
                              animate={{ x: '200%' }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">Proficiency</span>
                            <motion.span 
                              className="text-xs font-bold text-primary"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.05 + 1 }}
                            >
                              {skill.proficiency}%
                            </motion.span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
