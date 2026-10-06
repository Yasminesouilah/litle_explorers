import DashboardLayout from '../../components/layout/DashboardLayout.jsx';
import Badge from '../../components/ui/Badge.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

const registrations = [
  { id: 'reg-1', child: 'Lina', activity: 'Robotique Junior', schedule: 'Samedi · 10:00', status: 'Confirmée' },
  { id: 'reg-2', child: 'Lina', activity: 'Petits scientifiques', schedule: 'Mercredi · 14:00', status: 'En attente' },
];

function Registrations() {
  const { t } = useLanguage();
  return <DashboardLayout title="Mes inscriptions"><div className="table-wrap"><table><thead><tr><th>{t('Enfant')}</th><th>{t('Activité')}</th><th>{t('Horaire')}</th><th>{t('Statut')}</th></tr></thead><tbody>{registrations.map((item) => <tr key={item.id}><td>{item.child}</td><td>{t(item.activity)}</td><td>{t(item.schedule)}</td><td><Badge tone={item.status === 'Confirmée' ? 'green' : 'yellow'}>{t(item.status)}</Badge></td></tr>)}</tbody></table></div></DashboardLayout>;
}

export default Registrations;
