import { useEffect, useRef, useState } from 'react';
import { 
  Trophy, 
  Star, 
  Code2, 
  Target, 
  Award,
  Zap,
  Users,
  Medal
} from 'lucide-react';

const Achievements = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Star,
      title: '5 Star Rating',
      description: 'Achieved 5-star rating on HackerRank for Problem Solving',
      color: '#fbbf24',
    },
    {
      icon: Code2,
      title: '700+ Problems',
      description: 'Solved 500+ problems on LeetCode and 200+ on Coding Ninjas',
      color: '#007acc',
    },
    {
      icon: Users,
      title: 'VIT Robotics Club',
      description: 'Selected as member among 10,000+ applicants',
      color: '#10b981',
    },
    {
      icon: Trophy,
      title: 'Drone Club Leader',
      description: 'Leading 20+ members in drone engineering projects',
      color: '#f59e0b',
    },
    {
      icon: Target,
      title: '90% F1 Score',
      description: 'Achieved in drone airfield recognition models',
      color: '#ef4444',
    },
    {
      icon: Zap,
      title: '40% Performance',
      description: 'Reduced processing time with lightweight CV models',
      color: '#8b5cf6',
    },
  ];

  const stats = [
    { value: '5+', label: 'Years Experience', icon: Award },
    { value: '700+', label: 'Problems Solved', icon: Code2 },
    { value: '20+', label: 'Team Members Led', icon: Users },
    { value: '90%', label: 'Model Accuracy', icon: Target },
  ];

  return (
    <section
      id="achievements"
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
            Highlights
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white">
            Achievements & <span className="text-gradient">Milestones</span>
          </h2>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-[#007acc]/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-[#007acc]" size={24} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-6 transition-all duration-700 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${achievement.color}20` }}
                >
                  <achievement.icon
                    size={24}
                    style={{ color: achievement.color }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#007acc] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div
                className="mt-4 h-1 rounded-full opacity-30"
                style={{
                  background: `linear-gradient(90deg, ${achievement.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Featured Badge */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.9s' }}
        >
          <div className="glass rounded-2xl px-8 py-6 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007acc] to-[#00d4ff] flex items-center justify-center animate-pulse-glow">
              <Medal className="text-white" size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Continuous Learner</h4>
              <p className="text-white/60 text-sm mt-1">
                Always pushing boundaries and exploring new technologies in AI/ML
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
