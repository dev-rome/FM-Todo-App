import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { TodoItemProps } from "../types";
import Delete from "../assets/images/icon-cross.svg";

export default function TodoItem({
  id,
  title,
  checked,
  onDelete,
  onToggleChange,
}: TodoItemProps & { id: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="group flex items-center justify-between border-t border-(--color-border) p-6 first:border-0"
    >
      <label className="flex flex-1 items-center gap-4 md:gap-6">
        <input
          className="gradient-circle peer h-5 w-5 appearance-none rounded-full border border-(--color-border) md:h-6 md:w-6"
          type="checkbox"
          checked={checked}
          onChange={onToggleChange}
        />
        <span className="text-xs text-(--list-item) peer-checked:line-through peer-checked:opacity-50 md:text-lg lg:cursor-pointer">
          {title}
        </span>
      </label>
      <div className="flex items-center gap-2">
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab touch-none p-2 active:cursor-grabbing"
          aria-label="Drag to reorder"
        >
          <svg
            className="h-4 w-4 text-(--list-item)"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </button>
        <button
          className="lg:hidden lg:cursor-pointer lg:group-hover:block"
          onClick={onDelete}
          aria-label="Delete todo"
        >
          <img className="w-3 md:w-4" src={Delete} alt="" />
        </button>
      </div>
    </li>
  );
}
