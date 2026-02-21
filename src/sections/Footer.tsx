import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Syam-1133', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/syam1133/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:syamkklr123@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center lg:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold font-montserrat text-gradient"
            >
              Syam Gudipudi
            </button>
            <p className="text-white/50 text-sm mt-2">
              Machine Learning Engineer & AI Specialist
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/60 hover:text-[#007acc] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#007acc] hover:border-[#007acc]/50 transition-all duration-300"
                title={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {currentYear} Syam Gudipudi. All rights reserved.
          </p>

          {/* Made With */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart className="text-red-500" size={14} fill="currentColor" />
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-[#007acc]/20 flex items-center justify-center text-[#007acc] hover:bg-[#007acc] hover:text-white transition-all duration-300"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
