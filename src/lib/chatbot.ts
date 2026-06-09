export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Knowledge base about you - customize this with your information
export const KNOWLEDGE_BASE = `
You are a friendly AI assistant helping visitors learn about Syam. Be conversational, enthusiastic, and personable - like a friend sharing cool stories about Syam's work! Use a casual, Human tone while still being informative.

BACKGROUND:
- Agentic AI Engineer with 7+ years of experience designing and deploying Agentic AI systems, multi-agent orchestration pipelines, and Generative AI solutions
- MS in Computer Science student at Governors State University, Chicago (Aug 2024 - May 2026)
- Currently at USAA building production-grade Agentic AI, LLM, NLP, and Generative AI solutions for claims processing, fraud detection, and customer service automation
- Specialized in autonomous AI agents, multi-agent workflows, RAG systems, and LLMOps
- 5-star HackerRank rating with 700+ problems solved

EDUCATION:
- MS in Computer Science, Governors State University, Chicago (Aug 2024 - May 2026)
- Coursework: AI Foundations, Advanced Operating Systems, Reinforcement Learning, Algorithms

CURRENT ROLE:
Agentic AI Engineer - USAA (July 2025 - Present)
- Designing and deploying production-grade Agentic AI, LLM, NLP, and Generative AI solutions for financial services
- Building multi-agent pipelines using LangChain, LangGraph, AutoGen, and CrewAI for autonomous task execution
- Developing advanced RAG systems with GPT-4o, Claude, Gemini, and Llama 3 for claims processing and fraud detection
- Implementing scalable vector search using Pinecone, Weaviate, ChromaDB, FAISS, and Qdrant
- Establishing enterprise MLOps/LLMOps pipelines with Docker, Kubernetes, MLflow, and LangSmith
- Deploying AI models on AWS SageMaker, Lambda, and GCP Cloud Run integrated into financial services platforms

WORK EXPERIENCE:

1. Agentic AI Engineer - USAA (July 2025 - Present)
   - Production-grade Agentic AI systems and multi-agent pipelines for financial services
   - Advanced RAG systems for claims processing, fraud detection, and customer service automation
   - Vector search and semantic retrieval with Pinecone, Weaviate, ChromaDB, FAISS, Qdrant
   - NLP and multimodal AI solutions for document processing and summarization
   - Prompt engineering (CoT, ReAct, ReWOO, Reflexion) and fine-tuning (LoRA, QLoRA, PEFT)
   - Enterprise MLOps/LLMOps infrastructure with Docker, Kubernetes, and CI/CD

2. AI / Machine Learning Engineer - Medha Servo Drives Pvt Ltd (Aug 2023 - July 2024)
   - Designed ML models for predictive maintenance and equipment failure prediction
   - Developed robust ETL pipelines and feature engineering frameworks
   - Applied regression, clustering, classification, and SVM algorithms
   - Built BI dashboards and automated reporting using Tableau and Power BI
   - Created customer segmentation models for fraud detection and retention

3. Machine Learning Engineer - Bombardier (Nov 2021 - Aug 2023)
   - Analyzed large-scale operational and workforce datasets
   - Developed interactive dashboards and KPI scorecards using Power BI and Tableau
   - Built and optimized ETL pipelines for workforce management systems
   - Applied predictive modeling and forecasting for demand planning

4. Data Scientist - Alstom (July 2018 - Aug 2021)
   - Developed BI reports for railway operations and fleet performance monitoring
   - Performed advanced data analysis and statistical modeling
   - Built scalable ETL pipelines using Azure Data Factory and GCP
   - Applied ML models to predict equipment failures and optimize maintenance

TECHNICAL SKILLS:
- Languages: Python, SQL, JavaScript, TypeScript, Bash, Java, C++, R
- LLM Frameworks: LangChain, LangGraph, LlamaIndex, AutoGen, CrewAI, Haystack, DSPy, OpenAI SDK
- LLM Models: GPT-4o, Claude, Gemini, Llama 3, Mistral, Cohere, AWS Bedrock, Azure OpenAI, GCP Vertex AI
- AI/ML: Agentic AI, Multi-Agent Systems, RAG, LLMs, NLP, Prompt Engineering, Fine-tuning, Semantic Search
- Vector Databases: Pinecone, Weaviate, ChromaDB, FAISS, Qdrant, Milvus, pgvector, Elasticsearch
- ML Frameworks: PyTorch, TensorFlow, Scikit-learn, XGBoost, LightGBM, SpaCy, NLTK, OpenCV
- MLOps/LLMOps: Docker, Kubernetes, MLflow, LangSmith, AgentOps, GitHub Actions, Jenkins, CI/CD
- Cloud: AWS (SageMaker, Lambda, S3, Bedrock), Microsoft Azure, GCP (Vertex AI, BigQuery, Cloud Run)
- Backend & APIs: FastAPI, Flask, REST APIs, Microservices, Event-Driven Architecture

FEATURED PROJECTS:

1. Document Intelligence Q&A Chatbot - Voice-Enabled Agentic RAG Platform (Feb 2026)
   - Agentic AI-powered platform with end-to-end RAG pipeline using LangChain LCEL
   - FAISS vector store with OpenAI Embeddings
   - Groq Llama 3.3 70B integration with custom prompt engineering
   - Sub-3s document Q&A latency
   - Technologies: Python, LangChain, LangGraph, Groq, OpenAI, FAISS, Streamlit
   - GitHub: https://github.com/Syam-1133/Syam-s-AI-Powered-Chatbot-and-Document-Intelligence-Platform

2. Amazon Recommender System (Dec 2025)
   - Scalable recommender using collaborative filtering and cosine similarity
   - Processes 548K+ products and 7M+ reviews
   - <100ms search and <500ms recommendation response times
   - Deployed via Docker and AWS Elastic Beanstalk
   - Technologies: Python, Flask, Scikit-learn, Pandas, NumPy, Docker, AWS, Apache Spark
   - GitHub: https://github.com/Syam-1133/Amazon-Recommender-System

3. Gesture Controlled AI Math Assistant (Jan 2025)
   - Hand gesture recognition using OpenCV and cvzone
   - Real-time webcam interactions with <100ms responsiveness
   - Google Gemini 2.0 Flash multimodal LLM for hand-drawn math problem solving
   - Technologies: Python, OpenCV, Google Gemini LLM, Computer Vision, Generative AI
   - GitHub: https://github.com/Syam-1133/Math-Gesture-Problem-Solver-Controlled-AI-Assistant

4. Multi-Environment Decision Making - Autonomous Driving Agent
   - Autonomous agent with tactical decision-making in traffic
   - Custom encoder-decoder policy network with Double DQN
   - 18% improvement in decision accuracy
   - Technologies: Python, PyTorch, OpenAI, Double DQN, HPC
   - GitHub: https://github.com/Syam-1133/Self-Driving-Car-Deep-Q-Learning-DQN-

5. AI Car Self-Driving Simulation
   - Neural networks evolution using genetic algorithms
   - Self-learning cars that navigate racetrack autonomously
   - Pure Python implementation with Pyglet
   - Technologies: Python, Pyglet, Neural Networks, Genetic Algorithms
   - GitHub: https://github.com/Syam-1133/AI-Car-Racing-Simulation

6. Traffic Monitoring System
   - Real-time vehicle detection using YOLOv8
   - Speed estimation and traffic flow analysis
   - Vehicle counting entering/exiting regions
   - Technologies: Python, YOLOv8, OpenCV, Computer Vision
   - GitHub:https://github.com/Syam-1133/Traffic-Monitoring-System-with-YOLO

KEY ACHIEVEMENTS:
- Building production-grade Agentic AI systems at USAA
- Expert in RAG pipelines, multi-agent orchestration, and LLMOps
- 700+ problems solved on HackerRank (5-star rating)

Be warm, friendly, and genuinely enthusiastic about Syam's work! Mix technical details with casual conversation. Use contractions (he's, that's, it's), add personality, and make it feel like you're chatting with a friend. Keep responses conversational - not too formal or robotic. If you don't know something, just say so in a friendly way and suggest reaching out to Syam directly.

Keep it light and engaging while being helpful!
`;

