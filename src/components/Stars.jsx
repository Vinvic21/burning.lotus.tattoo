export default function Stars({ n }) {
  return (
    <span className="stars">
      {"\u2605".repeat(n)}
      {"\u2606".repeat(5 - n)}
    </span>
  );
}
