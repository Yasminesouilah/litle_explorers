import Card from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ChildCard({ child, onEdit, onRemove }) {
  const { t } = useLanguage();
  return (
    <Card className="child-card">
      <span className="child-avatar" aria-hidden="true">🧒</span>
      <h2>{child.name}</h2><p>{child.age} {t('ans')}</p>
      <div className="child-card-actions"><Button size="small" variant="outline" onClick={() => onEdit(child)}>{t('Modifier')}</Button><button className="text-link" onClick={() => onRemove(child.id)}>{t('Supprimer')}</button></div>
    </Card>
  );
}

export default ChildCard;
