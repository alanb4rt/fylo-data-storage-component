export default function IconMenu() {
  const menu = ["document", "folder", "upload"];

  return (
    <div className="flex gap-4">
      {menu.map((icon) => (
        <button
          key={icon}
          className="bg-[var(--very-dark-blue)] p-4 rounded-lg"
        >
          <img
            src={`./src/assets/images/icon-${icon}.svg`}
            alt={`icon ${icon}`}
          />
        </button>
      ))}
    </div>
  );
}
