import DashboardLayout from '../../components/layout/DashboardLayout.jsx';
import ScheduleCalendar from '../../components/dashboard/ScheduleCalendar.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Schedule() {
  const { t } = useLanguage();
  const sessions = [
    { date: t('Samedi · 10:00'), name: t('Robotique Junior — Lina') },
    { date: t('Mercredi · 14:00'), name: t('Petits scientifiques — Lina') },
  ];
  return <DashboardLayout title="Mon calendrier"><ScheduleCalendar items={sessions} /></DashboardLayout>;
}

export default Schedule;
