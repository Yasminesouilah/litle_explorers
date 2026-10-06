import { featuredCamp } from '../../data/camps.js';
import { photo } from '../../utils/images.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function VacationBanner({ onRegister }) {
  const camp = featuredCamp;
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`camp-section section-wrap home-reveal${isVisible ? ' is-visible' : ''}`} id="vacances">
      <div className="camp-card">
        <div className="camp-image"><img src={photo(camp.image)} alt={t('Des enfants en pleine aventure dans la nature')} /><span className="image-label">{t('LES VACANCES, VERSION EXPLORATEURS !')}</span></div>
        <div className="camp-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> {t('L’ÉTÉ S’ANNONCE GÉNIAL')}</div>
          <h2>{t('Les vacances commencent')} <span>{t('ici !')}</span></h2>
          <p className="camp-intro">{t('Deux semaines de découvertes, de copains et de souvenirs à raconter.')}</p>
          <div className="camp-facts">
            <div><span className="fact-icon">📅</span><span><b>{t(camp.duration)}</b><small>{t(camp.dates)}</small></span></div>
            <div><span className="fact-icon">🧒</span><span><b>{t(camp.ages)}</b><small>{t('Petits groupes')}</small></span></div>
            <div><span className="fact-icon">📍</span><span><b>{t(camp.location)}</b><small>{t('En plein air & en atelier')}</small></span></div>
            <div><span className="fact-icon">☀️</span><span><b>{t(camp.hours)}</b><small>{t('Une journée bien remplie')}</small></span></div>
          </div>
          <div className="camp-footer">
            <span><strong>{camp.price}</strong> DA <small>{t('/ les 2 semaines')}</small></span>
            <button className="button button-purple" onClick={() => onRegister('camp')}>{t('Voir le programme')} <span aria-hidden="true">→</span></button>
          </div>
        </div>
        <span className="camp-sun">☀</span><span className="camp-spark">✦</span>
      </div>
    </section>
  );
}

export default VacationBanner;
