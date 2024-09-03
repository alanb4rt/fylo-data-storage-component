import Card from "./Card";
import Progress from "./Progress";

export default function StorageUsage() {
  const storageUsed = 815;
  const storageCapacity = 1000;

  const storagePercentage = (storageUsed / storageCapacity) * 100;
  const storageRemaining = storageCapacity - storageUsed;

  return (
    <Card className="relative w-full">
      <StorageText value={storageUsed} />
      <StorageBar value={storagePercentage} />
      <StorageCapacity value={storageCapacity} />
      <StorageRemaining value={storageRemaining} />
    </Card>
  );
}

function StorageText({ value }) {
  return (
    <p className="text-[var(--grayish-blue)] font-bold mb-4">
      You've used <span className="text-[var(--pale-blue)]">{value} GB</span> of
      your storage
    </p>
  );
}

function StorageBar({ value }) {
  return <Progress value={value} />;
}

function StorageCapacity({ value }) {
  return (
    <div className="flex justify-between text-[var(--pale-blue)] font-bold mt-2">
      <span>0 GB</span>
      <span>{value} GB</span>
    </div>
  );
}

function StorageRemaining({ value }) {
  return (
    <div
      id="storage-remaining"
      className="absolute -top-12 right-12 bg-white px-6 py-4 rounded-lg rounded-br-none font-bold flex items-center"
    >
      <span className="text-4xl mr-2 text-[var(--very-dark-blue)]">
        {value}
      </span>
      <span className="text-[var(--grayish-blue)]">GB LEFT</span>
    </div>
  );
}