export async function sendMessage(messages: Message[]): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    throw new Error('OpenAI API key not configured. Please add VITE_OPENAI_API_KEY to your .env file.');
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: KNOWLEDGE_BASE },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Failed to get response from AI');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    throw error;
  }
}

// Alternative: Simple rule-based chatbot (no API key needed)
export function getSimpleResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Education questions
  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study') || lowerMessage.includes('university')) {
    return "Syam's currently pursuing his **Master's in Computer Science at Governors State University** in Chicago (Aug 2024 - May 2026)! 🎓\n\nHis coursework includes:\n📚 AI Foundations\n📚 Advanced Operating Systems\n📚 Reinforcement Learning\n📚 Algorithms\n\nHe's combining his grad studies with working as an Agentic AI Engineer at USAA - so he's literally learning cutting-edge AI theory while building production-grade systems. Pretty intense but awesome! 🚀";
  }
  
  // Experience questions
  if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return "Oh, Syam's got quite the journey! He's got 7+ years of industry experience and is doing some seriously cutting-edge work right now.\n\nCurrently, he's an **Agentic AI Engineer at USAA** building production-grade Agentic AI systems, multi-agent pipelines, and RAG systems for claims processing, fraud detection, and customer service automation. He's working with LangChain, LangGraph, AutoGen, CrewAI, and vector databases like Pinecone and FAISS.\n\nBefore USAA, he worked as an ML Engineer at Medha Servo Drives doing computer vision (90% F1 score!), at Bombardier on Optical Flow models with Transformers, and at Alstom on train control software. He's basically touched almost every corner of ML and AI! 🚀";
  }
  
  // Skills questions
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('tools')) {
    return "Syam's tech stack is incredibly deep! He's fluent in Python, SQL, JavaScript, TypeScript, Java, and C++.\n\nBut here's what he really specializes in:\n• **Agentic AI & LLMs** - LangChain, LangGraph, AutoGen, CrewAI, LlamaIndex\n• **LLM Models** - GPT-4o, Claude, Gemini, Llama 3, Mistral, Cohere\n• **RAG Systems** - Advanced Retrieval-Augmented Generation pipelines\n• **Vector Databases** - Pinecone, Weaviate, ChromaDB, FAISS, Qdrant\n• **Prompt Engineering** - CoT, ReAct, ReWOO, Reflexion, Fine-tuning (LoRA, QLoRA)\n• **MLOps/LLMOps** - Docker, Kubernetes, MLflow, LangSmith, GitHub Actions\n• **Cloud** - AWS, Azure, GCP (SageMaker, Bedrock, Vertex AI)\n• **ML Frameworks** - PyTorch, TensorFlow, Scikit-learn, XGBoost\n\nIf it's cutting-edge AI or LLM tech, he's probably already worked with it! 🤖✨";
  }
  
  // Certifications
  if (lowerMessage.includes('certif') || lowerMessage.includes('certificate')) {
    return "Yep, Syam's got some solid certifications under his belt! He's completed the Machine Learning Specialization, Deep Learning Specialization, Computer Vision with OpenCV, and he's a certified TensorFlow Developer. He takes learning pretty seriously! 📚";
  }
  
  // Projects - detailed response
  if (lowerMessage.includes('project')) {
    return "Oh man, Syam's projects are seriously impressive! Check these out:\n\n🤖 **Document Intelligence Q&A Chatbot** - Agentic RAG platform with LangChain, FAISS, and Groq Llama 3.3 70B. Delivers document Q&A in under 3 seconds!\n\n🛒 **Amazon Recommender** - Analyzed 548K+ products & 7M+ reviews with collaborative filtering. <100ms search, <500ms recommendations!\n\n✋ **Math Gesture Solver** - Draw math problems in the air with your hands, get instant solutions from Google Gemini AI. <100ms response!\n\n🚗 **Autonomous Driving Agent** - AI that makes smart driving decisions in traffic with Double DQN. 18% better than baseline!\n\n🏎️ **Self-Driving Car Sim** - Cars that teach themselves to race using genetic algorithms and neural networks\n\n🚦 **Traffic Monitor** - Real-time YOLOv8-powered vehicle detection, speed estimation, and counting\n\nAll the code's on his GitHub if you want to dive in! His latest work is all about building production-grade Agentic AI systems at USAA. 🔥";
  }
  
  // Achievements
  if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplish')) {
    return "Syam's accomplished some really impressive stuff! Currently, he's building production-grade Agentic AI and RAG systems at USAA - basically cutting-edge LLM engineering.\n\nBefore that, he hit some wild benchmarks:\n✅ 90% F1 score on drone airfield recognition\n✅ 85% IoU and 90% F1 on custom object detection\n✅ 5cm precision pose estimation (insanely accurate!)\n✅ 40% reduction in processing time through optimization\n✅ 18% improvement in autonomous driving decision accuracy\n✅ 5-star HackerRank coder with 700+ problems solved\n\nBut honestly? His biggest achievement right now is building enterprise-grade Agentic AI systems that actually work in production. That's where the real impact is! 🌟";
  }
  
  // Contact
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
    return "Want to get in touch with Syam? Just scroll down to the Contact section below! You can also find him on LinkedIn and GitHub - all the links are in the footer. He's always open to interesting conversations and opportunities! 💬";
  }
  
  // Drone/Robotics specific
  if (lowerMessage.includes('drone') || lowerMessage.includes('robot') || lowerMessage.includes('autonomous')) {
    return "Autonomous systems are definitely one of Syam's superpowers! He's built some amazing things:\n\n🚁 Computer vision models for drone navigation with 90% F1 score\n🎯 Pose estimation dialed in to 5cm precision - crazy accurate!\n🤖 Autonomous driving agents that make smart tactical decisions in traffic (18% better accuracy)\n👁️ Hand gesture recognition systems (useful for gesture-controlled drones!)\n\nHe's worked with YOLOv8 for detection, Intel RealSense, and all sorts of robotics tech. His optical flow work with Transformers was cutting-edge stuff for high-speed systems.\n\nNow at USAA, he's applying that autonomous systems expertise to building intelligent AI agents that make decisions on their own. Pretty cool evolution! 🚀";
  }
  
  // Computer Vision specific
  if (lowerMessage.includes('computer vision') || lowerMessage.includes('yolo') || lowerMessage.includes('opencv')) {
    return "Computer Vision is definitely a strong area for Syam, though he's evolved into Agentic AI and LLMs now!\n\nBut yeah, he's built some impressive CV stuff:\n👁️ YOLOv8 detection systems with 85% IoU and 90% F1 scores\n🚦 Real-time traffic monitoring tracking vehicles on the fly\n👋 Hand gesture recognition systems for gesture-controlled interfaces\n🧮 Optical Flow models using Transformers for high-speed systems\n🎯 Pose estimation with 5cm precision - incredibly accurate!\n\nHis toolbox? OpenCV, YOLOv8, PyTorch, TensorFlow, CLIP, ResNet - all the good stuff!\n\nBut now he's combining CV with LLMs and Agentic AI - so you'll see him using computer vision to feed into RAG systems and multi-agent pipelines. The boundaries are blurring! 🤖";
  }
  
  // Greeting
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hey there! 👋 I'm here to chat about Syam and all the incredible Agentic AI work he's doing!\n\nI can tell you about:\n• His current role building Agentic AI at USAA\n• Cutting-edge RAG systems and multi-agent pipelines\n• LLM frameworks (LangChain, LangGraph, AutoGen, etc.)\n• His amazing projects (from AI agents to gesture recognition!)\n• 7+ years of ML and AI experience\n• Computer vision, autonomous systems, and more\n• Or anything else you're curious about!\n\nWhat would you like to know? 😊";
  }
  
  // Default response
  return "Hmm, I'm not quite sure about that one! But I'd love to help you learn about Syam. Try asking me:\n• 'What's he working on at USAA?'\n• 'Tell me about Agentic AI and RAG systems'\n• 'What projects has he built?'\n• 'Tell me about his experience'\n• 'What's he good at?'\n• 'What are his achievements?'\n\nOr just ask me anything about his Agentic AI, LLM, or computer vision work! 😊";
}
