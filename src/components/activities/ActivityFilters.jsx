import { categories } from '../../data/categories.js';
import { AGE_RANGES } from '../../config/constants.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function ActivityFilters({ filters, onChange }) {
  const { t } = useLanguage();
  return (
    <div className="activity-filters">
      <label className="activity-filter">
        <span className="activity-filter-heading"><span className="activity-filter-icon category-filter-icon" aria-hidden="true">✦</span>{t('Catégorie')}</span>
        <span className="activity-select-wrap">
          <select value={filters.category} onChange={(event) => onChange({ ...filters, category: event.target.value })}>
            <option value="">{t('Toutes')}</option>
            {categories.map(({ name }) => <option key={name} value={name}>{t(name)}</option>)}
          </select>
        </span>
      </label>
      <label className="activity-filter">
        <span className="activity-filter-heading"><span className="activity-filter-icon age-filter-icon" aria-hidden="true">⌁</span>{t('Âge')}</span>
        <span className="activity-select-wrap">
          <select value={filters.age} onChange={(event) => onChange({ ...filters, age: event.target.value })}>
            <option value="">{t('Tous les âges')}</option>
            {AGE_RANGES.map((range) => <option key={range} value={range}>{t(range)}</option>)}
          </select>
        </span>
      </label>
    </div>
  );
}

export default ActivityFilters;
