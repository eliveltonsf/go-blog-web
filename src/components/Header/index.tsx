import React from "react";
import Menu from "./components/Menu";
import { HiSun, HiMoon } from "react-icons/hi";
import ModeToggle from "./components/ModeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-64 px-32">
      <div className="flex w-auto">
        <Image
          src="/assets/logoBlack.svg"
          width={120}
          height={30}
          alt="Logo"
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Image
          src="/assets/logo.svg"
          width={120}
          height={30}
          alt="Logo"
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </div>

      <Menu />

      <ModeToggle />
    </header>
  );
}
