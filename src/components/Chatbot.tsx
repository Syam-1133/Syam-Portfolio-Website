import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import type { Message } from '@/lib/chatbot';
import { sendMessage, getSimpleResponse } from '@/lib/chatbot';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Syam's AI assistant. How can i help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [useSimpleMode, setUseSimpleMode] = useState(true); // Toggle between API and rule-based
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if OpenAI API key is configured
    const hasApiKey = !!import.meta.env.VITE_OPENAI_API_KEY;
    setUseSimpleMode(!hasApiKey);
    
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollRef.current) {
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 100);
    }
  }, [messages, isLoading]);

  useEffect(() => {
    // Focus input when chat opens
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let response: string;

      if (useSimpleMode) {
        // Use simple rule-based responses
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
        response = getSimpleResponse(userMessage.content);
      } else {
        // Use OpenAI API
        const conversationHistory = messages
          .filter((msg) => msg.role !== 'system')
          .slice(-10); // Keep last 10 messages for context
        response = await sendMessage([...conversationHistory, userMessage]);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      let errorContent = "I'm having trouble responding right now. ";
      
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          errorContent += "Please check that your OpenAI API key is correctly set in the .env file.";
        } else if (error.message.includes('quota') || error.message.includes('billing')) {
          errorContent += "It looks like your OpenAI account needs credits. Please check your billing at platform.openai.com.";
        } else if (error.message.includes('rate')) {
          errorContent += "Rate limit reached. Please wait a moment and try again.";
        } else {
          errorContent += "Please check the console for details.";
        }
      }
      
      const errorMessage: Message = {
        role: 'assistant',
        content: errorContent,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-gradient-to-r from-[#007acc] to-[#0056a3] hover:from-[#0056a3] hover:to-[#007acc]'
        }`}
        size="icon"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[380px] max-w-[380px] h-[70vh] sm:h-[550px] max-h-[600px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#007acc] to-[#0056a3] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Ask About Syam</h3>
              <p className="text-xs text-white/80">
                {useSimpleMode ? '⚡ Quick Answers Mode' : '🤖 AI-Powered Mode'}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#007acc] to-[#0056a3]'
                      : 'bg-white/10'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>
                <div
                  className={`flex-1 rounded-2xl p-3 break-words overflow-wrap-anywhere ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#007acc] to-[#0056a3] text-white'
                      : 'bg-white/5 text-white/90'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white/5 rounded-2xl p-3">
                  <Loader2 className="w-5 h-5 animate-spin text-[#007acc]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
                className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#007acc]"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-[#007acc] to-[#0056a3] hover:from-[#0056a3] hover:to-[#007acc] disabled:opacity-50"
                size="icon"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send size={16} />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
