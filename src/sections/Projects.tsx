import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Cpu, Hand, Car, ShoppingCart, Gamepad2, TrafficCone, Bot } from 'lucide-react';
import { GitHubIcon } from '../components/SocialIcons';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      title: 'Document Intelligence Q&A Chatbot',
      subtitle: 'Voice-Enabled Agentic RAG Platform',
      description:
        'Agentic AI-powered Document Intelligence Platform with an end-to-end RAG pipeline using LangChain LCEL, FAISS vector store, and OpenAI Embeddings. Integrates Groq Llama 3.3 70B with custom prompt engineering for autonomous context-aware document Q&A under 3s latency.',
      image: '/project5.jpg',
      icon: Bot,
      tags: ['Python', 'LangChain', 'LangGraph', 'Groq', 'OpenAI', 'FAISS', 'Streamlit', 'Agentic RAG'],
      achievements: ['Sub-3s document Q&A latency', 'FAISS vector store + OpenAI Embeddings', 'Groq Llama 3.3 70B integration'],
      github: 'https://github.com/Syam-1133/Syam-s-AI-Powered-Chatbot-and-Document-Intelligence-Platform',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7378632424743690260/',
    },
    {
      title: 'Amazon Recommender System',
      subtitle: 'Scalable Big Data ML Recommendations',
      description:
        'Scalable Amazon recommender system using collaborative filtering and cosine similarity for user-item matching, processing 548K+ products and 7M+ reviews. Achieves under 100ms search and under 500ms recommendation response times, deployed via Docker and AWS Elastic Beanstalk.',
      image: '/project4.jpg',
      icon: ShoppingCart,
      tags: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Docker', 'AWS', 'Apache Spark'],
      achievements: ['548K+ products & 7M+ reviews', '<100ms search response', 'AWS Elastic Beanstalk deployment'],
      github: 'https://github.com/Syam-1133/Amazon-Recommender-System',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7393574990387843072/',
    },
    {
      title: 'Gesture Controlled AI Math Assistant',
      subtitle: 'Computer Vision + Google Gemini LLM',
      description:
        'AI-driven hand gesture recognition system utilizing OpenCV and cvzone for real-time webcam interactions with under 100ms responsiveness. Integrates Google Gemini 2.0 Flash (multimodal LLM) to process hand-drawn math equations as images and return AI-generated solutions in real time.',
      image: '/project3.jpg',
      icon: Hand,
      tags: ['Python', 'OpenCV', 'Google Gemini LLM', 'Computer Vision', 'Generative AI'],
      achievements: ['<100ms gesture response time', 'Gemini 2.0 Flash multimodal integration', 'Real-time hand-drawn math solving'],
      github: 'https://github.com/Syam-1133/Math-Gesture-Problem-Solver-Controlled-AI-Assistant',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7296226128183054336/',
    },
    {
      title: 'Multi-Environment Decision Making',
      subtitle: 'Deep Reinforcement Learning Driving Agent',
      description:
        'Autonomous driving agent that makes tactical decisions and navigates through traffic in multiple environments using a custom encoder-decoder policy network with Double DQN, trained on HPC clusters.',
      image: '/project1.jpg',
      icon: Car,
      tags: ['Python', 'PyTorch', 'Double DQN', 'HPC', 'Reinforcement Learning'],
      achievements: ['18% improvement in decision accuracy', 'Custom encoder-decoder policy network', 'Multi-environment support'],
      github: 'https://github.com/Syam-1133/Multi-Environment-Decision-Making-with-Deep-Reinforcement-Learning',
      demo: '#',
    },
    {
      title: 'AI Car Self-Driving Simulation',
      subtitle: 'Neural Networks & Genetic Algorithms',
      description:
        'AI-powered Self-Driving Simulation demonstrating how neural networks and genetic algorithms evolve self-driving cars that learn to navigate a racetrack, built entirely in pure Python.',
      image: '/project6.jpg',
      icon: Gamepad2,
      tags: ['Python', 'Pyglet', 'Neural Networks', 'Genetic Algorithms'],
      achievements: ['Self-learning AI cars', 'Evolution-based training', 'Pure Python implementation'],
      github: 'https://github.com/Syam-1133/AI-Car-Racing-Simulation',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7373956820316565504/',
    },
    {
      title: 'Traffic Monitoring System',
      subtitle: 'YOLOv8 Real-Time Vehicle Detection',
      description:
        'Real-time traffic monitoring system using YOLOv8 for vehicle detection, speed estimation, and traffic flow analysis. Counts vehicles entering/exiting zones and provides actionable traffic insights.',
      image: '/project7.jpg',
      icon: TrafficCone,
      tags: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision'],
      achievements: ['Real-time YOLOv8 detection', 'Speed estimation', 'Multi-zone vehicle counting'],
      github: 'https://github.com/Syam-1133/Traffic-Monitoring-System-with-YOLO',
      demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7295462416849518593/',
    },
  ];

  return (
    <section
      id="projects"
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
            My Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A collection of my recent work in Agentic AI, RAG systems, multi-agent pipelines, and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                    }`}
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#007acc]/80 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="text-white" size={20} />
                  </div>
                  
                  {/* Quick Actions */}
                  <div
                    className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-2'
                    }`}
                  >
                    <a
                      href={project.github}
                      {...(project.github !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#007acc] transition-colors"
                    >
                      <GitHubIcon size={16} />
                    </a>
                    <a
                      href={project.demo}
                      {...(project.demo !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#007acc] transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#007acc] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#007acc] text-sm font-medium mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-white/60 text-sm mt-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-white/5 text-white/70 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="text-[#007acc]" size={14} />
                      <span className="text-xs text-white/50 uppercase tracking-wider">
                        Key Results
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-white/60 text-xs flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#007acc]" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <a
            href="https://github.com/Syam-1133?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#007acc] hover:text-white transition-colors"
          >
            <GitHubIcon size={20} />
            <span>View More on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
