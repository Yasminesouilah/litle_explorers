import { gallery } from '../../data/gallery.js';
import { photo } from '../../utils/images.js';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Gallery() {
  const { t } = useLanguage();
  return (
    <PublicPageLayout>
      <header className="listing-hero"><p className="eyebrow">{t('DES SOUVENIRS EN COULEURS')}</p><h1>{t('La galerie des explorateurs')}</h1><p>{t('Un aperçu des activités et ateliers Little Explorers.')}</p></header>
      <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-tile tile-${index + 1}`} key={item.label}><img src={photo(item.image, 800)} alt={t(item.label)} /><figcaption className="gallery-caption">{t(item.label)}</figcaption></figure>)}</div>
    </PublicPageLayout>
  );
}

export default Gallery;
