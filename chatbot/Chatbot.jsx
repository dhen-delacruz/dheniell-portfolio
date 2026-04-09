import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const config = {
  botName: "Portfolio Assistant",
  initialMessages: [
    "Hi! I'm your portfolio assistant. Ask me about projects, skills, or contact info!",
  ],
  state: {
    availableCommands: [
      {
        command: "projects",
        description: "Show my projects",
      },
      {
        command: "skills",
        description: "My tech skills",
      },
      {
        command: "contact",
        description: "How to contact me",
      },
    ],
  },
  widgets: [
    {
      widgetName: "projectsHandler",
      widgetFunc: (props) => (
        <div className="p-3">
          <h4 className="font-bold text-accent mb-2">Featured Projects:</h4>
          <ul className="text-sm space-y-1">
            <li>• ShopEase E-Commerce (React, Vite)</li>
            <li>• TaskFlow Dashboard (React, Framer Motion)</li>
            <li>• WeatherWave App (OpenWeather API)</li>
          </ul>
        </div>
      ),
    },
    {
      widgetName: "skillsHandler",
      widgetFunc: (props) => (
        <div className="p-3">
          <h4 className="font-bold text-accent mb-2">Core Skills:</h4>
          <ul className="text-sm space-y-1">
            <li>• React, TailwindCSS, Vite (85-95%)</li>
            <li>• JavaScript, Node.js</li>
            <li>• Git, Vercel, Figma</li>
          </ul>
        </div>
      ),
    },
    {
      widgetName: "contactHandler",
      widgetFunc: (props) => (
        <div className="p-3">
          <h4 className="font-bold text-accent mb-2">Get in Touch:</h4>
          <p className="text-sm">Email: dhenielldelacruz123@email.com</p>
          <p className="text-sm">GitHub: @dhen-delacruz</p>
          <p className="text-sm">LinkedIn: Dheniell Dela Cruz</p>
        </div>
      ),
    },
  ],
};

const messageParser = (message) => {
  const lowercase = message.toLowerCase();

  if (lowercase.includes('project') || lowercase.includes('project')) {
    return {
      type: "quickReplies",
      payload: { availableCommands: ["projects"] },
    };
  }

  if (lowercase.includes('skill') || lowercase.includes('tech')) {
    return {
      type: "quickReplies",
      payload: { availableCommands: ["skills"] },
    };
  }

  if (lowercase.includes('contact') || lowercase.includes('email')) {
    return {
      type: "quickReplies",
      payload: { availableCommands: ["contact"] },
    };
  }

  return {
    type: "msg",
    payload: { message: "Try asking about 'projects', 'skills', or 'contact'!" },
  };
};

const actionProvider = (context, action) => {
  const { createChatBotMessage, setState } = context;

  switch (action.type) {
    case "projects":
      const projectsBotMsg = createChatBotMessage(
        "",
        {
          widget: "projectsHandler",
        }
      );
      context.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, projectsBotMsg],
      }));
      break;
    case "skills":
      const skillsBotMsg = createChatBotMessage(
        "",
        {
          widget: "skillsHandler",
        }
      );
      context.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, skillsBotMsg],
      }));
      break;
    case "contact":
      const contactBotMsg = createChatBotMessage(
        "",
        {
          widget: "contactHandler",
        }
      );
      context.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, contactBotMsg],
      }));
      break;
    default:
      break;
  }
};

const CustomChatbot = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white/20"
        aria-label="Open AI Chatbot"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[60] w-80 max-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-accent/20 border border-accent/20 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 dark:border-white/20"
          >
            <div className={`p-4 border-b ${isDark ? 'bg-gray-900/50 border-white/10' : 'bg-accent/5 border-accent/10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Portfolio AI 🤖</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-accent/20 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-[400px] p-4 overflow-auto">
              <Chatbot
                config={config}
                messageParser={messageParser}
                actionProvider={actionProvider}
                theme={{
                  headerBgColor: isDark ? '#161b22' : '#f8fafc',
                  headerFontColor: '#111827',
                  chatBubbleBgColor: isDark ? '#161b22' : '#f1f5f9',
                  chatInputBgColor: isDark ? '#0d1117' : '#ffffff',
                  botBubbleColor: isDark ? '#0d1117' : '#f8fafc',
                  userBubbleColor: '#00C6A7',
                  botFontColor: isDark ? '#f0f6fc' : '#374151',
                  userFontColor: 'white',
                  headerTitleColor: '#00C6A7',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomChatbot;

