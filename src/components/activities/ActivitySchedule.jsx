import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivitySchedule({ schedule, location, capacity }) {
  const { t } = useLanguage();
  return (
    <dl className="activity-schedule">
      <div><dt>{t('Horaire')}</dt><dd>{t(schedule)}</dd></div>
      <div><dt>{t('Lieu')}</dt><dd>{t(location)}</dd></div>
      <div><dt>{t('Places disponibles')}</dt><dd>{capacity}</dd></div>
    </dl>
  );
}

export default ActivitySchedule;
