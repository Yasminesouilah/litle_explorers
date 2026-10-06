import { useLanguage } from '../../context/LanguageContext.jsx';

function CampSchedule({ schedule }) {
  const { t } = useLanguage();
  return <ol className="camp-schedule">{schedule.map(({ day, activity }) => <li key={day}><strong>{t(day)}</strong><span>{t(activity)}</span></li>)}</ol>;
}

export default CampSchedule;
