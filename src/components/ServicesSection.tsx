import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bath, Building2, Waves, Wrench, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bath,
    title: 'Bathroom & Kitchen Caulking',
    description:
      'Expert sealing around bathtubs, showers, sinks, and countertops. Waterproof solutions that prevent mold and water damage.',
    features: ['Silicone application', 'Mold-resistant sealants', 'Re-caulking services'],
  },
  {
    icon: Building2,
    title: 'External Joint Sealing',
    description:
      'Professional expansion joint sealing for buildings, facades, and curtain walls. Weather-resistant protection for your property.',
    features: ['Expansion joints', 'Facade sealing', 'Weather protection'],
  },
  {
    icon: Waves,
    title: 'Pool & Wet Area Sealing',
    description:
      'Specialized waterproof caulking for pools, spas, and wet areas. Durable solutions that withstand constant water exposure.',
    features: ['Pool surrounds', 'Spa areas', 'Waterproof membranes'],
  },
  {
    icon: Wrench,
    title: 'Commercial Projects',
    description:
      'Large-scale caulking solutions for commercial and industrial buildings. On-time delivery with minimal disruption.',
    features: ['High-rise buildings', 'Industrial facilities', 'Retail spaces'],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-navy clip-diagonal-reverse">
      <div className="container mx-auto px-4 pt-12" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-blue-bright text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cream mb-4">
            Comprehensive Caulking Solutions
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            From residential bathrooms to commercial high-rises, we deliver exceptional 
            caulking and sealing services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-cream" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-cream mb-3">
                    {service.title}
                  </h3>
                  <p className="text-cream/70 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="px-3 py-1 bg-cream/10 rounded-full text-cream/80 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-accent-gradient hover:opacity-90 transition-opacity text-lg px-8"
            onClick={scrollToContact}
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
