import { useLanguage } from '../../context/LanguageContext.jsx';

function Modal({ open, onClose, labelledBy, children }) {
  const { t } = useLanguage();
  if (!open) return null;

  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="dialog" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        <button className="dialog-close" onClick={onClose} aria-label={t('Fermer')}>×</button>
        {children}
      </section>
    </div>
  );
}

export default Modal;
