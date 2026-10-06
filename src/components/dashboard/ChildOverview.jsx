import Card from '../ui/Card.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ChildOverview({ child }) {
  const { t } = useLanguage();
  return <Card className="child-overview"><span aria-hidden="true">🧒</span><div><h3>{child.name}</h3><p>{child.age} {t('ans')} · {child.activities} {t('activités')}</p></div></Card>;
}

export default ChildOverview;
