import { gallery } from '../../data/gallery.js';
import { photo } from '../../utils/images.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function GalleryPreview({ onRegister }) {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`gallery-section section-wrap section-space home-reveal${isVisible ? ' is-visible' : ''}`}>
      <div className="section-heading gallery-heading">
        <div className="eyebrow"><span className="eyebrow-dot" /> {t('DES SOUVENIRS EN COULEURS')}</div>
        <h2>{t('Les petits moments')} <span className="underline-scribble">{t('deviennent grands')}</span></h2>
        <p>{t('Un aperçu de leurs aventures chez Little Explorers.')}</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <button className={`gallery-tile tile-${index + 1}`} key={item.label} onClick={() => onRegister('inscription')} aria-label={`${t(item.label)} — ${t('découvrir les activités')}`}>
            <img src={photo(item.image, 600)} alt={t(item.label)} /><span className="gallery-caption">{t(item.label)} <span aria-hidden="true">↗</span></span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default GalleryPreview;
