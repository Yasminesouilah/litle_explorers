import { useState } from 'react';
import PublicPageLayout from '../../components/layout/PublicPageLayout.jsx';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();
  return (
    <PublicPageLayout>
      <header className="listing-hero"><p className="eyebrow">{t('ON EST LÀ POUR VOUS')}</p><h1>{t('Parlons de vos explorateurs')}</h1><p>{t('Une question sur les ateliers ? Écrivez-nous, nous serons ravis de vous aider.')}</p></header>
      {sent ? <p className="form-success" role="status">{t('Merci pour votre message. Notre équipe vous répondra bientôt.')}</p> : (
        <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <Input id="contact-name" label={t('Votre nom')} name="name" autoComplete="name" required />
          <Input id="contact-email" label={t('Votre e-mail')} name="email" type="email" autoComplete="email" required />
          <label htmlFor="contact-message">{t('Votre message')}<textarea id="contact-message" name="message" rows="5" required /></label>
          <Button type="submit">{t('Envoyer le message')} →</Button>
        </form>
      )}
    </PublicPageLayout>
  );
}

export default Contact;
