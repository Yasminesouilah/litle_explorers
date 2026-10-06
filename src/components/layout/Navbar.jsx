import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../config/constants.js';
import Button from '../ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

function Brand({ light = false }) {
  const { t } = useLanguage();
  return (
    <Link className={`brand${light ? ' brand-light' : ''}`} to="/" aria-label={`Little Explorers, ${t('Accueil')}`}>
      <span className="brand-mark" aria-hidden="true">✦</span>
      <span className="brand-name">little<span>explorers</span><small>{t('GRANDIR EN S’AMUSANT')}</small></span>
    </Link>
  );
}

export { Brand };

function Navbar({ onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { arabic, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t(menuOpen ? 'Fermer le menu' : 'Ouvrir le menu')}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <NavLink
              end={item.href === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' nav-active' : ''}`}
              to={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {arabic ? item.arabic : item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          <Button size="small" onClick={() => { setMenuOpen(false); onRegister('inscription'); }}>
            {t('Inscrire mon enfant')} <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
