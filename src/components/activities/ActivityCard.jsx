import { Link } from 'react-router-dom';
import { photo } from '../../utils/images.js';
import { formatPrice } from '../../utils/formatPrice.js';
import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivityCard({ activity }) {
  const { t } = useLanguage();
  return (
    <Card className="activity-card">
      <img src={photo(activity.image, 700)} alt="" />
      <div className="activity-card-body">
        <Badge tone="purple">{t(activity.category)}</Badge>
        <h2><Link to={`/activities/${activity.id}`}>{t(activity.name)}</Link></h2>
        <p>{activity.ageMin}–{activity.ageMax} {t('ans')} · {t(activity.duration)}</p>
        <div className="activity-card-footer"><strong>{formatPrice(activity.price)}{t(' / mois')}</strong><Button as={Link} to={`/activities/${activity.id}`} size="small">{t('Découvrir')}</Button></div>
      </div>
    </Card>
  );
}

export default ActivityCard;
