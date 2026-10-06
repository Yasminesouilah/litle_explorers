import { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout.jsx';
import ChildCard from '../../components/children/ChildCard.jsx';
import ChildForm from '../../components/children/ChildForm.jsx';
import Button from '../../components/ui/Button.jsx';
import Modal from '../../components/ui/Modal.jsx';
import EmptyState from '../../components/ui/EmptyState.jsx';
import useChildren from '../../hooks/useChildren.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Children() {
  const { children, addChild, updateChild, removeChild } = useChildren();
  const [editing, setEditing] = useState(undefined);
  const { t } = useLanguage();

  function saveChild(values) {
    const child = { name: values.name.trim(), age: Number(values.age), activities: 0 };
    if (editing?.id) updateChild(editing.id, child);
    else addChild(child);
    setEditing(undefined);
  }

  return (
    <DashboardLayout title="Mes enfants">
      <div className="dashboard-toolbar"><p>{t('Gérez les profils et les activités de vos enfants.')}</p><Button onClick={() => setEditing(null)}>+ {t('Ajouter un enfant')}</Button></div>
      {children.length ? <div className="dashboard-card-grid">{children.map((child) => <ChildCard key={child.id} child={child} onEdit={setEditing} onRemove={removeChild} />)}</div> : <EmptyState title={t('Ajoutez votre premier enfant')} description={t('Créez un profil pour découvrir les activités adaptées.')} action={<Button onClick={() => setEditing(null)}>{t('Ajouter un enfant')}</Button>} />}
      <Modal open={editing !== undefined} onClose={() => setEditing(undefined)} labelledBy="child-form-title"><h2 id="child-form-title">{t(editing?.id ? 'Modifier le profil' : 'Ajouter un enfant')}</h2><ChildForm child={editing} onSubmit={saveChild} onCancel={() => setEditing(undefined)} /></Modal>
    </DashboardLayout>
  );
}

export default Children;
