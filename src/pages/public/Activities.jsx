import { useMemo, useState } from 'react';
import { activities } from '../../data/activities.js';
import ActivityFilters from '../../components/activities/ActivityFilters.jsx';
import ActivityGrid from '../../components/activities/ActivityGrid.jsx';
import ActivityHero from '../../components/activities/ActivityHero.jsx';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';

function Activities() {
  const [filters, setFilters] = useState({ category: '', age: '' });
  const filteredActivities = useMemo(() => activities.filter((activity) => {
    const matchesCategory = !filters.category || activity.category === filters.category;
    const matchesAge = !filters.age || (() => {
      const numbers = filters.age.match(/\d+/g).map(Number);
      return activity.ageMin <= numbers[1] && activity.ageMax >= numbers[0];
    })();
    return matchesCategory && matchesAge;
  }), [filters]);

  return (
    <PublicPageLayout>
      <ActivityHero />
      <ActivityFilters filters={filters} onChange={setFilters} />
      <ActivityGrid activities={filteredActivities} onRegister={() => {}} />
    </PublicPageLayout>
  );
}

export default Activities;
