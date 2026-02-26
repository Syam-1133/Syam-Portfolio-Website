export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Knowledge base about you - customize this with your information
export const KNOWLEDGE_BASE = `
You are a friendly AI assistant helping visitors learn about Syam. Be conversational, enthusiastic, and personable - like a friend sharing cool stories about Syam's work! Use a casual, Human tone while still being informative.

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
    return "Syam's currently working on his Master's in Computer Science at Governors State University in Chicago! He's diving deep into AI Foundations, Advanced Operating Systems, Reinforcement Learning, and Algorithms - pretty cool stuff! He'll be wrapping up in May 2026. 🎓";
  }
  
  // Experience questions
  if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return "Oh, Syam's got quite the journey! He's been in tech for 5+ years now.\n\nRight now he's leading the Drone Engineering Club at GSU with 20+ students. Before that, he was doing some amazing work as an ML Engineer at Medha Servo Drives - training computer vision models for drone navigation (hit 90% F1 score!). He also worked on cutting-edge Optical Flow models at Updater Services and spent time at Alstom working on train control systems.\n\nSome cool wins: 5cm precision in pose estimation, 40% faster processing times, and consistently hitting 90%+ accuracy rates. The guy knows his stuff! 😊";
  }
  
  // Skills questions
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('tools')) {
    return "Syam's tech stack is pretty impressive! He's fluent in Python, C, C++, Java, and SQL.\n\nFor AI/ML, he works with PyTorch, TensorFlow, OpenCV, YOLOv8, and LangChain. He's especially strong in Computer Vision, Deep Learning, and Autonomous Systems - that's where he really shines!\n\nHe's also comfortable with the whole DevOps side: Docker, AWS, GCP, Git, MLflow, you name it. Basically, if it's cutting-edge AI tech, there's a good chance he's worked with it! 🚀";
  }
  
  // Certifications
  if (lowerMessage.includes('certif') || lowerMessage.includes('certificate')) {
    return "Yep, Syam's got some solid certifications under his belt! He's completed the Machine Learning Specialization, Deep Learning Specialization, Computer Vision with OpenCV, and he's a certified TensorFlow Developer. He takes learning pretty seriously! 📚";
  }
  
  // Projects - detailed response
  if (lowerMessage.includes('project')) {
    return "Oh man, Syam's projects are so cool! Here are some highlights:\n\n🚗 **Autonomous Driving Agent** - Taught an AI to make smart driving decisions in traffic (18% better than baseline!)\n\n🤖 **AI Chatbot Platform** - Built a smart document Q&A system with RAG, LangChain, and FAISS\n\n✋ **Math Gesture Solver** - Draw math problems in the air and get instant solutions (under 100ms!)\n\n🛒 **Amazon Recommender** - Analyzed 7M+ reviews to recommend products you'll actually like\n\n🏎️ **Self-Driving Car Sim** - Cars that teach themselves to race using genetic algorithms\n\n🚦 **Traffic Monitor** - Real-time vehicle tracking and speed detection with YOLOv8\n\nAll the code's on his GitHub if you want to check them out!";
  }
  
  // Achievements
  if (lowerMessage.includes('achievement') || lowerMessage.includes('accomplish')) {
    return "Syam's accomplished some pretty awesome stuff! He hit 90% F1 score on drone airfield recognition (that's really hard!), got pose estimation down to 5cm precision, and made his models 40% faster.\n\nHe's also crushing it at leadership - managing 20+ students in the Drone Club. Oh, and he's a 5-star HackerRank coder with 700+ problems solved. Basically, he's the real deal when it comes to AI and robotics! 🌟";
  }
  
  // Contact
  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('hire')) {
    return "Want to get in touch with Syam? Just scroll down to the Contact section below! You can also find him on LinkedIn and GitHub - all the links are in the footer. He's always open to interesting conversations and opportunities! 💬";
  }
  
  // Drone/Robotics specific
  if (lowerMessage.includes('drone') || lowerMessage.includes('robot') || lowerMessage.includes('autonomous')) {
    return "Drones and autonomous systems? That's Syam's sweet spot! He's leading the Drone Engineering Club at GSU, building gesture-controlled drones with MediaPipe (yep, control drones with your hands!), and creating navigation systems with YOLOv8 and Intel RealSense.\n\nHis airfield recognition models hit 90% F1 score, and he's got pose estimation dialed in to 5cm precision. Plus, he built an autonomous driving agent that makes tactical decisions in traffic. Pretty futuristic stuff! 🚁✨";
  }
  
  // Computer Vision specific
  if (lowerMessage.includes('computer vision') || lowerMessage.includes('yolo') || lowerMessage.includes('opencv')) {
    return "Computer Vision is where Syam really gets to flex! He's built YOLOv8 detection systems with 85% IoU and 90% F1 scores, real-time traffic monitoring that tracks vehicles on the fly, and hand gesture recognition systems.\n\nHe's also done some cutting-edge work with Optical Flow using Transformers and pose estimation (crazy accurate at 5cm!). His toolbox? OpenCV, YOLOv8, PyTorch, TensorFlow - all the good stuff! 👁️🤖";
  }
  
  // Greeting
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hey there! 👋 I'm here to chat about Syam and all the cool AI stuff he's working on!\n\nI can tell you about:\n• His awesome projects (AI cars, gesture recognition, drones!)\n• His 5+ years of ML/AI experience\n• Technical skills (he's got quite the arsenal!)\n• Education and achievements\n• Or anything else you're curious about!\n\nWhat would you like to know? 😊";
  }
  
  // Default response
  return "Hmm, I'm not quite sure about that one! But I'd love to help you learn about Syam. Try asking me:\n• 'What projects has he built?'\n• 'Tell me about his experience'\n• 'What's he good at?'\n• 'What are his achievements?'\n\nOr just ask me anything about his AI and computer vision work! 😊";
}
