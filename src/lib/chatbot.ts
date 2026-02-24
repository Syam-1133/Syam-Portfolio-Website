export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Knowledge base about you - customize this with your information
export const KNOWLEDGE_BASE = `
You are an AI assistant representing Syam Gudipudi's portfolio. Answer questions about Syam professionally and conversationally.

BACKGROUND:
- MS in Computer Science student at Governors State University, Chicago (Aug 2024 - May 2026)
- 5+ years of industry experience in AI, Machine Learning, and Embedded Systems
- Passionate AI engineer specializing in Computer Vision, Deep Learning, and Autonomous Systems
- 5-star HackerRank rating with 700+ problems solved
- Drone Engineering Club Leader at Governors State University (Jan 2025 - April 2026)

EDUCATION:
- MS in Computer Science, Governors State University, Chicago (Aug 2024 - May 2026)
- Coursework: AI Foundations, Advanced Operating Systems, Reinforcement Learning, Algorithms

CERTIFICATIONS:
- Machine Learning Specialization
- Deep Learning Specialization
- Computer Vision with OpenCV
- TensorFlow Developer Certificate

WORK EXPERIENCE:

1. Drone Engineering Club Leader - Governors State University (Jan 2025 - April 2026)
   - Leading team of 20+ members in drone engineering projects
   - Organizing workshops on drone programming, computer vision, autonomous navigation
   - Mentoring students in computer vision algorithms for real-time object detection
   - Implemented gesture-based drone control using MediaPipe and Python

2. Machine Learning Engineer / R&D Engineer - Medha Servo Drives Pvt Ltd (Aug 2023 - July 2024)
   - Trained computer vision models for drone airfield recognition (90% F1 score)
   - Designed drone navigation algorithms using YOLOv8 with Intel RealSense
   - Improved pose estimation precision to within 5cm during flight tests
   - Developed custom object detection models (85% IoU, 90% F1 score)
   - Reduced processing time by 40% through lightweight model architectures

3. Machine Learning Engineer - Updater Services Pvt Ltd (Nov 2021 - Aug 2022)
   - Developed Optical Flow models using Transformers for high-speed autonomous systems
   - Generated diverse frame rate datasets using 120+ GPU cluster
   - Conducted research on error rates correlated to frame rates

4. Embedded Software Engineer Trainee - Alstom (July 2018 - Aug 2021)
   - Verified embedded train control software for Kochi Metro and Chennai Metro
   - Executed comprehensive testing protocols for Main Processing Unit software
   - Ensured safety compliance for public transportation systems

TECHNICAL SKILLS:
- Languages: Python, C, C++, Java, SQL
- Frameworks: PyTorch, TensorFlow, OpenCV, YOLOv8, Scikit-learn, Flask, Pandas, NumPy, LangChain
- AI/ML: Deep Learning, Computer Vision, Neural Networks, CNN, RNN, Transformers, LLMs, RAG, Reinforcement Learning
- Specializations: Object Detection, Image Segmentation, Pose Estimation, Optical Flow, Autonomous Systems
- Technologies: Docker, AWS, GCP, Git, MLflow, Linux, FAISS, Streamlit

FEATURED PROJECTS:

1. Multi-Environment Decision Making - Autonomous Driving Agent
   - Created autonomous driving agent for tactical decisions in traffic
   - Used custom encoder-decoder policy network with Double DQN
   - 18% improvement in decision accuracy
   - Technologies: Python, PyTorch, OpenAI, Double DQN, HPC

2. AI Chatbot & Document Intelligence Platform
   - Sophisticated AI chatbot with OpenAI Q&A capabilities
   - Document Intelligence Platform with RAG using LangChain and FAISS
   - Groq Llama-3.1 integration for document Q&A
   - Technologies: Python, LangChain, OpenAI, RAG, Streamlit, FAISS
   - GitHub: https://github.com/Syam-1133/Syam-s-AI-Powered-Chatbot-and-Document-Intelligence-Platform

3. Math Gesture Problem Solver
   - AI-driven hand gesture recognition using OpenCV and Google Gemini AI
   - Processes handwritten math problems in real-time
   - Response time under 100ms with OOP architecture
   - Technologies: Python, OpenCV, Gemini AI, Computer Vision, LLM
   - GitHub: https://github.com/Syam-1133/Math-Gesture-Problem-Solver-Controlled-AI-Assistant

4. Amazon Recommender System
   - Data analytics engine for 514K+ products and 7M+ reviews
   - Advanced search and collaborative filtering recommendations
   - Deployed on AWS Elastic Beanstalk with Docker
   - Technologies: Python, Big Data, AWS, Docker, Machine Learning
   - GitHub: https://github.com/Syam-1133/Amazon-Recommender-System

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
   - GitHub: https://github.com/Syam-1133/Traffic-Monitoring-System-with-YOLO

KEY ACHIEVEMENTS:
- 90% F1 score in drone airfield recognition
- 85% IoU and 90% F1 score in custom object detection
- 5cm precision in pose estimation for drones
- 40% reduction in processing time through model optimization
- 18% improvement in autonomous driving decision accuracy
- Leading 20+ member engineering team
- 700+ problems solved on HackerRank (5-star rating)

Always be helpful, professional, and conversational. When listing projects or experience, provide specific details and achievements. If asked about GitHub links or demos, provide the actual URLs when available. If asked something not in the knowledge base, politely suggest contacting Syam directly.

Keep responses concise but informative. Use bullet points when listing multiple items.
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
    return "Syam is currently pursuing an MS in Computer Science at Governors State University in Chicago (Aug 2024 - May 2026). His coursework includes AI Foundations, Advanced Operating Systems, Reinforcement Learning, and Algorithms.";
  }
  
  // Experience questions
  if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return "Syam has 5+ years of experience:\n\n• Drone Engineering Club Leader at GSU (2025-2026)\n• ML Engineer at Medha Servo Drives (2023-2024) - Computer vision for drones, 90% F1 score\n• ML Engineer at Updater Services (2021-2022) - Optical Flow models with Transformers\n• Embedded Engineer at Alstom (2018-2021) - Train control software\n\nHe's achieved 90% F1 score in object detection, 5cm pose estimation precision, and 40% processing time reduction.";
  }
  
  // Skills questions
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('tools')) {
    return "Syam's technical skills:\n\n• Languages: Python, C, C++, Java, SQL\n• AI/ML: PyTorch, TensorFlow, OpenCV, YOLOv8, LangChain, RAG\n• Specializations: Computer Vision, Deep Learning, Object Detection, Autonomous Systems\n• Technologies: Docker, AWS, GCP, Git, MLflow, FAISS, Streamlit";
  }
  
  // Certifications
  if (lowerMessage.includes('certif') || lowerMessage.includes('certificate')) {
    return "Syam holds several certifications:\n• Machine Learning Specialization\n• Deep Learning Specialization\n• Computer Vision with OpenCV\n• TensorFlow Developer Certificate";
  }
  
  // Projects - detailed response
  if (lowerMessage.includes('project')) {
    return "Syam has built several impressive AI projects:\n\n1. **Autonomous Driving Agent** - Multi-environment decision making with Double DQN (18% accuracy improvement)\n\n2. **AI Chatbot & Document Intelligence** - RAG-powered platform with LangChain, FAISS, and OpenAI\n\n3. **Math Gesture Solver** - Hand gesture recognition with OpenCV & Gemini AI (<100ms response)\n\n4. **Amazon Recommender** - 514K+ products, 7M+ reviews, collaborative filtering\n\n5. **Self-Driving Car Simulation** - Neural networks with genetic algorithms\n\n6. **Traffic Monitoring** - Real-time YOLOv8 vehicle detection & speed estimation\n\nAll projects available on his GitHub!";
  }
  
  // Achievements
  if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplish')) {
    return "Syam's key achievements:\n• 90% F1 score in drone airfield recognition\n• 85% IoU and 90% F1 in object detection\n• 5cm precision in pose estimation\n• 40% processing time reduction\n• 18% improvement in autonomous driving decisions\n• Leading 20+ member engineering team\n• 700+ problems solved (5-star HackerRank)";
  }
  
  // Contact
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
    return "You can reach Syam through the Contact section on this portfolio, or connect with him on LinkedIn and GitHub. Check the footer for all contact links!";
  }
  
  // Drone/Robotics specific
  if (lowerMessage.includes('drone') || lowerMessage.includes('robot') || lowerMessage.includes('autonomous')) {
    return "Syam has extensive drone and autonomous systems experience:\n• Leading Drone Engineering Club at GSU\n• Drone navigation with YOLOv8 & Intel RealSense\n• Gesture-based drone control with MediaPipe\n• Airfield recognition models (90% F1 score)\n• 5cm pose estimation precision\n• Autonomous driving agent with Double DQN";
  }
  
  // Computer Vision specific
  if (lowerMessage.includes('computer vision') || lowerMessage.includes('yolo') || lowerMessage.includes('opencv')) {
    return "Syam specializes in Computer Vision:\n• YOLOv8 object detection (85% IoU, 90% F1)\n• Real-time traffic monitoring\n• Drone navigation systems\n• Pose estimation (5cm precision)\n• Optical Flow with Transformers\n• Hand gesture recognition\n• Technologies: OpenCV, YOLOv8, PyTorch, TensorFlow";
  }
  
  // Greeting
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! I'm Syam's AI assistant. I can tell you about his:\n• Projects (AI/ML, Computer Vision, Autonomous Systems)\n• Experience (5+ years in ML/AI)\n• Skills (PyTorch, TensorFlow, OpenCV, YOLOv8)\n• Education (MS in CS at GSU)\n• Achievements\n\nWhat would you like to know?";
  }
  
  // Default response
  return "I can answer questions about Syam's projects, experience, skills, education, and achievements. Try asking:\n• 'Tell me about his projects'\n• 'What's his experience?'\n• 'What skills does he have?'\n• 'What are his achievements?'";
}
