import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Users, Home, Building } from 'lucide-react';
import serviceInternal from '@/assets/service-internal.jpg';
import serviceExternal from '@/assets/service-external.jpg';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Home, value: '1,200+', label: 'Residential Projects' },
  { icon: Building, value: '350+', label: 'Commercial Projects' },
];

const benefits = [
  'Premium quality sealants & materials',
  'Fully licensed & insured team',
  'Free detailed quotes',
  'Competitive pricing guaranteed',
  'Clean & professional service',
  '10-year workmanship warranty',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Sydney's Trusted Caulking Experts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With years of experience delivering exceptional results, we specialize in all areas 
            of internal and external caulking and joint sealing.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Images Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <picture>
                <source media="(max-width: 768px)" srcSet={serviceExternal} />
                <img
                  src={serviceExternal}
                  alt="External caulking work on building"
                  className="rounded-2xl shadow-elevated w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </picture>
              <picture>
                <source media="(max-width: 768px)" srcSet={serviceInternal} />
                <img
                  src={serviceInternal}
                  alt="Internal caulking work"
                  className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-2xl shadow-elevated object-cover border-4 border-background hidden md:block"
                  loading="lazy"
                />
              </picture>
            </div>
            {/* Experience Badge */}
            <div className="absolute -top-4 -left-4 bg-accent-gradient text-card px-6 py-4 rounded-xl shadow-glow">
              <span className="block text-3xl font-heading font-bold">15+</span>
              <span className="text-sm opacity-90">Years Experience</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Quality Craftsmanship You Can Trust
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Primeline Services is a Sydney-based company dedicated to delivering 
              superior caulking and joint sealing services. Our skilled team brings precision 
              and attention to detail to every project, ensuring lasting results that protect 
              and beautify your property.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need bathroom caulking, window sealing, or commercial joint work, 
              we have the expertise to handle projects of any size with professionalism and care.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 bg-card rounded-2xl p-8 shadow-soft"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="block text-3xl font-heading font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
