import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { projects } from '@/data/portfolioData';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 10px, transparent 10px, transparent 20px)',
        }}
        initial={{ x: 0 }}
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions I've built and deployed
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="max-w-6xl mx-auto pb-16"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id} className="!w-full md:!w-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all">
                  {/* Project Image */}
                  <motion.div
                    className="relative h-64 overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
                    />
                  </motion.div>

                  {/* Project Content */}
                  <div className="p-6">
                    <motion.h3
                      whileHover={{ x: 5 }}
                      className="text-2xl font-bold mb-3 gradient-text"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          whileHover={{ x: 5 }}
                          className="text-sm flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Badge variant="outline" className="border-primary/50">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button className="w-full neon-glow">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
