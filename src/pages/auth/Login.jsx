import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth.js';
import { mockUsers } from '../../data/mockUsers.js';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';
import { useLanguage } from '../../context/LanguageContext.jsx';
import LanguageToggle from '../../components/layout/LanguageToggle.jsx';

function Login() {
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  function handleSubmit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email');
    const user = mockUsers.find((item) => item.email === email);
    if (!user) {
      setError(t('Compte de démonstration introuvable. Essayez parent@example.com.'));
      return;
    }
    login(user);
    navigate('/parent');
  }

  return <main className="auth-page"><div className="auth-top"><Link className="brand" to="/">✦ <span className="brand-name">little<span>explorers</span></span></Link><LanguageToggle /></div><section className="auth-card"><p className="eyebrow">{t('HEUREUX DE VOUS REVOIR')}</p><h1>{t('Connexion')}</h1><p>{t('Accédez à votre espace parent.')}</p><form className="dialog-form" onSubmit={handleSubmit}><Input id="login-email" label={t('E-mail')} name="email" type="email" autoComplete="email" required /><Input id="login-password" label={t('Mot de passe')} name="password" type="password" autoComplete="current-password" required /><Button type="submit">{t('Se connecter')}</Button></form>{error && <p className="form-error" role="alert">{error}</p>}<p>{t('Pas encore de compte ?')} <Link to="/register">{t('Créer un compte')}</Link></p><small>{t('Démo : parent@example.com ou instructor@example.com')}</small></section></main>;
}

export default Login;
