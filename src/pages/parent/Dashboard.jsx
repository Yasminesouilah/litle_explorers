import DashboardLayout from '../../components/layout/DashboardLayout.jsx';
import StatsCard from '../../components/dashboard/StatsCard.jsx';
import ChildOverview from '../../components/dashboard/ChildOverview.jsx';
import UpcomingActivity from '../../components/dashboard/UpcomingActivity.jsx';
import NotificationCard from '../../components/dashboard/NotificationCard.jsx';
import useAuth from '../../hooks/useAuth.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Dashboard() {
  const { user } = useAuth();
  const { t } = useLanguage();
  const children = user.children?.length ? user.children : [{ id: 'demo-lina', name: 'Lina', age: 8, activities: 2 }];
  return (
    <DashboardLayout title={`Bonjour, ${user.name.split(' ')[0]} 👋`}>
      <div className="stats-grid"><StatsCard label={t('Enfants')} value={children.length} icon="🧒" /><StatsCard label={t('Activités')} value="2" icon="🎨" /><StatsCard label={t('Inscriptions actives')} value="2" icon="✓" /><StatsCard label={t('Paiements en attente')} value="1" icon="◷" /></div>
      <section className="dashboard-section"><h2>{t('Mes enfants')}</h2><div className="dashboard-card-grid">{children.map((child) => <ChildOverview key={child.id} child={child} />)}</div></section>
      <section className="dashboard-section"><h2>{t('À venir')}</h2><UpcomingActivity activity={{ time: t('Samedi · 10:00'), name: t('Robotique Junior'), child: children[0].name, location: t('Alger') }} /></section>
      <section className="dashboard-section"><h2>{t('Notifications')}</h2><NotificationCard title={t('Votre prochaine séance approche')} message={t('Robotique Junior, samedi à 10:00.')} date={t('Aujourd’hui')} /></section>
    </DashboardLayout>
  );
}

export default Dashboard;
