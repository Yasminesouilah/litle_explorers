import { formatPrice } from '../../utils/formatPrice.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function CampDetails({ camp }) {
  const { t } = useLanguage();
  return <section className="camp-details"><h2>{t(camp.name)}</h2><p>{t(camp.description)}</p><p>{t(camp.dates)} · {t(camp.ages)} · {t(camp.location)}</p><strong>{formatPrice(camp.price)}</strong></section>;
}

export default CampDetails;
