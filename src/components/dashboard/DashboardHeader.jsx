function DashboardHeader({ title, description }) {
  return <header className="dashboard-header"><div><h1>{title}</h1>{description && <p>{description}</p>}</div></header>;
}

export default DashboardHeader;
