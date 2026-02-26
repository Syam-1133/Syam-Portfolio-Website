import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Mail, X } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const fullText = 'Passionate AI engineer  ';
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-2xl w-full mx-4">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src="/profile.jpg"
              alt="Syam Gudipudi"
              className="w-full h-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="text-[#007acc] text-lg font-medium tracking-wide">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1
              className={`mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-montserrat text-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="text-gradient">Syam Gudipudi</span>
            </h1>

            {/* Title with Typewriter Effect */}
            <div
              className={`mt-6 h-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <span className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
                {typedText}
                <span className="animate-blink text-[#007acc]">|</span>
              </span>
            </div>

            {/* Description */}
            <p
              className={`mt-6 text-base lg:text-lg text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
            AI Engineer,
            Machine learning • Computer Vision • GenAI • LLMs
            Designing Scalable AI Systems 
            From Research → Deployment → Impact

            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View My Work
                <ChevronDown size={18} />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`mt-8 flex gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1.2s' }}
            >
              <a
                href="https://github.com/Syam-1133"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#007acc] hover:border-[#007acc]/50 transition-all duration-300"
              >
                <GitHubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/syam1133/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#007acc] hover:border-[#007acc]/50 transition-all duration-300"
              >
                <LinkedInIcon size={20} />
              </a>
              <a
                href="mailto:syamkklr123@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#007acc] hover:border-[#007acc]/50 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#007acc] to-[#00d4ff] rounded-full blur-3xl opacity-30 animate-pulse-glow" />
              
              {/* Image Container - Circular */}
              <div
                role="button"
                tabIndex={0}
                aria-label="View full profile photo"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 glow-border cursor-pointer group"
                onClick={() => setShowImageModal(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setShowImageModal(true); } }}
              >
                <img
                  src="/profile.jpg"
                  alt="Syam Gudipudi"
                  className="w-full h-[120%] object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500 -mt-[10%]"
                />
                
                {/* Click to view overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                  <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                    Click to view
                  </span>
                </div>
              </div>

              {/* Floating Badges */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass text-sm font-medium text-[#007acc] animate-float"
                style={{ animationDelay: '0s' }}
              >
                AI/ML
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass text-sm font-medium text-[#00d4ff] animate-float"
                style={{ animationDelay: '2s' }}
              >
                Computer Vision
              </div>
              <div
                className="absolute top-1/2 -right-8 px-4 py-2 rounded-full glass text-sm font-medium text-white/80 animate-float"
                style={{ animationDelay: '4s' }}
              >
                Deep Learning
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-[#007acc] transition-colors"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
