import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Bathroom Caulking',
  'Kitchen Sealing',
  'External Joints',
  'Pool Sealing',
  'Commercial Projects',
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-cream font-heading font-bold text-xl">E</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-cream">
                  Elite Caulking
                </span>
                <span className="block text-xs text-cream/60">Solutions</span>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Sydney's trusted caulking and joint sealing specialists. 
              Delivering quality craftsmanship for residential and commercial projects.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-cream/70 hover:text-cream transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-cream/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-3 text-sm text-cream/70">
              <p>Greater Sydney, NSW</p>
              <a href="tel:0400123456" className="block hover:text-cream transition-colors">
                0400 123 456
              </a>
              <a
                href="mailto:info@elitecaulking.com.au"
                className="block hover:text-cream transition-colors"
              >
                info@elitecaulking.com.au
              </a>
              <p>Mon-Sat: 7am - 6pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Elite Caulking Solutions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
