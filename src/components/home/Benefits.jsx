import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

const benefits = [
  ['🧡', 'Encadrement bienveillant', 'Des animateurs passionnés, toujours à l’écoute.'],
  ['🧩', 'Petits groupes', 'Pour que chaque enfant trouve sa place.'],
  ['🌿', 'On apprend en faisant', 'Des activités concrètes et pleines de découvertes.'],
  ['🛡️', 'Un cadre sécurisé', 'Leur bien-être et leur sécurité avant tout.'],
  ['💡', 'Des idées qui grandissent', 'La créativité encouragée, sans jamais être jugée.'],
  ['🌈', 'Chacun son rythme', 'Des ateliers imaginés pour chaque étape de l’enfance.'],
];

function Benefits() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`why-section section-wrap section-space home-reveal${isVisible ? ' is-visible' : ''}`} id="apropos">
      <div className="why-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> {t('LE BONHEUR D’APPRENDRE')}</div>
        <h2>{t('Pourquoi les parents')} <span className="underline-scribble">{t('nous choisissent ?')}</span></h2>
        <p className="why-lead">{t('Parce qu’ici, apprendre ne ressemble jamais à une leçon. C’est une aventure à vivre, à son rythme.')}</p>
        <a className="text-link" href="#contact">{t('En savoir plus sur nous')} <span aria-hidden="true">→</span></a>
      </div>
      <div className="benefits-grid">
        {benefits.map(([icon, title, text]) => (
          <article className="benefit" key={title}><span className="benefit-icon">{icon}</span><div><h3>{t(title)}</h3><p>{t(text)}</p></div></article>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
