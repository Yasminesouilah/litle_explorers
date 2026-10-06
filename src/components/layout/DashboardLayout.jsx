import { Link } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

function DashboardLayout({ title = 'Mon espace', children }) {
  const { t } = useLanguage();
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main"><header className="dashboard-header"><h1>{title.startsWith('Bonjour,') ? `${t('Bonjour,')} ${title.slice(9)}` : t(title)}</h1><div className="dashboard-header-actions"><LanguageToggle /><Link to="/">{t('Retour au site')}</Link></div></header>{children}</main>
    </div>
  );
}

export default DashboardLayout;
