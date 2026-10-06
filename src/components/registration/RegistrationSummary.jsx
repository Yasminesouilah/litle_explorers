import { formatPrice } from '../../utils/formatPrice.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function RegistrationSummary({ activity, child }) {
  const { t } = useLanguage();
  return (
    <section className="registration-summary">
      <h2>{t('Récapitulatif')}</h2>
      <dl><div><dt>{t('Enfant')}</dt><dd>{child?.name || t('À sélectionner')}</dd></div><div><dt>{t('Activité')}</dt><dd>{t(activity.name)}</dd></div><div><dt>{t('Tarif mensuel')}</dt><dd>{formatPrice(activity.price)}</dd></div></dl>
    </section>
  );
}

export default RegistrationSummary;
