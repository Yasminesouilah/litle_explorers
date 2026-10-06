import { Brand } from './Navbar.jsx';
import Button from '../ui/Button.jsx';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Footer({ onRegister }) {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div className="footer-brand">
          <Brand light />
          <p>{t('Des ateliers pour grandir,')}<br />{t('s’émerveiller et s’amuser.')}</p>
          <div className="social-links">
            <a href="#contact" aria-label="Instagram">ig</a>
            <a href="#contact" aria-label="Facebook">f</a>
            <a href="#contact" aria-label="TikTok">♪</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>{t('Explorer')}</h3>
          <Link to="/activities">{t('Nos activités')}</Link>
          <Link to="/vacations">{t('Vacances & camps')}</Link><Link to="/activities">{t('Ateliers du moment')}</Link>
        </div>
        <div className="footer-column">
          <h3>Little Explorers</h3>
          <Link to="/about">{t('Notre histoire')}</Link><Link to="/about">{t('Nos animateurs')}</Link>
          <Link to="/contact">{t('Nous contacter')}</Link><Link to="/contact">{t('Questions fréquentes')}</Link>
        </div>
        <div className="footer-newsletter">
          <h3>{t('On garde le contact ?')}</h3>
          <p>{t('Des nouvelles, des idées et nos prochains ateliers. Promis, que du chouette !')}</p>
          <form onSubmit={(event) => { event.preventDefault(); onRegister('newsletter'); }}>
            <label className="sr-only" htmlFor="newsletter-email">{t('Votre adresse e-mail')}</label>
            <input id="newsletter-email" type="email" placeholder={t('Votre adresse e-mail')} required />
            <button aria-label={t("S'inscrire à la newsletter")}><span aria-hidden="true">→</span></button>
          </form>
          <small>{t('En vous inscrivant, vous acceptez notre politique de confidentialité.')}</small>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 Little Explorers · {t('Grandir en s’amusant')}</span>
        <div><Link to="/contact">{t('Confidentialité')}</Link><Link to="/contact">{t('Mentions légales')}</Link><Link to="/contact">{t('Conditions générales')}</Link></div>
        <span className="made-with">{t('Fait avec')} <b>♥</b> {t('pour les petits curieux')}</span>
      </div>
    </footer>
  );
}

export default Footer;
