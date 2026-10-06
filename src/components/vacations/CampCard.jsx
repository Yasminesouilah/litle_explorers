import { Link } from 'react-router-dom';
import { photo } from '../../utils/images.js';
import { formatPrice } from '../../utils/formatPrice.js';
import Card from '../ui/Card.jsx';
import Badge from '../ui/Badge.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function CampCard({ camp }) {
  const { t } = useLanguage();
  return (
    <Card className="camp-list-card">
      <img src={photo(camp.image, 700)} alt="" />
      <div><Badge tone="yellow">{t(camp.status)}</Badge><h2>{t(camp.name)}</h2><p>{t(camp.dates)} · {t(camp.ages)}</p><strong>{formatPrice(camp.price)}</strong><Link className="text-link" to={`/vacations/${camp.id}`}>{t('Voir le programme')} →</Link></div>
    </Card>
  );
}

export default CampCard;
