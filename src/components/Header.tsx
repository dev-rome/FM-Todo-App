import { useTheme } from "../hooks/useTheme";
import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between px-6 pt-12 md:mx-auto md:max-w-[540px]">
      <p className="text-2xl font-bold tracking-[0.3em] text-white">TODO</p>
      <button className="lg:cursor-pointer" onClick={toggleTheme}>
        <img
          className="w-[19px] md:w-[26px]"
          src={theme === "dark" ? Sun : Moon}
          alt={theme === "dark" ? "sun icon" : "moon icon"}
          fetchPriority="high"
        />
      </button>
    </header>
  );
}
