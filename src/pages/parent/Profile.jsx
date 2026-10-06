import { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout.jsx';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';
import useAuth from '../../hooks/useAuth.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Profile() {
  const { user, login } = useAuth();
  const [saved, setSaved] = useState(false);
  const { t } = useLanguage();
  function submit(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    login({ ...user, name: values.get('name'), email: values.get('email') });
    setSaved(true);
  }
  return <DashboardLayout title="Mon profil"><form className="profile-form" onSubmit={submit}><Input id="profile-name" label={t('Nom')} name="name" defaultValue={user.name} required /><Input id="profile-email" label={t('E-mail')} name="email" type="email" defaultValue={user.email} required /><Button type="submit">{t('Enregistrer')}</Button>{saved && <p role="status">{t('Profil enregistré sur cet appareil.')}</p>}</form></DashboardLayout>;
}

export default Profile;
