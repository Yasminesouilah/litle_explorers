import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import CampCard from '../../components/vacations/CampCard.jsx';
import CampDetails from '../../components/vacations/CampDetails.jsx';
import CampSchedule from '../../components/vacations/CampSchedule.jsx';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';
import { camps } from '../../data/camps.js';
import EmptyState from '../../components/ui/EmptyState.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Vacations() {
  const { t } = useLanguage();
  const { campId } = useParams();
  const camp = useMemo(() => camps.find((item) => item.id === campId), [campId]);
  if (campId && !camp) return <PublicPageLayout><EmptyState title={t('Camp introuvable')} action={<Link to="/vacations">{t('Voir les camps')}</Link>} /></PublicPageLayout>;
  if (camp) return <PublicPageLayout><CampDetails camp={camp} /><h2>{t('Une semaine pleine d’idées')}</h2><CampSchedule schedule={camp.schedule} /><Link className="button button-yellow" to="/register">{t('Demander une inscription')} →</Link></PublicPageLayout>;

  return (
    <PublicPageLayout>
      <header className="listing-hero"><p className="eyebrow">{t('DES VACANCES QUI BOUGENT')}</p><h1>{t('Nos camps d’exploration')}</h1><p>{t('Des journées pleines de découvertes, de jeux et de nouvelles amitiés.')}</p></header>
      <div className="camp-list">{camps.map((camp) => <CampCard camp={camp} key={camp.id} />)}</div>
    </PublicPageLayout>
  );
}

export default Vacations;
