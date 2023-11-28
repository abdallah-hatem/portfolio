"use client";

import useTheme from "@/context/useTheme";
import useScrollHeight from "@/hooks/useScrollHeight";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];
  const { scrollThershold } = useScrollHeight();
  const { theme, setTheme } = useTheme();

  function handleClick() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <nav
      className={`bg-[white] dark:bg-dark h-[60px] w-full flex items-center justify-between px-[90px] sticky top-0 ${
        scrollThershold && "shadow-md"
      }`}
    >
      <a href="#home">
        <div className="text-xl">Logo</div>
      </a>
      <div className="flex items-center">
        <ul className="flex">
          {links.map((el, index) => (
            <a href={el.href} key={index}>
              <li
                className="ml-[15px] text-xl hover:text-secondary"
                key={index}
              >
                {el.title}
              </li>
            </a>
          ))}
        </ul>
        <button
          onClick={handleClick}
          className="ml-[15px] flex justify-center items-center cursor-pointer text-xl hover:text-secondary"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
}
