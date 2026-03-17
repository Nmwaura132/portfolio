import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User, Loader2, Sparkles } from 'lucide-react';

const DEMO_RESPONSES = [
    "Hi there! 👋 I'm Nelson's AI assistant. I can help you learn about his automation services, technical skills, or discuss potential projects.",
    "Nelson specializes in n8n workflow automation, Django backend development, and building intelligent chatbots like me!",
    "Some of his key achievements include reducing manual data entry by 80% and automating 500+ monthly customer queries.",
    "Would you like to know more about his CRM development work at Optiven, or perhaps his machine learning projects?",
    "Feel free to ask about his experience with Python, Django, React, or n8n automations. I'm here to help! 🚀"
];

export default function ChatBot({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            content: "Hi! 👋 I'm Nelson's AI assistant. How can I help you learn about his automation services today?",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response (replace with actual n8n webhook call)
        setTimeout(() => {
            const responseIndex = Math.floor(Math.random() * DEMO_RESPONSES.length);
            const botMessage = {
                id: Date.now() + 1,
                type: 'bot',
                content: DEMO_RESPONSES[responseIndex],
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);

        // Uncomment below to connect to actual n8n webhook
        /*
        try {
          const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: inputValue })
          });
          const data = await response.json();
          setMessages(prev => [...prev, {
            id: Date.now() + 1,
            type: 'bot',
            content: data.response,
            timestamp: new Date()
          }]);
        } catch (error) {
          console.error('Chat error:', error);
        }
        setIsTyping(false);
        */
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        className="chat-toggle"
                        onClick={onClose}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MessageSquare size={28} />
                        <span className="chat-toggle-badge">AI</span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window glass-card"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="chat-header-info">
                                <div className="chat-avatar">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h4>Nelson's AI Assistant</h4>
                                    <span className="chat-status">
                                        <span className="status-dot"></span>
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button className="chat-close" onClick={onClose}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="chat-messages">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`message ${message.type}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="message-avatar">
                                        {message.type === 'bot' ? <Bot size={18} /> : <User size={18} />}
                                    </div>
                                    <div className="message-content">
                                        <p>{message.content}</p>
                                        <span className="message-time">
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div
                                    className="message bot"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="message-avatar">
                                        <Bot size={18} />
                                    </div>
                                    <div className="message-content typing">
                                        <div className="typing-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Powered By */}
                        <div className="chat-powered">
                            <Sparkles size={14} />
                            <span>Powered by n8n + AI</span>
                        </div>

                        {/* Input */}
                        <div className="chat-input-container">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Ask about my services..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="chat-input"
                            />
                            <button
                                className="chat-send"
                                onClick={handleSend}
                                disabled={!inputValue.trim() || isTyping}
                            >
                                {isTyping ? <Loader2 size={20} className="spin" /> : <Send size={20} />}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        .chat-toggle {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 64px;
          height: 64px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-bg-primary);
          cursor: pointer;
          box-shadow: var(--shadow-glow);
          z-index: 1000;
        }

        .chat-toggle-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 24px;
          height: 24px;
          background: var(--color-accent);
          border-radius: 50%;
          font-size: 0.65rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .chat-window {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 400px;
          height: 600px;
          max-height: calc(100vh - 4rem);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: var(--color-bg-secondary);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .chat-avatar {
          width: 44px;
          height: 44px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-bg-primary);
        }

        .chat-header h4 {
          font-size: 0.95rem;
          color: var(--color-text-primary);
          margin-bottom: 0.125rem;
        }

        .chat-status {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.75rem;
          color: var(--color-accent);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--color-accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .chat-close {
          background: transparent;
          border: none;
          color: var(--color-text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .chat-close:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--color-text-primary);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          gap: 0.75rem;
          max-width: 85%;
        }

        .message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .message.bot .message-avatar {
          background: var(--gradient-primary);
          color: var(--color-bg-primary);
        }

        .message.user .message-avatar {
          background: var(--color-bg-tertiary);
          color: var(--color-text-secondary);
        }

        .message-content {
          padding: 0.875rem 1rem;
          border-radius: var(--radius-lg);
        }

        .message.bot .message-content {
          background: var(--color-bg-tertiary);
          border-bottom-left-radius: 4px;
        }

        .message.user .message-content {
          background: var(--gradient-primary);
          color: var(--color-bg-primary);
          border-bottom-right-radius: 4px;
        }

        .message-content p {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 0.25rem;
          color: inherit;
        }

        .message.bot .message-content p {
          color: var(--color-text-primary);
        }

        .message-time {
          font-size: 0.65rem;
          color: var(--color-text-muted);
          opacity: 0.7;
        }

        .message.user .message-time {
          color: rgba(255, 255, 255, 0.7);
        }

        .typing-dots {
          display: flex;
          gap: 4px;
        }

        .typing-dots span {
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          animation: typing-bounce 1.4s infinite ease-in-out;
        }

        .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
        .typing-dots span:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typing-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        .chat-powered {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.5rem;
          background: rgba(0, 212, 255, 0.05);
          font-size: 0.7rem;
          color: var(--color-text-muted);
        }

        .chat-input-container {
          display: flex;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: var(--color-bg-secondary);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chat-input {
          flex: 1;
          padding: 0.875rem 1rem;
          background: var(--color-bg-tertiary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          color: var(--color-text-primary);
          font-size: 0.9rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .chat-input:focus {
          border-color: var(--color-primary);
        }

        .chat-input::placeholder {
          color: var(--color-text-muted);
        }

        .chat-send {
          width: 48px;
          height: 48px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-bg-primary);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .chat-send:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: var(--shadow-glow);
        }

        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 480px) {
          .chat-window {
            width: calc(100% - 2rem);
            right: 1rem;
            bottom: 1rem;
            height: calc(100vh - 2rem);
            max-height: none;
          }

          .chat-toggle {
            right: 1rem;
            bottom: 1rem;
          }
        }
      `}</style>
        </>
    );
}
