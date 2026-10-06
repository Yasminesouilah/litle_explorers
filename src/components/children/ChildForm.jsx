import Input from '../ui/Input.jsx';
import Button from '../ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ChildForm({ child, onSubmit, onCancel }) {
  const { t } = useLanguage();
  return (
    <form className="dialog-form" onSubmit={(event) => { event.preventDefault(); onSubmit(Object.fromEntries(new FormData(event.currentTarget))); }}>
      <Input id="child-name" label={t('Prénom')} name="name" defaultValue={child?.name || ''} required />
      <Input id="child-age" label={t('Âge')} name="age" type="number" min="1" max="17" defaultValue={child?.age || ''} required />
      <div className="form-actions"><Button type="submit">{t('Enregistrer')}</Button><Button variant="outline" type="button" onClick={onCancel}>{t('Annuler')}</Button></div>
    </form>
  );
}

export default ChildForm;
