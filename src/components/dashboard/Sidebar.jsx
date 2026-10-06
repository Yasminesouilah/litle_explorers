import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext.jsx';

const links = [['Vue d’ensemble', '/parent'], ['Mes enfants', '/parent/children'], ['Inscriptions', '/parent/registrations'], ['Calendrier', '/parent/schedule'], ['Paiements', '/parent/payments'], ['Profil', '/parent/profile']];

function Sidebar() {
  const { t } = useLanguage();
  return <aside className="dashboard-sidebar"><Link to="/parent" className="dashboard-brand">Little Explorers</Link><nav aria-label={t('Navigation du tableau de bord')}>{links.map(([label, href]) => <Link to={href} key={href}>{t(label)}</Link>)}</nav></aside>;
}

export default Sidebar;
