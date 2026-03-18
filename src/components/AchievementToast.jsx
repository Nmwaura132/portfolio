import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACHIEVEMENTS = {
  about:    { emoji: '\u{1F3C6}', message: "Achievement Unlocked: Found Nelson's Portfolio" },
  projects: { emoji: '\u{1F513}', message: 'Stalked the Projects' },
  skills:   { emoji: '\u{2694}\uFE0F',  message: 'Checked the Tech Arsenal' },
  contact:  { emoji: '\u{1F4EC}', message: 'Reached Final Boss: Contact' },
};

export default function AchievementToast() {
  const [toast, setToast] = useState(null);
  const triggered = useRef(new Set());

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
              setToast(achievement);
              setTimeout(() => setToast(null), 3000);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
          <span className="achievement-label">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
