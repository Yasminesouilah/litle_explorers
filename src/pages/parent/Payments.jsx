import DashboardLayout from '../../components/layout/DashboardLayout.jsx';
import Badge from '../../components/ui/Badge.jsx';
import { formatPrice } from '../../utils/formatPrice.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

const payments = [
  { id: 'pay-1', activity: 'Robotique Junior', date: '1 octobre 2026', amount: 4500, status: 'En attente' },
  { id: 'pay-2', activity: 'Petits scientifiques', date: '1 septembre 2026', amount: 3500, status: 'Payé' },
];

function Payments() {
  const { t } = useLanguage();
  return <DashboardLayout title="Paiements"><div className="table-wrap"><table><thead><tr><th>{t('Activité')}</th><th>{t('Date')}</th><th>{t('Montant')}</th><th>{t('Statut')}</th></tr></thead><tbody>{payments.map((payment) => <tr key={payment.id}><td>{t(payment.activity)}</td><td>{t(payment.date)}</td><td>{formatPrice(payment.amount)}</td><td><Badge tone={payment.status === 'Payé' ? 'green' : 'yellow'}>{t(payment.status)}</Badge></td></tr>)}</tbody></table></div><p className="prototype-note">{t('Les paiements sont des exemples de démonstration.')}</p></DashboardLayout>;
}

export default Payments;
