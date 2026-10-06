import { useLanguage } from '../../context/LanguageContext.jsx';

function ScheduleCalendar({ items = [] }) {
  const { t } = useLanguage();
  return <section className="schedule-calendar"><h2>{t('Prochaines séances')}</h2>{items.length ? <ul>{items.map((item) => <li key={`${item.date}-${item.name}`}><time>{t(item.date)}</time><span>{t(item.name)}</span></li>)}</ul> : <p>{t('Aucune séance à venir.')}</p>}</section>;
}

export default ScheduleCalendar;
