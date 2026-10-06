import Card from '../ui/Card.jsx';

function StatsCard({ label, value, icon = '✦' }) {
  return <Card className="stats-card"><span aria-hidden="true">{icon}</span><div><p>{label}</p><strong>{value}</strong></div></Card>;
}

export default StatsCard;
