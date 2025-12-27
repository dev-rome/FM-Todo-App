import type { TodoItemProps } from "../types";
import Delete from "../assets/images/icon-cross.svg";

export default function TodoItem({
  title,
  checked,
  onDelete,
  onToggleChange,
}: TodoItemProps) {
  return (
    <li className="group flex items-center justify-between border-t border-(--color-border) p-6 first:border-0 last:border-b">
      <label className="flex items-center gap-4 md:gap-6">
        <input
          className="gradient-circle"
          type="checkbox"
          checked={checked}
          onChange={onToggleChange}
        />
        <span className="text-xs text-(--list-item) md:text-lg lg:cursor-pointer">
          {title}
        </span>
      </label>
      <button
        className="lg:hidden lg:cursor-pointer lg:group-hover:block"
        onClick={onDelete}
        aria-label="Delete todo"
      >
        <img className="w-3 md:w-4" src={Delete} alt="" />
      </button>
    </li>
  );
}
