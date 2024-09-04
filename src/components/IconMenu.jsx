import { getImageURL } from "../utils/getImageURL";

export default function IconMenu() {
  const menu = ["document", "folder", "upload"];

  return (
    <div className="flex gap-4">
      {menu.map((icon) => (
        <button
          key={icon}
          className="grid place-content-center bg-[var(--very-dark-blue)] p-3 rounded-lg size-14"
        >
          <img
            className="w-full"
            src={getImageURL(`icon-${icon}.svg`)}
            alt={`icon ${icon}`}
          />
        </button>
      ))}
    </div>
  );
}
