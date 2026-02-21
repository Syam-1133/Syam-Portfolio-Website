import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Eye, 
  Server, 
  GitBranch,
  Layers,
  Box,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'C', 'C++', 'Java', 'SQL'],
      color: '#007acc',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'Scikit-learn', 'Flask', 'Pandas', 'NumPy','RAG'],
      color: '#00d4ff',
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: ['Deep Learning', 'Computer Vision', 'Neural Networks', 'CNN', 'RNN', 'Transformers', 'LLMs integration', 'Reinforcement Learning'],
      color: '#7c3aed',
    },
    {
      title: 'Technologies',
      icon: Server,
      skills: ['Docker', 'AWS', 'GCP', 'Git', 'MLflow', 'Linux'],
      color: '#10b981',
    },
    {
      title: 'Specializations',
      icon: Eye,
      skills: ['Object Detection', 'Image Segmentation', 'Pose Estimation', 'Optical Flow', 'Autonomous Systems'],
      color: '#f59e0b',
    },
  ];

  const proficiencyData = [
    { skill: 'Python', level: 95 },
    { skill: 'PyTorch', level: 90 },
    { skill: 'Computer Vision', level: 88 },
    { skill: 'Deep Learning', level: 85 },
    { skill: 'OpenCV', level: 92 },
    { skill: 'TensorFlow', level: 80 },
  ];

  return (
    <section
      id="skills"
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
            My Expertise
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in AI/ML and software engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon style={{ color: category.color }} size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`skill-node transition-all duration-300 ${
                      hoveredSkill === skill
                        ? 'bg-[#007acc]/30 border-[#007acc]/50 text-white scale-105'
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Proficiency Chart */}
          <div
            className={`glass rounded-2xl p-6 md:col-span-2 lg:col-span-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#007acc]/20 flex items-center justify-center">
                <Sparkles className="text-[#007acc]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Core Competencies</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {proficiencyData.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/80">{item.skill}</span>
                    <span className="text-[#007acc]">{item.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#007acc] to-[#00d4ff] transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${item.level}%` : '0%',
                        transitionDelay: `${0.8 + i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`glass rounded-2xl p-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center">
                <Box className="text-[#00d4ff]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Tools & Platforms</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <GitBranch className="text-[#007acc]" size={16} />
                <span className="text-white/70 text-sm">Git & Version Control</span>
              </div>
              <div className="flex items-center gap-3">
                <Database className="text-[#007acc]" size={16} />
                <span className="text-white/70 text-sm">SQL & NoSQL Databases</span>
              </div>
              <div className="flex items-center gap-3">
                <Server className="text-[#007acc]" size={16} />
                <span className="text-white/70 text-sm">Cloud Platforms (AWS/GCP)</span>
              </div>
              <div className="flex items-center gap-3">
                <Brain className="text-[#007acc]" size={16} />
                <span className="text-white/70 text-sm">MLOps & Model Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
