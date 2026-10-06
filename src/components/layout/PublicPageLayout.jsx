import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function PublicPageLayout({ children }) {
  const navigate = useNavigate();
  const { arabic, t } = useLanguage();
  return (
    <div className={arabic ? 'site rtl' : 'site'}>
      <Navbar onRegister={() => navigate('/register')} />
      <main className="public-page section-wrap">
        {children}
        <p className="public-page-back"><Link to="/">← {t('Retour à l’accueil')}</Link></p>
      </main>
      <Footer onRegister={() => navigate('/register')} />
    </div>
  );
}

export default PublicPageLayout;
