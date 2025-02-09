export default function QuickStat({ icon, title, text }) {
  return (
    <div className="quick-stat-element">
      <div className="quick-stat-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
