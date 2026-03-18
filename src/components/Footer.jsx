export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer-brand">Nelson Mwaura</span>
      <span className="footer-center">
        &copy; {currentYear} &middot; Built with React &amp; Django
      </span>
      <span className="footer-hint">
        Press <code>`</code> for terminal
      </span>
    </footer>
  );
}
