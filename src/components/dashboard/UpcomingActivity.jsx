import Card from '../ui/Card.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function UpcomingActivity({ activity }) {
  const { t } = useLanguage();
  return <Card className="upcoming-activity"><span className="activity-time">{t(activity.time)}</span><div><h3>{t(activity.name)}</h3><p>{activity.child} · {t(activity.location)}</p></div></Card>;
}

export default UpcomingActivity;
