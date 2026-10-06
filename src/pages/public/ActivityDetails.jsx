import { Link, useParams } from 'react-router-dom';
import { activities } from '../../data/activities.js';
import { photo } from '../../utils/images.js';
import ActivitySchedule from '../../components/activities/ActivitySchedule.jsx';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';
import { formatPrice } from '../../utils/formatPrice.js';
import EmptyState from '../../components/ui/EmptyState.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivityDetails() {
  const { t } = useLanguage();
  const { activityId } = useParams();
  const activity = activities.find((item) => item.id === activityId);
  if (!activity) return <PublicPageLayout><EmptyState title={t('Activité introuvable')} action={<Link to="/activities">{t('Voir toutes les activités')}</Link>} /></PublicPageLayout>;

  return (
    <PublicPageLayout>
      <article className="detail-page">
        <img className="detail-image" src={photo(activity.image, 1200)} alt="" />
        <p className="eyebrow">{t(activity.category)}</p><h1>{t(activity.name)}</h1>
        <p>{t('Un atelier pour apprendre en faisant, encadré par un animateur passionné. Adapté aux enfants de')} {activity.ageMin} {t('à')} {activity.ageMax} {t('ans')}.</p>
        <ActivitySchedule schedule={activity.schedule} location={activity.location} capacity={activity.capacity} />
        <p><strong>{formatPrice(activity.price)}{t(' / mois')}</strong></p>
        <p>{t(activity.requirements)}</p><Link className="button button-yellow" to="/register">{t('Demander une inscription')} →</Link>
      </article>
    </PublicPageLayout>
  );
}

export default ActivityDetails;
