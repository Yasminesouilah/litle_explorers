import { useLanguage } from '../../context/LanguageContext.jsx';

function ChildSelector({ children, value, onChange }) {
  const { t } = useLanguage();
  return (
    <label className="field-label">{t('Choisir un enfant')}
      <select value={value} onChange={(event) => onChange(event.target.value)} required>
        <option value="">{t('Sélectionner')}</option>
        {children.map((child) => <option key={child.id} value={child.id}>{child.name}</option>)}
      </select>
    </label>
  );
}

export default ChildSelector;
