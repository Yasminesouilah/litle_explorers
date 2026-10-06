import { useState } from 'react';
import { categories } from '../../data/categories.js';
import { photo } from '../../utils/images.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function CategoryCard({ category, index, activeCategory, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <button
      className={`category-card ${category.color}${activeCategory === category.name ? ' category-selected' : ''}${isHovered ? ' category-hovered' : ''}`}
      onClick={() => onSelect(category.name)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-pressed={activeCategory === category.name}
    >
      <span className="category-number">{String(index + 1).padStart(2, '0')}</span>
      <span
        className="category-image"
        style={isHovered ? { top: 12, left: 12, width: 58, height: 58, borderRadius: '50%' } : undefined}
      >
        <img src={photo(category.image, 500)} alt="" />
      </span>
      <span
        className="category-content"
        style={isHovered ? { opacity: 1, transform: 'translateY(0)' } : undefined}
      >
        <span className="category-icon">{category.icon}</span>
        <span className="category-title">{t(category.name)}</span>
        <span className="category-text">{t(category.text)}</span>
      </span>
      <span className="category-arrow"><span aria-hidden="true">↗</span></span>
    </button>
  );
}

function ActivityCategories({ activeCategory, onSelect }) {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  const groups = [
    { id: 'primary', duplicate: false },
    { id: 'duplicate', duplicate: true },
  ];

  return (
    <section ref={ref} className={`activities-section section-wrap section-space home-reveal${isVisible ? ' is-visible' : ''}`} id="activites">
      <div className="section-heading">
        <div className="eyebrow"><span className="eyebrow-dot" /> {t('ON FAIT QUOI AUJOURD’HUI ?')}</div>
        <h2>{t('Des activités pour')} <span className="underline-scribble">{t('toutes les envies')}</span></h2>
        <p>{t('Chaque enfant a son petit monde. À lui de choisir où l’aventure commence !')}</p>
      </div>
      <div className="category-marquee" aria-label={t('Catégories d’activités')}>
        <div className="category-track">
          {groups.map(({ id, duplicate }) => (
            <div
              className={`category-group${duplicate ? ' category-group-duplicate' : ''}`}
              key={id}
              aria-hidden={duplicate ? 'true' : undefined}
              inert={duplicate}
            >
              {categories.map((category, index) => (
                <CategoryCard
                  category={category}
                  index={index}
                  activeCategory={activeCategory}
                  onSelect={onSelect}
                  key={`${id}-${category.name}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="all-activities"><button className="text-link" onClick={() => onSelect(null)}>{t('Voir toutes les activités')} <span aria-hidden="true">→</span></button></div>
    </section>
  );
}

export default ActivityCategories;
