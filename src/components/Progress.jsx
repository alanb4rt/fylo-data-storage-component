export default function Progress({ value }) {
  return (
    <div
      className={`overflow-hidden h-5 w-full bg-[var(--very-dark-blue)] rounded-full p-[2px]`}
    >
      <div
        className="relative flex flex-row items-center h-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full"
        style={{ width: `${value}%` }}
      >
        <div className="absolute right-[2px] h-4/5 aspect-square bg-white rounded-full" />
      </div>
    </div>
  );
}
