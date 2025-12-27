import type { BackgroundImageProps } from "../types";

export default function BackgroundImage({
  mobileLight,
  desktopLight,
  mobileDark,
  desktopDark,
  className = "",
}: BackgroundImageProps) {
  return (
    <div className={`absolute -z-10 w-full overflow-hidden ${className}`}>
      {/* Light mode */}
      <picture className="dark:hidden">
        <source media="(min-width: 768px)" srcSet={desktopLight} />
        <img
          src={mobileLight}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Dark mode */}
      <picture className="hidden dark:block">
        <source media="(min-width: 768px)" srcSet={desktopDark} />
        <img
          src={mobileDark}
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}
