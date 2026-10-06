import { categories } from '../../data/categories.js';
import { AGE_RANGES } from '../../config/constants.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivityFilters({ filters, onChange }) {
  const { t } = useLanguage();
  return (
    <div className="activity-filters">
      <label>{t('Catégorie')}<select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })}><option value="">{t('Toutes')}</option>{categories.map(({ name }) => <option key={name} value={name}>{t(name)}</option>)}</select></label>
      <label>{t('Âge')}<select value={filters.age} onChange={(event) => onChange({ ...filters, age: event.target.value })}><option value="">{t('Tous les âges')}</option>{AGE_RANGES.map((range) => <option key={range} value={range}>{t(range)}</option>)}</select></label>
    </div>
  );
}

export default ActivityFilters;
