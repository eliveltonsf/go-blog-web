"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState(true);

  useEffect(() => {
    mode ? setTheme("dark") : setTheme("light");
  }, [mode, setTheme]);

  return (
    <Button
      className="hidden sm:flex sm:bg-transparent sm:hover:bg-transparent"
      variant="secondary"
      size="icon"
      onClick={() => setMode(!mode)}
    >
      <HiSun className="h-24 w-24 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <HiMoon className="absolute h-24 w-24 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
