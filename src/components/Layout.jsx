import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom';

import { ThemeToggle } from './ThemeToggle.jsx';

const EMAIL = 'mailto:Nmwaura132@gmail.com';
const GITHUB = 'https://github.com/Nmwaura132';
const LINKEDIN = 'https://www.linkedin.com/in/nelson-peter';

export function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="site-nav">
        <div className="wrap">
          <NavLink className={() => 'wordmark'} to="/" end>
            Nelson Mwaura
          </NavLink>
          <div className="nav-right">
            {/* Not `end`: a case study is still the Work section. */}
            <NavLink className={() => undefined} to="/work">
              Work
            </NavLink>
            <NavLink className={() => undefined} to="/about">
              About
            </NavLink>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <div className="wrap">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>Nairobi, Kenya · Available remote</p>
          <nav aria-label="Footer">
            <NavLink className={() => undefined} to="/" end>
              Home
            </NavLink>
            <NavLink className={() => undefined} to="/work">
              Work
            </NavLink>
            <NavLink className={() => undefined} to="/about">
              About
            </NavLink>
            <a href={EMAIL}>Email</a>
            <a href={GITHUB} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </nav>
          <p>© 2026 Nelson Mwaura</p>
        </div>
      </footer>

      <ScrollRestoration />
    </>
  );
}
