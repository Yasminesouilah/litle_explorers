import { photo } from '../../utils/images.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Hero({ arabic }) {
  const { t } = useLanguage();
  return (
    <section className="hero section-wrap" id="accueil">
      <span className="spark spark-one">✳</span><span className="spark spark-two">✦</span><span className="spark spark-three">✳</span>
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> {arabic ? 'هنا تبدأ المغامرة' : 'LEUR CURIOSITÉ N’A PAS DE LIMITES'}</div>
        <h1>{arabic ? <>هنا يتعلّم الأطفال<br />وهم <span className="word-rainbow">يستمتعون!</span></> : <>Ici, les enfants<br />apprennent en<br /><span className="word-rainbow">s’amusant.</span> <span className="doodle-heart">♡</span></>}</h1>
        <p className="hero-description">{arabic ? 'ورشات ممتعة لاكتشاف مواهبهم وتنمية فضولهم في بيئة آمنة.' : 'Des ateliers créatifs, scientifiques et sportifs pour éveiller leur curiosité, révéler leurs talents et leur donner le goût de découvrir.'}</p>
        <div className="hero-actions">
          <a className="button button-yellow" href="#activites">{arabic ? 'اكتشفوا أنشطتنا' : 'Découvrir nos activités'} <span aria-hidden="true">→</span></a>
          <a className="button button-outline" href="#vacances">{arabic ? 'عطلنا الصيفية' : 'Voir les vacances'} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true">
            {['photo-1503454537195-1dcabb73ffb9', 'photo-1516627145497-ae6968895b74', 'photo-1503919005314-30d93d07d823'].map((id) => <img src={photo(id, 80)} key={id} alt="" />)}
          </div>
          <div><div className="proof-stars">★★★★★ <span>4.9/5</span></div><p>{arabic ? 'عائلة المستكشفين الصغار تكبر!' : t('La petite tribu des curieux grandit !')}</p></div>
        </div>
      </div>
      <div className="hero-art" aria-label={arabic ? 'أطفال يبدعون ويكتشفون ويلعبون' : t("Enfants qui créent, expérimentent et s'amusent")}>
        <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
        <div className="hero-photo hero-photo-main"><img src={photo('photo-1503454537195-1dcabb73ffb9')} alt={arabic ? 'طفلة تركّز في نشاط إبداعي' : t('Une enfant concentrée pendant une activité créative')} /></div>
        <div className="hero-photo hero-photo-top"><img src={photo('photo-1581091226825-a6a2a5aee158')} alt={arabic ? 'مستكشفة صغيرة تكتشف التكنولوجيا' : t('Jeune exploratrice qui découvre la technologie')} /></div>
        <div className="hero-photo hero-photo-bottom"><img src={photo('photo-1516627145497-ae6968895b74')} alt={arabic ? 'أطفال يستمتعون معاً' : t("Des enfants qui s'amusent ensemble")} /></div>
        <div className="floating-note note-top">{arabic ? <>نتعلّم<br />باللعب!</> : <>{t('On apprend')}<br />{t('en jouant !')}</>} <span>✳</span></div>
        <div className="floating-note note-side">{arabic ? <>أيدٍ صغيرة،<br />أفكار كبيرة</> : <>{t('Petites mains,')}<br />{t('grandes idées')}</>} <span>♡</span></div>
        <div className="hero-sticker sticker-sun">☀</div><div className="hero-sticker sticker-flower">✿</div>
        <div className="hero-sticker sticker-star">✦</div><span className="scribble scribble-a">〰</span>
      </div>
      <div className="hero-bottom-note"><span>↓</span> {arabic ? 'مرّروا لاكتشاف المزيد' : t('Faites défiler pour explorer')} <span>↓</span></div>
    </section>
  );
}

export default Hero;
