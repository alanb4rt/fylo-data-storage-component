export default function Card({ children, className }) {
  return (
    <div
      className={`h-fit bg-[var(--dark-blue)] rounded-lg shadow-lg p-12 ${className}`}
    >
      {children}
    </div>
  );
}
