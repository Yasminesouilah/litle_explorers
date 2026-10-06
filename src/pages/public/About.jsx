import { instructors } from '../../data/instructors.js';
import { categories } from '../../data/categories.js';
import { programs } from '../../data/programs.js';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function About() {
  const { t } = useLanguage();
  return (
    <PublicPageLayout>
      <header className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />{t('APPRENDRE EN S’AMUSANT')}</p>
          <h1>{t('La curiosité les fait grandir')}</h1>
          <p className="about-lead">{t('Little Explorers crée des espaces où les enfants peuvent imaginer, tester, créer et découvrir à leur rythme.')}</p>
          <a className="button button-purple" href="/activities">{t('Découvrir nos activités')} <span aria-hidden="true">→</span></a>
        </div>
        <div className="about-illustration" role="img" aria-label={t('Un univers créatif pour les petits explorateurs')}>
          <span className="about-orbit about-orbit-one" aria-hidden="true" />
          <span className="about-orbit about-orbit-two" aria-hidden="true" />
          <span className="about-sun" aria-hidden="true">✦</span>
          <span className="about-big-icon" aria-hidden="true">🧭</span>
          <span className="about-sticker about-sticker-one" aria-hidden="true">🎨</span>
          <span className="about-sticker about-sticker-two" aria-hidden="true">🌱</span>
          <span className="about-sticker about-sticker-three" aria-hidden="true">💡</span>
          <span className="about-illustration-note">{t('Imaginer · Essayer · S’émerveiller')}</span>
        </div>
      </header>

      <section className="about-facts" aria-label={t('Little Explorers en quelques repères')}>
        <article><strong>{categories.length}</strong><span>{t('univers à explorer')}</span></article>
        <article><strong>{programs.length}</strong><span>{t('tranches d’âge')}</span></article>
        <article><strong>100%</strong><span>{t('curiosité encouragée')}</span></article>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="eyebrow"><span className="eyebrow-dot" />{t('NOTRE PETITE RECETTE')}</p>
          <h2>{t('Grandir, à sa façon')}</h2>
          <p>{t('Chaque enfant avance à son rythme, avec la joie de découvrir en chemin.')}</p>
        </div>
        <div className="about-value-grid">
          <article className="about-value-card value-create"><span aria-hidden="true">✂️</span><h3>{t('Créer sans limites')}</h3><p>{t('Des idées qui prennent forme avec les mains, les couleurs et beaucoup d’imagination.')}</p></article>
          <article className="about-value-card value-explore"><span aria-hidden="true">🔎</span><h3>{t('Explorer pour comprendre')}</h3><p>{t('On pose des questions, on teste, on observe… et on découvre ensemble.')}</p></article>
          <article className="about-value-card value-grow"><span aria-hidden="true">🌱</span><h3>{t('S’épanouir en confiance')}</h3><p>{t('Un cadre bienveillant où chaque petit progrès compte et où chacun trouve sa place.')}</p></article>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team-heading">
          <div><p className="eyebrow"><span className="eyebrow-dot" />{t('DES PASSIONS À PARTAGER')}</p><h2>{t('Une équipe passionnée')}</h2></div>
          <p>{t('Des univers différents, une même envie : transmettre le plaisir d’apprendre.')}</p>
        </div>
        <div className="about-team-grid">
          {instructors.map((person, index) => (
            <article className={`about-team-card team-${person.color}`} key={person.id}>
              <div className="team-art" aria-hidden="true"><span>{person.icon}</span><i>0{index + 1}</i></div>
              <div className="team-card-copy"><span className="team-label">{t('Son univers')}</span><h3>{person.name}</h3><p>{t(person.specialty)}</p></div>
              <span className="team-card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </PublicPageLayout>
  );
}

export default About;
