import { motion } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    toast({ title: 'Message Sent!', description: 'Thank you for reaching out!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get In <span className="gradient-text">Touch</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="p-8 glass">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
                </div>
                <Button type="submit" className="w-full neon-glow">Send Message</Button>
              </form>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <Card className="p-6 glass flex items-center gap-4"><Mail className="w-8 h-8 text-primary" /><div><p className="font-semibold">Email</p><p className="text-muted-foreground">{personalInfo.email}</p></div></Card>
            <Card className="p-6 glass flex items-center gap-4"><Phone className="w-8 h-8 text-primary" /><div><p className="font-semibold">Phone</p><p className="text-muted-foreground">{personalInfo.phone}</p></div></Card>
            <Card className="p-6 glass flex items-center gap-4"><MapPin className="w-8 h-8 text-primary" /><div><p className="font-semibold">Location</p><p className="text-muted-foreground">{personalInfo.location}</p></div></Card>
            {/* <div className="flex gap-4">
              <motion.a href={personalInfo.github} whileHover={{ scale: 1.1 }} className="p-4 glass rounded-full neon-glow"><Github className="w-6 h-6" /></motion.a>
              <motion.a href={personalInfo.linkedin} whileHover={{ scale: 1.1 }} className="p-4 glass rounded-full neon-glow"><Linkedin className="w-6 h-6" /></motion.a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
