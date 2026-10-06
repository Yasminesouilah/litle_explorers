import ActivityCard from './ActivityCard.jsx';
import EmptyState from '../ui/EmptyState.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivityGrid({ activities, onRegister }) {
  const { t } = useLanguage();
  if (!activities.length) return <EmptyState title={t('Aucune activité trouvée')} description={t('Essayez de modifier vos filtres pour voir d’autres ateliers.')} />;
  return <div className="activity-grid">{activities.map((activity) => <ActivityCard key={activity.id} activity={activity} onRegister={onRegister} />)}</div>;
}

export default ActivityGrid;
