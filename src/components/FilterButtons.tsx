import type { FilterButtonsProps } from "../types";

export default function FilterButtons({
  filter,
  onFilterChange,
}: FilterButtonsProps) {
  const filters: Array<{
    label: string;
    value: "all" | "active" | "completed";
  }> = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <>
      {filters.map(({ label, value }) => (
        <button
          key={value}
          className={`footer-button ${filter === value ? "active" : ""}`}
          onClick={() => onFilterChange(value)}
        >
          {label}
        </button>
      ))}
    </>
  );
}
