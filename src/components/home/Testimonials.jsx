import { useEffect, useState } from 'react';
import { testimonials } from '../../data/testimonials.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  const testimonial = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused || !isVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, isVisible]);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % testimonials.length);

  return (
    <section
      ref={ref}
      className={`testimonial-section section-wrap home-reveal${isVisible ? ' is-visible' : ''}`}
      aria-label={t('LES MOTS DES PARENTS')}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <span className="quote-decoration" aria-hidden="true">“</span>
      <div className="eyebrow"><span className="eyebrow-dot" /> {t('LES MOTS DES PARENTS')}</div>
      <div className="testimonial-content" key={activeIndex} aria-live="polite" aria-atomic="true">
        <blockquote>{t(testimonial.quote)}</blockquote>
        <div className="review-author">
          <div><b>{t(testimonial.author)}</b><span>{t(testimonial.activity)}</span></div>
          <span className="review-stars" aria-label="5 étoiles">★★★★★</span>
        </div>
      </div>
      <div className="testimonial-controls" aria-label={t('Navigation des témoignages')}>
        <button className="testimonial-arrow" type="button" onClick={showPrevious} aria-label={t('Témoignage précédent')}>←</button>
        <div className="review-dots">
          {testimonials.map((item, index) => (
            <button
              className={`review-dot${activeIndex === index ? ' dot-active' : ''}`}
              type="button"
              key={item.author}
              onClick={() => setActiveIndex(index)}
              aria-label={`${t('Afficher le témoignage')} ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
            />
          ))}
        </div>
        <button className="testimonial-arrow" type="button" onClick={showNext} aria-label={t('Témoignage suivant')}>→</button>
      </div>
    </section>
  );
}

export default Testimonials;
