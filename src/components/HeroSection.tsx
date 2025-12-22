import { motion } from 'framer-motion';
import { ArrowDown, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bathroom.jpg';

const features = [
  { icon: Shield, label: '10 Year Warranty' },
  { icon: Award, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Support' },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImage} />
          <source media="(min-width: 769px)" srcSet={heroImage} />
          <img
            src={heroImage}
            alt="Professional bathroom caulking work"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-secondary/10 blur-3xl animate-float-delayed" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-cream text-sm font-medium mb-6"
          >
            Sydney's Premier Caulking Specialists
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-card leading-tight mb-6"
          >
            Expert Caulking & Joint Sealing{' '}
            <span className="text-blue-bright">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/90 mb-8 max-w-2xl leading-relaxed"
          >
            Professional internal and external caulking services for residential and commercial 
            projects. Precision craftsmanship that stands the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-accent-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={() => scrollToSection('#contact')}
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream/30 text-card hover:bg-cream/10 text-lg px-8 py-6 bg-transparent"
              onClick={() => scrollToSection('#projects')}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full"
              >
                <feature.icon className="w-5 h-5 text-blue-bright" />
                <span className="text-cream text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 hover:text-cream transition-colors"
        onClick={() => scrollToSection('#about')}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
