import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <Card className="p-6 glass h-full hover:border-primary transition-all group">
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative">
                  {/* Badge Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary p-0.5"
                  >
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>

                  {/* Certificate Name */}
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-xl font-bold mb-2 text-center gradient-text"
                  >
                    {cert.name}
                  </motion.h3>

                  {/* Issuer and Date */}
                  <div className="text-center mb-4">
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>

                  {/* Credential ID */}
                  <div className="flex justify-center mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {cert.credentialId}
                    </Badge>
                  </div>

                  {/* Link */}
                  {cert.link && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span className="text-sm font-medium">View Credential</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
