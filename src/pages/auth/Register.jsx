import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth.js';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import LanguageToggle from '../../components/layout/LanguageToggle.jsx';

function Register() {
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('password') !== data.get('confirmPassword')) {
      setError(t('Les mots de passe ne correspondent pas.'));
      return;
    }
    login({ id: crypto.randomUUID(), name: data.get('name'), email: data.get('email'), role: 'PARENT', children: [] });
    navigate('/parent');
  }

  return <main className="auth-page"><div className="auth-top"><Link className="brand" to="/">✦ <span className="brand-name">little<span>explorers</span></span></Link><LanguageToggle /></div><section className="auth-card"><p className="eyebrow">{t('BIENVENUE DANS L’AVENTURE')}</p><h1>{t('Créer un compte')}</h1><form className="dialog-form" onSubmit={handleSubmit}><Input id="register-name" label={t('Votre nom')} name="name" autoComplete="name" required /><Input id="register-email" label={t('E-mail')} name="email" type="email" autoComplete="email" required /><Input id="register-password" label={t('Mot de passe')} name="password" type="password" autoComplete="new-password" minLength="8" required /><Input id="register-confirm" label={t('Confirmer le mot de passe')} name="confirmPassword" type="password" autoComplete="new-password" minLength="8" required /><Button type="submit">{t('Créer mon compte')}</Button></form>{error && <p className="form-error" role="alert">{error}</p>}<p>{t('Déjà inscrit·e ?')} <Link to="/login">{t('Se connecter')}</Link></p><small>{t('Prototype local : les données restent dans ce navigateur.')}</small></section></main>;
}

export default Register;
