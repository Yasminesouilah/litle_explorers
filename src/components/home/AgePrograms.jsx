import { programs } from '../../data/programs.js';
import { photo } from '../../utils/images.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function AgePrograms({ onRegister }) {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`programs-section section-wrap section-space home-reveal${isVisible ? ' is-visible' : ''}`} id="programmes">
      <div className="age-banner">
        <span className="age-decoration age-decoration-one" aria-hidden="true">✦</span>
        <span className="age-decoration age-decoration-two" aria-hidden="true">✳</span>
        <span className="age-decoration age-decoration-three" aria-hidden="true">✦</span>
        <div className="age-intro">
          <span className="age-kicker">LITTLE EXPLORERS</span>
          <h2>{t('Des activités joyeuses.')}<br /><span>{t('Des enfants épanouis.')}</span></h2>
          <p>{t('De la création aux grandes découvertes, chaque atelier les aide à grandir en s’amusant.')}</p>
        </div>
        <div className="age-grid">
          {programs.map((group, index) => (
            <article className={`age-card ${group.color}`} key={group.age}>
              <button
                className="age-portrait"
                onClick={() => onRegister('inscription')}
                aria-label={`${t('Découvrir les ateliers')} ${t(group.age)} : ${t(group.title)}`}
              >
                <img src={photo(group.image, 360)} alt="" />
                <span className="age-portrait-icon" aria-hidden="true">{group.icon}</span>
              </button>
              <span className="age-range">{t(group.age)}</span>
              <h3>{t(group.title)}</h3>
              <button className="age-explore" onClick={() => onRegister('inscription')} aria-label={`${t('Inscrire pour les ateliers')} ${t(group.age)}`}>↗</button>
              <span className="age-watermark" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgePrograms;
