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
      title: 'Agentic AI Engineer',
      company: 'USAA',
      location: 'Chicago, Illinois, USA',
      period: 'July 2025 - June 2026',
      type: 'Full-time',
      description: 'Designed and deployed enterprise-scale Agentic AI solutions using Python, FastAPI, LangChain, and LangGraph, automating insurance claims processing, fraud investigations, customer service workflows, and financial operations — reducing manual effort by 45% and improving response times by 60%.',
      achievements: [
        'Designed and deployed enterprise-scale Agentic AI solutions using Python, FastAPI, LangChain, LangGraph, and OpenAI APIs, automating customer service workflows, insurance claims processing, fraud investigations, and financial operations, reducing manual effort by 45% and improving response times by 60%.',
        'Developed intelligent AI Agents and Multi-Agent Systems using LangGraph, AutoGen, CrewAI, and DSPy to orchestrate policy servicing, claims adjudication, risk assessment, and customer support operations, increasing operational efficiency by 40% across business units.',
        'Built production-grade LLM-powered AI Copilots leveraging GPT-4o, Claude, Gemini, Llama 3, and AWS Bedrock to assist claims analysts, fraud investigators, and customer service representatives, reducing research time by 55% and improving decision accuracy by 35%.',
        'Engineered advanced Retrieval-Augmented Generation (RAG) platforms using LangChain, LlamaIndex, Pinecone, Weaviate, and FAISS, enabling semantic retrieval of policy documents, compliance regulations, claims history, and customer records with 92% retrieval accuracy.',
        'Implemented autonomous AI agent workflows for insurance claims triage, document verification, policy recommendations, and underwriting support, accelerating claims processing cycles by 50% and improving customer satisfaction scores by 30%.',
        'Developed conversational AI and virtual assistant solutions using OpenAI, Hugging Face Transformers, and Azure OpenAI to provide real-time policy support, claims status updates, and financial guidance, handling over 70% of customer inquiries without human intervention.',
        'Built scalable vector search and knowledge management systems using Pinecone, Qdrant, Milvus, ChromaDB, Elasticsearch, and pgvector, supporting enterprise-wide AI-powered search across millions of insurance and financial records.',
        'Applied advanced prompt engineering methodologies including Chain-of-Thought (CoT), ReAct, Self-Consistency, Few-Shot Learning, and Function Calling, improving LLM reasoning performance by 35% and reducing hallucination rates by 40%.',
        'Fine-tuned domain-specific LLMs using LoRA, QLoRA, PEFT, and Hugging Face Transformers on insurance, claims, and fraud datasets, increasing model precision by 28% and reducing inference costs by 30%.',
        'Established enterprise-grade LLMOps and MLOps frameworks using Docker, Kubernetes, MLflow, LangSmith, Weights & Biases, GitHub Actions, Jenkins, and CI/CD pipelines for automated deployment, monitoring, governance, and observability of AI agents.',
      ],
    },
    {
      title: 'AI / Machine Learning Engineer',
      company: 'Medha Servo Drives Pvt Ltd',
      location: 'Hyderabad, India',
      period: 'Aug 2023 - July 2024',
      type: 'Full-time',
      description: 'Designed and implemented ML models using Python, SQL, Scikit-learn, and XGBoost for predictive maintenance, equipment failure prediction, and operational performance optimization across railway and industrial systems.',
      achievements: [
        'Built ML models for predictive maintenance and asset health monitoring across railway and industrial systems',
        'Developed ETL pipelines and feature engineering frameworks for large-scale sensor and telemetry datasets',
        'Applied regression, clustering, classification, and SVM to identify trends and strengthen risk management strategies',
        'Created BI dashboards and automated reporting using Tableau, Power BI, and SQL for real-time KPI visibility',
        'Built customer segmentation models to enhance fraud detection and customer retention initiatives',
      ],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Bombardier',
      location: 'Delhi, India',
      period: 'Nov 2021 - Aug 2023',
      type: 'Full-time',
      description: 'Analyzed large-scale operational and workforce datasets using Python and SQL; developed BI reports and optimized ETL pipelines for workforce planning and service delivery optimization.',
      achievements: [
        'Developed interactive dashboards and KPI scorecards using Power BI, Tableau, and SQL for workforce and SLA monitoring',
        'Built and optimized ETL pipelines integrating data from HR, workforce management, and enterprise databases',
        'Applied predictive modeling, regression, clustering, and forecasting to improve workforce planning and demand forecasting',
        'Performed workforce analytics to identify productivity trends, absenteeism patterns, and service bottlenecks',
        'Collaborated with stakeholders using Agile methodologies, Git, and JIRA to deliver scalable analytics solutions',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Alstom',
      location: 'Bangalore, India',
      period: 'July 2018 - Aug 2021',
      type: 'Full-time',
      description: 'Developed interactive dashboards and BI reports using Power BI, Tableau, and BigQuery to monitor railway operations, fleet performance, and manufacturing KPIs.',
      achievements: [
        'Developed BI reports using Power BI, Tableau, Looker, Azure SQL Database, and BigQuery for railway and fleet operations',
        'Performed advanced data analysis and statistical modeling using Python, R, SQL, and Pandas to analyze train performance and equipment reliability',
        'Built scalable ETL pipelines using Azure Data Factory, Logic Apps, GCP, and Python to consolidate IoT and operational data',
        'Applied predictive analytics and ML models to predict equipment failures, optimize maintenance schedules, and reduce downtime',
        'Collaborated with engineering and maintenance teams in Agile environments using Git, JIRA, and Tableau Server',
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
                        expandedIndex === index ? 'max-h-[900px] mt-4' : 'max-h-0'
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
