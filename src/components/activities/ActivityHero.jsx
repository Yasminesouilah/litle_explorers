import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivityHero() {
  const { t } = useLanguage();
  return <header className="listing-hero"><p className="eyebrow">{t('APPRENDRE EN S’AMUSANT')}</p><h1>{t('À chaque enfant, son aventure')}</h1><p>{t('Des ateliers pensés pour éveiller toutes les curiosités.')}</p></header>;
}

export default ActivityHero;
