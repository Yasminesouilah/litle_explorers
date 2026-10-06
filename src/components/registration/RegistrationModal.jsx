import { useState } from 'react';
import { AGE_RANGES } from '../../config/constants.js';
import Input from '../ui/Input.jsx';
import Modal from '../ui/Modal.jsx';
import Select from '../ui/Select.jsx';
import Button from '../ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function RegistrationModal({ type, onClose }) {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  const isCamp = type === 'camp';
  const isNewsletter = type === 'newsletter';

  return (
    <Modal open={Boolean(type)} onClose={onClose} labelledBy="dialog-title">
      {sent ? (
        <div className="dialog-success">
          <span>✦</span><h2 id="dialog-title">{t('Merci, c’est noté !')}</h2>
          <p>{t('Notre équipe revient vers vous très vite pour préparer la prochaine aventure.')}</p>
          <Button variant="purple" onClick={onClose}>{t('À très bientôt !')}</Button>
        </div>
      ) : (
        <>
          <div className="eyebrow"><span className="eyebrow-dot" /> {t(isCamp ? 'CAP SUR L’AVENTURE' : isNewsletter ? 'UN PEU DE NOUS DANS VOTRE BOÎTE MAIL' : 'ON SE RENCONTRE ?')}</div>
          <h2 id="dialog-title">{t(isCamp ? 'Le programme des vacances' : isNewsletter ? 'Les bonnes nouvelles' : 'Et si on explorait ensemble ?')}</h2>
          <p>{t(isCamp ? 'Laissez-nous vos coordonnées et nous vous envoyons tous les détails du Summer Adventure !' : isNewsletter ? 'Inscrivez-vous à notre newsletter pour recevoir nos prochains ateliers.' : 'Dites-nous comment vous joindre, notre équipe vous aidera à trouver l’atelier parfait.')}</p>
          <form className="dialog-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            {!isNewsletter && <Input id="registration-name" label={t('Votre nom')} name="name" autoComplete="name" placeholder={t('Ex. Sarah Benali')} required />}
            <Input id="registration-email" label={t('Votre e-mail')} name="email" type="email" autoComplete="email" placeholder={t('bonjour@exemple.com')} required />
            {!isNewsletter && (
              <Select id="registration-age" label={t('Âge de votre enfant')} name="age" defaultValue="">
                <option value="" disabled>{t('Choisir une tranche d’âge')}</option>
                {AGE_RANGES.map((range) => <option key={range} value={range}>{t(range)}</option>)}
              </Select>
            )}
            <Button className="dialog-submit" type="submit">{t(isNewsletter ? 'Je m’inscris' : 'Être recontacté(e)')} <span aria-hidden="true">→</span></Button>
          </form>
          <span className="dialog-note">{t('Sans engagement · Vos informations restent confidentielles')}</span>
        </>
      )}
    </Modal>
  );
}

export default RegistrationModal;
