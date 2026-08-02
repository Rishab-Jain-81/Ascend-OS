function Card({ children, className = '' }) {
  return (
    <div
      className={`w-full min-h-32 h-auto p-6 bg-(--bg) rounded-xl border border-(--border) text-(--text) ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
