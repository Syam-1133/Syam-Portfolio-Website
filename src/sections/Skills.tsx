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
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Bash', 'Java', 'C++', 'R'],
      color: '#007acc',
    },
    {
      title: 'LLM Frameworks & Tools',
      icon: Sparkles,
      skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'AutoGen', 'CrewAI', 'Haystack', 'DSPy', 'Semantic Kernel', 'OpenAI Agents SDK', 'Hugging Face'],
      color: '#00d4ff',
    },
    {
      title: 'AI / ML & GenAI',
      icon: Brain,
      skills: ['Agentic AI', 'Multi-Agent Systems', 'RAG', 'LLMs', 'NLP', 'Prompt Engineering', 'Fine-tuning (LoRA, QLoRA)', 'Semantic Search', 'RLHF'],
      color: '#7c3aed',
    },
    {
      title: 'Vector Databases',
      icon: Database,
      skills: ['Pinecone', 'Weaviate', 'ChromaDB', 'FAISS', 'Qdrant', 'Milvus', 'pgvector', 'Elasticsearch'],
      color: '#f59e0b',
    },
    {
      title: 'MLOps / LLMOps',
      icon: GitBranch,
      skills: ['Docker', 'Kubernetes', 'MLflow', 'LangSmith', 'AgentOps', 'Weights & Biases', 'GitHub Actions', 'Jenkins', 'CI/CD'],
      color: '#10b981',
    },
    {
      title: 'Cloud & Backend',
      icon: Server,
      skills: ['AWS (SageMaker, Lambda, S3, Bedrock)', 'Azure OpenAI', 'GCP Vertex AI', 'FastAPI', 'Flask', 'REST APIs', 'Microservices'],
      color: '#ef4444',
    },
    {
      title: 'ML & NLP Frameworks',
      icon: Layers,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM', 'SpaCy', 'NLTK', 'OpenCV', 'Pandas', 'NumPy'],
      color: '#8b5cf6',
    },
    {
      title: 'LLM Models & Platforms',
      icon: Box,
      skills: ['GPT-4o', 'Claude', 'Gemini', 'Llama 3', 'Mistral', 'Cohere', 'Ollama', 'AWS Bedrock', 'Azure OpenAI', 'GCP Vertex AI'],
      color: '#06b6d4',
    },
  ];

  const proficiencyData = [
    { skill: 'Python', level: 97 },
    { skill: 'Agentic AI / LLMs', level: 93 },
    { skill: 'LangChain / LangGraph', level: 91 },
    { skill: 'RAG Systems', level: 90 },
    { skill: 'MLOps / LLMOps', level: 88 },
    { skill: 'Vector Databases', level: 87 },
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
            className={`glass rounded-2xl p-6 md:col-span-2 lg:col-span-3 transition-all duration-700 ${
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

          {/* Responsible AI & Security */}
          <div
            className={`glass rounded-2xl p-6 md:col-span-2 lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/20 flex items-center justify-center">
                <Eye className="text-[#00d4ff]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Responsible AI & Data Engineering</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {['AI Governance', 'AI Guardrails', 'Prompt Injection Defense', 'Model Evaluation', 'Bias Mitigation', 'Explainable AI', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'Apache Spark', 'Hadoop', 'Kafka', 'ETL Pipelines', 'Streamlit', 'Gradio', 'Power BI', 'Tableau'].map((item, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
