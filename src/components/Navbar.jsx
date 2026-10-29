import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { path: '/harvest', label: 'Our Harvest' },
  { path: '/garden', label: 'Our Garden' },
  { path: '/nourish', label: 'Nourish' },
  { path: '/wellness', label: 'Wellness' },
  { path: '/roots', label: 'Our Roots' },
  { path: '/connect', label: 'Connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    'navbar',
    scrolled ? 'navbar--scrolled' : '',
    isHome && !scrolled ? 'navbar--transparent' : '',
    menuOpen ? 'navbar--open' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Manna Microgreens Home">
            <img
              src={`${import.meta.env.BASE_URL}images/manna-logo.jpg`}
              alt="Manna Microgreens Logo"
              className="navbar__logo-img"
            />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Manna</span>
              <span className="navbar__logo-sub">MICROGREENS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links" role="list">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar__actions">
            <a href="tel:+917975190188" className="navbar__phone" aria-label="Call us">
              <Phone size={16} />
              <span>79751 90188</span>
            </a>
            <Link to="/seeds" className="btn btn-primary btn-sm navbar__cta">
              <ShoppingBag size={15} />
              Order Fresh
            </Link>
            {/* Hamburger */}
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__overlay" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__drawer">
          <div className="mobile-menu__header">
            <div className="navbar__logo-text">
              <span className="navbar__logo-name" style={{ color: 'var(--clr-green-dark)' }}>Manna</span>
              <span className="navbar__logo-sub">MICROGREENS</span>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-menu__links" role="list">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            <Link to="/seeds" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              <ShoppingBag size={16} />
              Order Fresh Microgreens
            </Link>
            <a href="tel:+917975190188" className="mobile-menu__phone">
              <Phone size={16} />
              79751 90188
            </a>
            <a href="tel:+918105011430" className="mobile-menu__phone">
              <Phone size={16} />
              81050 11430
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
