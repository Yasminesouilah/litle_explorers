import Button from '../ui/Button.jsx';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function CallToAction({ onRegister }) {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section ref={ref} className={`final-cta section-wrap home-reveal${isVisible ? ' is-visible' : ''}`} id="contact">
      <div className="cta-spark cta-spark-one">✳</div><div className="cta-spark cta-spark-two">✦</div>
      <div className="cta-illustration" aria-hidden="true"><span>🧭</span><span>✦</span><span>🌱</span></div>
      <div>
        <div className="eyebrow"><span className="eyebrow-dot" /> {t('À VOUS DE JOUER !')}</div>
        <h2>{t('Prêt à découvrir son')}<br />{t('prochain')} <span>{t('talent ?')}</span></h2>
        <p>{t('Leur prochaine grande idée commence par un petit oui.')}</p>
      </div>
      <Button className="cta-button" onClick={() => onRegister('inscription')}>{t('Inscrire mon enfant')} <span aria-hidden="true">→</span></Button>
    </section>
  );
}

export default CallToAction;
