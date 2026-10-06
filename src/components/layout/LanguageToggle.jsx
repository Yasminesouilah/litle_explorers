import { useLanguage } from '../../context/LanguageContext.jsx';

function LanguageToggle() {
  const { arabic, toggleLanguage, t } = useLanguage();

  return (
    <button className="language-button" onClick={toggleLanguage} aria-label={t(arabic ? 'Switch to French' : 'Passer en arabe')}>
      {arabic ? 'عربي' : 'FR'} <span aria-hidden="true">⌄</span>
    </button>
  );
}

export default LanguageToggle;
