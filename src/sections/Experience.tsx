import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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

  const experiences = [
    {
      title: 'Drone Engineering Club Leader',
      company: 'Governors State University',
      location: 'Chicago, Illinois',
      period: 'Jan 2025 - April 2026',
      type: 'Leadership',
      description: 'Leading a team of 20+ members in planning, designing, and executing drone engineering projects and workshops.',
      achievements: [
        'Led a team of 20+ members in planning, designing, and executing drone engineering projects',
        'Organized workshops on drone programming, computer vision, and autonomous navigation',
        'Mentored students in implementing computer vision algorithms for real-time object detection',
        'Implemented gesture-based drone control system using MediaPipe and Python',
      ],
    },
    {
      title: 'Machine Learning Engineer / R&D Engineer',
      company: 'Medha Servo Drives Pvt Ltd',
      location: 'Hyderabad, India',
      period: 'Aug 2023 - July 2024',
      type: 'Full-time',
      description: 'Developed computer vision and deep learning solutions for drone navigation and autonomous systems.',
      achievements: [
        'Trained embedded computer vision deep learning models for drone airfield recognition, achieving 90% F1 score',
        'Designed drone navigation algorithms using YOLOv8 integrated with Intel RealSense technology',
        'Improved pose estimation precision to within 5cm across static objects during flight tests',
        'Benchmarked computer vision architectures (CLIP, ResNet) and developed lightweight model reducing processing time by 40%',
        'Developed custom object detection models using YOLOv8 achieving 85% IoU and 90% F1 score',
      ],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Updater Services Pvt Ltd',
      location: 'Delhi, India',
      period: 'Nov 2021 - Aug 2022',
      type: 'Contract',
      description: 'Developed optical flow models using transformers for high-speed robotic systems and autonomous vehicles.',
      achievements: [
        'Developed Optical Flow model using Transformer and GPT-3 for high frame rate processing',
        'Exploited temporal cues from multiple images for high-speed Autonomous systems',
        'Conducted research and data analysis to identify error rates correlated to frame rates',
        'Generated diverse frame rate datasets using a cluster of 120+ GPUs with OpenCV and multi-threading',
      ],
    },
    {
      title: 'Embedded Software Engineer Trainee',
      company: 'Alstom',
      location: 'Bangalore, India',
      period: 'July 2018 - Aug 2021',
      type: 'Full-time',
      description: 'Verified and validated embedded train control software for major metro projects.',
      achievements: [
        'Verified and validated embedded train control software for Kochi Metro and Chennai Metro REM projects',
        'Executed comprehensive testing protocols for Main Processing Unit software',
        'Oversaw critical train functions and interfaced with brake, traction, signaling subsystems',
        'Ensured safety compliance and reliability for public transportation systems',
      ],
    },
  ];

  return (
    <section
      id="experience"
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
            My Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#007acc] via-[#007acc]/50 to-transparent transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
            style={{ transformOrigin: 'top' }}
          />

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#007acc] border-4 border-black z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.15}s` }}
                />

                {/* Card */}
                <div
                  className={`ml-12 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:mr-[52%]' : 'lg:ml-[52%]'
                  }`}
                >
                  <div
                    className="glass rounded-2xl p-6 cursor-pointer card-hover"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="text-[#007acc]" size={18} />
                          <span className="text-[#007acc] text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-white/80 font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-white/70">{exp.description}</p>

                    {/* Expandable Achievements */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                      }`}
                    >
                      <div className="border-t border-white/10 pt-4">
                        <h4 className="text-sm font-semibold text-white/80 mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-white/60 text-sm"
                            >
                              <ChevronRight
                                className="text-[#007acc] mt-0.5 flex-shrink-0"
                                size={14}
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expand Indicator */}
                    <div className="mt-4 flex justify-center">
                      <div
                        className={`w-8 h-1 rounded-full transition-all duration-300 ${
                          expandedIndex === index
                            ? 'bg-[#007acc]'
                            : 'bg-white/20'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
