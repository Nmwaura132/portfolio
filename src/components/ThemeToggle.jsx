import { useSyncExternalStore } from 'react';

const listeners = new Set();

function currentTheme() {
  return (
    document.documentElement.dataset.theme ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
}

function subscribe(onStoreChange) {
  const media = matchMedia('(prefers-color-scheme: dark)');
  listeners.add(onStoreChange);
  media.addEventListener('change', onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    media.removeEventListener('change', onStoreChange);
  };
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Private-mode browsers throw on write. The toggle still works for the session.
  }
  listeners.forEach((notify) => notify());
}

export function ThemeToggle() {
  // The stored theme is unknowable at pre-render, so hydration starts from the
  // light default and React swaps in the real value on its first client render.
  // The page colours are already correct by then: the inline head script applies
  // data-theme before paint.
  const theme = useSyncExternalStore(subscribe, currentTheme, () => 'light');
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={`Switch to ${next} theme`}
    >
      {next === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
