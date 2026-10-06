import { testimonials } from '../../data/testimonials.js';
import { photo } from '../../utils/images.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Testimonials() {
  const testimonial = testimonials[0];
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`testimonial-section section-wrap home-reveal${isVisible ? ' is-visible' : ''}`}>
      <span className="quote-decoration">“</span>
      <div className="eyebrow"><span className="eyebrow-dot" /> {t('LES MOTS DES PARENTS')}</div>
      <blockquote>{t(testimonial.quote)}</blockquote>
      <div className="review-author">
        <img src={photo(testimonial.avatar, 100)} alt={`${t('Portrait de')} ${testimonial.author}`} />
        <div><b>{t(testimonial.author)}</b><span>{t(testimonial.activity)}</span></div>
        <span className="review-stars">★★★★★</span>
      </div>
      <div className="review-dots"><span className="dot-active" /><span /><span /></div>
    </section>
  );
}

export default Testimonials;
