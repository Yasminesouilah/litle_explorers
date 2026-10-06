import { instructors } from '../../data/instructors.js';
import { photo } from '../../utils/images.js';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function About() {
  const { t } = useLanguage();
  return (
    <PublicPageLayout>
      <header className="listing-hero"><p className="eyebrow">{t('APPRENDRE EN S’AMUSANT')}</p><h1>{t('La curiosité les fait grandir')}</h1><p>{t('Little Explorers crée des espaces où les enfants peuvent imaginer, tester, créer et découvrir à leur rythme.')}</p></header>
      <section className="content-section"><h2>{t('Une équipe passionnée')}</h2><div className="instructor-grid">{instructors.map((person) => <article className="content-card instructor-card" key={person.id}><img src={photo(person.image, 500)} alt="" /><h3>{person.name}</h3><p>{t(person.specialty)}</p></article>)}</div></section>
    </PublicPageLayout>
  );
}

export default About;
