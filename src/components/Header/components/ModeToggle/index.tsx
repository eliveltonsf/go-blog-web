"use client";

import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
export default function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = useState(true);

  useEffect(() => {
    mode ? setTheme("dark") : setTheme("light");
  }, [mode, setTheme]);

  return (
    <Button
      className="text-primary bg-card"
      variant="secondary"
      size="icon"
      onClick={() => setMode(!mode)}
    >
      <HiSun className="h-24 w-24 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <HiMoon className="absolute h-24 w-24 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
