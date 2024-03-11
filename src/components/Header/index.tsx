import Image from "next/image";
import Link from "next/link";
import { ImNewspaper } from "react-icons/im";
import Menu from "./components/Menu";
import ModeToggle from "./components/ModeToggle";
export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-64 z-50 bg-background fixed px-20 sm:px-[11.2rem]">
      <div className="flex w-auto">
        <Link
          href="/"
          className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        >
          <Image
            src="/assets/logoBlack.svg"
            width={120}
            height={30}
            alt="Logo"
          />
        </Link>

        <Link
          href="/"
          className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        >
          <Image src="/assets/logo.svg" width={120} height={30} alt="Logo" />
        </Link>
        <Menu className="ml-32 hidden sm:flex" />
      </div>

      <Link href="/feed" className="sm:hidden">
        <ImNewspaper size={32} className="text-primary" />
      </Link>

      <ModeToggle />
    </header>
  );
}
