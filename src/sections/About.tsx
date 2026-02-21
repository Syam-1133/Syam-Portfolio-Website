import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'MS in Computer Science',
      school: 'Governors State University',
      location: 'Chicago, IL',
      period: 'Aug 2024 - May 2026',
      coursework: 'AI Foundations, Advanced OS, Reinforcement Learning, Algorithms',
    },
  ];

  const certifications = [
    'Machine Learning Specialization',
    'Deep Learning Specialization',
    'Computer Vision with OpenCV',
    'TensorFlow Developer Certificate',
  ];

  const highlights = [
    {
      icon: Code,
      title: '5+ Years',
      description: 'Industry Experience',
    },
    {
      icon: BookOpen,
      title: '700+',
      description: 'Problems Solved',
    },
    {
      icon: Award,
      title: '5 Star',
      description: 'HackerRank Rating',
    },
    {
      icon: GraduationCap,
      title: 'MS',
      description: 'Computer Science',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#007acc] text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white">
            Who I <span className="text-gradient">Am</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - About Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                My Journey in Tech
              </h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  I'm Syam, an MS student with 5 years of engineering experience and 2 years as machine learning engineer who's big on consistency and hard work. I enjoy messy data, tight deadlines, and AI systems that have to work in the real world. I show up every day to build, learn, break things, and fix them.
                </p>
                <p>
                  In my previous experience I worked on Developing a Transformer-based optical flow model for high-frame-rate autonomous systems using a 120+ GPU cluster
                </p>
                <p>
                  Trained embedded CV models for drone airfield recognition (90% F1) and reduced inference time by 40%
                </p>
                <p>
                  Designed <span className="text-[#007acc] font-medium">YOLOv8</span> + Intel RealSense-based navigation systems achieving ~5cm pose estimation accuracy
                </p>
                <p>
                  And earlier at <span className="text-[#007acc] font-medium">Alstom</span> I worked as embedded software engineer there I Verified and validated the embedded train control software for four prominent Metro projects: Kochi Metro, and the Chennai Metro REM (Canada Metro)
                </p>
                <p>
                  I'm passionate about building scalable, production-grade AI systems that move from research → deployment → impact.
                </p>
                <p>
                  And yes — I promise my debugging skills are stronger than my coffee ☕
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Certs */}
          <div className="space-y-6">
            {/* Education Card */}
            <div
              className={`glass rounded-2xl p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#007acc]/20 flex items-center justify-center">
                  <GraduationCap className="text-[#007acc]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-[#007acc]/30 pl-4 ml-2">
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <p className="text-[#007acc] font-medium">{edu.school}</p>
                  <p className="text-white/50 text-sm">{edu.location} | {edu.period}</p>
                  <p className="text-white/60 text-sm mt-2">
                    <span className="text-white/40">Coursework:</span> {edu.coursework}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div
              className={`glass rounded-2xl p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#007acc]/20 flex items-center justify-center">
                  <Award className="text-[#007acc]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Focus Card */}
            <div
              className={`glass rounded-2xl p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#007acc]/20 flex items-center justify-center">
                  <Code className="text-[#007acc]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Focus</h3>
              </div>
              
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  <span className="text-[#007acc] font-medium">Computer Vision:</span> Object Detection, Pose Estimation, Optical Flow
                </p>
                <p>
                  <span className="text-[#007acc] font-medium">Deep Learning:</span> CNNs, Transformers, LLms integration, Neural Networks
                </p>
                <p>
                  <span className="text-[#007acc] font-medium">ML Engineering:</span> Model Optimization, Embedded Systems, Production Deployment
                </p>
                <p>
                  <span className="text-[#007acc] font-medium">Tools:</span> PyTorch, TensorFlow, YOLOv8, OpenCV, Docker, AWS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div
          className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-[#007acc]/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-[#007acc]" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white">{item.title}</h4>
              <p className="text-white/60 text-sm mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
