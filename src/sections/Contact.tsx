import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setSubmitError(false);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'syamkklr123@gmail.com',
      href: 'mailto:syamkklr123@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 312-813-0628',
      href: 'tel:+13128130628',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chicago, Illinois',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: GitHubIcon,
      label: 'GitHub',
      href: 'https://github.com/Syam-1133',
      color: '#333',
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/syam1133/',
      color: '#0077b5',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 z-10"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#007acc] text-sm font-medium tracking-widest uppercase">
            Let's Connect
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 relative z-10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="glass rounded-xl p-4 flex items-center gap-4 card-hover group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#007acc]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#007acc]/30 transition-colors">
                    <info.icon className="text-[#007acc]" size={20} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-[#007acc] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#007acc]/50 hover:bg-[#007acc]/10 transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass rounded-xl p-6 flex items-center gap-4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 animate-ping" />
              </div>
              <div>
                <p className="text-white font-medium">Available for Opportunities</p>
                <p className="text-white/50 text-sm">Open to full-time roles and collaborations</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 relative z-20 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="glass rounded-2xl p-6 lg:p-8 relative overflow-hidden z-20">
              {/* Border Animation */}
              <div className="absolute inset-0 rounded-2xl border border-[#007acc]/30" />
              
              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#007acc] focus:outline-none focus:ring-1 focus:ring-[#007acc] transition-all relative z-30"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#007acc] focus:outline-none focus:ring-1 focus:ring-[#007acc] transition-all relative z-30"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#007acc] focus:outline-none focus:ring-1 focus:ring-[#007acc] transition-all resize-none relative z-30"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {submitError && (
                    <p className="text-red-400 text-sm text-center">
                      Failed to send message. Please try again or email me directly at{' '}
                      <a href="mailto:syamkklr123@gmail.com" className="underline hover:text-red-300">
                        syamkklr123@gmail.com
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative z-30"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
