import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACHIEVEMENTS = {
  about:    { emoji: '🏆', message: "Achievement Unlocked: Found Nelson's Portfolio" },
  projects: { emoji: '🔓', message: 'Explored the Projects' },
  skills:   { emoji: '⚔️',  message: 'Checked the Tech Arsenal' },
  contact:  { emoji: '📬', message: 'Reached Final Boss: Contact' },
};

export default function AchievementToast() {
  const [toast, setToast] = useState(null);
  const triggered = useRef(new Set());
  const timerRef = useRef(null);

  useEffect(() => {
    const sections = Object.keys(ACHIEVEMENTS)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current.has(entry.target.id)) {
            triggered.current.add(entry.target.id);
            const achievement = ACHIEVEMENTS[entry.target.id];
            if (achievement) {
              clearTimeout(timerRef.current);
              setToast(achievement);
              timerRef.current = setTimeout(() => setToast(null), 3000);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="achievement-toast"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <span className="achievement-emoji">{toast.emoji}</span>
          <span className="achievement-message">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
