import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROMPT = 'nelson@portfolio:~$';

const COMMANDS = {
  help: () =>
    'Available commands:\n' +
    '  whoami          — who is Nelson?\n' +
    '  ls projects/    — list projects\n' +
    '  cat contact.txt — contact info\n' +
    '  skills --level  — skill levels\n' +
    '  clear           — clear terminal\n' +
    '  exit            — close terminal',

  whoami: () =>
    'Nelson Peter Mwangi Mwaura\n' +
    'Backend Dev · Data Scientist · ML Engineer · Automation Architect\n' +
    'Nairobi, Kenya — open to remote roles with US/EU companies.\n' +
    '5+ yrs building Django APIs, ML pipelines, data science solutions, n8n workflows.',

  'ls projects/': () =>
    'nse-analytics/          — Django + React stock analytics platform\n' +
    'kenya-real-estate-ml/   — XGBoost + MLflow price predictor\n' +
    'whatsapp-ai-faq-bot/    — n8n + OpenAI chatbot\n' +
    'invoice-generator/      — Django + React invoicing app',

  'cat contact.txt': () =>
    'email:    nmwaura132@gmail.com\n' +
    'linkedin: linkedin.com/in/nelson-peter\n' +
    'github:   github.com/Nmwaura132\n' +
    'phone:    +254 100 368 483',

  'skills --level': () =>
    'Skill              Lv   Bar\n' +
    '──────────────────────────────\n' +
    'Python             9    [█████████░]\n' +
    'n8n                9    [█████████░]\n' +
    'Django             8    [████████░░]\n' +
    'SQL                8    [████████░░]\n' +
    'pandas             8    [████████░░]\n' +
    'WhatsApp API       8    [████████░░]\n' +
    'React              7    [███████░░░]\n' +
    'scikit-learn       7    [███████░░░]\n' +
    'FastAPI            7    [███████░░░]\n' +
    'Power BI           7    [███████░░░]\n' +
    'Docker             6    [██████░░░░]',
};

const WELCOME = '# Welcome to Nelson\'s terminal. Type "help" to see available commands.';

export default function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Toggle with backtick key
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Backquote' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Focus input on open + show welcome
  useEffect(() => {
    if (isOpen) {
      setLines([{ type: 'info', text: WELCOME }]);
      setInputValue('');
      setHistoryIdx(-1);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  // Auto-scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setHistory((h) => [cmd, ...h].slice(0, 50));
    setHistoryIdx(-1);

    const newLines = [{ type: 'cmd', text: `${PROMPT} ${raw}` }];

    if (cmd === 'clear') {
      setLines([]);
      return;
    }
    if (cmd === 'exit') {
      setIsOpen(false);
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      newLines.push({ type: 'out', text: handler() });
    } else {
      newLines.push({ type: 'out', text: `command not found: ${cmd}. Type "help" for available commands.` });
    }

    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    runCommand(inputValue);
    setInputValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistoryIdx((i) => {
        const next = Math.min(i + 1, history.length - 1);
        setInputValue(history[next] || '');
        return next;
      });
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistoryIdx((i) => {
        const next = Math.max(i - 1, -1);
        setInputValue(next === -1 ? '' : history[next] || '');
        return next;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="terminal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          <motion.div
            className="terminal-window"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Title bar */}
            <div className="terminal-titlebar">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">nelson@portfolio — bash</span>
            </div>

            {/* Body */}
            <div className="terminal-body" ref={bodyRef}>
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={`terminal-line terminal-line-${line.type}`}
                >
                  {line.text}
                </div>
              ))}

              <form onSubmit={onSubmit} className="terminal-prompt-row">
                <span className="terminal-prompt-label">{PROMPT}</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="terminal-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>

            {/* Hint */}
            <div className="terminal-hint">
              Press <code>`</code> or Esc to close &middot; &uarr;&darr; for history
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
