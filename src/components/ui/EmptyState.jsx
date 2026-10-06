function EmptyState({ icon = '✦', title, description, action }) {
  return (
    <div className="empty-state">
      <span aria-hidden="true">{icon}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {action}
    </div>
  );
}

export default EmptyState;
