import Card from '../ui/Card.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function NotificationCard({ title, message, date }) {
  const { t } = useLanguage();
  return <Card className="notification-card"><span aria-hidden="true">✦</span><div><h3>{t(title)}</h3><p>{t(message)}</p><time>{t(date)}</time></div></Card>;
}

export default NotificationCard;
