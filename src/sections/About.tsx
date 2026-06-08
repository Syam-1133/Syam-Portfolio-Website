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
      title: '6+ Years',
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
                  Hey! I'm Syam, and honestly, I'm obsessed with building AI that actually works in the real world. I'm an Agentic AI Engineer with 6+ years of experience designing and deploying Agentic AI systems, multi-agent orchestration pipelines, and Generative AI solutions for enterprise applications. Specialized in building autonomous AI agents, multi-agent workflows, RAG systems, and intelligent automation platforms. After 6+ years working across data science, ML engineering, and now Agentic AI, I've learned that the coolest tech means nothing if it can't solve actual problems at scale 
                </p>
                <p>
                  My path wasn't linear—it was more like following the problem. Started at <span className="text-[#007acc] font-medium">Alstom as Data Scientist</span> solving railway maintenance issues with data pipelines and dashboards. Then moved to <span className="text-[#007acc] font-medium">Bombardier and Medha Servo Drives</span> where I got my hands dirty with predictive models that actually prevented equipment failures. Each role taught me something crucial: understanding your data, shipping reliable systems, and never settling for "good enough." Now at <span className="text-[#007acc] font-medium">USAA</span>, I'm building autonomous AI agents that make decisions without hand-holding. That's the dream.
                </p>
                <p>
                  What gets me excited is taking research from papers and making it production-grade. LangChain, RAG systems, multi-agent orchestration—these aren't just buzzwords for me. They're tools to build systems that reason, handle edge cases, and fail gracefully. I care about the whole pipeline: from prompt engineering to MLOps infrastructure, from bias mitigation to actually understanding why an AI system made a decision.
                </p>
                <p>
                  I'm not here to build another chatbot or demo. I'm here to push AI from research labs into real-world impact. If you're working on something ambitious and want someone who gives a damn about doing it right, let's talk. 🚀
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
              
              <div className="space-y-3 text-white/70 text-sm leading-relaxed">
                <p>
                  <span className="text-[#007acc] font-medium">Agentic AI:</span> Multi-Agent Orchestration, Tool Use, Memory & Planning, Autonomous Workflows
                </p>
                <p>
                  <span className="text-[#007acc] font-medium">LLM Frameworks:</span> LangChain, LangGraph, AutoGen, CrewAI, LlamaIndex, DSPy, Haystack
                </p>
                <p>
                  <span className="text-[#007acc] font-medium">GenAI & RAG:</span> GPT-4o, Claude, Gemini, Llama 3, RAG Pipelines, Semantic Search, Fine-tuning
                </p>
                <p>
                  <span className="text-[#007acc] font-medium">MLOps / LLMOps:</span> Docker, Kubernetes, MLflow, LangSmith, AWS SageMaker, GCP Vertex AI
                </p>
                <p className="pt-2 border-t border-white/10 mt-4">
                  <span className="text-[#007acc] font-medium">What Drives Me:</span> I thrive on building autonomous AI systems that solve real enterprise problems — from agentic reasoning and tool use to scalable RAG and production-grade LLMOps. Every challenge is an opportunity to push AI from research into meaningful impact.
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
